import { createMetadata } from '@/lib/metadata'
import LeistungenContent from './LeistungenContent'

export const metadata = createMetadata({
  title: 'Leistungen',
  description:
    'Unsere Leistungspakete für Rädereinlagerung: Standard, Komfort und Premium Service mit Hol- und Bringservice in der Region Stuttgart.',
  path: '/leistungen',
})

export default function LeistungenPage() {
  return <LeistungenContent />
}
