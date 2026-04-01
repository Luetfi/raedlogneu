import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import ReosContent from './ReosContent'

export const metadata = createMetadata({
  title: 'REOS – Räder Einlagerungs Online System',
  description:
    'REOS — unsere Onlinedatenbank für schnelle Radsatzanforderung. 24h online, einfache Bedienung, statistische Auswertung.',
  path: '/reos',
})

export default function ReosPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'REOS', path: '/reos' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      <ReosContent />
    </>
  )
}
