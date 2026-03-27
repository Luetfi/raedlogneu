'use client'

import { motion } from 'framer-motion'
import { Warehouse, Clock, Award, MapPin } from 'lucide-react'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import ParallaxBackground from '@/components/shared/ParallaxBackground'
import { useCountUp } from '@/hooks/useCountUp'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { LucideIcon } from 'lucide-react'

interface StatConfig {
  end: number
  decimals?: number
  suffix: string
  label: string
  icon: LucideIcon
}

const stats: StatConfig[] = [
  { end: 50000, suffix: '+', label: 'eingelagerte Radsätze', icon: Warehouse },
  { end: 99.8, suffix: '%', decimals: 1, label: 'Pünktlichkeit', icon: Clock },
  { end: 25, suffix: '+', label: 'Jahre Erfahrung', icon: Award },
  { end: 3, suffix: '', label: 'Standorte', icon: MapPin },
]

function StatItem({ stat, index }: { stat: StatConfig; index: number }) {
  const { ref, display } = useCountUp({
    end: stat.end,
    decimals: stat.decimals ?? 0,
    suffix: stat.suffix,
    duration: stat.end > 100 ? 2500 : 1800,
  })

  const Icon = stat.icon

  return (
    <motion.div
      variants={staggerItem}
      ref={ref}
      className={`relative text-center py-8 ${
        index > 0 ? 'lg:border-l border-primary/15' : ''
      }`}
    >
      {/* Background icon */}
      <Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-primary opacity-[0.06]" />

      <div className="relative">
        <div className="text-5xl sm:text-6xl font-extrabold text-primary tracking-tight">
          {display}
        </div>
        <div className="mt-2 text-sm sm:text-base text-text-muted font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-elevated" />

      {/* Parallax dot pattern */}
      <ParallaxBackground speed={0.15} className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0568b1 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </ParallaxBackground>

      {/* Parallax gradient orb */}
      <ParallaxBackground speed={0.3} className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />
      </ParallaxBackground>

      <Container className="relative">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            RÄDLOG in Zahlen
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            Fakten, die überzeugen
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
