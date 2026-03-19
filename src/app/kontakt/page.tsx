import { createMetadata } from '@/lib/metadata'
import KontaktContent from './KontaktContent'

export const metadata = createMetadata({
  title: 'Kontakt',
  description:
    'Kontaktieren Sie RÄDLOG-Center GmbH in Stuttgart. Telefon, E-Mail oder Kontaktformular. 4 Standorte in der Region Stuttgart.',
  path: '/kontakt',
})

export default function KontaktPage() {
  return <KontaktContent />
}
