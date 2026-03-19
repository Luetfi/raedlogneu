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
    name: 'Stuttgart (Hauptsitz)',
    street: 'Hortensienweg 23',
    zip: '70374',
    city: 'Stuttgart',
    isHQ: true,
  },
  {
    name: 'Stuttgart II',
    street: 'Hortensienweg 27',
    zip: '70374',
    city: 'Stuttgart',
    isHQ: false,
  },
  {
    name: 'Kornwestheim',
    street: 'Murrstraße 3',
    zip: '70806',
    city: 'Kornwestheim',
    isHQ: false,
  },
  {
    name: 'Remseck',
    street: 'Bernhardslaicher Weg 14',
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
  { label: 'Chronik', href: '/chronik' },
] as const

export const SERVICE_REGIONS = [
  'Stuttgart',
  'Ludwigsburg',
  'Waiblingen',
  'Böblingen',
  'Sindelfingen',
  'Leonberg',
] as const

export const SERVICE_REGION_DETAILS = [
  { name: 'Stuttgart', isHQ: true, lat: 48.7758, lng: 9.1829 },
  { name: 'Ludwigsburg', isHQ: false, lat: 48.8975, lng: 9.1920 },
  { name: 'Waiblingen', isHQ: false, lat: 48.8314, lng: 9.3168 },
  { name: 'Böblingen', isHQ: false, lat: 48.6862, lng: 9.0106 },
  { name: 'Sindelfingen', isHQ: false, lat: 48.7133, lng: 9.0028 },
  { name: 'Leonberg', isHQ: false, lat: 48.8001, lng: 9.0132 },
] as const
