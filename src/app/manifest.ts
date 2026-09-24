import type { MetadataRoute } from 'next'
import { COMPANY } from '@/lib/constants'

// Noetig fuer den statischen Export (output: 'export').
export const dynamic = 'force-static'

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
        // Manifest-Icons muessen quadratisch sein; src/app/icon.png ist 512x512.
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
