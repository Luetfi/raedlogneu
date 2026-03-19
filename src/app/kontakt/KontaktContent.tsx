'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Building2, Smartphone, Printer, CheckCircle, AlertCircle, Send } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'
import { COMPANY, LOCATIONS } from '@/lib/constants'

interface FormState {
  name: string
  email: string
  telefon: string
  firma: string
  nachricht: string
  datenschutz: boolean
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const inputClasses =
  'bg-bg-surface border border-border rounded-lg px-4 py-3 text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors w-full'

const labelClasses = 'block text-sm font-medium text-text-muted mb-1.5'

export default function KontaktContent() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    telefon: '',
    firma: '',
    nachricht: '',
    datenschutz: false,
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Server error')

      setStatus('success')
      setForm({
        name: '',
        email: '',
        telefon: '',
        firma: '',
        nachricht: '',
        datenschutz: false,
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-bg min-h-screen py-16 lg:py-24">
      <Container>
        {/* Page Heading */}
        <SectionHeading
          title="Kontakt"
          subtitle="Ihr Kontakt zu uns"
        />

        {/* Two-column layout: Form + Sidebar */}
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Form — left / main (spans 2 cols) */}
          <AnimatedSection variants={fadeInUp} className="lg:col-span-2">
            <Card hover={false} className="p-8">
              <h2 className="mb-6 text-2xl font-bold text-text-heading">
                Schreiben Sie uns
              </h2>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-start gap-3 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-4 text-green-400"
                >
                  <CheckCircle className="mt-0.5 size-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Nachricht erfolgreich gesendet!</p>
                    <p className="mt-0.5 text-sm text-green-400/80">
                      Wir melden uns so schnell wie möglich bei Ihnen.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-4 text-red-400"
                >
                  <AlertCircle className="mt-0.5 size-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Fehler beim Senden</p>
                    <p className="mt-0.5 text-sm text-red-400/80">
                      Bitte versuchen Sie es erneut oder kontaktieren Sie uns per Telefon.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row: Name + E-Mail */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      E-Mail <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="max@beispiel.de"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Row: Telefon + Firma */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telefon" className={labelClasses}>
                      Telefon <span className="text-primary">*</span>
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      required
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="0711 / 000 00 - 00"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="firma" className={labelClasses}>
                      Firma <span className="text-primary">*</span>
                    </label>
                    <input
                      id="firma"
                      name="firma"
                      type="text"
                      required
                      value={form.firma}
                      onChange={handleChange}
                      placeholder="Muster GmbH"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Nachricht */}
                <div>
                  <label htmlFor="nachricht" className={labelClasses}>
                    Nachricht <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    required
                    rows={6}
                    value={form.nachricht}
                    onChange={handleChange}
                    placeholder="Wie können wir Ihnen helfen?"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Datenschutz */}
                <div className="flex items-start gap-3">
                  <input
                    id="datenschutz"
                    name="datenschutz"
                    type="checkbox"
                    required
                    checked={form.datenschutz}
                    onChange={handleChange}
                    className="mt-1 size-4 shrink-0 cursor-pointer accent-primary"
                  />
                  <label htmlFor="datenschutz" className="text-sm text-text-muted leading-relaxed cursor-pointer">
                    Ich habe die{' '}
                    <Link
                      href="/datenschutz"
                      className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors"
                    >
                      Datenschutzerklärung
                    </Link>{' '}
                    gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.{' '}
                    <span className="text-primary">*</span>
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </AnimatedSection>

          {/* Contact Info Sidebar — right (spans 1 col) */}
          <AnimatedSection variants={fadeInUp} delay={0.15} className="flex flex-col gap-6">
            <Card hover={false} className="p-6">
              <h2 className="mb-5 text-xl font-bold text-text-heading">
                Direkt erreichen
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="group flex items-start gap-3 text-text-muted hover:text-text transition-colors"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Phone className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-text-muted/60 mb-0.5">
                        Telefon
                      </span>
                      <span className="font-semibold text-text">{COMPANY.phone}</span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${COMPANY.mobile.replace(/\s/g, '')}`}
                    className="group flex items-start gap-3 text-text-muted hover:text-text transition-colors"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Smartphone className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-text-muted/60 mb-0.5">
                        Mobil
                      </span>
                      <span className="font-semibold text-text">{COMPANY.mobile}</span>
                    </span>
                  </a>
                </li>

                <li>
                  <div className="flex items-start gap-3 text-text-muted">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-bg-surface text-text-muted/60">
                      <Printer className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-text-muted/60 mb-0.5">
                        Fax
                      </span>
                      <span className="font-semibold text-text">{COMPANY.fax}</span>
                    </span>
                  </div>
                </li>

                <li className="border-t border-border pt-4">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-start gap-3 text-text-muted hover:text-text transition-colors"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Mail className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-text-muted/60 mb-0.5">
                        E-Mail
                      </span>
                      <span className="font-semibold text-text break-all">{COMPANY.email}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </Card>

            {/* HQ Address quick-card */}
            <Card hover={false} className="p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted/60 mb-0.5">
                    Hauptsitz
                  </p>
                  <p className="font-semibold text-text">Hortensienweg 23</p>
                  <p className="text-text-muted">70374 Stuttgart</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Location Cards */}
        <AnimatedSection variants={fadeInUp} delay={0.1} className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-text-heading text-center">
            Unsere Standorte
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {LOCATIONS.map((location) => (
              <motion.div key={location.name} variants={staggerItem}>
                <Card className="h-full p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Building2 className="size-4" />
                    </span>
                    {location.isHQ && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary border border-primary/20">
                        Hauptsitz
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-text-heading mb-1">{location.name}</h3>
                  <div className="flex items-start gap-1.5 text-sm text-text-muted">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-text-muted/50" />
                    <span>
                      {location.street}
                      <br />
                      {location.zip} {location.city}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Google Maps Embed */}
        <AnimatedSection variants={fadeInUp} delay={0.1} className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-text-heading text-center">
            So finden Sie uns
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.5!2d9.2208!3d48.8183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ5JzA1LjkiTiA5wrAxMyoxNC45IkU!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RÄDLOG-Center GmbH Standort Stuttgart"
            />
          </div>
          <p className="mt-3 text-center text-sm text-text-muted">
            Hortensienweg 23, 70374 Stuttgart (Hauptsitz)
          </p>
        </AnimatedSection>
      </Container>
    </main>
  )
}
