'use client'

import { useState, useRef, type ChangeEvent, type FormEvent } from 'react'
import { Briefcase, Users, MapPin, Building2, Upload, CheckCircle, AlertCircle, ArrowDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PageHero from '@/components/ui/PageHero'
import Breadcrumb from '@/components/shared/Breadcrumb'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { fadeInUp } from '@/lib/animations'
import Link from 'next/link'

const benefits = [
  {
    icon: Users,
    title: 'Familiäres Arbeitsumfeld',
    description: 'Offenes Miteinander, flache Hierarchien und ein starkes Teamgefühl.',
  },
  {
    icon: Building2,
    title: 'Wachsendes Unternehmen',
    description: 'Seit 1998 kontinuierlich gewachsen — mit langfristigen Perspektiven.',
  },
  {
    icon: MapPin,
    title: 'Region Stuttgart',
    description: 'Drei Standorte in einer Wirtschaftsregion mit hoher Lebensqualität.',
  },
  {
    icon: Briefcase,
    title: 'Spezialisierte Branche',
    description: 'Spannende Aufgaben rund um Räder- und Reifenlogistik.',
  },
]

const facts = [
  { label: 'Gegründet', value: '1998' },
  { label: 'Standorte', value: '3 in der Region Stuttgart' },
  { label: 'Spezialisierung', value: 'Räder- & Reifenlogistik' },
]

interface FormData {
  vorname: string
  nachname: string
  email: string
  telefon: string
  nachricht: string
  datenschutz: boolean
}

interface FormErrors {
  vorname?: string
  nachname?: string
  email?: string
  nachricht?: string
  lebenslauf?: string
  datenschutz?: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const MAX_FILE_SIZE_MB = 5
const ALLOWED_FILE_TYPES = ['.pdf', '.doc', '.docx']
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export default function KarriereContent() {
  const [formData, setFormData] = useState<FormData>({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    nachricht: '',
    datenschutz: false,
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.vorname.trim()) newErrors.vorname = 'Vorname ist erforderlich.'
    if (!formData.nachname.trim()) newErrors.nachname = 'Nachname ist erforderlich.'
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }
    if (!formData.nachricht.trim()) newErrors.nachricht = 'Anschreiben ist erforderlich.'
    if (selectedFile) {
      const ext = '.' + selectedFile.name.split('.').pop()?.toLowerCase()
      if (!ALLOWED_MIME_TYPES.includes(selectedFile.type) && !ALLOWED_FILE_TYPES.includes(ext)) {
        newErrors.lebenslauf = 'Nur PDF, DOC oder DOCX Dateien sind erlaubt.'
      } else if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        newErrors.lebenslauf = `Die Datei darf maximal ${MAX_FILE_SIZE_MB} MB groß sein.`
      }
    }
    if (!formData.datenschutz) newErrors.datenschutz = 'Bitte stimmen Sie der Datenschutzerklärung zu.'

    return newErrors
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setSelectedFile(file)
    if (errors.lebenslauf) {
      setErrors((prev) => ({ ...prev, lebenslauf: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitStatus('loading')

    try {
      const payload = new FormData()
      payload.append('vorname', formData.vorname)
      payload.append('nachname', formData.nachname)
      payload.append('email', formData.email)
      payload.append('telefon', formData.telefon)
      payload.append('nachricht', formData.nachricht)
      if (selectedFile) {
        payload.append('lebenslauf', selectedFile)
      }

      const res = await fetch('/api/karriere', {
        method: 'POST',
        body: payload,
      })

      if (!res.ok) throw new Error('Server error')

      setSubmitStatus('success')
      setFormData({ vorname: '', nachname: '', email: '', telefon: '', nachricht: '', datenschutz: false })
      setSelectedFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch {
      setSubmitStatus('error')
    }
  }

  const inputBase =
    'w-full rounded-lg border border-border bg-bg-surface px-4 py-3 text-text placeholder:text-text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
  const inputError = 'border-red-500 focus:border-red-500 focus:ring-red-500/20'

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <PageHero
        title={<>Karriere bei <span className="whitespace-nowrap text-primary">RÄDLOG-Center</span></>}
        subtitle="Werden Sie Teil unseres Teams — bewerben Sie sich jetzt in wenigen Minuten initiativ."
        cta={
          <Button href="#bewerbung" size="lg">
            Jetzt bewerben
            <ArrowDown className="h-5 w-5" />
          </Button>
        }
      />
      <Breadcrumb items={[{ name: 'Karriere', href: '/karriere' }]} />

      {/* Application Form */}
      <section id="bewerbung" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Initiativbewerbung"
            subtitle="In wenigen Minuten beworben — wir melden uns schnellstmöglich bei Ihnen."
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
            {submitStatus === 'success' ? (
              <AnimatedSection variants={fadeInUp}>
                <Card className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-text-heading">
                    Bewerbung erfolgreich eingegangen!
                  </h3>
                  <p className="text-text-muted">
                    Vielen Dank für Ihre Bewerbung. Wir werden uns so schnell wie möglich bei Ihnen
                    melden.
                  </p>
                  <div className="mt-6">
                    <Button
                      onClick={() => setSubmitStatus('idle')}
                      variant="outline"
                    >
                      Weitere Bewerbung senden
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ) : (
              <AnimatedSection variants={fadeInUp}>
                <Card hover={false}>
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name Row */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="vorname" className="mb-1.5 block text-sm font-medium text-text-heading">
                          Vorname <span className="text-primary">*</span>
                        </label>
                        <input
                          id="vorname"
                          name="vorname"
                          type="text"
                          autoComplete="given-name"
                          value={formData.vorname}
                          onChange={handleChange}
                          placeholder="Max"
                          className={`${inputBase} ${errors.vorname ? inputError : ''}`}
                        />
                        {errors.vorname && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                            <AlertCircle className="h-3 w-3 flex-shrink-0" />
                            {errors.vorname}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="nachname" className="mb-1.5 block text-sm font-medium text-text-heading">
                          Nachname <span className="text-primary">*</span>
                        </label>
                        <input
                          id="nachname"
                          name="nachname"
                          type="text"
                          autoComplete="family-name"
                          value={formData.nachname}
                          onChange={handleChange}
                          placeholder="Mustermann"
                          className={`${inputBase} ${errors.nachname ? inputError : ''}`}
                        />
                        {errors.nachname && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                            <AlertCircle className="h-3 w-3 flex-shrink-0" />
                            {errors.nachname}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-heading">
                        E-Mail <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="max.mustermann@beispiel.de"
                        className={`${inputBase} ${errors.email ? inputError : ''}`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="h-3 w-3 flex-shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Telefon */}
                    <div>
                      <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-text-heading">
                        Telefon{' '}
                        <span className="text-text-muted font-normal">(optional)</span>
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        autoComplete="tel"
                        value={formData.telefon}
                        onChange={handleChange}
                        placeholder="+49 711 000000"
                        className={inputBase}
                      />
                    </div>

                    {/* Nachricht */}
                    <div>
                      <label htmlFor="nachricht" className="mb-1.5 block text-sm font-medium text-text-heading">
                        Anschreiben <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="nachricht"
                        name="nachricht"
                        rows={6}
                        value={formData.nachricht}
                        onChange={handleChange}
                        placeholder="Erzählen Sie uns etwas über sich, Ihre Erfahrungen und warum Sie zu RÄDLOG-Center möchten …"
                        className={`${inputBase} resize-y min-h-[120px] ${errors.nachricht ? inputError : ''}`}
                      />
                      {errors.nachricht && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="h-3 w-3 flex-shrink-0" />
                          {errors.nachricht}
                        </p>
                      )}
                    </div>

                    {/* Lebenslauf Upload */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-heading">
                        Lebenslauf{' '}
                        <span className="text-text-muted font-normal">(PDF, DOC, DOCX — max. 5 MB)</span>
                      </label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-6 py-8 transition-colors duration-200 ${
                          errors.lebenslauf
                            ? 'border-red-500 bg-red-500/5'
                            : 'border-border bg-bg-surface hover:border-primary hover:bg-primary/5'
                        }`}
                      >
                        <Upload className="h-8 w-8 text-text-muted" />
                        {selectedFile ? (
                          <div className="text-center">
                            <p className="font-medium text-text-heading">{selectedFile.name}</p>
                            <p className="mt-0.5 text-sm text-text-muted">
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        ) : (
                          <div className="text-center">
                            <p className="text-sm font-medium text-text">
                              Datei auswählen oder hier ablegen
                            </p>
                            <p className="mt-0.5 text-xs text-text-muted">
                              PDF, DOC oder DOCX bis zu 5 MB
                            </p>
                          </div>
                        )}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="sr-only"
                          aria-label="Lebenslauf hochladen"
                        />
                      </div>
                      {errors.lebenslauf && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="h-3 w-3 flex-shrink-0" />
                          {errors.lebenslauf}
                        </p>
                      )}
                    </div>

                    {/* Datenschutz */}
                    <div>
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          name="datenschutz"
                          checked={formData.datenschutz}
                          onChange={handleChange}
                          className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-primary"
                        />
                        <span className="text-sm text-text-muted leading-relaxed">
                          Ich habe die{' '}
                          <Link
                            href="/datenschutz"
                            className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors"
                          >
                            Datenschutzerklärung
                          </Link>{' '}
                          gelesen und stimme der Verarbeitung meiner personenbezogenen Daten zum
                          Zweck der Bearbeitung meiner Bewerbung zu.{' '}
                          <span className="text-primary">*</span>
                        </span>
                      </label>
                      {errors.datenschutz && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="h-3 w-3 flex-shrink-0" />
                          {errors.datenschutz}
                        </p>
                      )}
                    </div>

                    {/* Error Banner */}
                    {submitStatus === 'error' && (
                      <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                        <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                        <p className="text-sm text-red-400">
                          Beim Senden Ihrer Bewerbung ist ein Fehler aufgetreten. Bitte versuchen
                          Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="flex items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-text-muted">
                        <span className="text-primary">*</span> Pflichtfelder
                      </p>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={submitStatus === 'loading'}
                        className="min-w-[180px]"
                      >
                        {submitStatus === 'loading' ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Wird gesendet …
                          </>
                        ) : (
                          <>
                            <Briefcase className="h-4 w-4" />
                            Bewerbung absenden
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Card>
              </AnimatedSection>
            )}
            </div>

            {/* Info Sidebar */}
            <AnimatedSection variants={fadeInUp} delay={0.15} className="lg:sticky lg:top-24">
              <Card hover={false} className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-text-heading">Warum RÄDLOG-Center?</h3>
                  <ul className="mt-5 space-y-4">
                    {benefits.map((benefit) => {
                      const Icon = benefit.icon
                      return (
                        <li key={benefit.title} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-4 w-4 text-primary" />
                          </span>
                          <div>
                            <p className="text-sm font-medium text-text-heading">{benefit.title}</p>
                            <p className="mt-0.5 text-sm text-text-muted leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-6 space-y-3 border-t border-border pt-5">
                    {facts.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <span className="text-sm text-text-muted">{item.label}</span>
                        <span className="text-sm font-semibold text-text-heading">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* About Working at RÄDLOG */}
      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <AnimatedSection variants={fadeInUp}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
                Arbeiten bei RÄDLOG-Center
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-6 text-text-muted leading-relaxed">
                Seit unserer Gründung 1998 haben wir uns zu einem der führenden Spezialisten für
                Rädereinlagerung und Reifenlogistik in der Region Stuttgart entwickelt. Uns zeichnen
                ein familiäres Miteinander, kurze Entscheidungswege und die Leidenschaft für unsere
                Branche aus. Ob in der Logistik, im Kundendienst oder in der Verwaltung — bei
                RÄDLOG-Center finden engagierte Talente ein Umfeld, in dem sie wachsen und sich
                weiterentwickeln können.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
