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
  de: { all: "Alle", learning: "Lernen", shortcuts: "Shortcuts", productivity: "Produktivität", comparisons: "Vergleiche" },
  en: { all: "All", learning: "Learning", shortcuts: "Shortcuts", productivity: "Productivity", comparisons: "Comparisons" },
  fr: { all: "Tous", learning: "Apprentissage", shortcuts: "Raccourcis", productivity: "Productivité", comparisons: "Comparatifs" },
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
  teamCtaTitle: string;
  teamCtaDesc: string;
  teamCtaLink: string;
  searchPlaceholder: string;
  searchNoResults: string;
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
    teamCtaTitle: "Für dein Team?",
    teamCtaDesc: "Team-Training mit Vorher-Nachher-Messung, für Unternehmen.",
    teamCtaLink: "Team-Training anfragen",
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
    teamCtaTitle: "For your team?",
    teamCtaDesc: "Team training with before/after measurement, for companies.",
    teamCtaLink: "Request team training",
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
    teamCtaTitle: "Pour ton équipe ?",
    teamCtaDesc: "Formation d'équipe avec mesure avant/après, pour les entreprises.",
    teamCtaLink: "Demander une formation d'équipe",
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
    content: `## Warum 10 Finger?

Die meisten Menschen tippen mit 4-6 Fingern. Das funktioniert - aber es hat ein hartes Limit. **Touch-Typisten sind 40-60% schneller** als Zwei-Finger-Tipper. Nicht weil sie hektischer tippen, sondern weil jeder Finger seinen festen Bereich hat.

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

Das klingt nach viel. Aber rechne mal: Wenn du jeden Tag 3 Stunden tippst und 40% schneller wirst, sparst du über eine Stunde pro Tag. Für den Rest deines Berufslebens.

## 5 Tipps für Anfänger

1. **Nicht auf die Tastatur schauen.** Das ist die eine Regel, die alles verändert. Klebe die Tasten ab, wenn nötig.
2. **Kurze Sessions, jeden Tag.** 15 Minuten täglich schlagen 2 Stunden am Wochenende.
3. **Genauigkeit vor Geschwindigkeit.** Langsam und richtig baut bessere Muster auf als schnell und fehlerhaft.
4. **Echte Texte üben.** Nicht nur "asdf jklö" - sondern Sätze und Absätze.
5. **Fortschritt messen.** Miss deine Tippgeschwindigkeit einmal pro Woche - so siehst du, wo du stehst.

## Die ersten zwei Wochen sind hart

Mal ehrlich: Am Anfang tippst du *langsamer* als vorher. Das ist normal und dauert etwa eine Woche. Danach beschleunigst du schnell.

Der Trick ist, die ersten 7 Tage durchzuhalten. Danach spürst du den Fortschritt.`,
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
    content: `## Das Handy kann schneller

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

Auf dem Handy sind 40-50 Wörter pro Minute schon gut. Am Desktop schaffen Touch-Typisten 60-80 WPM - und das lässt sich mit 15 Minuten am Tag lernen.`,
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
    content: `## Allgemein

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

Lerne nicht alle auf einmal. Nimm dir **3 Shortcuts pro Woche** vor und nutze sie bewusst. Nach 10 Wochen hast du alle 30 drin.`,
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
    content: `## Allgemein

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

Die Cmd-Taste auf dem Mac entspricht Ctrl auf Windows. Wenn du beide Systeme nutzt, merke dir die Funktion - nicht die Taste.`,
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
    content: `## Windows

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

Das Emoji-Menü merkt sich deine zuletzt genutzten Symbole. Nutze für die ersten Tage bewusst das Tastenkürzel statt Copy-Paste - nach einer Woche sitzt es im Muskelgedächtnis, genau wie jedes andere Tastenkürzel.`,
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
    content: `## Kurz erklärt

Das 10-Finger-System (auch Zehnfingersystem oder Tastschreiben genannt) ist eine Tipptechnik, bei der jedem der zehn Finger ein fester Bereich der Tastatur zugeordnet ist. Du tippst, ohne auf die Tasten zu schauen - dein Muskelgedächtnis kennt die Position jeder Taste.

Der Unterschied zum "normalen" Tippen: Die meisten Menschen tippen mit vier bis sechs Fingern, suchen dabei ständig mit den Augen die nächste Taste und arbeiten sich Buchstabe für Buchstabe vor. Das funktioniert, hat aber ein hartes Tempolimit.

## Woher kommt der Name

Die Bezeichnung stammt aus der Zeit der Schreibmaschinen, als das System erstmals systematisch unterrichtet wurde - jede der zehn Fingerspitzen bekam ihren eigenen Platz auf der Tastatur, angelehnt an die Grundstellung A-S-D-F und J-K-L-Ö. Diese Grundstellung ist bis heute unverändert, auch auf modernen Computertastaturen.

## Wie unterscheidet es sich von Tastschreiben allgemein

"Tastschreiben" ist der umfassendere, ältere Begriff - er meint jedes blinde, systematische Tippen ohne Blick auf die Tasten. Das 10-Finger-System ist die konkrete, heute gebräuchlichste Methode dafür. In der Praxis werden beide Begriffe synonym verwendet.

## Warum es sich lohnt

Menschen, die mit dem 10-Finger-System tippen, sind im Schnitt 40-60% schneller als Selbstlerner, die nur mit ein paar Fingern arbeiten - und tippen dabei genauer, weil jeder Finger nur für eine kleine, feste Zahl an Tasten zuständig ist. Der Blick bleibt am Bildschirm statt an der Tastatur, was besonders beim Abschreiben oder gleichzeitigen Denken und Tippen einen echten Unterschied macht.

## Wie lange dauert es, es zu lernen

Die Grundlagen sitzen nach 2-4 Wochen regelmäßigem Üben, ein natürliches Tempo stellt sich nach 2-3 Monaten ein - vorausgesetzt, du übst 15-20 Minuten am Tag. Es ist keine Begabung, sondern eine Frage von Wiederholung.`,
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
    content: `## 1. Die Rücktaste seltener nutzen

Jeder Tippfehler, den du sofort korrigierst, unterbricht deinen Rhythmus doppelt: einmal beim Fehler, einmal bei der Korrektur. Schreibe stattdessen erst den ganzen Satz zu Ende und korrigiere danach in einem Rutsch. Klingt riskant, ist aber messbar schneller.

## 2. Nicht auf die Tastatur schauen

Der größte Zeitfresser ist der Blickwechsel zwischen Bildschirm und Tastatur. Jeder Wechsel kostet einen Bruchteil einer Sekunde - bei tausenden Tastenanschlägen am Tag summiert sich das erheblich. Wer blind tippt, verliert diese Zeit nicht.

## 3. Kurze Texte, aber täglich üben

15 Minuten jeden Tag bringen mehr als zwei Stunden am Wochenende. Dein Muskelgedächtnis braucht regelmäßige, kurze Wiederholungen - lange Pausen zwischen den Sessions lassen den Fortschritt wieder abfallen.

## 4. Echte Texte statt Zufallswörter

Übe mit Sätzen, die du auch wirklich tippst - E-Mails, Nachrichten, Prompts an KI-Tools. Zufällige Buchstabenfolgen trainieren zwar die Finger, aber nicht das Sprachgefühl, das echtes Tippen schneller macht.

## 5. Genauigkeit vor Tempo

Klingt paradox, stimmt aber: Wer zuerst auf Fehlerfreiheit trainiert, wird am Ende schneller als jemand, der von Anfang an aufs Tempo drückt. Fehlerhafte Bewegungsmuster, die sich einschleifen, sind später schwer wieder loszuwerden.

## 6. Tastenkombinationen lernen

Copy, Paste, Wort löschen, zum Zeilenanfang springen - wer diese Kombinationen blind beherrscht, spart sich unzählige einzelne Tastenanschläge und Mausklicks im Alltag.

## 7. Fortschritt messen

Was du nicht misst, verbesserst du nicht bewusst. Eine kurze wöchentliche Messung deiner Tippgeschwindigkeit zeigt dir schwarz auf weiß, ob die anderen sechs Punkte wirken - und motiviert, dranzubleiben.

## Was am meisten bringt

Von allen sieben Punkten hat die Kombination aus "nicht auf die Tastatur schauen" und "täglich kurz üben" den größten Effekt. Beides zusammen ist im Kern das 10-Finger-System - alle anderen Techniken bauen darauf auf.`,
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
    content: `## Kurz zusammengefasst

TypingClub ist kostenlos, riesig (23 Millionen Nutzer weltweit) und funktioniert technisch einwandfrei. Aber das Programm ist für Schulen und Kinder entwickelt - Sterne, Abzeichen, Maskottchen-Geschichten, ein eigener Modus für Grundschulkinder. Fast Forward Typing ist von Grund auf für Erwachsene gebaut: kein Kinderkram, dafür ein klar definierter Kurs mit Ende und echtem Zertifikat. Wähle TypingClub, wenn dir Kosten wichtiger sind als Design. Wähle Fast Forward Typing, wenn du als Erwachsener ernst genommen werden willst.

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

**Unterstützt TypingClub Deutsch?** Ja, es gibt einen deutschen Sprachkurs, allerdings mit demselben schulischen Design wie die englische Version.`,
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
    content: `## Why touch typing?

Most people type with 4-6 fingers. It works, but there's a hard ceiling. **Touch typists are 40-60% faster** than hunt-and-peck typists. Not because they're more frantic, but because every finger has its own zone.

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

Sounds like a lot. But do the math: if you type 3 hours a day and get 40% faster, you save over an hour per day. For the rest of your career.

## 5 tips for beginners

1. **Don't look at the keyboard.** This is the one rule that changes everything. Cover the keys with tape if you need to.
2. **Short sessions, every day.** 15 minutes daily beats 2 hours on the weekend.
3. **Accuracy before speed.** Slow and correct builds better patterns than fast and sloppy.
4. **Practice with real text.** Not just "asdf jkl;" but actual sentences and paragraphs.
5. **Measure your progress.** One typing test per week shows you where you stand.

## The first two weeks are tough

Let's be honest: at first, you'll type *slower* than before. That's normal and lasts about a week. After that, you accelerate quickly.

The trick is to push through the first 7 days. After that, you'll feel the progress.`,
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
    content: `## Your phone can be faster

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

On your phone, 40-50 words per minute is solid. On a desktop, touch typists hit 60-80 WPM - and you can learn that with 15 minutes a day.`,
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
    content: `## General

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

Don't learn them all at once. Pick **3 shortcuts per week** and use them deliberately. After 10 weeks, you'll know all 30.`,
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
    content: `## General

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

Cmd on Mac is Ctrl on Windows. If you use both systems, memorize the function - not the key.`,
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
    content: `## Windows

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

The emoji panel remembers your recently used symbols. Force yourself to use the shortcut instead of copy-paste for a week - after that it's muscle memory, same as any other keyboard shortcut.`,
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
    content: `## Short answer

Touch typing is a typing technique where each of your ten fingers is assigned a fixed set of keys on the keyboard. You type without looking down - your muscle memory knows where every key is.

The difference from "regular" typing: most people type with four to six fingers, constantly glancing down to find the next key, working letter by letter. It works, but it has a hard speed ceiling.

## Where the name comes from

The technique dates back to the typewriter era, when it was first taught systematically - each fingertip got its own zone on the keyboard, built around the home-row position (ASDF and JKL;). That home position hasn't changed, even on modern computer keyboards.

## Touch typing vs. the 10-finger system

These two terms are used interchangeably in practice. "Touch typing" is the general skill - typing by feel, without looking. The "10-finger system" (or "touch-type method") is the specific technique most commonly taught to achieve it.

## Why it's worth learning

People who touch type are on average 40-60% faster than self-taught typists using only a few fingers - and more accurate, since each finger is responsible for only a small, fixed set of keys. Your eyes stay on the screen instead of the keyboard, which matters most when you're copying text or thinking and typing at the same time.

## How long it takes

The basics click after 2-4 weeks of regular practice, and it starts feeling natural after 2-3 months - assuming 15-20 minutes of practice a day. It's not a talent, it's repetition.`,
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
    content: `## 1. Use backspace less

Every typo you fix immediately breaks your rhythm twice: once for the mistake, once for the correction. Finish the sentence first, then fix errors in one pass. It feels risky. It's measurably faster.

## 2. Stop looking at the keyboard

The biggest time sink is the glance back and forth between screen and keyboard. Each glance costs a fraction of a second - across thousands of keystrokes a day, that adds up fast. Touch typists never pay that cost.

## 3. Short sessions, every day

15 minutes daily beats two hours on a Saturday. Muscle memory needs frequent, short repetition - long gaps between sessions let progress slip backward.

## 4. Practice on real text

Train on sentences you'd actually type - emails, messages, AI prompts. Random letter strings train your fingers but not the language sense that makes real typing fast.

## 5. Accuracy before speed

Counterintuitive, but true: training for accuracy first makes you faster in the end than chasing speed from day one. Sloppy movement patterns that get baked in are hard to unlearn later.

## 6. Learn keyboard shortcuts

Copy, paste, delete a word, jump to line start - knowing these by heart saves you countless individual keystrokes and mouse clicks over the course of a day.

## 7. Measure your progress

What you don't measure, you don't consciously improve. A quick weekly typing speed check shows you in black and white whether the other six habits are working - and keeps you motivated to stick with it.

## What matters most

Of all seven, "stop looking at the keyboard" combined with "short daily practice" makes the biggest difference. Together, that's essentially the 10-finger system - every other technique here builds on top of it.`,
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
    content: `## Pourquoi la frappe à dix doigts ?

La plupart des gens tapent avec 4 à 6 doigts. Ça fonctionne, mais il y a un plafond. **Les dactylos sont 40 à 60% plus rapides** que ceux qui tapent à deux doigts. Pas parce qu'ils sont plus agités, mais parce que chaque doigt a sa propre zone.

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

Ça semble beaucoup. Mais fais le calcul : si tu tapes 3 heures par jour et que tu deviens 40% plus rapide, tu économises plus d'une heure par jour. Pour le reste de ta carrière.

## 5 conseils pour débuter

1. **Ne regarde pas le clavier.** C'est la seule règle qui change tout. Colle du ruban adhésif sur les touches si nécessaire.
2. **Sessions courtes, tous les jours.** 15 minutes par jour battent 2 heures le week-end.
3. **Précision avant vitesse.** Lent et correct construit de meilleurs automatismes que rapide et approximatif.
4. **Entraîne-toi avec du vrai texte.** Pas seulement "qsdf jklm" mais des phrases et des paragraphes.
5. **Mesure tes progrès.** Un test de dactylographie par semaine te montre où tu en es.

## Les deux premières semaines sont difficiles

Soyons honnêtes : au début, tu tapes *plus lentement* qu'avant. C'est normal et ça dure environ une semaine. Après, tu accélères vite.

Le truc, c'est de tenir les 7 premiers jours. Après ça, tu sens le progrès.`,
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
    content: `## Ton téléphone peut faire mieux

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

Sur ton téléphone, 40-50 mots par minute c'est déjà bien. Sur un ordinateur, les dactylos atteignent 60-80 MPM - et ça s'apprend à raison de 15 minutes par jour.`,
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
    content: `## Général

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

N'apprends pas tout d'un coup. Choisis **3 raccourcis par semaine** et utilise-les consciemment. Au bout de 10 semaines, tu les maîtrises tous.`,
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
    content: `## Général

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

Cmd sur Mac correspond à Ctrl sur Windows. Si tu utilises les deux systèmes, retiens la fonction - pas la touche.`,
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
    content: `## Trois dispositions, une histoire

Tu as sûrement remarqué : les claviers ne sont pas les mêmes partout. En France, c'est AZERTY. Aux États-Unis et au Royaume-Uni, c'est QWERTY. En Allemagne et en Suisse, c'est QWERTZ.

Le nom vient tout simplement des 6 premières touches de la rangée du haut.

## D'où vient le QWERTY ?

Le QWERTY a été inventé en 1873 par Christopher Latham Sholes pour la machine à écrire Remington. La légende dit qu'il a placé les lettres fréquemment combinées loin l'une de l'autre pour éviter que les tiges de la machine ne se bloquent.

Fun fact : cette contrainte mécanique n'existe plus depuis plus de 100 ans, mais on utilise toujours la même disposition.

## Pourquoi la France utilise l'AZERTY

La France a adopté l'AZERTY au début du XXe siècle, adapté du QWERTY pour mieux correspondre à la langue française. Les lettres A et Q ont été échangées, ainsi que Z et W, et les accents ont été ajoutés.

Le problème : l'AZERTY français n'a jamais été normalisé officiellement avant 2019. Résultat : les majuscules accentuées (É, È, À) sont toujours difficiles à taper sur un clavier standard.

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

Bref, apprends la disposition de ton clavier. Et apprends à la maîtriser.`,
  },
  {
    slug: "raccourcis-clavier-emoji",
    locale: "fr",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Raccourci clavier emoji : insérer un smiley sans copier-coller",
    description: "Le raccourci clavier emoji qui évite le copier-coller depuis un site. Windows, Mac, et les codes rapides dans Slack ou Teams.",
    readingTime: 3,
    date: "2026-09-23",
    downloadLabel: "Fiche pratique",
    content: `## Sur Windows

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

Le sélecteur d'emoji retient les symboles récemment utilisés. Force-toi à utiliser le raccourci clavier plutôt que le copier-coller pendant une semaine - après ça, c'est de la mémoire musculaire, comme n'importe quel autre raccourci clavier.`,
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
    content: `## Définition

La dactylographie désigne l'art de taper à la machine, aujourd'hui au clavier d'ordinateur. Dans son usage moderne, le mot renvoie presque toujours à la méthode des dix doigts : chaque doigt est responsable d'une zone fixe du clavier, et tu tapes sans regarder tes mains.

La différence avec la façon de taper "classique" : la plupart des gens tapent avec deux à quatre doigts, cherchent chaque touche des yeux, et avancent lettre par lettre. Ça fonctionne, mais ça a une limite de vitesse difficile à dépasser.

## D'où vient le mot

Le terme vient de l'époque des machines à écrire, quand la technique a commencé à être enseignée de façon systématique - chaque doigt recevait sa propre zone sur le clavier, autour de la position de base (QSDF et JKLM sur AZERTY). Cette position de base n'a pas changé, même sur les claviers d'ordinateur modernes.

## La méthode des dix doigts, concrètement

Chaque main couvre la moitié du clavier. Les index reviennent toujours vers les touches F et J (ou leur équivalent sur ton clavier) entre deux frappes - ce sont tes points de repère. Avec de la pratique, tes doigts retrouvent leur position sans que tu aies besoin d'y penser.

## Pourquoi apprendre à taper avec tes dix doigts

Une personne qui maîtrise la dactylographie tape en moyenne 40 à 60 % plus vite qu'une personne autodidacte qui ne se sert que de quelques doigts - et avec moins d'erreurs, puisque chaque doigt n'est responsable que d'un petit nombre de touches fixes. Le regard reste sur l'écran plutôt que sur le clavier, ce qui change tout quand tu recopies un texte ou que tu réfléchis en tapant.

## Combien de temps ça prend

Les bases sont acquises en 2 à 4 semaines de pratique régulière, et le geste devient naturel après 2 à 3 mois - à raison de 15 à 20 minutes d'entraînement par jour. Ce n'est pas un talent, c'est de la répétition.`,
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
    content: `## 1. Utilise moins la touche retour arrière

Chaque faute que tu corriges immédiatement casse ton rythme deux fois : une fois pour l'erreur, une fois pour la correction. Termine ta phrase d'abord, corrige ensuite en une seule fois. Ça paraît risqué. C'est mesurablement plus rapide.

## 2. Arrête de regarder le clavier

Le plus gros gaspillage de temps, c'est l'aller-retour du regard entre l'écran et le clavier. Chaque coup d'œil coûte une fraction de seconde - sur des milliers de frappes par jour, ça s'additionne vite. Qui tape avec les dix doigts ne paie jamais ce coût.

## 3. Des sessions courtes, mais chaque jour

15 minutes par jour valent mieux que deux heures le week-end. La mémoire musculaire a besoin de répétitions courtes et fréquentes - de longues pauses entre les sessions font régresser les progrès.

## 4. Entraîne-toi sur de vrais textes

Pratique sur des phrases que tu tapes vraiment - e-mails, messages, prompts pour l'IA. Des suites de lettres aléatoires entraînent tes doigts, mais pas le sens de la langue qui rend la frappe vraiment rapide.

## 5. La précision avant la vitesse

Ça paraît contre-intuitif, mais c'est vrai : s'entraîner d'abord à la précision rend plus rapide à terme que de viser la vitesse dès le premier jour. Les mauvaises habitudes de frappe qui s'installent sont difficiles à corriger ensuite.

## 6. Apprends les raccourcis clavier

Copier, coller, supprimer un mot, revenir au début de la ligne - qui maîtrise ces raccourcis par cœur s'économise d'innombrables frappes et clics de souris au quotidien.

## 7. Mesure ta progression

Ce qu'on ne mesure pas, on ne l'améliore pas consciemment. Un test de vitesse de frappe rapide chaque semaine te montre noir sur blanc si les six autres habitudes fonctionnent - et te garde motivé.

## Ce qui compte le plus

Sur ces sept points, "arrêter de regarder le clavier" combiné à "s'entraîner un peu chaque jour" fait la plus grande différence. Ensemble, c'est essentiellement la méthode des dix doigts - toutes les autres techniques s'appuient dessus.`,
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
    content: `## En résumé

AgileFingers est un outil gratuit et minimaliste, bien pensé, avec des statistiques détaillées (MPM, carte de chaleur des erreurs par doigt). Mais c'est un outil de pratique libre, sans parcours structuré ni ligne d'arrivée définie - tu t'entraînes, sans savoir vraiment quand tu es "prêt". Fast Forward Typing propose un cours structuré avec un vrai début et une vraie fin, plus un certificat à la clé. Choisis AgileFingers si tu veux un outil gratuit et open-ended. Choisis Fast Forward Typing si tu veux un parcours avec un objectif clair et une preuve à la fin.

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

**AgileFingers fonctionne-t-il en français ?** Oui, l'outil prend en charge plus de 20 langues et dispositions de clavier, dont le français et l'AZERTY.`,
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

export function getAllResourceSlugs(): { slug: string; locale: string }[] {
  return resources.map((t) => ({ slug: t.slug, locale: t.locale }));
}
