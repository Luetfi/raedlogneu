'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Printer, Smartphone } from 'lucide-react'
import { COMPANY, NAV_ITEMS, LOCATIONS } from '@/lib/constants'
import Container from '@/components/ui/Container'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const locationStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative">
      {/* Gradient-Trennlinie */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      {/* Haupt-Content-Grid */}
      <div
        className="relative bg-bg-elevated"
        style={{
          backgroundImage:
            'radial-gradient(circle, #0568b1 1px, transparent 0)',
          backgroundSize: '24px 24px',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to control dot opacity */}
        <div className="absolute inset-0 bg-bg-elevated/[0.98]" />

        <Container className="relative py-16 lg:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr_1.2fr]"
          >
            {/* 1. Marke */}
            <motion.div variants={staggerItem}>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="RÄDLOG-Center Logo"
                  width={220}
                  height={60}
                  className="h-16 w-auto mb-4 hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-sm text-text-muted/80 leading-relaxed">
                Wir kümmern uns Rund ums Rad — Ihr Partner für Rädereinlagerung, Reifenservice und Logistik im
                Raum Stuttgart, professionell und zuverlässig seit 1998.
              </p>
              <div className="mt-5 h-[2px] w-12 rounded-full bg-primary/40" />
            </motion.div>

            {/* 2. Seiten */}
            <motion.div variants={staggerItem}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-5">
                Seiten
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Startseite', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                  { label: 'Firmenkunden', href: '/firmenkunden' },
                  { label: 'REOS', href: '/reos' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 3. Über Uns */}
            <motion.div variants={staggerItem}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-5">
                Über Uns
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Über uns', href: '/ueber-uns' },
                  { label: 'Karriere', href: '/karriere' },
                  { label: 'Kontakt', href: '/kontakt' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 4. Kontakt & Öffnungszeiten */}
            <motion.div variants={staggerItem}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-5">
                Kontakt
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-text-muted">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href={`tel:${COMPANY.phone.replace(/[\s/-]/g, '')}`}
                    className="hover:text-primary transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted">
                  <Printer className="h-4 w-4 text-primary shrink-0" />
                  <span>{COMPANY.fax}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted">
                  <Smartphone className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href={`tel:${COMPANY.mobile.replace(/[\s/-]/g, '')}`}
                    className="hover:text-primary transition-colors"
                  >
                    {COMPANY.mobile}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </li>
              </ul>

              <div className="mt-5 flex items-center gap-3 text-sm text-text-muted">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Mo – Fr: 7:00 – 17:00 Uhr</span>
              </div>
            </motion.div>

            {/* 5. Unsere Standorte */}
            <motion.div variants={staggerItem}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-5">
                Unsere Standorte
              </h4>
              <motion.div
                variants={locationStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2"
              >
                {LOCATIONS.map((loc) => (
                  <motion.a
                    key={loc.name}
                    variants={staggerItem}
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${loc.street}, ${loc.zip} ${loc.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors group"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{loc.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Zone D — Copyright Bar */}
      <div className="bg-bg-elevated">
        <Container className="border-t border-border pt-6 pb-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-text-muted text-center sm:text-left">
              &copy; {year} {COMPANY.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <Link
                href="/impressum"
                className="hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <span className="text-border">|</span>
              <Link
                href="/datenschutz"
                className="hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
