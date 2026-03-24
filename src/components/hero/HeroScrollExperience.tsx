'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroCanvas from './HeroCanvas'
import { useFrameSequence } from './useFrameSequence'
import { useLenis } from './useLenis'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FRAME_COUNT = 241
const FRAME_SPEED = 2.0

export default function TireScrollExperience() {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [ready, setReady] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const canvasWrapRef = useRef<HTMLDivElement>(null)
  const darkOverlayRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map())

  useLenis()

  const { images, progress, isReady } = useFrameSequence({
    frameCount: FRAME_COUNT,
    basePath: '/frames/frame_',
    padLength: 4,
    extension: 'webp',
    priorityCount: 30,
    batchSize: 10,
  })

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setReady(true), 300)
      return () => clearTimeout(timer)
    }
  }, [isReady])

  const registerSection = useCallback((id: string, el: HTMLElement | null) => {
    if (el) sectionsRef.current.set(id, el)
  }, [])

  // Main scroll-driven logic
  useEffect(() => {
    if (!ready) return
    if (!scrollContainerRef.current) return

    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current!
      const canvasWrap = canvasWrapRef.current!
      const darkOverlay = darkOverlayRef.current!
      const marqueeEl = marqueeRef.current

      // ── Canvas visibility: only show while scroll container is in viewport ──
      ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => { canvasWrap.style.display = 'block' },
        onLeave: () => { canvasWrap.style.display = 'none' },
        onEnterBack: () => { canvasWrap.style.display = 'block' },
        onLeaveBack: () => { canvasWrap.style.display = 'none' },
      })

      // ── Frame scrubbing ──
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const accelerated = Math.min(self.progress * FRAME_SPEED, 1)
          const index = Math.min(
            Math.floor(accelerated * FRAME_COUNT),
            FRAME_COUNT - 1
          )
          setCurrentFrame(index)
        },
      })

      // ── Circle wipe intro + dark overlay + fade out ──
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress

          // Circle wipe reveal (0% - 8%)
          const wipeEnd = 0.08
          const wipeProgress = Math.min(1, p / wipeEnd)
          const radius = wipeProgress * 80
          canvasWrap.style.clipPath =
            wipeProgress >= 1 ? 'none' : `circle(${radius}% at 50% 50%)`

          // Dark overlay for stats section (50% - 70%)
          const overlayEnter = 0.48
          const overlayLeave = 0.72
          const fadeRange = 0.04
          let overlayOpacity = 0
          if (p >= overlayEnter - fadeRange && p <= overlayEnter) {
            overlayOpacity = ((p - (overlayEnter - fadeRange)) / fadeRange) * 0.9
          } else if (p > overlayEnter && p < overlayLeave) {
            overlayOpacity = 0.9
          } else if (p >= overlayLeave && p <= overlayLeave + fadeRange) {
            overlayOpacity = 0.9 * (1 - (p - overlayLeave) / fadeRange)
          }
          darkOverlay.style.opacity = String(overlayOpacity)
          darkOverlay.style.display = overlayOpacity > 0 ? 'block' : 'none'

          // Canvas fade-out at end (90% - 100%)
          if (p > 0.90) {
            const fadeOut = (p - 0.90) / 0.10
            canvasWrap.style.opacity = String(Math.max(0, 1 - fadeOut))
          } else {
            canvasWrap.style.opacity = '1'
          }
        },
      })

      // ── Marquee scroll ──
      if (marqueeEl) {
        const marqueeText = marqueeEl.querySelector('.marquee-text') as HTMLElement
        if (marqueeText) {
          gsap.to(marqueeText, {
            xPercent: -25,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          })
        }

        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress
            let opacity = 0
            if (p >= 0.06 && p <= 0.10) {
              opacity = (p - 0.06) / 0.04
            } else if (p > 0.10 && p < 0.86) {
              opacity = 1
            } else if (p >= 0.86 && p <= 0.90) {
              opacity = 1 - (p - 0.86) / 0.04
            }
            marqueeEl.style.opacity = String(opacity * 0.10)
          },
        })
      }

      // ── Section animations ──
      const sectionConfigs = [
        { id: 'feature1', enter: 0.08, leave: 0.26, animation: 'slide-left' as const },
        { id: 'feature2', enter: 0.28, leave: 0.46, animation: 'slide-right' as const },
        { id: 'stats', enter: 0.50, leave: 0.70, animation: 'stagger-up' as const },
        { id: 'cta', enter: 0.74, leave: 0.92, animation: 'scale-up' as const },
      ]

      sectionConfigs.forEach(({ id, enter, leave, animation, persist }) => {
        const section = sectionsRef.current.get(id)
        if (!section) return

        const children = section.querySelectorAll(
          '.section-label, .section-heading, .section-body, .cta-button, .stat-item'
        )

        gsap.set(children, getInitialProps(animation))
        gsap.set(section, { opacity: 0 })

        const fadeIn = 0.04
        const fadeOut = 0.03

        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress

            if (p >= enter && p <= leave) {
              const entryProgress = Math.min(1, (p - enter) / fadeIn)
              gsap.set(section, { opacity: 1 })

              children.forEach((child, i) => {
                const staggerDelay = i * 0.12
                const childProgress = Math.max(
                  0,
                  Math.min(1, (entryProgress - staggerDelay) / (1 - staggerDelay * 0.5))
                )
                applyAnimation(child as HTMLElement, animation, childProgress)
              })

              if (!persist && p > leave - fadeOut) {
                const exitProgress = (p - (leave - fadeOut)) / fadeOut
                gsap.set(section, { opacity: 1 - exitProgress })
              }
            } else if (persist && p > leave) {
              gsap.set(section, { opacity: 1 })
              children.forEach((child) => {
                applyAnimation(child as HTMLElement, animation, 1)
              })
            } else {
              gsap.set(section, { opacity: 0 })
            }
          },
        })
      })

      // ── Counter animations for stats ──
      const statNumbers = container.querySelectorAll('.stat-number')
      statNumbers.forEach((el) => {
        const target = parseFloat((el as HTMLElement).dataset.value || '0')
        const suffix = (el as HTMLElement).dataset.suffix || ''
        let lastValue = -1

        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress
            const counterProgress = Math.min(1, Math.max(0, (p - 0.52) / 0.12))
            const eased = 1 - Math.pow(1 - counterProgress, 3)
            const value = Math.round(eased * target)
            if (value !== lastValue) {
              lastValue = value
              el.textContent = value + suffix
            }
          },
        })
      })
    })

    return () => ctx.revert()
  }, [ready])

  return (
    <div className="relative">
      {/* ── Inline loading placeholder ── */}
      {!ready && (
        <div className="flex flex-col items-center justify-center py-32 bg-bg">
          <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <div className="mt-3 text-sm text-text-muted tabular-nums">
            {Math.round(progress * 100)}%
          </div>
        </div>
      )}

      {ready && (
        <>
          {/* ── Fixed Canvas Layer ── */}
          <div
            ref={canvasWrapRef}
            className="fixed inset-0 z-[1]"
            style={{ clipPath: 'circle(0% at 50% 50%)', display: 'none' }}
          >
            <HeroCanvas images={images} frameIndex={currentFrame} />
          </div>

          {/* ── Dark Overlay ── */}
          <div
            ref={darkOverlayRef}
            className="fixed inset-0 z-[2] bg-bg/90 pointer-events-none"
            style={{ opacity: 0, display: 'none' }}
          />

          {/* ── Marquee Layer ── */}
          <div
            ref={marqueeRef}
            className="fixed top-1/2 left-0 -translate-y-1/2 z-[2] w-full pointer-events-none overflow-hidden"
            style={{ opacity: 0 }}
          >
            <div
              className="marquee-text whitespace-nowrap font-extrabold uppercase text-text-heading"
              style={{ fontSize: '12vw', lineHeight: 1 }}
            >
              REIFEN &nbsp;·&nbsp; RÄDER &nbsp;·&nbsp; EINLAGERUNG &nbsp;·&nbsp;
              SERVICE &nbsp;·&nbsp; REIFEN &nbsp;·&nbsp; RÄDER &nbsp;·&nbsp;
              EINLAGERUNG &nbsp;·&nbsp; SERVICE &nbsp;·&nbsp; REIFEN &nbsp;·&nbsp;
              RÄDER &nbsp;·&nbsp; EINLAGERUNG &nbsp;·&nbsp; SERVICE
            </div>
          </div>

          {/* ── Scroll Container (800vh) ── */}
          <div
            ref={scrollContainerRef}
            className="relative z-[3]"
            style={{ height: '800vh' }}
          >
            {/* Feature 1 — Left aligned */}
            <section
              ref={(el) => registerSection('feature1', el)}
              className="fixed top-0 left-0 w-full h-screen flex items-center pointer-events-none"
              style={{ opacity: 0 }}
            >
              <div className="px-[5vw] md:px-[8vw] max-w-[40vw]">
                <span className="section-label block text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                  001 / Einlagerung
                </span>
                <h2
                  className="section-heading font-bold text-text-heading leading-[1.05] hero-text-shadow"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                >
                  Professionelle
                  <br />
                  Rädereinlagerung
                </h2>
                <p className="section-body mt-4 text-text-muted leading-relaxed text-base md:text-lg hero-text-shadow-sm max-w-md">
                  Fachgerechte Lagerung in klimatisierten Hallen. Jeder Radsatz
                  wird per Barcode erfasst, dokumentiert und sicher verwahrt —
                  damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
                </p>
              </div>
            </section>

            {/* Feature 2 — Left aligned */}
            <section
              ref={(el) => registerSection('feature2', el)}
              className="fixed top-0 left-0 w-full h-screen flex items-center pointer-events-none"
              style={{ opacity: 0 }}
            >
              <div className="px-[5vw] md:px-[8vw] max-w-[40vw]">
                <span className="section-label block text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                  002 / Service
                </span>
                <h2
                  className="section-heading font-bold text-text-heading leading-[1.05] hero-text-shadow"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                >
                  Komplett-Service
                  <br />
                  aus einer Hand
                </h2>
                <p className="section-body mt-4 text-text-muted leading-relaxed text-base md:text-lg hero-text-shadow-sm max-w-md">
                  Reinigung, Wuchten, Profilmessung und termingerechte
                  Anlieferung — gereinigt und montagebereit. Zwei garantierte
                  Werkstattbesuche pro Jahr stärken die Bindung zu Ihren Kunden.
                </p>
              </div>
            </section>

            {/* Stats — Center with dark overlay */}
            <section
              ref={(el) => registerSection('stats', el)}
              className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none"
              style={{ opacity: 0 }}
            >
              <div className="text-center">
                <span className="section-label block text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-8">
                  003 / Erfahrung
                </span>
                <h2
                  className="section-heading font-bold text-text-heading leading-[1.05] mb-12"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                >
                  Zahlen, die überzeugen
                </h2>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                  <div className="stat-item text-center">
                    <div
                      className="stat-number font-extrabold text-text-heading"
                      data-value="25"
                      data-suffix="+"
                      style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
                    >
                      0
                    </div>
                    <div className="mt-2 text-sm md:text-base uppercase tracking-widest text-text-muted">
                      Jahre Erfahrung
                    </div>
                  </div>
                  <div className="stat-item text-center">
                    <div
                      className="stat-number font-extrabold text-text-heading"
                      data-value="3"
                      data-suffix=""
                      style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
                    >
                      0
                    </div>
                    <div className="mt-2 text-sm md:text-base uppercase tracking-widest text-text-muted">
                      Standorte
                    </div>
                  </div>
                  <div className="stat-item text-center">
                    <div
                      className="stat-number font-extrabold text-text-heading"
                      data-value="2"
                      data-suffix=""
                      style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
                    >
                      0
                    </div>
                    <div className="mt-2 text-sm md:text-base uppercase tracking-widest text-text-muted">
                      Serviceregionen
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA — Left aligned */}
            <section
              ref={(el) => registerSection('cta', el)}
              className="fixed top-0 left-0 w-full h-screen flex items-center pointer-events-none"
              style={{ opacity: 0 }}
            >
              <div className="px-[5vw] md:px-[8vw] max-w-[40vw]">
                <span className="section-label block text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                  Bereit?
                </span>
                <h2
                  className="section-heading font-bold text-text-heading leading-[1.05] hero-text-shadow"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}
                >
                  Professionelle
                  <br />
                  Rädereinlagerung
                  <br />
                  <span className="text-primary">beginnt hier.</span>
                </h2>
                <div className="cta-button mt-8 flex flex-wrap gap-4 pointer-events-auto">
                  <Button href="/kontakt" size="lg">
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button href="/leistungen" variant="outline" size="lg">
                    Leistungspakete ansehen
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  )
}

