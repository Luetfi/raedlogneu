import { createMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/shared/JsonLd'
import KarriereContent from './KarriereContent'

export const metadata = createMetadata({
  title: 'Karriere',
  description:
    'Karriere bei RÄDLOG-Center GmbH — Werden Sie Teil unseres Teams in Stuttgart. Initiativbewerbung mit Lebenslauf-Upload.',
  path: '/karriere',
})

export default function KarrierePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Startseite', path: '' },
    { name: 'Karriere', path: '/karriere' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      <KarriereContent />
    </>
  )
}
