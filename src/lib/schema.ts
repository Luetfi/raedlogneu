import {
  COMPANY,
  GOOGLE_MAPS_URL,
  LOCATIONS,
  REVIEWS,
  SERVICE_REGION_DETAILS,
  SITE_URL,
  SOCIAL_PROFILES,
} from './constants'

const BASE_URL = SITE_URL

const AREA_SERVED = [
  'Stuttgart',
  'Ludwigsburg',
  'Waiblingen',
  'Böblingen',
  'Sindelfingen',
  'Leonberg',
]

// Nur nicht-leere sameAs-Links ausgeben (Google-Profil etc.).
const SAME_AS = SOCIAL_PROFILES.filter(Boolean)

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.name,
    url: BASE_URL,
    slogan: COMPANY.slogan,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/og-image.jpg`,
    description:
      'Spezialisierter Räder- und Reifeneinlagerungsservice für Autohäuser, Fuhrparks und Autovermietungen im Raum Stuttgart. Seit 1998.',
    telephone: COMPANY.phoneE164,
    email: COMPANY.email,
    vatID: COMPANY.ustId,
    founder: {
      '@type': 'Person',
      name: COMPANY.ceo,
    },
    employee: [
      { '@type': 'Person', name: 'Jörg Hoffmann', jobTitle: 'Geschäftsführer' },
      { '@type': 'Person', name: 'Dominik Hoffmann', jobTitle: 'Junior Executive' },
      { '@type': 'Person', name: 'Tim Hoffmann', jobTitle: 'Junior Manager' },
    ],
    foundingDate: '1998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATIONS[0].street,
      addressLocality: LOCATIONS[0].city,
      postalCode: LOCATIONS[0].zip,
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phoneE164,
      email: COMPANY.email,
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['de'],
    },
    areaServed: AREA_SERVED,
    knowsAbout: [
      'Rädereinlagerung',
      'Reifeneinlagerung',
      'Reifenservice',
      'Räderlogistik',
      'Alufelgen-Aufbereitung',
    ],
    ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: COMPANY.name,
    description:
      'Spezialisierter Räder- und Reifeneinlagerungsservice für Autohäuser, Fuhrparks und Autovermietungen im Raum Stuttgart.',
    url: BASE_URL,
    telephone: COMPANY.phoneE164,
    email: COMPANY.email,
    image: `${BASE_URL}/og-image.jpg`,
    logo: `${BASE_URL}/images/logo.png`,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
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
    ...(GOOGLE_MAPS_URL ? { hasMap: GOOGLE_MAPS_URL } : {}),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    areaServed: AREA_SERVED,
    founder: { '@type': 'Person', name: COMPANY.ceo },
    foundingDate: '1998',
    parentOrganization: { '@id': `${BASE_URL}/#organization` },
    ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
    ...(REVIEWS.reviewCount > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: REVIEWS.ratingValue,
            reviewCount: REVIEWS.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Rädereinlagerung Leistungspakete',
      itemListElement: [
        {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: 'Standard-Service',
            description:
              'Rädereinlagerung mit Hol- und Bringservice, Reinigung und Einlagerung von Kompletträdern bzw. Reifen inklusive Grundleistungen.',
          },
        },
        {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: 'Eco-Service',
            description:
              'Einlagerung von Neurädern: Anlieferung durch den Auftraggeber, Kommissionierung durch RÄDLOG inklusive Grundleistungen.',
          },
        },
        {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: 'Komfort-Service',
            description:
              'Rädereinlagerung inklusive digitaler Erfassung sämtlicher Reifen- und Felgendaten sowie Zustandsbewertung und Dokumentation.',
          },
        },
        {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium-Service',
            description:
              'Komplett-Service mit digitaler Datenerfassung, Zustandsbewertung, Dokumentation und Wuchten von 4 Laufrädern mit 3D-Technologie.',
          },
        },
      ],
    },
  }
}

export function getLocationSchemas() {
  return SERVICE_REGION_DETAILS.map((location, index) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#location-${index}`,
    name: `${COMPANY.name} – ${location.name}`,
    url: BASE_URL,
    telephone: COMPANY.phoneE164,
    email: COMPANY.email,
    image: `${BASE_URL}/og-image.jpg`,
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
    branchOf: {
      '@id': `${BASE_URL}/#organization`,
    },
    parentOrganization: {
      '@id': `${BASE_URL}/#organization`,
    },
  }))
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: COMPANY.name,
    description:
      'Professionelle Räder- und Reifeneinlagerung für Autohäuser, Fuhrparks und Autovermietungen im Raum Stuttgart.',
    inLanguage: 'de-DE',
    publisher: { '@id': `${BASE_URL}/#organization` },
  }
}

export function getReosSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'REOS – Räder Einlagerungs Online System',
    url: `${BASE_URL}/reos`,
    description:
      '24/7 verfügbares Onlinesystem zur Radsatzanforderung, Bestandsübersicht, Zustandsberichten und statistischen Auswertungen für Kunden der RÄDLOG-Center GmbH.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: 'de-DE',
    provider: { '@id': `${BASE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Im Premium-Paket der Rädereinlagerung enthalten.',
    },
  }
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
    areaServed: AREA_SERVED,
  }
}
