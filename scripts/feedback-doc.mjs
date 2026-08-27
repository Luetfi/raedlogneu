// Erstellt ein druckbares Feedback-Dokument (PDF) der Live-Website:
// Teil A: Ganzseiten-Screenshots aller Unterseiten (Design-Feedback)
// Teil B: Textskript aller Unterseiten mit Zeilenabstand zum Markieren
//
// Aufruf: node scripts/feedback-doc.mjs [BASE_URL]

import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const BASE_URL = process.argv[2] ?? 'https://raedlogneu.vercel.app'
const OUT_DIR = resolve('feedback')
const DATE = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })

const ROUTES = [
  { path: '/', label: 'Startseite' },
  { path: '/leistungen', label: 'Leistungen' },
  { path: '/firmenkunden', label: 'Firmenkunden' },
  { path: '/reos', label: 'Onlinesystem REOS' },
  { path: '/ueber-uns', label: 'Über uns' },
  { path: '/karriere', label: 'Karriere' },
  { path: '/kontakt', label: 'Kontakt' },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function capture() {
  mkdirSync(OUT_DIR, { recursive: true })
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    locale: 'de-DE',
  })
  // Consent-Banner vorab bestätigen, damit er nicht im Screenshot liegt
  await context.addInitScript(() => {
    localStorage.setItem('raedlog-consent-acknowledged', 'true')
  })

  const results = []
  for (const route of ROUTES) {
    const url = BASE_URL + route.path
    console.log('Erfasse', url)
    const page = await context.newPage()
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
    // Splash-Screen abwarten (1600 ms + 500 ms Fade)
    await sleep(2800)

    // Komplett durchscrollen, damit alle Once-Animationen ausgelöst
    // und Lazy-Inhalte geladen werden
    await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
      let last = -1
      while (true) {
        window.scrollBy(0, 550)
        await sleep(220)
        const y = window.scrollY
        if (y === last) break
        last = y
      }
      await sleep(1000)
      window.scrollTo(0, 0)
    })
    await sleep(1500)

    const file = `${OUT_DIR}/${route.label.replace(/[^a-zA-ZäöüÄÖÜß0-9]+/g, '-')}.jpg`
    await page.screenshot({ path: file, fullPage: true, type: 'jpeg', quality: 85 })

    // Sichtbaren Text der Seite als "Skript" extrahieren
    const text = await page.evaluate(() => {
      const main = document.querySelector('main') ?? document.body
      return main.innerText
    })
    results.push({ ...route, url, file, text })
    await page.close()
  }
  await browser.close()
  return results
}

