'use client'

import { motion } from 'framer-motion'
import { Truck, Sparkles, Monitor, CalendarCheck, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import ParallaxBackground from '@/components/shared/ParallaxBackground'
import Button from '@/components/ui/Button'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { LucideIcon } from 'lucide-react'

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Abholung & Annahme',
    description: 'Wir holen Ihre Kundenräder direkt bei Ihnen ab — termingerecht und zuverlässig.',
    icon: Truck,
  },
  {
    number: '02',
    title: 'Reinigung & Einlagerung',
    description: 'Professionelle Reinigung und sichere Lagerung mit Barcode-Erfassung jeder Position.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Verwaltung via REOS',
    description: 'Alle Radsätze online einsehbar und verwaltbar über unser eigenes System.',
    icon: Monitor,
  },
  {
    number: '04',
    title: 'Tagesgenaue Anlieferung',
    description: 'Gereinigt, gewuchtet und genau dann geliefert, wenn Sie die Räder brauchen.',
    icon: CalendarCheck,
  },
]

const connectorVariant = (index: number) => ({
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.3 + index * 0.15, ease: 'easeOut' as const },
  },
})

const verticalConnectorVariant = (index: number) => ({
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 + index * 0.15, ease: 'easeOut' as const },
  },
})

export default function ProcessFlow() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Parallax background dots */}
      <ParallaxBackground speed={0.12} className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0568b1 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </ParallaxBackground>

      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <Container className="relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Wie es funktioniert
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            In 4 Schritten zum sorgenfreien Räderwechsel
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
        </AnimatedSection>

        {/* ── Desktop: horizontal flow ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="hidden lg:grid grid-cols-4 gap-0"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div key={step.number} variants={staggerItem} className="relative px-4">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <motion.div
                    variants={connectorVariant(i)}
                    className="absolute top-8 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-[2px] origin-left"
                  >
                    <div className="h-full bg-gradient-to-r from-primary/40 to-primary/20" />
                    {/* Arrow */}
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-primary/30" />
                  </motion.div>
                )}

                {/* Step circle */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Mobile: vertical flow ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:hidden flex flex-col"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div key={step.number} variants={staggerItem} className="flex items-stretch gap-4">
                {/* Left column: icon + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <motion.div
                      variants={verticalConnectorVariant(i)}
                      className="w-px flex-1 bg-gradient-to-b from-primary/40 to-primary/20 origin-top mt-2"
                    />
                  )}
                </div>

                {/* Right column: text */}
                <div className={`pt-1 ${i < steps.length - 1 ? 'pb-8' : ''}`}>
                  <h3 className="text-base font-bold text-text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <AnimatedSection className="mt-14 text-center">
          <Button href="/leistungen" variant="outline">
            Alle Details zum Ablauf
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  )
}
