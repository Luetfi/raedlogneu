import { createMetadata } from '@/lib/metadata'
import Container from '@/components/ui/Container'

export const metadata = createMetadata({
  title: 'Impressum',
  description: 'Impressum der RÄDLOG-Center GmbH, Hortensienweg 23, 70374 Stuttgart. Vertretungsberechtigter Geschäftsführer: Jörg Hoffmann.',
  path: '/impressum',
})

export default function ImpressumPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-text-heading sm:text-4xl mb-4">Impressum</h1>
          <div className="h-1 w-16 rounded-full bg-primary mb-12" />

          <div className="space-y-8 text-text leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-heading [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-text-muted [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-text-muted [&_ul]:space-y-1">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              RÄDLOG-Center GmbH<br />
              Hortensienweg 23<br />
              70374 Stuttgart
            </p>

            <h2>Vertreten durch</h2>
            <p>Vertretungsberechtigter Geschäftsführer Jörg Hoffmann</p>

            <h2>Kontakt</h2>
            <ul>
              <li>Telefon: 0711 900 54 - 05</li>
              <li>Telefax: 0711 900 54 - 06</li>
              <li>E-Mail: hoffmann@raedlog.de</li>
            </ul>

            <h2>Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Stuttgart<br />
              Registernummer: HRB 728877
            </p>

            <h2>Umsatzsteuer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE251345629
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
              Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
