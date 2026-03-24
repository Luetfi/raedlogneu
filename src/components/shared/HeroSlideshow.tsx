'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { src: '/images/hero1.jpg', position: 'center 40%' },
  { src: '/images/hero2.jpg', position: 'center' },
  { src: '/images/hero3.jpg', position: 'center' },
  { src: '/images/hero4.jpg', position: 'center' },
  { src: '/images/hero5.jpg', position: 'center 40%' },
]

const INTERVAL = 6000
const FADE_DURATION = 1.5

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  return (
    <>
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: `url('${images[current].src}')`,
              backgroundPosition: images[current].position,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay — always on top of slides */}
      <div className="absolute inset-0 bg-[#040810]/60" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(4,8,16,0.1) 0%, rgba(4,8,16,0.4) 100%)' }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Bild ${i + 1} anzeigen`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? 'w-6 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </>
  )
}
