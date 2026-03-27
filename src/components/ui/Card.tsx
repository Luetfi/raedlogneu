'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  if (!hover) {
    return (
      <div className={`rounded-2xl border border-border bg-bg-elevated p-6 ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card-glow relative rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  )
}
