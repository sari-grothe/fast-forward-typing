import type { Locale } from "@/i18n/config";
import { worksheetResources } from "./resources-worksheets";
import { benchmarkResources } from "./resources-benchmarks";

export type ResourceCategory = "learning" | "shortcuts" | "productivity" | "comparisons";
export type ResourceType = "article" | "lead-magnet";

export type ResourceMeta = {
  slug: string;
  locale: Locale;
  type: ResourceType;
  category: ResourceCategory;
  title: string;
  description: string;
  readingTime: number;
  date: string;
  featured?: boolean;
  downloadLabel?: string;
  content: string;
};

export const categoryLabels: Record<Locale, Record<ResourceCategory | "all", string>> = {
  de: { all: "Alle", learning: "Lernen", shortcuts: "Cheat Sheets", productivity: "Produktivität", comparisons: "Vergleiche" },
  en: { all: "All", learning: "Learning", shortcuts: "Cheat Sheets", productivity: "Productivity", comparisons: "Comparisons" },
  fr: { all: "Tous", learning: "Apprentissage", shortcuts: "Aide-mémoires", productivity: "Productivité", comparisons: "Comparatifs" },
};

export const resourcesUi: Record<Locale, {
  pageTitle: string;
  pageSubtitle: string;
  readingTime: string;
  backToResources: string;
  relatedArticles: string;
  downloadPdf: string;
  downloadHint: string;
  startCourse: string;
  tryCta: string;
  tryCtaDesc: string;
  featured: string;
  readArticle: string;
  tocLabel: string;
  metaDescription: string;
  updatedLabel: string;
  teamCtaTitle: string;
  teamCtaDesc: string;
  teamCtaLink: string;
  searchPlaceholder: string;
  searchNoResults: string;
  gateTitle: string;
  gateDesc: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  gateCta: string;
  gateSending: string;
  gateError: string;
  consentText: string;
  consentLinkText: string;
}> = {
  de: {
    pageTitle: "Ressourcen",
    pageSubtitle: "10-Finger-System lernen, Tastenkombinationen und Tipps für schnelleres Tippen im Job und Alltag.",
    readingTime: "Min. Lesezeit",
    backToResources: "Alle Ressourcen",
    relatedArticles: "Weiterlesen",
    searchPlaceholder: "Artikel durchsuchen ...",
    searchNoResults: "Keine Treffer. Versuch ein anderes Stichwort oder eine andere Kategorie.",
    downloadPdf: "PDF herunterladen",
    downloadHint: "Dein Download startet automatisch. Eine Seite, zum Ausdrucken.",
    startCourse: "Kurs starten",
    tryCta: "Bereit loszulegen?",
    tryCtaDesc: "Finde heraus, wie schnell du tippst - kostenlos.",
    featured: "Empfohlen",
    readArticle: "Artikel lesen",
    tocLabel: "Inhalt",
    metaDescription: "Guides zum 10-Finger-System, Tastenkombinationen für Windows und Mac, Tipps für schnelleres Tippen und ehrliche Vergleiche mit anderen Tippkursen.",
    updatedLabel: "Aktualisiert am",
    teamCtaTitle: "Für dein Team?",
    teamCtaDesc: "Team-Training mit Vorher-Nachher-Messung, für Unternehmen.",
    teamCtaLink: "Team-Training anfragen",
    gateTitle: "Trag dich ein und lade sofort herunter",
    gateDesc: "Vorname und E-Mail reichen - kein Spam, nur dein Cheat Sheet.",
    namePlaceholder: "Vorname",
    emailPlaceholder: "E-Mail-Adresse",
    gateCta: "Freischalten",
    gateSending: "Wird freigeschaltet ...",
    gateError: "Das hat nicht geklappt. Versuch's gleich nochmal.",
    consentText: "Ich bin mit der Verarbeitung meiner Daten gemäß",
    consentLinkText: "Datenschutzerklärung einverstanden.",
  },
  en: {
    pageTitle: "Resources",
    pageSubtitle: "Everything about typing - guides, shortcuts, tools.",
    readingTime: "min read",
    backToResources: "All resources",
    relatedArticles: "Keep reading",
    searchPlaceholder: "Search articles ...",
    searchNoResults: "No matches. Try a different keyword or category.",
    downloadPdf: "Download PDF",
    downloadHint: "Your download starts automatically. One page, ready to print.",
    startCourse: "Start course",
    tryCta: "Ready to start?",
    tryCtaDesc: "Find out how fast you type - for free.",
    featured: "Featured",
    readArticle: "Read article",
    tocLabel: "Contents",
    metaDescription: "Guides on touch typing, keyboard shortcuts for Windows and Mac, tips for typing faster and honest comparisons with other typing courses.",
    updatedLabel: "Updated on",
    teamCtaTitle: "For your team?",
    teamCtaDesc: "Team training with before/after measurement, for companies.",
    teamCtaLink: "Request team training",
    gateTitle: "Enter your details for instant access",
    gateDesc: "First name and email is all it takes - no spam, just your cheat sheet.",
    namePlaceholder: "First name",
    emailPlaceholder: "Email address",
    gateCta: "Unlock download",
    gateSending: "Unlocking ...",
    gateError: "That didn't work. Please try again in a moment.",
    consentText: "I agree to my data being processed per the",
    consentLinkText: "privacy policy.",
  },
  fr: {
    pageTitle: "Ressources",
    pageSubtitle: "Tout sur la frappe - guides, raccourcis, outils.",
    readingTime: "min de lecture",
    backToResources: "Toutes les ressources",
    relatedArticles: "Continuer la lecture",
    searchPlaceholder: "Chercher un article ...",
    searchNoResults: "Aucun résultat. Essaie un autre mot-clé ou une autre catégorie.",
    downloadPdf: "Télécharger le PDF",
    downloadHint: "Le téléchargement démarre automatiquement. Une page, à imprimer.",
    startCourse: "Commencer le cours",
    tryCta: "Prêt à commencer ?",
    tryCtaDesc: "Découvre ta vitesse de frappe - gratuitement.",
    featured: "À la une",
    readArticle: "Lire l'article",
    tocLabel: "Sommaire",
    metaDescription: "Guides sur la dactylographie, raccourcis clavier Windows et Mac, astuces pour taper plus vite et comparatifs honnêtes avec d'autres cours de frappe.",
    updatedLabel: "Mis à jour le",
    teamCtaTitle: "Pour ton équipe ?",
    teamCtaDesc: "Formation d'équipe avec mesure avant/après, pour les entreprises.",
    teamCtaLink: "Demander une formation d'équipe",
    gateTitle: "Inscris-toi pour un accès immédiat",
    gateDesc: "Prénom et e-mail suffisent - pas de spam, juste ta fiche pratique.",
    namePlaceholder: "Prénom",
    emailPlaceholder: "Adresse e-mail",
    gateCta: "Débloquer",
    gateSending: "Déblocage ...",
    gateError: "Ça n'a pas marché. Réessaie dans un instant.",
    consentText: "J'accepte que mes données soient traitées conformément à la",
    consentLinkText: "politique de confidentialité.",
  },
};

