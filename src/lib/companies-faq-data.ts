import { companiesAnchorId } from "@/i18n/routes";

type FAQItem = { question: string; answer: string; answerLink?: { text: string; href: string } };

// FAQ for the companies (B2B) page. Questions are phrased as real B2B
// search queries (price, duration, onboarding fit, multilingual teams,
// tracking, minimum team size) - each one targets a long-tail keyword
// this page has no other content covering. Same shape/pattern as
// src/lib/faq-data.ts (homepage), kept as its own file rather than in
// the i18n dictionaries: lean dictionaries, and no merge risk with
// dictionary work happening elsewhere in the repo.
export const companiesFAQ: Record<string, { title: string; items: FAQItem[] }> = {
  de: {
    title: "Häufig gestellte Fragen für Unternehmen",
    items: [
      {
        question: "Was kostet ein Tippkurs für Unternehmen?",
        answer:
          "Eine Jahreslizenz pro Mitarbeiter:in, gestaffelt nach Teamgröße. Für kleine Teams ist ein bezahlter Pilot möglich, bevor ihr auf das ganze Unternehmen ausrollt. Den genauen Preis für eure Teamgröße bekommt ihr über das Formular unten, innerhalb eines Werktags.",
        answerLink: { text: "über das Formular unten", href: `#${companiesAnchorId("de", "contact")}` },
      },
      {
        question: "Wie lange dauert das 10-Finger-System-Training pro Mitarbeiter:in?",
        answer:
          "15 Minuten am Tag, verteilt über einige Wochen. Die meisten sehen nach zwei bis drei Wochen deutliche Verbesserung, danach wächst die Geschwindigkeit mit jedem Arbeitstag weiter, ganz ohne zusätzlichen Aufwand.",
      },
      {
        question: "Lässt sich das Training ins Onboarding oder die Ausbildung integrieren?",
        answer:
          "Ja. Viele Teams hängen den Kurs als festen Baustein an die ersten vier Wochen im Job oder an den Digitalkompetenz-Teil der Ausbildung. Kein zusätzlicher Seminartag, kein Termin, der den Kalender blockiert.",
      },
      {
        question: "Funktioniert der Kurs für mehrsprachige Teams (Deutsch, Englisch, Französisch)?",
        answer:
          "Ja, und zwar layoutgenau. Das Curriculum existiert komplett getrennt für QWERTZ (Deutsch), QWERTY (Englisch) und AZERTY (Französisch), nicht nur übersetzt. Jede Person übt auf ihrer eigenen Tastatur.",
      },
      {
        question: "Wie behalten wir als Unternehmen den Überblick über den Fortschritt im Team?",
        answer:
          "Über ein Team-Dashboard: wer hat gestartet, wo steht wer, wer hat abgeschlossen. Dazu regelmäßige Fortschritts-Updates und Kennzahlen als Export für Personalakte und Weiterbildungsnachweis.",
      },
      {
        question: "Gibt es eine Mindestteamgröße?",
        answer:
          "Ab etwa 10 Personen lohnt sich eine Teamlizenz. Für einzelne Mitarbeiter:innen oder sehr kleine Teams ist der reguläre Einzelkurs oft die einfachere Lösung, sprecht uns trotzdem gerne an.",
      },
    ],
  },
  en: {
    title: "Frequently asked questions for companies",
    items: [
      {
        question: "What does a typing course for companies cost?",
        answer:
          "An annual license per employee, tiered by team size. For small teams a paid pilot is possible before you roll out company-wide. You get the exact price for your team size through the form below, within one business day.",
        answerLink: { text: "through the form below", href: `#${companiesAnchorId("en", "contact")}` },
      },
      {
        question: "How long does touch-typing training take per employee?",
        answer:
          "15 minutes a day, spread over a few weeks. Most people see a clear improvement after two to three weeks, and speed keeps growing with every work day after that, with no extra effort.",
      },
      {
        question: "Can the training be built into onboarding or an apprenticeship program?",
        answer:
          "Yes. Many teams add the course as a fixed module in the first four weeks on the job, or as part of a digital-skills track. No extra seminar day, no meeting that blocks the calendar.",
      },
      {
        question: "Does the course work for multilingual teams (German, English, French)?",
        answer:
          "Yes, layout-accurate. The curriculum exists as fully separate tracks for QWERTZ (German), QWERTY (English) and AZERTY (French), not just translated text. Everyone practices on their own keyboard.",
      },
      {
        question: "How do we track progress across the team?",
        answer:
          "Through a team dashboard: who has started, where each person stands, who has finished. Plus regular progress updates and key figures as an export for HR files and training records.",
      },
      {
        question: "Is there a minimum team size?",
        answer:
          "A team license makes sense from about 10 people. For individual employees or very small teams the regular individual course is often simpler, but reach out either way.",
      },
    ],
  },
  fr: {
    title: "Questions fréquentes pour les entreprises",
    items: [
      {
        question: "Combien coûte un cours de dactylographie pour une entreprise ?",
        answer:
          "Une licence annuelle par salarié, selon la taille de l'équipe. Pour les petites équipes, un pilote payant est possible avant un déploiement à toute l'entreprise. Vous recevez le prix exact pour votre équipe via le formulaire ci-dessous, sous un jour ouvré.",
        answerLink: { text: "via le formulaire ci-dessous", href: `#${companiesAnchorId("fr", "contact")}` },
      },
      {
        question: "Combien de temps dure la formation par salarié ?",
        answer:
          "15 minutes par jour, réparties sur quelques semaines. La plupart voient une nette amélioration après deux à trois semaines, puis la vitesse continue de progresser à chaque journée de travail, sans effort supplémentaire.",
      },
      {
        question: "La formation peut-elle s'intégrer à l'onboarding ou à l'alternance ?",
        answer:
          "Oui. Beaucoup d'équipes intègrent le cours comme module fixe dans les quatre premières semaines du poste, ou dans le volet compétences numériques de la formation. Pas de journée de séminaire en plus, pas de réunion qui bloque l'agenda.",
      },
      {
        question: "Le cours fonctionne-t-il pour des équipes multilingues (allemand, anglais, français) ?",
        answer:
          "Oui, avec la disposition exacte de chaque clavier. Le programme existe en pistes totalement séparées pour QWERTZ (allemand), QWERTY (anglais) et AZERTY (français), pas de simple traduction. Chacun s'entraîne sur son propre clavier.",
      },
      {
        question: "Comment suivre la progression de l'équipe ?",
        answer:
          "Via un tableau de bord équipe : qui a commencé, où en est chacun, qui a terminé. Avec des points d'étape réguliers et des indicateurs exportables pour le dossier RH et le justificatif de formation.",
      },
      {
        question: "Y a-t-il une taille minimale d'équipe ?",
        answer:
          "Une licence équipe est pertinente à partir d'une dizaine de personnes. Pour un salarié seul ou une très petite équipe, le cours individuel classique est souvent plus simple, mais contactez-nous quand même.",
      },
    ],
  },
};
