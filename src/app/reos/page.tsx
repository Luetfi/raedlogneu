import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema, getReosSchema, getWebPageSchema } from '@/lib/schema'
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
      <JsonLd
        data={[
          breadcrumb,
          getReosSchema(),
          getWebPageSchema({
            name: 'REOS',
            description:
              'REOS — das Räder Einlagerungs Online System der RÄDLOG-Center GmbH für Radsatzanforderung rund um die Uhr.',
            path: '/reos',
          }),
        ]}
      />
      <ReosContent />
    </>
  )
}
