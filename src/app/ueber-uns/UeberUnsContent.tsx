'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Heart,
  Shield,
  Handshake,
  Lightbulb,
  Building2,
  MapPin,
  Calendar,
  Star,
  X,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import PageHero from '@/components/ui/PageHero'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Timeline from '@/components/sections/Timeline'
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from '@/lib/animations'

interface TeamMember {
  name: string
  role: string
  initials: string
  description: string
  isFounder?: boolean
  gradient: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jörg Hoffmann',
    role: 'Geschäftsführer & Gründer',
    initials: 'JH',
    description:
      'Gründete 1998 das Unternehmen mit der Vision, Autohäusern und Fuhrparks einen zuverlässigen Partner für die Rädereinlagerung zu bieten. Führt das Unternehmen mit Leidenschaft und langjähriger Branchenexpertise.',
    isFounder: true,
    gradient: 'from-primary via-primary-light to-primary',
  },
  {
    name: 'Dominik Hoffmann',
    role: 'Geschäftsleitung',
    initials: 'DH',
    description:
      'Verantwortet als Teil der Geschäftsleitung die operative Weiterentwicklung des Unternehmens und sorgt für reibungslose Abläufe an allen Standorten.',
    gradient: 'from-primary-light via-primary to-primary-light',
  },
  {
    name: 'Tim Hoffmann',
    role: 'Geschäftsleitung',
    initials: 'TH',
    description:
      'Bringt als Teil der Geschäftsleitung frische Impulse ein und treibt die Modernisierung von Prozessen und Kundenservice voran.',
    gradient: 'from-primary via-primary-light to-primary',
  },
]

const companyFacts = [
  { icon: Calendar, label: 'Gründung', value: '1998' },
  { icon: MapPin, label: 'Standorte', value: '3 im Raum Stuttgart' },
  { icon: Users, label: 'Führung', value: 'Familie Hoffmann' },
  { icon: Building2, label: 'Spezialisierung', value: 'Räder- & Reifenlogistik' },
]

const values = [
  {
    icon: Heart,
    title: 'Familie',
    description: 'Persönlich. Vertrauensvoll. Seit 1998.',
  },
  {
    icon: Shield,
    title: 'Zuverlässigkeit',
    description: 'Pünktlich und sorgfältig — bei jedem Auftrag.',
  },
  {
    icon: Handshake,
    title: 'Partnerschaft',
    description: 'Langjährige Beziehungen statt kurzfristiger Geschäfte.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Digitale Prozesse mit eigenem REOS-System.',
  },
]

// ── Person Silhouette SVG ───────────────────────────────────────────────────

function PersonSilhouette({ id, size = 'sm' }: { id: string; size?: 'sm' | 'lg' }) {
  const dims = size === 'lg' ? 'w-36 h-36' : 'w-28 h-28'
  return (
    <div
      className={`${dims} mx-auto rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 overflow-hidden flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`silhouette-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0568b1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0a7fd4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="42" r="20" fill={`url(#silhouette-${id})`} />
        <ellipse cx="60" cy="105" rx="36" ry="26" fill={`url(#silhouette-${id})`} />
      </svg>
    </div>
  )
}

// ── Team Card ───────────────────────────────────────────────────────────────

function TeamCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card
        className={`relative overflow-hidden text-center h-full flex flex-col items-center ${
          member.isFounder ? 'ring-2 ring-primary/20' : ''
        }`}
      >
        {/* Top accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
        />

        {/* Founder badge */}
        {member.isFounder && (
          <div className="absolute top-3 right-3">
            <Badge>
              <Star className="mr-1 h-3 w-3" />
              Gründer
            </Badge>
          </div>
        )}

        {/* Silhouette avatar */}
        <div className="mt-2 mb-5 ring-4 ring-primary/10 rounded-full transition-all duration-300 group-hover:ring-primary/25 group-hover:shadow-lg group-hover:shadow-primary/10">
          <PersonSilhouette id={`card-${member.initials}`} />
        </div>

        {/* Name & role */}
        <h3 className="text-xl font-bold text-text-heading">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>

        {/* Hover hint */}
        <p className="mt-4 text-xs text-text-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Mehr erfahren
        </p>
      </Card>
    </motion.div>
  )
}

