'use client'

import { motion } from 'framer-motion'
import { Check, CheckCircle2, ArrowRight, Zap, Disc3, Wrench, Truck } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { staggerContainer, staggerItem, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'

// ── Data ────────────────────────────────────────────────────────────────────

const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard-Service',
    popular: false,
    features: [
      'Hol- und Bringservice',
      'Reinigung',
      'Einlagerung von Kompletträdern bzw. Reifen',
      'Versicherung gegen Diebstahl, Brand und Transportschäden',
    ],
  },
  {
    id: 'komfort',
    name: 'Komfort-Service',
    popular: true,
    features: [
      'Hol- und Bringservice',
      'Reinigung',
      'Räder werden gewuchtet',
      'Einlagerung von Kompletträdern bzw. Reifen',
      'Erfassung von Profiltiefe und Reifenhersteller',
      'Versicherung gegen Diebstahl, Brand und Transportschäden',
    ],
  },
  {
    id: 'premium',
    name: 'Premium-Service',
    popular: false,
    features: [
      'Hol- und Bringservice',
      'Reinigung',
      'Räder werden gewuchtet',
      'Einlagerung von Kompletträdern/Reifen',
      'Komplett-Check (Erfassung sämtlicher Reifendaten, Luftdruck auf 2,5 Bar, Reifen + Felgen Beschädigungen prüfen, Profiltiefe messen)',
      'Versicherung gegen Diebstahl, Brand und Transportschäden',
    ],
  },
]

const timelineSteps = [
  {
    number: '01',
    title: 'Barcode-Erfassung',
    description:
      'Abmontierte Kundenräder erhalten Barcode-Aufkleber für jede Position (VL, VR, HL, HR) — lückenlose Rückverfolgbarkeit von Anfang an.',
  },
  {
    number: '02',
    title: 'Datenerfassung',
    description:
      'Die wichtigsten Reifendaten werden vollständig auf dem Reparaturauftrag dokumentiert und digital hinterlegt.',
  },
  {
    number: '03',
    title: 'Einlagerung',
    description:
      'Der Radsatz wird in einem Rollwagen eingelagert. Volle Rollwagen werden von unserem Team abgeholt und ins Lager überführt.',
  },
  {
    number: '04',
    title: 'Abruf',
    description:
      'Den Radsatz bequem über REOS, telefonisch oder per Fax anfordern — flexibel und unkompliziert.',
  },
  {
    number: '05',
    title: 'Tagesgenaue Anlieferung',
    description:
      'Nur die für die Montage benötigten Räder werden tagesgenau angeliefert — kein Überschuss, kein Aufwand.',
  },
]

const additionalServices = [
  {
    icon: Zap,
    title: 'Power Air',
    description: 'Professionelle Druckluftbehandlung für optimale Reifenpflege.',
  },
  {
    icon: Disc3,
    title: 'Alufelgen-Aufbereitung',
    description: 'Fachmännische Reinigung und Aufbereitung von Alufelgen.',
  },
  {
    icon: Wrench,
    title: 'Reifenmontage bis 24 Zoll',
    description: 'Montage und Demontage aller gängigen Reifengrößen bis 24 Zoll.',
  },
  {
    icon: Truck,
    title: 'Rädermontage vor Ort',
    description: 'Auf Wunsch montieren wir die Räder direkt bei Ihnen vor Ort.',
  },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function LeistungenContent() {
  return (
    <>
      {/* ── Hero / Intro ── */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040810] via-bg to-[#0a1628]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(#0568b1 1px, transparent 1px), linear-gradient(90deg, #0568b1 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Decorative rings */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ border: '70px solid #0568b1' }} />
        <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ border: '50px solid #0568b1' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5 mb-8">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide">
                Rädereinlagerung &amp; Reifenservice
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-text-heading sm:text-5xl lg:text-6xl !leading-[1.1]">
              Unsere{' '}
              <span className="text-primary">Leistungspakete</span>
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed sm:text-xl max-w-2xl mx-auto">
              Werden Sie glücklich machen — mit maßgeschneiderten Paketen für
              professionelle Rädereinlagerung und Hol- &amp; Bringservice in der
              Region Stuttgart.
            </p>
          </AnimatedSection>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* ── Pricing Cards ── */}
      <section className="relative py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Die passende Lösung für Sie"
            subtitle="Alle Pakete beinhalten Hol- und Bringservice sowie umfassenden Versicherungsschutz."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-6 md:grid-cols-3 items-start"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className={plan.popular ? 'md:-mt-4 md:mb-4' : ''}
              >
                <div
                  className={`relative rounded-2xl border p-7 transition-all duration-300 ${
                    plan.popular
                      ? 'border-primary bg-bg-elevated shadow-xl shadow-primary/10'
                      : 'border-border bg-bg-elevated hover:border-border-accent hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1'
                  }`}
                >
                  {/* Popular glow */}
                  {plan.popular && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                  )}

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <h3 className="text-xl font-bold text-text-heading">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <Badge className="shrink-0 border border-primary/30">
                          Beliebt
                        </Badge>
                      )}
                    </div>

                    {/* Divider */}
                    <div className={`h-px mb-6 ${plan.popular ? 'bg-primary/30' : 'bg-border'}`} />

                    {/* Feature list */}
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`h-5 w-5 shrink-0 mt-0.5 ${
                              plan.popular ? 'text-primary' : 'text-primary/70'
                            }`}
                          />
                          <span className="text-sm text-text-muted leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Price note */}
          <AnimatedSection delay={0.2} className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-6 py-3 text-sm text-text-muted">
              <Check className="h-4 w-4 text-primary shrink-0" />
              Ab 29,50 €/Radsatz abhängig von Stückzahl und Leistungspaket zzgl. ges. MwSt.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Process Timeline ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Elevated background */}
        <div className="absolute inset-0 bg-bg-elevated" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #0568b1 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <Container className="relative">
          <SectionHeading
            title="Ablauf der Rädereinlagerung"
            subtitle="Von der Abholung bis zur tagesgenauen Anlieferung — transparent und effizient."
          />

          <div className="relative">
            {/* Vertical connector line (desktop) */}
            <div className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6"
            >
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="relative flex items-start gap-5 lg:gap-7"
                >
                  {/* Step number bubble */}
                  <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-extrabold text-xl z-10">
                    {step.number}
                  </div>

                  {/* Content card */}
                  <Card hover={false} className="flex-1 !hover:translate-y-0">
                    <h3 className="text-lg font-bold text-text-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Additional Services ── */}
      <section className="relative py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Weitere Leistungen"
            subtitle="Über die Einlagerung hinaus bieten wir Ihnen ein umfassendes Serviceangebot."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {additionalServices.map((service) => (
              <motion.div key={service.title} variants={staggerItem}>
                <div className="group relative rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-text-heading mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── CTA Band ── */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
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
        {/* Decorative ring overlay */}
        <div className="absolute -right-32 -bottom-32 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
          style={{ border: '60px solid white' }} />

        <Container className="relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
              Fordern Sie jetzt ein unverbindliches Angebot an. Wir beraten Sie
              persönlich und finden das passende Paket für Ihre Anforderungen.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href="/kontakt"
                size="lg"
                className="!bg-primary !text-white hover:!bg-primary-light !shadow-lg !shadow-black/30"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
