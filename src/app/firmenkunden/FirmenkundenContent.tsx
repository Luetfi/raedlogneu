'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Calendar, Truck, ArrowRight, ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PageHero from '@/components/ui/PageHero'
import Breadcrumb from '@/components/shared/Breadcrumb'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/shared/AnimatedSection'
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
} from '@/lib/animations'
import { COMPANY, SERVICE_REGIONS } from '@/lib/constants'

const benefits = [
  {
    icon: Calendar,
    title: 'Kundenbindungsinstrument',
    description:
      'Durch die Rädereinlagerung sind zwei garantierte Werkstattbesuche im Jahr sichergestellt — einmal im Frühjahr und einmal im Herbst beim Reifenwechsel.',
  },
  {
    icon: Shield,
    title: 'Spezialisierte Kompetenz',
    description:
      'Fachmännische Einlagerung mit hoher Logistik-Kompetenz und termingerechter Abwicklung. Ihre Kundenräder sind bei uns in den besten Händen.',
  },
  {
    icon: Truck,
    title: 'Für alle Branchen',
    description:
      'Unser Service richtet sich an Autohäuser, Fuhrparks und Autovermietungen — maßgeschneiderte Lösungen für jeden Bedarf.',
  },
]

export default function FirmenkundenContent() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* Hero / Welcome Section */}
      <PageHero
        title={<>Herzlich Willkommen im <span className="text-primary">{COMPANY.shortName}-Center!</span></>}
        subtitle={<>Ihr kompetenter Partner für Reifen, Räder, Einlagerung und Service rund um das Rad in der Region {SERVICE_REGIONS.join(', ')} und Umgebung.</>}
      />
      <Breadcrumb items={[{ name: 'Firmenkunden', href: '/firmenkunden' }]} />

      {/* CTA Buttons */}
      <section className="border-b border-border bg-bg py-8">
        <Container>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/kontakt" size="lg">
              Jetzt Partner werden
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/leistungen" variant="outline" size="lg">
              Unsere Leistungen
            </Button>
          </div>
        </Container>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            title="Ihre Vorteile als Firmenkunde"
            subtitle="Profitieren Sie von unserer langjährigen Erfahrung und unserem umfassenden Service-Angebot — speziell zugeschnitten auf gewerbliche Anforderungen."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={staggerItem}>
                <Card className="flex h-full flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-text-heading">{title}</h3>
                  <p className="text-text-muted leading-relaxed">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Why RÄDLOG Section */}
      <section className="border-y border-border py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection variants={fadeInLeft}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Warum {COMPANY.shortName}-Center?
              </p>
              <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
                Logistik-Kompetenz, die zählt
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Als spezialisierter Räder- und Reifeneinlagerungsdienstleister verbinden wir
                handwerkliche Sorgfalt mit professioneller Logistik. Unsere Kunden schätzen die
                pünktliche und zuverlässige Abwicklung, die transparente Verwaltung über unser
                REOS-System und den persönlichen Kontakt.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Für Autohäuser bedeutet das: Ihre Kunden kommen zweimal im Jahr zu Ihnen — und das
                ohne zusätzlichen Aufwand Ihrerseits. Wir übernehmen die Einlagerung, die
                Verwaltung und sorgen für reibungslose Abläufe.
              </p>
            </AnimatedSection>

            <AnimatedSection variants={fadeInRight}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="flex flex-col gap-4"
              >
                {[
                  'Zuverlässige, termingerechte Abwicklung',
                  'Digitale Verwaltung mit dem REOS-System',
                  'Persönlicher Ansprechpartner',
                  'Mehrere Lagerstandorte im Raum Stuttgart',
                  'Langjährige Erfahrung seit 1998',
                  'Maßgeschneiderte Lösungen für Fuhrparks',
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated px-5 py-4"
                  >
                    <div
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="font-medium text-text">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

    </main>
  )
}

const faqData = [
  {
    question: 'Was kostet die Rädereinlagerung bei RÄDLOG?',
    answer:
      'Die Rädereinlagerung beginnt ab 29,50 € pro Radsatz (zzgl. MwSt.), abhängig von Stückzahl und gewähltem Leistungspaket (Standard, Komfort oder Premium).',
  },
  {
    question: 'Wie funktioniert der Hol- und Bringservice?',
    answer:
      'Wir holen Ihre Radsätze direkt bei Ihnen ab und liefern sie tagesgenau zurück. Bei Faxabruf bis 18 Uhr erfolgt die Anlieferung am nächsten Werktag bis 12 Uhr.',
  },
  {
    question: 'Welche Leistungspakete gibt es?',
    answer:
      'Wir bieten drei Pakete: Standard (Einlagerung & Barcode-Erfassung), Komfort (inkl. Reinigung & Wuchten) und Premium (Komplett-Service mit REOS-Onlinezugang und Hol-/Bringservice).',
  },
  {
    question: 'Wie fordere ich einen Radsatz über REOS an?',
    answer:
      'Über unser Online-System REOS können Sie 24/7 Radsätze anfordern. In nur zwei Klicks wählen Sie den Radsatz und das Lieferdatum — die Anlieferung erfolgt tagesgenau.',
  },
  {
    question: 'In welchen Regionen ist RÄDLOG aktiv?',
    answer:
      'Wir bedienen den gesamten Raum Stuttgart, Ludwigsburg, Waiblingen, Böblingen, Sindelfingen und Leonberg mit drei Standorten in Stuttgart-Sommerrain und Remseck-Aldingen.',
  },
  {
    question: 'Sind die eingelagerten Radsätze versichert?',
    answer:
      'Ja, alle bei uns eingelagerten Radsätze sind gegen Marke, Diebstahl und Transportschäden versichert.',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="border-y border-border py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="Häufig gestellte Fragen"
          subtitle="Antworten auf die wichtigsten Fragen rund um unseren Rädereinlagerungsservice."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-bg-elevated overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-text-heading">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-5 text-text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
