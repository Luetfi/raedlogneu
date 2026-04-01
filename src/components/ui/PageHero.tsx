'use client'

import { useState, useCallback, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from './Container'
import { fadeInUp } from '@/lib/animations'

const defaultVideos = ['/images/hero-video.mp4', '/images/hero-video-2.mp4']

interface PageHeroProps {
  title: ReactNode
  subtitle: ReactNode
  videos?: string[]
}

export default function PageHero({ title, subtitle, videos }: PageHeroProps) {
  const videoList = videos ?? defaultVideos
  const [currentVideo, setCurrentVideo] = useState(0)

  const handleEnded = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % videoList.length)
  }, [])

  return (
    <section className="relative flex h-[340px] items-center overflow-hidden border-b border-border sm:h-[380px] lg:h-[420px]">
      {/* Background videos — crossfade between two */}
      <AnimatePresence mode="sync">
        <motion.video
          key={currentVideo}
          autoPlay
          muted
          playsInline
          loop={videoList.length === 1}
          onEnded={videoList.length > 1 ? handleEnded : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoList[currentVideo]}
        />
      </AnimatePresence>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Radial gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.primary/0.12)_0%,transparent_60%)]"
      />
      <Container className="relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold text-text-heading sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted sm:text-xl">
            {subtitle}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
