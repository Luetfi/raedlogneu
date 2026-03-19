import { createMetadata } from '@/lib/metadata'
import UeberUnsContent from './UeberUnsContent'

export const metadata = createMetadata({
  title: 'Über uns',
  description:
    'Über uns — RÄDLOG-Center GmbH. Lernen Sie das Familienunternehmen und unser Führungsteam rund um Jörg Hoffmann in Stuttgart kennen.',
  path: '/ueber-uns',
})

export default function UeberUnsPage() {
  return <UeberUnsContent />
}
