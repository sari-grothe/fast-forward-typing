import type { LegalDocs, LegalKey } from "../types";
import { imprintDe } from "./imprint.de";
import { imprintEn } from "./imprint.en";
import { imprintFr } from "./imprint.fr";
import { privacyDe } from "./privacy.de";
import { privacyEn } from "./privacy.en";
import { privacyFr } from "./privacy.fr";
import { termsDe } from "./terms.de";
import { termsEn } from "./terms.en";
import { termsFr } from "./terms.fr";
import { withdrawalDe } from "./withdrawal.de";
import { withdrawalEn } from "./withdrawal.en";
import { withdrawalFr } from "./withdrawal.fr";
import { businessTermsDe } from "./business-terms.de";
import { businessTermsEn } from "./business-terms.en";
import { businessTermsFr } from "./business-terms.fr";
import { dpaDe } from "./dpa.de";
import { dpaEn } from "./dpa.en";
import { dpaFr } from "./dpa.fr";

export const legalDocs: Record<LegalKey, LegalDocs> = {
  imprint: { de: imprintDe, en: imprintEn, fr: imprintFr },
  privacy: { de: privacyDe, en: privacyEn, fr: privacyFr },
  terms: { de: termsDe, en: termsEn, fr: termsFr },
  withdrawal: { de: withdrawalDe, en: withdrawalEn, fr: withdrawalFr },
  "business-terms": { de: businessTermsDe, en: businessTermsEn, fr: businessTermsFr },
  dpa: { de: dpaDe, en: dpaEn, fr: dpaFr },
};
