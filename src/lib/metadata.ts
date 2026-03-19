import type { Metadata } from 'next'

const BASE_URL = 'https://www.raedlog.de'

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const fullTitle = title === 'Startseite'
    ? 'RÄDLOG-Center GmbH – Rädereinlagerung & Reifenservice Stuttgart'
    : `${title} | RÄDLOG-Center GmbH`

  return {
    title: fullTitle,
    description,
    keywords: [
      'Rädereinlagerung', 'Reifeneinlagerung', 'Stuttgart', 'Ludwigsburg',
      'Waiblingen', 'Böblingen', 'Sindelfingen', 'Leonberg',
      'Reifenservice', 'RÄDLOG', 'Räder einlagern', 'Reifenlagerung',
    ],
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}${path}`,
      siteName: 'RÄDLOG-Center GmbH',
      locale: 'de_DE',
      type: 'website',
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  }
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RÄDLOG-Center GmbH',
  description: 'Spezialisierter Räder- und Reifeneinlagerungsservice für Autohäuser, Fuhrparks und Autovermietungen im Raum Stuttgart.',
  url: BASE_URL,
  telephone: '+49711900540 5',
  email: 'hoffmann@raedlog.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hortensienweg 23',
    addressLocality: 'Stuttgart',
    postalCode: '70374',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8183,
    longitude: 9.2208,
  },
  areaServed: [
    'Stuttgart', 'Ludwigsburg', 'Waiblingen', 'Böblingen', 'Sindelfingen', 'Leonberg',
  ],
  founder: { '@type': 'Person', name: 'Jörg Hoffmann' },
  foundingDate: '1998',
}
