import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { FAQ } from "@/components/FAQ";
import { certificateFAQ } from "@/lib/faq-data";

type Props = {
  params: Promise<{ locale: string }>;
};

const i18n: Record<Locale, {
  title: string;
  subtitle: string;
  benefit1Title: string;
  benefit1Desc: string;
  benefit2Title: string;
  benefit2Desc: string;
  benefit3Title: string;
  benefit3Desc: string;
  stripeNote: string;
  upgradeNote: string;
}> = {
  en: {
    title: "Make your typing skills official",
    subtitle: "A verified certificate for your speed and accuracy.",
    benefit1Title: "Add it to your CV or LinkedIn",
    benefit1Desc: "Stand out from other candidates.",
    benefit2Title: "Share it with employers",
    benefit2Desc: "The certificate proves your typing speed and accuracy.",
    benefit3Title: "Share your achievement",
    benefit3Desc: "Post your results on social media or send them to friends.",
    stripeNote: "Stripe checkout will be embedded here.",
    upgradeNote: "To get a certificate, purchase it separately or upgrade to Fast Forward Pro, which includes certificates.",
  },
  de: {
    title: "Mach deine Tippfähigkeiten offiziell",
    subtitle: "Ein verifiziertes Zertifikat für dein Tempo und deine Genauigkeit.",
    benefit1Title: "Füge es deinem Lebenslauf oder LinkedIn hinzu",
    benefit1Desc: "Heb dich von anderen Bewerbern ab.",
    benefit2Title: "Teile es mit Arbeitgebern",
    benefit2Desc: "Das Zertifikat belegt dein Tipptempo und deine Genauigkeit.",
    benefit3Title: "Teile deine Leistung",
    benefit3Desc: "Poste deine Ergebnisse in sozialen Medien oder sende sie an Freunde.",
    stripeNote: "Stripe Checkout wird hier eingebettet.",
    upgradeNote: "Für ein Zertifikat kaufe es einzeln oder upgrade auf Fast Forward Pro, das Zertifikate enthält.",
  },
  fr: {
    title: "Rends tes compétences de frappe officielles",
    subtitle: "Un certificat vérifié pour ta vitesse et ta précision.",
    benefit1Title: "Ajoute-le à ton CV ou LinkedIn",
    benefit1Desc: "Démarque-toi des autres candidats.",
    benefit2Title: "Partage-le avec des employeurs",
    benefit2Desc: "Le certificat prouve ta vitesse de frappe et ta précision.",
    benefit3Title: "Partage ta réussite",
    benefit3Desc: "Publie tes résultats sur les réseaux sociaux ou envoie-les à tes amis.",
    stripeNote: "Stripe Checkout sera intégré ici.",
    upgradeNote: "Pour obtenir un certificat, achète-le séparément ou passe à Fast Forward Pro, qui inclut les certificats.",
  },
};

export default async function CertificatePage({ params }: Props) {
  const { locale } = await params;
  const l = i18n[locale as Locale];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: value props */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">{l.title}</h1>
            <p className="mt-3 text-zinc-400">{l.subtitle}</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white">{l.benefit1Title}</p>
                <p className="text-sm text-zinc-400 mt-0.5">{l.benefit1Desc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white">{l.benefit2Title}</p>
                <p className="text-sm text-zinc-400 mt-0.5">{l.benefit2Desc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white">{l.benefit3Title}</p>
                <p className="text-sm text-zinc-400 mt-0.5">{l.benefit3Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Stripe checkout placeholder */}
        <div className="rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-zinc-400">Typing certificate</p>
              <p className="text-lg font-bold text-dark-text dark:text-white">Fast Forward Typing</p>
            </div>
            <p className="text-2xl font-bold text-dark-text dark:text-white">5 €</p>
          </div>

          {/* Stripe embed placeholder */}
          <div className="rounded-lg border-2 border-dashed border-zinc-300 dark:border-dark-border bg-zinc-50 dark:bg-dark/50 p-12 text-center">
            <svg className="w-10 h-10 mx-auto text-zinc-300 dark:text-zinc-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            <p className="text-sm text-zinc-400">{l.stripeNote}</p>
          </div>

          <button
            disabled
            className="mt-6 w-full rounded-lg bg-indigo px-6 py-3 text-sm font-semibold text-white opacity-50 cursor-not-allowed"
          >
            Buy your certificate
          </button>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-zinc-400">
        {l.upgradeNote}
      </p>

      <div className="mt-16">
        <FAQ title={certificateFAQ[locale as Locale]?.title || certificateFAQ.en.title} items={certificateFAQ[locale as Locale]?.items || certificateFAQ.en.items} />
      </div>
    </div>
  );
}
