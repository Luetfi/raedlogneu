export const COMPANY = {
  name: 'RÄDLOG-Center GmbH',
  shortName: 'RÄDLOG',
  tagline: 'Reifen · Räder · Einlagerung · Service',
  slogan: 'Ein neues Zuhause für Ihre Kundenräder',
  ceo: 'Jörg Hoffmann',
  email: 'hoffmann@raedlog.de',
  phone: '0711 / 900 54 - 05',
  fax: '0711 / 900 54 - 06',
  mobile: '0172 / 908 64 99',
  reosUrl: 'http://reos.raedlog.de',
  registernummer: 'HRB 728877',
  ustId: 'DE251345629',
} as const

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
  { name: 'Stuttgart-Sommerrain', isHQ: true, lat: 48.8185, lng: 9.2295 },
  { name: 'Remseck-Aldingen (1)', isHQ: false, lat: 48.8709, lng: 9.2720 },
  { name: 'Remseck-Aldingen (2)', isHQ: false, lat: 48.8685, lng: 9.2650 },
] as const
