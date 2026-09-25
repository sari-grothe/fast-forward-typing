import type { Locale } from "@/i18n/config";
import { homeFAQ, speedTestFAQ, certificateFAQ } from "./faq-data";
import { companiesFAQ } from "./companies-faq-data";

// link.to is an internal key ("page:practiceTexts", "article:<slug>"),
// resolved per locale in HelpCenter; unknown targets fail the build.
export type HelpItem = { question: string; answer: string; link?: { to: string; label: string } };
export type HelpCategory = { id: string; title: string; items: HelpItem[] };

export type Strength = { title: string; desc: string };

export const helpUi: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  searchNoResults: string;
  strengthsTitle: string;
  strengthsSubtitle: string;
  categoryNav: string;
}> = {
  de: {
    metaTitle: "Hilfecenter - Alle Antworten zu Fast Forward Typing",
    metaDescription: "Fragen zum Kurs, zur Tippgeschwindigkeit, zu Übungstexten, Arbeitsblättern, Zertifikat oder Angebot für Unternehmen - alle Antworten an einem Ort.",
    title: "Hilfecenter",
    subtitle: "Alle Antworten zu Kurs, Tippgeschwindigkeit, Zertifikat und mehr - an einem Ort.",
    searchPlaceholder: "Frage oder Stichwort suchen ...",
    searchNoResults: "Keine Treffer. Versuch ein anderes Stichwort oder schreib uns direkt.",
    strengthsTitle: "Warum Fast Forward Typing",
    strengthsSubtitle: "Was uns von Tipptrainern für Schulen und offenen Übungstools unterscheidet.",
    categoryNav: "Zum Thema springen",
  },
  en: {
    metaTitle: "Help Center - All Fast Forward Typing Answers",
    metaDescription: "Questions about the course, the typing test, practice paragraphs, worksheets, the certificate or our offer for companies - every answer in one place.",
    title: "Help Center",
    subtitle: "Every answer about the course, the typing test, the certificate, and more - in one place.",
    searchPlaceholder: "Search a question or keyword ...",
    searchNoResults: "No matches. Try a different keyword, or just write to us.",
    strengthsTitle: "Why Fast Forward Typing",
    strengthsSubtitle: "What sets us apart from typing tools built for schools and open-ended practice sites.",
    categoryNav: "Jump to a topic",
  },
  fr: {
    metaTitle: "Centre d'aide - Toutes les réponses Fast Forward Typing",
    metaDescription: "Questions sur le cours, le test de dactylographie, les textes d'exercice, les fiches, le certificat ou l'offre entreprises : toutes les réponses ici.",
    title: "Centre d'aide",
    subtitle: "Toutes les réponses sur le cours, le test de dactylographie, le certificat et plus encore - au même endroit.",
    searchPlaceholder: "Chercher une question ou un mot-clé ...",
    searchNoResults: "Aucun résultat. Essaie un autre mot-clé, ou écris-nous directement.",
    strengthsTitle: "Pourquoi Fast Forward Typing",
    strengthsSubtitle: "Ce qui nous distingue des outils pensés pour les écoles et des sites d'entraînement libre.",
    categoryNav: "Aller à un sujet",
  },
};

