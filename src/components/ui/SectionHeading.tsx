'use client'

import AnimatedSection from '@/components/shared/AnimatedSection'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({ title, subtitle, centered = true, className = '' }: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-text-muted sm:text-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-primary ${centered ? 'mx-auto' : ''}`} />
    </AnimatedSection>
  )
}
