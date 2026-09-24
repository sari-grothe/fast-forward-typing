import type { Locale } from "@/i18n/config";

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
    downloadPdf: "Als PDF speichern",
    downloadHint: "Drucke die Seite als PDF (Ctrl+P / Cmd+P)",
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
    downloadPdf: "Save as PDF",
    downloadHint: "Print this page as PDF (Ctrl+P / Cmd+P)",
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
    downloadPdf: "Sauvegarder en PDF",
    downloadHint: "Imprime cette page en PDF (Ctrl+P / Cmd+P)",
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

Die Tasten F und J haben kleine Erhebungen - du findest die Position blind.

## Schritt für Schritt vorgehen

### Phase 1: Grundreihe (Woche 1)

Übe nur die mittlere Reihe. Das Ziel ist nicht Geschwindigkeit, sondern **Genauigkeit**. Tippe langsam und korrekt. Dein Muskelgedächtnis braucht korrekte Wiederholungen.

### Phase 2: Obere und untere Reihe (Woche 2-3)

Jetzt kommen die restlichen Buchstaben dazu. Eine Reihe nach der anderen. Jeder Finger bewegt sich von seiner Grundposition nach oben oder unten - und kehrt zurück.

### Phase 3: Geschwindigkeit (Woche 4+)

Erst wenn du fehlerfrei tippen kannst, arbeitest du an der Geschwindigkeit. Genauigkeit schlägt Tempo - immer.

## Wie lange dauert es wirklich?

Kurze Antwort: **2-4 Wochen** für die Grundlagen, **2-3 Monate** bis es sich natürlich anfühlt. Bei 15-20 Minuten Übung pro Tag.

Das klingt nach viel. Aber rechne mal (Beispielrechnung): Wenn du jeden Tag 3 Stunden tippst und 40% schneller wirst, sparst du über eine Stunde pro Tag. Für den Rest deines Berufslebens.

## 5 Tipps für Anfänger

1. **Nicht auf die Tastatur schauen.** Das ist die eine Regel, die alles verändert. Klebe die Tasten ab, wenn nötig.
2. **Kurze Sessions, jeden Tag.** 15 Minuten täglich schlagen 2 Stunden am Wochenende. Die Lernforschung nennt das Spacing-Effekt: verteiltes Üben bleibt besser hängen als geballtes.
3. **Genauigkeit vor Geschwindigkeit.** Langsam und richtig baut bessere Muster auf als schnell und fehlerhaft.
4. **Echte Texte üben.** Nicht nur "asdf jklö" - sondern Sätze und Absätze.
5. **Fortschritt messen.** Miss deine Tippgeschwindigkeit einmal pro Woche - so siehst du, wo du stehst.

## Die ersten zwei Wochen sind hart

Mal ehrlich: Am Anfang tippst du *langsamer* als vorher. Das ist normal und dauert etwa eine Woche. Danach beschleunigst du schnell.

Der Trick ist, die ersten 7 Tage durchzuhalten. Danach spürst du den Fortschritt.

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

Auf dem Handy sind 40-50 Wörter pro Minute schon gut. Am Desktop schaffen Touch-Typisten 60-80 WPM - und das lässt sich mit 15 Minuten am Tag lernen.

## Quellen