// Real, verifiable differentiators only - no comparison superlatives we
// can't back up, no invented features. Matches what the certificate,
// lessons, and companies pages already state elsewhere on the site.
export const strengths: Record<Locale, Strength[]> = {
  de: [
    { title: "Für Erwachsene gebaut, nicht für Schulen", desc: "Keine Sterne, Abzeichen oder Maskottchen-Geschichten für Kinder. Sachliche Lektionen, erwachsenengerechtes Design." },
    { title: "Individuelle Einstufung statt Einheitskurs", desc: "Eine Einstufung misst, welche Tasten schon sitzen. Lektionen, die du schon kannst, werden zum Überspringen vorgeschlagen, nie versteckt." },
    { title: "Nativ statt übersetzt", desc: "Deutsch, Englisch und Französisch sind jeweils eigene Curricula für die passende Tastatur (QWERTZ, QWERTY, AZERTY) - keine Übersetzung eines einzigen Kurses." },
    { title: "Klarer Kursabschluss statt endlosem Üben", desc: "31 Lektionen mit klarem Anfang und Ende. Wer fertig ist, weiß es - kein offenes Übungstool ohne Ziellinie." },
    { title: "Echtzeit-Korrektur", desc: "Bei Fehlern wird die Eingabe blockiert, bis die richtige Taste sitzt. Das trainiert Genauigkeit von Anfang an, nicht erst danach." },
    { title: "Kostenloser Einstieg ohne Anmeldung", desc: "Tippgeschwindigkeit messen und die ersten sechs Lektionen sind sofort nutzbar, ganz ohne Konto." },
  ],
  en: [
    { title: "Built for adults, not for schools", desc: "No stars, badges, or kid-story mascots. Straightforward lessons, adult-appropriate design." },
    { title: "Individual placement instead of one-size-fits-all", desc: "A placement test measures which keys you already know. Lessons you've mastered get suggested as skippable, never hidden." },
    { title: "Native, not translated", desc: "German, English, and French are each their own curriculum for the right keyboard (QWERTZ, QWERTY, AZERTY) - not one course translated three times." },
    { title: "A real finish line, not endless practice", desc: "31 lessons with a clear start and end. When you're done, you know it - not an open-ended practice tool with no goal." },
    { title: "Real-time correction", desc: "Mistakes block your input until you hit the right key. That trains accuracy from the start, not as an afterthought." },
    { title: "Free to start, no sign-up", desc: "The typing speed test and the first six lessons work instantly, no account needed." },
  ],
  fr: [
    { title: "Pensé pour les adultes, pas pour les écoles", desc: "Pas d'étoiles, de badges ni de mascottes façon histoire pour enfants. Des leçons sobres, un design pensé pour les adultes." },
    { title: "Évaluation individuelle plutôt qu'un cours unique", desc: "Une évaluation mesure les touches déjà maîtrisées. Les leçons déjà acquises sont proposées à sauter, jamais cachées." },
    { title: "Natif, pas traduit", desc: "L'allemand, l'anglais et le français sont chacun un programme à part, pensé pour le bon clavier (QWERTZ, QWERTY, AZERTY) - pas un seul cours traduit trois fois." },
    { title: "Une vraie ligne d'arrivée, pas un entraînement sans fin", desc: "31 leçons avec un vrai début et une vraie fin. Quand c'est fini, tu le sais - pas un outil libre sans objectif." },
    { title: "Correction en temps réel", desc: "Une erreur bloque la saisie jusqu'à la bonne touche. Ça entraîne la précision dès le départ, pas après coup." },
    { title: "Gratuit pour commencer, sans inscription", desc: "Le test de vitesse et les six premières leçons sont utilisables tout de suite, sans compte." },
  ],
};

