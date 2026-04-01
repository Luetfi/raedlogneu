'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroVideo from '@/components/shared/HeroVideo'
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
import AnimatedSection from '@/components/shared/AnimatedSection'
import PartnerSlider from '@/components/shared/PartnerSlider'
import ParallaxBackground from '@/components/shared/ParallaxBackground'
import StatsSection from '@/components/sections/StatsSection'
import ProcessFlow from '@/components/sections/ProcessFlow'
import { staggerContainer, staggerItem, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'

const targetAudiences = [
  {
    icon: Building2,
    title: 'Autohäuser',
    description:
      'Schaffen Sie Platz für Ihr Kerngeschäft. Wir übernehmen Einlagerung, Logistik und Service — Sie stärken die Kundenbindung durch zwei garantierte Werkstattbesuche pro Jahr.',
    backgroundImage: '/images/autohaus.jpeg',
  },
  {
    icon: Car,
    title: 'Fuhrparks',
    description:
      'Effiziente Räderlogistik für Ihren gesamten Fuhrpark. Termingerechte Abwicklung, lückenlose Dokumentation und professionelles Handling aller Radsätze.',
    backgroundImage: '/images/fuhrparks.jpg',
  },
  {
    icon: KeyRound,
    title: 'Autovermietungen',
    description:
      'Schneller Räderwechsel ohne Lagerchaos. Tagesgenaue Anlieferung, gereinigt und gewuchtet — damit Ihre Flotte jederzeit einsatzbereit ist.',
    backgroundImage: '/images/autovermietungen.jpg',
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

export default function HomeContent() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

  const toggleFlip = (title: string) => {
    setFlippedCards((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video background + overlay */}
        <HeroVideo />

        <Container className="relative z-10 -mt-20 lg:-mt-28">
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

          </div>
        </Container>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* ── Partner Logos ── */}
      <PartnerSlider />

      {/* ── Stats / Zahlen ── */}
      <StatsSection />

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
                <div
                  className={`flip-card h-72 cursor-pointer ${flippedCards[audience.title] ? 'flipped' : ''}`}
                  onClick={() => toggleFlip(audience.title)}
                >
                  <div className="flip-inner relative w-full h-full">
                    {/* Front */}
                    <div className="flip-front absolute inset-0 rounded-2xl border border-border overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${audience.backgroundImage})` }}
                      />
                      <div className="absolute inset-0 bg-bg-elevated/60" />
                      <div className="relative flex flex-col items-center justify-center h-full p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                          <audience.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {audience.title}
                        </h3>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="flip-back absolute inset-0 rounded-2xl border border-border bg-bg-elevated overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                      <div className="relative flex flex-col items-center justify-center h-full p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                          <audience.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">
                          {audience.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-sm">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Process Flow ── */}
      <ProcessFlow />

      {/* ── Benefits Grid ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Subtle background treatment */}
        <div className="absolute inset-0 bg-bg-elevated" />
        <ParallaxBackground speed={0.1} className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #0568b1 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </ParallaxBackground>

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
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
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
