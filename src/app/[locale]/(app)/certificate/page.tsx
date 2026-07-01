import type { Locale } from "@/i18n/config";
import { FAQ } from "@/components/FAQ";
import { certificateFAQ } from "@/lib/faq-data";
import { CertificateStackSVG } from "@/components/CertificateStackSVG";

type Props = {
  params: Promise<{ locale: string }>;
};

const i18n: Record<Locale, {
  heroTitle: string;
  heroSubtitle: string;
  heroHighlight: string;
  previewTitle: string;
  previewSubtitle: string;
  benefit1Title: string;
  benefit1Desc: string;
  benefit2Title: string;
  benefit2Desc: string;
  benefit3Title: string;
  benefit3Desc: string;
  benefit4Title: string;
  benefit4Desc: string;
  priceLabel: string;
  priceNote: string;
  buyCta: string;
  includesTitle: string;
  includes: string[];
  trustLine: string;
  testFirst: string;
  testFirstDesc: string;
  testCta: string;
}> = {
  de: {
    heroTitle: "Mach deine Tippfähigkeiten offiziell",
    heroSubtitle: "Du hast den Tipptest gemacht - jetzt sichere dir dein Ergebnis. Nach dem Kauf bekommst du dein personalisiertes Zertifikat sofort als PDF per E-Mail.",
    heroHighlight: "Einmalig 5 Euro. Kein Abo.",
    previewTitle: "So sieht dein Zertifikat aus",
    previewSubtitle: "Professionell. Mit deinem Namen, Tempo, Genauigkeit und Datum.",
    benefit1Title: "Lebenslauf und LinkedIn",
    benefit1Desc: "Heb dich von anderen Bewerbern ab - mit einer nachweisbaren Fähigkeit.",
    benefit2Title: "Arbeitgeber überzeugen",
    benefit2Desc: "Belege dein Tipptempo schwarz auf weiss. Keine Selbsteinschätzung, echte Daten.",
    benefit3Title: "Teilen und zeigen",
    benefit3Desc: "Poste dein Ergebnis auf LinkedIn oder sende es direkt an HR.",
    benefit4Title: "Unbegrenzt wiederholbar",
    benefit4Desc: "Nicht zufrieden? Mach den Test nochmal - jeder Versuch ist inklusive.",
    priceLabel: "Tippzertifikat",
    priceNote: "Einmalzahlung, kein Abo",
    buyCta: "Zertifikat kaufen",
    includesTitle: "Enthalten:",
    includes: [
      "Personalisiertes PDF-Zertifikat",
      "Dein Name, WPM, Genauigkeit, Datum",
      "Sofort per E-Mail zugestellt",
      "Unbegrenzte Testwiederholungen",
    ],
    trustLine: "Sichere Zahlung über Stripe. Deine Daten bleiben bei dir.",
    testFirst: "Noch keinen Test gemacht?",
    testFirstDesc: "Mach zuerst den kostenlosen Tipptest - in wenigen Minuten weisst du, wo du stehst.",
    testCta: "Geschwindigkeit testen",
  },
  en: {
    heroTitle: "Make your typing skills official",
    heroSubtitle: "You took the typing test - now lock in your result. After purchase, you'll receive your personalised certificate instantly as a PDF via email.",
    heroHighlight: "One-time 5 euros. No subscription.",
    previewTitle: "This is what your certificate looks like",
    previewSubtitle: "Professional. With your name, speed, accuracy, and date.",
    benefit1Title: "CV and LinkedIn",
    benefit1Desc: "Stand out from other candidates - with a verifiable skill.",
    benefit2Title: "Convince employers",
    benefit2Desc: "Prove your typing speed with real data. No self-assessment, hard numbers.",
    benefit3Title: "Share and show",
    benefit3Desc: "Post your result on LinkedIn or send it directly to HR.",
    benefit4Title: "Unlimited retakes",
    benefit4Desc: "Not satisfied? Take the test again - every attempt is included.",
    priceLabel: "Typing certificate",
    priceNote: "One-time payment, no subscription",
    buyCta: "Buy certificate",
    includesTitle: "Included:",
    includes: [
      "Personalised PDF certificate",
      "Your name, WPM, accuracy, date",
      "Instant email delivery",
      "Unlimited test retakes",
    ],
    trustLine: "Secure payment via Stripe. Your data stays with you.",
    testFirst: "Haven't taken the test yet?",
    testFirstDesc: "Take the free typing test first - in just a few minutes you'll know where you stand.",
    testCta: "Take the typing test",
  },
  fr: {
    heroTitle: "Rends tes compétences de frappe officielles",
    heroSubtitle: "Tu as passé le test de frappe - maintenant garde ton résultat. Après l'achat, tu reçois ton certificat personnalisé instantanément en PDF par e-mail.",
    heroHighlight: "5 euros en une fois. Pas d'abonnement.",
    previewTitle: "Voici à quoi ressemble ton certificat",
    previewSubtitle: "Professionnel. Avec ton nom, ta vitesse, ta précision et la date.",
    benefit1Title: "CV et LinkedIn",
    benefit1Desc: "Démarque-toi des autres candidats - avec une compétence vérifiable.",
    benefit2Title: "Convaincre les employeurs",
    benefit2Desc: "Prouve ta vitesse de frappe avec des données réelles. Pas d'auto-évaluation, des chiffres.",
    benefit3Title: "Partager et montrer",
    benefit3Desc: "Publie ton résultat sur LinkedIn ou envoie-le directement aux RH.",
    benefit4Title: "Reprises illimitées",
    benefit4Desc: "Pas satisfait ? Repasse le test - chaque tentative est incluse.",
    priceLabel: "Certificat de frappe",
    priceNote: "Paiement unique, pas d'abonnement",
    buyCta: "Acheter le certificat",
    includesTitle: "Inclus :",
    includes: [
      "Certificat PDF personnalisé",
      "Ton nom, MPM, précision, date",
      "Livraison instantanée par e-mail",
      "Reprises de test illimitées",
    ],
    trustLine: "Paiement sécurisé via Stripe. Tes données restent chez toi.",
    testFirst: "Tu n'as pas encore passé le test ?",
    testFirstDesc: "Passe d'abord le test de frappe gratuit - en quelques minutes tu sauras où tu en es.",
    testCta: "Passer le test de frappe",
  },
};

