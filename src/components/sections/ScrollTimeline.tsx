'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const timelineSteps = [
  {
    number: '01',
    title: 'Barcode-Erfassung',
    description:
      'Abmontierte Kundenräder erhalten Barcode-Aufkleber für jede Position (VL, VR, HL, HR) — lückenlose Rückverfolgbarkeit von Anfang an.',
  },
  {
    number: '02',
    title: 'Datenerfassung',
    description:
      'Die wichtigsten Reifendaten werden vollständig auf dem Reparaturauftrag dokumentiert und digital hinterlegt.',
  },
  {
    number: '03',
    title: 'Einlagerung',
    description:
      'Der Radsatz wird in einem Rollwagen eingelagert. Volle Rollwagen werden von unserem Team abgeholt und ins Lager überführt.',
  },
  {
    number: '04',
    title: 'Abruf',
    description:
      'Den Radsatz bequem über REOS, telefonisch oder per Fax anfordern — flexibel und unkompliziert.',
  },
  {
    number: '05',
    title: 'Tagesgenaue Anlieferung',
    description:
      'Nur die für die Montage benötigten Räder werden tagesgenau angeliefert — kein Überschuss, kein Aufwand.',
  },
]

const STEP_COUNT = timelineSteps.length

export default function ScrollTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)
  const lineFillRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const numberRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const labelRefs = useRef<(HTMLDivElement | null)[]>([])
  const prevStepRef = useRef(-1)

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current) return

    const ctx = gsap.context(() => {
      const container = sectionRef.current!
      const pinned = pinnedRef.current!
      const lineFill = lineFillRef.current!
      const numberEl = numberRef.current!
      const titleEl = titleRef.current!
      const descEl = descRef.current!

      // Set initial state
      gsap.set(numberEl, { opacity: 0, y: 20 })
      gsap.set(titleEl, { opacity: 0, y: 15 })
      gsap.set(descEl, { opacity: 0, y: 15 })

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinned,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress

          // Fill the timeline line
          lineFill.style.transform = `scaleY(${progress})`

          // Determine active step
          const activeIndex = Math.min(
            STEP_COUNT - 1,
            Math.floor(progress * STEP_COUNT)
          )

          // Within-step progress (0-1)
          const stepProgress = (progress * STEP_COUNT) % 1

          // Update nodes
          nodeRefs.current.forEach((node, i) => {
            if (!node) return
            const inner = node.querySelector('.node-inner') as HTMLElement
            const glow = node.querySelector('.node-glow') as HTMLElement
            if (!inner || !glow) return

            if (i < activeIndex) {
              // Completed
              inner.style.transform = 'scale(1)'
              inner.style.backgroundColor = 'var(--color-primary)'
              inner.style.borderColor = 'var(--color-primary)'
              inner.style.opacity = '1'
              glow.style.opacity = '0'
            } else if (i === activeIndex) {
              // Active — pulse
              const scale = 1 + Math.sin(stepProgress * Math.PI) * 0.25
              inner.style.transform = `scale(${scale})`
              inner.style.backgroundColor = 'var(--color-primary)'
              inner.style.borderColor = 'var(--color-primary)'
              inner.style.opacity = '1'
              glow.style.opacity = String(0.4 + Math.sin(stepProgress * Math.PI) * 0.3)
            } else {
              // Upcoming
              inner.style.transform = 'scale(0.8)'
              inner.style.backgroundColor = 'transparent'
              inner.style.borderColor = 'var(--color-border)'
              inner.style.opacity = '0.35'
              glow.style.opacity = '0'
            }
          })

          // Update labels
          labelRefs.current.forEach((label, i) => {
            if (!label) return
            if (i === activeIndex) {
              label.style.color = 'var(--color-primary)'
              label.style.fontWeight = '700'
              label.style.opacity = '1'
              label.style.transform = 'translateX(0)'
            } else if (i < activeIndex) {
              label.style.color = 'var(--color-text-muted)'
              label.style.fontWeight = '400'
              label.style.opacity = '0.6'
              label.style.transform = 'translateX(0)'
            } else {
              label.style.color = 'var(--color-text-muted)'
              label.style.fontWeight = '400'
              label.style.opacity = '0.3'
              label.style.transform = 'translateX(0)'
            }
          })

          // Animate content on step change
          if (activeIndex !== prevStepRef.current) {
            prevStepRef.current = activeIndex
            const step = timelineSteps[activeIndex]

            // Animate out then in
            gsap.to([numberEl, titleEl, descEl], {
              opacity: 0,
              y: -15,
              duration: 0.2,
              ease: 'power2.in',
              onComplete: () => {
                numberEl.textContent = step.number
                titleEl.textContent = step.title
                descEl.textContent = step.description
                gsap.fromTo(
                  [numberEl, titleEl, descEl],
                  { opacity: 0, y: 20 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    ease: 'power2.out',
                    stagger: 0.06,
                  }
                )
              },
            })
          }
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-elevated" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #0568b1 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Heading - scrolls normally */}
      <div className="relative pt-20 lg:pt-28">
        <Container>
          <SectionHeading
            title="Ablauf der Rädereinlagerung"
            subtitle="Von der Abholung bis zur tagesgenauen Anlieferung — transparent und effizient."
          />
        </Container>
      </div>

      {/* Scroll container */}
      <div ref={sectionRef} style={{ height: '300vh' }} className="relative">
        {/* Pinned panel */}
        <div ref={pinnedRef} className="h-screen flex items-center">
          <Container className="relative w-full">
            <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[1fr_100px] gap-6 lg:gap-12 items-center">

              {/* ── Content area (right on mobile via order, left on desktop) ── */}
              <div className="order-2 lg:order-1 flex flex-col justify-center min-h-[280px]">
                {/* Large step number */}
                <div
                  ref={numberRef}
                  className="text-[clamp(4rem,12vw,9rem)] font-extrabold leading-none text-primary/15 select-none mb-2 lg:mb-4"
                >
                  01
                </div>
                {/* Title */}
                <h3
                  ref={titleRef}
                  className="text-2xl lg:text-3xl font-bold text-text-heading mb-3"
                >
                  Barcode-Erfassung
                </h3>
                {/* Description */}
                <p
                  ref={descRef}
                  className="text-text-muted leading-relaxed text-base lg:text-lg max-w-xl"
                >
                  {timelineSteps[0].description}
                </p>
              </div>

              {/* ── Timeline rail (left on mobile, right on desktop) ── */}
              <div className="order-1 lg:order-2 flex flex-col items-center relative h-[320px] lg:h-[400px]">
                {/* Background line */}
                <div className="absolute inset-x-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />
                {/* Fill line */}
                <div
                  ref={lineFillRef}
                  className="absolute inset-x-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary origin-top"
                  style={{
                    transform: 'scaleY(0)',
                    boxShadow: '0 0 8px rgba(5,104,177,0.4)',
                  }}
                />

                {/* Nodes */}
                {timelineSteps.map((step, i) => (
                  <div
                    key={step.number}
                    ref={(el) => { nodeRefs.current[i] = el }}
                    className="absolute flex items-center"
                    style={{
                      top: `${(i / (STEP_COUNT - 1)) * 100}%`,
                      transform: 'translateY(-50%)',
                    }}
                  >
                    {/* Glow ring */}
                    <div
                      className="node-glow absolute inset-0 rounded-full bg-primary/30 blur-md transition-opacity"
                      style={{ opacity: 0, margin: '-4px' }}
                    />
                    {/* Node circle */}
                    <div
                      className="node-inner relative w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 transition-colors"
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: 'var(--color-border)',
                        opacity: 0.35,
                      }}
                    />
                    {/* Label - hidden on mobile, shown on desktop to the left */}
                    <div
                      ref={(el) => { labelRefs.current[i] = el }}
                      className="hidden lg:block absolute right-full mr-4 whitespace-nowrap text-sm transition-all"
                      style={{
                        color: 'var(--color-text-muted)',
                        opacity: 0.3,
                      }}
                    >
                      <span className="text-xs text-primary/50 mr-1">{step.number}</span>
                      {step.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="relative pb-20 lg:pb-28" />
    </section>
  )
}
