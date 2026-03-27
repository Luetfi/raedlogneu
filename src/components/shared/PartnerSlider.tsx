'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const logos = [
  { src: '/logos/amg.png', alt: 'AMG', className: 'h-24 sm:h-32 lg:h-40' },
  { src: '/logos/mercedes.png', alt: 'Mercedes-Benz', className: 'h-14 sm:h-18 lg:h-22' },
  { src: '/logos/vw.png', alt: 'Volkswagen' },
  { src: '/logos/audi.png', alt: 'Audi' },
  { src: '/logos/bmw.png', alt: 'BMW', className: 'h-20 sm:h-24 lg:h-30' },
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
      <div className="text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Unsere Kunden
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-scroll pointer-events-none w-max">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 sm:px-12 lg:px-16 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className || 'h-16 sm:h-20 lg:h-24'} w-auto opacity-40 grayscale pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
