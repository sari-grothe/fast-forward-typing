import { locales, localeNames, type Locale } from "@/i18n/config";
import { getLessons, lessonMeta, phaseNames } from "@/lib/lessons";
import { getTipsByLocale } from "@/lib/tips";
import { homeFAQ } from "@/lib/faq-data";

// Machine-readable site knowledge for AI agents (llms.txt standard,
// https://llmstxt.org). Served by src/app/llms.txt/route.ts and
// src/app/llms-full.txt/route.ts.
//
// Everything derivable is generated from the same sources as the site
// (curricula, tips, FAQ) and stays current on its own. Only the FACTS
// block below is hand-written: update it when positioning, pricing or
// major features change.

const BASE_URL = "https://fastforwardtyping.com";

const LAYOUT_BY_LOCALE: Record<Locale, string> = {
  de: "QWERTZ",
  en: "QWERTY",
  fr: "AZERTY",
};

// Hand-maintained core facts. Keep in sync with the live product -
// see CLAUDE.md ("llms.txt maintenance").
const FACTS = `- Fast Forward >> Typing is a web-based touch-typing course for adults.
- Available in German (QWERTZ keyboard layout), English (QWERTY) and French (AZERTY). Each language has its own curriculum written for its keyboard layout, not a translation.
- Unique approach: an adaptive placement test ("Einstufung") measures per-key accuracy and speed, then builds an individual training plan. Learners who already master some keys get a suggestion to skip those lessons; every lesson stays accessible.
- Each lesson includes a short learning-science note ("Gut zu wissen") explaining why the practice method works (myelination, spacing effect, chunking).
- The typing course and speed test are free. An official typing certificate (speed + accuracy) costs a one-time fee of 5 euros. No subscriptions.
- Works with any keyboard (laptop, desktop, mechanical). Runs in the browser, no installation.
- Typical outcome: noticeable improvement after 2-3 weeks of 10-15 minutes daily practice.`;

const STATIC_PAGES: { path: string; label: string; note: string }[] = [
  { path: "", label: "Home", note: "product overview, how it works, FAQ" },
  { path: "/placement", label: "Placement test", note: "adaptive skill assessment, builds the individual training plan" },
  { path: "/speed-test", label: "Typing speed test", note: "free WPM and accuracy test" },
  { path: "/lessons", label: "Course", note: "full touch-typing curriculum" },
  { path: "/tips", label: "Guides", note: "articles on typing technique, shortcuts and productivity" },
  { path: "/tools/keyboard-layouts", label: "Keyboard layouts", note: "QWERTZ, QWERTY and AZERTY compared" },
  { path: "/about", label: "About", note: "who is behind Fast Forward >> Typing" },
];

function localeLine(): string {
  return locales
    .map((l) => `${localeNames[l]} (${LAYOUT_BY_LOCALE[l]}): ${BASE_URL}/${l}`)
    .join("\n");
}

export function buildLlmsTxt(): string {
  const lessonCount = getLessons("en").length;

  const pages = STATIC_PAGES.map(
    (p) => `- [${p.label}](${BASE_URL}/en${p.path}): ${p.note}`
  ).join("\n");

  const guides = getTipsByLocale("en")
    .map((t) => `- [${t.title}](${BASE_URL}/en/tips/${t.slug}): ${t.description}`)
    .join("\n");

  return `# Fast Forward >> Typing

> Adaptive touch-typing course for adults in German (QWERTZ), English (QWERTY) and French (AZERTY). A placement test measures what you already master and builds an individual training plan through ${lessonCount} lessons. Course and speed test are free; an official certificate costs 5 euros one-time.

## Facts

${FACTS}

## Languages

${localeLine()}
Pages exist in all three languages: replace /en/ in any URL with /de/ or /fr/.

## Pages

${pages}

## Guides

${guides}

## Full reference

- [llms-full.txt](${BASE_URL}/llms-full.txt): complete machine-readable knowledge base (curriculum, method, FAQ)
`;
}

export function buildLlmsFullTxt(): string {
  const sections: string[] = [];

  sections.push(`# Fast Forward >> Typing - full reference for AI agents

> This file is generated from the same data sources as the website and reflects the current state of the product. Short version: ${BASE_URL}/llms.txt

## What Fast Forward >> Typing is

${FACTS}

## Method

1. Placement test: three short rounds of natural prose measure per-key accuracy and speed. Keys are classified as solid, shaky or needs-training.
2. Individual plan: lessons whose keys are already solid are SUGGESTED as skippable (never locked away). Learners without a touch-typing base get an honest recommendation to start from lesson 0.
3. Course: progressive lessons from the home row outward, each introducing few new keys with drills (keys, words, sentences) and a completion threshold.
4. Every lesson carries a short learning-science note so adult learners understand why the method works.

## Languages

${localeLine()}
Each locale has its own curriculum authored for its keyboard layout.`);

  for (const locale of locales) {
    const lessons = getLessons(locale);
    const phases = phaseNames[locale];
    const meta = lessonMeta[locale];

    const byPhase = new Map<number, string[]>();
    for (const lesson of lessons) {
      const title = meta[lesson.id]?.title ?? `Lesson ${lesson.id}`;
      const keys = lesson.newKeys.length > 0 ? ` (new keys: ${lesson.newKeys.join(", ")})` : "";
      const list = byPhase.get(lesson.phase) ?? [];
      list.push(`  - Lesson ${lesson.id}: ${title}${keys}`);
      byPhase.set(lesson.phase, list);
    }

    const phaseBlocks = [...byPhase.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([phase, lines]) => `- Phase ${phase}: ${phases[phase] ?? ""}\n${lines.join("\n")}`)
      .join("\n");

    sections.push(`## Curriculum ${localeNames[locale]} (${LAYOUT_BY_LOCALE[locale]}, ${lessons.length} lessons)

${phaseBlocks}`);
  }

  const guides = getTipsByLocale("en")
    .map((t) => `- [${t.title}](${BASE_URL}/en/tips/${t.slug}) (${t.category}): ${t.description}`)
    .join("\n");
  sections.push(`## Guides (English editions; German and French exist under /de/tips and /fr/tips)

${guides}`);

  const faq = homeFAQ["en"];
  if (faq) {
    const items = faq.items
      .map((i) => `### ${i.question}\n\n${i.answer}`)
      .join("\n\n");
    sections.push(`## FAQ\n\n${items}`);
  }

  sections.push(`## Contact and pages

${STATIC_PAGES.map((p) => `- ${p.label}: ${BASE_URL}/en${p.path}`).join("\n")}`);

  return sections.join("\n\n") + "\n";
}
