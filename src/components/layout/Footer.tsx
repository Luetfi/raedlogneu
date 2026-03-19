import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY, NAV_ITEMS, LOCATIONS } from '@/lib/constants'
import Container from '@/components/ui/Container'

export default function Footer() {
  const hq = LOCATIONS[0]

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/images/logo.gif"
              alt="RÄDLOG-Center Logo"
              width={160}
              height={44}
              className="h-10 w-auto mb-4"
              unoptimized
            />
            <p className="text-text-muted text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
            <p className="mt-3 text-text-muted text-sm">
              {COMPANY.slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontaktdaten */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{hq.street}, {hq.zip} {hq.city}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/[\s/-]/g, '')}`} className="hover:text-primary transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-text-muted hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-text-muted hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4 text-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  )
}
