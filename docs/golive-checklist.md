# Go-Live-Checkliste

Vor dem öffentlichen Launch / ersten Verkauf abarbeiten. Stand: 2026-07-06.

## Infrastruktur (Sarah, Vercel-Dashboard)

- [ ] **Vercel Speed Insights aktivieren** (Project → Speed Insights → Enable)
- [ ] **Vercel Web Analytics aktivieren** (Project → Analytics → Enable)
- [ ] **fastforwardtyping.com als Production-Domain verbinden** - aktuell läuft Production auf `skip-the-manual.vercel.app` (alter Projektname)
- [ ] Supabase-Projekt anlegen + Keys in Vercel-Env-Vars (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`)
- [ ] Stripe-Konto + Produkte anlegen (Kurs 29 EUR Lifetime, Zertifikat 5 EUR) + Keys in Env-Vars

## Rechtliches (Pflicht für DE-Markt)

- [ ] **Impressum** (`/imprint` ist verlinkt, Seite existiert nicht - Impressumspflicht!)
- [ ] **Datenschutzerklärung** (`/privacy` verlinkt, existiert nicht - DSGVO)
- [ ] AGB (`/terms` verlinkt, existiert nicht - nötig sobald verkauft wird)
- [ ] Cookie-Banner vor GA-Load (laut CLAUDE.md geplant)

## Content / Vertrauen

- [ ] **Testimonial-Freigaben einholen**: Thomas L., Eva S., Lino M., Lola L. haben die Texte gesehen und freigegeben (Texte sind vorformuliert, Personen echt - Freigabe fehlt noch)
- [ ] Footer-Links prüfen: `/companies`, `/help`, `/contact` existieren noch nicht

## Produkt-Blocker

- [ ] Paywall aktiv (Stripe verdrahtet) - ohne sie sind alle 28 Lektionen gratis
- [ ] Zertifikatskauf funktioniert Ende-zu-Ende (Checkout → PDF → E-Mail)
