import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.raedlog.de'

  const routes = [
    '', '/leistungen', '/firmenkunden', '/reos',
    '/karriere', '/kontakt', '/chronik',
    '/impressum', '/datenschutz',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/leistungen' ? 0.9 : 0.7,
  }))
}
