import { createMetadata } from '@/lib/metadata'
import JsonLd from '@/components/shared/JsonLd'
import { getWebPageSchema } from '@/lib/schema'
import HomeContent from './HomeContent'

export const metadata = createMetadata({
  title: 'Startseite',
  description:
    'Ihr kompetenter Partner für Rädereinlagerung, Reifeneinlagerung und Service in Stuttgart, Ludwigsburg, Waiblingen und Umgebung. Professionelle Einlagerung für Autohäuser, Fuhrparks und Autovermietungen.',
  path: '',
})

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            name: 'Startseite',
            description:
              'Rädereinlagerung und Reifeneinlagerung für Autohäuser, Fuhrparks und Autovermietungen in der Region Stuttgart — seit 1998.',
            path: '',
          }),
        ]}
      />
      <HomeContent />
    </>
  )
}
