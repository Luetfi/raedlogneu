// Basis-URL der Website. Über die Umgebungsvariable NEXT_PUBLIC_SITE_URL
// überschreibbar (z. B. für Preview-Deployments), fällt sonst auf die
// Produktionsdomain zurück. Ein evtl. abschließender Slash wird entfernt.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.raedlog.de'
).replace(/\/+$/, '')

export const COMPANY = {
  name: 'RÄDLOG-Center GmbH',
  shortName: 'RÄDLOG',
  tagline: 'Reifen · Räder · Einlagerung · Service',
  slogan: 'Ein neues Zuhause für Ihre Kundenräder',
  ceo: 'Jörg Hoffmann',
  email: 'hoffmann@raedlog.de',
  phone: '0711 / 900 54 - 05',
  // Telefonnummer in E.164-Format für Schema.org / tel:-Links.
  phoneE164: '+497119005405',
  fax: '0711 / 900 54 - 06',
  reosUrl: 'https://reos.raedlog.de',
  registernummer: 'HRB 728877',
  ustId: 'DE251345629',
} as const

// Externe Profile für Trust-Signale (Schema.org `sameAs`) und GEO/KI-Suche.
// Offizielle Google-Unternehmensprofile (Share-Links, dauerhaft gültig):
//   - Profil Stuttgart (Hauptsitz):    /g/1vjdp0cn
//   - Profil Remseck (Lagerstandorte): /g/11yllgqzlx
// Weitere Profile (LinkedIn, Instagram, Facebook) bei Bedarf ergänzen.
export const SOCIAL_PROFILES: string[] = [
  'https://share.google/c7P8IRUeLiVx6Lr2i',
  'https://share.google/e3ejR297aySSkxNew',
].filter(Boolean)

// Direkter Maps-/Profil-Link zum Hauptstandort (Schema.org `hasMap`).
export const GOOGLE_MAPS_URL = 'https://share.google/c7P8IRUeLiVx6Lr2i'

// Echte Kundenbewertungen für Schema.org `aggregateRating`.
// Quelle: Google-Unternehmensprofil (Stand 10.06.2026).
// 16 Rezensionen: 12×5★, 3×4★, 1×3★ → Summe 75 / 16 = 4,69 ≈ 4,7.
// Solange `reviewCount` 0 ist, wird kein aggregateRating gerendert.
export const REVIEWS = {
  ratingValue: 4.7,
  reviewCount: 16,
} as const

// Letzte inhaltliche Änderung je Route (für die Sitemap).
// Bei Inhaltsänderungen das jeweilige Datum aktualisieren.
export const LAST_MODIFIED: Record<string, string> = {
  '/': '2026-06-10',
  '/leistungen': '2026-06-10',
  '/firmenkunden': '2026-06-10',
  '/ueber-uns': '2026-06-10',
  '/reos': '2026-06-10',
  '/karriere': '2026-06-10',
  '/kontakt': '2026-06-10',
  '/impressum': '2026-06-10',
  '/datenschutz': '2026-06-10',
}

export const LOCATIONS = [
  {
    name: 'Stuttgart-Sommerrain (Hauptsitz)',
    street: 'Hortensienweg 23',
    zip: '70374',
    city: 'Stuttgart',
    isHQ: true,
  },
  {
    name: 'Remseck-Aldingen (1)',
    street: 'Bernhardslaicher Weg 14',
    zip: '71686',
    city: 'Remseck',
    isHQ: false,
  },
  {
    name: 'Remseck-Aldingen (2)',
    street: 'Hardtweg 3',
    zip: '71686',
    city: 'Remseck',
    isHQ: false,
  },
] as const

export const NAV_ITEMS = [
  { label: 'Startseite', href: '/' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Firmenkunden', href: '/firmenkunden' },
  { label: 'REOS', href: '/reos' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
] as const

export const SERVICE_REGIONS = [
  'Stuttgart-Sommerrain',
  'Remseck-Aldingen',
] as const

export const SERVICE_REGION_DETAILS = [
  { name: 'Stuttgart-Sommerrain', isHQ: true, lat: 48.8185, lng: 9.2295, street: 'Hortensienweg 23', zip: '70374', city: 'Stuttgart' },
  { name: 'Remseck-Aldingen (1)', isHQ: false, lat: 48.8709, lng: 9.2720, street: 'Bernhardslaicher Weg 14', zip: '71686', city: 'Remseck' },
  { name: 'Remseck-Aldingen (2)', isHQ: false, lat: 48.8685, lng: 9.2650, street: 'Hardtweg 3', zip: '71686', city: 'Remseck' },
] as const
