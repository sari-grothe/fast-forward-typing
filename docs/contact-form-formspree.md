# Formulare (Formspree)

Stand: 2026-09-23. Ursprünglich nur das B2B-Kontaktformular, mittlerweile teilen sich **vier** Formulare denselben Formspree-Endpoint (`xljdrkvn`), unterschieden nur über `_subject`: B2B-Kontakt (`src/components/companies/ContactForm.tsx`), allgemeiner Kontakt (`src/components/ContactForm.tsx`), Zertifikat-Warteliste und Kurs-Pro-Warteliste (beide über `src/components/WaitlistForm.tsx`). Formspree schickt pro Anfrage eine E-Mail an Sarah. Kein eigenes Backend, keine Env-Vars.

## Wo

| Was | Wo |
|---|---|
| Seite | `/de/unternehmen`, `/en/for-teams`, `/fr/entreprises` (intern `src/app/[locale]/(marketing)/companies/page.tsx`) |
| Formular-Komponente | `src/components/companies/ContactForm.tsx` |
| Formspree-Endpoint | `https://formspree.io/f/xljdrkvn` (Konstante `FORMSPREE_ENDPOINT` in der Komponente) |
| Formspree-Konto | techandchocolate@gmail.com, Formular "FFT Unternehmen" |
| Beschriftungen | `companies.form.*` in `src/i18n/dictionaries/{de,en,fr}.json` |

Die Formular-ID ist absichtlich im Code sichtbar. Formspree ist so gebaut; Missbrauch wird über "Restrict to Domain" (siehe unten) und Spam-Filter begrenzt.

## Felder

| Feld (`name`) | Pflicht | Inhalt |
|---|---|---|
| `name` | ja | Ansprechperson |
| `email` | ja | Arbeits-E-Mail, Browser prüft das Format; Formspree setzt sie als Antwortadresse (`_replyto`) |
| `company` | ja | Firmenname, steht auch im Betreff der Benachrichtigung |
| `teamSize` | ja | Auswahl: 10 bis 25 / 26 bis 100 / 101 bis 200 / 201 bis 400 / 401 bis 1000 / über 1000 (je Sprache übersetzt) |
| `message` | nein | Freitext |

Automatisch mitgeschickt, für Besucher unsichtbar:

| Feld | Inhalt |
|---|---|
| `_subject` | `Team-Training Anfrage: <company>` (Betreff der Mail) |
| `locale` | `de`, `en` oder `fr` |
| `page` | vollständige URL der Seite, von der gesendet wurde |
| `_gotcha` | Honeypot gegen Bots. Ist es gefüllt, wird nicht gesendet, der Bot sieht trotzdem die Erfolgsmeldung |

## Ablauf im Browser

1. Pflichtfelder fehlen -> Browser-Validierung, kein Versand.
2. Absenden -> Button zeigt "Wird gesendet ...", ist deaktiviert.
3. Formspree antwortet 2xx -> Erfolgsansicht "Danke, ist angekommen" mit CTA zum Tipptest. Fokus springt auf die Überschrift (Screenreader).
4. Fehler (Netz, 4xx/5xx) -> Hinweis "Das hat nicht geklappt", Formular bleibt ausgefüllt, erneut absenden möglich.

Gesendet wird per `fetch` mit `Accept: application/json` als `FormData`, kein Redirect auf eine Formspree-Seite.

## Formspree-Einstellungen (einmalig, im Formspree-Dashboard)

1. **Konto-E-Mail bestätigen.** Ohne bestätigte Adresse nimmt Formspree Anfragen an, verschickt aber keine Benachrichtigungen. Das war am 16.09.2026 die Ursache für "keine Testmail". Bestätigungslink kommt von `noreply@formspree.io`.
2. **Settings -> Email Notifications**: an, Empfängeradresse prüfen. Andere Adresse eintragen -> Bestätigungslink anklicken.
3. **Settings -> Restrict to Domain**: **offener Punkt, Stand 2026-09-23 noch nicht auf `fastforwardtyping.com` gesetzt** (nur `skip-the-manual.vercel.app` dokumentiert, die alte Domain). Ohne das nimmt Formspree Anfragen von jeder Website oder direkt per Skript an, nicht nur von unserer - das ist die größte offene Lücke gegen Missbrauch. `fastforwardtyping.com` jetzt eintragen. Achtung: Danach schlagen Tests von localhost fehl, das ist gewollt.
4. **Settings -> Spam Protection**: Standard belassen (Formspree-Filter plus unser Honeypot plus eine Mindest-Ausfüllzeit im Code - siehe unten).
5. **Submissions**: alle Anfragen bleiben hier gespeichert, auch wenn eine Mail verloren geht. "Resend notification" schickt eine Mail erneut.

