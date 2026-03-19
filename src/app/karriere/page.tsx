import { createMetadata } from '@/lib/metadata'
import KarriereContent from './KarriereContent'

export const metadata = createMetadata({
  title: 'Karriere',
  description:
    'Karriere bei RÄDLOG-Center GmbH — Werden Sie Teil unseres Teams in Stuttgart. Initiativbewerbung mit Lebenslauf-Upload.',
  path: '/karriere',
})

export default function KarrierePage() {
  return <KarriereContent />
}
