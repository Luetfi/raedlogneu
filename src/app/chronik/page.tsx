import { createMetadata } from '@/lib/metadata'
import ChronikContent from './ChronikContent'

export const metadata = createMetadata({
  title: 'Chronik',
  description:
    'Die Geschichte der RÄDLOG-Center GmbH — von der Gründung 1998 bis heute. Meilensteine unserer Entwicklung.',
  path: '/chronik',
})

export default function ChronikPage() {
  return <ChronikContent />
}
