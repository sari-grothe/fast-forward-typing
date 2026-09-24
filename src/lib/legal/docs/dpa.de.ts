import type { LegalDoc } from "../types";

export const dpaDe: LegalDoc = {
  title: "Auftragsverarbeitungsvertrag",
  description: "Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO für Team-Lizenzen von Fast Forward >> Typing.",
  updated: "24. September 2026",
  content: `Dieser Vertrag über die Verarbeitung personenbezogener Daten im Auftrag (nachfolgend »Vertrag«) gilt zwischen dem Kunden (»Verantwortlicher«) und **{{legalName}}**, {{address}}, SIRET {{siret}} (»Auftragsverarbeiter«). Er wird mit dem Abschluss eines Vertrags über eine Team-Lizenz nach den [Geschäftsbedingungen für Unternehmen](/de/business-terms) Vertragsbestandteil und erfüllt die Anforderungen des Art. 28 der Datenschutz-Grundverordnung (DSGVO). Es bedarf keiner gesonderten Unterschrift; auf Wunsch stellen wir ein unterzeichnetes Exemplar aus.

## 1. Gegenstand, Dauer, Art und Zweck

Der Auftragsverarbeiter stellt dem Verantwortlichen eine Online-Plattform für ein Tipptraining bereit (Nutzerkonten, Lernfortschritt, Messergebnisse, Team-Dashboard, Zertifikate). Dabei verarbeitet er personenbezogene Daten der Nutzer des Verantwortlichen ausschließlich in dessen Auftrag. Die Verarbeitung umfasst Erheben, Speichern, Auswerten, Anzeigen, Exportieren, Übermitteln an den Verantwortlichen und Löschen. Der Vertrag gilt für die Laufzeit des Hauptvertrags.

## 2. Art der Daten und Kategorien betroffener Personen

- **Betroffene:** vom Verantwortlichen benannte Nutzer (zum Beispiel Mitarbeitende, Auszubildende)
- **Daten:** Name, dienstliche E-Mail-Adresse, Zuordnung zu Teams, Sprache und Tastaturlayout, Lernstand, Tippergebnisse (Tempo, Genauigkeit), Zeitpunkte der Nutzung, ausgestellte Zertifikate
- **Keine besonderen Kategorien** personenbezogener Daten im Sinne des Art. 9 DSGVO

## 3. Weisungen

Der Auftragsverarbeiter verarbeitet die Daten nur auf dokumentierte Weisung des Verantwortlichen. Der Hauptvertrag, dieser Vertrag und die Nutzung der Funktionen der Plattform durch den Verantwortlichen gelten als Weisung. Weitere Weisungen erfolgen in Textform. Hält der Auftragsverarbeiter eine Weisung für rechtswidrig, informiert er den Verantwortlichen unverzüglich und darf die Ausführung bis zur Klärung aussetzen. Eine Verarbeitung für eigene Zwecke findet nicht statt, ausgenommen anonymisierte, nicht auf Personen oder den Kunden zurückführbare Nutzungsstatistiken zur Verbesserung des Dienstes.

## 4. Vertraulichkeit

Der Auftragsverarbeiter stellt sicher, dass die zur Verarbeitung befugten Personen zur Vertraulichkeit verpflichtet sind oder einer angemessenen gesetzlichen Verschwiegenheitspflicht unterliegen.

## 5. Technische und organisatorische Maßnahmen

Der Auftragsverarbeiter trifft geeignete technische und organisatorische Maßnahmen nach Art. 32 DSGVO. Aktuell umfassen sie:

- Verschlüsselung der Datenübertragung (TLS) und Verschlüsselung gespeicherter Daten beim Datenbankanbieter
- Zugriffskontrolle nach dem Prinzip der geringsten Rechte, personenbezogene Zugänge, Trennung der Daten verschiedener Kunden
- Authentifizierung ohne Passwort per einmaligem Anmeldelink, Sitzungsbegrenzung
- Sicherungskopien und Wiederherstellungsverfahren
- Protokollierung sicherheitsrelevanter Ereignisse
- sorgfältige Auswahl und vertragliche Bindung von Unterauftragsverarbeitern
- Löschkonzept und regelmäßige Überprüfung der Maßnahmen

Die Maßnahmen dürfen weiterentwickelt werden, solange das Schutzniveau nicht sinkt.

## 6. Unterauftragsverarbeiter

Der Verantwortliche erteilt eine allgemeine Genehmigung zum Einsatz von Unterauftragsverarbeitern. Aktuell eingesetzt werden:

| Unterauftragsverarbeiter | Sitz | Leistung | Datenort und Garantie |
|---|---|---|---|
| Vercel Inc. | USA | Hosting und Auslieferung der Plattform | Weltweites Netz; EU-US Data Privacy Framework oder Standardvertragsklauseln |
| Supabase Inc. | USA | Datenbank und Anmeldung | Serverstandort EU; Standardvertragsklauseln |
| Resend, Inc. | USA | Versand von Anmelde- und Systemmails | Standardvertragsklauseln |
| Stripe Payments Europe, Limited | Irland | Zahlungen (keine Nutzerdaten der Team-Dashboards) | EU |

Über beabsichtigte Änderungen informiert der Auftragsverarbeiter mindestens 30 Tage vorher in Textform. Der Verantwortliche kann aus wichtigem datenschutzrechtlichem Grund innerhalb dieser Frist widersprechen. Können sich die Parteien nicht einigen, darf der Verantwortliche den Vertrag zum Änderungszeitpunkt außerordentlich kündigen. Der Auftragsverarbeiter verpflichtet Unterauftragsverarbeiter vertraglich auf ein gleichwertiges Schutzniveau und haftet für deren Pflichterfüllung.

## 7. Unterstützung des Verantwortlichen

Der Auftragsverarbeiter unterstützt den Verantwortlichen mit geeigneten Maßnahmen bei der Beantwortung von Anträgen betroffener Personen (Art. 12 bis 22 DSGVO) sowie bei der Einhaltung der Pflichten aus Art. 32 bis 36 DSGVO (Sicherheit, Meldepflichten, Datenschutz-Folgenabschätzung). Leitet eine betroffene Person einen Antrag direkt an den Auftragsverarbeiter, verweist er an den Verantwortlichen.

## 8. Meldung von Datenschutzverletzungen

Der Auftragsverarbeiter meldet dem Verantwortlichen eine Verletzung des Schutzes personenbezogener Daten unverzüglich, spätestens 48 Stunden nach Kenntnis, und liefert die für die Meldung an die Aufsichtsbehörde nötigen Informationen, soweit verfügbar.

## 9. Übermittlungen in Drittländer

Daten werden nur in Länder außerhalb des Europäischen Wirtschaftsraums übermittelt, soweit das über die genannten Unterauftragsverarbeiter erforderlich ist und die Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind (Angemessenheitsbeschluss, insbesondere EU-US Data Privacy Framework, oder Standardvertragsklauseln mit ergänzenden Maßnahmen).

## 10. Löschung und Rückgabe

Nach Vertragsende stellt der Auftragsverarbeiter dem Verantwortlichen auf Wunsch die Ergebnisdaten als Export bereit und löscht anschließend die personenbezogenen Daten der Nutzer innerhalb von 30 Tagen, sofern keine gesetzliche Aufbewahrungspflicht besteht. Daten in Sicherungskopien werden im regulären Zyklus, spätestens nach 90 Tagen, überschrieben. Auf Verlangen bestätigt der Auftragsverarbeiter die Löschung in Textform.

## 11. Nachweise und Kontrollen

Der Auftragsverarbeiter stellt dem Verantwortlichen die erforderlichen Informationen zum Nachweis der Einhaltung dieses Vertrags zur Verfügung. Kontrollen (Audits) kann der Verantwortliche nach Ankündigung mit mindestens 30 Tagen Vorlauf, höchstens einmal jährlich und während der üblichen Geschäftszeiten durchführen oder durchführen lassen, vorrangig als Fernprüfung anhand von Dokumentation. Anlassbezogene Kontrollen bei einer Datenschutzverletzung bleiben unberührt. Vertraulichkeits- und Geschäftsgeheimnisse des Auftragsverarbeiters und seiner anderen Kunden sind zu wahren. Die Kosten der Kontrolle trägt der Verantwortliche, soweit die Kontrolle keine wesentlichen Verstöße ergibt.

## 12. Haftung, Rangfolge, Recht

Die Haftung richtet sich nach dem Hauptvertrag und Art. 82 DSGVO. Bei Widersprüchen zwischen diesem Vertrag und dem Hauptvertrag gilt für den Umgang mit personenbezogenen Daten dieser Vertrag. Es gilt französisches Recht; die Vorgaben der DSGVO bleiben unberührt. Ansprechpartnerin für Datenschutzfragen: {{legalName}}, {{email}}.`,
};
