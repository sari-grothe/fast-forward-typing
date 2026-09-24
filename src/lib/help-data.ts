import type { Locale } from "@/i18n/config";
import { homeFAQ, speedTestFAQ, certificateFAQ } from "./faq-data";
import { companiesFAQ } from "./companies-faq-data";

export type HelpItem = { question: string; answer: string };
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
    metaDescription: "Fragen zum Kurs, zur Tippgeschwindigkeit, zum Zertifikat oder zu Fast Forward Typing für Unternehmen - alle Antworten an einem Ort, durchsuchbar.",
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
    metaDescription: "Questions about the course, the typing test, the certificate, or Fast Forward Typing for companies - every answer in one searchable place.",
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
    metaDescription: "Questions sur le cours, le test de dactylographie, le certificat ou l'offre pour les entreprises : toutes les réponses au même endroit.",
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

  const privacyTech: Record<Locale, HelpItem[]> = {
    de: [
      { question: "Welche Daten werden gespeichert?", answer: "Dein Fortschritt liegt nur in deinem Browser, nicht auf einem Server. Trägst du dich in eine Warteliste ein, speichern wir nur deine E-Mail-Adresse für diesen Zweck." },
      { question: "Funktioniert der Kurs auf dem Handy?", answer: "Die Seite ist mobil nutzbar, aber zum Tippenlernen brauchst du eine echte Tastatur - am Handy ergibt das Training keinen Sinn." },
      { question: "Welcher Browser wird empfohlen?", answer: "Jeder aktuelle Browser (Chrome, Firefox, Safari, Edge) funktioniert. Kein Plugin und keine Installation nötig." },
    ],
    en: [
      { question: "What data is stored?", answer: "Your progress lives only in your browser, not on a server. If you sign up for a waitlist, we store only your email address for that purpose." },
      { question: "Does the course work on my phone?", answer: "The site works on mobile, but learning to type needs a real keyboard - training on a phone screen wouldn't make sense." },
      { question: "Which browser is recommended?", answer: "Any modern browser works (Chrome, Firefox, Safari, Edge). No plugin or installation needed." },
    ],
    fr: [
      { question: "Quelles données sont conservées ?", answer: "Ta progression reste uniquement dans ton navigateur, pas sur un serveur. Si tu t'inscris sur une liste d'attente, on ne conserve que ton adresse e-mail, pour cet usage précis." },
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
    { id: "certificate", title: cert.title, items: cert.items },
    { id: "companies", title: companies.title, items: companiesShort },
    { id: "privacy", title: locale === "de" ? "Datenschutz & Technik" : locale === "fr" ? "Confidentialité et technique" : "Privacy & technical", items: privacyTech[locale] },
  ];
}

export function getHelpCategories(locale: Locale): HelpCategory[] {
  return buildCategories(locale);
}