function esc(s) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function buildHtml(pages) {
  const toc = pages
    .map((p, i) => `<li>Kapitel ${i + 1} – ${esc(p.label)} <span class="muted">(${esc(p.url)})</span></li>`)
    .join('\n')

  const partA = pages
    .map(
      (p, i) => `
  <section class="chapter">
    <h2><span class="chip">Kapitel ${i + 1}</span> ${esc(p.label)}</h2>
    <p class="muted url">${esc(p.url)}</p>
    <img src="${p.file.replaceAll('\\', '/')}" alt="${esc(p.label)}" />
  </section>`
    )
    .join('\n')

  const partB = pages
    .map((p, i) => {
      const lines = p.text
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l, n) => `<tr><td class="num">${n + 1}</td><td class="line">${esc(l)}</td></tr>`)
        .join('\n')
      return `
  <section class="chapter">
    <h2><span class="chip">Text ${i + 1}</span> ${esc(p.label)}</h2>
    <p class="muted url">${esc(p.url)}</p>
    <table class="script">${lines}</table>
  </section>`
    })
    .join('\n')

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; font-size: 10.5pt; }
  .muted { color: #777; }
  h1 { font-size: 26pt; margin-bottom: 4mm; }
  h2 { font-size: 15pt; margin-bottom: 1mm; }
  .chip { background: #1a1a1a; color: #fff; border-radius: 3px; padding: 1px 6px; font-size: 10pt; vertical-align: 2px; }
  .cover { page-break-after: always; padding-top: 30mm; }
  .cover .box { border: 1.5px solid #1a1a1a; border-radius: 4px; padding: 6mm; margin: 8mm 0; }
  .cover ol { margin: 3mm 0 0 6mm; line-height: 1.7; }
  .cover ul { margin: 3mm 0 0 6mm; line-height: 1.7; list-style: none; }
  .divider { page-break-before: always; padding-top: 80mm; text-align: center; }
  .divider h1 { font-size: 22pt; }
  .chapter { page-break-before: always; }
  .chapter .url { margin-bottom: 4mm; font-size: 9pt; }
  .chapter img { width: 165mm; display: block; border: 0.5pt solid #ccc; }
  table.script { border-collapse: collapse; width: 100%; }
  .script .num { color: #aaa; font-size: 8pt; text-align: right; padding-right: 3mm; width: 8mm; vertical-align: top; padding-top: 2.2mm; }
  .script .line { line-height: 2.3; border-bottom: 0.5pt dotted #ddd; padding: 0.8mm 0; }
</style>
</head>
<body>
  <div class="cover">
    <h1>RÄDLOG-Center – Neue Website</h1>
    <p style="font-size: 13pt;">Feedback-Dokument zum Ausdrucken &amp; Markieren</p>
    <p class="muted" style="margin-top: 2mm;">Stand: ${DATE} &nbsp;·&nbsp; Live-Vorschau: ${esc(BASE_URL)}</p>
    <div class="box">
      <strong>So geht's:</strong>
      <ol>
        <li>Dokument ausdrucken (gerne in Farbe, geht aber auch in Graustufen).</li>
        <li>Anmerkungen und Änderungswünsche direkt auf den Seiten markieren –
            im <strong>Teil A (Screenshots)</strong> alles zum Design/Aufbau,
            im <strong>Teil B (Textskript)</strong> alle Textänderungen Zeile für Zeile.</li>
        <li>Markierte Seiten abfotografieren oder einscannen und zurückschicken. Fertig!</li>
      </ol>
    </div>
    <strong>Inhalt:</strong>
    <ul>${toc}</ul>
    <p class="muted" style="margin-top: 8mm; font-size: 9pt;">
      Tipp: Die Seite lebt von Animationen und Bewegung – am besten zusätzlich einmal
      durch die Live-Vorschau am Bildschirm scrollen. Dieses Dokument zeigt den Endzustand
      aller Inhalte. Impressum &amp; Datenschutz sind nicht enthalten.
    </p>
  </div>

  <div class="divider"><h1>Teil A – Screenshots aller Seiten</h1><p class="muted">Anmerkungen zu Design, Aufbau und Bildern bitte direkt daneben notieren.</p></div>
  ${partA}

  <div class="divider"><h1>Teil B – Textskript</h1><p class="muted">Alle Texte der Website Zeile für Zeile – Änderungen bitte direkt in den Zeilen markieren.</p></div>
  ${partB}
</body>
</html>`
}

async function main() {
  const pages = await capture()
  const htmlPath = `${OUT_DIR}/feedback.html`
  writeFileSync(htmlPath, buildHtml(pages), 'utf8')

  console.log('Erzeuge PDF …')
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('file:///' + htmlPath.replaceAll('\\', '/'), { waitUntil: 'networkidle' })
  const pdfPath = `${OUT_DIR}/RAEDLOG-Website-Feedback.pdf`
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: { top: '12mm', bottom: '16mm', left: '13mm', right: '13mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate:
      '<div style="font-size:8pt; color:#999; width:100%; text-align:center;">RÄDLOG-Center Website-Feedback &nbsp;·&nbsp; Seite <span class="pageNumber"></span> von <span class="totalPages"></span></div>',
  })
  await browser.close()
  console.log('Fertig:', pdfPath)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