const benefitIcons = [
  <svg key="cv" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="employer" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="share" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>,
  <svg key="retry" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
  </svg>,
];

export default async function CertificatePage({ params }: Props) {
  const { locale } = await params;
  const l = i18n[locale as Locale];

  const benefits = [
    { title: l.benefit1Title, desc: l.benefit1Desc },
    { title: l.benefit2Title, desc: l.benefit2Desc },
    { title: l.benefit3Title, desc: l.benefit3Desc },
    { title: l.benefit4Title, desc: l.benefit4Desc },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-14">

      {/* Hero + Pricing card - first thing visible */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: headline + subtitle */}
        <div className="space-y-4 md:pt-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {l.heroTitle}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            {l.heroSubtitle}
          </p>
          <p className="inline-block rounded-full bg-electric-yellow/20 px-4 py-1.5 text-sm font-semibold text-dark-text dark:text-white">
            {l.heroHighlight}
          </p>
        </div>

        {/* Right: Pricing card */}
        <div className="rounded-2xl border-2 border-indigo/20 bg-white dark:bg-dark-surface p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-indigo">{l.priceLabel}</p>
              <p className="text-lg font-bold text-dark-text dark:text-white mt-0.5">Fast Forward Typing</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-extrabold text-dark-text dark:text-white">5 <span className="text-2xl">€</span></p>
              <p className="text-xs text-zinc-400 mt-0.5">{l.priceNote}</p>
            </div>
          </div>

          <div className="border-t border-zinc-100 dark:border-dark-border pt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
              {l.includesTitle}
            </p>
            <ul className="space-y-2.5">
              {l.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-dark-text dark:text-zinc-300">
                  <svg className="w-4 h-4 mt-0.5 text-indigo flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stripe embed placeholder */}
          <div className="rounded-lg border-2 border-dashed border-zinc-200 dark:border-dark-border bg-zinc-50 dark:bg-dark/50 p-8 text-center">
            <svg className="w-8 h-8 mx-auto text-zinc-300 dark:text-zinc-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            <p className="text-xs text-zinc-400">Stripe Checkout</p>
          </div>

          <button
            disabled
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo px-6 py-3.5 text-base font-semibold text-white opacity-50 cursor-not-allowed"
          >
            {l.buyCta} <span className="text-electric-yellow">&gt;&gt;</span>
          </button>

          <p className="text-center text-xs text-zinc-400 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            {l.trustLine}
          </p>
        </div>
      </div>

      {/* Certificate preview + benefits */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Certificate visual */}
        <div className="space-y-4">
          <CertificateStackSVG locale={locale} />
        </div>

        {/* Right: Value props */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {l.previewTitle}
            </h2>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              {l.previewSubtitle}
            </p>
          </div>

          <div className="space-y-5">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center text-indigo">
                  {benefitIcons[i]}
                </div>
                <div>
                  <p className="font-semibold text-dark-text dark:text-white">{b.title}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA: Haven't taken the test yet? */}
      <div className="rounded-2xl bg-white dark:bg-dark-surface border border-zinc-200 dark:border-dark-border p-8 sm:p-10 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-dark-text dark:text-white">
          {l.testFirst}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          {l.testFirstDesc}
        </p>
        <a
          href={`/${locale}/speed-test`}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo px-8 py-3.5 text-base font-semibold text-white hover:bg-indigo/90 transition-colors"
        >
          {l.testCta} <span className="text-electric-yellow">&gt;&gt;</span>
        </a>
      </div>

      {/* FAQ */}
      <FAQ
        title={certificateFAQ[locale as Locale]?.title || certificateFAQ.en.title}
        items={certificateFAQ[locale as Locale]?.items || certificateFAQ.en.items}
      />
    </div>
  );
}
