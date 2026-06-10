import type { Metadata } from 'next'
import { SITE_URL } from './constants'

const BASE_URL = SITE_URL

const DEFAULT_KEYWORDS = [
  'Rädereinlagerung', 'Reifeneinlagerung', 'Stuttgart', 'Ludwigsburg',
  'Waiblingen', 'Böblingen', 'Sindelfingen', 'Leonberg',
  'Reifenservice', 'RÄDLOG', 'Räder einlagern', 'Reifenlagerung',
]

export function createMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage = '/og-image.jpg',
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  ogImage?: string
}): Metadata {
  const fullTitle = title === 'Startseite'
    ? 'RÄDLOG-Center GmbH – Rädereinlagerung & Reifenservice Stuttgart'
    : `${title} | RÄDLOG-Center GmbH`

  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}${path}`,
      siteName: 'RÄDLOG-Center GmbH',
      locale: 'de_DE',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
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
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  }
}