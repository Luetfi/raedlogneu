import type { Metadata } from 'next'

const BASE_URL = 'https://raedlogneu.vercel.app'

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
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'RÄDLOG-Center GmbH – Rädereinlagerung & Reifenservice Stuttgart',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  }
}