## Schutz gegen Spam und automatisierte Anfragen (Stand 2026-09-23)

- **Honeypot** (`_gotcha`, verstecktes Feld): fängt einfache Skript-Bots, die jedes Feld im Formular ausfüllen, ohne zu prüfen, ob es sichtbar ist.
- **Mindest-Ausfüllzeit** (im Code, alle drei Formular-Komponenten): Absenden schneller als 2-3 Sekunden nach Laden wird wie der Honeypot behandelt - stiller Fehlschlag mit gefälschter Erfolgsmeldung. Fängt auch Bots, die den Honeypot erkennen und bewusst überspringen, etwa KI-Agenten, die das Formular per Browser-Steuerung ausfüllen.
- **Formspree-eigener Spam-Filter**: läuft automatisch, Wirksamkeit gegen KI-gesteuerte Einsendungen speziell nicht von uns geprüft.
- **Restrict to Domain**: siehe Punkt 3 oben - aktuell die größte Lücke, weil noch nicht auf die aktuelle Domain gesetzt.
- **Kein CAPTCHA.** Nicht eingebaut, wäre die nächste Stufe bei anhaltendem Missbrauch (Formspree unterstützt reCAPTCHA-Integration).

Keine dieser Maßnahmen ist wasserdicht gegen gezielten, ausgefeilten Missbrauch - sie erhöhen die Hürde, verhindern ihn nicht vollständig.

## Testen

Auf der Live-Seite das Formular mit Firma "Eigentest" absenden. Innerhalb einer Minute:
- Eintrag unter Submissions
- Mail mit Betreff "Team-Training Anfrage: Eigentest"

Direkt gegen Formspree, ohne Website (nur wenn Restrict to Domain aus ist oder mit passendem Origin-Header):

```bash
curl -s -X POST https://formspree.io/f/xljdrkvn -H "Accept: application/json" -H "Origin: https://skip-the-manual.vercel.app" -F "name=Test" -F "email=techandchocolate@gmail.com" -F "company=Eigentest" -F "teamSize=10 bis 25" -F "_subject=Team-Training Anfrage: Eigentest"
```

Antwort `{"ok":true}` heißt: angenommen. Kommt trotzdem keine Mail, liegt es an Schritt 1 oder 2 oben.

## Limits und Kosten

Free-Plan: 50 Anfragen pro Monat, danach werden weitere Anfragen abgelehnt (unser Formular zeigt dann den Fehlerhinweis). Das Limit gilt für **alle vier Formulare zusammen**, nicht pro Formular - bei mehr Traffic auf mehreren Seiten gleichzeitig ist das Kontingent schnell aufgebraucht, auch ganz ohne Missbrauch. Ein einziger Spam-Schub reicht, um echte Anfragen für den Rest des Monats abzuweisen, ohne dass es auffällt (der Fehlerhinweis sieht für Besucher wie ein normaler Netzwerkfehler aus). Bei mehr Volumen Plan upgraden oder auf Resend + eigene API-Route umstellen (im Tech-Stack vorgesehen, siehe `src/app/api/webhooks/email/route.ts`).

## Datenschutz

Formspree ist ein US-Dienst und empfängt personenbezogene Daten (Name, E-Mail, Firma, Nachricht). Muss in die Datenschutzerklärung, sobald `/privacy` gebaut wird. Details und offene Prüfpunkte stehen in [golive-checklist.md](golive-checklist.md) unter "Datenschutzerklärung".

## Feld ergänzen

1. Input in `ContactForm.tsx` hinzufügen (`name`-Attribut = Feldname in der Mail).
2. Label in `companies.form` in allen drei Dictionaries ergänzen und in `ContactFormLabels` typisieren.
3. Kein Schritt in Formspree nötig, neue Felder erscheinen automatisch in Mail und Submissions.
