'use client'

import { motion } from 'framer-motion'
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
  ArrowRight,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import AnimatedSection from '@/components/shared/AnimatedSection'
import {
  fadeInUp,
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
  { icon: MapPin, label: 'Standorte', value: '4 im Raum Stuttgart' },
  { icon: Users, label: 'Führung', value: 'Familie Hoffmann' },
  { icon: Building2, label: 'Spezialisierung', value: 'Räder- & Reifenlogistik' },
]

const values = [
  {
    icon: Heart,
    title: 'Familie',
    description:
      'Als Familienunternehmen stehen persönliche Beziehungen und Vertrauen im Mittelpunkt — zu unseren Mitarbeitern und Kunden gleichermaßen.',
  },
  {
    icon: Shield,
    title: 'Zuverlässigkeit',
    description:
      'Unsere Kunden verlassen sich auf uns — bei jeder Einlagerung, jedem Service und jeder Auslieferung. Pünktlichkeit und Sorgfalt sind unser Versprechen.',
  },
  {
    icon: Handshake,
    title: 'Partnerschaft',
    description:
      'Wir verstehen uns als verlängerter Arm unserer Kunden. Langjährige Geschäftsbeziehungen sind der beste Beweis für unsere partnerschaftliche Zusammenarbeit.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Mit REOS, unserem eigenen Online-System, und stetig optimierten Prozessen setzen wir Maßstäbe in der digitalen Räderlogistik.',
  },
]

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div variants={staggerItem} className="group">
      <Card className={`relative overflow-hidden text-center ${member.isFounder ? 'ring-2 ring-primary/20' : ''}`}>
        {/* Subtle top accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
        />

        {/* Founder badge */}
        {member.isFounder && (
          <div className="mb-4 flex justify-center">
            <Badge>
              <Star className="mr-1.5 h-3.5 w-3.5" />
              Gründer
            </Badge>
          </div>
        )}

        {/* Avatar placeholder */}
        <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 ring-4 ring-primary/10 transition-all duration-300 group-hover:ring-primary/25 group-hover:shadow-lg group-hover:shadow-primary/10">
          <span className={`text-3xl font-bold bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent`}>
            {member.initials}
          </span>
        </div>

        {/* Name & role */}
        <h3 className="text-xl font-bold text-text-heading">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {member.description}
        </p>
      </Card>
    </motion.div>
  )
}

export default function UeberUnsContent() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border bg-bg-elevated py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.primary/0.12)_0%,transparent_60%)]"
        />
        <Container>
          <AnimatedSection variants={fadeInUp} className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">
              <Users className="mr-1.5 h-3.5 w-3.5" />
              Über uns
            </Badge>
            <h1 className="text-4xl font-bold text-text-heading sm:text-5xl lg:text-6xl">
              Über uns —{' '}
              <span className="text-primary">RÄDLOG-Center GmbH</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-muted sm:text-xl">
              Ein Familienunternehmen mit Leidenschaft für Räder- und Reifenlogistik —
              seit 1998 im Raum Stuttgart zuhause.
            </p>
          </AnimatedSection>
        </Container>
      </section>

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
                Familienunternehmen mit vier Standorten. Gegründet von Jörg Hoffmann,
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
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Unsere Werte ── */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Unsere Werte"
            subtitle="Was uns antreibt und was unsere Kunden an uns schätzen."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div key={value.title} variants={staggerItem}>
                  <Card className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text-heading">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-bg-elevated py-20 lg:py-24">
        <Container>
          <AnimatedSection variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
              Interesse geweckt?
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Wir freuen uns auf den Austausch mit Ihnen — ob als Kunde, Partner oder
              zukünftiger Kollege.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" size="lg">
                Kontakt aufnehmen
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
