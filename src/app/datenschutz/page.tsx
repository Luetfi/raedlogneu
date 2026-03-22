import { createMetadata } from '@/lib/metadata'
import { Shield } from 'lucide-react'
import Container from '@/components/ui/Container'
import PageHero from '@/components/ui/PageHero'

export const metadata = createMetadata({
  title: 'Datenschutz',
  description: 'Datenschutzerklärung der RÄDLOG-Center GmbH. Informationen zum Umgang mit Ihren personenbezogenen Daten.',
  path: '/datenschutz',
})

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Datenschutzerklärung"
        subtitle="Informationen zum Umgang mit Ihren personenbezogenen Daten bei der RÄDLOG-Center GmbH."
      />

      {/* Content */}
      <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto">

          <div className="space-y-8 text-text leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-heading [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-text-muted [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-text-muted [&_ul]:space-y-1">
            <h2>Datenschutz</h2>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            </p>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten
              möglich.
            </p>
            <p>
              Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken
              aufweisen kann.
            </p>

            <h2>Server-Log-Files</h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so
              genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>

            <h2>Recht auf Auskunft, Löschung, Sperrung</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten.
            </p>

            <h2>Widerspruch Werbe-Mails</h2>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen.
            </p>

            <p className="mt-8 text-sm italic">
              Quelle: e-recht24.de
            </p>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}
