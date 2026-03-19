import Link from 'next/link'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20',
  secondary: 'bg-bg-surface text-text hover:bg-bg-elevated border border-border',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={baseClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