- [Auf dem iPhone mit der Bildschirmtastatur schreiben](https://support.apple.com/de-de/guide/iphone/iph3c50f96e/ios) - Apple Support: Streichen zum Tippen, Textersetzung, Einhandtastatur.
- [Glide-Typing in Gboard verwenden](https://support.google.com/gboard/answer/6380730) - Google Support.`,
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

Lerne nicht alle auf einmal. Nimm dir **3 Shortcuts pro Woche** vor und nutze sie bewusst. Nach 10 Wochen hast du alle 30 drin.

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

Die Cmd-Taste auf dem Mac entspricht Ctrl auf Windows. Wenn du beide Systeme nutzt, merke dir die Funktion - nicht die Taste.

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

Das Emoji-Menü merkt sich deine zuletzt genutzten Symbole. Nutze für die ersten Tage bewusst das Tastenkürzel statt Copy-Paste - nach einer Woche sitzt es im Muskelgedächtnis, genau wie jedes andere Tastenkürzel.

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

Der Unterschied zum "normalen" Tippen: Die meisten Menschen tippen mit vier bis sechs Fingern, suchen dabei ständig mit den Augen die nächste Taste und arbeiten sich Buchstabe für Buchstabe vor. Das funktioniert, hat aber ein hartes Tempolimit.

## Woher kommt der Name

Die Bezeichnung stammt aus der Zeit der Schreibmaschinen, als das System erstmals systematisch unterrichtet wurde - jede der zehn Fingerspitzen bekam ihren eigenen Platz auf der Tastatur, angelehnt an die Grundstellung A-S-D-F und J-K-L-Ö. Diese Grundstellung ist bis heute unverändert, auch auf modernen Computertastaturen.

## Wie unterscheidet es sich von Tastschreiben allgemein

"Tastschreiben" ist der umfassendere, ältere Begriff - er meint jedes blinde, systematische Tippen ohne Blick auf die Tasten. Das 10-Finger-System ist die konkrete, heute gebräuchlichste Methode dafür. In der Praxis werden beide Begriffe synonym verwendet.

## Warum es sich lohnt

Zwei-Finger-Tipper kommen beim Abschreiben auf rund 27 Wörter pro Minute, Zehn-Finger-Tipper auf 40 bis 60. In der größten Tippstudie der Welt (168.000 Teilnehmer) nutzten die schnellen Tipper im Schnitt 8,4 Finger, die langsamen 5,3. Entscheidend ist dabei weniger die Zahl der Finger als die feste Zuordnung: Wenn jede Taste immer vom selben Finger getroffen wird, tippst du schneller und genauer. Der Blick bleibt am Bildschirm statt an der Tastatur, was besonders beim Abschreiben oder gleichzeitigen Denken und Tippen einen echten Unterschied macht.

## Wie lange dauert es, es zu lernen

Die Grundlagen sitzen nach 2-4 Wochen regelmäßigem Üben, ein natürliches Tempo stellt sich nach 2-3 Monaten ein - vorausgesetzt, du übst 15-20 Minuten am Tag. Es ist keine Begabung, sondern eine Frage von Wiederholung.

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

Copy, Paste, Wort löschen, zum Zeilenanfang springen - wer diese Kombinationen blind beherrscht, spart sich unzählige einzelne Tastenanschläge und Mausklicks im Alltag.

## 7. Fortschritt messen

Was du nicht misst, verbesserst du nicht bewusst. Eine kurze wöchentliche Messung deiner Tippgeschwindigkeit zeigt dir schwarz auf weiß, ob die anderen sechs Punkte wirken - und motiviert, dranzubleiben.

## Was am meisten bringt

Von allen sieben Punkten hat die Kombination aus "nicht auf die Tastatur schauen" und "täglich kurz üben" den größten Effekt. Beides zusammen ist im Kern das 10-Finger-System - alle anderen Techniken bauen darauf auf.

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

Fast Forward Typing ist als Kurs mit Anfang und Ende gebaut: eine Einstufung zeigt den Startpunkt, 31 Lektionen führen strukturiert zum Ziel, ein Abschluss ist klar erkennbar. Wer eine Ziellinie will, statt endlos zu üben, findet die hier.

## Preise

| | TypingClub | Fast Forward Typing |
|---|---|---|
| Kostenlose Version | Ja, voller Kernkurs | Erste 6 Lektionen |
| Bezahlversion | 7,50 €/Monat oder 29,50 €/Jahr | Einmalzahlung, kein Abo |
| Was das Bezahl-Upgrade bringt | Werbefrei, mehr Spiele, mehr Themes, "Story Typing" - nicht mehr Lerninhalt | Alle restlichen Lektionen bis zum Kursabschluss |
| Zertifikat | Nicht vorhanden | Inklusive |

Wichtig zu verstehen: Bei TypingClub kaufst du dir mit dem Abo keinen zusätzlichen Lerninhalt frei, sondern Komfort-Features. Der eigentliche Kurs ist bei beiden Anbietern kostenlos zugänglich - der Unterschied liegt im Zertifikat und im Design.

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

Fast Forward Typing ist als Kurs mit Anfang und Ende gebaut: eine Einstufung zeigt den Startpunkt, 31 Lektionen führen strukturiert zum Ziel, ein Abschluss ist klar erkennbar. Wer eine Ziellinie will statt endlosem Üben, findet die hier.

## Auswertung und Statistiken

Hier ist AgileFingers stark: Wörter pro Minute, Fehler-Heatmap pro Finger, Histogramme pro Taste. Ein echter Vorteil für alle, die ihre eigenen Daten gerne im Detail analysieren.

Fast Forward Typing misst ebenfalls Geschwindigkeit und Genauigkeit, vor und nach dem Kurs, der Fokus liegt aber auf dem Gesamtfortschritt und dem Endergebnis statt auf der detaillierten Analyse unterwegs.

## Preise

| | AgileFingers | Fast Forward Typing |
|---|---|---|
| Kostenlose Version | Ja, das komplette Tool | Erste 6 Lektionen |
| Bezahlversion | Keine | Einmalzahlung, kein Abo |
| Zertifikat | Nicht vorhanden | Inklusive |
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

The F and J keys have small bumps - you can find the position without looking.

## Step by step

### Phase 1: Home row (Week 1)

Practice only the middle row. The goal isn't speed, it's **accuracy**. Type slowly and correctly. Your muscle memory needs correct repetitions to build.

### Phase 2: Top and bottom rows (Week 2-3)

Now add the remaining keys. One row at a time. Each finger moves from its home position up or down - and returns.

### Phase 3: Speed (Week 4+)

Only once you can type without errors should you work on speed. Accuracy beats speed - always.

## How long does it actually take?

Short answer: **2-4 weeks** for the basics, **2-3 months** until it feels natural. At 15-20 minutes of practice per day.

Sounds like a lot. But do the math (a worked example): if you type 3 hours a day and get 40% faster, you save over an hour per day. For the rest of your career.

## 5 tips for beginners

1. **Don't look at the keyboard.** This is the one rule that changes everything. Cover the keys with tape if you need to.
2. **Short sessions, every day.** 15 minutes daily beats 2 hours on the weekend. Learning research calls this the spacing effect: spread-out practice sticks better than one long block.
3. **Accuracy before speed.** Slow and correct builds better patterns than fast and sloppy.
4. **Practice with real text.** Not just "asdf jkl;" but actual sentences and paragraphs.
5. **Measure your progress.** One typing test per week shows you where you stand.

## The first two weeks are tough

Let's be honest: at first, you'll type *slower* than before. That's normal and lasts about a week. After that, you accelerate quickly.

The trick is to push through the first 7 days. After that, you'll feel the progress.

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

On your phone, 40-50 words per minute is solid. On a desktop, touch typists hit 60-80 WPM - and you can learn that with 15 minutes a day.

## Sources

- [Type with the onscreen keyboard on iPhone](https://support.apple.com/guide/iphone/type-with-the-onscreen-keyboard-iph3c50f96e/ios) - Apple Support: slide to type, text replacement, one-handed keyboard.
- [Use glide typing in Gboard](https://support.google.com/gboard/answer/6380730) - Google Support.`,
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

Don't learn them all at once. Pick **3 shortcuts per week** and use them deliberately. After 10 weeks, you'll know all 30.

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

Cmd on Mac is Ctrl on Windows. If you use both systems, memorize the function - not the key.

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

The emoji panel remembers your recently used symbols. Force yourself to use the shortcut instead of copy-paste for a week - after that it's muscle memory, same as any other keyboard shortcut.

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

The difference from "regular" typing: most people type with four to six fingers, constantly glancing down to find the next key, working letter by letter. It works, but it has a hard speed ceiling.

## Where the name comes from

The technique dates back to the typewriter era, when it was first taught systematically - each fingertip got its own zone on the keyboard, built around the home-row position (ASDF and JKL;). That home position hasn't changed, even on modern computer keyboards.

## Touch typing vs. the 10-finger system

These two terms are used interchangeably in practice. "Touch typing" is the general skill - typing by feel, without looking. The "10-finger system" (or "touch-type method") is the specific technique most commonly taught to achieve it.

## Why it's worth learning

Two-finger typists reach about 27 words per minute when copying text, touch typists 40 to 60. In the largest typing study ever run (168,000 participants), fast typists used 8.4 fingers on average, slow typists 5.3. What matters most is not the finger count but the fixed mapping: when every key is always hit by the same finger, you type faster and more accurately. Your eyes stay on the screen instead of the keyboard, which matters most when you're copying text or thinking and typing at the same time.

## How long it takes

The basics click after 2-4 weeks of regular practice, and it starts feeling natural after 2-3 months - assuming 15-20 minutes of practice a day. It's not a talent, it's repetition.

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

Copy, paste, delete a word, jump to line start - knowing these by heart saves you countless individual keystrokes and mouse clicks over the course of a day.

## 7. Measure your progress

What you don't measure, you don't consciously improve. A quick weekly typing speed check shows you in black and white whether the other six habits are working - and keeps you motivated to stick with it.

## What matters most

Of all seven, "stop looking at the keyboard" combined with "short daily practice" makes the biggest difference. Together, that's essentially the 10-finger system - every other technique here builds on top of it.

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

Fast Forward Typing is built as a course with a beginning and an end: a placement test shows your starting point, 31 lessons lead you through in a structured way, and completion is clearly visible. If you want a finish line instead of endless practice, this is it.

## Pricing

| | TypingClub | Fast Forward Typing |
|---|---|---|
| Free version | Yes, full core course | First 6 lessons |
| Paid version | 7.50€/month or 29.50€/year | One-time payment, no subscription |
| What the paid upgrade gets you | Ad-free, more games, more themes, "Story Typing" - not more learning content | All remaining lessons through course completion |
| Certificate | Not available | Included |

Important to understand: with TypingClub, the subscription doesn't unlock more learning content, it unlocks comfort features. The actual course is free with both providers - the difference is the certificate and the design.

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

Fast Forward Typing is built as a course with a beginning and an end: a placement test shows where you stand, 31 structured lessons take you all the way through, and course completion is clearly visible. For anyone who wants a finish line instead of open-ended practice, that's the main difference.

## Tracking and stats

This is where AgileFingers is strong: words per minute, a per-finger error heatmap, per-key histograms. A real advantage for anyone who enjoys analyzing their own data in detail.

Fast Forward Typing also measures your speed and accuracy, before and after the course, but the focus is on overall progress and the final result rather than detailed analysis along the way.

## Pricing

| | AgileFingers | Fast Forward Typing |
|---|---|---|
| Free version | Yes, the entire tool | First 6 lessons |
| Paid version | None | One-time payment, no subscription |
| Certificate | Not available | Included |
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

Tout commence avec huit touches. Place tes doigts sur la rangée du milieu de ton clavier AZERTY :

- **Main gauche :** Q - S - D - F (auriculaire à index)
- **Main droite :** J - K - L - M (index à auriculaire)
- **Pouces :** Barre d'espace

Les touches F et J ont de petites bosses - tu trouves la position sans regarder.

## Étape par étape

### Phase 1 : Rangée de base (Semaine 1)

Entraîne-toi uniquement sur la rangée du milieu. L'objectif n'est pas la vitesse, c'est la **précision**. Tape lentement et correctement. Ta mémoire musculaire a besoin de répétitions correctes.

### Phase 2 : Rangées du haut et du bas (Semaine 2-3)

Maintenant, ajoute les autres lettres. Une rangée à la fois. Chaque doigt se déplace depuis sa position de base vers le haut ou le bas - et revient.

### Phase 3 : Vitesse (Semaine 4+)

Seulement quand tu tapes sans erreurs, tu travailles la vitesse. La précision bat la vitesse - toujours.

## Combien de temps ça prend vraiment ?

Réponse courte : **2 à 4 semaines** pour les bases, **2 à 3 mois** pour que ça devienne naturel. À 15-20 minutes d'entraînement par jour.

Ça semble beaucoup. Mais fais le calcul (exemple chiffré) : si tu tapes 3 heures par jour et que tu deviens 40% plus rapide, tu économises plus d'une heure par jour. Pour le reste de ta carrière.

## 5 conseils pour débuter

1. **Ne regarde pas le clavier.** C'est la seule règle qui change tout. Colle du ruban adhésif sur les touches si nécessaire.
2. **Sessions courtes, tous les jours.** 15 minutes par jour battent 2 heures le week-end. La recherche appelle ça l'effet d'espacement : un entraînement réparti tient mieux qu'un seul gros bloc.
3. **Précision avant vitesse.** Lent et correct construit de meilleurs automatismes que rapide et approximatif.
4. **Entraîne-toi avec du vrai texte.** Pas seulement "qsdf jklm" mais des phrases et des paragraphes.
5. **Mesure tes progrès.** Un test de dactylographie par semaine te montre où tu en es.

## Les deux premières semaines sont difficiles

Soyons honnêtes : au début, tu tapes *plus lentement* qu'avant. C'est normal et ça dure environ une semaine. Après, tu accélères vite.

Le truc, c'est de tenir les 7 premiers jours. Après ça, tu sens le progrès.

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

Sur ton téléphone, 40-50 mots par minute c'est déjà bien. Sur un ordinateur, les dactylos atteignent 60-80 MPM - et ça s'apprend à raison de 15 minutes par jour.

## Sources

- [Saisir du texte avec le clavier à l'écran sur l'iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3c50f96e/ios) - Assistance Apple : glisser pour taper, remplacement de texte, clavier à une main.
- [Utiliser la saisie gestuelle dans Gboard](https://support.google.com/gboard/answer/6380730) - Aide Google.`,
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

N'apprends pas tout d'un coup. Choisis **3 raccourcis par semaine** et utilise-les consciemment. Au bout de 10 semaines, tu les maîtrises tous.

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

Cmd sur Mac correspond à Ctrl sur Windows. Si tu utilises les deux systèmes, retiens la fonction - pas la touche.

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

Le nom vient tout simplement des 6 premières touches de la rangée du haut.

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

Aucune n'est objectivement meilleure. Utilise celle de ton pays - c'est celle que tu trouveras partout. Le plus important n'est pas la disposition, c'est d'apprendre à taper avec tes dix doigts.

## Et les alternatives ?

Des dispositions comme **Dvorak** et **Colemak** promettent plus d'efficacité en plaçant les lettres les plus fréquentes sur la rangée du milieu. En théorie, c'est mieux. En pratique, très peu de gens les utilisent - et tous les claviers que tu rencontreras utilisent QWERTY/AZERTY/QWERTZ.

Bref, apprends la disposition de ton clavier. Et apprends à la maîtriser.

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

Le sélecteur d'emoji retient les symboles récemment utilisés. Force-toi à utiliser le raccourci clavier plutôt que le copier-coller pendant une semaine - après ça, c'est de la mémoire musculaire, comme n'importe quel autre raccourci clavier.

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

La différence avec la façon de taper "classique" : la plupart des gens tapent avec deux à quatre doigts, cherchent chaque touche des yeux, et avancent lettre par lettre. Ça fonctionne, mais ça a une limite de vitesse difficile à dépasser.

## D'où vient le mot

Le terme vient de l'époque des machines à écrire, quand la technique a commencé à être enseignée de façon systématique - chaque doigt recevait sa propre zone sur le clavier, autour de la position de base (QSDF et JKLM sur AZERTY). Cette position de base n'a pas changé, même sur les claviers d'ordinateur modernes.

## La méthode des dix doigts, concrètement

Chaque main couvre la moitié du clavier. Les index reviennent toujours vers les touches F et J (ou leur équivalent sur ton clavier) entre deux frappes - ce sont tes points de repère. Avec de la pratique, tes doigts retrouvent leur position sans que tu aies besoin d'y penser.

## Pourquoi apprendre à taper avec tes dix doigts

Qui tape à deux doigts recopie un texte à environ 27 mots par minute, un dactylo à dix doigts tape entre 40 et 60. Dans la plus grande étude jamais menée sur la frappe (168 000 participants), les typistes rapides utilisaient 8,4 doigts en moyenne, les lents 5,3. Ce qui compte le plus, ce n'est pas le nombre de doigts mais l'attribution fixe : quand chaque touche est toujours frappée par le même doigt, tu tapes plus vite et avec moins d'erreurs. Le regard reste sur l'écran plutôt que sur le clavier, ce qui change tout quand tu recopies un texte ou que tu réfléchis en tapant.

## Combien de temps ça prend

Les bases sont acquises en 2 à 4 semaines de pratique régulière, et le geste devient naturel après 2 à 3 mois - à raison de 15 à 20 minutes d'entraînement par jour. Ce n'est pas un talent, c'est de la répétition.

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

Copier, coller, supprimer un mot, revenir au début de la ligne - qui maîtrise ces raccourcis par cœur s'économise d'innombrables frappes et clics de souris au quotidien.

## 7. Mesure ta progression

Ce qu'on ne mesure pas, on ne l'améliore pas consciemment. Un test de vitesse de frappe rapide chaque semaine te montre noir sur blanc si les six autres habitudes fonctionnent - et te garde motivé.

## Ce qui compte le plus

Sur ces sept points, "arrêter de regarder le clavier" combiné à "s'entraîner un peu chaque jour" fait la plus grande différence. Ensemble, c'est essentiellement la méthode des dix doigts - toutes les autres techniques s'appuient dessus.

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

Fast Forward Typing est pensé comme un cours avec un début et une fin : une évaluation initiale montre où tu en es, 31 leçons structurées t'amènent jusqu'au bout, et l'achèvement du cours est clairement identifiable. Pour qui veut une ligne d'arrivée plutôt qu'une pratique sans fin, c'est la différence principale.

## Suivi et statistiques

AgileFingers est très fort sur ce point : mots par minute, carte de chaleur des erreurs par doigt, histogrammes par touche. C'est un vrai atout pour qui aime analyser ses propres données en détail.

Fast Forward Typing mesure aussi ta vitesse et ta précision, avant et après le cours, mais l'accent est mis sur la progression globale et le résultat final plutôt que sur l'analyse détaillée en cours de route.

## Prix

| | AgileFingers | Fast Forward Typing |
|---|---|---|
| Version gratuite | Oui, tout l'outil | Les 6 premières leçons |
| Version payante | Aucune | Paiement unique, pas d'abonnement |
| Certificat | Non | Inclus |
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

Fast Forward Typing est pensé comme un cours avec un début et une fin : une évaluation initiale montre où tu en es, 31 leçons structurées t'amènent jusqu'au bout, et l'achèvement du cours est clairement identifiable. Pour qui veut une ligne d'arrivée plutôt qu'une pratique sans fin, c'est la différence principale.

## Prix

| | TypingClub | Fast Forward Typing |
|---|---|---|
| Version gratuite | Oui, cours complet | Les 6 premières leçons |
| Version payante | 7,50 €/mois ou 29,50 €/an | Paiement unique, pas d'abonnement |
| Ce que l'abonnement payant apporte | Sans pub, plus de jeux, plus de thèmes, "Story Typing" - pas plus de contenu pédagogique | Toutes les leçons restantes jusqu'à la fin du cours |
| Certificat | Non disponible | Inclus |

Point important : chez TypingClub, l'abonnement ne débloque pas plus de contenu pédagogique, mais des fonctionnalités de confort. Le cours en lui-même est gratuit chez les deux, la différence se joue sur le certificat et le design.

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
  const sameCategory = localeTips.filter((t) => t.category === current.category);
  const others = localeTips.filter((t) => t.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
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
  ["typingclub-alternative"],
  ["agile-fingers-alternative"],
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
