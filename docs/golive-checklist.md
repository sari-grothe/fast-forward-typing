# Go-Live-Checkliste

Vor dem öffentlichen Launch / ersten Verkauf abarbeiten. Stand: 2026-07-06.

## Kritischer Pfad: Gewerbe-Registrierung (längste Vorlaufzeit - ZUERST starten)

- [ ] **Micro-Entreprise anmelden** über den Guichet Unique (formalites.entreprises.gouv.fr) - kostenlos, online. SIRET kommt typischerweise in 1-3 Wochen. Stand 2026-07-06: noch keine SIRET vorhanden.
- [ ] SIRET wird gebraucht für: (a) Stripe-Live-Schaltung, (b) Mentions Légales/Impressum (Pflichtangabe), (c) überhaupt legal verkaufen zu dürfen
- Bis dahin: Stripe läuft im **Test-Modus** (braucht keine SIRET) - Entwicklung ist nicht blockiert

## Infrastruktur (Sarah, Vercel-Dashboard)

- [ ] **Vercel Speed Insights aktivieren** (Project → Speed Insights → Enable)
- [ ] **Vercel Web Analytics aktivieren** (Project → Analytics → Enable)
- [ ] **fastforwardtyping.com als Production-Domain verbinden** - aktuell läuft Production auf `skip-the-manual.vercel.app` (alter Projektname)
- [ ] Supabase-Projekt anlegen (Region EU, z.B. Frankfurt - DSGVO) + Keys in Vercel-Env-Vars (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`)
- [ ] Stripe-Konto anlegen (Test-Modus, geht ohne SIRET) + Test-Keys in Env-Vars (`STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`)
- [ ] Stripe-Produkte anlegen (Kurs 29 EUR Lifetime, Zertifikat 5 EUR)
- [ ] **Nach SIRET-Erhalt:** Stripe-Verifizierung abschließen, auf Live-Keys umstellen

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
