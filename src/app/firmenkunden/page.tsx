import { createMetadata } from '@/lib/metadata'
import FirmenkundenContent from './FirmenkundenContent'

export const metadata = createMetadata({
  title: 'Firmenkunden',
  description:
    'RÄDLOG-Center — Ihr kompetenter Partner für Rädereinlagerung und Reifenservice für Autohäuser, Fuhrparks und Autovermietungen.',
  path: '/firmenkunden',
})

export default function FirmenkundenPage() {
  return <FirmenkundenContent />
}
