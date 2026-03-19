import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-bg-elevated p-6 ${hover ? 'transition-all duration-300 hover:border-border-accent hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