// ── Team Member Modal ───────────────────────────────────────────────────────

function TeamMemberModal({
  member,
  onClose,
}: {
  member: TeamMember | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {member && (
        <div className="relative z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg rounded-2xl border border-border bg-bg-elevated p-8 shadow-2xl shadow-black/40 pointer-events-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-text-muted hover:text-text-heading hover:bg-white/5 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Founder badge */}
              {member.isFounder && (
                <div className="flex justify-center mb-4">
                  <Badge>
                    <Star className="mr-1.5 h-3.5 w-3.5" />
                    Gründer
                  </Badge>
                </div>
              )}

              {/* Silhouette */}
              <div className="ring-4 ring-primary/15 rounded-full w-fit mx-auto">
                <PersonSilhouette id={`modal-${member.initials}`} size="lg" />
              </div>

              {/* Name & role */}
              <h3 className="mt-6 text-center text-2xl font-bold text-text-heading">
                {member.name}
              </h3>
              <p className="mt-1 text-center text-sm font-medium text-primary">
                {member.role}
              </p>

              {/* Divider */}
              <div className="mx-auto mt-5 h-px w-16 bg-primary/30" />

              {/* Description */}
              <p className="mt-5 text-center text-base leading-relaxed text-text-muted">
                {member.description}
              </p>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

// ── Page Content ────────────────────────────────────────────────────────────

export default function UeberUnsContent() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <main className="min-h-screen bg-bg text-text">
      {/* ── Hero ── */}
      <PageHero
        title={<>Über uns — <span className="text-primary">RÄDLOG-Center GmbH</span></>}
        subtitle="Ein Familienunternehmen mit Leidenschaft für Räder- und Reifenlogistik — seit 1998 im Raum Stuttgart zuhause."
      />

      {/* ── Unternehmensphilosophie ── */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection variants={fadeInLeft}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Unser Antrieb
              </p>
              <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
                Philosophie & Werte
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Was 1998 als Ein-Mann-Betrieb begann, ist heute ein etabliertes
                Familienunternehmen mit drei Standorten. Gegründet von Jörg Hoffmann,
                geführt gemeinsam mit seinen Söhnen Dominik und Tim — vereint durch die
                Überzeugung, dass exzellenter Service auf persönlichen Beziehungen aufbaut.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Unsere Kunden — Autohäuser, Fuhrparks und Autovermietungen — schätzen uns
                als verlässlichen Partner, der mitdenkt und mitanpackt. Diese
                Partnerschaftlichkeit ist tief in unserer Unternehmens-DNA verankert.
              </p>
            </AnimatedSection>

            <AnimatedSection variants={fadeInRight}>
              <Card hover={false} className="space-y-5">
                <h3 className="text-lg font-semibold text-text-heading">
                  Auf einen Blick
                </h3>
                {companyFacts.map((fact) => {
                  const Icon = fact.icon
                  return (
                    <div key={fact.label} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">{fact.label}</p>
                        <p className="font-semibold text-text-heading">{fact.value}</p>
                      </div>
                    </div>
                  )
                })}
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── Firmengeschichte / Timeline ── */}
      <Timeline />

      {/* ── Team ── */}
      <section className="bg-bg-elevated py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Unser Team"
            subtitle="Die Familie Hoffmann steht an der Spitze des Unternehmens — vereint durch gemeinsame Werte und eine klare Vision."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Unsere Werte ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Subtle radial glow behind the section */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
        </div>

        <Container className="relative">
          <SectionHeading
            title="Unsere Werte"
            subtitle="Was uns antreibt und was unsere Kunden an uns schätzen."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mx-auto grid max-w-4xl gap-px sm:grid-cols-2 rounded-2xl overflow-hidden border border-border bg-border"
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  className="group relative bg-bg-elevated p-8 lg:p-10 transition-colors duration-500 hover:bg-bg-surface"
                >
                  {/* Hover accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/10 group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-500">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-heading">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* ── Team Member Modal ── */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  )
}
