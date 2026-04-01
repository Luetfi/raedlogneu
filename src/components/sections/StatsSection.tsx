'use client'

import { motion } from 'framer-motion'
import { Warehouse, Award, MapPin } from 'lucide-react'
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
  description: string
  icon: LucideIcon
}

const stats: StatConfig[] = [
  {
    end: 50000,
    suffix: '+',
    label: 'eingelagerte Radsätze',
    description: 'Professionell gelagert in klimatisierten Hallen',
    icon: Warehouse,
  },
  {
    end: 25,
    suffix: '+',
    label: 'Jahre Erfahrung',
    description: 'Kompetenz seit der ersten Stunde',
    icon: Award,
  },
  {
    end: 3,
    suffix: '',
    label: 'Standorte',
    description: 'In der Region Stuttgart für Sie erreichbar',
    icon: MapPin,
  },
]

function StatCard({ stat, index }: { stat: StatConfig; index: number }) {
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
      className="group relative"
    >
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-bg-surface/40 backdrop-blur-sm p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-primary/40 hover:bg-bg-surface/60 h-full">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Glow on hover */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative flex flex-col items-center text-center gap-4 sm:gap-5">
          {/* Icon container */}
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:scale-105">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
          </div>

          {/* Number */}
          <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-heading">
            {display}
          </div>

          {/* Label */}
          <div className="space-y-1.5">
            <div className="text-sm sm:text-base font-semibold text-primary uppercase tracking-wider">
              {stat.label}
            </div>
            <div className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-[220px] mx-auto">
              {stat.description}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
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

      {/* Parallax gradient orbs */}
      <ParallaxBackground speed={0.3} className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />
      </ParallaxBackground>

      <Container className="relative">
        <AnimatedSection className="text-center mb-14 lg:mb-16">
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
