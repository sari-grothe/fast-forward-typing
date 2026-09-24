# GDPR working documents (internal, not public)

Three short documents the GDPR expects you to have ready. Keep this file up to date when a
service is added. Drafted 2026-09-24.

## 1. Record of processing activities (Art. 30 GDPR)

Controller: {{legalName}}, see `src/lib/legal/company.ts`. No data protection officer.

| Activity | Purpose | Data subjects | Data | Recipients | Retention | Transfers |
|---|---|---|---|---|---|---|
| Website hosting and logs | Deliver and secure the site | Visitors | IP, time, URL, browser | Vercel | Short (provider default) | USA, DPF/SCC |
| Local storage (theme, progress) | Requested features | Visitors | Settings, lesson results, on the device only | none | Until cleared | none |
| Audience measurement (GA4) | Improve the offer | Visitors who consented | Pseudonymous usage data | Google Ireland | 14 months | USA, DPF/SCC |
| Contact and B2B enquiries | Answer requests, business development | Enquirers | Name, email, message, company, team size, phone | Formspree, ALL-INKL mailbox | 12 months, 3 years for business development | USA (Formspree) |
| Waitlist and cheat sheet leads | Notify at launch, deliver download | Sign-ups | Email, name, test result | Formspree, ALL-INKL mailbox | Until withdrawal, max 24 months | USA (Formspree) |
| Sales and invoicing | Contract, accounting | Customers | Name, email, billing, order | Stripe, accountant | 10 years | USA (Stripe Inc.) |
| Accounts and progress (later) | Provide the course | Customers | Email, level, results | Supabase, Resend | Until account deletion | Resend USA |
| Team licences (later) | Provide the team dashboard as processor | Employees of customers | Name, work email, results | Vercel, Supabase, Resend | Contract end + 30 days | see DPA |

## 2. Personal data breach procedure (Art. 33 and 34 GDPR)

1. Anyone who notices a suspected breach (lost device with mailbox, leaked key, wrong email
   recipient, provider incident) writes it down at once: what, when, which data, how many people.
2. Contain it: change passwords and revoke keys (Vercel, Stripe, Supabase, Formspree, ALL-INKL).
3. Assess the risk to the people affected. If a risk is not unlikely, notify the CNIL
   (notifications.cnil.fr) within 72 hours of becoming aware.
4. If the risk is high, inform the affected people without delay, in plain language.
5. Team-licence customers: notify the customer within 48 hours (DPA section 8).
6. Keep a log of every incident, including ones you did not report, with the reasoning.

## 3. Requests from data subjects (Art. 15 to 22 GDPR)

- Requests arrive at support@fastforwardtyping.com or through the contact form.
- Confirm receipt, verify identity if in doubt, answer within one month (extendable by two
  months for complex cases, with a reason).
- Search: the mailbox, Formspree submissions, the Stripe dashboard, Supabase (once live).
- Access: send a copy. Erasure: delete everywhere above unless an accounting duty applies
  (invoices, 10 years). Withdrawal of consent: delete the lead and stop mailings.
- Keep a short note of the request and the answer date.

## Recurring housekeeping

- Every 6 months: delete contact enquiries older than 12 months and leads older than 24 months
  (mailbox and Formspree), unless an active business relationship exists.
- Every 6 months: re-read the privacy text against the services actually in use.
