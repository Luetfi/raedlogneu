'use client'

import { motion } from 'framer-motion'
import { Shield, Calendar, Truck, ArrowRight, Quote, Building2 } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/shared/AnimatedSection'
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
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

      {/* CEO Quote Section */}
      <section className="py-16 lg:py-20">
        <Container>
          <AnimatedSection variants={fadeInLeft} className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-border bg-bg-elevated p-8 lg:p-12">
              {/* Left accent bar */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-primary"
              />
              {/* Large decorative quotation mark */}
              <Quote
                aria-hidden="true"
                className="mb-4 h-12 w-12 text-primary opacity-40"
                strokeWidth={1.5}
              />
              <blockquote className="pl-4">
                <p className="text-xl font-medium leading-relaxed text-text-heading lg:text-2xl">
                  „In uns finden Sie einen Partner, auf den Sie sich verlassen können! Fragen? Wir
                  sind gerne für Sie da, gehen zielgerecht auf Ihre Wünsche und Fragen ein und Sie
                  bekommen schnell und effizient alle Antworten."
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="h-px w-10 bg-primary"
                  />
                  <cite className="not-italic">
                    <span className="block font-semibold text-text-heading">
                      {COMPANY.ceo}
                    </span>
                    <span className="text-sm text-text-muted">
                      Geschäftsführer, {COMPANY.name}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>
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

      {/* Why RÄDLOG Section */}
      <section className="border-y border-border bg-bg-surface py-16 lg:py-24">
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <AnimatedSection variants={fadeInUp}>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center lg:px-16 lg:py-20">
              {/* Decorative background blobs */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />

              <div className="relative">
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Werden Sie Partner
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                  Wir freuen uns darauf, Sie kennenzulernen und gemeinsam die beste Lösung für Ihr
                  Unternehmen zu finden. Kontaktieren Sie uns — wir antworten schnell und
                  unkompliziert.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button
                    href="/kontakt"
                    variant="secondary"
                    size="lg"
                    className="!bg-white !text-primary hover:!bg-white/90 !border-0 shadow-lg"
                  >
                    Kontakt aufnehmen
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button
                    href={`tel:${COMPANY.phone.replace(/\s|\/|-/g, '')}`}
                    variant="outline"
                    size="lg"
                    className="!border-white !text-white hover:!bg-white hover:!text-primary"
                  >
                    {COMPANY.phone}
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
