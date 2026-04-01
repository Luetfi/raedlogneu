import { createMetadata } from '@/lib/metadata'
import HomeContent from './HomeContent'

export const metadata = createMetadata({
  title: 'Startseite',
  description:
    'Ihr kompetenter Partner für Rädereinlagerung, Reifeneinlagerung und Service in Stuttgart, Ludwigsburg, Waiblingen und Umgebung. Professionelle Einlagerung für Autohäuser, Fuhrparks und Autovermietungen.',
  path: '',
})

export default function HomePage() {
  return <HomeContent />
}
