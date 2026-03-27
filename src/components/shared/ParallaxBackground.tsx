'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxBackgroundProps {
  children: ReactNode
  className?: string
  speed?: number
}

export default function ParallaxBackground({
  children,
  className,
  speed = 0.15,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const range = speed * 100
  const y = useTransform(scrollYProgress, [0, 1], [range, -range])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform max-lg:!transform-none"
      >
        {children}
      </motion.div>
    </div>
  )
}
