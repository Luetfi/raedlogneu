'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LogIn } from 'lucide-react'
import { NAV_ITEMS, COMPANY } from '@/lib/constants'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg text-text-muted hover:text-text-heading hover:bg-bg-surface transition-colors"
        aria-label="Menü öffnen"
      >
        <Menu className="h-6 w-6" />
      </button>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-[60]">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-bg-elevated shadow-2xl">
          <div className="flex h-20 items-center justify-between px-6 border-b border-border">
            <span className="text-lg font-bold text-text-heading">Menü</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-text-muted hover:text-text-heading hover:bg-bg-surface transition-colors"
              aria-label="Menü schließen"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="px-4 py-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-text-muted hover:text-text-heading hover:bg-bg-surface'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <a
                href={COMPANY.reosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-light"
              >
                <LogIn className="h-5 w-5" />
                REOS Login
              </a>
            </div>
          </nav>
        </DialogPanel>
      </Dialog>
    </div>
  )
}
