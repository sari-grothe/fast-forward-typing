import type { LegalDoc } from "../types";

export const privacyEn: LegalDoc = {
  title: "Privacy policy",
  description: "How Fast Forward >> Typing processes personal data: hosting, analytics, payments, forms and your rights.",
  updated: "24 September 2026",
  content: `## 1. Controller and contact

The controller of personal data processed on this website within the meaning of the General Data Protection Regulation (GDPR) is:

**{{legalName}}** (trading as {{tradeName}})
{{address}}
Email: {{email}}

We have not appointed a data protection officer because none is legally required. For any question about your data or to exercise your rights, an email to the address above is enough.

This policy applies to the website {{domain}} and the services offered through it (typing speed test, placement, typing course, certificate, resources, offers for companies).

## 2. Overview: what we process and why

| Purpose | Data | Legal basis | Retention |
|---|---|---|---|
| Providing and securing the website | IP address, time, page requested, browser and device data (server logs) | Art. 6(1)(f) GDPR (legitimate interest in a secure, working service) | Short term, for operation and troubleshooting |
| Features you ask for (display mode, learning progress) | Settings and results in your browser's local storage | Art. 82 French Data Protection Act (strictly necessary, no consent needed) | Until you clear your browser data |
| Audience measurement (Google Analytics) | Pseudonymous usage data | Art. 6(1)(a) GDPR (consent) | Cookies up to 13 months, analytics data up to 14 months |
| Contact requests and company enquiries | Name, email, message; for companies also company, team size, optional phone | Art. 6(1)(a) and (b), or (f) GDPR | Up to 12 months after the last contact, up to 3 years for business development |
| Waitlist (certificate, course), cheat sheet downloads | Email, optionally name, optionally typing test result | Art. 6(1)(a) GDPR (consent) | Until you withdraw consent, 24 months at most |
| Purchase, payment, invoicing | Name, email, billing details, payment data (via Stripe), product ordered | Art. 6(1)(b) and (c) GDPR | 10 years (accounting rules) |
| User account and progress (once available) | Email, account data, level, results | Art. 6(1)(b) GDPR | Until you delete your account |
| Certificate | Name, speed, accuracy, date | Art. 6(1)(b) GDPR | As long as the certificate should remain available, at most until account deletion |

## 3. Hosting and server logs

Our website is hosted by **Vercel Inc.**, 440 N Barranca Ave #4133, Covina, CA 91723, USA, and delivered through a worldwide edge network. When you open a page, the server automatically processes technically necessary data: IP address, date and time, requested address, referrer, browser type and operating system, status code. This is required to deliver the page, repel attacks and fix errors. The legal basis is Art. 6(1)(f) GDPR. A data processing agreement is in place with Vercel. For transfers to the USA see section 12.

## 4. Cookies and local storage

We distinguish between strictly necessary storage, which needs no consent, and optional storage, which we only use with your consent.

**Strictly necessary (no consent):**

| Name | Purpose | Type and duration |
|---|---|---|
| theme | Remembers your chosen display mode (light or dark) | Local storage, until you clear it |
| Learning progress and placement | Saves your lesson results, speed and training plan in your browser so you can continue later | Local storage, until you clear it |
| Notice markers (waitlist sign-up, skipping a lock) | Avoids showing you the same prompt repeatedly | Local storage or session storage |
| Consent status | Saves your choice in the cookie banner so we do not ask again | Cookie, 6 months |

This data does not leave your device and is not transmitted to us. Legal basis: Art. 82 of the French Data Protection Act, which implements Art. 5(3) of the ePrivacy Directive, and, for visitors in Germany, § 25(2) no. 2 TDDDG.

**Optional (only with your consent):**

| Service | Purpose | Cookies and duration |
|---|---|---|
| Google Analytics 4 | Audience measurement and improving the offer | _ga, _ga_[identifier], 13 months at most |

You can change or withdraw your choice at any time using the "Cookie settings" link at the bottom of every page. Withdrawal applies for the future. Without consent, optional services are not loaded and you lose nothing. Declining is as easy as accepting. We ask for your choice again after 6 months at the latest.

## 5. Audience measurement with Google Analytics 4

If you consent, we use Google Analytics 4, a web analytics service of **Google Ireland Limited**, Gordon House, Barrow Street, Dublin 4, Ireland (parent company: Google LLC, USA). We use it to understand which pages are used, how visitors find us and how we can improve the offer.

Pseudonymous usage data is processed: pages visited, time on page, events such as completing a typing speed test, approximate location (country or region, derived from the IP address), device and browser information and a randomly generated identifier in a cookie. Google Analytics 4 does not store full IP addresses. We limited the retention of analytics data to 14 months and switched off advertising features, Google Signals and data sharing with other Google products. Until you consent, the Google script is not loaded and no data is sent to Google.

The legal basis is your consent (Art. 6(1)(a) GDPR, Art. 82 French Data Protection Act, § 25(1) TDDDG). For transfers to the USA see section 12.

## 6. Contact forms, waitlist and downloads

When you use one of our forms, we process the information you enter:

- **Contact form:** name, email address, message.
- **Company enquiry:** name, email address, company, team size, optional phone number, optional message.
- **Waitlist for certificate or course:** email address and, if you measured your typing speed beforehand, your result (speed and accuracy).
- **Cheat sheet download:** name and email address.

We use this data only to answer your request, to inform you when the offer you signed up for launches, or to provide the cheat sheet you asked for. We do not send promotional emails without your explicit consent (checkbox in the form). The legal basis is your consent (Art. 6(1)(a) GDPR) and, where your request aims at a contract or contract negotiations, Art. 6(1)(b); for company enquiries also our legitimate interest in developing business relationships (Art. 6(1)(f)). You can withdraw consent at any time for the future (section 14).

Forms are processed through the service **Formspree** (Formspree, Inc., USA), which forwards messages to our mailbox and acts as our processor. For transfers to the USA see section 12. To fight spam we use invisible measures (a hidden field and a minimum fill-in time) that collect no additional personal data.

## 7. User account and progress

Currently the website stores your learning progress only locally in your browser (section 4). Once we offer user accounts, we will process your email address (sign-in by link, no password), your level, results and settings to provide the account. Account and progress data will be stored with **Supabase** (Supabase Inc.) in a database with servers in the European Union. Sign-in emails will be sent through **Resend** (Resend, Inc., USA). The legal basis is performance of the user contract (Art. 6(1)(b) GDPR). Data is deleted when you delete your account unless a legal retention duty applies.

## 8. Purchase and payment

If you buy paid offers (for example the full course or the certificate), we process your order data (name, email address, product, price, date, billing address if applicable). Payment is handled by **Stripe Payments Europe, Limited**, 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Ireland (group: Stripe, Inc., USA). You enter payment details such as your card number directly with Stripe; we do not receive them. Stripe processes some data under its own responsibility, for example for fraud prevention and legal obligations, and some on our behalf. Stripe's privacy policy applies in addition.

The legal basis is Art. 6(1)(b) GDPR (contract) and, for invoices and accounting, Art. 6(1)(c). Under French commercial law we keep invoices and accounting records for 10 years.

## 9. Emails and newsletter

We send transactional emails (order confirmation, sign-in link, certificate, reply to your request) where needed to perform the contract or answer your request. We only send promotional emails or a newsletter with your explicit consent, using a confirmation step (double opt-in). Every email contains an unsubscribe link; you can also unsubscribe by email to {{email}}.

## 10. Certificate

When you obtain a certificate, we print your name, your measured speed, your accuracy and the date on it and provide it as a PDF. We do not publish certificates. What you do with your certificate is up to you.

## 11. Recipients and processors

We only share personal data as far as needed for the purposes above. Recipients are our service providers, who act as processors on our instructions and with whom contracts under Art. 28 GDPR exist (or, where they act under their own responsibility, their own legal framework applies):

- Vercel Inc. (hosting, USA)
- Google Ireland Limited (Google Analytics, only with consent)
- Stripe Payments Europe, Limited (payments, Ireland)
- Supabase Inc. (account and progress data, servers in the EU, once available)
- Resend, Inc. (sending emails, USA, once available)
- Formspree, Inc. (forwarding form messages, USA)
- ALL-INKL.COM - Neue Medien Münnich (mailbox and domain, Germany)

We also disclose data to authorities or courts where we are legally obliged to. We do not sell your data or pass it on to third parties for advertising.

## 12. Transfers to third countries

Some of these providers are based in the USA or process data there. We base these transfers on the European Commission's adequacy decision on the EU-US Data Privacy Framework of 10 July 2023, where the recipient participates, and otherwise on the standard contractual clauses adopted by the European Commission (Art. 46(2)(c) GDPR) with supplementary measures. You can request a copy of the applicable safeguards at {{email}}.

## 13. Retention

We store personal data only as long as needed for the respective purpose (see the table in section 2). After that we delete or anonymise it, unless a legal retention duty (for example 10 years for invoices) or the defence of legal claims requires us to keep it. In that case we restrict access and use it only for that purpose.

## 14. Your rights

Under the GDPR you have the right to:

- access your data (Art. 15)
- rectify inaccurate data (Art. 16)
- erasure (Art. 17)
- restriction of processing (Art. 18)
- data portability (Art. 20)
- object to processing based on legitimate interests (Art. 21), at any time, on grounds relating to your particular situation
- withdraw consent at any time for the future (Art. 7(3)); processing before withdrawal remains lawful
- set instructions about what happens to your data after your death (Art. 85 French Data Protection Act)

To exercise your rights, write to {{email}}. We may ask for proof of identity if there is reasonable doubt and reply within one month.

**Complaints:** you can lodge a complaint with a data protection authority. The authority responsible for us is the French **CNIL** (Commission nationale de l'informatique et des libertés), 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, France, [www.cnil.fr](https://www.cnil.fr). You may also contact the authority where you live or work in the EU.

## 15. Obligation to provide data, automated decisions, minors

Providing personal data is voluntary. Without the mandatory fields in a form or purchase, however, we cannot handle your request or order. There is no automated decision-making with legal or similarly significant effects and no profiling. The placement and training plan are calculated locally in your browser from your typing results and serve only as a suggestion. Our offer is aimed at adults. People under 16 should only use it with the consent of their legal guardians.

## 16. Data security

We use technical and organisational measures to protect your data, including encrypted transmission (HTTPS), access restrictions and careful selection of our providers. No transmission over the internet is completely secure; absolute protection cannot be guaranteed.

## 17. Changes

We update this policy when our services or the law change. The version published on this page applies. For significant changes we will point this out in a suitable way.`,
};
