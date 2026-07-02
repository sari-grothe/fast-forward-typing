# German Copywriting & Vocabulary Rules

This file is the single source of truth for **which German words to use for UI labels** (nav items, page H1s, buttons, meta titles/descriptions). It exists because the same terminology mistakes ("Tippkurs" has zero search volume, "Tipptest" vs "Tippgeschwindigkeit" inconsistency) got made and re-made across multiple sessions before this was written down. Read this before writing or changing any DE UI copy - not just when told to.

For brand voice, tone, and how to *phrase* a sentence, see [DESIGN.md](../DESIGN.md) instead. This file is about *which word* to use, not how to say it.

## Process: how to pick a UI label

1. **Check the keyword research first.** It lives in the private `sari-grothe/business-ideas` repo, under `fast-forward-typing/type/research/` - specifically `ahrefs-keyword-analysis.md`, `long-tail-keywords.md`, and `content-gap-analysis.md`. Look up search volume (Vol/mo) and difficulty (KD) for every candidate term before choosing between synonyms. Don't guess or rely on what "sounds right" in German - the data has repeatedly overturned that (see: "Tippkurs" sounds fine, has ~0 search volume).
2. **Check what the page actually contains before matching it to a keyword.** A high-volume keyword is a bad label if it misdescribes the content (see: "Übungen" was keyword-plausible for the `/tips` hub but wrong - that page is guides/blog content, not drill exercises, so "Ressourcen" was correct despite weaker keyword grounding).
3. **Nav label, page H1, and every button linking to that page must use the same term**, or a term explicitly chosen for semantic-coverage reasons (see Tippgeschwindigkeit/Tipptest below). Prose *inside* a page can still legitimately use a close synonym - the rule is about title-position and button-position text, not every sentence.
4. **After changing a term, grep the whole repo for the old one before calling it done.** `grep -rn "<old term>" src` across `.tsx/.ts/.json`. A single-file fix has repeatedly missed instances in FAQ data, component-local `i18n` objects (e.g. `SpeedTest.tsx`, `TestimonialSlider.tsx` each have their own inline translation tables, not just the shared dictionaries), and page-specific metadata.
5. **Use the `page-cro` and `copywriting` skills** when touching a whole page or section, not just the isolated string - they catch structural/hierarchy issues a word-for-word check won't.

## Approved vocabulary (DE)

| Concept | ✅ Use | ❌ Avoid | Why |
|---|---|---|---|
| Speed test page - nav, H1, page/FAQ titles | **Tippgeschwindigkeit** | Tipptest *(in titles/buttons)* | `tippgeschwindigkeit` 2.000/mo KD 1-2 vs `tipptest` 1.600/mo KD 0 - both strong, Tippgeschwindigkeit chosen for the primary nav-adjacent term. `Tipptest` is still fine in flowing body prose (it's a legitimate keyword on its own) - just don't let it end up as a title or button right next to nav copy that says Tippgeschwindigkeit. |
| Course/lessons - nav, H1, buttons | **Kurs starten** / **10-Finger-System lernen** / **10-Finger-System-Kurs** | Tippkurs | `tippkurs` has ~0 measured search volume - nobody searches this. `10 finger schreiben lernen` = 15.000/mo (the single biggest keyword in the whole dataset), `10 finger system` = 1.600/mo. |
| Tips/blog hub - nav, H1 | **Ressourcen** | Tipptipps, Übungen | "Tipptipps" is an ungrounded alliteration with no search volume behind it. "Übungen" has real keyword volume (`tippen üben` 600/mo) but describes the wrong content type - this hub is guides/blog articles (learning, shortcuts, productivity, mobile), not practice drills. Category/hub labels usually have no dedicated search volume of their own (normal - the SEO targeting happens on individual articles), so match the actual content over forcing a keyword fit. |
| Keyboard layout tool | **Tastaturlayout** / **Layout** | - | `layout deutsch` 700/mo KD 0. FR: bare `qwerty` is 11.000/mo KD 1 in France - the single biggest keyword-content-match opportunity found so far; make sure FR title/meta lead with it. |

## Known trap: component-local translation tables

Several components keep their own `i18n`/`Record<Locale, ...>` object instead of reading from `src/i18n/dictionaries/*.json` - e.g. `SpeedTest.tsx`, `TestimonialSlider.tsx`, `KeyboardComparison.tsx`, `lessons/page.tsx`, `certificate/page.tsx`. A vocabulary fix in the shared dictionary **does not** propagate to these. When renaming a term, grep across `src/components/`, `src/lib/`, and every `src/app/**/page.tsx`, not just `src/i18n/dictionaries/`.

## EN/FR

This file only covers DE so far, matched to the DE-market keyword research that exists today. EN/FR vocabulary decisions haven't had the same keyword pass - don't assume the DE choices transfer directly (search behavior differs per market), and don't leave EN/FR copy structurally broken if a DE-only content/layout change touches shared components (see: the productivity section redesign required updating EN/FR dictionary schemas too, even though the copy tone-of-voice pass was DE-only).
