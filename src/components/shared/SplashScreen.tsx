'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()
  const isInitialLoad = useRef(true)

  // Initial load: 1600ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      isInitialLoad.current = false
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  // Navigation: 800ms splash + scroll to top
  useEffect(() => {
    if (isInitialLoad.current) return
    setVisible(true)
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setVisible(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
        >
          {/* Radial glow behind logo */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/images/logo.png"
              alt="RÄDLOG-Center"
              width={320}
              height={90}
              className="h-20 sm:h-24 w-auto relative"
              priority
            />
          </motion.div>

          {/* Animated loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 w-48 h-[2px] rounded-full bg-border overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 0.9,
                ease: 'easeInOut',
                repeat: 1,
              }}
              className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
