'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
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
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

const AUTO_PLAY_INTERVAL = 5000

const workflowSteps = [
  {
    number: 1,
    icon: Monitor,
    title: 'Login',
    description: 'Login unter reos.raedlog.de mit Benutzername und Passwort',
    image: '/images/reos-login-screen.png',
  },
  {
    number: 2,
    icon: Search,
    title: 'Suche',
    description:
      'Suchmaske: Kundennamen, Kennzeichen, Fahrzeugident. Nr. oder Barcode suchen',
    image: '/images/reos1.gif',
  },
  {
    number: 3,
    icon: MousePointer,
    title: 'Auswahl',
    description: 'Detailansicht oder direkt zur Radsatzanforderung',
    image: '/images/reos2.gif',
  },
  {
    number: 4,
    icon: Calendar,
    title: 'Angaben',
    description: 'Anforderdatum und Abladestelle angeben',
    image: '/images/reos3.gif',
  },
  {
    number: 5,
    icon: Calendar,
    title: 'Datum',
    description: 'Kalenderfunktion: 2 Klicks für das richtige Datum',
    image: '/images/reos4.gif',
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
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progressKey, setProgressKey] = useState(0)

  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index)
    setIsAutoPlaying(false)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % workflowSteps.length
        setProgressKey((k) => k + 1)
        return next
      })
    }, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero / Intro */}
      <PageHero
        title={<>REOS — <span className="text-primary">Räder Einlagerungs Online System</span></>}
        subtitle="REOS ist eine eigens für unsere Zwecke entwickelte Onlinedatenbank. Damit können Sie schnell und unkompliziert einen Radsatz anfordern."
        videos={['/videos/herovideo2.mp4']}
      />

      {/* Workflow Steps */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="So einfach funktioniert REOS"
            subtitle="In 5 Schritten zur Radsatzanforderung"
          />

          <AnimatedSection variants={fadeInUp}>
            <div className="mt-12 flex flex-col lg:flex-row lg:items-start lg:gap-10">

              {/* Desktop: Vertical step list */}
              <div className="hidden lg:flex lg:w-[340px] lg:shrink-0 lg:flex-col lg:gap-2">
                {workflowSteps.map((step, i) => {
                  const Icon = step.icon
                  const isActive = i === activeStep
                  return (
                    <button
                      key={step.number}
                      onClick={() => handleStepClick(i)}
                      className={`
                        group relative flex items-start gap-4 rounded-xl p-4 text-left
                        transition-all duration-300
                        ${isActive
                          ? 'bg-primary/10 border border-primary/30 shadow-lg shadow-primary/5'
                          : 'bg-transparent border border-transparent hover:bg-bg-surface hover:border-border'
                        }
                      `}
                    >
                      {/* Active indicator bar */}
                      <div className={`
                        absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-primary
                        transition-all duration-300
                        ${isActive ? 'opacity-100' : 'opacity-0'}
                      `} />

                      {/* Step number circle */}
                      <div className={`
                        flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                        text-sm font-bold transition-all duration-300
                        ${isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/30'
                          : 'bg-bg-surface text-text-muted border border-border group-hover:border-primary/30'
                        }
                      `}>
                        {step.number}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text-muted'}`} />
                          <h3 className={`font-semibold transition-colors duration-300 ${isActive ? 'text-text-heading' : 'text-text-muted'}`}>
                            {step.title}
                          </h3>
                        </div>
                        <div
                          className={`
                            overflow-hidden transition-all duration-300
                            ${isActive ? 'mt-1 max-h-20 opacity-100' : 'max-h-0 opacity-0'}
                          `}
                        >
                          <p className="text-sm leading-relaxed text-text-muted">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Mobile: Horizontal pill selector */}
              <div className="flex lg:hidden gap-2 mb-6 overflow-x-auto pb-2">
                {workflowSteps.map((step, i) => {
                  const isActive = i === activeStep
                  return (
                    <button
                      key={step.number}
                      onClick={() => handleStepClick(i)}
                      className={`
                        flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5
                        text-sm font-semibold transition-all duration-300
                        ${isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/30'
                          : 'bg-bg-surface text-text-muted border border-border'
                        }
                      `}
                    >
                      <span>{step.number}</span>
                      <span className={isActive ? '' : 'hidden sm:inline'}>{step.title}</span>
                    </button>
                  )
                })}
              </div>

              {/* Right: Image preview panel */}
              <div className="flex-1 min-w-0">
                {/* Browser frame */}
                <div className="relative rounded-2xl border border-border-accent/30 bg-bg-elevated overflow-hidden shadow-2xl shadow-black/30">
                  {/* Decorative glow behind frame */}
                  <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />

                  {/* Browser chrome bar */}
                  <div className="relative flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-surface/50">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 rounded-md bg-bg/60 border border-border px-3 flex items-center">
                        <span className="text-xs text-text-muted truncate">reos.raedlog.de</span>
                      </div>
                    </div>
                  </div>

                  {/* Image area */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={workflowSteps[activeStep].image}
                          alt={`REOS: ${workflowSteps[activeStep].title}`}
                          fill
                          className="object-contain p-2"
                          unoptimized
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 flex items-center gap-2">
                  {workflowSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleStepClick(i)}
                      className="relative h-1.5 flex-1 rounded-full bg-border overflow-hidden cursor-pointer"
                      aria-label={`Schritt ${i + 1}`}
                    >
                      <motion.div
                        key={`${i}-${progressKey}`}
                        className="absolute inset-y-0 left-0 bg-primary rounded-full"
                        initial={{ width: i < activeStep ? '100%' : '0%' }}
                        animate={{
                          width: i < activeStep ? '100%'
                            : i === activeStep ? '100%'
                            : '0%'
                        }}
                        transition={{
                          duration: i === activeStep && isAutoPlaying ? AUTO_PLAY_INTERVAL / 1000 : 0.3,
                          ease: i === activeStep && isAutoPlaying ? 'linear' : 'easeOut',
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Mobile: step title + description below image */}
                <div className="lg:hidden mt-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-bold text-text-heading">
                        {workflowSteps[activeStep].title}
                      </h3>
                      <p className="mt-1 text-sm text-text-muted">
                        {workflowSteps[activeStep].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-border py-20 sm:py-24">
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
              className="relative mx-auto max-w-3xl overflow-hidden border-border-accent bg-bg-elevated text-center"
            >
              {/* Background image */}
              <div
                className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat opacity-15"
                style={{ backgroundImage: "url('/images/reos-login.png')" }}
              />
              {/* Decorative glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
              </div>

              <div className="relative py-4">
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
                  Zu REOS Login
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
