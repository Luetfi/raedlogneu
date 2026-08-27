'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { NAV_ITEMS, COMPANY } from '@/lib/constants'
import MobileNav from './MobileNav'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/95 backdrop-blur-md ${
        scrolled
          ? 'shadow-lg shadow-black/20 border-b border-border'
          : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] lg:h-28 items-center justify-between">
          <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="RÄDLOG-Center Logo"
              width={320}
              height={90}
              className="h-10 lg:h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-text-muted hover:text-text-heading hover:bg-bg-surface'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={COMPANY.reosUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="REOS Login"
              className="group relative ml-5 inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-primary-light to-primary py-2.5 pl-4 pr-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_6px_18px_-6px_rgba(5,104,177,0.8)] ring-1 ring-white/15 transition-all duration-300 hover:from-primary-light hover:to-primary-light hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_12px_28px_-8px_rgba(10,127,212,0.95)] hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Image
                src="/images/reos-logo-light.png"
                alt="REOS"
                width={210}
                height={70}
                className="h-7 w-auto"
              />
              <span
                aria-hidden="true"
                className="h-7 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
              />
              <span className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                Login
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </a>
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
