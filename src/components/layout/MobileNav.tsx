'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, LogIn, Home, Users, Wrench, Building2, Monitor, Briefcase, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, COMPANY } from '@/lib/constants'

const NAV_ICONS: Record<string, React.ElementType> = {
  '/': Home,
  '/ueber-uns': Users,
  '/leistungen': Wrench,
  '/firmenkunden': Building2,
  '/reos': Monitor,
  '/karriere': Briefcase,
  '/kontakt': Mail,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 rounded-xl text-text-muted hover:text-text-heading hover:bg-bg-surface/80 transition-colors"
        aria-label="Menü öffnen"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={setIsOpen} className="relative z-[60]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex justify-end">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                className="w-full max-w-sm"
              >
                <DialogPanel className="bg-bg-elevated shadow-2xl flex flex-col h-dvh">
                {/* Header mit Logo und Close */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center"
                  >
                    <Image
                      src="/images/logo.png"
                      alt="RÄDLOG-Center Logo"
                      width={160}
                      height={45}
                      className="h-9 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl text-text-muted hover:text-text-heading hover:bg-bg-surface/80 transition-colors"
                    aria-label="Menü schließen"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation */}
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 px-4 py-6 space-y-1 overflow-y-auto"
                >
                  {NAV_ITEMS.map((item) => {
                    const Icon = NAV_ICONS[item.href]
                    const isActive = pathname === item.href

                    return (
                      <motion.div key={item.href} variants={itemVariants}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                            isActive
                              ? 'text-primary bg-primary/10 border-l-2 border-primary'
                              : 'text-text-muted hover:text-text-heading hover:bg-bg-surface/60 border-l-2 border-transparent'
                          }`}
                        >
                          {Icon && <Icon className="h-5 w-5 shrink-0" />}
                          {item.label}
                        </Link>
                      </motion.div>
                    )
                  })}

                  {/* Separator */}
                  <motion.div variants={itemVariants} className="mx-2 pt-3">
                    <div className="border-t border-border/40" />
                  </motion.div>

                  {/* REOS Login */}
                  <motion.div variants={itemVariants} className="pt-3 px-2">
                    <a
                      href={COMPANY.reosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-light"
                    >
                      <LogIn className="h-5 w-5" />
                      REOS Login
                    </a>
                  </motion.div>
                </motion.nav>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-border/30">
                  <p className="text-xs text-text-muted text-center">
                    {COMPANY.tagline}
                  </p>
                  <p className="text-xs text-text-muted text-center mt-1">
                    <a href={`tel:${COMPANY.phone.replace(/[\s\/\-]/g, '')}`} className="hover:text-primary transition-colors">
                      {COMPANY.phone}
                    </a>
                  </p>
                </div>
              </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}
