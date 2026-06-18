# Fast Forward >> Typing

Trilingual typing tutor for adults (DE/EN/FR).

## Tech Stack

- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4
- Supabase (auth + DB), Stripe (payments), Resend (emails)
- Vercel hosting, Google Analytics (behind cookie consent)

## i18n

- Routes: /[locale]/... with locale = de | en | fr
- Middleware auto-redirects based on browser Accept-Language
- Dictionaries: src/i18n/dictionaries/{locale}.json
- Every page must exist in all three languages
- URL slugs are language-native (e.g. /de/tipptest, /en/typing-test, /fr/test-de-frappe)
- hreflang tags in locale layout for SEO

## Design and Brand Voice

**Read [DESIGN.md](DESIGN.md) before building any UI, writing any copy, or producing any branded surface.** It contains the complete visual identity (colors, typography, design direction) and tone of voice (per-language guidelines, humor model, copy examples, consistency checks).

Quick reference:
- Dark mode default, Linear/Superhuman aesthetic
- Font: Poppins (Google Fonts)
- Colors: indigo #3f0ff2, peach #f8a37c, electric yellow #edf656, lavender #eeecfe
- Tone: positive, data-driven, punchy. Never call someone out. Never remind where they started.

## Legal (French auto-entrepreneur)

- DSGVO/RGPD compliant: cookie banner before GA loads
- Required pages: mentions legales (with SIRET), CGV, privacy policy
- All legal pages in all three languages

## Conventions

- Push directly to main, no PRs
- Never use em dashes
- Never make up product copy - ask if unclear
- Planning docs (research, competitor analysis, engineering plan, decisions, persona) live in sari-grothe/business-ideas (private) under fast-forward-typing/type/. Read them before building anything - they contain product decisions, sprint plan, persona, and positioning.
- **Always read fast-forward-typing/type/persona.md before writing any copy.** It defines the target audience, messaging rules, and anti-personas.
