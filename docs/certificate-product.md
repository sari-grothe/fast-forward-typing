# Certificate Product - Technical Design

## Overview

Users complete a typing test, pay 5 EUR via Stripe, and receive a PDF certificate by email with their results (speed, accuracy, date).

## User Flow

1. User completes typing test, sees results (WPM, accuracy, weak keys)
2. Clicks "Zertifikat kaufen" on results page
3. Enters name (for the certificate) + email
4. Redirected to Stripe Checkout (5 EUR one-time)
5. Stripe processes payment
6. Webhook triggers PDF generation + email delivery
7. User receives certificate PDF in their inbox

## Architecture

```
Results Page --> Name/Email Form --> Stripe Checkout --> Webhook --> PDF + Email
                                         |                           |
                                    metadata:                   @react-pdf/renderer
                                    - name                      + Resend
                                    - wpm
                                    - accuracy
                                    - locale
                                    - date
```

## Tech Stack

| Component | Tool | Notes |
|-----------|------|-------|
| Payment | Stripe Checkout | Hosted payment page, PCI-compliant, no custom form |
| PDF generation | @react-pdf/renderer | Certificate as React component, server-side PDF render |
| Email delivery | Resend | Simple API, PDF attachment, free tier 3,000 mails/month |
| Webhook handler | Next.js API Route | `/api/webhooks/stripe` (placeholder exists) |

## Data Flow - No Database Needed

Test results are passed as Stripe Checkout Session metadata. When the webhook fires, all data needed for the certificate is in the session object. No Supabase or other DB required for this flow.

### Stripe Session Metadata

```json
{
  "name": "Tom L.",
  "email": "tom@example.com",
  "wpm": "91",
  "accuracy": "99",
  "errors": "3",
  "locale": "de",
  "testDate": "2026-06-16"
}
```

## Implementation Steps

### 1. Stripe Setup

- Create Stripe account + product (5 EUR one-time, "Typing Certificate")
- Set up webhook endpoint in Stripe dashboard pointing to `/api/webhooks/stripe`
- Environment variables: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### 2. Pre-checkout Form

- After results, "Zertifikat kaufen" opens a small form: name + email
- On submit, call `/api/checkout` which creates a Stripe Checkout Session with metadata
- Redirect user to Stripe Checkout URL

### 3. API Route: `/api/checkout`

```
POST /api/checkout
Body: { name, email, wpm, accuracy, errors, locale, testDate }
Returns: { url: "https://checkout.stripe.com/..." }
```

- Creates Stripe Checkout Session with:
  - `mode: "payment"`
  - `line_items`: certificate product
  - `customer_email`: from form
  - `metadata`: all test results
  - `success_url`: `/{locale}/certificate/success`
  - `cancel_url`: `/{locale}/certificate`

### 4. Webhook: `/api/webhooks/stripe`

On `checkout.session.completed`:
1. Verify webhook signature
2. Extract metadata (name, wpm, accuracy, locale, etc.)
3. Generate PDF certificate using `@react-pdf/renderer`
4. Send email via Resend with PDF attachment
5. Return 200

### 5. PDF Certificate Template

React component rendered to PDF:
- Fast Forward >> Typing branding (indigo, Poppins font)
- Recipient name (large, centered)
- "has achieved a typing speed of X WPM with Y% accuracy"
- Date of issue
- Unique certificate ID (Stripe session ID or UUID)
- QR code or verification URL (optional, future)

### 6. Email Template

- Subject: "Dein Tippzertifikat / Your typing certificate"
- Brief congratulations message
- PDF attached
- CTA to share on LinkedIn

## Packages to Install

```bash
npm install stripe @react-pdf/renderer resend
```

## Environment Variables

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
RESEND_API_KEY=re_...
```

## Certificate Retake Policy

Users can retake the test and purchase a new certificate at any time. Each purchase generates a fresh certificate with the latest results. No limit on retakes.

## Future Enhancements

- Verification page: `/certificate/verify/{id}` to confirm authenticity
- Include certificate in annual typing course subscription (no separate payment)
- LinkedIn "Add to Profile" deep link in the email
- User accounts (Supabase) to store certificate history
