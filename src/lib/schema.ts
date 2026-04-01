import { COMPANY, LOCATIONS, SERVICE_REGION_DETAILS } from './constants'

const BASE_URL = 'https://raedlogneu.vercel.app'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY.name,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description:
      'Spezialisierter Räder- und Reifeneinlagerungsservice für Autohäuser, Fuhrparks und Autovermietungen im Raum Stuttgart. Seit 1998.',
    telephone: '+497119005405',
    email: COMPANY.email,
    founder: {
      '@type': 'Person',
      name: COMPANY.ceo,
    },
    foundingDate: '1998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATIONS[0].street,
      addressLocality: LOCATIONS[0].city,
      postalCode: LOCATIONS[0].zip,
      addressCountry: 'DE',
    },
    areaServed: [
      'Stuttgart',
      'Ludwigsburg',
      'Waiblingen',
      'Böblingen',
      'Sindelfingen',
      'Leonberg',
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: COMPANY.name,
    description:
      'Spezialisierter Räder- und Reifeneinlagerungsservice für Autohäuser, Fuhrparks und Autovermietungen im Raum Stuttgart.',
    url: BASE_URL,
    telephone: '+497119005405',
    email: COMPANY.email,
    image: `${BASE_URL}/og-image.jpg`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATIONS[0].street,
      addressLocality: LOCATIONS[0].city,
      postalCode: LOCATIONS[0].zip,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SERVICE_REGION_DETAILS[0].lat,
      longitude: SERVICE_REGION_DETAILS[0].lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    areaServed: [
      'Stuttgart',
      'Ludwigsburg',
      'Waiblingen',
      'Böblingen',
      'Sindelfingen',
      'Leonberg',
    ],
    founder: { '@type': 'Person', name: COMPANY.ceo },
    foundingDate: '1998',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Rädereinlagerung Leistungspakete',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Standard Paket',
            description:
              'Rädereinlagerung mit Barcode-Erfassung, Datenerfassung und sicherer Lagerung.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Komfort Paket',
            description:
              'Rädereinlagerung inklusive Reinigung, Wuchten und tagesgenauer Anlieferung.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Paket',
            description:
              'Komplett-Service mit Reinigung, Wuchten, Hol- und Bringservice sowie REOS-Onlinezugang.',
          },
        },
      ],
    },
  }
}

export function getLocationSchemas() {
  return SERVICE_REGION_DETAILS.map((location) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${COMPANY.name} – ${location.name}`,
    telephone: '+497119005405',
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.street,
      addressLocality: location.city,
      postalCode: location.zip,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    parentOrganization: {
      '@id': `${BASE_URL}/#organization`,
    },
  }))
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}

export function getFaqSchema(
  items: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getServiceSchema(service: {
  name: string
  description: string
  provider?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: service.provider ?? COMPANY.name,
    },
    areaServed: [
      'Stuttgart',
      'Ludwigsburg',
      'Waiblingen',
      'Böblingen',
      'Sindelfingen',
      'Leonberg',
    ],
  }
}
