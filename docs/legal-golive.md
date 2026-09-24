# Legal texts: what is built and what must happen before go-live

Drafted 2026-09-24 as a strong template set, not as legal advice. Have a French
or German lawyer read the CGV, the withdrawal mechanics and the B2B liability
clauses once before real money moves. Law changes: re-check this file every 6 months.

## Where everything lives

- Texts: `src/lib/legal/docs/<doc>.<de|en|fr>.ts` (six documents x three languages).
  Documents: imprint, privacy (incl. cookies), terms (B2C sale + site use), withdrawal,
  business-terms (B2B), dpa (data processing agreement for team licences).
- Facts about the business: `src/lib/legal/company.ts`. Fill the `null` values once and
  all 18 texts update. While a value is missing, the texts show a bracketed placeholder
  (for example "[SIRET-Nummer folgt]") and the legal pages are set to noindex.
- Pages: `/{locale}/imprint`, `/privacy`, `/terms`, `/withdrawal`, `/business-terms`, `/dpa`.
- Cookie consent: `src/lib/consent.ts`, `src/components/consent/`. Google Analytics 4 loads
  only after an explicit "accept", and only when `NEXT_PUBLIC_GA_ID` is set.
- Tokens inside the texts: `{{legalName}}`, `{{address}}`, `{{siret}}`, `{{email}}`,
  `{{phone}}`, `{{mediatorName}}`, `{{mediatorUrl}}`, `{{mediatorAddress}}`, `{{vatLine}}`,
  `{{priceVatNote}}`. Never type these values directly into a text.

## Must be done before go-live

1. **Fill `company.ts`:** postal address (a business domiciliation address is allowed if the
   home address should not be public), phone number (French law requires one for a
   professional), SIRET (after the guichet unique registration), consumer mediator.
2. **Consumer mediator (mandatory for B2C sales from France, Code de la consommation L.612-1):**
   choose a mediator from the list of the CECMC (economie.gouv.fr, "médiateurs de la
   consommation"), sign their membership contract, then enter name, website and address.
3. **VAT status:** the texts assume "franchise en base de TVA" (Art. 293 B CGI). Confirm.
   Note for the tax side (not a text issue): above EUR 10,000 of cross-border B2C digital sales
   inside the EU per year, VAT of the customer's country applies (OSS scheme). If you register
   for VAT, set `vatId` in `company.ts`; the price sentences switch automatically.
4. **Google Analytics 4:** create the property, set `NEXT_PUBLIC_GA_ID` in Vercel. In GA admin:
   data retention 14 months, Google Signals off, ad personalisation off, data sharing settings
   off, accept the data processing terms. The privacy text promises exactly this.
5. **Data processing agreements with providers** (the privacy text says they exist):
   Vercel and Stripe (part of their terms, download and file the DPA), Supabase and Resend
   (sign or request in the dashboard, choose an EU region for Supabase), Formspree (request the
   DPA), ALL-INKL (sign the Auftragsverarbeitungsvertrag in KAS), Google (accept in GA admin).
   Verify for each US provider that it is listed on the EU-US Data Privacy Framework list
   (dataprivacyframework.gov); if not, the standard contractual clauses in their DPA apply.
6. **Check provider addresses** in imprint and privacy (Vercel, Stripe, Google, ALL-INKL) against
   their current legal pages.
7. **Checkout (when Stripe goes live)** must do the following, or the texts are not true:
   - order button labelled "Zahlungspflichtig bestellen" / "Commande avec obligation de paiement"
     / "Order with obligation to pay"
   - separate checkbox for digital content: the customer agrees that delivery starts now and
     acknowledges losing the right of withdrawal (terms section 12, withdrawal page)
   - links to terms, withdrawal notice and privacy policy next to the button
   - confirmation email containing the terms and the withdrawal information (durable medium)
   - use Stripe Checkout with consent collection for the terms
8. **Delete the old LegalStart files' use:** they belong to another business (Happy Monday HR,
   Webflow host, EU-US Privacy Shield which was invalidated in 2020) and must not be reused.

## Decisions built into the texts (change here or in the texts if you disagree)

- Legal texts use the formal address ("Sie", "vous"); the marketing copy keeps "du"/"tu".
- Minimum age hint: under 16 only with a guardian's consent.
- Access to the course is unlimited; a permanent shutdown is announced 12 months in advance.
- The certificate is included in the course price and can also be bought alone.
- B2B: 12-month licence term, no automatic renewal, 30 days to pay, late-payment terms per
  Art. L.441-10 Code de commerce (3x legal interest plus EUR 40), liability capped at the fees
  of the current contract year for simple negligence.
- DPA: breach notice within 48 hours, deletion within 30 days after the end, backups 90 days.
- Retention: contact requests 12 months (3 years for business development), waitlist and
  cheat-sheet leads up to 24 months, invoices 10 years.
- Cookie consent is asked again after 6 months (CNIL); the consent cookie lasts 6 months.

## When something changes

- New third-party service (ads pixel, chat widget, embedded video, new payment method):
  add it to the privacy text (all three languages), to the consent categories in
  `src/components/consent/ConsentManager.tsx`, and load it only after consent.
- Newsletter: add a double opt-in flow before the first promotional email; the privacy text
  already describes it.
- User accounts go live: check that Supabase runs in an EU region and update section 7.
- Change wording of a legal text in all three languages in the same commit and bump the
  `updated` date of that document.
