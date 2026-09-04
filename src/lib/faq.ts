/**
 * Zentrale FAQ-Daten.
 *
 * Einzige Quelle fuer die sichtbare FAQ-Sektion und das FAQPage-Schema —
 * beides muss identisch sein, sonst wertet Google das Markup ab. Vorher lagen
 * dieselben Eintraege doppelt in page.tsx und FirmenkundenContent.tsx.
 */

export interface FaqItem {
  question: string
  answer: string
}

export const FIRMENKUNDEN_FAQ: FaqItem[] = [
  {
    question: 'Was kostet die Rädereinlagerung bei RÄDLOG?',
    answer:
      'Gerne erstellen wir Ihnen ein individuelles Angebot — sprechen Sie uns einfach an.',
  },
  {
    question: 'Wie funktioniert der Hol- und Bringservice?',
    answer:
      'Wir holen Ihre Radsätze direkt bei Ihnen ab und liefern sie tagesgenau zurück. Der Abruf erfolgt bequem über unser Online-System REOS.',
  },
  {
    question: 'Welche Leistungspakete gibt es?',
    answer:
      'Wir bieten vier Pakete: Standard (Hol- und Bringservice, Reinigung, Einlagerung), Eco (Einlagerung und Kommissionierung von Neurädern), Komfort (zusätzlich digitale Erfassung sämtlicher Reifen- und Felgendaten sowie Zustandsbewertung und Dokumentation) und Premium (zusätzlich Wuchten von 4 Laufrädern mit 3D-Technologie).',
  },
  {
    question: 'Wie fordere ich einen Radsatz über REOS an?',
    answer:
      'Über unser Online-System REOS können Sie 24/7 Radsätze anfordern. In nur zwei Klicks wählen Sie den Radsatz und das Lieferdatum — die Anlieferung erfolgt tagesgenau.',
  },
  {
    question: 'In welchen Regionen ist RÄDLOG aktiv?',
    answer:
      'Wir bedienen den gesamten Raum Stuttgart, Ludwigsburg, Waiblingen, Böblingen, Sindelfingen und Leonberg mit drei Standorten in Stuttgart-Sommerrain und Remseck-Aldingen.',
  },
  {
    question: 'Sind die eingelagerten Radsätze versichert?',
    answer:
      'Ja, alle bei uns eingelagerten Radsätze sind gegen Brand, Diebstahl und Transportschäden versichert.',
  },
]
