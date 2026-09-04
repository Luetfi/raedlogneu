import type { MetadataRoute } from 'next'
import { LAST_MODIFIED, SITE_URL } from '@/lib/constants'

type Entry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  /** Bilder der Seite — landen als <image:image> im XML und erschließen die Bildersuche. */
  images?: string[]
}

const ENTRIES: Entry[] = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
    images: [
      '/og-image.jpg',
      '/images/autohaus.webp',
      '/images/fuhrparks.webp',
      '/images/autovermietungen.webp',
      '/images/automotive-entwicklung.webp',
    ],
  },
  { path: '/leistungen', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/firmenkunden', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ueber-uns', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/reos',
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [
      '/images/reos-step-1-login.webp',
      '/images/reos-step-2-suche.webp',
      '/images/reos-step-3-auswahl.webp',
      '/images/reos-step-4-details.webp',
      '/images/reos-step-5-anforderung.webp',
    ],
  },
  { path: '/karriere', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/kontakt', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/impressum', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/datenschutz', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  return ENTRIES.map(({ path, changeFrequency, priority, images }) => ({
    url: path === '/' ? baseUrl : `${baseUrl}${path}`,
    lastModified: new Date(LAST_MODIFIED[path] ?? '2026-06-10'),
    changeFrequency,
    priority,
    ...(images ? { images: images.map((image) => `${baseUrl}${image}`) } : {}),
  }))
}
