/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroCopy, ComparisonPoint, ComparisonRow, ComparisonCopy, FullCopy } from "../types";

export const heroVariants: Record<string, HeroCopy> = {
  rational: {
    preHeadline: "Unabhängige Pensionsplanung nach Schweizer Honorar-Standard",
    headline: "Mehr Kapital, weniger Steuern – Ihre Pensionierung mathematisch optimiert.",
    subHeadline: "Wir analysieren Ihre Vorsorge ohne Produktverkauf. Sie profitieren von maximaler Transparenz und behalten 100% aller Erträge, ohne versteckte Bankgebühren.",
    bullets: [
      "Maximale Steueroptimierung beim Kapitalbezug",
      "Wissenschaftliche Anlagestrategie ohne Provisionen",
      "Transparente Kostenplanung für den Lebensabend"
    ],
    primaryCTA: "Analyse-Gespräch buchen",
    secondaryCTA: "Leistungsübersicht (PDF)",
    trustLabel: "100% Honorarbasis | Keine Retrozessionen",
    microCopy: "Unverbindliche Erst-Analyse Ihrer Situation.",
    conceptNote: "Fokus auf Logik und messbare Vorteile. Nutzt den Trigger 'Verlustvermeidung' (Steuern/Gebühren)."
  },
  trust: {
    preHeadline: "Ihr loyaler Partner für den dritten Lebensabschnitt",
    headline: "Geniessen Sie Ihren Ruhestand – mit der Sicherheit einer unbestechlichen Planung.",
    subHeadline: "Während Banken Produkte verkaufen, stehen wir exklusiv an Ihrer Seite. Unabhängige Beratung für Menschen, die bei ihrer Vorsorge nichts dem Zufall überlassen wollen.",
    bullets: [
      "Absolute Unabhängigkeit von Banken & Versicherungen",
      "Persönliche Begleitung durch eidg. dipl. Finanzplaner",
      "Klarheit über Rentenhöhe und Kapitalfluss"
    ],
    primaryCTA: "Kostenloses Erstgespräch vereinbaren",
    secondaryCTA: "Pensionsrechner",
    trustLabel: "Bewährt bei über 250 Familien | Diskret & Persönlich",
    microCopy: "Ein Gespräch von Mensch zu Mensch. Ohne Verkaufsdruck.",
    conceptNote: "Fokus auf Sicherheit und das 'Wir-Gefühl'. Nutzt den Trigger 'Reziprozität' und 'Social Proof'."
  },
  executive: {
    preHeadline: "Strategische Vorsorge für Unternehmer und Kader",
    headline: "Die Architektur Ihrer finanziellen Freiheit – diskret, unabhängig, souverän.",
    subHeadline: "Cuira Partners begleitet anspruchsvolle Persönlichkeiten bei der strategischen Vorbereitung ihrer Pensionierung. Ohne Interessenkonflikte, ausschliesslich Ihren Zielen verpflichtet.",
    bullets: [
      "Strategische Vermögensstrukturierung für den Ruhestand",
      "Analyse komplexer Vorsorgewerke & Kadervorsorge",
      "Optimierung von Unternehmer-Vorsorge & Immobilien"
    ],
    primaryCTA: "Strategie-Termin reservieren",
    secondaryCTA: "Executive Summary",
    trustLabel: "Mandatsbasis | Family Office Standard",
    microCopy: "Streng vertraulich. Termin nach Vereinbarung.",
    conceptNote: "Fokus auf Status und Souveränität. Nutzt den Trigger 'Exklusivität' und 'Autorität'."
  }
};

