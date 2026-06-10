import type { MetadataRoute } from 'next'
import { COMPANY } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.name,
    short_name: COMPANY.shortName,
    description:
      'Professionelle Räder- und Reifeneinlagerung für Autohäuser, Fuhrparks und Autovermietungen im Raum Stuttgart.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1a',
    theme_color: '#0568b1',
    lang: 'de-DE',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '781x319',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