// ── Animation helpers ──

function getInitialProps(animation: string) {
  switch (animation) {
    case 'slide-left':
      return { x: -80, opacity: 0 }
    case 'slide-right':
      return { x: 80, opacity: 0 }
    case 'stagger-up':
      return { y: 60, opacity: 0 }
    case 'scale-up':
      return { scale: 0.85, opacity: 0 }
    default:
      return { y: 50, opacity: 0 }
  }
}

function applyAnimation(el: HTMLElement, animation: string, progress: number) {
  const eased = 1 - Math.pow(1 - Math.min(1, Math.max(0, progress)), 3)

  switch (animation) {
    case 'slide-left':
      el.style.transform = `translateX(${-80 * (1 - eased)}px)`
      el.style.opacity = String(eased)
      break
    case 'slide-right':
      el.style.transform = `translateX(${80 * (1 - eased)}px)`
      el.style.opacity = String(eased)
      break
    case 'stagger-up':
      el.style.transform = `translateY(${60 * (1 - eased)}px)`
      el.style.opacity = String(eased)
      break
    case 'scale-up':
      el.style.transform = `scale(${0.85 + 0.15 * eased})`
      el.style.opacity = String(eased)
      break
    default:
      el.style.transform = `translateY(${50 * (1 - eased)}px)`
      el.style.opacity = String(eased)
  }
}
