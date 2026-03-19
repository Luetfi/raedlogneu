import { createMetadata } from '@/lib/metadata'
import ReosContent from './ReosContent'

export const metadata = createMetadata({
  title: 'REOS – Räder Einlagerungs Online System',
  description:
    'REOS — unsere Onlinedatenbank für schnelle Radsatzanforderung. 24h online, einfache Bedienung, statistische Auswertung.',
  path: '/reos',
})

export default function ReosPage() {
  return <ReosContent />
}
