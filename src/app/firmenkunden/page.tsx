import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema, getFaqSchema, getWebPageSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import { FIRMENKUNDEN_FAQ } from '@/lib/faq'
import FirmenkundenContent from './FirmenkundenContent'

export const metadata = createMetadata({
  title: 'Firmenkunden',
  description:
    'RÄDLOG-Center — Ihr kompetenter Partner für Rädereinlagerung und Reifenservice für Autohäuser, Fuhrparks und Autovermietungen.',
  path: '/firmenkunden',
})

export default function FirmenkundenPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'Firmenkunden', path: '/firmenkunden' },
  ])

  const faq = getFaqSchema(FIRMENKUNDEN_FAQ)

  return (
    <>
      <JsonLd
        data={[
          breadcrumb,
          faq,
          getWebPageSchema({
            name: 'Firmenkunden',
            description:
              'Rädereinlagerung für Autohäuser, Fuhrparks und Autovermietungen — Ablauf, Vorteile und häufige Fragen.',
            path: '/firmenkunden',
          }),
        ]}
      />
      <FirmenkundenContent />
    </>
  )
}