const resources: ResourceMeta[] = [
  // ─── DE ARTICLES ──────────────────────────────────────────
  {
    slug: "zehn-finger-schreiben-lernen",
    locale: "de",
    type: "article",
    category: "learning",
    title: "10 Finger Schreiben lernen: Der komplette Guide",
    description: "Von der Grundreihe bis zur vollen Geschwindigkeit - so lernst du das 10-Finger-System Schritt für Schritt.",
    readingTime: 8,
    date: "2026-06-26",
    featured: true,
    content: `10-Finger-Schreiben lernst du in 2 bis 4 Wochen mit 15 bis 20 Minuten Übung am Tag: erst die Grundreihe, dann die restlichen Reihen, das Tempo zuletzt. Nach 2 bis 3 Monaten fühlt es sich natürlich an. Zwei-Finger-Tipper schaffen beim Abschreiben etwa 27 Wörter pro Minute, Zehn-Finger-Tipper 40 bis 60.

## Warum 10 Finger?

Die meisten Menschen tippen mit 4-6 Fingern. Das funktioniert - aber es hat ein hartes Limit. Zwei-Finger-Tipper schaffen beim Abschreiben etwa 27 Wörter pro Minute, aus dem Kopf rund 37. **Wer mit zehn Fingern tippt, liegt bei 40 bis 60 WPM**, Profis darüber. Nicht weil sie hektischer tippen, sondern weil jeder Finger seinen festen Bereich hat. Die größte Tippstudie der Welt (Aalto University, 168.000 Teilnehmer) zeigt denselben Zusammenhang: schnelle Tipper nutzen im Schnitt 8,4 Finger, langsame 5,3.

Fun Fact: Der Weltrekord im Tippen liegt bei 216 Wörtern pro Minute. Aufgestellt 1946. Auf einer Schreibmaschine.

## Die Grundstellung

Alles beginnt mit acht Tasten. Lege deine Finger auf die mittlere Reihe deiner Tastatur:

- **Linke Hand:** A - S - D - F (kleiner Finger bis Zeigefinger)
- **Rechte Hand:** J - K - L - Ö (Zeigefinger bis kleiner Finger)
- **Daumen:** Leertaste

Die Tasten F und J haben kleine Erhebungen - du findest die Position blind. Was genau hinter der Technik steckt, erklärt [Was ist das 10-Finger-System?](article:was-ist-das-10-finger-system)

## Schritt für Schritt vorgehen

### Phase 1: Grundreihe (Woche 1)

Übe nur die mittlere Reihe. Das Ziel ist nicht Geschwindigkeit, sondern **Genauigkeit**. Tippe langsam und korrekt. Dein Muskelgedächtnis braucht korrekte Wiederholungen. Genau so startet auch der [10-Finger-System-Kurs](page:lessons): erst die Grundreihe, dann Reihe für Reihe.

### Phase 2: Obere und untere Reihe (Woche 2-3)

Jetzt kommen die restlichen Buchstaben dazu. Eine Reihe nach der anderen. Jeder Finger bewegt sich von seiner Grundposition nach oben oder unten - und kehrt zurück.

### Phase 3: Geschwindigkeit (Woche 4+)

Erst wenn du fehlerfrei tippen kannst, arbeitest du an der Geschwindigkeit. Genauigkeit schlägt Tempo - immer.

## Wie lange dauert es wirklich?

Kurze Antwort: **2-4 Wochen** für die Grundlagen, **2-3 Monate** bis es sich natürlich anfühlt. Bei 15-20 Minuten Übung pro Tag. Wie weit du schon bist, zeigt dir die [Einstufung](page:placement) in wenigen Minuten.

Das klingt nach viel. Aber rechne mal (Beispielrechnung): Wenn du jeden Tag 3 Stunden tippst und 40% schneller wirst, sparst du über eine Stunde pro Tag. Für den Rest deines Berufslebens.

## 5 Tipps für Anfänger

1. **Nicht auf die Tastatur schauen.** Das ist die eine Regel, die alles verändert. Klebe die Tasten ab, wenn nötig.
2. **Kurze Sessions, jeden Tag.** 15 Minuten täglich schlagen 2 Stunden am Wochenende. Die Lernforschung nennt das Spacing-Effekt: verteiltes Üben bleibt besser hängen als geballtes.
3. **Genauigkeit vor Geschwindigkeit.** Langsam und richtig baut bessere Muster auf als schnell und fehlerhaft.
4. **Echte Texte üben.** Nicht nur "asdf jklö" - sondern Sätze und Absätze.
5. **Fortschritt messen.** [Miss deine Tippgeschwindigkeit](page:speedTest) einmal pro Woche - so siehst du, wo du stehst. Was dein Ergebnis bedeutet, steht im [Tipptest-Ratgeber](article:tipptest).

## Die ersten zwei Wochen sind hart

Mal ehrlich: Am Anfang tippst du *langsamer* als vorher. Das ist normal und dauert etwa eine Woche. Danach beschleunigst du schnell.

Der Trick ist, die ersten 7 Tage durchzuhalten. Danach spürst du den Fortschritt. Sieben Gewohnheiten, die dich zusätzlich beschleunigen, findest du unter [Schneller tippen: 7 Techniken](article:schneller-tippen-techniken).

## Zum Ausdrucken

Vier Arbeitsblätter begleiten den Kurs: die [Finger-Tastatur-Karte mit dem Fingersatz](article:finger-tastatur-karte-qwertz) für neben die Tastatur, das [leere Layout zum Ausfüllen](article:leeres-layout-qwertz) als Zwei-Minuten-Test, der [Fortschritts-Tracker für vier Wochen](article:fortschritts-tracker-4-wochen) und der [Selbsttest mit acht Fragen](article:selbsttest-wo-stehst-du), der dir den passenden Einstieg zeigt.

## Andere Anbieter im Vergleich

Wer vorher vergleichen will: Die Artikel zur [TypingClub-Alternative für Erwachsene](article:typingclub-alternative) und zur [AgileFingers-Alternative](article:agile-fingers-alternative) stellen die bekanntesten kostenlosen Trainer diesem Kurs gegenüber, mit Stand-Datum.

## Was am Ende drin ist

Welche Werte realistisch sind und was Arbeitgeber erwarten, steht in den [WPM-Vergleichswerten nach Alter und Beruf](article:durchschnittliche-tippgeschwindigkeit).

## Quellen

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - Zwei-Finger-Tipper etwa 27 WPM beim Abschreiben und 37 aus dem Kopf, Profis 43 bis 80 WPM; die deutsche Einheit erklärt [Anschläge pro Minute](https://de.wikipedia.org/wiki/Anschl%C3%A4ge_pro_Minute).
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, schnelle Tipper nutzen im Schnitt 8,4 Finger, langsame 5,3.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: feste Finger-Tasten-Zuordnung, Vorbereitung des nächsten Anschlags und wenig Handbewegung sagen die Geschwindigkeit voraus; Zusammenfassung auf [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).
- [Typing](https://en.wikipedia.org/wiki/Typing) (Wikipedia, englisch) - Rekord von 216 Wörtern pro Minute, Stella Pajunas-Garnand, 1946, auf einer elektrischen IBM-Schreibmaschine.
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: verteiltes Üben schlägt geballtes Üben (Spacing-Effekt).`,
  },
  {
    slug: "schneller-tippen-handy",
    locale: "de",
    type: "article",
    category: "productivity",
    title: "Schneller tippen am Handy: 6 sofort umsetzbare Tipps",
    description: "Swipe-Typing, Textbausteine, Spracheingabe - so holst du das Maximum aus deiner Handy-Tastatur.",
    readingTime: 4,
    date: "2026-06-26",
    content: `Am schnellsten tippst du am Handy mit Swipe-Eingabe, Textbausteinen und Diktat für alles über zwei Sätze. Die sechs Einstellungen unten sind in 5 Minuten aktiviert und funktionieren auf iPhone und Android.

## Das Handy kann schneller

Du tippst jeden Tag hunderte Nachrichten auf dem Handy. Aber die meisten Leute nutzen nur einen Bruchteil der Funktionen, die moderne Tastaturen bieten.

Hier sind 6 Tipps, die du in 5 Minuten einrichten kannst.

## 1. Swipe-Typing aktivieren

Statt einzelne Buchstaben zu tippen, gleitest du mit dem Finger über die Tastatur. Klingt komisch, ist aber **deutlich schneller** als Tippen.

- **iPhone:** Einstellungen > Allgemein > Tastatur > "Zum Tippen streichen" aktivieren
- **Android (Gboard):** Gboard-Einstellungen > Glide-Tippen aktivieren

Nach ein paar Tagen fühlst du dich damit schneller als je zuvor.

## 2. Textbausteine einrichten

Tippe "mfg" und es wird automatisch zu "Mit freundlichen Grüßen". Oder "adr" wird zu deiner kompletten Adresse.

- **iPhone:** Einstellungen > Allgemein > Tastatur > Textersetzung
- **Android:** Gboard > Wörterbuch > Persönliches Wörterbuch

Die besten Kandidaten: E-Mail-Adresse, Telefonnummer, häufige Grußformeln, Postadresse.

## 3. Autokorrektur richtig konfigurieren

Die Autokorrektur lernt von dir. Wenn sie ein Wort falsch korrigiert, tippe es bewusst nochmal richtig ein. Nach 2-3 Mal merkt sie es sich.

Bonus: Fachbegriffe, die du oft nutzt, als Textbaustein hinzufügen - dann korrigiert die Autokorrektur sie nicht mehr weg.

## 4. Einhand-Modus nutzen

Auf großen Phones erreichst du nicht alle Tasten mit dem Daumen. Der Einhand-Modus schrumpft die Tastatur auf eine Seite.

- **iPhone:** Halte das Globus-/Emoji-Symbol gedrückt, wähle die linke oder rechte Tastatur
- **Android:** Halte die Komma-Taste gedrückt > Einhand-Modus

## 5. Spracheingabe für lange Texte

Für Nachrichten über 2-3 Sätze ist Spracheingabe fast immer schneller als Tippen. Das Mikrofon-Symbol auf der Tastatur startet die Diktierfunktion.

Modernes Speech-to-Text erkennt Satzzeichen automatisch. Einfach "Komma" oder "Punkt" sagen.

## 6. Die richtige Tastatur-App wählen

Die Standard-Tastatur ist OK, aber Drittanbieter-Apps bieten mehr:

- **Gboard** (Google): Beste Swipe-Erkennung, GIF-Suche, Übersetzer integriert
- **SwiftKey** (Microsoft): Lernt deinen Schreibstil am besten, mehrsprachig ohne Umschalten

## Am Desktop geht noch mehr

Am Rechner ist blindes Tippen der größte Hebel: Geübte 10-Finger-Tipper schaffen 40 bis 60 Wörter pro Minute, Zwei-Finger-Tipper beim Abschreiben etwa 27. Wie das geht, zeigt der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen). Wo du gerade stehst, verrät ein kurzer [Test deiner Tippgeschwindigkeit](page:speedTest). Und für Emojis am Rechner gibt es eigene Kürzel: [Emojis per Tastatur einfügen](article:emoji-tastenkombinationen).

## Quellen

- [Auf dem iPhone mit der Bildschirmtastatur schreiben](https://support.apple.com/de-de/guide/iphone/iph3c50f96e/ios) - Apple Support: Streichen zum Tippen, Textersetzung, Einhandtastatur.
- [Glide-Typing in Gboard verwenden](https://support.google.com/gboard/answer/6380730) - Google Support.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - Zwei-Finger-Tipper etwa 27 WPM beim Abschreiben, geübte Tipper 40 bis 60 WPM und mehr.`,
  },
  {
    slug: "tastenkombinationen-windows",
    locale: "de",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Die 30 wichtigsten Tastenkombinationen für Windows",
    description: "Alle Shortcuts, die du wirklich brauchst - auf einer Seite. Zum Ausdrucken und neben den Monitor hängen.",
    readingTime: 3,
    date: "2026-06-26",
    downloadLabel: "Cheat Sheet",
    content: `Mit diesen 30 Tastenkombinationen erledigst du Kopieren, Fensterwechsel, Textmarkierung und Browser-Tabs ohne Maus. Alle Kürzel entsprechen der offiziellen Microsoft-Belegung für Windows 10 und 11, sortiert nach Situation und zum Ausdrucken.

## Allgemein

- \`Ctrl + C\` - Kopieren
- \`Ctrl + V\` - Einfügen
- \`Ctrl + X\` - Ausschneiden
- \`Ctrl + Z\` - Rückgängig
- \`Ctrl + Y\` - Wiederholen
- \`Ctrl + A\` - Alles markieren
- \`Ctrl + S\` - Speichern
- \`Ctrl + F\` - Suchen
- \`Ctrl + P\` - Drucken
- \`Ctrl + Shift + V\` - Ohne Formatierung einfügen

## Fenster & Desktop

- \`Alt + Tab\` - Zwischen Fenstern wechseln
- \`Win + D\` - Desktop anzeigen
- \`Win + L\` - Bildschirm sperren
- \`Win + E\` - Explorer öffnen
- \`Win + Pfeil links/rechts\` - Fenster an Seite andocken
- \`Alt + F4\` - Fenster schließen
- \`Win + Tab\` - Aufgabenansicht

## Text bearbeiten

- \`Ctrl + B\` - Fett
- \`Ctrl + I\` - Kursiv
- \`Ctrl + U\` - Unterstrichen
- \`Home\` - Zeilenanfang
- \`End\` - Zeilenende
- \`Ctrl + Home\` - Dokumentanfang
- \`Ctrl + End\` - Dokumentende
- \`Ctrl + Shift + Pfeil\` - Wort markieren

## Browser

- \`Ctrl + T\` - Neuer Tab
- \`Ctrl + W\` - Tab schließen
- \`Ctrl + Shift + T\` - Geschlossenen Tab wiederherstellen
- \`Ctrl + L\` - Adressleiste fokussieren
- \`Ctrl + Tab\` - Nächster Tab

## Profi-Tipp

Lerne nicht alle auf einmal. Nimm dir **3 Shortcuts pro Woche** vor und nutze sie bewusst. Nach 10 Wochen hast du alle 30 drin. Auf dem Mac? Hier sind die [30 wichtigsten Mac-Kürzel](article:tastenkombinationen-mac). Emojis haben ein eigenes Kürzel: [Emojis per Tastatur einfügen](article:emoji-tastenkombinationen).

## Nächster Schritt

Tastenkürzel sparen Klicks, blindes Tippen spart Zeit bei jedem Wort. Miss zuerst kostenlos [deine Tippgeschwindigkeit](page:speedTest), dann weißt du, wie viel drin ist. Wie das 10-Finger-System funktioniert, erklärt der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen).

## Passende Karten

Zu den Kürzeln gehören zwei weitere Blätter: die [Sonderzeichen-Karte](article:sonderzeichen-karte-qwertz) mit @, €, Klammern und Backslash und die [Nummernblock-Karte](article:nummernblock-karte) für alle, die Zahlen blind eingeben wollen.

## Quellen

- [Tastenkombinationen in Windows](https://support.microsoft.com/de-de/windows/tastenkombinationen-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Microsoft Support, vollständige offizielle Liste.`,
  },
  {
    slug: "tastenkombinationen-mac",
    locale: "de",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Die 30 wichtigsten Tastenkombinationen für macOS",
    description: "Alle Mac-Shortcuts auf einer Seite - zum Ausdrucken und neben den Monitor hängen.",
    readingTime: 3,
    date: "2026-06-26",
    downloadLabel: "Cheat Sheet",
    content: `Mit diesen 30 Kürzeln bedienst du macOS ohne Maus: Kopieren, App-Wechsel, Spotlight, Textbearbeitung, Browser. Alle Kombinationen entsprechen der offiziellen Apple-Belegung, sortiert nach Situation und zum Ausdrucken.

## Allgemein

- \`Cmd + C\` - Kopieren
- \`Cmd + V\` - Einfügen
- \`Cmd + X\` - Ausschneiden
- \`Cmd + Z\` - Rückgängig
- \`Cmd + Shift + Z\` - Wiederholen
- \`Cmd + A\` - Alles markieren
- \`Cmd + S\` - Speichern
- \`Cmd + F\` - Suchen
- \`Cmd + P\` - Drucken
- \`Cmd + Shift + V\` - Ohne Formatierung einfügen

## Fenster & System

- \`Cmd + Tab\` - Zwischen Apps wechseln
- \`Cmd + H\` - Fenster ausblenden
- \`Cmd + Q\` - App beenden
- \`Cmd + W\` - Fenster/Tab schließen
- \`Cmd + Space\` - Spotlight-Suche
- \`Ctrl + Cmd + F\` - Vollbild
- \`Cmd + ,\` - App-Einstellungen

## Text bearbeiten

- \`Cmd + B\` - Fett
- \`Cmd + I\` - Kursiv
- \`Cmd + U\` - Unterstrichen
- \`Cmd + Pfeil links\` - Zeilenanfang
- \`Cmd + Pfeil rechts\` - Zeilenende
- \`Cmd + Pfeil oben\` - Dokumentanfang
- \`Cmd + Pfeil unten\` - Dokumentende
- \`Option + Shift + Pfeil\` - Wort markieren

## Browser (Safari/Chrome)

- \`Cmd + T\` - Neuer Tab
- \`Cmd + W\` - Tab schließen
- \`Cmd + Shift + T\` - Geschlossenen Tab wiederherstellen
- \`Cmd + L\` - Adressleiste fokussieren
- \`Ctrl + Tab\` - Nächster Tab

## Profi-Tipp

Die Cmd-Taste auf dem Mac entspricht Ctrl auf Windows. Wenn du beide Systeme nutzt, merke dir die Funktion - nicht die Taste. Die Gegenstücke stehen in den [30 wichtigsten Windows-Kürzeln](article:tastenkombinationen-windows).

## Nächster Schritt

Tastenkürzel sparen Klicks, blindes Tippen spart Zeit bei jedem Wort. Miss zuerst kostenlos [deine Tippgeschwindigkeit](page:speedTest), dann weißt du, wie viel drin ist. Wie das 10-Finger-System funktioniert, erklärt der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen).

## Quellen

- [Mac-Tastaturkurzbefehle](https://support.apple.com/de-de/102650) - Apple Support, vollständige offizielle Liste.`,
  },
  {
    slug: "emoji-tastenkombinationen",
    locale: "de",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Emojis per Tastatur einfügen: Windows & Mac Shortcuts",
    description: "Kein Copy-Paste mehr nötig. So öffnest du das Emoji-Menü mit einem Tastenkürzel - auf Windows, Mac und in Slack oder Teams.",
    readingTime: 3,
    date: "2026-09-23",
    downloadLabel: "Cheat Sheet",
    content: `Emojis fügst du unter Windows mit Win + . ein, am Mac mit Cmd + Ctrl + Leertaste. In Slack und Teams reicht ein Doppelpunkt plus Name, etwa :fire:. Alle drei Wege funktionieren ohne Copy-Paste und in jedem Textfeld.

## Windows

- \`Win + .\` oder \`Win + ;\` - Emoji-Menü öffnen
- Funktioniert in praktisch jedem Textfeld: Browser, Word, Chat-Apps
- Suchfeld oben nutzen, um gezielt nach einem Emoji zu suchen (z. B. "Feuer")

## Mac

- \`Cmd + Ctrl + Leertaste\` - Emoji- und Symbol-Übersicht öffnen
- Zuletzt genutzte Emojis stehen oben, ideal für Wiederholungen
- Funktioniert systemweit, auch in Mail, Notizen und im Browser

## In Slack und Teams

- \`:\` gefolgt vom Namen tippen, z. B. \`:fire:\` - die Vorschlagsliste erscheint automatisch
- Häufig genutzte Emojis merkt sich das System und schlägt sie zuerst vor
- Eigene Kürzel lassen sich in beiden Tools individuell anlegen

## Warum das ein Tastenkürzel wert ist

Wer viel schreibt, tippt auch viele Emojis - in Slack-Nachrichten, Team-Chats, Social Media. Copy-Paste aus einer Emoji-Liste kostet jedes Mal ein paar Sekunden Kontextwechsel. Das systemeigene Menü ist immer griffbereit, ohne den Browser-Tab zu wechseln.

## Profi-Tipp

Das Emoji-Menü merkt sich deine zuletzt genutzten Symbole. Nutze für die ersten Tage bewusst das Tastenkürzel statt Copy-Paste - nach einer Woche sitzt es im Muskelgedächtnis, genau wie jedes andere Tastenkürzel. Die wichtigsten davon stehen in den Cheat Sheets für [Windows](article:tastenkombinationen-windows) und [Mac](article:tastenkombinationen-mac).

## Nächster Schritt

Tastenkürzel sparen Klicks, blindes Tippen spart Zeit bei jedem Wort. Miss zuerst kostenlos [deine Tippgeschwindigkeit](page:speedTest), dann weißt du, wie viel drin ist. Wie das 10-Finger-System funktioniert, erklärt der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen).

## Quellen

- [Tastenkombinationen in Windows](https://support.microsoft.com/de-de/windows/tastenkombinationen-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Microsoft Support, Abschnitt zur Emoji-Tastatur (Windows-Logo-Taste + Punkt).
- [Emoji und Symbole auf dem Mac verwenden](https://support.apple.com/de-de/guide/mac-help/mchlp1560/mac) - Apple Support.
- [Emoji und Emoji-Reaktionen verwenden](https://slack.com/help/articles/202931348-Use-emoji-and-emoji-reactions) - Slack Help Center.`,
  },
  {
    slug: "was-ist-das-10-finger-system",
    locale: "de",
    type: "article",
    category: "learning",
    title: "Was ist das 10-Finger-System? Definition & Erklärung",
    description: "Die kurze Antwort: Jeder Finger hat einen festen Tastenbereich, du tippst blind. Hier die genaue Definition und wie es sich vom normalen Tippen unterscheidet.",
    readingTime: 4,
    date: "2026-09-23",
    content: `Das 10-Finger-System ist die Tipptechnik, bei der jeder Finger feste Tasten bedient und du blind tippst, mit dem Blick auf dem Bildschirm. Zwei-Finger-Tipper kommen beim Abschreiben auf etwa 27 Wörter pro Minute, Zehn-Finger-Tipper auf 40 bis 60. Die Grundlagen sitzen nach 2 bis 4 Wochen.

## Kurz erklärt

Das 10-Finger-System (auch Zehnfingersystem oder Tastschreiben genannt) ist eine Tipptechnik, bei der jedem der zehn Finger ein fester Bereich der Tastatur zugeordnet ist. Du tippst, ohne auf die Tasten zu schauen - dein Muskelgedächtnis kennt die Position jeder Taste.

Der Unterschied zum "normalen" Tippen: Die meisten Menschen tippen mit vier bis sechs Fingern, suchen dabei ständig mit den Augen die nächste Taste und arbeiten sich Buchstabe für Buchstabe vor. Das funktioniert, hat aber ein hartes Tempolimit. Wo deins liegt, zeigt ein kurzer [Test deiner Tippgeschwindigkeit](page:speedTest).

## Woher kommt der Name

Die Bezeichnung stammt aus der Zeit der Schreibmaschinen, als das System erstmals systematisch unterrichtet wurde - jede der zehn Fingerspitzen bekam ihren eigenen Platz auf der Tastatur, angelehnt an die Grundstellung A-S-D-F und J-K-L-Ö. Diese Grundstellung ist bis heute unverändert, auch auf modernen Computertastaturen.

## Wie unterscheidet es sich von Tastschreiben allgemein

"Tastschreiben" ist der umfassendere, ältere Begriff - er meint jedes blinde, systematische Tippen ohne Blick auf die Tasten. Das 10-Finger-System ist die konkrete, heute gebräuchlichste Methode dafür. In der Praxis werden beide Begriffe synonym verwendet.

## Warum es sich lohnt

Zwei-Finger-Tipper kommen beim Abschreiben auf rund 27 Wörter pro Minute, Zehn-Finger-Tipper auf 40 bis 60. In der größten Tippstudie der Welt (168.000 Teilnehmer) nutzten die schnellen Tipper im Schnitt 8,4 Finger, die langsamen 5,3. Entscheidend ist dabei weniger die Zahl der Finger als die feste Zuordnung: Wenn jede Taste immer vom selben Finger getroffen wird, tippst du schneller und genauer. Der Blick bleibt am Bildschirm statt an der Tastatur, was besonders beim Abschreiben oder gleichzeitigen Denken und Tippen einen echten Unterschied macht. Welche Gewohnheiten zusätzlich helfen, steht in [Schneller tippen: 7 Techniken](article:schneller-tippen-techniken).

## Wie lange dauert es, es zu lernen

Die Grundlagen sitzen nach 2-4 Wochen regelmäßigem Üben, ein natürliches Tempo stellt sich nach 2-3 Monaten ein - vorausgesetzt, du übst 15-20 Minuten am Tag. Es ist keine Begabung, sondern eine Frage von Wiederholung. Den Weg Schritt für Schritt beschreibt der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen), der [10-Finger-System-Kurs](page:lessons) führt dich in 31 Lektionen hindurch.

## Zum Aufhängen

Wer die Zuordnung täglich sehen will, hängt das [Tastatur-Poster mit den Farbzonen](article:poster-welcher-finger-tippt-was-qwertz) neben den Monitor.

## Quellen

- [Zehnfingersystem](https://www.duden.de/rechtschreibung/Zehnfingersystem) - Duden, Wortbedeutung.
- [Zehnfingersystem](https://de.wikipedia.org/wiki/Zehnfingersystem) - Wikipedia, Geschichte und Grundstellung.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - Zwei-Finger-Tipper etwa 27 WPM beim Abschreiben und 37 aus dem Kopf, Profis 43 bis 80 WPM; die deutsche Einheit erklärt [Anschläge pro Minute](https://de.wikipedia.org/wiki/Anschl%C3%A4ge_pro_Minute).
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, schnelle Tipper nutzen im Schnitt 8,4 Finger, langsame 5,3.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: feste Finger-Tasten-Zuordnung, Vorbereitung des nächsten Anschlags und wenig Handbewegung sagen die Geschwindigkeit voraus; Zusammenfassung auf [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).`,
  },
  {
    slug: "schneller-tippen-techniken",
    locale: "de",
    type: "article",
    category: "productivity",
    title: "Schneller tippen: 7 Techniken, die wirklich helfen",
    description: "Nicht nur das 10-Finger-System zählt. Diese sieben Gewohnheiten machen dich messbar schneller - egal, wie du gerade tippst.",
    readingTime: 6,
    date: "2026-09-23",
    content: `Schneller tippen heißt vor allem: nicht auf die Tastatur schauen, jede Taste immer mit demselben Finger treffen und täglich 15 Minuten üben. Die sieben Techniken unten wirken auch ohne komplettes 10-Finger-System.

## 1. Die Rücktaste seltener nutzen

Jeder Tippfehler, den du sofort korrigierst, unterbricht deinen Rhythmus doppelt: einmal beim Fehler, einmal bei der Korrektur. Schreibe stattdessen erst den ganzen Satz zu Ende und korrigiere danach in einem Rutsch. Klingt riskant, ist aber messbar schneller.

## 2. Nicht auf die Tastatur schauen

Der größte Zeitfresser ist der Blickwechsel zwischen Bildschirm und Tastatur. Jeder Wechsel kostet einen Bruchteil einer Sekunde - bei tausenden Tastenanschlägen am Tag summiert sich das erheblich. Wer blind tippt, verliert diese Zeit nicht. Die Aalto-Studie "How We Type" empfiehlt genau das, auch für Selbstlerner: auf den Bildschirm schauen, nicht auf die Finger.

## 3. Kurze Texte, aber täglich üben

15 Minuten jeden Tag bringen mehr als zwei Stunden am Wochenende. Dein Muskelgedächtnis braucht regelmäßige, kurze Wiederholungen - lange Pausen zwischen den Sessions lassen den Fortschritt wieder abfallen. Die Lernforschung nennt das Spacing-Effekt.

## 4. Echte Texte statt Zufallswörter

Übe mit Sätzen, die du auch wirklich tippst - E-Mails, Nachrichten, Prompts an KI-Tools. Zufällige Buchstabenfolgen trainieren zwar die Finger, aber nicht das Sprachgefühl, das echtes Tippen schneller macht.

## 5. Genauigkeit vor Tempo

Klingt paradox, stimmt aber: Wer zuerst auf Fehlerfreiheit trainiert, wird am Ende schneller als jemand, der von Anfang an aufs Tempo drückt. Fehlerhafte Bewegungsmuster, die sich einschleifen, sind später schwer wieder loszuwerden.

## 6. Tastenkombinationen lernen

Copy, Paste, Wort löschen, zum Zeilenanfang springen - wer diese Kombinationen blind beherrscht, spart sich unzählige einzelne Tastenanschläge und Mausklicks im Alltag. Die wichtigsten stehen in den Cheat Sheets für [Windows](article:tastenkombinationen-windows) und [Mac](article:tastenkombinationen-mac).

## 7. Fortschritt messen

Was du nicht misst, verbesserst du nicht bewusst. Eine kurze wöchentliche [Messung deiner Tippgeschwindigkeit](page:speedTest) zeigt dir schwarz auf weiß, ob die anderen sechs Punkte wirken - und motiviert, dranzubleiben.

## Was am meisten bringt

Von allen sieben Punkten hat die Kombination aus "nicht auf die Tastatur schauen" und "täglich kurz üben" den größten Effekt. Beides zusammen ist im Kern das 10-Finger-System - alle anderen Techniken bauen darauf auf. Wie du es lernst, zeigt der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen). Am Handy gelten eigene Regeln: [Schneller tippen am Handy](article:schneller-tippen-handy).

## Fürs Büro

Die Fingerzuordnung als Wandbild: das [Tastatur-Poster fürs Büro](article:poster-welcher-finger-tippt-was-qwertz) zeigt sie auf einer A4-Seite quer, ohne Erklärtext.

## Quellen

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: feste Finger-Tasten-Zuordnung, Vorbereitung des nächsten Anschlags und wenig Handbewegung sagen die Geschwindigkeit voraus; Zusammenfassung auf [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: verteiltes Üben schlägt geballtes Üben (Spacing-Effekt).
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, schnelle Tipper nutzen im Schnitt 8,4 Finger, langsame 5,3.`,
  },
  {
    slug: "typingclub-alternative",
    locale: "de",
    type: "article",
    category: "comparisons",
    title: "TypingClub Alternative für Erwachsene: Der Vergleich",
    description: "TypingClub ist kostenlos, aber klar für Schulen und Kinder gebaut. Hier der ehrliche Vergleich für alle, die als Erwachsene tippen lernen wollen.",
    readingTime: 5,
    date: "2026-09-23",
    content: `TypingClub ist die richtige Wahl, wenn du ein kostenloses Schulprogramm mit Spielen willst. Fast Forward Typing, wenn du als Erwachsener einen Kurs mit Ende und Zertifikat willst. Kurzvergleich: TypingClub hat 23 Millionen Nutzer, ist kostenlos und bietet kein Zertifikat; Fast Forward Typing hat 31 Lektionen, Einmalzahlung und Zertifikat inklusive.

## Kurz zusammengefasst

TypingClub ist kostenlos, riesig ([23 Millionen Nutzer weltweit](https://www.typingclub.com/)) und funktioniert technisch einwandfrei. Aber das Programm ist für Schulen und Kinder entwickelt - Sterne, Abzeichen, Maskottchen-Geschichten, ein eigener Modus für Grundschulkinder. Fast Forward Typing ist von Grund auf für Erwachsene gebaut: kein Kinderkram, dafür ein klar definierter Kurs mit Ende und echtem Zertifikat. Wähle TypingClub, wenn dir Kosten wichtiger sind als Design. Wähle Fast Forward Typing, wenn du als Erwachsener ernst genommen werden willst.

## Design und Zielgruppe

TypingClub wurde für den Schuleinsatz entwickelt und das merkt man auf jeder Seite: Sterne sammeln, Level aufsteigen, animierte Geschichten-Serien mit Charakteren, ein separater "Jungle Junior"-Modus extra für jüngere Kinder. Für ein Klassenzimmer ist das genau richtig. Für einen Erwachsenen, der zwischen zwei Meetings kurz üben will, fühlt es sich schnell unpassend an.

Fast Forward Typing hat kein Maskottchen-Universum und keine Abzeichen-Sammlung. Die Lektionen sind sachlich aufgebaut, die Sprache ist die eines Erwachsenenprodukts, nicht die eines Schulprogramms.

## Kurs und Lernpfad

TypingClub bietet eine riesige Zahl an Lektionen, Spielen und Videos - aber ohne ein klar definiertes Ende. Man übt, sammelt Sterne, macht weiter. Wann man "fertig" ist, bleibt offen.

Fast Forward Typing ist als Kurs mit Anfang und Ende gebaut: eine [Einstufung](page:placement) zeigt den Startpunkt, [31 Lektionen](page:lessons) führen strukturiert zum Ziel, ein Abschluss ist klar erkennbar. Wer eine Ziellinie will, statt endlos zu üben, findet die hier.

## Preise

| | TypingClub | Fast Forward Typing |
|---|---|---|
| Kostenlose Version | Ja, voller Kernkurs | Erste 6 Lektionen |
| Bezahlversion | 7,50 €/Monat oder 29,50 €/Jahr | Einmalzahlung, kein Abo |
| Was das Bezahl-Upgrade bringt | Werbefrei, mehr Spiele, mehr Themes, "Story Typing" - nicht mehr Lerninhalt | Alle restlichen Lektionen bis zum Kursabschluss |
| Zertifikat | Nicht vorhanden | [Inklusive](page:certificate) |

Wichtig zu verstehen: Bei TypingClub kaufst du dir mit dem Abo keinen zusätzlichen Lerninhalt frei, sondern Komfort-Features. Der eigentliche Kurs ist bei beiden Anbietern kostenlos zugänglich - der Unterschied liegt im Zertifikat und im Design. Einen zweiten Vergleich findest du unter [AgileFingers Alternative](article:agile-fingers-alternative).

## Wer sollte TypingClub nutzen

- Wer eine Schulklasse oder mehrere Kinder gleichzeitig unterrichten will
- Wer maximale Spielauswahl und Gamification möchte
- Wer kein Budget hat und Werbung im Programm nicht stört

## Wer sollte Fast Forward Typing nutzen

- Erwachsene, die zwischendurch üben wollen, ohne sich wie im Schulunterricht zu fühlen
- Wer einen klar definierten Kursabschluss mit Zertifikat für Lebenslauf oder LinkedIn will
- Wer 15 Minuten am Tag investieren will, mit einem Ende in Sicht statt endlosem Üben

## Häufige Fragen

**Ist TypingClub wirklich kostenlos?** Ja, der Kernkurs ist dauerhaft kostenlos, auch für Erwachsene. Das Bezahl-Abo ist optional und betrifft vor allem Komfort-Features.

**Gibt es bei TypingClub ein Zertifikat?** Nein, TypingClub bietet aktuell keinen offiziellen Nachweis der Tippgeschwindigkeit.

**Unterstützt TypingClub Deutsch?** Ja, es gibt einen deutschen Sprachkurs, allerdings mit demselben schulischen Design wie die englische Version.

*Stand der Angaben zu TypingClub: September 2026. Preise und Funktionen können sich ändern. Alle Angaben ohne Gewähr, Quelle ist die öffentliche Website des Anbieters.*

## Quellen

- [TypingClub](https://www.typingclub.com/) - offizielle Website, Nutzerzahlen und Kursumfang.
- [edclub Pricing](https://www.edclub.com/pricing) - offizielle Preisseite des Anbieters (Stand September 2026).`,
  },
  {
    slug: "agile-fingers-alternative",
    locale: "de",
    type: "article",
    category: "comparisons",
    title: "AgileFingers Alternative: Der ehrliche Vergleich",
    description: "AgileFingers ist kostenlos und durchdacht, aber ein offenes Übungstool ohne festen Kursablauf oder Zertifikat. Hier der vollständige Vergleich.",
    readingTime: 5,
    date: "2026-09-23",
    content: `AgileFingers ist die richtige Wahl, wenn du ein komplett kostenloses Übungstool mit detaillierten Statistiken willst. Fast Forward Typing, wenn du einen Kurs mit Anfang, Ende und Zertifikat willst. Beide unterstützen Deutsch und QWERTZ.

## Kurz zusammengefasst

[AgileFingers](https://agilefingers.com/) ist ein kostenloses, minimalistisches Tool, gut durchdacht, mit detaillierten Statistiken (WPM, Fehler-Heatmap pro Finger). Aber es ist ein offenes Übungstool ohne strukturierten Ablauf und ohne definiertes Ende - man übt, ohne wirklich zu wissen, wann man "fertig" ist. Fast Forward Typing bietet einen strukturierten Kurs mit echtem Anfang und Ende, plus Zertifikat am Schluss. Wähle AgileFingers, wenn du ein kostenloses, offenes Tool willst. Wähle Fast Forward Typing, wenn du einen Kurs mit klarem Ziel und Nachweis am Ende willst.

## Aufbau und Lernpfad

AgileFingers bietet drei Bausteine: Lektionen zur Fingerposition, Übungstexte und Spiele. Das funktioniert gut, aber es gibt keinen aufgebauten Fortschritt und kein Endziel - man übt in seinem eigenen Tempo, ohne zu wissen, wie viel noch übrig ist oder was "fertig" bedeutet.

Fast Forward Typing ist als Kurs mit Anfang und Ende gebaut: eine [Einstufung](page:placement) zeigt den Startpunkt, [31 Lektionen](page:lessons) führen strukturiert zum Ziel, ein Abschluss ist klar erkennbar. Wer eine Ziellinie will statt endlosem Üben, findet die hier.

## Auswertung und Statistiken

Hier ist AgileFingers stark: Wörter pro Minute, Fehler-Heatmap pro Finger, Histogramme pro Taste. Ein echter Vorteil für alle, die ihre eigenen Daten gerne im Detail analysieren.

Fast Forward Typing misst ebenfalls Geschwindigkeit und Genauigkeit, vor und nach dem Kurs, der Fokus liegt aber auf dem Gesamtfortschritt und dem Endergebnis statt auf der detaillierten Analyse unterwegs. Wie TypingClub im Vergleich abschneidet, steht in [TypingClub Alternative für Erwachsene](article:typingclub-alternative).

## Preise

| | AgileFingers | Fast Forward Typing |
|---|---|---|
| Kostenlose Version | Ja, das komplette Tool | Erste 6 Lektionen |
| Bezahlversion | Keine | Einmalzahlung, kein Abo |
| Zertifikat | Nicht vorhanden | [Inklusive](page:certificate) |
| Definiertes Kursende | Nein | Ja |

## Wer sollte AgileFingers nutzen

- Wer ein zu 100 % kostenloses Tool will, ohne je zu bezahlen
- Wer die eigenen Tippstatistiken gerne im Detail analysiert
- Wer freies Üben ohne vorgegebene Struktur bevorzugt

## Wer sollte Fast Forward Typing nutzen

- Wer einen Kurs mit echtem Anfang und Ende will
- Wer am Ende ein offizielles Zertifikat für Lebenslauf oder LinkedIn will
- Wer 15 Minuten am Tag mit klarem Ziel statt endlosem Üben investieren will

## Häufige Fragen

**Ist AgileFingers wirklich kostenlos?** Ja, das komplette Tool ist kostenlos, es gibt keine Bezahlversion.

**Bietet AgileFingers ein Zertifikat?** Nein, auf der Seite wird kein offizielles Zertifikat oder Nachweis erwähnt.

**Unterstützt AgileFingers Deutsch?** Ja, das Tool unterstützt über 20 Sprachen und Tastaturlayouts, darunter Deutsch und QWERTZ.

*Stand der Angaben zu AgileFingers: September 2026. Funktionen können sich ändern. Alle Angaben ohne Gewähr, Quelle ist die öffentliche Website des Anbieters.*

## Quellen

- [AgileFingers](https://agilefingers.com/) - offizielle Website, Funktionen und Sprachen (Stand September 2026).`,
  },

  {
    slug: "tipptest",
    locale: "de",
    type: "article",
    category: "learning",
    title: "Tipptest: Ablauf, gute Werte und Tipps für mehr Tempo",
    description: "Was ein Tipptest misst, wie viele Anschläge pro Minute gut sind und wie du beim Schreibtest besser abschneidest. Mit Werte-Tabelle und kostenlosem Test.",
    readingTime: 6,
    date: "2026-09-24",
    content: `Ein Tipptest misst in 1 bis 5 Minuten, wie viele Wörter pro Minute (WPM) du tippst und wie genau. 40 WPM, also 200 Anschläge pro Minute, sind ein solides Alltagstempo, ab 60 WPM bist du schnell. Den [kostenlosen Tipptest](page:speedTest) machst du direkt im Browser, ohne Anmeldung.

## Was ist ein Tipptest?

Ein Tipptest, oft auch Schreibtest oder Tipp-Test genannt, ist ein kurzer Abschreibtest am Computer. Du tippst einen vorgegebenen Text ab, die Zeit läuft mit. Am Ende stehen zwei Zahlen: Tempo und Genauigkeit. Online läuft das komplett im Browser, auf deiner eigenen Tastatur.

Fun Fact: Der Weltrekord liegt bei 216 Wörtern pro Minute. Aufgestellt 1946, auf einer elektrischen IBM-Schreibmaschine.

## So läuft ein Tipptest ab

1. **Dauer wählen.** 1, 2 oder 5 Minuten. Kurze Tests zeigen dein Spitzentempo, längere dein Dauertempo.
2. **Text abtippen.** Die Zeit startet mit dem ersten Tastendruck.
3. **Ergebnis lesen.** WPM, Anschläge pro Minute und Genauigkeit in Prozent.

Im [Tipptest von Fast Forward Typing](page:speedTest) tippst du echte Sätze statt Zufallswörter, auf QWERTZ. Fehler blockieren die Eingabe, bis die richtige Taste kommt. Das Ergebnis zeigt also dein fehlerfreies Tempo.

## WPM oder Anschläge pro Minute?

Beide Einheiten messen dasselbe. Ein Wort zählt als 5 Zeichen inklusive Leerzeichen. Deshalb gilt: Anschläge pro Minute geteilt durch 5 ergibt WPM.

| Anschläge pro Minute | WPM | Einordnung |
|---|---|---|
| 135 | 27 | Zwei-Finger-Tipper beim Abschreiben |
| 200 | 40 | Solides Alltagstempo |
| 260 | 52 | Durchschnitt der Aalto-Studie (168.000 Teilnehmer) |
| 300 | 60 | Schnell |
| 400 | 80 | Profi-Niveau |
| 600 und mehr | 120 und mehr | Die Schnellsten der Aalto-Studie |

## Wie viele Anschläge pro Minute sind gut?

Kurz gesagt: Ab 200 Anschlägen pro Minute (40 WPM) tippst du solide, ab 300 (60 WPM) schnell, ab 400 (80 WPM) auf Profi-Niveau. Geübte 10-Finger-Tipper schaffen im 10-Minuten-Test 200 bis 400 Anschläge.

Der Durchschnitt hängt davon ab, wer gemessen wird. Eine Studie von 1999 fand 32,5 WPM beim Abschreiben. Die Aalto-Studie mit 168.000 Freiwilligen kam auf 51,6 WPM. Wo du im Vergleich stehst, zeigt die Einordnung direkt nach dem Test.

Genauso wichtig ist die Genauigkeit. In der Aalto-Studie blieben im Schnitt nur gut 1 Prozent der Zeichen unkorrigiert falsch. Und schnelle Tipper machten weniger Fehler als langsame, nicht mehr. Peile im Tipptest mindestens 95 Prozent an.

## Tipptest für die Bewerbung

Manche Stellen mit viel Schreibarbeit verlangen einen Schreibtest: Sekretariat, Assistenz, Sachbearbeitung, Dateneingabe. Die genauen Anforderungen stehen in der Stellenanzeige. Als Orientierung: Professionelle Schreibkräfte tippen 43 bis 80 WPM, für manche Positionen werden 80 bis 95 WPM verlangt.

Wer seinen Wert belegen will, legt ein [Tippzertifikat](page:certificate) mit WPM, Genauigkeit und Datum bei. Das passt in den Lebenslauf und ins LinkedIn-Profil.

## 5 Tipps für ein besseres Ergebnis

1. **Aufwärmen.** Tippe zwei, drei Minuten locker, bevor du misst.
2. **Genauigkeit zuerst.** Jeder Fehler kostet Korrekturzeit. Sauber und gleichmäßig schlägt hektisch.
3. **Auf den Bildschirm schauen.** Die Aalto-Studie "How We Type" rät genau das: Blick auf den Text, nicht auf die Finger.
4. **Immer derselbe Finger.** Wenn jede Taste stets vom selben Finger getroffen wird, steigt das Tempo. Das ist der Kern des [10-Finger-Systems](article:was-ist-das-10-finger-system).
5. **Regelmäßig messen.** Ein Tipptest pro Woche zeigt dir deinen Fortschritt. Weitere Gewohnheiten stehen in [Schneller tippen: 7 Techniken](article:schneller-tippen-techniken).

## Vom Tipptest zum Kurs

Ein Tipptest zeigt dir, wo du stehst. Schneller wirst du durch Übung. Die [Einstufung](page:placement) misst pro Taste, was schon sitzt, und der [10-Finger-System-Kurs](page:lessons) trainiert gezielt den Rest. Mit 15 Minuten am Tag sitzen die Grundlagen nach 2 bis 4 Wochen. Schritt für Schritt erklärt das der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen).

## Häufige Fragen zum Tipptest

**Wie lange dauert ein Tipptest?** Meist 1 bis 5 Minuten. Für ein stabiles Ergebnis nimm 2 oder 5 Minuten.

**Ist der Tipptest kostenlos?** Ja. Den [Tipptest online](page:speedTest) machst du kostenlos und ohne Anmeldung.

**Was ist der Unterschied zwischen Tipptest und Schreibtest?** Keiner. Beides meint dasselbe: Text abtippen, Tempo und Genauigkeit messen.

**Kann ich einen 10-Finger-Schreiben-Test machen, wenn ich das System noch nicht kann?** Ja. Der Test misst dein aktuelles Tempo, egal mit wie vielen Fingern du tippst.

**Gibt es einen WPM-Test auf Deutsch?** Ja. Der [Schnell-tippen-Test](page:speedTest) nutzt deutsche Texte mit Umlauten und ß auf QWERTZ.

**Wie schnell kann ich tippen?** Das zeigt dir ein Tipptest in einer Minute. Danach weißt du, wie viel Luft nach oben ist.

## Zum Ausdrucken

Wer den Wert festhalten will, trägt ihn in den [Fortschritts-Tracker](article:fortschritts-tracker-4-wochen) ein und misst nach vier Wochen erneut. Ob du vorher am Fingersatz oder erst am Tempo arbeiten solltest, verrät der [Selbsttest mit acht Fragen](article:selbsttest-wo-stehst-du).

## Vergleichswerte

Wo dein Ergebnis im Vergleich zu anderen liegt, nach Perzentil, Alter und Beruf, zeigt der Artikel zur [durchschnittlichen Tippgeschwindigkeit](article:durchschnittliche-tippgeschwindigkeit).

## Quellen

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - 5 Zeichen = 1 Wort, Studie von 1999 mit 32,5 WPM beim Abschreiben, Zwei-Finger-Tipper 27 WPM, Schreibkräfte 43 bis 80 WPM, manche Stellen 80 bis 95 WPM.
- [Anschläge pro Minute](https://de.wikipedia.org/wiki/Anschl%C3%A4ge_pro_Minute) (Wikipedia) - Umrechnung durch 5 in WPM, geübte Zehnfinger-Tipper 200 bis 400 Anschläge im 10-Minuten-Test.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, unkorrigierte Fehlerrate 1,167 Prozent, Schnellste über 120 WPM.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: Blick auf den Bildschirm, feste Finger-Tasten-Zuordnung.
- [Typing](https://en.wikipedia.org/wiki/Typing) (Wikipedia, englisch) - Rekord von 216 WPM, Stella Pajunas-Garnand, 1946.`,
  },

  // ─── EN ARTICLES ──────────────────────────────────────────
  {
    slug: "learn-touch-typing",
    locale: "en",
    type: "article",
    category: "learning",
    title: "Learn Touch Typing: The Complete Guide",
    description: "From home row to full speed - how to master the 10-finger system step by step.",
    readingTime: 8,
    date: "2026-06-26",
    featured: true,
    content: `You learn touch typing in 2 to 4 weeks with 15 to 20 minutes of practice a day: home row first, then the other rows, speed last. After 2 to 3 months it feels natural. Two-finger typists manage about 27 words per minute when copying text, touch typists 40 to 60.

## Why touch typing?

Most people type with 4-6 fingers. It works, but there's a hard ceiling. Two-finger typists manage about 27 words per minute when copying and around 37 from memory. **Touch typists sit at 40 to 60 WPM**, professionals above that. Not because they're more frantic, but because every finger has its own zone. The largest typing study ever run (Aalto University, 168,000 participants) shows the same pattern: fast typists use 8.4 fingers on average, slow typists 5.3.

Here's the thing: the world typing speed record is 216 words per minute. Set in 1946. On a typewriter.

## The home position

It all starts with eight keys. Place your fingers on the middle row of your keyboard:

- **Left hand:** A - S - D - F (pinky to index finger)
- **Right hand:** J - K - L - ; (index finger to pinky)
- **Thumbs:** Space bar

The F and J keys have small bumps - you can find the position without looking. For the full definition, read [What Is Touch Typing?](article:what-is-touch-typing)

## Step by step

### Phase 1: Home row (Week 1)

Practice only the middle row. The goal isn't speed, it's **accuracy**. Type slowly and correctly. Your muscle memory needs correct repetitions to build. The [touch typing course](page:lessons) starts exactly here: home row first, then row by row.

### Phase 2: Top and bottom rows (Week 2-3)

Now add the remaining keys. One row at a time. Each finger moves from its home position up or down - and returns.

### Phase 3: Speed (Week 4+)

Only once you can type without errors should you work on speed. Accuracy beats speed - always.

## How long does it actually take?

Short answer: **2-4 weeks** for the basics, **2-3 months** until it feels natural. At 15-20 minutes of practice per day. The [placement test](page:placement) shows where you stand in a few minutes.

Sounds like a lot. But do the math (a worked example): if you type 3 hours a day and get 40% faster, you save over an hour per day. For the rest of your career.

## 5 tips for beginners

1. **Don't look at the keyboard.** This is the one rule that changes everything. Cover the keys with tape if you need to.
2. **Short sessions, every day.** 15 minutes daily beats 2 hours on the weekend. Learning research calls this the spacing effect: spread-out practice sticks better than one long block.
3. **Accuracy before speed.** Slow and correct builds better patterns than fast and sloppy.
4. **Practice with real text.** Not just "asdf jkl;" but actual sentences and paragraphs.
5. **Measure your progress.** One [typing speed test](page:speedTest) per week shows you where you stand. How to read your score is covered in the [typing test guide](article:typing-test).

## The first two weeks are tough

Let's be honest: at first, you'll type *slower* than before. That's normal and lasts about a week. After that, you accelerate quickly.

The trick is to push through the first 7 days. After that, you'll feel the progress. Seven habits that speed you up further: [How to Type Faster](article:how-to-type-faster).

## Printables

Four worksheets go with the course: the [finger keyboard map](article:finger-keyboard-map-qwerty) for next to your keyboard, the [blank layout to fill in](article:blank-layout-qwerty) as a two-minute test, the [four-week progress tracker](article:progress-tracker-4-weeks) and the [eight-question self-test](article:self-test-where-do-you-stand) that shows you the right starting point.

## Other tools compared

If you want to compare first: the articles on the [TypingClub alternative for adults](article:typingclub-alternative) and the [AgileFingers alternative](article:agile-fingers-alternative) put the best-known free trainers side by side with this course, with a date stamp.

## What to expect at the end

Which values are realistic and what employers expect is in the [WPM benchmarks by age and profession](article:average-typing-speed).

## Sources

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - two-finger typists about 27 WPM when copying and 37 from memory, professional typists 43 to 80 WPM.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, fast typists use 8.4 fingers on average, slow typists 5.3.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: consistent finger-to-key mapping, preparing the next keystroke and little hand movement predict speed; summary on [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).
- [Typing](https://en.wikipedia.org/wiki/Typing) (Wikipedia) - the 216 words per minute record, Stella Pajunas-Garnand, 1946, on an IBM electric typewriter.
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: spaced practice beats massed practice (the spacing effect).`,
  },
  {
    slug: "faster-typing-phone",
    locale: "en",
    type: "article",
    category: "productivity",
    title: "Faster Typing on Your Phone: 6 Tips You Can Use Right Now",
    description: "Swipe typing, text shortcuts, voice input - get the most out of your phone keyboard.",
    readingTime: 4,
    date: "2026-06-26",
    content: `The fastest way to type on a phone is swipe typing, text shortcuts and dictation for anything longer than two sentences. The six settings below take 5 minutes to switch on and work on iPhone and Android.

## Your phone can be faster

You type hundreds of messages on your phone every day. But most people only use a fraction of what modern keyboards can do.

Here are 6 tips you can set up in 5 minutes.

## 1. Enable swipe typing

Instead of tapping individual letters, you glide your finger across the keyboard. Sounds weird, but it's **significantly faster** than tapping.

- **iPhone:** Settings > General > Keyboard > enable "Slide to Type"
- **Android (Gboard):** Gboard settings > enable Glide typing

After a few days, you'll be faster than ever.

## 2. Set up text shortcuts

Type "omw" and it automatically becomes "On my way!" Or "@@" becomes your full email address.

- **iPhone:** Settings > General > Keyboard > Text Replacement
- **Android:** Gboard > Dictionary > Personal dictionary

Best candidates: email address, phone number, common greetings, home address.

## 3. Train your autocorrect

Autocorrect learns from you. When it corrects a word wrong, deliberately retype it correctly. After 2-3 times, it remembers.

Bonus: Add technical terms you use often as text shortcuts - then autocorrect won't change them anymore.

## 4. Use one-handed mode

On large phones, you can't reach all keys with your thumb. One-handed mode shrinks the keyboard to one side.

- **iPhone:** Hold the globe/emoji icon, choose left or right keyboard
- **Android:** Hold the comma key > One-handed mode

## 5. Voice input for longer messages

For messages over 2-3 sentences, voice input is almost always faster than typing. The microphone icon on your keyboard starts dictation.

Modern speech-to-text recognizes punctuation automatically. Just say "comma" or "period."

## 6. Choose the right keyboard app

The default keyboard is fine, but third-party apps offer more:

- **Gboard** (Google): Best swipe recognition, GIF search, translator built in
- **SwiftKey** (Microsoft): Best at learning your writing style, multilingual without switching

## On desktop, there's even more potential

At a computer, touch typing is the biggest lever: trained touch typists reach 40 to 60 words per minute, two-finger typists about 27 when copying text. The [complete touch typing guide](article:learn-touch-typing) shows how to get there. A quick [typing speed test](page:speedTest) tells you where you stand today. And emojis on a computer have their own shortcuts: [How to Type Emojis](article:emoji-keyboard-shortcuts).

## Sources

- [Type with the onscreen keyboard on iPhone](https://support.apple.com/guide/iphone/type-with-the-onscreen-keyboard-iph3c50f96e/ios) - Apple Support: slide to type, text replacement, one-handed keyboard.
- [Use glide typing in Gboard](https://support.google.com/gboard/answer/6380730) - Google Support.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - two-finger typists about 27 WPM when copying, trained typists 40 to 60 WPM and above.`,
  },
  {
    slug: "keyboard-shortcuts-windows",
    locale: "en",
    type: "lead-magnet",
    category: "shortcuts",
    title: "The 30 Most Important Windows Keyboard Shortcuts",
    description: "Every shortcut you actually need - on one page. Print it out and pin it next to your monitor.",
    readingTime: 3,
    date: "2026-06-26",
    downloadLabel: "Cheat Sheet",
    content: `These 30 shortcuts cover copying, switching windows, selecting text and browser tabs without touching the mouse. Every combination matches Microsoft's official list for Windows 10 and 11, sorted by situation and ready to print.

## General

- \`Ctrl + C\` - Copy
- \`Ctrl + V\` - Paste
- \`Ctrl + X\` - Cut
- \`Ctrl + Z\` - Undo
- \`Ctrl + Y\` - Redo
- \`Ctrl + A\` - Select all
- \`Ctrl + S\` - Save
- \`Ctrl + F\` - Find
- \`Ctrl + P\` - Print
- \`Ctrl + Shift + V\` - Paste without formatting

## Windows & Desktop

- \`Alt + Tab\` - Switch between windows
- \`Win + D\` - Show desktop
- \`Win + L\` - Lock screen
- \`Win + E\` - Open File Explorer
- \`Win + Left/Right Arrow\` - Snap window to side
- \`Alt + F4\` - Close window
- \`Win + Tab\` - Task view

## Text editing

- \`Ctrl + B\` - Bold
- \`Ctrl + I\` - Italic
- \`Ctrl + U\` - Underline
- \`Home\` - Beginning of line
- \`End\` - End of line
- \`Ctrl + Home\` - Beginning of document
- \`Ctrl + End\` - End of document
- \`Ctrl + Shift + Arrow\` - Select word

## Browser

- \`Ctrl + T\` - New tab
- \`Ctrl + W\` - Close tab
- \`Ctrl + Shift + T\` - Reopen closed tab
- \`Ctrl + L\` - Focus address bar
- \`Ctrl + Tab\` - Next tab

## Pro tip

Don't learn them all at once. Pick **3 shortcuts per week** and use them deliberately. After 10 weeks, you'll know all 30. On a Mac? Here are the [30 most important Mac shortcuts](article:keyboard-shortcuts-mac). Emojis have their own shortcut too: [How to Type Emojis](article:emoji-keyboard-shortcuts).

## Next step

Shortcuts save clicks, touch typing saves time on every word. Start with a free [typing speed test](page:speedTest) to see how much room there is. How touch typing works is explained in the [complete touch typing guide](article:learn-touch-typing).

## Matching sheets

Two more sheets go with the shortcuts: the [special characters sheet](article:special-characters-qwerty) with @, #, brackets and backslash, and the [numpad map](article:numpad-map) for everyone who wants to enter numbers without looking.

## Sources

- [Keyboard shortcuts in Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Microsoft Support, the complete official list.`,
  },
  {
    slug: "keyboard-shortcuts-mac",
    locale: "en",
    type: "lead-magnet",
    category: "shortcuts",
    title: "The 30 Most Important macOS Keyboard Shortcuts",
    description: "Every Mac shortcut you need - on one page. Print it and pin it next to your monitor.",
    readingTime: 3,
    date: "2026-06-26",
    downloadLabel: "Cheat Sheet",
    content: `These 30 shortcuts run macOS without the mouse: copying, switching apps, Spotlight, text editing, browser. Every combination matches Apple's official list, sorted by situation and ready to print.

## General

- \`Cmd + C\` - Copy
- \`Cmd + V\` - Paste
- \`Cmd + X\` - Cut
- \`Cmd + Z\` - Undo
- \`Cmd + Shift + Z\` - Redo
- \`Cmd + A\` - Select all
- \`Cmd + S\` - Save
- \`Cmd + F\` - Find
- \`Cmd + P\` - Print
- \`Cmd + Shift + V\` - Paste without formatting

## Windows & System

- \`Cmd + Tab\` - Switch between apps
- \`Cmd + H\` - Hide window
- \`Cmd + Q\` - Quit app
- \`Cmd + W\` - Close window/tab
- \`Cmd + Space\` - Spotlight search
- \`Ctrl + Cmd + F\` - Full screen
- \`Cmd + ,\` - App settings

## Text editing

- \`Cmd + B\` - Bold
- \`Cmd + I\` - Italic
- \`Cmd + U\` - Underline
- \`Cmd + Left Arrow\` - Beginning of line
- \`Cmd + Right Arrow\` - End of line
- \`Cmd + Up Arrow\` - Beginning of document
- \`Cmd + Down Arrow\` - End of document
- \`Option + Shift + Arrow\` - Select word

## Browser (Safari/Chrome)

- \`Cmd + T\` - New tab
- \`Cmd + W\` - Close tab
- \`Cmd + Shift + T\` - Reopen closed tab
- \`Cmd + L\` - Focus address bar
- \`Ctrl + Tab\` - Next tab

## Pro tip

Cmd on Mac is Ctrl on Windows. If you use both systems, memorize the function - not the key. The Windows counterparts are in the [30 most important Windows shortcuts](article:keyboard-shortcuts-windows).

## Next step

Shortcuts save clicks, touch typing saves time on every word. Start with a free [typing speed test](page:speedTest) to see how much room there is. How touch typing works is explained in the [complete touch typing guide](article:learn-touch-typing).

## Sources

- [Mac keyboard shortcuts](https://support.apple.com/en-us/102650) - Apple Support, the complete official list.`,
  },
  {
    slug: "emoji-keyboard-shortcuts",
    locale: "en",
    type: "lead-magnet",
    category: "shortcuts",
    title: "How to Type Emojis: Windows & Mac Keyboard Shortcuts",
    description: "No more copy-pasting from a browser tab. One keyboard shortcut opens the emoji picker on Windows, Mac, Slack, and Teams.",
    readingTime: 3,
    date: "2026-09-23",
    downloadLabel: "Cheat Sheet",
    content: `On Windows you type an emoji with Win + . , on a Mac with Cmd + Ctrl + Space. In Slack and Teams a colon plus the name is enough, for example :fire:. All three work in any text field, no copy-paste needed.

## Windows

- \`Win + .\` or \`Win + ;\` - opens the emoji panel
- Works in almost any text field: browser, Word, chat apps
- Use the search box at the top to find a specific emoji fast (e.g. "fire")

## Mac

- \`Cmd + Ctrl + Space\` - opens the emoji and symbol viewer
- Recently used emojis show up first, handy for repeats
- Works system-wide, including Mail, Notes, and the browser

## In Slack and Teams

- Type \`:\` followed by a name, e.g. \`:fire:\` - suggestions appear automatically
- Both tools learn which emojis you use most and suggest them first
- Custom emoji shortcodes can be set up in either tool

## Why this shortcut is worth learning

If you type a lot, you type a lot of emojis too - in Slack messages, team chats, social posts. Copy-pasting from an emoji website costs a few seconds of context switching every single time. The built-in picker is always one keystroke away, no tab switch required.

## Pro tip

The emoji panel remembers your recently used symbols. Force yourself to use the shortcut instead of copy-paste for a week - after that it's muscle memory, same as any other keyboard shortcut. The most useful ones are in the cheat sheets for [Windows](article:keyboard-shortcuts-windows) and [Mac](article:keyboard-shortcuts-mac).

## Next step

Shortcuts save clicks, touch typing saves time on every word. Start with a free [typing speed test](page:speedTest) to see how much room there is. How touch typing works is explained in the [complete touch typing guide](article:learn-touch-typing).

## Sources

- [Keyboard shortcuts in Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Microsoft Support, emoji panel section (Windows logo key + period).
- [Use emoji and symbols on Mac](https://support.apple.com/guide/mac-help/use-emoji-and-symbols-mchlp1560/mac) - Apple Support.
- [Use emoji and emoji reactions](https://slack.com/help/articles/202931348-Use-emoji-and-emoji-reactions) - Slack Help Center.`,
  },
  {
    slug: "what-is-touch-typing",
    locale: "en",
    type: "article",
    category: "learning",
    title: "What Is Touch Typing? Definition & How It Works",
    description: "The short answer: each finger owns a fixed set of keys, and you type without looking. Here's the full definition and how it differs from regular typing.",
    readingTime: 4,
    date: "2026-09-23",
    content: `Touch typing is the technique where each finger owns a fixed set of keys and you type without looking, eyes on the screen. Two-finger typists reach about 27 words per minute when copying, touch typists 40 to 60. The basics take 2 to 4 weeks.

## Short answer

Touch typing is a typing technique where each of your ten fingers is assigned a fixed set of keys on the keyboard. You type without looking down - your muscle memory knows where every key is.

The difference from "regular" typing: most people type with four to six fingers, constantly glancing down to find the next key, working letter by letter. It works, but it has a hard speed ceiling. A quick [typing speed test](page:speedTest) shows where yours is.

## Where the name comes from

The technique dates back to the typewriter era, when it was first taught systematically - each fingertip got its own zone on the keyboard, built around the home-row position (ASDF and JKL;). That home position hasn't changed, even on modern computer keyboards.

## Touch typing vs. the 10-finger system

These two terms are used interchangeably in practice. "Touch typing" is the general skill - typing by feel, without looking. The "10-finger system" (or "touch-type method") is the specific technique most commonly taught to achieve it.

## Why it's worth learning

Two-finger typists reach about 27 words per minute when copying text, touch typists 40 to 60. In the largest typing study ever run (168,000 participants), fast typists used 8.4 fingers on average, slow typists 5.3. What matters most is not the finger count but the fixed mapping: when every key is always hit by the same finger, you type faster and more accurately. Your eyes stay on the screen instead of the keyboard, which matters most when you're copying text or thinking and typing at the same time. Habits that help on top of that are in [How to Type Faster](article:how-to-type-faster).

## How long it takes

The basics click after 2-4 weeks of regular practice, and it starts feeling natural after 2-3 months - assuming 15-20 minutes of practice a day. It's not a talent, it's repetition. The [complete touch typing guide](article:learn-touch-typing) walks you through it step by step, and the [touch typing course](page:lessons) takes you there in 31 lessons.

## For the wall

To see the assignment every day, hang the [keyboard poster with the color zones](article:poster-which-finger-types-what-qwerty) next to the monitor.

## Sources

- [Touch typing](https://en.wikipedia.org/wiki/Touch_typing) - Wikipedia, history and home row.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - two-finger typists about 27 WPM when copying and 37 from memory, professional typists 43 to 80 WPM.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, fast typists use 8.4 fingers on average, slow typists 5.3.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: consistent finger-to-key mapping, preparing the next keystroke and little hand movement predict speed; summary on [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).`,
  },
  {
    slug: "how-to-type-faster",
    locale: "en",
    type: "article",
    category: "productivity",
    title: "How to Type Faster: 7 Techniques That Actually Work",
    description: "Touch typing isn't the only lever. These seven habits make a measurable difference, no matter how you currently type.",
    readingTime: 6,
    date: "2026-09-23",
    content: `Typing faster comes down to three habits: stop looking at the keyboard, hit every key with the same finger every time, and practice 15 minutes a day. The seven techniques below work even without the full touch-typing system.

## 1. Use backspace less

Every typo you fix immediately breaks your rhythm twice: once for the mistake, once for the correction. Finish the sentence first, then fix errors in one pass. It feels risky. It's measurably faster.

## 2. Stop looking at the keyboard

The biggest time sink is the glance back and forth between screen and keyboard. Each glance costs a fraction of a second - across thousands of keystrokes a day, that adds up fast. Touch typists never pay that cost. The Aalto study "How We Type" recommends exactly this, even for self-taught typists: look at the screen, not at your fingers.

## 3. Short sessions, every day

15 minutes daily beats two hours on a Saturday. Muscle memory needs frequent, short repetition - long gaps between sessions let progress slip backward. Learning research calls this the spacing effect.

## 4. Practice on real text

Train on sentences you'd actually type - emails, messages, AI prompts. Random letter strings train your fingers but not the language sense that makes real typing fast.

## 5. Accuracy before speed

Counterintuitive, but true: training for accuracy first makes you faster in the end than chasing speed from day one. Sloppy movement patterns that get baked in are hard to unlearn later.

## 6. Learn keyboard shortcuts

Copy, paste, delete a word, jump to line start - knowing these by heart saves you countless individual keystrokes and mouse clicks over the course of a day. The most useful ones are in the cheat sheets for [Windows](article:keyboard-shortcuts-windows) and [Mac](article:keyboard-shortcuts-mac).

## 7. Measure your progress

What you don't measure, you don't consciously improve. A quick weekly [typing speed check](page:speedTest) shows you in black and white whether the other six habits are working - and keeps you motivated to stick with it.

## What matters most

Of all seven, "stop looking at the keyboard" combined with "short daily practice" makes the biggest difference. Together, that's essentially the 10-finger system - every other technique here builds on top of it. The [complete touch typing guide](article:learn-touch-typing) shows how to learn it. On a phone, different rules apply: [Faster Typing on Your Phone](article:faster-typing-phone).

## For the office

The finger assignment as a wall chart: the [keyboard poster for the office](article:poster-which-finger-types-what-qwerty) shows it on one A4 landscape page, no explanation needed.

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: consistent finger-to-key mapping, preparing the next keystroke and little hand movement predict speed; summary on [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: spaced practice beats massed practice (the spacing effect).
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, fast typists use 8.4 fingers on average, slow typists 5.3.`,
  },
  {
    slug: "typingclub-alternative",
    locale: "en",
    type: "article",
    category: "comparisons",
    title: "TypingClub Alternative for Adults: The Full Comparison",
    description: "TypingClub is free, but clearly built for schools and kids. Here's the honest comparison for adults who want to learn touch typing.",
    readingTime: 5,
    date: "2026-09-23",
    content: `TypingClub is the right pick if you want a free school program with games. Fast Forward Typing is the right pick if you want an adult course with an end and a certificate. In short: TypingClub has 23 million users, is free and has no certificate; Fast Forward Typing has 31 lessons, one-time payment and the certificate included.

## The short version

TypingClub is free, huge ([23 million users worldwide](https://www.typingclub.com/)), and technically solid. But it's built for schools and kids - stars, badges, mascot story series, a dedicated mode for young children. Fast Forward Typing is built from scratch for adults: no kids' stuff, instead a clearly defined course with an end and a real certificate. Pick TypingClub if cost matters more to you than design. Pick Fast Forward Typing if you want to be taken seriously as an adult.

## Design and audience

TypingClub was built for classroom use and it shows on every page: collect stars, level up, animated story series with characters, a separate "Jungle Junior" mode just for younger kids. For a classroom, that's exactly right. For an adult squeezing in a quick practice between meetings, it quickly feels out of place.

Fast Forward Typing has no mascot universe and no badge collection. Lessons are built matter-of-factly, in the voice of an adult product, not a school program.

## Course and learning path

TypingClub offers a huge number of lessons, games and videos - but with no clearly defined end. You practice, collect stars, keep going. When you're "done" stays open.

Fast Forward Typing is built as a course with a beginning and an end: a [placement test](page:placement) shows your starting point, [31 lessons](page:lessons) lead you through in a structured way, and completion is clearly visible. If you want a finish line instead of endless practice, this is it.

## Pricing

| | TypingClub | Fast Forward Typing |
|---|---|---|
| Free version | Yes, full core course | First 6 lessons |
| Paid version | 7.50€/month or 29.50€/year | One-time payment, no subscription |
| What the paid upgrade gets you | Ad-free, more games, more themes, "Story Typing" - not more learning content | All remaining lessons through course completion |
| Certificate | Not available | [Included](page:certificate) |

Important to understand: with TypingClub, the subscription doesn't unlock more learning content, it unlocks comfort features. The actual course is free with both providers - the difference is the certificate and the design. A second comparison: [AgileFingers Alternative](article:agile-fingers-alternative).

## Who should use TypingClub

- Anyone teaching a school class or multiple kids at once
- Anyone who wants maximum game variety and gamification
- Anyone with no budget who doesn't mind ads in the program

## Who should use Fast Forward Typing

- Adults who want to practice on the side without feeling like they're back in school
- Anyone who wants a clearly defined course completion with a certificate for their resume or LinkedIn
- Anyone who wants to invest 15 minutes a day with an end in sight instead of endless practice

## Frequently asked questions

**Is TypingClub really free?** Yes, the core course is free permanently, including for adults. The paid subscription is optional and covers mostly comfort features.

**Does TypingClub offer a certificate?** No, TypingClub currently offers no official proof of typing speed.

**Does TypingClub work in other languages?** Yes, TypingClub offers full lesson series in French, German and several other languages, though the school-style design stays the same across languages.

*Information about TypingClub as of September 2026. Prices and features can change. No guarantee, the source is the provider's public website.*

## Sources

- [TypingClub](https://www.typingclub.com/) - official website, user numbers and course scope.
- [edclub Pricing](https://www.edclub.com/pricing) - the provider's official pricing page (as of September 2026).`,
  },
  {
    slug: "agile-fingers-alternative",
    locale: "en",
    type: "article",
    category: "comparisons",
    title: "AgileFingers Alternative: The Honest Comparison",
    description: "AgileFingers is free and well-designed, but it's an open-ended practice tool with no defined path or certificate. Here's the full comparison.",
    readingTime: 5,
    date: "2026-09-23",
    content: `AgileFingers is the right pick if you want a completely free practice tool with detailed stats. Fast Forward Typing is the right pick if you want a course with a beginning, an end and a certificate. Both support English and QWERTY.

## The short version

[AgileFingers](https://agilefingers.com/) is a free, minimalist tool, well thought out, with detailed stats (WPM, a per-finger error heatmap). But it's an open-ended practice tool with no structured path and no defined finish line - you practice without really knowing when you're "done". Fast Forward Typing offers a structured course with a real beginning and end, plus a certificate at the finish. Pick AgileFingers if you want a free, open-ended tool. Pick Fast Forward Typing if you want a path with a clear goal and proof at the end.

## Structure and learning path

AgileFingers offers three building blocks: finger-position lessons, practice texts, and games. That works well, but there's no built-up progression and no final goal - you move at your own pace, without knowing how much is left or what "finished" even means.

Fast Forward Typing is built as a course with a beginning and an end: a [placement test](page:placement) shows where you stand, [31 structured lessons](page:lessons) take you all the way through, and course completion is clearly visible. For anyone who wants a finish line instead of open-ended practice, that's the main difference.

## Tracking and stats

This is where AgileFingers is strong: words per minute, a per-finger error heatmap, per-key histograms. A real advantage for anyone who enjoys analyzing their own data in detail.

Fast Forward Typing also measures your speed and accuracy, before and after the course, but the focus is on overall progress and the final result rather than detailed analysis along the way. How TypingClub compares is covered in [TypingClub Alternative for Adults](article:typingclub-alternative).

## Pricing

| | AgileFingers | Fast Forward Typing |
|---|---|---|
| Free version | Yes, the entire tool | First 6 lessons |
| Paid version | None | One-time payment, no subscription |
| Certificate | Not available | [Included](page:certificate) |
| Defined course end | No | Yes |

## Who should use AgileFingers

- Anyone who wants a 100% free tool, with no payment ever
- Anyone who enjoys analyzing their own typing stats in detail
- Anyone who prefers open-ended practice without imposed structure

## Who should use Fast Forward Typing

- Anyone who wants a course with a real beginning and end
- Anyone who wants an official certificate at the end, for a resume or LinkedIn
- Anyone who wants to invest 15 minutes a day with a clear goal instead of endless practice

## Frequently asked questions

**Is AgileFingers really free?** Yes, the entire tool is free, there's no paid version.

**Does AgileFingers offer a certificate?** No, the site doesn't mention any official certificate or proof.

**Does AgileFingers work in English?** Yes, the tool supports over 20 languages and keyboard layouts, including English and QWERTY.

*Information about AgileFingers as of September 2026. Features can change. No guarantee, the source is the provider's public website.*

## Sources

- [AgileFingers](https://agilefingers.com/) - official website, features and languages (as of September 2026).`,
  },

  {
    slug: "typing-test",
    locale: "en",
    type: "article",
    category: "learning",
    title: "Typing Test: How It Works, Good Scores and Tips",
    description: "What a typing test measures, what counts as a good WPM score and how to do better on a typing test for a job. With a score table and a free test.",
    readingTime: 6,
    date: "2026-09-24",
    content: `A typing test measures, in 1 to 5 minutes, how many words per minute (WPM) you type and how accurately. 40 WPM, or 200 characters per minute, is a solid everyday pace, 60 WPM and up is fast. You can take a [free typing test](page:speedTest) right in your browser, no signup.

## What is a typing test?

A typing test, also called a typing speed test or WPM test, is a short copy test at the computer. You type out a given text while a timer runs. At the end you get two numbers: speed and accuracy. Online, it all runs in the browser on your own keyboard.

Here's the thing: the world record is 216 words per minute. Set in 1946, on an IBM electric typewriter.

## How a typing test works

1. **Pick a duration.** A 1 minute typing test shows your peak speed, a 5 minute typing test your sustained pace.
2. **Type the text.** The clock starts with your first keystroke.
3. **Read your score.** WPM, characters per minute and accuracy in percent.

In the [Fast Forward Typing speed test](page:speedTest) you type real sentences, not random words. Wrong keys block input until you hit the right one, so your score is your error-free speed.

## WPM or characters per minute?

Both measure the same thing. One word counts as 5 characters including spaces. So characters per minute divided by 5 equals WPM.

| Characters per minute | WPM | What it means |
|---|---|---|
| 135 | 27 | Two-finger typist copying text |
| 200 | 40 | Solid everyday pace |
| 260 | 52 | Average in the Aalto study (168,000 participants) |
| 300 | 60 | Fast |
| 400 | 80 | Professional level |
| 600 and up | 120 and up | The fastest in the Aalto study |

## What is a good WPM score?

Short answer: 40 WPM is solid, 60 WPM is fast, 80 WPM is professional level. Trained touch typists reach 200 to 400 characters per minute in a 10 minute test.

The average depends on who gets measured. A 1999 study found 32.5 WPM for copying text. The Aalto study with 168,000 volunteers measured an average typing speed of 51.6 WPM. The result screen shows where you land right after the test.

Accuracy matters just as much. In the Aalto study, only about 1 percent of characters stayed wrong on average. And fast typists made fewer errors than slow ones, not more. Aim for at least 95 percent.

## Typing tests for jobs

Some roles with a lot of writing ask for a typing test: administrative assistants, office clerks, data entry, customer support. The job ad states the exact requirement. As a rough guide: professional typists work at 43 to 80 WPM, and some positions require 80 to 95 WPM.

If you want to prove your score, add a [typing certificate](page:certificate) with WPM, accuracy and date. It fits on a resume and a LinkedIn profile.

## 5 tips for a better score

1. **Warm up.** Type loosely for two or three minutes before you measure.
2. **Accuracy first.** Every error costs correction time. Clean and steady beats rushed.
3. **Look at the screen.** The Aalto study "How We Type" recommends exactly that: eyes on the text, not on your fingers.
4. **Same finger, every time.** When every key is always hit by the same finger, speed goes up. That's the core of [touch typing](article:what-is-touch-typing).
5. **Measure regularly.** One typing test a week shows your progress. More habits are in [How to Type Faster](article:how-to-type-faster).

## From typing test to course

A typing test shows where you stand. Practice is what makes you faster. The [placement test](page:placement) measures every key, and the [touch typing course](page:lessons) trains exactly what's missing. At 15 minutes a day, the basics click after 2 to 4 weeks. The [complete touch typing guide](article:learn-touch-typing) walks you through it step by step.

## Typing test FAQ

**How long is a typing test?** Usually 1 to 5 minutes. For a stable score, go for 2 or 5 minutes.

**Is the typing test free?** Yes. The [online typing test](page:speedTest) is free and needs no account.

**What's the difference between a typing test and a typing speed test?** None. Both mean the same: type a text, measure speed and accuracy.

**Can I take a typing test if I can't touch type yet?** Yes. The test measures your current speed, no matter how many fingers you use.

**What is the average typing speed?** Between 33 and 52 WPM, depending on the study. A one-minute test tells you where you stand.

## Printables

To keep the value, write it into the [progress tracker](article:progress-tracker-4-weeks) and measure again after four weeks. Whether to work on finger placement first or on speed, the [eight-question self-test](article:self-test-where-do-you-stand) tells you.

## Benchmarks

Where your result sits compared with others, by percentile, age and profession, is in the article on [average typing speed](article:average-typing-speed).

## Sources

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - 5 characters = 1 word, a 1999 study with 32.5 WPM for copying, two-finger typists at 27 WPM, professional typists 43 to 80 WPM, some positions 80 to 95 WPM.
- [Anschläge pro Minute](https://de.wikipedia.org/wiki/Anschl%C3%A4ge_pro_Minute) (Wikipedia, German) - dividing by 5 converts to WPM, trained touch typists reach 200 to 400 characters per minute in a 10 minute test.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, uncorrected error rate 1.167 percent, fastest above 120 WPM.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: eyes on the screen, consistent finger-to-key mapping.
- [Typing](https://en.wikipedia.org/wiki/Typing) (Wikipedia) - the 216 WPM record, Stella Pajunas-Garnand, 1946.`,
  },

  // ─── FR ARTICLES ──────────────────────────────────────────
  {
    slug: "apprendre-dactylographie",
    locale: "fr",
    type: "article",
    category: "learning",
    title: "Apprendre la dactylographie : le guide complet",
    description: "De la rangée de base à la pleine vitesse - comment maîtriser la frappe à dix doigts étape par étape.",
    readingTime: 8,
    date: "2026-06-26",
    featured: true,
    content: `La dactylographie s'apprend en 2 à 4 semaines à raison de 15 à 20 minutes par jour : d'abord la rangée de base, puis les autres rangées, la vitesse en dernier. Après 2 à 3 mois, le geste devient naturel. Qui tape à deux doigts recopie un texte à environ 27 mots par minute, un dactylo à dix doigts tape entre 40 et 60.

## Pourquoi la frappe à dix doigts ?

La plupart des gens tapent avec 4 à 6 doigts. Ça fonctionne, mais il y a un plafond. Qui tape à deux doigts recopie un texte à environ 27 mots par minute, et en tape 37 de mémoire. **Les dactylos à dix doigts se situent entre 40 et 60 MPM**, les pros au-dessus. Pas parce qu'ils sont plus agités, mais parce que chaque doigt a sa propre zone. La plus grande étude jamais menée sur la frappe (Aalto University, 168 000 participants) montre la même chose : les typistes rapides utilisent 8,4 doigts en moyenne, les lents 5,3.

Le truc dingue : le record mondial de frappe est de 216 mots par minute. Établi en 1946. Sur une machine à écrire.

## La position de base

Tout commence avec huit touches. Place tes doigts sur la rangée du milieu de ton clavier [AZERTY](article:qwerty-azerty-qwertz) :

- **Main gauche :** Q - S - D - F (auriculaire à index)
- **Main droite :** J - K - L - M (index à auriculaire)
- **Pouces :** Barre d'espace

Les touches F et J ont de petites bosses - tu trouves la position sans regarder. La définition complète est dans [Dactylographie : définition et méthode](article:dactylographie-definition).

## Étape par étape

### Phase 1 : Rangée de base (Semaine 1)

Entraîne-toi uniquement sur la rangée du milieu. L'objectif n'est pas la vitesse, c'est la **précision**. Tape lentement et correctement. Ta mémoire musculaire a besoin de répétitions correctes. Le [cours de dactylographie](page:lessons) commence exactement là : la rangée de base d'abord, puis rangée par rangée.

### Phase 2 : Rangées du haut et du bas (Semaine 2-3)

Maintenant, ajoute les autres lettres. Une rangée à la fois. Chaque doigt se déplace depuis sa position de base vers le haut ou le bas - et revient.

### Phase 3 : Vitesse (Semaine 4+)

Seulement quand tu tapes sans erreurs, tu travailles la vitesse. La précision bat la vitesse - toujours.

## Combien de temps ça prend vraiment ?

Réponse courte : **2 à 4 semaines** pour les bases, **2 à 3 mois** pour que ça devienne naturel. À 15-20 minutes d'entraînement par jour. L'[évaluation](page:placement) te montre où tu en es en quelques minutes.

Ça semble beaucoup. Mais fais le calcul (exemple chiffré) : si tu tapes 3 heures par jour et que tu deviens 40% plus rapide, tu économises plus d'une heure par jour. Pour le reste de ta carrière.

## 5 conseils pour débuter

1. **Ne regarde pas le clavier.** C'est la seule règle qui change tout. Colle du ruban adhésif sur les touches si nécessaire.
2. **Sessions courtes, tous les jours.** 15 minutes par jour battent 2 heures le week-end. La recherche appelle ça l'effet d'espacement : un entraînement réparti tient mieux qu'un seul gros bloc.
3. **Précision avant vitesse.** Lent et correct construit de meilleurs automatismes que rapide et approximatif.
4. **Entraîne-toi avec du vrai texte.** Pas seulement "qsdf jklm" mais des phrases et des paragraphes.
5. **Mesure tes progrès.** Un [test de dactylographie](page:speedTest) par semaine te montre où tu en es. Pour lire ton résultat, vois le [guide du test de frappe](article:test-de-frappe).

## Les deux premières semaines sont difficiles

Soyons honnêtes : au début, tu tapes *plus lentement* qu'avant. C'est normal et ça dure environ une semaine. Après, tu accélères vite.

Le truc, c'est de tenir les 7 premiers jours. Après ça, tu sens le progrès. Sept habitudes pour aller encore plus vite : [Taper plus vite : 7 techniques](article:taper-plus-vite-techniques).

## À imprimer

Quatre fiches accompagnent le cours : la [carte doigts-clavier](article:carte-doigts-clavier-azerty) à poser à côté du clavier, le [clavier vierge à compléter](article:clavier-vierge-azerty) comme test de deux minutes, le [suivi de progression sur quatre semaines](article:suivi-progression-4-semaines) et l'[auto-évaluation en huit questions](article:auto-evaluation-ou-en-es-tu) qui indique le bon point de départ.

## Les autres outils, comparés

Pour comparer d'abord : les articles sur l'[alternative à TypingClub pour adultes](article:typingclub-alternative) et l'[alternative à AgileFingers](article:agile-fingers-alternative) mettent les entraîneurs gratuits les plus connus face à ce cours, avec la date de mise à jour.

## Ce qu'on peut viser

Quelles valeurs sont réalistes et ce qu'attendent les employeurs : les [repères en mots par minute par âge et par métier](article:vitesse-de-frappe-moyenne).

## Sources

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - typistes à deux doigts environ 27 MPM en recopiant et 37 de mémoire, professionnels de 43 à 80 MPM.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, les typistes rapides utilisent 8,4 doigts en moyenne, les lents 5,3.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016 : une attribution fixe doigt-touche, la préparation de la frappe suivante et peu de mouvement des mains prédisent la vitesse ; résumé sur [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).
- [Typing](https://en.wikipedia.org/wiki/Typing) (Wikipedia, en anglais) - le record de 216 mots par minute, Stella Pajunas-Garnand, 1946, sur une machine à écrire électrique IBM.
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006 : l'entraînement espacé bat l'entraînement massé (effet d'espacement).`,
  },
  {
    slug: "taper-plus-vite-telephone",
    locale: "fr",
    type: "article",
    category: "productivity",
    title: "Taper plus vite sur ton téléphone : 6 astuces immédiates",
    description: "Glissement, raccourcis texte, dictée vocale - tire le maximum de ton clavier mobile.",
    readingTime: 4,
    date: "2026-06-26",
    content: `Sur un téléphone, le plus rapide reste la saisie par glissement, les raccourcis texte et la dictée pour tout ce qui dépasse deux phrases. Les six réglages ci-dessous s'activent en 5 minutes, sur iPhone comme sur Android.

## Ton téléphone peut faire mieux

Tu tapes des centaines de messages sur ton téléphone chaque jour. Mais la plupart des gens n'utilisent qu'une fraction de ce que les claviers modernes offrent.

Voici 6 astuces que tu peux configurer en 5 minutes.

## 1. Active la saisie par glissement

Au lieu de taper chaque lettre, tu glisses ton doigt sur le clavier. Ça paraît bizarre, mais c'est **nettement plus rapide** que le tap.

- **iPhone :** Réglages > Général > Clavier > active "Glisser pour taper"
- **Android (Gboard) :** Paramètres Gboard > active la saisie gestuelle

Après quelques jours, tu te sentiras plus rapide que jamais.

## 2. Configure des raccourcis texte

Tape "cdlt" et ça devient automatiquement "Cordialement". Ou "@@" devient ton adresse email complète.

- **iPhone :** Réglages > Général > Clavier > Remplacement de texte
- **Android :** Gboard > Dictionnaire > Dictionnaire personnel

Les meilleurs candidats : adresse email, numéro de téléphone, formules de politesse, adresse postale.

## 3. Entraîne ta correction automatique

La correction auto apprend de toi. Quand elle corrige un mot incorrectement, retape-le volontairement. Après 2-3 fois, elle s'en souvient.

Bonus : ajoute les termes techniques que tu utilises souvent comme raccourcis texte - la correction auto ne les changera plus.

## 4. Utilise le mode une main

Sur les grands téléphones, tu n'atteins pas toutes les touches avec le pouce. Le mode une main réduit le clavier sur un côté.

- **iPhone :** Maintiens le symbole globe/emoji, choisis clavier gauche ou droit
- **Android :** Maintiens la touche virgule > Mode une main

## 5. Dictée vocale pour les longs messages

Pour les messages de plus de 2-3 phrases, la dictée est presque toujours plus rapide. L'icône micro sur ton clavier lance la dictée.

La reconnaissance vocale moderne détecte la ponctuation automatiquement. Dis simplement "virgule" ou "point".

## 6. Choisis la bonne appli clavier

Le clavier par défaut est correct, mais les applis tierces offrent plus :

- **Gboard** (Google) : Meilleure reconnaissance du glissement, recherche GIF, traducteur intégré
- **SwiftKey** (Microsoft) : Apprend le mieux ton style d'écriture, multilingue sans basculer

## Sur un ordi, le potentiel est encore plus grand

Sur un ordinateur, la frappe à dix doigts est le plus gros levier : un dactylo entraîné tape entre 40 et 60 mots par minute, contre environ 27 pour qui recopie un texte à deux doigts. Le [guide complet de la dactylographie](article:apprendre-dactylographie) montre comment y arriver. Un rapide [test de vitesse de frappe](page:speedTest) te dit où tu en es. Et pour les emojis sur ordinateur, il existe des raccourcis : [Raccourci clavier emoji](article:raccourcis-clavier-emoji).

## Sources

- [Saisir du texte avec le clavier à l'écran sur l'iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3c50f96e/ios) - Assistance Apple : glisser pour taper, remplacement de texte, clavier à une main.
- [Utiliser la saisie gestuelle dans Gboard](https://support.google.com/gboard/answer/6380730) - Aide Google.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - frappe à deux doigts environ 27 MPM en recopiant, dactylos entraînés de 40 à 60 MPM et plus.`,
  },
  {
    slug: "raccourcis-clavier-windows",
    locale: "fr",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Les 30 raccourcis clavier Windows indispensables",
    description: "Tous les raccourcis dont tu as vraiment besoin - sur une seule page. À imprimer et accrocher à côté de ton écran.",
    readingTime: 3,
    date: "2026-06-26",
    downloadLabel: "Aide-mémoire",
    content: `Ces 30 raccourcis couvrent le copier-coller, le changement de fenêtre, la sélection de texte et les onglets du navigateur, sans toucher la souris. Toutes les combinaisons correspondent à la liste officielle de Microsoft pour Windows 10 et 11, classées par situation et prêtes à imprimer.

## Général

- \`Ctrl + C\` - Copier
- \`Ctrl + V\` - Coller
- \`Ctrl + X\` - Couper
- \`Ctrl + Z\` - Annuler
- \`Ctrl + Y\` - Rétablir
- \`Ctrl + A\` - Tout sélectionner
- \`Ctrl + S\` - Enregistrer
- \`Ctrl + F\` - Rechercher
- \`Ctrl + P\` - Imprimer
- \`Ctrl + Maj + V\` - Coller sans mise en forme

## Fenêtres & Bureau

- \`Alt + Tab\` - Basculer entre les fenêtres
- \`Win + D\` - Afficher le bureau
- \`Win + L\` - Verrouiller l'écran
- \`Win + E\` - Ouvrir l'explorateur
- \`Win + Flèche gauche/droite\` - Ancrer la fenêtre
- \`Alt + F4\` - Fermer la fenêtre
- \`Win + Tab\` - Vue des tâches

## Édition de texte

- \`Ctrl + B\` - Gras
- \`Ctrl + I\` - Italique
- \`Ctrl + U\` - Souligné
- \`Début\` - Début de ligne
- \`Fin\` - Fin de ligne
- \`Ctrl + Début\` - Début du document
- \`Ctrl + Fin\` - Fin du document
- \`Ctrl + Maj + Flèche\` - Sélectionner un mot

## Navigateur

- \`Ctrl + T\` - Nouvel onglet
- \`Ctrl + W\` - Fermer l'onglet
- \`Ctrl + Maj + T\` - Rouvrir le dernier onglet
- \`Ctrl + L\` - Barre d'adresse
- \`Ctrl + Tab\` - Onglet suivant

## Astuce pro

N'apprends pas tout d'un coup. Choisis **3 raccourcis par semaine** et utilise-les consciemment. Au bout de 10 semaines, tu les maîtrises tous. Sur Mac ? Voici les [30 raccourcis macOS indispensables](article:raccourcis-clavier-mac). Les emojis ont aussi leur raccourci : [Raccourci clavier emoji](article:raccourcis-clavier-emoji).

## Prochaine étape

Les raccourcis font gagner des clics, la frappe à dix doigts fait gagner du temps sur chaque mot. Commence par un [test de vitesse de frappe](page:speedTest) gratuit pour voir ta marge de progression. Le fonctionnement de la méthode est expliqué dans le [guide complet de la dactylographie](article:apprendre-dactylographie).

## Fiches associées

Deux autres fiches complètent les raccourcis : la [fiche des caractères spéciaux](article:caracteres-speciaux-azerty) avec @, €, # et les crochets, et la [carte du pavé numérique](article:carte-pave-numerique) pour saisir les chiffres sans regarder.

## Sources

- [Raccourcis clavier dans Windows](https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Support Microsoft, liste officielle complète.`,
  },
  {
    slug: "raccourcis-clavier-mac",
    locale: "fr",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Les 30 raccourcis clavier macOS indispensables",
    description: "Tous les raccourcis Mac sur une seule page - à imprimer et accrocher à côté de ton écran.",
    readingTime: 3,
    date: "2026-06-26",
    downloadLabel: "Aide-mémoire",
    content: `Ces 30 raccourcis pilotent macOS sans souris : copier-coller, changement d'app, Spotlight, édition de texte, navigateur. Toutes les combinaisons correspondent à la liste officielle d'Apple, classées par situation et prêtes à imprimer.

## Général

- \`Cmd + C\` - Copier
- \`Cmd + V\` - Coller
- \`Cmd + X\` - Couper
- \`Cmd + Z\` - Annuler
- \`Cmd + Maj + Z\` - Rétablir
- \`Cmd + A\` - Tout sélectionner
- \`Cmd + S\` - Enregistrer
- \`Cmd + F\` - Rechercher
- \`Cmd + P\` - Imprimer
- \`Cmd + Maj + V\` - Coller sans mise en forme

## Fenêtres & Système

- \`Cmd + Tab\` - Basculer entre les apps
- \`Cmd + H\` - Masquer la fenêtre
- \`Cmd + Q\` - Quitter l'app
- \`Cmd + W\` - Fermer fenêtre/onglet
- \`Cmd + Espace\` - Recherche Spotlight
- \`Ctrl + Cmd + F\` - Plein écran
- \`Cmd + ,\` - Préférences de l'app

## Édition de texte

- \`Cmd + B\` - Gras
- \`Cmd + I\` - Italique
- \`Cmd + U\` - Souligné
- \`Cmd + Flèche gauche\` - Début de ligne
- \`Cmd + Flèche droite\` - Fin de ligne
- \`Cmd + Flèche haut\` - Début du document
- \`Cmd + Flèche bas\` - Fin du document
- \`Option + Maj + Flèche\` - Sélectionner un mot

## Navigateur (Safari/Chrome)

- \`Cmd + T\` - Nouvel onglet
- \`Cmd + W\` - Fermer l'onglet
- \`Cmd + Maj + T\` - Rouvrir le dernier onglet
- \`Cmd + L\` - Barre d'adresse
- \`Ctrl + Tab\` - Onglet suivant

## Astuce pro

Cmd sur Mac correspond à Ctrl sur Windows. Si tu utilises les deux systèmes, retiens la fonction - pas la touche. Les équivalents sont dans les [30 raccourcis Windows indispensables](article:raccourcis-clavier-windows).

## Prochaine étape

Les raccourcis font gagner des clics, la frappe à dix doigts fait gagner du temps sur chaque mot. Commence par un [test de vitesse de frappe](page:speedTest) gratuit pour voir ta marge de progression. Le fonctionnement de la méthode est expliqué dans le [guide complet de la dactylographie](article:apprendre-dactylographie).

## Sources

- [Raccourcis clavier du Mac](https://support.apple.com/fr-fr/102650) - Assistance Apple, liste officielle complète.`,
  },
  {
    slug: "qwerty-azerty-qwertz",
    locale: "fr",
    type: "article",
    category: "learning",
    title: "QWERTY, AZERTY, QWERTZ : pourquoi ton clavier est différent",
    description: "D'où viennent ces dispositions, quelles sont les différences, et laquelle est la meilleure pour toi.",
    readingTime: 5,
    date: "2026-06-26",
    content: `QWERTY, AZERTY et QWERTZ tirent leur nom des six premières touches de la rangée du haut. Le QWERTY date de 1873 (Sholes, pour Remington), l'AZERTY s'est imposé en France au début du XXe siècle et n'a été normalisé qu'en 2019, le QWERTZ échange le Y et le Z pour l'allemand. Aucune disposition n'est meilleure : apprends celle de ton pays.

## Trois dispositions, une histoire

Tu as sûrement remarqué : les claviers ne sont pas les mêmes partout. En France, c'est AZERTY. Aux États-Unis et au Royaume-Uni, c'est QWERTY. En Allemagne et en Suisse, c'est QWERTZ.

Le nom vient tout simplement des 6 premières touches de la rangée du haut. Tu peux les comparer touche par touche dans le [comparateur QWERTY, AZERTY, QWERTZ](page:keyboardLayouts).

## D'où vient le QWERTY ?

Le QWERTY a été inventé en 1873 par Christopher Latham Sholes pour la machine à écrire Remington. La légende dit qu'il a placé les lettres fréquemment combinées loin l'une de l'autre pour éviter que les tiges de la machine ne se bloquent.

Fun fact : cette contrainte mécanique n'existe plus depuis plus de 100 ans, mais on utilise toujours la même disposition.

## Pourquoi la France utilise l'AZERTY

La France a adopté l'AZERTY au début du XXe siècle, adapté du QWERTY pour mieux correspondre à la langue française. Les lettres A et Q ont été échangées, ainsi que Z et W, et les accents ont été ajoutés.

Le problème : l'AZERTY français n'a jamais été normalisé officiellement avant 2019 (norme AFNOR NF Z71-300). Résultat : les majuscules accentuées (É, È, À) sont toujours difficiles à taper sur un clavier standard.

## L'Allemagne et le QWERTZ

En Allemagne, la disposition QWERTZ échange Y et Z - parce que le Z est beaucoup plus fréquent en allemand que le Y. Les umlauts (Ä, Ö, Ü) et le ß ont leurs propres touches.

## Comparaison rapide

- **QWERTY** (US/UK) : La disposition la plus répandue au monde. Standard pour la programmation.
- **AZERTY** (France, Belgique) : Adapté au français, mais les accents majuscules restent compliqués.
- **QWERTZ** (Allemagne, Suisse, Autriche) : Optimisé pour l'allemand avec les umlauts intégrés.

## Laquelle est la meilleure ?

Aucune n'est objectivement meilleure. Utilise celle de ton pays - c'est celle que tu trouveras partout. Le plus important n'est pas la disposition, c'est d'apprendre à [taper avec tes dix doigts](article:apprendre-dactylographie).

## Et les alternatives ?

Des dispositions comme **Dvorak** et **Colemak** promettent plus d'efficacité en plaçant les lettres les plus fréquentes sur la rangée du milieu. En théorie, c'est mieux. En pratique, très peu de gens les utilisent - et tous les claviers que tu rencontreras utilisent QWERTY/AZERTY/QWERTZ.

Bref, apprends la disposition de ton clavier. Et apprends à la maîtriser. Commence par mesurer ta [vitesse de frappe](page:speedTest).

## Sources

- [QWERTY](https://en.wikipedia.org/wiki/QWERTY) - Wikipedia (en anglais), histoire de la disposition et de Christopher Latham Sholes.
- [AZERTY](https://fr.wikipedia.org/wiki/AZERTY) - Wikipédia, adoption en France et norme NF Z71-300 de 2019.
- [QWERTZ-Tastaturbelegung](https://de.wikipedia.org/wiki/QWERTZ-Tastaturbelegung) - Wikipedia (en allemand), l'échange Y/Z et les umlauts.`,
  },
  {
    slug: "raccourcis-clavier-emoji",
    locale: "fr",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Raccourci clavier emoji : insérer un smiley en 2 secondes",
    description: "Le raccourci clavier emoji qui évite le copier-coller depuis un site. Windows, Mac, et les codes rapides dans Slack ou Teams.",
    readingTime: 3,
    date: "2026-09-23",
    downloadLabel: "Fiche pratique",
    content: `Sur Windows, un emoji s'insère avec Win + . ; sur Mac avec Cmd + Ctrl + Espace. Dans Slack et Teams, deux-points plus le nom suffisent, par exemple :feu:. Les trois méthodes marchent dans n'importe quel champ de texte, sans copier-coller.

## Sur Windows

- \`Win + .\` ou \`Win + ;\` - ouvre le clavier emoji Windows
- Fonctionne dans presque tous les champs de texte : navigateur, Word, messagerie
- Utilise la barre de recherche en haut pour trouver un emoji précis (ex : "feu")

## Sur Mac

- \`Cmd + Ctrl + Espace\` - ouvre le sélecteur d'emojis et de symboles
- Les emojis récemment utilisés apparaissent en premier
- Fonctionne dans tout le système : Mail, Notes, navigateur

## Dans Slack et Teams

- Tape \`:\` suivi d'un mot, par exemple \`:feu:\` - les suggestions apparaissent automatiquement
- Les deux outils retiennent tes emojis les plus utilisés et les proposent en premier
- Des raccourcis d'emoji personnalisés peuvent être créés dans les deux outils

## Pourquoi apprendre ce raccourci clavier

Qui écrit beaucoup tape aussi beaucoup d'emojis - dans les messages Slack, les chats d'équipe, les réseaux sociaux. Copier-coller un emoji depuis un site coûte quelques secondes de changement de contexte à chaque fois. Le clavier emoji intégré est toujours accessible en une seule touche, sans changer d'onglet.

## Astuce

Le sélecteur d'emoji retient les symboles récemment utilisés. Force-toi à utiliser le raccourci clavier plutôt que le copier-coller pendant une semaine - après ça, c'est de la mémoire musculaire, comme n'importe quel autre raccourci clavier. Les plus utiles sont dans les aide-mémoires [Windows](article:raccourcis-clavier-windows) et [Mac](article:raccourcis-clavier-mac).

## Prochaine étape

Les raccourcis font gagner des clics, la frappe à dix doigts fait gagner du temps sur chaque mot. Commence par un [test de vitesse de frappe](page:speedTest) gratuit pour voir ta marge de progression. Le fonctionnement de la méthode est expliqué dans le [guide complet de la dactylographie](article:apprendre-dactylographie).

## Sources

- [Raccourcis clavier dans Windows](https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Support Microsoft, section clavier emoji (touche Windows + point).
- [Utiliser des emoji et des symboles sur Mac](https://support.apple.com/fr-fr/guide/mac-help/mchlp1560/mac) - Assistance Apple.
- [Utiliser des emojis et des réactions emoji](https://slack.com/help/articles/202931348-Use-emoji-and-emoji-reactions) - Centre d'aide Slack.`,
  },
  {
    slug: "dactylographie-definition",
    locale: "fr",
    type: "article",
    category: "learning",
    title: "Dactylographie : définition et méthode des dix doigts",
    description: "La dactylographie, c'est taper au clavier sans regarder tes mains - avec la méthode des dix doigts. Définition complète et comment ça marche.",
    readingTime: 4,
    date: "2026-09-23",
    content: `La dactylographie, c'est taper au clavier avec dix doigts et sans regarder ses mains, chaque doigt ayant ses touches attitrées. Qui tape à deux doigts recopie un texte à environ 27 mots par minute, un dactylo à dix doigts entre 40 et 60. Les bases s'acquièrent en 2 à 4 semaines.

## Définition

La dactylographie désigne l'art de taper à la machine, aujourd'hui au clavier d'ordinateur. Dans son usage moderne, le mot renvoie presque toujours à la méthode des dix doigts : chaque doigt est responsable d'une zone fixe du clavier, et tu tapes sans regarder tes mains.

La différence avec la façon de taper "classique" : la plupart des gens tapent avec deux à quatre doigts, cherchent chaque touche des yeux, et avancent lettre par lettre. Ça fonctionne, mais ça a une limite de vitesse difficile à dépasser. Un rapide [test de vitesse de frappe](page:speedTest) te montre où se trouve la tienne.

## D'où vient le mot

Le terme vient de l'époque des machines à écrire, quand la technique a commencé à être enseignée de façon systématique - chaque doigt recevait sa propre zone sur le clavier, autour de la position de base (QSDF et JKLM sur AZERTY). Cette position de base n'a pas changé, même sur les claviers d'ordinateur modernes.

## La méthode des dix doigts, concrètement

Chaque main couvre la moitié du clavier. Les index reviennent toujours vers les touches F et J (ou leur équivalent sur ton clavier) entre deux frappes - ce sont tes points de repère. Avec de la pratique, tes doigts retrouvent leur position sans que tu aies besoin d'y penser.

## Pourquoi apprendre à taper avec tes dix doigts

Qui tape à deux doigts recopie un texte à environ 27 mots par minute, un dactylo à dix doigts tape entre 40 et 60. Dans la plus grande étude jamais menée sur la frappe (168 000 participants), les typistes rapides utilisaient 8,4 doigts en moyenne, les lents 5,3. Ce qui compte le plus, ce n'est pas le nombre de doigts mais l'attribution fixe : quand chaque touche est toujours frappée par le même doigt, tu tapes plus vite et avec moins d'erreurs. Le regard reste sur l'écran plutôt que sur le clavier, ce qui change tout quand tu recopies un texte ou que tu réfléchis en tapant. D'autres habitudes utiles sont dans [Taper plus vite : 7 techniques](article:taper-plus-vite-techniques).

## Combien de temps ça prend

Les bases sont acquises en 2 à 4 semaines de pratique régulière, et le geste devient naturel après 2 à 3 mois - à raison de 15 à 20 minutes d'entraînement par jour. Ce n'est pas un talent, c'est de la répétition. Le [guide complet de la dactylographie](article:apprendre-dactylographie) détaille chaque étape, et le [cours de dactylographie](page:lessons) t'y amène en 31 leçons.

## À afficher

Pour voir l'attribution chaque jour, accroche l'[affiche clavier à zones de couleur](article:affiche-quel-doigt-tape-quoi-azerty) à côté de l'écran.

## Sources

- [Dactylographie](https://www.larousse.fr/dictionnaires/francais/dactylographie/21363) - Larousse, définition.
- [Dactylographie](https://fr.wikipedia.org/wiki/Dactylographie) - Wikipédia, histoire et méthode.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - typistes à deux doigts environ 27 MPM en recopiant et 37 de mémoire, professionnels de 43 à 80 MPM.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, les typistes rapides utilisent 8,4 doigts en moyenne, les lents 5,3.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016 : une attribution fixe doigt-touche, la préparation de la frappe suivante et peu de mouvement des mains prédisent la vitesse ; résumé sur [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).`,
  },
  {
    slug: "taper-plus-vite-techniques",
    locale: "fr",
    type: "article",
    category: "productivity",
    title: "Taper plus vite : 7 techniques qui fonctionnent vraiment",
    description: "La méthode des dix doigts n'est pas le seul levier. Ces sept habitudes font une différence mesurable, quelle que soit ta façon de taper aujourd'hui.",
    readingTime: 6,
    date: "2026-09-23",
    content: `Taper plus vite tient à trois habitudes : ne plus regarder le clavier, frapper chaque touche toujours avec le même doigt, et s'entraîner 15 minutes par jour. Les sept techniques ci-dessous fonctionnent même sans la méthode complète des dix doigts.

## 1. Utilise moins la touche retour arrière

Chaque faute que tu corriges immédiatement casse ton rythme deux fois : une fois pour l'erreur, une fois pour la correction. Termine ta phrase d'abord, corrige ensuite en une seule fois. Ça paraît risqué. C'est mesurablement plus rapide.

## 2. Arrête de regarder le clavier

Le plus gros gaspillage de temps, c'est l'aller-retour du regard entre l'écran et le clavier. Chaque coup d'œil coûte une fraction de seconde - sur des milliers de frappes par jour, ça s'additionne vite. Qui tape avec les dix doigts ne paie jamais ce coût. L'étude d'Aalto "How We Type" recommande exactement ça, même aux autodidactes : regarder l'écran, pas ses doigts.

## 3. Des sessions courtes, mais chaque jour

15 minutes par jour valent mieux que deux heures le week-end. La mémoire musculaire a besoin de répétitions courtes et fréquentes - de longues pauses entre les sessions font régresser les progrès. La recherche appelle ça l'effet d'espacement.

## 4. Entraîne-toi sur de vrais textes

Pratique sur des phrases que tu tapes vraiment - e-mails, messages, prompts pour l'IA. Des suites de lettres aléatoires entraînent tes doigts, mais pas le sens de la langue qui rend la frappe vraiment rapide.

## 5. La précision avant la vitesse

Ça paraît contre-intuitif, mais c'est vrai : s'entraîner d'abord à la précision rend plus rapide à terme que de viser la vitesse dès le premier jour. Les mauvaises habitudes de frappe qui s'installent sont difficiles à corriger ensuite.

## 6. Apprends les raccourcis clavier

Copier, coller, supprimer un mot, revenir au début de la ligne - qui maîtrise ces raccourcis par cœur s'économise d'innombrables frappes et clics de souris au quotidien. Les plus utiles sont dans les aide-mémoires [Windows](article:raccourcis-clavier-windows) et [Mac](article:raccourcis-clavier-mac).

## 7. Mesure ta progression

Ce qu'on ne mesure pas, on ne l'améliore pas consciemment. Un [test de vitesse de frappe](page:speedTest) rapide chaque semaine te montre noir sur blanc si les six autres habitudes fonctionnent - et te garde motivé.

## Ce qui compte le plus

Sur ces sept points, "arrêter de regarder le clavier" combiné à "s'entraîner un peu chaque jour" fait la plus grande différence. Ensemble, c'est essentiellement la méthode des dix doigts - toutes les autres techniques s'appuient dessus. Le [guide complet de la dactylographie](article:apprendre-dactylographie) explique comment l'apprendre. Sur téléphone, les règles changent : [Taper plus vite sur ton téléphone](article:taper-plus-vite-telephone).

## Pour le bureau

L'attribution des doigts en version murale : l'[affiche clavier pour le bureau](article:affiche-quel-doigt-tape-quoi-azerty) la montre sur une page A4 paysage, sans texte explicatif.

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016 : une attribution fixe doigt-touche, la préparation de la frappe suivante et peu de mouvement des mains prédisent la vitesse ; résumé sur [ScienceDaily](https://www.sciencedaily.com/releases/2016/02/160209112451.htm).
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006 : l'entraînement espacé bat l'entraînement massé (effet d'espacement).
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, les typistes rapides utilisent 8,4 doigts en moyenne, les lents 5,3.`,
  },
  {
    slug: "agile-fingers-alternative",
    locale: "fr",
    type: "article",
    category: "comparisons",
    title: "Alternative à AgileFingers : le comparatif honnête",
    description: "AgileFingers est gratuit et bien pensé, mais reste un outil d'entraînement libre, sans parcours défini ni certificat. Voici le comparatif complet.",
    readingTime: 5,
    date: "2026-09-23",
    content: `AgileFingers est le bon choix si tu veux un outil d'entraînement entièrement gratuit avec des statistiques détaillées. Fast Forward Typing, si tu veux un cours avec un début, une fin et un certificat. Les deux prennent en charge le français et l'AZERTY.

## En résumé

[AgileFingers](https://agilefingers.com/) est un outil gratuit et minimaliste, bien pensé, avec des statistiques détaillées (MPM, carte de chaleur des erreurs par doigt). Mais c'est un outil de pratique libre, sans parcours structuré ni ligne d'arrivée définie - tu t'entraînes, sans savoir vraiment quand tu es "prêt". Fast Forward Typing propose un cours structuré avec un vrai début et une vraie fin, plus un certificat à la clé. Choisis AgileFingers si tu veux un outil gratuit et open-ended. Choisis Fast Forward Typing si tu veux un parcours avec un objectif clair et une preuve à la fin.

## Structure et parcours

AgileFingers propose trois briques : des leçons sur la position des doigts, des textes d'application, et des jeux. C'est efficace, mais il n'y a pas de progression construite ni d'objectif final - tu avances à ton rythme, sans savoir combien de temps il te reste ni ce que "terminer" veut dire.

Fast Forward Typing est pensé comme un cours avec un début et une fin : une [évaluation](page:placement) initiale montre où tu en es, [31 leçons structurées](page:lessons) t'amènent jusqu'au bout, et l'achèvement du cours est clairement identifiable. Pour qui veut une ligne d'arrivée plutôt qu'une pratique sans fin, c'est la différence principale.

## Suivi et statistiques

AgileFingers est très fort sur ce point : mots par minute, carte de chaleur des erreurs par doigt, histogrammes par touche. C'est un vrai atout pour qui aime analyser ses propres données en détail.

Fast Forward Typing mesure aussi ta vitesse et ta précision, avant et après le cours, mais l'accent est mis sur la progression globale et le résultat final plutôt que sur l'analyse détaillée en cours de route. La comparaison avec TypingClub est dans [Alternative à TypingClub pour adultes](article:typingclub-alternative).

## Prix

| | AgileFingers | Fast Forward Typing |
|---|---|---|
| Version gratuite | Oui, tout l'outil | Les 6 premières leçons |
| Version payante | Aucune | Paiement unique, pas d'abonnement |
| Certificat | Non | [Inclus](page:certificate) |
| Ligne d'arrivée définie | Non | Oui |

## Pour qui est AgileFingers

- Qui veut un outil 100% gratuit, sans jamais avoir à payer
- Qui aime analyser ses propres statistiques de frappe en détail
- Qui préfère un entraînement libre, sans structure imposée

## Pour qui est Fast Forward Typing

- Qui veut un parcours avec un vrai début et une vraie fin
- Qui veut un certificat officiel à la fin, pour le CV ou LinkedIn
- Qui préfère 15 minutes par jour avec un objectif clair plutôt qu'une pratique sans fin

## Questions fréquentes

**AgileFingers est-il vraiment gratuit ?** Oui, l'intégralité de l'outil est gratuite, sans version payante.

**AgileFingers propose-t-il un certificat ?** Non, aucun certificat ou attestation n'est mentionné sur le site.

**AgileFingers fonctionne-t-il en français ?** Oui, l'outil prend en charge plus de 20 langues et dispositions de clavier, dont le français et l'AZERTY.

*Informations sur AgileFingers à jour en septembre 2026. Les fonctionnalités peuvent évoluer. Sans garantie, la source est le site public du fournisseur.*

## Sources

- [AgileFingers](https://agilefingers.com/) - site officiel, fonctionnalités et langues (à jour en septembre 2026).`,
  },
  {
    slug: "typingclub-alternative",
    locale: "fr",
    type: "article",
    category: "comparisons",
    title: "Alternative à TypingClub pour adultes : le comparatif",
    description: "TypingClub est gratuit, mais pensé pour les écoles et les enfants. Le comparatif honnête pour les adultes qui veulent apprendre la frappe à dix doigts.",
    readingTime: 5,
    date: "2026-09-23",
    content: `TypingClub est le bon choix si tu veux un programme scolaire gratuit avec des jeux. Fast Forward Typing, si tu veux un cours pour adultes avec une fin et un certificat. En bref : TypingClub compte 23 millions d'utilisateurs, est gratuit et n'a pas de certificat ; Fast Forward Typing propose 31 leçons, un paiement unique et le certificat inclus.

## En résumé

TypingClub est gratuit, immense ([23 millions d'utilisateurs dans le monde](https://www.typingclub.com/)) et techniquement solide. Mais le programme est conçu pour les écoles et les enfants : étoiles, badges, séries d'histoires avec mascottes, un mode dédié aux plus jeunes. Fast Forward Typing est pensé dès le départ pour les adultes : pas de côté enfantin, mais un cours clairement défini avec une fin et un vrai certificat. Choisis TypingClub si le prix compte plus que le design. Choisis Fast Forward Typing si tu veux être pris au sérieux en tant qu'adulte.

## Design et public visé

TypingClub a été conçu pour un usage scolaire, et ça se voit sur chaque page : collectionner des étoiles, monter de niveau, des séries animées avec personnages, un mode "Jungle Junior" à part pour les plus jeunes. Pour une salle de classe, c'est parfaitement adapté. Pour un adulte qui veut s'entraîner entre deux réunions, ça tombe vite à côté.

Fast Forward Typing n'a ni univers de mascottes ni collection de badges. Les leçons sont construites sobrement, avec le ton d'un produit pour adultes, pas d'un programme scolaire.

## Cours et parcours d'apprentissage

TypingClub propose un très grand nombre de leçons, jeux et vidéos - mais sans fin clairement définie. On s'entraîne, on collectionne des étoiles, on continue. Le moment où on est "prêt" reste flou.

Fast Forward Typing est pensé comme un cours avec un début et une fin : une [évaluation](page:placement) initiale montre où tu en es, [31 leçons structurées](page:lessons) t'amènent jusqu'au bout, et l'achèvement du cours est clairement identifiable. Pour qui veut une ligne d'arrivée plutôt qu'une pratique sans fin, c'est la différence principale.

## Prix

| | TypingClub | Fast Forward Typing |
|---|---|---|
| Version gratuite | Oui, cours complet | Les 6 premières leçons |
| Version payante | 7,50 €/mois ou 29,50 €/an | Paiement unique, pas d'abonnement |
| Ce que l'abonnement payant apporte | Sans pub, plus de jeux, plus de thèmes, "Story Typing" - pas plus de contenu pédagogique | Toutes les leçons restantes jusqu'à la fin du cours |
| Certificat | Non disponible | [Inclus](page:certificate) |

Point important : chez TypingClub, l'abonnement ne débloque pas plus de contenu pédagogique, mais des fonctionnalités de confort. Le cours en lui-même est gratuit chez les deux, la différence se joue sur le certificat et le design. Un second comparatif : [Alternative à AgileFingers](article:agile-fingers-alternative).

## Pour qui est TypingClub

- Qui veut enseigner à une classe entière ou plusieurs enfants à la fois
- Qui veut un maximum de jeux et de gamification
- Qui n'a pas de budget et que la publicité dans le programme ne dérange pas

## Pour qui est Fast Forward Typing

- Les adultes qui veulent s'entraîner sans se sentir de retour à l'école
- Qui veut un achèvement de cours clairement défini, avec un certificat pour le CV ou LinkedIn
- Qui préfère investir 15 minutes par jour avec une fin en vue plutôt qu'une pratique sans fin

## Questions fréquentes

**TypingClub est-il vraiment gratuit ?** Oui, le cours principal est gratuit en permanence, y compris pour les adultes. L'abonnement payant est optionnel et concerne surtout des fonctionnalités de confort.

**TypingClub propose-t-il un certificat ?** Non, TypingClub ne propose actuellement aucune preuve officielle de la vitesse de frappe.

**TypingClub fonctionne-t-il dans d'autres langues ?** Oui, TypingClub propose des séries de leçons complètes en français, en allemand et dans plusieurs autres langues, avec le même design scolaire que la version anglaise.

*Informations sur TypingClub à jour en septembre 2026. Les prix et fonctionnalités peuvent évoluer. Sans garantie, la source est le site public du fournisseur.*

## Sources

- [TypingClub](https://www.typingclub.com/) - site officiel, nombre d'utilisateurs et contenu du cours.
- [edclub Pricing](https://www.edclub.com/pricing) - page de prix officielle du fournisseur (à jour en septembre 2026).`,
  },
  {
    slug: "test-de-frappe",
    locale: "fr",
    type: "article",
    category: "learning",
    title: "Test de frappe : déroulement, bon score et conseils",
    description: "Ce que mesure un test de frappe, combien de mots par minute font un bon score et comment réussir un test de dactylographie pour un emploi. Test gratuit.",
    readingTime: 6,
    date: "2026-09-24",
    content: `Un test de frappe mesure, en 1 à 5 minutes, combien de mots par minute (MPM) tu tapes et avec quelle précision. 40 MPM, soit 200 caractères par minute, c'est un bon rythme au quotidien ; à partir de 60 MPM, tu es rapide. Le [test de dactylographie gratuit](page:speedTest) se fait directement dans ton navigateur, sans inscription.

## C'est quoi, un test de frappe ?

Un test de frappe, aussi appelé test de dactylographie ou test de vitesse de frappe, c'est une courte épreuve de recopie à l'ordinateur. Tu tapes un texte donné pendant que le chrono tourne. À la fin, deux chiffres : vitesse et précision. En ligne, tout se passe dans le navigateur, sur ton propre clavier.

Le truc dingue : le record du monde est de 216 mots par minute. Établi en 1946, sur une machine à écrire électrique IBM.

## Comment se déroule un test de frappe

1. **Choisis la durée.** 1, 2 ou 5 minutes. Un test court montre ta vitesse de pointe, un test long ton rythme de croisière.
2. **Recopie le texte.** Le chrono démarre à la première touche.
3. **Lis ton résultat.** MPM, caractères par minute et précision en pourcentage.

Dans le [test de rapidité clavier de Fast Forward Typing](page:speedTest), tu tapes de vraies phrases en AZERTY, pas des mots au hasard. Les erreurs bloquent la saisie jusqu'à la bonne touche : ton score, c'est ta vitesse sans faute.

## MPM ou caractères par minute ?

Les deux mesurent la même chose. Un mot compte pour 5 caractères, espaces compris. Donc : caractères par minute divisés par 5 = MPM.

| Caractères par minute | MPM | Ce que ça veut dire |
|---|---|---|
| 135 | 27 | Frappe à deux doigts, texte recopié |
| 200 | 40 | Bon rythme au quotidien |
| 260 | 52 | Moyenne de l'étude d'Aalto (168 000 participants) |
| 300 | 60 | Rapide |
| 400 | 80 | Niveau professionnel |
| 600 et plus | 120 et plus | Les plus rapides de l'étude d'Aalto |

## Quel est un bon score ?

En bref : 40 MPM, c'est bien ; 60 MPM, c'est rapide ; 80 MPM, c'est le niveau des pros. Un dactylo à dix doigts entraîné atteint 200 à 400 caractères par minute sur un test de 10 minutes.

La vitesse de frappe moyenne dépend de qui est mesuré. Une étude de 1999 a relevé 32,5 MPM en recopie. L'étude d'Aalto, avec 168 000 volontaires, arrive à 51,6 MPM. L'écran de résultat te situe juste après le test.

La précision compte tout autant. Dans l'étude d'Aalto, à peine plus de 1 % des caractères restaient faux en moyenne. Et les typistes rapides faisaient moins d'erreurs que les lents, pas plus. Vise au moins 95 %.

## Le test de dactylographie pour un emploi

Certains postes demandent un test de frappe : secrétariat, assistanat, gestion administrative, saisie de données. L'offre d'emploi précise le niveau attendu. Pour te repérer : les dactylos professionnels tapent entre 43 et 80 MPM, et certains postes exigent 80 à 95 MPM.

Pour prouver ton score, joins un [certificat de dactylographie](page:certificate) avec MPM, précision et date. Il trouve sa place sur un CV ou un profil LinkedIn.

## 5 conseils pour un meilleur score

1. **Échauffe-toi.** Tape tranquillement deux ou trois minutes avant de te mesurer.
2. **La précision d'abord.** Chaque erreur coûte du temps de correction. Propre et régulier bat précipité.
3. **Regarde l'écran.** L'étude d'Aalto "How We Type" recommande exactement ça : les yeux sur le texte, pas sur les doigts.
4. **Toujours le même doigt.** Quand chaque touche est toujours frappée par le même doigt, la vitesse monte. C'est le cœur de la [méthode des dix doigts](article:dactylographie-definition).
5. **Mesure-toi régulièrement.** Un test de frappe par semaine montre ta progression. D'autres habitudes sont dans [Taper plus vite : 7 techniques](article:taper-plus-vite-techniques).

## Du test de frappe au cours

Un test de frappe te montre où tu en es. C'est l'entraînement qui te rend plus rapide. L'[évaluation](page:placement) mesure chaque touche, et le [cours de dactylographie](page:lessons) travaille précisément ce qui manque. À raison de 15 minutes par jour, les bases sont acquises en 2 à 4 semaines. Le [guide complet de la dactylographie](article:apprendre-dactylographie) détaille chaque étape.

## Questions fréquentes sur le test de frappe

**Combien de temps dure un test de frappe ?** En général 1 à 5 minutes. Pour un résultat stable, choisis 2 ou 5 minutes.

**Le test de dactylographie est-il gratuit ?** Oui. Le [test de frappe en ligne](page:speedTest) est gratuit et sans compte.

**Test de frappe, test de dactylographie, test de vitesse de frappe : quelle différence ?** Aucune. Les trois désignent la même chose : recopier un texte, mesurer vitesse et précision.

**Puis-je faire un test si je ne tape pas encore à dix doigts ?** Oui. Le test mesure ta vitesse actuelle, quel que soit le nombre de doigts que tu utilises.

**Le test fonctionne-t-il en AZERTY ?** Oui. Les textes sont en français, avec accents, sur une disposition [AZERTY](article:qwerty-azerty-qwertz).

## À imprimer

Pour garder la valeur, note-la dans le [suivi de progression](article:suivi-progression-4-semaines) et mesure à nouveau après quatre semaines. Pour savoir s'il faut d'abord travailler la position des doigts ou la vitesse, fais l'[auto-évaluation en huit questions](article:auto-evaluation-ou-en-es-tu).

## Repères

Où se situe ton résultat par rapport aux autres, par percentile, âge et métier : l'article sur la [vitesse de frappe moyenne](article:vitesse-de-frappe-moyenne).

## Sources

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - 5 caractères = 1 mot, étude de 1999 à 32,5 MPM en recopie, frappe à deux doigts à 27 MPM, dactylos professionnels de 43 à 80 MPM, certains postes 80 à 95 MPM.
- [Anschläge pro Minute](https://de.wikipedia.org/wiki/Anschl%C3%A4ge_pro_Minute) (Wikipedia, en allemand) - division par 5 pour obtenir les MPM, dactylos entraînés à 200 à 400 caractères par minute sur 10 minutes.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, taux d'erreurs non corrigées 1,167 %, les plus rapides au-delà de 120 MPM.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016 : regard sur l'écran, attribution fixe doigt-touche.
- [Typing](https://en.wikipedia.org/wiki/Typing) (Wikipedia, en anglais) - le record de 216 MPM, Stella Pajunas-Garnand, 1946.`,
  },
  ...worksheetResources,
  ...benchmarkResources,
];

