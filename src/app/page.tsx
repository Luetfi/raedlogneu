'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import HeroSlideshow from '@/components/shared/HeroSlideshow'
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

const TireScrollExperience = dynamic(
  () => import('@/components/hero/HeroScrollExperience'),
  { ssr: false }
)

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow background + overlay */}
        <HeroSlideshow />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl font-semibold text-primary tracking-widest uppercase mb-4 hero-text-shadow-sm"
            >
              Wir kümmern uns Rund ums Rad!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-text-heading sm:text-5xl lg:text-6xl xl:text-7xl !leading-[1.1] hero-text-shadow"
            >
              Ein neues Zuhause
              <br />
              <span className="text-primary">für Ihre Kundenräder</span>
            </motion.h1>

            {/* Decorative divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 text-lg text-text-muted leading-relaxed sm:text-xl max-w-xl hero-text-shadow-sm"
            >
              Ihr kompetenter Partner für fachmännische Räder&shy;einlagerung
              und Reifenservice — für Firmenkunden.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-text-muted/80 hero-text-shadow-sm"
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
              className="mt-8 flex flex-wrap justify-center gap-4"
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
              className="mt-10 grid grid-cols-3 max-w-lg mx-auto"
            >
              {[
                { value: '25+', label: 'Jahre Erfahrung' },
                { value: '3', label: 'Standorte' },
                { value: '2', label: 'Serviceregionen' },
              ].map((stat, i) => (
                <div key={stat.label} className={`group ${i > 0 ? 'border-l border-primary/20' : ''}`}>
                  <div className="text-3xl sm:text-4xl font-bold text-text-heading hero-text-shadow-sm">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted mt-1 hero-text-shadow-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* ── Tire Scroll Experience ── */}
      <TireScrollExperience />

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
