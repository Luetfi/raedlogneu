import { createMetadata } from '@/lib/metadata'
import Container from '@/components/ui/Container'

export const metadata = createMetadata({
  title: 'Datenschutz',
  description: 'Datenschutzerklärung der RÄDLOG-Center GmbH. Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.',
  path: '/datenschutz',
})

export default function DatenschutzPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-text-heading sm:text-4xl mb-4">Datenschutzerklärung</h1>
          <div className="h-1 w-16 rounded-full bg-primary mb-12" />

          <div className="space-y-8 text-text leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-heading [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-heading [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-text-muted [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-text-muted [&_ul]:space-y-1 [&_a]:text-primary [&_a]:hover:underline">

            {/* 1. Datenschutz auf einen Blick */}
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Abschnitt „Verantwortlicher" in dieser
              Datenschutzerklärung entnehmen.
            </p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen,
              z.&nbsp;B. durch Eingabe in ein Kontaktformular. Andere Daten werden automatisch
              oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>

            {/* 2. Verantwortlicher */}
            <h2>2. Verantwortlicher</h2>
            <p>
              RÄDLOG-Center GmbH<br />
              Hortensienweg 23<br />
              70374 Stuttgart
            </p>
            <p>
              Vertretungsberechtigter Geschäftsführer: Jörg Hoffmann
            </p>
            <ul>
              <li>Telefon: 0711 900 54 - 05</li>
              <li>Telefax: 0711 900 54 - 06</li>
              <li>E-Mail: hoffmann@raedlog.de</li>
            </ul>
            <p>
              Einen externen Datenschutzbeauftragten haben wir nicht bestellt, da wir hierzu
              gesetzlich nicht verpflichtet sind (§&nbsp;38 BDSG).
            </p>

            {/* 3. Hosting */}
            <h2>3. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3>ALL-INKL.COM</h3>
            <p>
              Anbieter ist die ALL-INKL.COM – Neue Medien Münnich, Inh. René Münnich,
              Hauptstraße 68, 02742 Friedersdorf (nachfolgend ALL-INKL). Details entnehmen
              Sie der Datenschutzerklärung von ALL-INKL:{' '}
              <a href="https://all-inkl.com/datenschutzinformationen/" target="_blank" rel="noopener noreferrer">
                https://all-inkl.com/datenschutzinformationen/
              </a>.
            </p>
            <p>
              Die Verwendung von ALL-INKL erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
              DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen
              Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
              erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
              lit.&nbsp;a DSGVO. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <h3>Auftragsverarbeitung</h3>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben
              genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich
              vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten
              unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeitet.
            </p>

            {/* 4. Allgemeine Hinweise und Pflichtinformationen */}
            <h2>4. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die im
              Abschnitt „Verantwortlicher" genannte Stelle.
            </p>

            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
              Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art.&nbsp;21 DSGVO)</h3>
            <p className="!font-semibold !text-text-heading">
              Wenn die Datenverarbeitung auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;e oder
              f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer
              besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten
              Widerspruch einzulegen. Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung
              beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen,
              werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei
              denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die
              Ihre Interessen, Rechte und Freiheiten überwiegen (Widerspruch nach Art.&nbsp;21
              Abs.&nbsp;1 DSGVO).
            </p>

            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
              bei einer Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
            </p>
            <p>
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg<br />
              Lautenschlagerstraße 20<br />
              70173 Stuttgart<br />
              Telefon: 0711 / 615541-0<br />
              E-Mail: poststelle@lfdi.bwl.de<br />
              Website:{' '}
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
                https://www.baden-wuerttemberg.datenschutz.de
              </a>
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
              Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
              in einem gängigen, maschinenlesbaren Format aushändigen zu lassen (Art.&nbsp;20 DSGVO).
            </p>

            <h3>Recht auf Auskunft, Berichtigung und Löschung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
              Herkunft und Empfänger und den Zweck der Datenverarbeitung (Art.&nbsp;15 DSGVO) und
              ggf. ein Recht auf Berichtigung (Art.&nbsp;16 DSGVO) oder Löschung (Art.&nbsp;17
              DSGVO) dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
              Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3>Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
              Daten zu verlangen (Art.&nbsp;18 DSGVO). Hierzu können Sie sich jederzeit an uns
              wenden.
            </p>

            {/* 5. SSL/TLS-Verschlüsselung */}
            <h2>5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als
              Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
              an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            {/* 6. Datenerfassung auf dieser Website */}
            <h2>6. Datenerfassung auf dieser Website</h2>

            <h3>Server-Log-Files</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so
              genannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt.
              Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser
              Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten
              erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
              erfasst werden. Die Server-Log-Files werden nach spätestens 7 Tagen automatisch
              gelöscht.
            </p>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              (Name, E-Mail-Adresse, Telefonnummer, ggf. Firma und Nachricht) zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
              lit.&nbsp;b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
              an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art.&nbsp;6
              Abs.&nbsp;1 lit.&nbsp;f DSGVO).
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
              uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
              Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
              insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3>Bewerbungsformular (Karriere)</h3>
            <p>
              Über unser Bewerbungsformular können Sie sich auf offene Stellen bei uns bewerben.
              Dabei werden folgende Daten erhoben: Vorname, Nachname, E-Mail-Adresse,
              Telefonnummer (optional), Nachricht sowie ggf. ein Lebenslauf als Dateianhang
              (PDF oder Word, max. 5 MB).
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von §&nbsp;26 BDSG i.&nbsp;V.&nbsp;m.
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO zum Zwecke der Entscheidung über die
              Begründung eines Beschäftigungsverhältnisses.
            </p>
            <p>
              Ihre Bewerbungsdaten werden nach Abschluss des Bewerbungsverfahrens spätestens
              nach 6 Monaten gelöscht, sofern keine anderweitige Einwilligung zur längeren
              Speicherung vorliegt. Die Aufbewahrungsfrist von 6 Monaten ergibt sich aus den
              Fristen des Allgemeinen Gleichbehandlungsgesetzes (AGG).
            </p>

            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
              inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
              Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.&nbsp;6
              Abs.&nbsp;1 lit.&nbsp;b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf Ihrem berechtigten
              Interesse bzw. auf unserem berechtigten Interesse an der effektiven Bearbeitung der
              an uns gerichteten Anfragen (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO).
            </p>

            {/* 7. Externe Dienste und Inhalte */}
            <h2>7. Externe Dienste und Inhalte</h2>

            <h3>Google Fonts (lokal eingebunden)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte
              Google Fonts (Schriftart „Inter"). Die Google Fonts werden über den
              Build-Prozess unserer Website heruntergeladen und lokal von unserem Server
              ausgeliefert. Es findet keine Verbindung zu Servern von Google statt. Es werden
              somit keine personenbezogenen Daten an Google übertragen.
            </p>

            <h3>OpenStreetMap-Kartendienst (CARTO)</h3>
            <p>
              Wir nutzen auf unserer Website den Kartendienst OpenStreetMap mit Kartenkacheln
              von CARTO. Anbieter ist die CARTO, 307 Fifth Avenue, 17th Floor, New York,
              NY 10016, USA.
            </p>
            <p>
              Wenn Sie eine Seite mit einer eingebundenen Karte aufrufen, lädt Ihr Browser die
              benötigten Kartenkacheln von den Servern von CARTO
              (basemaps.cartocdn.com). Dabei wird Ihre IP-Adresse an CARTO übermittelt. Dies ist
              erforderlich, um Ihnen die Kartendarstellung in Ihrem Browser anzeigen zu können.
            </p>
            <p>
              Die Nutzung von OpenStreetMap / CARTO erfolgt im Interesse einer ansprechenden
              Darstellung unserer Standorte und einer leichten Auffindbarkeit der von uns auf der
              Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO dar.
            </p>
            <p>
              Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von CARTO:{' '}
              <a href="https://carto.com/privacy/" target="_blank" rel="noopener noreferrer">
                https://carto.com/privacy/
              </a>{' '}
              und der Datenschutzerklärung von OpenStreetMap:{' '}
              <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
                https://wiki.osmfoundation.org/wiki/Privacy_Policy
              </a>.
            </p>

            <h3>WhatsApp-Kontakt</h3>
            <p>
              Auf unserer Website befindet sich ein Link zur Kontaktaufnahme über WhatsApp
              (wa.me). Durch das Anklicken dieses Links werden Sie zu WhatsApp weitergeleitet.
              Erst durch das aktive Anklicken des Links werden Daten an WhatsApp (Meta
              Platforms Ireland Limited) übertragen. Weitere Informationen finden Sie in der
              Datenschutzerklärung von WhatsApp:{' '}
              <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">
                https://www.whatsapp.com/legal/privacy-policy-eea
              </a>.
            </p>

            <h3>Google Maps Links</h3>
            <p>
              Auf unserer Website befinden sich Links zu Google Maps für die Routenplanung zu
              unseren Standorten. Es handelt sich um externe Links, die Sie auf die Website von
              Google weiterleiten. Erst durch das aktive Anklicken des Links werden Daten an
              Google übertragen. Es findet keine Einbettung von Google Maps auf unserer Website
              statt.
            </p>

            {/* 8. Cookies und Speichertechnologien */}
            <h2>8. Cookies und Speichertechnologien</h2>
            <p>
              Diese Website verwendet keine Cookies. Es werden keine Tracking-, Analyse- oder
              Marketing-Cookies eingesetzt.
            </p>
            <p>
              Zur Speicherung Ihrer Einwilligungspräferenz (ob Sie unseren Datenschutzhinweis
              zur Kenntnis genommen haben) wird ausschließlich der localStorage Ihres Browsers
              verwendet. Dies ist technisch notwendig und dient nicht dem Tracking. Sie können
              diesen Eintrag jederzeit über die Browsereinstellungen löschen.
            </p>

            {/* 9. Widerspruch gegen Werbe-Mails */}
            <h2>9. Widerspruch gegen Werbe-Mails</h2>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
              rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
              etwa durch Spam-E-Mails, vor.
            </p>

            {/* 10. Aktualität */}
            <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026.
            </p>
            <p>
              Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
              geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig
              werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
              Datenschutzerklärung kann jederzeit auf dieser Seite von Ihnen abgerufen und
              ausgedruckt werden.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
