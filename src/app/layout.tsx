import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import ScrollToTopButton from '@/components/layout/ScrollToTopButton'
import SplashScreen from '@/components/shared/SplashScreen'
import ScrollToTop from '@/components/shared/ScrollToTop'
import { jsonLd } from '@/lib/metadata'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'RÄDLOG-Center GmbH – Rädereinlagerung & Reifenservice Stuttgart',
    template: '%s | RÄDLOG-Center GmbH',
  },
  description: 'Ihr kompetenter Partner für Rädereinlagerung, Reifeneinlagerung und Service in Stuttgart, Ludwigsburg, Waiblingen und Umgebung. Professionelle Einlagerung für Autohäuser, Fuhrparks und Autovermietungen.',
  metadataBase: new URL('https://www.raedlog.de'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <SplashScreen />
        <Header />
        <main className="flex-1 pt-[72px] lg:pt-28 pb-16 lg:pb-0">
          {children}
        </main>
        <FloatingButtons />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  )
}
