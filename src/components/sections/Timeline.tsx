'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Rocket,
  Wrench,
  MapPin,
  Monitor,
  Building2,
  Globe,
  Circle,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

interface TimelineEvent {
  year: number
  description: string
  icon: React.ElementType
  image?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1998,
    description: 'Firmengründung durch Jörg Hoffmann, spezialisiert auf Rädereinlagerung',
    icon: Rocket,
  },
  {
    year: 2002,
    description: 'Erweiterung der Serviceleistungen Wuchten und Neureifenmontage',
    icon: Wrench,
  },
  {
    year: 2006,
    description: 'Eröffnung des Standorts Stuttgart-Sommerrain',
    icon: MapPin,
  },
  {
    year: 2006,
    description: 'Einführung REOS (Räder-Einlagerung-Online-System)',
    icon: Monitor,
  },
  {
    year: 2007,
    description: 'Erweiterung der Serviceleistung Rädermontage bei der Daimler AG',
    icon: Wrench,
  },
  {
    year: 2009,
    description: 'Gründung der RÄDLOG-Center GmbH',
    icon: Building2,
  },
  {
    year: 2009,
    description: 'Um-/Ausbau des Standorts Stuttgart-Sommerrain',
    icon: MapPin,
  },
  {
    year: 2010,
    description: 'Anpassung System REOS an Mercedes-AMG Bedürfnisse',
    icon: Monitor,
  },
  {
    year: 2011,
    description: 'Eröffnung eines weiteren Standorts in Fellbach-Schmiden',
    icon: MapPin,
  },
  {
    year: 2012,
    description: 'Relaunch des Internetauftritts der RÄDLOG-Center GmbH',
    icon: Globe,
  },
  {
    year: 2013,
    description: 'Umzug von Fellbach-Schmiden nach Kornwestheim',
    icon: MapPin,
  },
  {
    year: 2016,
    description: 'Eröffnung eines zusätzlichen Standorts in Aldingen/Remseck',
    icon: MapPin,
  },
]

interface TimelineItemProps {
  event: TimelineEvent
  index: number
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0
  const Icon = event.icon

  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: 'easeOut' as const, delay: 0.05 },
    },
  }

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'backOut' as const, delay: 0.15 },
    },
  }

  return (
    <div ref={ref} className="relative flex items-center">
      {/* ── Desktop layout ── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:w-full lg:gap-0">
        {/* Left slot */}
        <div className="flex justify-end pr-10">
          {isLeft && (
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="w-full max-w-sm"
            >
              <EventCard event={event} Icon={Icon} />
            </motion.div>
          )}
        </div>

        {/* Centre dot */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={dotVariants}
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-primary bg-bg shadow-lg shadow-primary/20"
        >
          <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
        </motion.div>

        {/* Right slot */}
        <div className="flex justify-start pl-10">
          {!isLeft && (
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="w-full max-w-sm"
            >
              <EventCard event={event} Icon={Icon} />
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="flex w-full items-start gap-5 lg:hidden">
        {/* Left: dot on the line */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={dotVariants}
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-primary bg-bg shadow-md shadow-primary/20"
          >
            <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
          </motion.div>
        </div>

        {/* Right: card */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
          className="flex-1 pb-2"
        >
          <EventCard event={event} Icon={Icon} />
        </motion.div>
      </div>
    </div>
  )
}

function EventCard({ event, Icon }: { event: TimelineEvent; Icon: React.ElementType }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-border-accent"
    >
      {/* Subtle primary glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary/0.07)_0%,transparent_70%)]"
      />

      <div className="p-4">
        {/* Year badge */}
        <div className="mb-3 flex items-center gap-3">
          <span className="text-2xl font-extrabold tracking-tight text-primary leading-none">
            {event.year}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        {/* Description */}
        <p className="relative text-base leading-relaxed text-text-muted group-hover:text-text transition-colors duration-200">
          {event.description}
        </p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="chronik" className="bg-bg-elevated py-14 lg:py-20">
      <Container>
        <SectionHeading
          title="Unsere Firmengeschichte"
          subtitle="Jeder Schritt hat uns zu dem gemacht, was wir heute sind."
        />

        {/* Timeline wrapper */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0
              left-5
              lg:left-1/2 lg:-translate-x-px
            "
          />

          {/* Events */}
          <div className="flex flex-col gap-6 pl-0 lg:pl-0">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={`${event.year}-${index}`} event={event} index={index} />
            ))}
          </div>

          {/* End cap dot */}
          <div className="relative flex justify-center lg:justify-center mt-6">
            <div
              aria-hidden="true"
              className="
                absolute left-5 lg:left-1/2 lg:-translate-x-1/2
                flex h-8 w-8 -translate-x-1/2 items-center justify-center
                rounded-full border-4 border-primary/40 bg-bg
              "
            >
              <Circle className="h-3 w-3 text-primary/60" fill="currentColor" strokeWidth={0} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
