/**
 * Videooptimierung fuer public/.
 *
 * Alle Hintergrundvideos laufen stummgeschaltet hinter einem 60-%-Overlay —
 * Tonspur und hohe Bitrate sind dort nutzlos. Das Skript encodiert sie mit
 * CRF-basiertem H.264 neu, entfernt die Tonspur und legt den Moov-Atom nach
 * vorn (faststart), damit die Wiedergabe ohne vollstaendigen Download startet.
 *
 * Zusaetzlich wird je Video ein WebP-Poster erzeugt, das als erster Frame
 * angezeigt wird, solange das Video laedt — sonst bleibt der Hero schwarz und
 * der LCP-Wert haengt an der Videogroesse.
 *
 * Aufruf:  node scripts/optimize-videos.mjs [--dry]
 */

import { readdir, stat, rename, unlink } from 'node:fs/promises'
import { join, extname, basename, dirname } from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const run = promisify(execFile)
const DRY = process.argv.includes('--dry')

const DIRS = ['public/videos', 'public/images']
// Zielqualitaet: hinter dem Overlay ist CRF 30 optisch nicht von CRF 23 zu
// unterscheiden, spart aber rund zwei Drittel der Dateigroesse.
const CRF = '30'
const MAX_WIDTH = 1280

async function ffmpeg(args) {
  await run('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args])
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)}K`.padStart(6)
}

let savedTotal = 0

for (const dir of DIRS) {
  let entries
  try {
    entries = await readdir(dir)
  } catch {
    continue
  }

  for (const file of entries) {
    if (extname(file).toLowerCase() !== '.mp4') continue

    const path = join(dir, file)
    const before = (await stat(path)).size
    const tmp = join(dir, `.tmp-${file}`)
    const poster = join(dir, `${basename(file, '.mp4')}-poster.webp`)

    if (DRY) {
      console.log(`${formatKb(before)}  ${path} (dry run)`)
      continue
    }

    await ffmpeg([
      '-i', path,
      '-an',
      '-vf', `scale='min(${MAX_WIDTH},iw)':-2`,
      '-c:v', 'libx264',
      '-crf', CRF,
      '-preset', 'slow',
      '-profile:v', 'high',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      tmp,
    ])

    // Poster aus der ersten Sekunde — dort ist das Bild bereits stabil.
    await ffmpeg([
      '-i', path,
      '-ss', '00:00:01',
      '-frames:v', '1',
      '-vf', `scale='min(${MAX_WIDTH},iw)':-2`,
      '-quality', '70',
      poster,
    ])

    const after = (await stat(tmp)).size
    if (after >= before) {
      await unlink(tmp)
      console.log(`${formatKb(before)}  ${path} — uebersprungen (nicht kleiner)`)
      continue
    }

    await unlink(path)
    await rename(tmp, path)

    savedTotal += before - after
    console.log(
      `${formatKb(before)} -> ${formatKb(after)}  ` +
      `(${(((before - after) / before) * 100).toFixed(0).padStart(3)}%)  ${path}` +
      `  + Poster ${formatKb((await stat(poster)).size)}`
    )
  }
}

console.log(`\n${(savedTotal / 1024 / 1024).toFixed(2)} MB gespart.`)
