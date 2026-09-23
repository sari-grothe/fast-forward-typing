# Article template: sidebar TOC + persistent CTA

Approved by Sarah 2026-09-23. Use this layout for any long-form content
page (guides, comparison pages, future content types) - not just the
current `/[locale]/resources/[slug]` articles it first shipped on.

## Why

Two SEO/AI-readability gaps closed by this template:

- Headings had no anchor `id`s at all, so sections couldn't be
  deep-linked or cited individually by search/AI answer engines.
- The only CTA sat after the full article body - easy to scroll past
  on a long guide, no conversion path visible while actually reading.

## What it looks like

Desktop (`lg:` and up): 3-column grid, `max-w-7xl` container,
`grid-cols-[240px_minmax(0,1fr)_300px]`, `gap-8`.

- **Left, sticky**: table of contents, auto-generated from the
  article's `##`/`###` headings. Highlights the current section on
  scroll (`IntersectionObserver`). Hides itself under 3 headings -
  don't force a TOC onto a short page.
- **Center**: the article body, unconstrained width within its grid
  cell (`min-w-0` so it doesn't push the sidebars around).
- **Right, sticky**: compact CTA card - course + speed test buttons,
  stacked full-width (not side by side; a 300px column has no room for
  two inline buttons). If the content is relevant to a business buyer
  (see below), a second card underneath links to the B2B page.

Mobile: the TOC collapses into a `<details>` dropdown above the
content instead of a sidebar. The CTA sidebar disappears entirely -
mobile relies on the existing full-width bottom CTA banner instead of
a floating or duplicated card. If a B2B link applies, it becomes a
single inline card (not sticky) placed right after the TOC dropdown,
since mobile readers would otherwise never see it.

## Column widths, don't shrink these

240px (TOC) / 300px (CTA) were tuned to fit real content without
wrapping or overflow - a first draft at 200px/240px squeezed TOC
entries onto 2-3 lines and overflowed the CTA button. `CtaButton` is
intentionally `whitespace-nowrap` sitewide (see its own comment) -
the fix for a long label is a wide-enough column, not fighting that
component's wrapping behavior.

## Building blocks

- `extractHeadings()` in the markdown lib pulls `{id, text, level}`
  from the same block-split logic the renderer itself uses, so the
  TOC and the rendered `<h2 id>`/`<h3 id>` can never drift into
  mismatched anchors. Both go through the same `slugify()`.
- `ArticleToc` (client component): renders the sticky nav + active-
  section highlighting. Takes `headings` and a `label`.
- `ArticleCtaCard` (server component): the sticky right-column card(s).
  Takes course/test labels plus an optional `team` prop
  (`{title, description, linkLabel, href}`) - pass this only when the
  content is relevant to a company buyer.

## B2B link trigger

Currently: `tip.category === "productivity"`. Time-savings and
professional-output content is the category that also makes sense to
a business buyer; the others (shortcuts, learning basics, mobile) are
individual-only. Widen this rule (e.g. include `comparisons`) only if
a specific page's content actually supports the B2B framing - don't
add the team CTA reflexively to everything.
