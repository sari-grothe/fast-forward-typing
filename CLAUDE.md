# Fast Forward >> Typing

Trilingual typing tutor for adults (DE/EN/FR).

## Tech Stack

- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4
- Supabase (auth + DB), Stripe (payments), Resend (emails)
- Vercel hosting, Google Analytics (behind cookie consent)
- B2B contact form: Formspree, no backend. Setup and fields in [docs/contact-form-formspree.md](docs/contact-form-formspree.md)

## i18n

- Routes: /[locale]/... with locale = de | en | fr
- Middleware auto-redirects based on browser Accept-Language
- Dictionaries: src/i18n/dictionaries/{locale}.json
- Every page must exist in all three languages
- URL slugs are language-native (e.g. /de/tippgeschwindigkeit, /en/speed-test, /fr/test-de-dactylographie). The folder under src/app/[locale] keeps the English segment; the public slug lives in `pageRoutes` in src/i18n/routes.ts and next.config.ts generates rewrites + 301s from it. Never hardcode `/${locale}/speed-test` in a link, canonical or sitemap entry - use `localizedPath(locale, "speedTest")`.
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
- Required pages: mentions legales (with SIRET), CGV, privacy policy. All six legal texts (imprint, privacy incl. cookies, terms, withdrawal, business-terms, dpa) live in `src/lib/legal/`, business facts in `src/lib/legal/company.ts` - read [docs/legal-golive.md](docs/legal-golive.md) before touching them. Never type SIRET/address into a text, use the `{{tokens}}`; change all three languages in one commit.
- All legal pages in all three languages

## llms.txt maintenance

/llms.txt and /llms-full.txt are generated routes (src/lib/llms.ts). Lessons, guides and FAQ flow in automatically from their data sources - do not duplicate them. But the hand-written FACTS block and STATIC_PAGES list in src/lib/llms.ts MUST be updated whenever positioning, pricing, major features or top-level pages change (e.g. paywall goes live, B2B pages launch, new tools). Treat this as part of the definition of done for any such change.

## Final checks ("komplette Prüfung")

When Sarah asks for a complete or final check, "checked" means the full audit
ran green, nothing less:

1. `python3 scripts/audit/crawl.py` - every sitemap URL plus every internal
   link (status, canonical, hreflang self-reference + x-default, title and
   description lengths, single H1, og:image, JSON-LD parses, img alt, native
   slugs in links, no redirect chains, legacy redirects, robots/llms, 404,
   security headers). Exit 0 required.
2. `sh scripts/audit/lighthouse-all.sh` - Lighthouse mobile on every sitemap
   URL plus lesson and legal pages, all three locales. Thresholds: A11y, Best
   Practices, SEO 100; Performance >= 90; LCP < 2.5 s; CLS < 0.1. Exit 0.
3. Report the numbers, including what the scripts do not cover (content depth,
   backlinks, Search Console data). Never call a sample of pages "geprüft".

Lesson from 2026-09-24: three "final" checks in a row each sampled 4-6 pages
and missed a CLS bug, a contrast bug, streamed metadata on the certificate
page and a 404 apple-touch-icon that the full run found immediately.

## Parallel sessions: one worktree per session (rule since 2026-09-25)

Sarah runs several Claude sessions on this repo at once. They must never share
a working tree: a shared folder means shared uncommitted changes, a shared
`.next` (one session's `next build` crashed another's dev server with 500s on
2026-09-25) and commits of one session rewritten or pushed by another.

**Session start (first action, before reading or editing anything):**
1. If the session is not already in a worktree the desktop app made for it,
   call `EnterWorktree` with a short topic name (e.g. `helpcenter`). That
   creates `.claude/worktrees/<name>` on its own branch from origin/main.
2. `cp ../../../.env.local .` (env files are not in git) and `npm install`.
3. Dev server: never port 3000 from a worktree, that belongs to the main
   folder. Use `fft-dev-3001` / `fft-dev-3002` / `fft-dev-3003` from
   `.claude/launch.json`; take the first free one (`lsof -i :3001`).
4. Tell Sarah in one line: worktree name, branch, port.

**While working:** commit only on the session's own branch. `next build` is
fine inside the own worktree (own `.next`). Never touch another worktree,
never run git commands that change the main folder's checkout.

**Shipping to main (Sarah says "pushen"/"live"):**
1. `git fetch && git rebase origin/main` inside the worktree; resolve
   conflicts there (typical hotspots: `src/i18n/dictionaries/*.json`).
2. `npx tsc --noEmit -p .` must pass.
3. `git push origin HEAD:main`. Vercel deploys main.
4. Report the pushed hashes. Never push, rebase or amend commits that another
   session made.

**Session end:** after the push, `ExitWorktree` with `remove` (refuses if
anything is unpushed, then ask Sarah).

The main folder `~/Claude/Fast-Forward-Typing` stays on `main` and is only a
base; no session edits files there.

## Conventions

- Push directly to main, no PRs
- Never use em dashes
- Never make up product copy - ask if unclear
- Planning docs (research, competitor analysis, engineering plan, decisions, persona) live in sari-grothe/business-ideas (private) under fast-forward-typing/type/. Read them before building anything - they contain product decisions, sprint plan, persona, and positioning.
- **Always read fast-forward-typing/type/persona.md before writing any copy.** It defines the target audience, messaging rules, and anti-personas.
- **Always read [docs/copywriting-de.md](docs/copywriting-de.md) before writing or changing any German UI copy** (nav labels, page titles, buttons, meta titles/descriptions). It has the approved-vocabulary glossary derived from the SEO keyword research, and the process for picking new terms - don't re-derive keyword-driven wording decisions from scratch, and don't guess at what "sounds right" in German for a label without checking it first.
- **Every new content piece follows the internal linking rules in [docs/article-template.md](docs/article-template.md#internal-linking-mandatory-since-2026-09-24)**: at least 3 contextual body links written as `page:`/`article:` keys (never hardcoded URLs), at least one to a product page and one to another article, plus links TO the new piece from two existing pages. The build fails if an article breaks the minimum. Every number needs a linked source.
- **Cheat-sheet PDFs are generated, not hand-made.** Every `type: "lead-magnet"` article gets a branded A4 worksheet from `npx tsx scripts/cheatsheets/build.ts` (headless Chrome, needs network for Poppins) into `public/downloads/<slug>.pdf`, served after the email gate. Re-run and commit the PDFs whenever a lead-magnet article changes; never link a lead magnet to the printed web page.
- **There is no About page** (Sarah's decision 2026-09-24). Its old URLs redirect to the locale home in next.config.ts. Don't recreate it or link to it.
- **Any new long-form content page (guides, comparison pages, future content types) uses the article template in [docs/article-template.md](docs/article-template.md)** - sticky left TOC, sticky right CTA card, optional B2B link for business-relevant content. Approved standard as of 2026-09-23, don't design a one-off layout for new article-style pages.
