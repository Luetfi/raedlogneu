import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
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
