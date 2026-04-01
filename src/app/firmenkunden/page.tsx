import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema, getFaqSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import FirmenkundenContent from './FirmenkundenContent'

export const metadata = createMetadata({
  title: 'Firmenkunden',
  description:
    'RÄDLOG-Center — Ihr kompetenter Partner für Rädereinlagerung und Reifenservice für Autohäuser, Fuhrparks und Autovermietungen.',
  path: '/firmenkunden',
})

const faqItems = [
  {
    question: 'Was kostet die Rädereinlagerung bei RÄDLOG?',
    answer:
      'Die Rädereinlagerung beginnt ab 29,50 € pro Radsatz (zzgl. MwSt.), abhängig von Stückzahl und gewähltem Leistungspaket (Standard, Komfort oder Premium).',
  },
  {
    question: 'Wie funktioniert der Hol- und Bringservice?',
    answer:
      'Wir holen Ihre Radsätze direkt bei Ihnen ab und liefern sie tagesgenau zurück. Bei Faxabruf bis 18 Uhr erfolgt die Anlieferung am nächsten Werktag bis 12 Uhr.',
  },
  {
    question: 'Welche Leistungspakete gibt es?',
    answer:
      'Wir bieten drei Pakete: Standard (Einlagerung & Barcode-Erfassung), Komfort (inkl. Reinigung & Wuchten) und Premium (Komplett-Service mit REOS-Onlinezugang und Hol-/Bringservice).',
  },
  {
    question: 'Wie fordere ich einen Radsatz über REOS an?',
    answer:
      'Über unser Online-System REOS können Sie 24/7 Radsätze anfordern. In nur zwei Klicks wählen Sie den Radsatz und das Lieferdatum — die Anlieferung erfolgt tagesgenau.',
  },
  {
    question: 'In welchen Regionen ist RÄDLOG aktiv?',
    answer:
      'Wir bedienen den gesamten Raum Stuttgart, Ludwigsburg, Waiblingen, Böblingen, Sindelfingen und Leonberg mit drei Standorten in Stuttgart-Sommerrain und Remseck-Aldingen.',
  },
  {
    question: 'Sind die eingelagerten Radsätze versichert?',
    answer:
      'Ja, alle bei uns eingelagerten Radsätze sind gegen Marke, Diebstahl und Transportschäden versichert.',
  },
]

export default function FirmenkundenPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'Firmenkunden', path: '/firmenkunden' },
  ])

  const faq = getFaqSchema(faqItems)

  return (
    <>
      <JsonLd data={[breadcrumb, faq]} />
      <FirmenkundenContent />
    </>
  )
}
