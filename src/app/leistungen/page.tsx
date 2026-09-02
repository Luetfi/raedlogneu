import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import LeistungenContent from './LeistungenContent'

export const metadata = createMetadata({
  title: 'Leistungen',
  description:
    'Unsere Leistungspakete für Rädereinlagerung: Standard, Eco, Komfort und Premium Service mit Hol- und Bringservice in der Region Stuttgart.',
  path: '/leistungen',
})

export default function LeistungenPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'Leistungen', path: '/leistungen' },
  ])

  const services = [
    getServiceSchema({
      name: 'Standard-Service – Rädereinlagerung',
      description:
        'Rädereinlagerung mit Hol- und Bringservice, Reinigung und Einlagerung von Kompletträdern bzw. Reifen im Raum Stuttgart.',
    }),
    getServiceSchema({
      name: 'Eco-Service – Einlagerung von Neurädern',
      description:
        'Anlieferung der Neuräder durch den Auftraggeber, Kommissionierung durch RÄDLOG und Einlagerung im Raum Stuttgart.',
    }),
    getServiceSchema({
      name: 'Komfort-Service – Rädereinlagerung',
      description:
        'Rädereinlagerung inklusive digitaler Erfassung sämtlicher Reifen- und Felgendaten sowie Zustandsbewertung und Dokumentation.',
    }),
    getServiceSchema({
      name: 'Premium-Service – Rädereinlagerung',
      description:
        'Komplett-Service mit digitaler Datenerfassung, Zustandsbewertung, Dokumentation und Wuchten von 4 Laufrädern mit 3D-Technologie.',
    }),
  ]

  return (
    <>
      <JsonLd data={[breadcrumb, ...services]} />
      <LeistungenContent />
    </>
  )
}