export function getResourcesByLocale(locale: Locale): ResourceMeta[] {
  return resources.filter((t) => t.locale === locale);
}

export function getResource(slug: string, locale: Locale): ResourceMeta | undefined {
  return resources.find((t) => t.slug === slug && t.locale === locale);
}

export function getRelatedResources(slug: string, locale: Locale, limit = 3): ResourceMeta[] {
  const current = getResource(slug, locale);
  if (!current) return [];
  const localeTips = getResourcesByLocale(locale).filter((t) => t.slug !== slug);
  // Pillar guide first (hub-and-spoke linking), then same category, then the rest.
  const pillar = localeTips.filter((t) => t.featured);
  const sameCategory = localeTips.filter((t) => t.category === current.category && !t.featured);
  const others = localeTips.filter((t) => t.category !== current.category && !t.featured);
  return [...pillar, ...sameCategory, ...others].slice(0, limit);
}

// Articles that are translations of each other. Slugs differ per language
// (SEO-native URLs), so hreflang needs this map to point at the real
// sibling instead of guessing the same slug in every language.
const translationGroups: string[][] = [
  ["zehn-finger-schreiben-lernen", "learn-touch-typing", "apprendre-dactylographie"],
  ["schneller-tippen-handy", "faster-typing-phone", "taper-plus-vite-telephone"],
  ["tastenkombinationen-windows", "keyboard-shortcuts-windows", "raccourcis-clavier-windows"],
  ["tastenkombinationen-mac", "keyboard-shortcuts-mac", "raccourcis-clavier-mac"],
  ["emoji-tastenkombinationen", "emoji-keyboard-shortcuts", "raccourcis-clavier-emoji"],
  ["was-ist-das-10-finger-system", "what-is-touch-typing", "dactylographie-definition"],
  ["schneller-tippen-techniken", "how-to-type-faster", "taper-plus-vite-techniques"],
  ["tipptest", "typing-test", "test-de-frappe"],
  ["typingclub-alternative"],
  ["agile-fingers-alternative"],
  ["finger-tastatur-karte-qwertz", "finger-keyboard-map-qwerty", "carte-doigts-clavier-azerty"],
  ["leeres-layout-qwertz", "blank-layout-qwerty", "clavier-vierge-azerty"],
  ["fortschritts-tracker-4-wochen", "progress-tracker-4-weeks", "suivi-progression-4-semaines"],
  ["nummernblock-karte", "numpad-map", "carte-pave-numerique"],
  ["poster-welcher-finger-tippt-was-qwertz", "poster-which-finger-types-what-qwerty", "affiche-quel-doigt-tape-quoi-azerty"],
  ["selbsttest-wo-stehst-du", "self-test-where-do-you-stand", "auto-evaluation-ou-en-es-tu"],
  ["sonderzeichen-karte-qwertz", "special-characters-qwerty", "caracteres-speciaux-azerty"],
  ["durchschnittliche-tippgeschwindigkeit", "average-typing-speed", "vitesse-de-frappe-moyenne"],
];

// Every existing language edition of an article, keyed by locale. Only
// locales that really have a page are returned, so hreflang never points
// at a 404. The article itself is always included.
export function getTranslations(slug: string, locale: Locale): Partial<Record<Locale, string>> {
  const group = translationGroups.find((g) => g.includes(slug)) ?? [slug];
  const out: Partial<Record<Locale, string>> = {};
  for (const r of resources) {
    if (group.includes(r.slug)) out[r.locale] = r.slug;
  }
  if (!out[locale]) out[locale] = slug;
  return out;
}

export function getAllResourceSlugs(): { slug: string; locale: string; date: string }[] {
  return resources.map((t) => ({ slug: t.slug, locale: t.locale, date: t.date }));
}
