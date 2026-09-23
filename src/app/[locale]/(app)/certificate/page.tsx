import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { FAQ } from "@/components/FAQ";
import { certificateFAQ } from "@/lib/faq-data";
import { CertificateStackSVG } from "@/components/CertificateStackSVG";
import { WaitlistForm } from "@/components/WaitlistForm";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ wpm?: string; accuracy?: string }>;
};

const meta: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "Tippzertifikat - deine Tippgeschwindigkeit offiziell bestätigen",
    description: "Sichere dir dein Tippzertifikat mit WPM, Genauigkeit und Datum - ideal für Lebenslauf und LinkedIn. Trag dich jetzt kostenlos in die Warteliste ein.",
  },
  en: {
    title: "Typing Certificate - Prove Your Typing Speed Officially",
    description: "Get your typing certificate with WPM, accuracy and date - perfect for your CV and LinkedIn. Join the free waitlist now.",
  },
  fr: {
    title: "Certificat de frappe - officialise ta vitesse",
    description: "Obtiens ton certificat de dactylographie avec MPM, précision et date - parfait pour ton CV et LinkedIn. Inscris-toi gratuitement sur la liste d'attente.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;

  return {
    title: `${m.title} - Fast Forward >> Typing`,
    description: m.description,
    openGraph: { title: m.title, description: m.description, type: "website" },
    alternates: {
      canonical: `https://fastforwardtyping.com/${locale}/certificate`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/certificate`])),
    },
  };
}

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
  founderNote: string;
  includesTitle: string;
  includes: string[];
  trustLine: string;
  yourResultLabel: string;
  emailPlaceholder: string;
  waitlistSubmit: string;
  waitlistSending: string;
  waitlistError: string;
  waitlistSuccessTitle: string;
  waitlistSuccessText: string;
  testFirst: string;
  testFirstDesc: string;
  testCta: string;
}> = {
  de: {
    heroTitle: "Mach deine Tippfähigkeiten offiziell",
    heroSubtitle: "Du hast deine Tippgeschwindigkeit gemessen - bald sicherst du dir dein Ergebnis offiziell. Trag dich ein, dann bekommst du dein personalisiertes Zertifikat als PDF per E-Mail, sobald es verfügbar ist.",
    heroHighlight: "Einmalig 5 Euro. Kein Abo.",
    previewTitle: "So sieht dein Zertifikat aus",
    previewSubtitle: "Professionell. Mit deinem Namen, Tempo, Genauigkeit und Datum.",
    benefit1Title: "Lebenslauf und LinkedIn",
    benefit1Desc: "Heb dich von anderen Bewerbern ab - mit einer nachweisbaren Fähigkeit.",
    benefit2Title: "Arbeitgeber überzeugen",
    benefit2Desc: "Belege deine Tippgeschwindigkeit schwarz auf weiss. Keine Selbsteinschätzung, echte Daten.",
    benefit3Title: "Teilen und zeigen",
    benefit3Desc: "Poste dein Ergebnis auf LinkedIn oder sende es direkt an HR.",
    benefit4Title: "Unbegrenzt wiederholbar",
    benefit4Desc: "Nicht zufrieden? Mach den Test nochmal - jeder Versuch ist inklusive.",
    priceLabel: "Tippzertifikat",
    priceNote: "Einmalzahlung, kein Abo",
    founderNote: "Trag dich jetzt ein und sichere dir diesen Preis fest, auch wenn er später steigt.",
    includesTitle: "Enthalten:",
    includes: [
      "Personalisiertes PDF-Zertifikat",
      "Dein Name, WPM, Genauigkeit, Datum",
      "Sofort per E-Mail zugestellt",
      "Unbegrenzte Testwiederholungen",
    ],
    trustLine: "Keine Zahlungsdaten nötig. Nur deine E-Mail.",
    yourResultLabel: "Dein Ergebnis",
    emailPlaceholder: "Deine E-Mail-Adresse",
    waitlistSubmit: "Auf die Warteliste",
    waitlistSending: "Wird eingetragen ...",
    waitlistError: "Das hat nicht geklappt. Nochmal versuchen?",
    waitlistSuccessTitle: "Du bist auf der Liste",
    waitlistSuccessText: "Wir schreiben dir, sobald das Zertifikat verfügbar ist. Dein Preis von 5 € ist dir sicher.",
    testFirst: "Noch keinen Test gemacht?",
    testFirstDesc: "Miss zuerst kostenlos deine Tippgeschwindigkeit - in wenigen Minuten weisst du, wo du stehst.",
    testCta: "Geschwindigkeit testen",
  },
  en: {
    heroTitle: "Get your official typing certificate",
    heroSubtitle: "You took the typing test - soon you'll be able to lock in your result officially. Sign up and you'll get your personalised certificate as a PDF by email as soon as it's ready.",
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
    founderNote: "Sign up now and this price is locked in for you, even if it goes up later.",
    includesTitle: "Included:",
    includes: [
      "Personalised PDF certificate",
      "Your name, WPM, accuracy, date",
      "Instant email delivery",
      "Unlimited test retakes",
    ],
    trustLine: "No payment details needed. Just your email.",
    yourResultLabel: "Your result",
    emailPlaceholder: "Your email address",
    waitlistSubmit: "Join the waitlist",
    waitlistSending: "Adding you ...",
    waitlistError: "That didn't work. Try again?",
    waitlistSuccessTitle: "You're on the list",
    waitlistSuccessText: "We'll email you the moment the certificate is ready. Your 5 EUR price is locked in.",
    testFirst: "Haven't taken the test yet?",
    testFirstDesc: "Take the free typing test first - in just a few minutes you'll know where you stand.",
    testCta: "Take the typing test",
  },
  fr: {
    heroTitle: "Rends tes compétences de frappe officielles",
    heroSubtitle: "Tu as passé le test de dactylographie - bientôt tu pourras garder ton résultat officiellement. Inscris-toi et tu reçois ton certificat personnalisé en PDF par e-mail dès qu'il est disponible.",
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
    founderNote: "Inscris-toi maintenant et garde ce prix, même s'il augmente plus tard.",
    includesTitle: "Inclus :",
    includes: [
      "Certificat PDF personnalisé",
      "Ton nom, MPM, précision, date",
      "Livraison instantanée par e-mail",
      "Reprises de test illimitées",
    ],
    trustLine: "Pas de données de paiement nécessaires. Juste ton e-mail.",
    yourResultLabel: "Ton résultat",
    emailPlaceholder: "Ton adresse e-mail",
    waitlistSubmit: "Rejoindre la liste d'attente",
    waitlistSending: "Inscription ...",
    waitlistError: "Ça n'a pas marché. Réessayer ?",
    waitlistSuccessTitle: "Tu es sur la liste",
    waitlistSuccessText: "On t'écrit dès que le certificat est disponible. Ton prix de 5 € est garanti.",
    testFirst: "Tu n'as pas encore passé le test ?",
    testFirstDesc: "Passe d'abord le test de dactylographie gratuit - en quelques minutes tu sauras où tu en es.",
    testCta: "Passer le test de dactylographie",
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

export default async function CertificatePage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { wpm, accuracy } = await searchParams;
  const l = i18n[locale as Locale];
  const hasResult = wpm && accuracy;

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

          {hasResult && (
            <div className="rounded-lg bg-indigo/5 dark:bg-indigo/10 px-4 py-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{l.yourResultLabel}</span>
              <span className="text-sm font-bold text-dark-text dark:text-white">{wpm} WPM · {accuracy}%</span>
            </div>
          )}

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

          <WaitlistForm
            locale={locale}
            product="certificate"
            extra={hasResult ? { wpm: wpm as string, accuracy: accuracy as string } : undefined}
            labels={{
              emailPlaceholder: l.emailPlaceholder,
              submit: l.waitlistSubmit,
              sending: l.waitlistSending,
              error: l.waitlistError,
              successTitle: l.waitlistSuccessTitle,
              successText: l.waitlistSuccessText,
            }}
          />

          <p className="text-center text-xs text-zinc-400">{l.founderNote}</p>

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
