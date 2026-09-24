import type { LegalDoc } from "../types";

export const dpaEn: LegalDoc = {
  title: "Data processing agreement",
  description: "Data processing agreement under Art. 28 GDPR for team licences of Fast Forward >> Typing.",
  updated: "24 September 2026",
  content: `This agreement on the processing of personal data on behalf of a controller (the "Agreement") applies between the Customer (the "Controller") and **{{legalName}}**, {{address}}, SIRET {{siret}} (the "Processor"). It becomes part of the team licence contract concluded under the [terms for business customers](/en/business-terms) and meets the requirements of Art. 28 of the General Data Protection Regulation (GDPR). No separate signature is needed; on request we provide a signed copy.

## 1. Subject matter, duration, nature and purpose

The Processor provides the Controller with an online platform for typing training (user accounts, progress, measurement results, team dashboard, certificates). In doing so it processes personal data of the Controller's Users exclusively on the Controller's behalf. Processing includes collecting, storing, analysing, displaying, exporting, transmitting to the Controller and deleting. The Agreement applies for the term of the main contract.

## 2. Types of data and categories of data subjects

- **Data subjects:** Users named by the Controller (for example employees, apprentices)
- **Data:** name, work email address, team assignment, language and keyboard layout, level, typing results (speed, accuracy), times of use, certificates issued
- **No special categories** of personal data within the meaning of Art. 9 GDPR

## 3. Instructions

The Processor processes the data only on documented instructions from the Controller. The main contract, this Agreement and the Controller's use of the platform's functions count as instructions. Further instructions are given in writing. If the Processor considers an instruction unlawful, it informs the Controller without delay and may suspend execution until clarified. No processing takes place for its own purposes, except anonymised usage statistics that cannot be traced back to persons or the Customer, used to improve the service.

## 4. Confidentiality

The Processor ensures that persons authorised to process the data are bound to confidentiality or under an appropriate statutory duty of confidentiality.

## 5. Technical and organisational measures

The Processor implements appropriate technical and organisational measures under Art. 32 GDPR. Currently they include:

- encryption of data in transit (TLS) and encryption of stored data at the database provider
- access control on the principle of least privilege, personal accounts, separation of the data of different customers
- passwordless authentication by one-time sign-in link, session limits
- backups and recovery procedures
- logging of security-relevant events
- careful selection and contractual binding of sub-processors
- a deletion policy and regular review of the measures

The measures may be further developed as long as the level of protection does not decrease.

## 6. Sub-processors

The Controller gives general authorisation to use sub-processors. Currently used are:

| Sub-processor | Seat | Service | Data location and safeguard |
|---|---|---|---|
| Vercel Inc. | USA | Hosting and delivery of the platform | Worldwide network; EU-US Data Privacy Framework or standard contractual clauses |
| Supabase Inc. | USA | Database and sign-in | Servers in the EU; standard contractual clauses |
| Resend, Inc. | USA | Sending sign-in and system emails | Standard contractual clauses |
| Stripe Payments Europe, Limited | Ireland | Payments (no User data of team dashboards) | EU |

The Processor informs the Controller in writing of intended changes at least 30 days in advance. The Controller may object for a legitimate data protection reason within that period. If the parties cannot agree, the Controller may terminate the contract at the time of the change. The Processor contractually binds its sub-processors to an equivalent level of protection and is liable for their performance.

## 7. Assistance to the Controller

The Processor assists the Controller with appropriate measures in responding to requests from data subjects (Art. 12 to 22 GDPR) and in complying with obligations under Art. 32 to 36 (security, notification, data protection impact assessment). If a data subject sends a request directly to the Processor, it refers them to the Controller.

## 8. Notification of personal data breaches

The Processor notifies the Controller of a personal data breach without undue delay and at the latest 48 hours after becoming aware of it, and provides the information needed for notification to the supervisory authority as far as available.

## 9. Transfers to third countries

Data is transferred to countries outside the European Economic Area only where necessary through the sub-processors named and where the conditions of Art. 44 et seq. GDPR are met (adequacy decision, in particular the EU-US Data Privacy Framework, or standard contractual clauses with supplementary measures).

## 10. Deletion and return

After the contract ends, the Processor provides the results as an export on request and then deletes the Users' personal data within 30 days, unless a legal retention duty applies. Data in backups is overwritten in the regular cycle, after 90 days at the latest. On request the Processor confirms deletion in writing.

## 11. Evidence and audits

The Processor provides the Controller with the information necessary to demonstrate compliance with this Agreement. The Controller may carry out or commission audits with at least 30 days' notice, at most once a year and during normal business hours, primarily remotely based on documentation. Audits prompted by a data breach remain possible. Trade secrets and confidential information of the Processor and its other customers must be protected. The Controller bears the cost of the audit unless it reveals material breaches.

## 12. Liability, precedence, governing law

Liability is governed by the main contract and Art. 82 GDPR. In case of contradictions between this Agreement and the main contract, this Agreement prevails for the handling of personal data. French law applies; the requirements of the GDPR remain unaffected. Contact for data protection questions: {{legalName}}, {{email}}.`,
};
