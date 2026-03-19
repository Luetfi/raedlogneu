'use client'

import { motion } from 'framer-motion'
import {
  Monitor,
  Search,
  MousePointer,
  Calendar,
  CheckCircle2,
  LogIn,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

const workflowSteps = [
  {
    number: 1,
    icon: Monitor,
    title: 'Login',
    description: 'Login unter reos.raedlog.de mit Benutzername und Passwort',
  },
  {
    number: 2,
    icon: Search,
    title: 'Suche',
    description:
      'Suchmaske: Kundennamen, Kennzeichen, Fahrzeugident. Nr. oder Barcode suchen',
  },
  {
    number: 3,
    icon: MousePointer,
    title: 'Auswahl',
    description: 'Detailansicht oder direkt zur Radsatzanforderung',
  },
  {
    number: 4,
    icon: Calendar,
    title: 'Angaben',
    description: 'Anforderdatum und Abladestelle angeben',
  },
  {
    number: 5,
    icon: Calendar,
    title: 'Datum',
    description: 'Kalenderfunktion: 2 Klicks für das richtige Datum',
  },
]

const features = [
  'Individuell anpassbar',
  '24h online',
  'Statistische Auswertung',
  'Werkstattauslastung planen',
  '4 Suchoptionen',
  'Räderbestand ermitteln',
  'Zustandsstatus selektieren',
  'Einfache Bedienung',
  'Tagesgenaue Planungssicherheit',
  'CSV Export (Excel)',
]

export default function ReosContent() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Hero / Intro */}
      <section className="relative overflow-hidden border-b border-border bg-bg-surface py-20 sm:py-28">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <Container>
          <AnimatedSection variants={fadeInUp} className="relative text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-accent bg-bg-elevated px-4 py-2 text-sm font-medium text-primary">
              <Monitor className="h-4 w-4" />
              Online-System
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-text-heading sm:text-5xl lg:text-6xl">
              REOS
            </h1>
            <p className="mt-2 text-xl font-semibold text-primary sm:text-2xl">
              Räder Einlagerungs Online System
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
              REOS ist eine eigens für unsere Zwecke entwickelte Onlinedatenbank.
              Damit können Sie schnell und unkompliziert einen Radsatz anfordern.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="So einfach funktioniert REOS"
            subtitle="In 5 Schritten zur Radsatzanforderung"
          />

          {/* Steps — desktop: horizontal row, mobile: vertical stack */}
          <AnimatedSection variants={staggerContainer} className="relative">
            {/* Connector line (desktop only) */}
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border-accent to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    variants={staggerItem}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Connector dots between steps (desktop) */}
                    {index < workflowSteps.length - 1 && (
                      <div className="absolute right-0 top-10 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                        <div className="h-2 w-2 rounded-full bg-primary/40" />
                      </div>
                    )}

                    {/* Numbered circle */}
                    <div className="relative z-10 mb-5 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-primary bg-bg-elevated shadow-lg shadow-primary/10">
                      <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow">
                        {step.number}
                      </span>
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Step content */}
                    <h3 className="mb-2 text-base font-bold text-text-heading">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {step.description}
                    </p>

                    {/* Vertical connector (mobile) */}
                    {index < workflowSteps.length - 1 && (
                      <div className="mt-6 h-8 w-px bg-gradient-to-b from-border-accent to-transparent lg:hidden" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="Funktionen & Vorteile"
            subtitle="Alles, was Sie für effizientes Räder­management brauchen"
          />

          <AnimatedSection variants={staggerContainer}>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={staggerItem}
                  className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated px-5 py-4 transition-all duration-200 hover:border-border-accent hover:shadow-md hover:shadow-primary/5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium text-text">{feature}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Login CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <AnimatedSection variants={fadeInUp}>
            <Card
              hover={false}
              className="relative overflow-hidden border-border-accent bg-bg-elevated text-center"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
              </div>

              <div className="relative py-8">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-accent bg-bg-surface shadow-lg shadow-primary/10">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <h2 className="mb-2 text-2xl font-bold text-text-heading sm:text-3xl">
                  Jetzt in REOS einloggen
                </h2>
                <p className="mx-auto mb-8 max-w-md text-text-muted">
                  Greifen Sie rund um die Uhr auf Ihre Räder­daten zu — einfach,
                  schnell und sicher.
                </p>

                <Button
                  href={COMPANY.reosUrl}
                  external
                  size="lg"
                  variant="primary"
                >
                  <LogIn className="h-5 w-5" />
                  Zu REOS (reos.raedlog.de)
                </Button>

                <p className="mt-4 text-xs text-text-muted">
                  Öffnet reos.raedlog.de in einem neuen Tab
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
