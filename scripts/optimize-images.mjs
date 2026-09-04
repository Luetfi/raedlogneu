/**
 * Bildoptimierung fuer public/.
 *
 * Konvertiert JPEG/PNG nach WebP, re-komprimiert bestehende WebP-Dateien und
 * skaliert Quellbilder auf die tatsaechlich benoetigte Maximalbreite herunter.
 * Ersetzt nur, wenn das Ergebnis kleiner ist als das Original.
 *
 * Aufruf:  node scripts/optimize-images.mjs [--dry]
 */

import { readdir, stat, readFile, writeFile, unlink } from 'node:fs/promises'
import { join, extname, basename, dirname } from 'node:path'
import sharp from 'sharp'

const DRY = process.argv.includes('--dry')
const ROOT = 'public'

/**
 * Regeln pro Verzeichnis: maxWidth begrenzt die Quellaufloesung auf das, was im
 * Layout maximal dargestellt wird (inkl. 2x-Reserve), quality steuert WebP.
 */
const RULES = [
  { match: /^public[\\/]frames[\\/]/, maxWidth: 960, quality: 72, keepOriginal: false },
  { match: /^public[\\/]logos[\\/]/, maxWidth: 400, quality: 82, toWebp: true },
  { match: /^public[\\/]images[\\/]hero\d/, maxWidth: 1920, quality: 74, keepOriginal: false },
  { match: /^public[\\/]images[\\/]reos-step/, maxWidth: 1800, quality: 78, keepOriginal: false },
  { match: /^public[\\/]images[\\/]/, maxWidth: 1600, quality: 78, toWebp: true },
  { match: /^public[\\/]og-image/, maxWidth: 1200, quality: 82, keepOriginal: true },
]

// Diese Dateien bleiben unangetastet: Schema.org/Manifest erwarten hier PNG bzw.
// JPEG, und Google unterstuetzt fuer logo/image-Felder kein WebP zuverlaessig.
const SKIP = new Set([
  join('public', 'images', 'logo.png'),
  join('public', 'og-image.jpg'),
])

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp'])

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else yield path
  }
}

function ruleFor(path) {
  return RULES.find((rule) => rule.match.test(path))
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)}K`.padStart(6)
}

let savedTotal = 0
let touched = 0

for await (const path of walk(ROOT)) {
  const ext = extname(path).toLowerCase()
  if (!IMAGE_EXT.has(ext)) continue
  if (SKIP.has(path)) continue

  const rule = ruleFor(path)
  if (!rule) continue

  const input = await readFile(path)
  const meta = await sharp(input).metadata()

  let pipeline = sharp(input)
  if (meta.width > rule.maxWidth) {
    pipeline = pipeline.resize({ width: rule.maxWidth, withoutEnlargement: true })
  }

  const output = await pipeline
    .webp({ quality: rule.quality, effort: 6, alphaQuality: 90 })
    .toBuffer()

  const target = ext === '.webp'
    ? path
    : join(dirname(path), `${basename(path, ext)}.webp`)

  const originalSize = input.length
  // Nie verschlechtern: kleine Logos mit Alpha werden als WebP teils groesser.
  if (output.length >= originalSize) continue

  const saved = originalSize - output.length
  savedTotal += saved
  touched++

  console.log(
    `${formatKb(originalSize)} -> ${formatKb(output.length)}  ` +
    `(${((saved / originalSize) * 100).toFixed(0).padStart(3)}%)  ${target}`
  )

  if (DRY) continue

  await writeFile(target, output)
  if (target !== path && !rule.keepOriginal) await unlink(path)
}

console.log(
  `\n${touched} Dateien${DRY ? ' (dry run)' : ''}, ` +
  `${(savedTotal / 1024 / 1024).toFixed(2)} MB gespart.`
)
