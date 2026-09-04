'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import type { FaqItem } from '@/lib/faq'

interface FaqSectionProps {
  items: FaqItem[]
  title?: string
  subtitle?: string
}

/**
 * Sichtbare FAQ-Sektion. Die Daten stammen aus `@/lib/faq` und werden auf der
 * jeweiligen Seite zusaetzlich als FAQPage-Schema ausgegeben — Google wertet
 * Markup ab, dessen Antworten auf der Seite nicht sichtbar sind.
 *
 * Das Aufklappen laeuft bewusst ueber `grid-template-rows` statt ueber
 * bedingtes Rendern: Die Antworten stehen dadurch immer im HTML, auch
 * eingeklappt. KI-Crawler wie GPTBot oder PerplexityBot fuehren in der Regel
 * kein JavaScript aus — Antworten, die erst per Klick in den DOM kommen,
 * waeren fuer sie unsichtbar.
 */
export default function FaqSection({
  items,
  title = 'Häufig gestellte Fragen',
  subtitle = 'Antworten auf die wichtigsten Fragen rund um unseren Rädereinlagerungsservice.',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="border-y border-border py-16 lg:py-24">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-border bg-bg-elevated"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-text-heading">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
