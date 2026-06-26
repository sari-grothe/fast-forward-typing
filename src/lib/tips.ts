import type { Locale } from "@/i18n/config";

export type TipCategory = "learning" | "shortcuts" | "productivity" | "mobile";
export type TipType = "article" | "lead-magnet";

export type TipMeta = {
  slug: string;
  locale: Locale;
  type: TipType;
  category: TipCategory;
  title: string;
  description: string;
  readingTime: number;
  date: string;
  featured?: boolean;
  downloadLabel?: string;
  content: string;
};

export const categoryLabels: Record<Locale, Record<TipCategory | "all", string>> = {
  de: { all: "Alle", learning: "Lernen", shortcuts: "Shortcuts", productivity: "Produktivität", mobile: "Mobil" },
  en: { all: "All", learning: "Learning", shortcuts: "Shortcuts", productivity: "Productivity", mobile: "Mobile" },
  fr: { all: "Tous", learning: "Apprentissage", shortcuts: "Raccourcis", productivity: "Productivité", mobile: "Mobile" },
};

export const tipsUi: Record<Locale, {
  pageTitle: string;
  pageSubtitle: string;
  readingTime: string;
  backToTips: string;
  relatedArticles: string;
  downloadPdf: string;
  downloadHint: string;
  startCourse: string;
  tryCta: string;
  tryCtaDesc: string;
  featured: string;
}> = {
  de: {
    pageTitle: "Tipps & Ressourcen",
    pageSubtitle: "Alles rund ums Tippen - Guides, Shortcuts, Tools.",
    readingTime: "Min. Lesezeit",
    backToTips: "Alle Tipps",
    relatedArticles: "Weiterlesen",
    downloadPdf: "Als PDF speichern",
    downloadHint: "Drucke die Seite als PDF (Ctrl+P / Cmd+P)",
    startCourse: "Kurs starten",
    tryCta: "Bereit loszulegen?",
    tryCtaDesc: "Finde heraus, wie schnell du tippst - kostenlos.",
    featured: "Empfohlen",
  },
  en: {
    pageTitle: "Tips & Resources",
    pageSubtitle: "Everything about typing - guides, shortcuts, tools.",
    readingTime: "min read",
    backToTips: "All tips",
    relatedArticles: "Keep reading",
    downloadPdf: "Save as PDF",
    downloadHint: "Print this page as PDF (Ctrl+P / Cmd+P)",
    startCourse: "Start course",
    tryCta: "Ready to start?",
    tryCtaDesc: "Find out how fast you type - for free.",
    featured: "Featured",
  },
  fr: {
    pageTitle: "Conseils & Ressources",
    pageSubtitle: "Tout sur la frappe - guides, raccourcis, outils.",
    readingTime: "min de lecture",
    backToTips: "Tous les conseils",
    relatedArticles: "Continuer la lecture",
    downloadPdf: "Sauvegarder en PDF",
    downloadHint: "Imprime cette page en PDF (Ctrl+P / Cmd+P)",
    startCourse: "Commencer le cours",
    tryCta: "Prêt à commencer ?",
    tryCtaDesc: "Découvre ta vitesse de frappe - gratuitement.",
    featured: "À la une",
  },
};

const tips: TipMeta[] = [
  // ─── DE ARTICLES ──────────────────────────────────────────
  {
    slug: "zehn-finger-schreiben-lernen",
    locale: "de",
    type: "article",
    category: "learning",
    title: "10 Finger Schreiben lernen: Der komplette Guide",
    description: "Von der Grundreihe bis zur vollen Geschwindigkeit - so lernst du das Zehnfingersystem in 4 Wochen.",
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
5. **Fortschritt messen.** Ein Tipptest pro Woche zeigt dir, wo du stehst.

## Die ersten zwei Wochen sind hart

Mal ehrlich: Am Anfang tippst du *langsamer* als vorher. Das ist normal und dauert etwa eine Woche. Danach beschleunigst du schnell.

Der Trick ist, die ersten 7 Tage durchzuhalten. Danach spürst du den Fortschritt.`,
  },
  {
    slug: "schneller-tippen-handy",
    locale: "de",
    type: "article",
    category: "mobile",
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

Auf dem Handy sind 40-50 Wörter pro Minute schon gut. Am Desktop schaffen Touch-Typisten 60-80 WPM - und das lässt sich in 4 Wochen lernen.`,
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

  // ─── EN ARTICLES ──────────────────────────────────────────
  {
    slug: "learn-touch-typing",
    locale: "en",
    type: "article",
    category: "learning",
    title: "Learn Touch Typing: The Complete Guide",
    description: "From home row to full speed - how to master the 10-finger system in 4 weeks.",
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
    category: "mobile",
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

On your phone, 40-50 words per minute is solid. On a desktop, touch typists hit 60-80 WPM - and you can learn that in 4 weeks.`,
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

  // ─── FR ARTICLES ──────────────────────────────────────────
  {
    slug: "apprendre-dactylographie",
    locale: "fr",
    type: "article",
    category: "learning",
    title: "Apprendre la dactylographie : le guide complet",
    description: "De la rangée de base à la pleine vitesse - comment maîtriser la frappe à dix doigts en 4 semaines.",
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
5. **Mesure tes progrès.** Un test de frappe par semaine te montre où tu en es.

## Les deux premières semaines sont difficiles

Soyons honnêtes : au début, tu tapes *plus lentement* qu'avant. C'est normal et ça dure environ une semaine. Après, tu accélères vite.

Le truc, c'est de tenir les 7 premiers jours. Après ça, tu sens le progrès.`,
  },
  {
    slug: "taper-plus-vite-telephone",
    locale: "fr",
    type: "article",
    category: "mobile",
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

Sur ton téléphone, 40-50 mots par minute c'est déjà bien. Sur un ordinateur, les dactylos atteignent 60-80 MPM - et ça s'apprend en 4 semaines.`,
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
];

export function getTipsByLocale(locale: Locale): TipMeta[] {
  return tips.filter((t) => t.locale === locale);
}

export function getTip(slug: string, locale: Locale): TipMeta | undefined {
  return tips.find((t) => t.slug === slug && t.locale === locale);
}

export function getRelatedTips(slug: string, locale: Locale, limit = 3): TipMeta[] {
  const current = getTip(slug, locale);
  if (!current) return [];
  const localeTips = getTipsByLocale(locale).filter((t) => t.slug !== slug);
  const sameCategory = localeTips.filter((t) => t.category === current.category);
  const others = localeTips.filter((t) => t.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function getAllTipSlugs(): { slug: string; locale: string }[] {
  return tips.map((t) => ({ slug: t.slug, locale: t.locale }));
}
