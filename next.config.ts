import type { NextConfig } from 'next'

// Statische Medien in public/ haben stabile Dateinamen und werden bei Aenderungen
// umbenannt bzw. neu deployt — daher lang cachebar. Next liefert public/ sonst mit
// max-age=0 aus, was die Frame-Sequenz bei jedem Seitenaufruf neu laden laesst.
const IMMUTABLE_CACHE = 'public, max-age=31536000, immutable'

const nextConfig: NextConfig = {
  images: {
    // AVIF zuerst: rund 20–30 % kleiner als WebP bei gleicher Qualitaet.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path(frames|images|logos|videos)/:file*',
        headers: [{ key: 'Cache-Control', value: IMMUTABLE_CACHE }],
      },
      {
        source: '/:file(og-image.jpg|favicon.ico)',
        headers: [{ key: 'Cache-Control', value: IMMUTABLE_CACHE }],
      },
      {
        // llms.txt wird von KI-Crawlern gelesen — als Text ausliefern statt Download.
        source: '/:file(llms.txt|llms-full.txt)',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/chronik',
        destination: '/ueber-uns#chronik',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
