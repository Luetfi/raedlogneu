import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.raedlog.de'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-03-28'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date('2025-03-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/firmenkunden`,
      lastModified: new Date('2025-03-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date('2025-03-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reos`,
      lastModified: new Date('2025-03-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karriere`,
      lastModified: new Date('2025-03-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date('2025-03-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
