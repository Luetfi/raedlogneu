'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// Alt-Texte nennen die Marke im Kundenkontext — die Logoleiste ist ein
// Trust-Signal und soll auch fuer Bildsuche und KI-Crawler lesbar sein.
const logos = [
  { src: '/logos/amg.webp', alt: 'Mercedes-AMG — Kunde der RÄDLOG-Center GmbH', width: 225, height: 225, className: 'h-24 sm:h-32 lg:h-40' },
  { src: '/logos/mercedes.webp', alt: 'Mercedes-Benz — Kunde der RÄDLOG-Center GmbH', width: 400, height: 400, className: 'h-14 sm:h-18 lg:h-22' },
  { src: '/logos/vw.webp', alt: 'Volkswagen — Kunde der RÄDLOG-Center GmbH', width: 400, height: 399 },
  { src: '/logos/audi.webp', alt: 'Audi — Kunde der RÄDLOG-Center GmbH', width: 400, height: 299 },
  { src: '/logos/bmw.webp', alt: 'BMW — Kunde der RÄDLOG-Center GmbH', width: 400, height: 400, className: 'h-20 sm:h-24 lg:h-30' },
  { src: '/logos/skoda.webp', alt: 'Škoda — Kunde der RÄDLOG-Center GmbH', width: 400, height: 400 },
  { src: '/logos/ford.webp', alt: 'Ford — Kunde der RÄDLOG-Center GmbH', width: 400, height: 150, className: 'h-12 sm:h-14 lg:h-16' },
  { src: '/logos/jaguar.webp', alt: 'Jaguar — Kunde der RÄDLOG-Center GmbH', width: 400, height: 205, className: 'h-14 sm:h-16 lg:h-20' },
  { src: '/logos/seat.webp', alt: 'SEAT — Kunde der RÄDLOG-Center GmbH', width: 400, height: 318 },
  { src: '/logos/volvo.webp', alt: 'Volvo — Kunde der RÄDLOG-Center GmbH', width: 400, height: 400 },
]

export default function PartnerSlider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative pt-16 pb-8 lg:pt-20 lg:pb-10"
    >
      <div className="text-center mb-10 px-4">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Unsere Kunden
        </span>
        <p className="mt-3 text-base text-text-muted">
          Marken und Autohäuser, die auf RÄDLOG-Center vertrauen
        </p>
      </div>
      <div className="overflow-hidden logo-slider-mask">
        <div className="flex animate-scroll pointer-events-none w-max">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5 sm:px-12 lg:px-16 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`${logo.className || 'h-16 sm:h-20 lg:h-24'} w-auto opacity-40 grayscale pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
