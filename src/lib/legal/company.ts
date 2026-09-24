import type { Locale } from "@/i18n/config";

// Single source of truth for every fact the legal texts state about the
// business. Fill the `null` values once (see docs/legal-golive.md) and all
// six legal documents in all three languages update together. Until a value
// is filled, the texts show a visible bracketed placeholder and the legal
// pages stay out of search engines (see missingCompanyFields / legalMetadata).
export const company = {
  legalName: "Sarah Grothe",
  tradeName: "Fast Forward Typing",
  domain: "fastforwardtyping.com",
  email: "support@fastforwardtyping.com",
  // Full postal address incl. country, e.g. "12 rue Exemple, 75000 Paris, France".
  // A commercial domiciliation address is allowed if the home address should not be public.
  address: "20 allée Georges Récipon, 75019 Paris, France" as string | null,
  // French law requires a phone number in the mentions légales of a professional.
  phone: "0171204266" as string | null,
  siret: null as string | null,
  // Only once registered for VAT (e.g. for EU one-stop-shop); micro-entreprise in franchise has none.
  vatId: null as string | null,
  // Mandatory for B2C sales from France (Code de la consommation L612-1): a consumer mediator.
  mediatorName: null as string | null,
  mediatorUrl: null as string | null,
  mediatorAddress: null as string | null,
};

export type CompanyKey = keyof typeof company;

const placeholders: Record<CompanyKey, Record<Locale, string>> = {
  legalName: { de: "[Name]", en: "[Name]", fr: "[Nom]" },
  tradeName: { de: "[Marke]", en: "[Brand]", fr: "[Marque]" },
  domain: { de: "[Domain]", en: "[Domain]", fr: "[Domaine]" },
  email: { de: "[E-Mail]", en: "[Email]", fr: "[E-mail]" },
  address: { de: "[Anschrift folgt]", en: "[Address to follow]", fr: "[Adresse à compléter]" },
  phone: { de: "[Telefonnummer folgt]", en: "[Phone number to follow]", fr: "[Numéro de téléphone à compléter]" },
  siret: { de: "[SIRET-Nummer folgt]", en: "[SIRET number to follow]", fr: "[Numéro SIRET à compléter]" },
  vatId: { de: "[USt-IdNr. folgt]", en: "[VAT ID to follow]", fr: "[N° de TVA à compléter]" },
  mediatorName: { de: "[Name des Verbrauchermediators folgt]", en: "[Consumer mediator name to follow]", fr: "[Nom du médiateur de la consommation à compléter]" },
  mediatorUrl: { de: "[Website des Mediators folgt]", en: "[Mediator website to follow]", fr: "[Site du médiateur à compléter]" },
  mediatorAddress: { de: "[Anschrift des Mediators folgt]", en: "[Mediator address to follow]", fr: "[Adresse du médiateur à compléter]" },
};

// vatId is genuinely optional: not having one is the normal state for a
// micro-entreprise, so it never counts as "missing".
const OPTIONAL: CompanyKey[] = ["vatId"];

export function missingCompanyFields(): CompanyKey[] {
  return (Object.keys(company) as CompanyKey[]).filter(
    (k) => company[k] === null && !OPTIONAL.includes(k)
  );
}

// Tokens that are computed from several fields instead of read one-to-one.
const computed: Record<string, Record<Locale, () => string>> = {
  vatLine: {
    de: () =>
      company.vatId
        ? `Umsatzsteuer-Identifikationsnummer: ${company.vatId}`
        : "Umsatzsteuer: Es wird keine Umsatzsteuer ausgewiesen (Kleinunternehmerregelung, \"franchise en base de TVA\", Art. 293 B des französischen Steuergesetzbuchs CGI).",
    en: () =>
      company.vatId
        ? `VAT identification number: ${company.vatId}`
        : "VAT: no VAT is charged (small-business exemption, \"franchise en base de TVA\", Art. 293 B of the French Tax Code, CGI).",
    fr: () =>
      company.vatId
        ? `Numéro de TVA intracommunautaire : ${company.vatId}`
        : "TVA non applicable, article 293 B du Code général des impôts (franchise en base de TVA).",
  },
  // Price note used in the terms: what "price" means with or without VAT.
  priceVatNote: {
    de: () =>
      company.vatId
        ? "Alle Preise verstehen sich inklusive der gesetzlichen Umsatzsteuer."
        : "Alle Preise sind Endpreise. Es wird keine Umsatzsteuer berechnet und ausgewiesen (Kleinunternehmerregelung, Art. 293 B CGI).",
    en: () =>
      company.vatId
        ? "All prices include statutory VAT."
        : "All prices are final prices. No VAT is charged or shown (small-business exemption, Art. 293 B CGI).",
    fr: () =>
      company.vatId
        ? "Tous les prix s'entendent toutes taxes comprises (TTC)."
        : "Tous les prix sont des prix nets. La TVA n'est pas applicable (article 293 B du CGI).",
  },
};

// Replaces {{key}} tokens with the configured value, or a visible
// placeholder when the value is still unset.
export function fillCompanyTokens(text: string, locale: Locale): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => {
    if (key in computed) return computed[key][locale]();
    if (!(key in company)) return match;
    const k = key as CompanyKey;
    return company[k] ?? placeholders[k][locale];
  });
}