function buildCategories(locale: Locale): HelpCategory[] {
  const home = homeFAQ[locale] ?? homeFAQ.en;
  const speed = speedTestFAQ[locale] ?? speedTestFAQ.en;
  const cert = certificateFAQ[locale] ?? certificateFAQ.en;
  const companies = companiesFAQ[locale] ?? companiesFAQ.en;

  const gettingStarted: Record<Locale, HelpItem[]> = {
    de: [
      { question: "Was ist Fast Forward Typing?", answer: "Ein browserbasierter 10-Finger-System-Kurs für Erwachsene, auf Deutsch, Englisch und Französisch. Eine Einstufung baut dir einen individuellen Trainingsplan, 15 Minuten am Tag reichen." },
      { question: "Brauche ich ein Konto, um loszulegen?", answer: "Nein. Tippgeschwindigkeit messen und die ersten Lektionen starten funktioniert sofort, ohne Anmeldung." },
      { question: "Brauche ich eine bestimmte Tastatur oder App?", answer: "Nein, es läuft im Browser mit jeder Tastatur - Laptop, Desktop oder mechanisch. Keine Installation nötig." },
    ],
    en: [
      { question: "What is Fast Forward Typing?", answer: "A browser-based touch-typing course for adults, in German, English, and French. A placement test builds you an individual training plan, 15 minutes a day is enough." },
      { question: "Do I need an account to get started?", answer: "No. Taking the typing speed test and starting the first lessons works instantly, no sign-up needed." },
      { question: "Do I need a specific keyboard or app?", answer: "No, it runs in the browser with any keyboard - laptop, desktop, or mechanical. No installation needed." },
    ],
    fr: [
      { question: "Qu'est-ce que Fast Forward Typing ?", answer: "Un cours de dactylographie à dix doigts pour adultes, dans le navigateur, en allemand, anglais et français. Une évaluation construit ton plan d'entraînement individuel, 15 minutes par jour suffisent." },
      { question: "Ai-je besoin d'un compte pour commencer ?", answer: "Non. Passer le test de dactylographie et commencer les premières leçons fonctionne tout de suite, sans inscription." },
      { question: "Ai-je besoin d'un clavier ou d'une application particulière ?", answer: "Non, tout fonctionne dans le navigateur avec n'importe quel clavier - portable, bureau ou mécanique. Aucune installation nécessaire." },
    ],
  };

  const courseExtra: Record<Locale, HelpItem[]> = {
    de: [
      { question: "Wie ist der Kurs aufgebaut?", answer: "31 Lektionen in drei Phasen: Grundreihe, obere und untere Reihe, dann Zahlen und Sonderzeichen. Jede Lektion baut auf der vorherigen auf." },
      { question: "Was passiert nach Lektion 6?", answer: "Die ersten sechs Lektionen sind komplett kostenlos. Der Rest gehört zu Pro (einmalig 29 Euro, aktuell Warteliste) - du kannst trotzdem jederzeit kostenlos weiterüben." },
    ],
    en: [
      { question: "How is the course structured?", answer: "31 lessons across three phases: home row, top and bottom row, then numbers and special characters. Each lesson builds on the last." },
      { question: "What happens after lesson 6?", answer: "The first six lessons are completely free. The rest is Pro (one-time 29 euros, currently a waitlist) - you can still keep practicing for free at any time." },
    ],
    fr: [
      { question: "Comment le cours est-il structuré ?", answer: "31 leçons en trois phases : rangée de base, rangées du haut et du bas, puis chiffres et caractères spéciaux. Chaque leçon s'appuie sur la précédente." },
      { question: "Que se passe-t-il après la leçon 6 ?", answer: "Les six premières leçons sont entièrement gratuites. Le reste fait partie de Pro (29 euros en une fois, actuellement liste d'attente) - tu peux quand même continuer à t'entraîner gratuitement à tout moment." },
    ],
  };

  const tools: Record<Locale, HelpItem[]> = {
    de: [
      { question: "Welche kostenlosen Tools gibt es?", answer: "Fünf, alle ohne Anmeldung: die Messung deiner Tippgeschwindigkeit (1, 2 oder 5 Minuten), die Einstufung für deinen Trainingsplan, den Vergleich der Tastaturlayouts QWERTZ, QWERTY und AZERTY, 18 Übungstexte zum Abtippen und einen Zeichenzähler." },
      { question: "Was zählt der Zeichenzähler?", answer: "Wörter, Zeichen mit und ohne Leerzeichen, Sätze und Absätze, dazu Lesezeit, Tippzeit und die Zeichenlimits für Google, SMS, X und LinkedIn. Der Text bleibt in deinem Browser, nichts wird gesendet.", link: { to: "page:wordCounter", label: "Zum Zeichenzähler" } },
      { question: "Was sind die Übungstexte?", answer: "18 Texte aus dem Arbeitsalltag: E-Mails, Meeting-Notizen, Kundenantworten, Projekt-Updates, KI-Prompts sowie Zahlen und Sonderzeichen, jeweils in den Stufen Leicht, Mittel und Schwer. Jeder Text ist direkt auf Deutsch geschrieben, mit Umlauten, ß und €-Zeichen, die du im Job wirklich brauchst.", link: { to: "page:practiceTexts", label: "Zu den Übungstexten" } },
      { question: "Kann ich einen Übungstext direkt hier üben?", answer: "Ja. \"Jetzt üben\" lädt den Text in die Messung deiner Tippgeschwindigkeit, du bekommst WPM und Genauigkeit. Der gewählte Text bleibt auch bei 2 und 5 Minuten erhalten; bei längeren Durchgängen folgen weitere Texte derselben Schwierigkeit." },
      { question: "Darf ich die Übungstexte in ein anderes Programm kopieren?", answer: "Ja, dafür gibt es den Button \"Text kopieren\". Die Texte sind für Übungszwecke frei verwendbar." },
      { question: "Was zeigt der Vergleich der Tastaturlayouts?", answer: "QWERTZ, QWERTY und AZERTY interaktiv nebeneinander: welche Tasten vertauscht sind, wo Umlaute und Akzente liegen und welches Layout in welchem Land verwendet wird.", link: { to: "page:keyboardLayouts", label: "Tastaturlayouts vergleichen" } },
      { question: "Welches Tastaturlayout sollte ich lernen?", answer: "Das deines Landes, in Deutschland, Österreich und der Schweiz also QWERTZ. Auf das Tempo hat das Layout kaum Einfluss, entscheidend ist die feste Zuordnung von Finger zu Taste. Den Kurs gibt es für QWERTZ, QWERTY und AZERTY." },
      { question: "Wie funktioniert die Einstufung?", answer: "Drei kurze Runden, zusammen 2 bis 6 Minuten. Für jede Taste messen wir Genauigkeit und Tempo. Lektionen zu Tasten, die schon sitzen, bekommen einen Vorschlag zum Überspringen, offen bleiben sie trotzdem.", link: { to: "page:placement", label: "Einstufung starten" } },
    ],
    en: [
      { question: "Which free tools are there?", answer: "Five, all without sign-up: the typing speed test (1, 2 or 5 minutes), the placement test that builds your training plan, the QWERTY, QWERTZ and AZERTY keyboard layout comparison, 18 practice paragraphs to type, and a word counter." },
      { question: "What does the word counter count?", answer: "Words, characters with and without spaces, sentences and paragraphs, plus reading time, typing time and the character limits for Google, SMS, X and LinkedIn. Your text stays in your browser, nothing is sent.", link: { to: "page:wordCounter", label: "Open the word counter" } },
      { question: "What are the practice paragraphs?", answer: "18 texts from everyday office work: emails, meeting notes, customer replies, project updates, AI prompts, plus numbers and symbols, each at easy, medium and hard. Every text is written in English from scratch, with the symbols you actually need at work.", link: { to: "page:practiceTexts", label: "See the practice paragraphs" } },
      { question: "Can I practice a paragraph right here?", answer: "Yes. \"Practice now\" loads the text into the typing speed test and gives you WPM and accuracy. The paragraph you picked stays when you switch to 2 or 5 minutes; longer runs continue with more paragraphs of the same difficulty." },
      { question: "Can I copy the practice paragraphs into another program?", answer: "Yes, that is what the \"Copy text\" button is for. The texts are free to use for practice." },
      { question: "What does the keyboard layout comparison show?", answer: "QWERTY, QWERTZ and AZERTY side by side, interactively: which keys are swapped, where umlauts and accents sit, and which layout is used in which country.", link: { to: "page:keyboardLayouts", label: "Compare keyboard layouts" } },
      { question: "Which keyboard layout should I learn?", answer: "The one used in your country, so QWERTY in the US and the UK. The layout barely affects your speed, a consistent finger-to-key mapping does. The course exists for QWERTY, QWERTZ and AZERTY." },
      { question: "How does the placement test work?", answer: "Three short rounds, 2 to 6 minutes in total. For each key we measure accuracy and speed. Lessons for keys you already master get a suggestion to skip, and they stay open anyway.", link: { to: "page:placement", label: "Start the placement test" } },
    ],
    fr: [
      { question: "Quels outils gratuits proposez-vous ?", answer: "Cinq, tous sans inscription : le test de dactylographie (1, 2 ou 5 minutes), l'évaluation qui construit ton plan d'entraînement, la comparaison des claviers AZERTY, QWERTY et QWERTZ, 18 textes d'exercice à taper et un compteur de mots." },
      { question: "Que compte le compteur de mots ?", answer: "Les mots, les caractères avec et sans espaces, les phrases et les paragraphes, plus le temps de lecture, le temps de frappe et les limites de caractères pour Google, SMS, X et LinkedIn. Ton texte reste dans ton navigateur, rien n'est envoyé.", link: { to: "page:wordCounter", label: "Ouvrir le compteur de mots" } },
      { question: "Que sont les textes d'exercice ?", answer: "18 textes tirés du quotidien au bureau : e-mails, comptes rendus, réponses clients, points projet, prompts IA, chiffres et signes, chacun en niveau facile, moyen et difficile. Chaque texte est écrit directement en français, avec les accents, le ç et le signe € dont tu as besoin au travail.", link: { to: "page:practiceTexts", label: "Voir les textes d'exercice" } },
      { question: "Puis-je m'entraîner sur un texte directement ici ?", answer: "Oui. « S'entraîner » charge le texte dans le test de dactylographie et te donne MPM et précision. Le texte choisi reste aussi à 2 et 5 minutes ; les tests plus longs continuent avec d'autres textes de même difficulté." },
      { question: "Puis-je copier les textes dans un autre programme ?", answer: "Oui, c'est à ça que sert le bouton « Copier le texte ». Les textes sont libres d'utilisation pour l'entraînement." },
      { question: "Que montre la comparaison des claviers ?", answer: "AZERTY, QWERTY et QWERTZ côte à côte, de manière interactive : quelles touches sont inversées, où se trouvent les accents et quelle disposition est utilisée dans quel pays.", link: { to: "page:keyboardLayouts", label: "Comparer les claviers" } },
      { question: "Quelle disposition de clavier apprendre ?", answer: "Celle de ton pays, donc l'AZERTY en France et en Belgique. La disposition n'a presque aucun effet sur la vitesse, c'est l'attribution fixe doigt-touche qui compte. Le cours existe en AZERTY, QWERTY et QWERTZ." },
      { question: "Comment fonctionne l'évaluation ?", answer: "Trois manches courtes, 2 à 6 minutes en tout. Pour chaque touche, on mesure la précision et la vitesse. Les leçons sur les touches déjà acquises reçoivent une proposition de saut, elles restent ouvertes quand même.", link: { to: "page:placement", label: "Commencer l'évaluation" } },
    ],
  };

  const resources: Record<Locale, HelpItem[]> = {
    de: [
      { question: "Was finde ich unter Ressourcen?", answer: "Guides zum 10-Finger-System, Tastenkombinationen für Windows und Mac, Tipps für schnelleres Tippen, ehrliche Vergleiche mit anderen Kursen und Arbeitsblätter zum Ausdrucken.", link: { to: "page:resources", label: "Alle Ressourcen" } },
      { question: "Welche Arbeitsblätter gibt es?", answer: "Sieben PDFs für die QWERTZ-Tastatur: Finger-Tastatur-Karte, leeres Layout zum Ausfüllen, Fortschritts-Tracker für 4 Wochen, Nummernblock-Karte, Büro-Poster \"Welcher Finger tippt was?\", Selbsttest und Sonderzeichen-Karte. Jedes Blatt ist eine A4-Seite zum Ausdrucken.", link: { to: "article:finger-tastatur-karte-qwertz", label: "Zur Finger-Tastatur-Karte" } },
      { question: "Gibt es die Tastenkombinationen als Cheat Sheet?", answer: "Ja, die 30 wichtigsten Tastenkombinationen für Windows und für macOS sowie die Emoji-Shortcuts gibt es jeweils als PDF zum Ausdrucken.", link: { to: "article:tastenkombinationen-windows", label: "Tastenkombinationen für Windows" } },
      { question: "Kosten die Arbeitsblätter und Cheat Sheets etwas?", answer: "Nein. Du trägst Vorname und E-Mail-Adresse ein, danach startet der Download sofort. Kein Spam." },
    ],
    en: [
      { question: "What is in the resources section?", answer: "Touch typing guides, keyboard shortcuts for Windows and Mac, tips for typing faster, honest comparisons with other courses, and printable worksheets.", link: { to: "page:resources", label: "All resources" } },
      { question: "Which worksheets are there?", answer: "Seven PDFs for the QWERTY keyboard: finger keyboard map, blank layout to fill in, 4-week progress tracker, numpad map, office poster \"Which finger types what?\", self-test and special characters sheet. Each one is a single A4 page, ready to print.", link: { to: "article:finger-keyboard-map-qwerty", label: "See the finger keyboard map" } },
      { question: "Are the keyboard shortcuts available as a cheat sheet?", answer: "Yes, the 30 most useful shortcuts for Windows and for macOS, plus the emoji shortcuts, each as a printable PDF.", link: { to: "article:keyboard-shortcuts-windows", label: "Windows keyboard shortcuts" } },
      { question: "Do the worksheets and cheat sheets cost anything?", answer: "No. Enter your first name and email, and the download starts right away. No spam." },
    ],
    fr: [
      { question: "Que trouve-t-on dans les ressources ?", answer: "Des guides sur la dactylographie à dix doigts, les raccourcis clavier Windows et Mac, des astuces pour taper plus vite, des comparatifs honnêtes avec d'autres cours et des fiches à imprimer.", link: { to: "page:resources", label: "Toutes les ressources" } },
      { question: "Quelles fiches à imprimer proposez-vous ?", answer: "Sept PDF pour le clavier AZERTY : carte doigts-clavier, clavier vierge à compléter, suivi de progression sur 4 semaines, carte du pavé numérique, affiche bureau « Quel doigt tape quoi ? », auto-évaluation et caractères spéciaux. Chaque fiche tient sur une page A4.", link: { to: "article:carte-doigts-clavier-azerty", label: "Voir la carte doigts-clavier" } },
      { question: "Les raccourcis clavier existent-ils en fiche pratique ?", answer: "Oui, les 30 raccourcis indispensables pour Windows et pour macOS, ainsi que les raccourcis emoji, chacun en PDF à imprimer.", link: { to: "article:raccourcis-clavier-windows", label: "Raccourcis clavier Windows" } },
      { question: "Les fiches sont-elles payantes ?", answer: "Non. Tu indiques ton prénom et ton e-mail, et le téléchargement démarre tout de suite. Pas de spam." },
    ],
  };

  const privacyTech: Record<Locale, HelpItem[]> = {
    de: [
      { question: "Welche Daten werden gespeichert?", answer: "Dein Fortschritt liegt nur in deinem Browser, nicht auf einem Server. Lädst du ein Arbeitsblatt herunter oder trägst dich in eine Warteliste ein, speichern wir nur, was du ins Formular einträgst, für genau diesen Zweck." },
      { question: "Funktioniert der Kurs auf dem Handy?", answer: "Die Seite ist mobil nutzbar, aber zum Tippenlernen brauchst du eine echte Tastatur - am Handy ergibt das Training keinen Sinn." },
      { question: "Welcher Browser wird empfohlen?", answer: "Jeder aktuelle Browser (Chrome, Firefox, Safari, Edge) funktioniert. Kein Plugin und keine Installation nötig." },
    ],
    en: [
      { question: "What data is stored?", answer: "Your progress lives only in your browser, not on a server. If you download a worksheet or join a waitlist, we store only what you enter in that form, for that purpose alone." },
      { question: "Does the course work on my phone?", answer: "The site works on mobile, but learning to type needs a real keyboard - training on a phone screen wouldn't make sense." },
      { question: "Which browser is recommended?", answer: "Any modern browser works (Chrome, Firefox, Safari, Edge). No plugin or installation needed." },
    ],
    fr: [
      { question: "Quelles données sont conservées ?", answer: "Ta progression reste uniquement dans ton navigateur, pas sur un serveur. Si tu télécharges une fiche ou t'inscris sur une liste d'attente, on ne conserve que ce que tu saisis dans le formulaire, pour cet usage précis." },
      { question: "Le cours fonctionne-t-il sur mobile ?", answer: "Le site s'affiche bien sur mobile, mais apprendre à taper demande un vrai clavier - s'entraîner sur l'écran d'un téléphone n'aurait pas de sens." },
      { question: "Quel navigateur est recommandé ?", answer: "N'importe quel navigateur récent fonctionne (Chrome, Firefox, Safari, Edge). Aucun plugin ni installation nécessaire." },
    ],
  };

  const companiesShort = companies.items.slice(0, 4);
  const gettingStartedTitle: Record<Locale, string> = { de: "Erste Schritte", en: "Getting started", fr: "Premiers pas" };

  return [
    { id: "getting-started", title: gettingStartedTitle[locale], items: gettingStarted[locale] },
    { id: "course", title: home.title, items: [...home.items, ...courseExtra[locale]] },
    { id: "speed-test", title: speed.title, items: speed.items },
    { id: "tools", title: { de: "Kostenlose Tools", en: "Free tools", fr: "Outils gratuits" }[locale], items: tools[locale] },
    { id: "resources", title: { de: "Ressourcen & Downloads", en: "Resources & downloads", fr: "Ressources et téléchargements" }[locale], items: resources[locale] },
    { id: "certificate", title: cert.title, items: cert.items },
    { id: "companies", title: companies.title, items: companiesShort },
    { id: "privacy", title: locale === "de" ? "Datenschutz & Technik" : locale === "fr" ? "Confidentialité et technique" : "Privacy & technical", items: privacyTech[locale] },
  ];
}

export function getHelpCategories(locale: Locale): HelpCategory[] {
  return buildCategories(locale);
}
