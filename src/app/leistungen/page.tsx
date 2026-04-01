import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import LeistungenContent from './LeistungenContent'

export const metadata = createMetadata({
  title: 'Leistungen',
  description:
    'Unsere Leistungspakete für Rädereinlagerung: Standard, Komfort und Premium Service mit Hol- und Bringservice in der Region Stuttgart.',
  path: '/leistungen',
})

export default function LeistungenPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'Leistungen', path: '/leistungen' },
  ])

  const services = [
    getServiceSchema({
      name: 'Standard Paket – Rädereinlagerung',
      description:
        'Rädereinlagerung mit Barcode-Erfassung, Datenerfassung und sicherer Lagerung im Raum Stuttgart.',
    }),
    getServiceSchema({
      name: 'Komfort Paket – Rädereinlagerung',
      description:
        'Rädereinlagerung inklusive Reinigung, Wuchten und tagesgenauer Anlieferung.',
    }),
    getServiceSchema({
      name: 'Premium Paket – Rädereinlagerung',
      description:
        'Komplett-Service mit Reinigung, Wuchten, Hol- und Bringservice sowie REOS-Onlinezugang.',
    }),
  ]

  return (
    <>
      <JsonLd data={[breadcrumb, ...services]} />
      <LeistungenContent />
    </>
  )
}
