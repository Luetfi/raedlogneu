import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema, getLocationSchemas, getWebPageSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import KontaktContent from './KontaktContent'

export const metadata = createMetadata({
  title: 'Kontakt',
  description:
    'Kontaktieren Sie RÄDLOG-Center GmbH in Stuttgart. Telefon, E-Mail oder Kontaktformular. 3 Standorte in der Region Stuttgart.',
  path: '/kontakt',
})

export default function KontaktPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'Kontakt', path: '/kontakt' },
  ])

  return (
    <>
      <JsonLd
        data={[
          breadcrumb,
          ...getLocationSchemas(),
          getWebPageSchema({
            name: 'Kontakt',
            description:
              'Kontaktdaten und die drei Standorte der RÄDLOG-Center GmbH in Stuttgart und Remseck.',
            path: '/kontakt',
          }),
        ]}
      />
      <KontaktContent />
    </>
  )
}