export const fullVariants: Record<string, FullCopy> = {
  rational: {
    hero: heroVariants.rational,
    comparison: {
      sectionTag: "Differenzierung & Unabhängigkeit",
      headline: "Weshalb eine unabhängige Analyse für Sie rentabler ist.",
      intro: "Der klassische Finanzmarkt in der Schweiz ist durch ein System von Provisionen geprägt. Wir zeigen Ihnen, warum eine Honorarberatung Ihre Nettorendite signifikant steigert.",
      argument: "Finanzielle Vorteile durch den Verzicht auf teure Produkte und versteckte Gebühren.",
      points: [
        { title: "Netto-Tarife", desc: "Zugang zu Finanzprodukten ohne eingebaute Verkaufsprovisionen." },
        { title: "Keine Retros", desc: "100% Rückerstattung sämtlicher Bestandespflegekommissionen." },
        { title: "Kostenersparnis", desc: "Vermeidung von unnötigen Depotgebühren und Transaktionskosten." },
        { title: "Transparenz", desc: "Klare Honorarvereinbarung statt undurchsichtigem Gebührendschungel." },
        { title: "Evidenzbasierung", desc: "Anlagestrategien basierend auf Kapitalmarktforschung statt Prognosen." }
      ],
      trustArguments: ["Zulassung als Finanzdienstleister", "Transparentes Fixhonorar", "Kein Produktehandel"],
      table: [
        { label: "Produktverkauf", cuira: false, banks: true, insurance: true, wealth: "Oft" },
        { label: "Provisionen", cuira: false, banks: true, insurance: true, wealth: "Möglich" },
        { label: "Retrozessionen", cuira: "Rückvergütet", banks: "Einbehalten", insurance: "Einbehalten", wealth: "Einbehalten" },
        { label: "Vermögensverwaltung", cuira: false, banks: true, insurance: true, wealth: true },
        { label: "Honorartransparenz", cuira: "100%", banks: "Gering", insurance: "Gering", wealth: "Mittel" },
        { label: "Interessenkonflikte", cuira: "Ausgeschlossen", banks: "Systematisch", insurance: "Systematisch", wealth: "Möglich" },
        { label: "Fokus Pensionierung", cuira: "Spezialisiert", banks: "Allgemein", insurance: "Allgemein", wealth: "Allgemein" },
        { label: "Individuelle Planung", cuira: true, banks: "Standardisiert", insurance: "Standardisiert", wealth: "Teilweise" }
      ],
      closing: "Unabhängigkeit ist kein Schlagwort, sondern eine mathematische Notwendigkeit für Ihre Rendite.",
      ctaText: "Honorar-Modell berechnen"
    }
  },
  trust: {
    hero: heroVariants.trust,
    comparison: {
      sectionTag: "Ehrliche Beratung",
      headline: "Wem gehört die Loyalität Ihres Beraters wirklich?",
      intro: "In einer Welt von Verkaufszielen und Provisionsdruck bieten wir einen sicheren Hafen. Unsere Beratung ist ausschliesslich Ihnen verpflichtet – ohne Provisionen, ohne Produktvorgaben und ohne Interessenkonflikte.",
      argument: "Wir sitzen auf Ihrer Seite des Tisches. Unser Gewinn ist Ihre finanzielle Sicherheit.",
      points: [
        { title: "Mandatstreue", desc: "Absolute Loyalität durch Verzicht auf Drittvergütungen." },
        { title: "Interessenwahrung", desc: "Wir prüfen Ihre bestehenden Verträge objektiv und kritisch." },
        { title: "Diskretion", desc: "Ihr Vertrauen ist unsere wertvollste Währung." },
        { title: "Objektivität", desc: "Empfehlungen basieren auf harten Fakten, nicht auf Verkaufsquoten." },
        { title: "Partner-Modell", desc: "Wir verstehen uns als Wegbegleiter in Ihre Pensionierung." }
      ],
      trustArguments: ["Unabhängiges Schweizer Institut", "Persönliche Haftung", "Ethik-Kodex"],
      table: [
        { label: "Produktverkauf", cuira: false, banks: true, insurance: true, wealth: "Oft" },
        { label: "Provisionen", cuira: false, banks: true, insurance: true, wealth: "Möglich" },
        { label: "Retrozessionen", cuira: "Rückvergütet", banks: "Einbehalten", insurance: "Einbehalten", wealth: "Einbehalten" },
        { label: "Vermögensverwaltung", cuira: false, banks: true, insurance: true, wealth: true },
        { label: "Honorartransparenz", cuira: "Volle Klarheit", banks: "Undurchsichtig", insurance: "Undurchsichtig", wealth: "Variabel" },
        { label: "Interessenkonflikte", cuira: "Keine", banks: "Hoch", insurance: "Hoch", wealth: "Mittel" },
        { label: "Fokus Pensionierung", cuira: "Kernkompetenz", banks: "Zusatzgeschäft", insurance: "Zusatzgeschäft", wealth: "Zusatzgeschäft" },
        { label: "Individuelle Planung", cuira: true, banks: "Produktfokus", insurance: "Produktfokus", wealth: "Anlagefokus" }
      ],
      closing: "Wahrer Seelenfrieden entsteht erst, wenn Interessenkonflikte vollständig eliminiert sind.",
      ctaText: "Beratungsphilosophie kennenlernen"
    }
  },
  executive: {
    hero: heroVariants.executive,
    comparison: {
      sectionTag: "Strategy & Governance",
      headline: "Integrität in der Beratung – Der Standard für anspruchsvolle Vermögen.",
      intro: "Erfolgreiche Persönlichkeiten verlangen nach kompromissloser Unabhängigkeit. Cuira Partners transferiert das Prinzip des Family Office in Ihre persönliche Pensionsplanung.",
      argument: "Strategische Exzellenz durch strikte Trennung von Beratung und Produktverkauf.",
      points: [
        { title: "Governance", desc: "Höchste Standards bei der Vermeidung von Interessenkollisionen." },
        { title: "Asset Protection", desc: "Optimierung der Strukturen zum Schutz Ihres Lebenswerks." },
        { title: "Unbestechlichkeit", desc: "Honorarberatung als Garant für objektive Entscheidungsfindung." },
        { title: "Fokus Strategie", desc: "Wir betrachten das Gesamtbild, nicht nur einzelne Finanzprodukte." },
        { title: "Executive Service", desc: "Effiziente, hochspezialisierte Planung für komplexe Verhältnisse." }
      ],
      trustArguments: ["Qualifiziertes Expertengremium", "Exklusive Mandatskapazität", "Strategie-Fokus"],
      table: [
        { label: "Produktverkauf", cuira: false, banks: true, insurance: true, wealth: "Oft" },
        { label: "Provisionen", cuira: false, banks: true, insurance: true, wealth: "Möglich" },
        { label: "Retrozessionen", cuira: "Vollständiger Verzicht", banks: "Einbehalten", insurance: "Einbehalten", wealth: "Einbehalten" },
        { label: "Vermögensverwaltung", cuira: false, banks: true, insurance: true, wealth: true },
        { label: "Honorartransparenz", cuira: "Mandatsbasis", banks: "Margenfokus", insurance: "Margenfokus", wealth: "Margenfokus" },
        { label: "Interessenkonflikte", cuira: "Eliminiert", banks: "Systemisch", insurance: "Systemisch", wealth: "Operativ" },
        { label: "Fokus Pensionierung", cuira: "Leader in CH", banks: "Standard-Sektor", insurance: "Standard-Sektor", wealth: "Anlagesektor" },
        { label: "Individuelle Planung", cuira: "Massarbeit", banks: "Schubladenlösung", insurance: "Schubladenlösung", wealth: "Optimiert" }
      ],
      closing: "Souveränität in Finanzentscheidungen verlangt nach einem Berater ohne Eigeninteresse.",
      ctaText: "Mandatsanfrage stellen"
    }
  }
};
