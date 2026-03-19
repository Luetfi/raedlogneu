'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Car,
  KeyRound,
  Warehouse,
  Search,
  Clock,
  Sparkles,
  Users,
  Handshake,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import AnimatedSection from '@/components/shared/AnimatedSection'
import PartnerSlider from '@/components/shared/PartnerSlider'
import { staggerContainer, staggerItem, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'

const targetAudiences = [
  {
    icon: Building2,
    title: 'Autohäuser',
    description:
      'Schaffen Sie Platz für Ihr Kerngeschäft. Wir übernehmen Einlagerung, Logistik und Service — Sie stärken die Kundenbindung durch zwei garantierte Werkstattbesuche pro Jahr.',
  },
  {
    icon: Car,
    title: 'Fuhrparks',
    description:
      'Effiziente Räderlogistik für Ihren gesamten Fuhrpark. Termingerechte Abwicklung, lückenlose Dokumentation und professionelles Handling aller Radsätze.',
  },
  {
    icon: KeyRound,
    title: 'Autovermietungen',
    description:
      'Schneller Räderwechsel ohne Lagerchaos. Tagesgenaue Anlieferung, gereinigt und gewuchtet — damit Ihre Flotte jederzeit einsatzbereit ist.',
  },
]

const benefits = [
  {
    icon: Warehouse,
    title: 'Keine Platzprobleme',
    description: 'Schaffen Sie wertvollen Raum für Ihr Kerngeschäft',
  },
  {
    icon: Search,
    title: 'Langes Suchen entfällt',
    description: 'Jeder Radsatz sofort auffindbar per Barcode-System',
  },
  {
    icon: Clock,
    title: 'Kurze Wartezeiten',
    description: 'Tagesgenaue Anlieferung für punktgenauen Räderwechsel',
  },
  {
    icon: Sparkles,
    title: 'Gereinigt & gewuchtet',
    description: 'Räder kommen montagebereit bei Ihnen an',
  },
  {
    icon: Users,
    title: 'Keine Personalkosten',
    description: 'Handling und Logistik komplett durch unser Team',
  },
  {
    icon: Handshake,
    title: 'Kundenbindung stärken',
    description: 'Zwei zusätzliche Werkstattbesuche pro Jahr garantiert',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040810] via-bg to-[#0a1628]" />

        {/* Geometric wheel shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large tire ring — top right */}
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.04]"
            style={{
              border: '80px solid #0568b1',
            }}
          />
          {/* Medium ring — bottom left */}
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.03]"
            style={{
              border: '60px solid #0568b1',
            }}
          />
          {/* Small accent ring */}
          <div
            className="absolute top-1/4 right-1/4 w-[200px] h-[200px] rounded-full opacity-[0.05]"
            style={{
              border: '3px solid #0568b1',
            }}
          />
          {/* Dot at center of small ring */}
          <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary opacity-20" />
          </div>

          {/* Grid lines suggesting storage racks */}
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                'linear-gradient(#0568b1 1px, transparent 1px), linear-gradient(90deg, #0568b1 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          {/* Radial glow behind hero text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[120px]" />
        </div>

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[20%] w-[1px] h-[140%] bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-[25deg]" />
          <div className="absolute -top-[10%] -right-[18%] w-[1px] h-[140%] bg-gradient-to-b from-transparent via-primary/10 to-transparent rotate-[25deg]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5 mb-8"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide">
                Seit 1998 im Raum Stuttgart
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-text-heading sm:text-5xl lg:text-6xl xl:text-7xl !leading-[1.1]"
            >
              Ein neues Zuhause
              <br />
              <span className="text-primary">für Ihre Kundenräder</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-lg text-text-muted leading-relaxed sm:text-xl max-w-xl"
            >
              Ihr kompetenter Partner für fachmännische Räder&shy;einlagerung
              und Reifenservice — für Autohäuser, Fuhrparks und
              Autovermietungen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-3 flex items-center gap-2 text-sm text-text-muted/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-primary flex-shrink-0">
                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
              </svg>
              Stuttgart · Ludwigsburg · Waiblingen · Böblingen · Sindelfingen · Leonberg
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/leistungen" size="lg">
                Leistungen entdecken
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/kontakt" variant="outline" size="lg">
                Kontakt aufnehmen
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 flex gap-10 flex-wrap"
            >
              {[
                { value: '25+', label: 'Jahre Erfahrung' },
                { value: '4', label: 'Standorte' },
                { value: '6', label: 'Serviceregionen' },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-3xl font-bold text-text-heading">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* ── Partner Logos ── */}
      <PartnerSlider />

      {/* ── Target Audience ── */}
      <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Unsere Zielgruppen
            </span>
            <h2 className="mt-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
              Maßgeschneidert für Ihre Branche
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-6 md:grid-cols-3"
          >
            {targetAudiences.map((audience) => (
              <motion.div key={audience.title} variants={staggerItem}>
                <Card className="h-full relative group overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                      <audience.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-text-heading mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Subtle background treatment */}
        <div className="absolute inset-0 bg-bg-elevated" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0568b1 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <Container className="relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Ihre Vorteile
            </span>
            <h2 className="mt-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
              Warum RÄDLOG?
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              Konzentrieren Sie sich auf Ihr Kerngeschäft — wir kümmern uns
              professionell um alles rund ums Rad.
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={staggerItem}>
                <div className="group relative rounded-2xl border border-border bg-bg/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:bg-bg-surface/50">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-heading mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── CTA Band ── */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        {/* Background with angled accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-elevated to-bg" />
        <div className="absolute inset-0 border-t border-b border-border" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%)',
            backgroundSize: '60px 60px',
          }}
        />

        <Container className="relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
              Bereit für professionelle
              <br />
              Rädereinlagerung?
            </h2>
            <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die optimale Lösung für Ihre
              Räderlogistik finden. Wir beraten Sie gerne persönlich.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href="/kontakt"
                size="lg"
                className="!bg-primary !text-white hover:!bg-primary-light !shadow-lg !shadow-black/30"
              >
                Jetzt Kontakt aufnehmen
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button
                href="/leistungen"
                size="lg"
                className="!border-border !text-text hover:!bg-bg-surface !border-2 !bg-transparent"
              >
                Leistungspakete ansehen
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
