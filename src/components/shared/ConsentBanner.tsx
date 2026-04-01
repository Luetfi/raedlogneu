'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const STORAGE_KEY = 'raedlog-consent-acknowledged'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const acknowledged = localStorage.getItem(STORAGE_KEY)
    if (!acknowledged) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-14 lg:bottom-0 inset-x-0 z-50 border-t border-border bg-bg-elevated/95 backdrop-blur-md"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                Diese Website verwendet keine Cookies. Für die Kartendarstellung werden
                Kartenkacheln von einem externen Dienst (CARTO) geladen. Weitere Informationen
                finden Sie in unserer{' '}
                <Link href="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>.
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/datenschutz"
                  className="text-sm text-text-muted hover:text-text transition-colors"
                >
                  Mehr erfahren
                </Link>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Verstanden
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
