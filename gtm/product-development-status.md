# Product Development Status

Last updated: 2026-07-01

## Production-ready

- Speed Test (live WPM/accuracy tracking)
- 28-Lesson Course (9 phases, drills, keyboard visualization)
- 13 Blog Articles (4 DE, 4 EN, 5 FR)
- Keyboard Layout Comparison Tool (QWERTY/AZERTY/QWERTZ)
- Homepage + About page
- SEO infrastructure (dynamic sitemap, robots.txt, Schema.org, hreflang)
- i18n system (DE/EN/FR) with dictionary pattern
- Theme toggle (light/dark)
- KeyCharacter mascot (5 poses, configurable limb color)

## UI built, backend not wired

- Certificate page (design done, Stripe integration pending)
- Dashboard (stat cards UI, no data persistence)

## Not started

### Auth & Data
- User authentication (Supabase planned)
- Progress persistence (lesson completion, scores)
- Settings page

### Payments
- Stripe integration
- Payment webhooks (stubs exist)

### Product features
- Practice mode (free-form typing)
- Teachers section
- Companies/B2B section

### Legal & Compliance (required before public launch)
- Privacy policy (CNIL + GDPR)
- Terms of service
- Imprint/legal notice (Impressum)
- Cookie consent popup (DSGVO/GDPR requirement)

### Support
- Help page
- Contact page

## Known issues

- Footer links to 7 pages that don't exist yet (teachers, companies, help, contact, privacy, terms, imprint)
- ScrollReveal causes opacity-0 flash when IntersectionObserver doesn't fire immediately

## Estimated completion

Core product (typing tutor) works end-to-end. Commerce layer (auth, payments, progress) and legal pages are the main gaps before a public launch.
