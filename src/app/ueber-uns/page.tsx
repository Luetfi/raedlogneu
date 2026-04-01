import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import UeberUnsContent from './UeberUnsContent'

export const metadata = createMetadata({
  title: 'Über uns',
  description:
    'Über uns — RÄDLOG-Center GmbH. Lernen Sie das Familienunternehmen, unsere Chronik und unser Führungsteam rund um Jörg Hoffmann in Stuttgart kennen.',
  path: '/ueber-uns',
})

export default function UeberUnsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'Über uns', path: '/ueber-uns' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      <UeberUnsContent />
    </>
  )
}
