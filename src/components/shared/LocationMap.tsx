'use client'

import { MapPin } from 'lucide-react'
import Link from 'next/link'

interface LocationMapProps {
  name: string
  address: string
  loaded: boolean
  onLoad: () => void
}

// Google-Maps-Einbettung ohne API-Key. Wird erst nach Zustimmung geladen (Zwei-Klick-Lösung),
// damit vorher keine Daten an Google übertragen werden.
export default function LocationMap({ name, address, loaded, onLoad }: LocationMapProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&hl=de&output=embed`

  return (
    <div className="relative z-0 h-full min-h-[420px] overflow-hidden rounded-2xl border border-border bg-bg-surface">
      {loaded ? (
        <iframe
          key={src}
          src={src}
          title={`Karte: ${name}`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="size-6" />
          </span>
          <p className="max-w-sm text-sm text-text-muted">
            Mit dem Laden der Karte werden Daten an Google übertragen. Mehr dazu in unserer{' '}
            <Link href="/datenschutz" className="text-primary underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={onLoad}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Karte laden
          </button>
        </div>
      )}
    </div>
  )
}
