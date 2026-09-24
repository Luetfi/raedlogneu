import type { NextConfig } from 'next'

// Statischer Export fuer das Hosting bei all-inkl (Apache, kein Node.js).
// `next build` schreibt die fertige Seite nach out/ — dieser Ordner wird per
// FTP hochgeladen. Header, Caching und Weiterleitungen, die Next im
// Export-Modus nicht mehr liefern kann, stehen in public/.htaccess.
// Die Formulare posten an PHP-Skripte unter public/api/.
const nextConfig: NextConfig = {
  output: 'export',
  // Seiten landen als leistungen.html usw.; public/.htaccess liefert sie unter
  // /leistungen aus (URLs ohne Slash wie in Sitemap, Schema und llms.txt).
  images: {
    // Kein Bild-Server im Export; die Bilder in public/ sind bereits als
    // WebP/AVIF optimiert (scripts/optimize-images.mjs).
    unoptimized: true,
  },
  poweredByHeader: false,
}

export default nextConfig
