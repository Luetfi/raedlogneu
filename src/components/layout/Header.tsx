'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LogIn } from 'lucide-react'
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
              className="ml-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-primary-light"
            >
              <LogIn className="h-5 w-5" />
              REOS Login
            </a>
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
