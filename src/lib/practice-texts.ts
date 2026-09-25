import type { Locale } from "@/i18n/config";

// Practice paragraphs for the practice-texts tool page: real workplace
// prose to copy into any typing program, or to load straight into our
// speed test (?text=<id>). Written natively per language, never
// translated, so every text uses the characters of its own layout
// (umlauts and ß on QWERTZ, accents and ç on AZERTY).
//
// difficulty: easy = letters and basic punctuation only; medium = numbers,
// commas, colons; hard = special characters, brackets, symbols, mixed case.

export type PracticeCategory = "email" | "meeting" | "customer" | "project" | "ai" | "numbers";
export type PracticeDifficulty = "easy" | "medium" | "hard";

export type PracticeText = {
  id: string;
  category: PracticeCategory;
  difficulty: PracticeDifficulty;
  title: string;
  text: string;
};

export const practiceUi: Record<Locale, {
  all: string;
  categories: Record<PracticeCategory, string>;
  difficulties: Record<PracticeDifficulty, string>;
  words: string;
  minutesAt40: string;
  copy: string;
  copied: string;
  practice: string;
  count: (n: number) => string;
}> = {
  de: {
    all: "Alle",
    categories: { email: "E-Mail", meeting: "Meeting-Notiz", customer: "Kundenantwort", project: "Projekt-Update", ai: "KI-Prompt", numbers: "Zahlen & Zeichen" },
    difficulties: { easy: "Leicht", medium: "Mittel", hard: "Schwer" },
    words: "Wörter",
    minutesAt40: "Min. bei 40 WPM",
    copy: "Text kopieren",
    copied: "Kopiert",
    practice: "Jetzt üben",
    count: (n) => `${n} Übungstexte`,
  },
  en: {
    all: "All",
    categories: { email: "Email", meeting: "Meeting notes", customer: "Customer reply", project: "Project update", ai: "AI prompt", numbers: "Numbers & symbols" },
    difficulties: { easy: "Easy", medium: "Medium", hard: "Hard" },
    words: "words",
    minutesAt40: "min at 40 WPM",
    copy: "Copy text",
    copied: "Copied",
    practice: "Practice now",
    count: (n) => `${n} practice paragraphs`,
  },
  fr: {
    all: "Tous",
    categories: { email: "E-mail", meeting: "Compte rendu", customer: "Réponse client", project: "Point projet", ai: "Prompt IA", numbers: "Chiffres et signes" },
    difficulties: { easy: "Facile", medium: "Moyen", hard: "Difficile" },
    words: "mots",
    minutesAt40: "min à 40 MPM",
    copy: "Copier le texte",
    copied: "Copié",
    practice: "S'entraîner",
    count: (n) => `${n} textes d'exercice`,
  },
};

const de: PracticeText[] = [
  { id: "de-email-1", category: "email", difficulty: "easy", title: "Terminbestätigung", text: "Hallo Frau Weber, vielen Dank für Ihre schnelle Rückmeldung. Ich bestätige unseren Termin am Donnerstag um zehn Uhr in Ihrem Büro. Die Unterlagen bringe ich ausgedruckt mit, damit wir sie gemeinsam durchgehen können. Falls sich bei Ihnen etwas ändert, geben Sie mir bitte kurz Bescheid. Viele Grüße und bis Donnerstag." },
  { id: "de-email-2", category: "email", difficulty: "medium", title: "Nachfrage zur Rechnung", text: "Guten Tag Herr Schulz, zu Ihrer Rechnung Nr. 2026-0417 vom 12. September habe ich zwei Fragen: Erstens fehlt die Position für die Schulung am 3. September, zweitens weicht der Stundensatz mit 95 Euro von den vereinbarten 90 Euro ab. Könnten Sie die Rechnung bitte prüfen und mir eine korrigierte Fassung schicken? Vielen Dank vorab." },
  { id: "de-email-3", category: "email", difficulty: "hard", title: "Zugangsdaten und Links", text: "Hallo Team, der neue Zugang ist eingerichtet: Benutzername \"m.keller@firma.de\", das Passwort kommt separat per SMS. Die Dokumentation liegt unter https://intranet.firma.de/wiki/onboarding (Abschnitt 4.2), die Kalender-Freigabe unter Einstellungen > Freigaben. Bitte ändert das Passwort beim ersten Login und aktiviert die 2-Faktor-Authentifizierung; Fragen gern an it-support@firma.de." },
  { id: "de-meeting-1", category: "meeting", difficulty: "easy", title: "Protokoll Wochenmeeting", text: "Wir haben heute die offenen Punkte aus der letzten Woche besprochen. Die Präsentation für den Kunden ist fertig und wird morgen verschickt. Das Team braucht noch eine Entscheidung zum Budget für das nächste Quartal. Lisa übernimmt die Vorbereitung des Workshops und meldet sich bis Freitag mit einem Vorschlag." },
  { id: "de-meeting-2", category: "meeting", difficulty: "medium", title: "Entscheidungen und Aufgaben", text: "Ergebnis des Meetings vom 24. September: 1. Der Relaunch wird auf den 15. November verschoben. 2. Marketing liefert bis zum 30. September drei Varianten für die Startseite. 3. Das Budget bleibt bei 12.000 Euro, davon 4.000 Euro für externe Texte. Nächstes Treffen: Dienstag, 1. Oktober, 14:00 Uhr, Raum 3.12." },
  { id: "de-meeting-3", category: "meeting", difficulty: "hard", title: "Technische Abstimmung", text: "Offene Punkte (Stand 24.09.): API-Version 2.3 wird am 01.10. abgeschaltet; alle Clients müssen auf /v3/ migrieren. Das Rate-Limit steigt von 100 auf 250 Anfragen/Minute. Fehler 429 & 503 werden jetzt mit Retry-After-Header beantwortet. Verantwortlich: Backend (Ö. Yilmaz), Deadline 27.09.; Tests laufen unter staging.firma.de:8443." },
  { id: "de-customer-1", category: "customer", difficulty: "easy", title: "Antwort auf eine Beschwerde", text: "Sehr geehrte Frau Hoffmann, es tut mir leid, dass Ihre Lieferung nicht rechtzeitig angekommen ist. Ich habe den Vorgang geprüft und eine neue Sendung veranlasst, die morgen bei Ihnen eintrifft. Als Entschuldigung erstatten wir Ihnen die Versandkosten. Vielen Dank für Ihre Geduld und Ihr Verständnis." },
  { id: "de-customer-2", category: "customer", difficulty: "medium", title: "Angebot mit Konditionen", text: "Vielen Dank für Ihre Anfrage. Unser Angebot für 25 Lizenzen beläuft sich auf 1.875 Euro netto pro Jahr, das entspricht 75 Euro pro Nutzer. Enthalten sind Einrichtung, Support per E-Mail innerhalb von 24 Stunden und alle Updates. Das Angebot gilt bis zum 31. Oktober 2026; die Rechnung stellen wir nach Freischaltung mit 14 Tagen Zahlungsziel." },
  { id: "de-customer-3", category: "customer", difficulty: "hard", title: "Support-Antwort mit Anleitung", text: "Hallo Herr Braun, der Fehler \"Zugriff verweigert (403)\" entsteht, wenn der Browser alte Cookies hält. Bitte gehen Sie so vor: 1) Einstellungen > Datenschutz > Websitedaten löschen; 2) Seite neu laden (Strg + F5); 3) erneut anmelden. Falls es weiter hakt, schicken Sie uns bitte einen Screenshot inkl. Uhrzeit & Browser-Version an support@firma.de; wir prüfen dann das Server-Log." },
  { id: "de-project-1", category: "project", difficulty: "easy", title: "Statusbericht", text: "Das Projekt liegt im Zeitplan. Die erste Phase ist abgeschlossen und vom Kunden abgenommen. In der zweiten Phase bauen wir die Schnittstelle zum Bestellsystem und testen sie mit echten Daten. Risiken sehen wir aktuell nur bei der Verfügbarkeit des externen Dienstleisters, mit dem wir nächste Woche sprechen." },
  { id: "de-project-2", category: "project", difficulty: "medium", title: "Meilensteine und Zahlen", text: "Projekt Nordlicht, Stand Kalenderwoche 39: Meilenstein 2 von 5 erreicht, 43 Prozent des Budgets verbraucht, 3 von 12 Risiken geschlossen. Die Testphase startet am 6. Oktober und dauert 15 Arbeitstage. Für die Schulung der 80 Nutzer planen wir 4 Termine à 90 Minuten, jeweils dienstags und donnerstags um 9:30 Uhr." },
  { id: "de-project-3", category: "project", difficulty: "hard", title: "Änderungsantrag", text: "Change Request #CR-0912 (Priorität: hoch): Der Export nach Excel (.xlsx) muss Umlaute korrekt kodieren (UTF-8 statt ISO-8859-1) und Beträge mit zwei Nachkommastellen ausgeben, z. B. 1.234,50 €. Betroffene Module: Reporting & Abrechnung; Aufwand geschätzt 3 bis 5 Personentage; Freigabe durch den Lenkungsausschuss am 02.10., 11:00 Uhr." },
  { id: "de-ai-1", category: "ai", difficulty: "easy", title: "Prompt für eine Zusammenfassung", text: "Fasse den folgenden Text in fünf Sätzen zusammen. Schreibe für Leser, die das Thema nicht kennen, und vermeide Fachbegriffe. Nenne am Ende die wichtigste Zahl aus dem Text und erkläre in einem Satz, warum sie wichtig ist. Antworte auf Deutsch und in einem sachlichen Ton." },
  { id: "de-ai-2", category: "ai", difficulty: "medium", title: "Prompt mit Struktur", text: "Du bist Redakteur einer Fachzeitschrift. Erstelle aus den Notizen unten einen Artikel mit 400 bis 500 Wörtern: 1. Einleitung mit einer Zahl, 2. drei Zwischenüberschriften, 3. Fazit mit Empfehlung. Zielgruppe: Führungskräfte im Mittelstand, 40 bis 55 Jahre. Verwende keine Aufzählungen im Fließtext und maximal 2 Fremdwörter." },
  { id: "de-ai-3", category: "ai", difficulty: "hard", title: "Prompt für Code und Daten", text: "Schreibe eine Python-Funktion `parse_dates(rows: list[str]) -> list[date]`, die Datumsangaben in den Formaten \"24.09.2026\", \"2026-09-24\" und \"24/09/26\" erkennt. Ungültige Einträge sollen übersprungen und mit `logging.warning()` protokolliert werden. Ergänze 3 Unit-Tests (pytest) und einen Docstring; keine externen Bibliotheken außer `datetime` & `re`." },
  { id: "de-numbers-1", category: "numbers", difficulty: "easy", title: "Zahlen im Satz", text: "Im ersten Halbjahr haben wir 214 neue Kunden gewonnen, 38 mehr als im Vorjahr. Der Umsatz stieg um 12 Prozent auf 3,4 Millionen Euro. Für das zweite Halbjahr planen wir 6 neue Stellen, davon 4 im Vertrieb und 2 im Support. Die Zahlen stellen wir am 15. Oktober dem Beirat vor." },
  { id: "de-numbers-2", category: "numbers", difficulty: "medium", title: "Tabelle in Prosa", text: "Preisliste 2026: Basis 29,90 Euro pro Monat (bis 5 Nutzer), Team 79,00 Euro (bis 25 Nutzer), Business 199,00 Euro (bis 100 Nutzer); jährliche Zahlung mit 15 Prozent Rabatt. Alle Preise zzgl. 19 Prozent MwSt. Kündigungsfrist: 30 Tage zum Monatsende, Mindestlaufzeit 3 Monate. Telefon: 030 12345678, Mo. bis Fr. 9 bis 17 Uhr." },
  { id: "de-numbers-3", category: "numbers", difficulty: "hard", title: "Sonderzeichen-Training", text: "Bestellung #48213 (Kunde: Müller & Söhne GmbH): 12 × Artikel A-3390 @ 17,50 € = 210,00 €; 3 × B-771 @ 42,90 € = 128,70 €; Versand 5,90 €; Summe netto 344,60 €, brutto 410,07 € (19 %). Lieferung bis 30.09., Zahlungsziel 14 Tage (2 % Skonto bei 7 Tagen). Rückfragen: [order@mueller-soehne.de] oder +49 (0)221 555-0." },
];

const en: PracticeText[] = [
  { id: "en-email-1", category: "email", difficulty: "easy", title: "Meeting confirmation", text: "Hi Sarah, thanks for getting back to me so quickly. I can confirm our meeting on Thursday at ten in your office. I will bring printed copies of the documents so we can go through them together. If anything changes on your side, just let me know. Best regards and see you on Thursday." },
  { id: "en-email-2", category: "email", difficulty: "medium", title: "Question about an invoice", text: "Good morning Mr. Patel, I have two questions about invoice no. 2026-0417 dated 12 September: first, the line for the training session on 3 September is missing; second, the hourly rate of 95 euros differs from the 90 euros we agreed on. Could you please check the invoice and send me a corrected version? Thank you in advance." },
  { id: "en-email-3", category: "email", difficulty: "hard", title: "Access details and links", text: "Hi team, the new account is set up: username \"m.keller@company.com\", the password follows separately by SMS. The documentation lives at https://intranet.company.com/wiki/onboarding (section 4.2), calendar sharing under Settings > Sharing. Please change the password at first login and enable 2-factor authentication; questions go to it-support@company.com." },
  { id: "en-meeting-1", category: "meeting", difficulty: "easy", title: "Weekly meeting notes", text: "We went through the open items from last week today. The presentation for the client is finished and will be sent out tomorrow. The team still needs a decision on the budget for the next quarter. Lisa is taking over the preparation of the workshop and will come back with a proposal by Friday." },
  { id: "en-meeting-2", category: "meeting", difficulty: "medium", title: "Decisions and actions", text: "Outcome of the meeting on 24 September: 1. The relaunch moves to 15 November. 2. Marketing delivers three variants of the home page by 30 September. 3. The budget stays at 12,000 euros, of which 4,000 euros are for external copy. Next meeting: Tuesday, 1 October, 2:00 pm, room 3.12." },
  { id: "en-meeting-3", category: "meeting", difficulty: "hard", title: "Technical sync", text: "Open items (as of 24 Sep): API version 2.3 is switched off on 1 Oct; all clients must migrate to /v3/. The rate limit rises from 100 to 250 requests/minute. Errors 429 & 503 now return a Retry-After header. Owner: backend (O. Yilmaz), deadline 27 Sep; tests run on staging.company.com:8443." },
  { id: "en-customer-1", category: "customer", difficulty: "easy", title: "Reply to a complaint", text: "Dear Ms. Hoffmann, I am sorry that your delivery did not arrive on time. I have checked the order and arranged a new shipment, which will reach you tomorrow. As an apology we are refunding the shipping costs. Thank you for your patience and understanding." },
  { id: "en-customer-2", category: "customer", difficulty: "medium", title: "Quote with terms", text: "Thank you for your enquiry. Our quote for 25 licences comes to 1,875 euros net per year, which is 75 euros per user. This includes setup, email support within 24 hours and all updates. The quote is valid until 31 October 2026; we invoice after activation with 14 days payment terms." },
  { id: "en-customer-3", category: "customer", difficulty: "hard", title: "Support reply with steps", text: "Hi Mr. Brown, the error \"Access denied (403)\" appears when the browser keeps old cookies. Please try this: 1) Settings > Privacy > clear site data; 2) reload the page (Ctrl + F5); 3) sign in again. If it still fails, send us a screenshot incl. time & browser version to support@company.com; we will check the server log." },
  { id: "en-project-1", category: "project", difficulty: "easy", title: "Status report", text: "The project is on schedule. The first phase is complete and has been accepted by the client. In the second phase we build the interface to the ordering system and test it with real data. The only risk we see at the moment is the availability of the external provider, whom we are meeting next week." },
  { id: "en-project-2", category: "project", difficulty: "medium", title: "Milestones and figures", text: "Project Northlight, status week 39: milestone 2 of 5 reached, 43 percent of the budget spent, 3 of 12 risks closed. The test phase starts on 6 October and lasts 15 working days. For training the 80 users we plan 4 sessions of 90 minutes each, on Tuesdays and Thursdays at 9:30 am." },
  { id: "en-project-3", category: "project", difficulty: "hard", title: "Change request", text: "Change request #CR-0912 (priority: high): the Excel export (.xlsx) must encode special characters correctly (UTF-8 instead of ISO-8859-1) and output amounts with two decimals, e.g. $1,234.50. Affected modules: Reporting & Billing; estimated effort 3 to 5 person-days; approval by the steering committee on 2 Oct, 11:00 am." },
  { id: "en-ai-1", category: "ai", difficulty: "easy", title: "Prompt for a summary", text: "Summarize the following text in five sentences. Write for readers who do not know the topic and avoid jargon. At the end, name the most important number in the text and explain in one sentence why it matters. Answer in English and in a factual tone." },
  { id: "en-ai-2", category: "ai", difficulty: "medium", title: "Prompt with structure", text: "You are the editor of a trade magazine. Turn the notes below into an article of 400 to 500 words: 1. an introduction with a number, 2. three subheadings, 3. a conclusion with a recommendation. Audience: managers in mid-sized companies, aged 40 to 55. Use no bullet points in the body and at most 2 technical terms." },
  { id: "en-ai-3", category: "ai", difficulty: "hard", title: "Prompt for code and data", text: "Write a Python function `parse_dates(rows: list[str]) -> list[date]` that recognizes dates in the formats \"09/24/2026\", \"2026-09-24\" and \"24 Sep 26\". Invalid entries should be skipped and logged with `logging.warning()`. Add 3 unit tests (pytest) and a docstring; no external libraries apart from `datetime` & `re`." },
  { id: "en-numbers-1", category: "numbers", difficulty: "easy", title: "Numbers in a sentence", text: "In the first half of the year we won 214 new customers, 38 more than last year. Revenue rose by 12 percent to 3.4 million euros. For the second half we plan 6 new positions, 4 in sales and 2 in support. We present the figures to the advisory board on 15 October." },
  { id: "en-numbers-2", category: "numbers", difficulty: "medium", title: "Price list in prose", text: "Price list 2026: Basic 29.90 euros per month (up to 5 users), Team 79.00 euros (up to 25 users), Business 199.00 euros (up to 100 users); annual payment with a 15 percent discount. All prices plus 19 percent VAT. Notice period: 30 days to the end of the month, minimum term 3 months. Phone: 020 1234 5678, Mon to Fri 9 am to 5 pm." },
  { id: "en-numbers-3", category: "numbers", difficulty: "hard", title: "Symbol workout", text: "Order #48213 (customer: Miller & Sons Ltd.): 12 x item A-3390 @ $17.50 = $210.00; 3 x B-771 @ $42.90 = $128.70; shipping $5.90; subtotal $344.60, total $410.07 (19% tax). Delivery by 09/30, payment within 14 days (2% discount within 7 days). Questions: [orders@miller-sons.com] or +1 (212) 555-0100." },
];

const fr: PracticeText[] = [
  { id: "fr-email-1", category: "email", difficulty: "easy", title: "Confirmation de rendez-vous", text: "Bonjour Madame Weber, merci pour votre réponse rapide. Je vous confirme notre rendez-vous jeudi à dix heures dans vos bureaux. J'apporterai les documents imprimés pour que nous puissions les parcourir ensemble. Si quelque chose change de votre côté, prévenez-moi simplement. Bien cordialement et à jeudi." },
  { id: "fr-email-2", category: "email", difficulty: "medium", title: "Question sur une facture", text: "Bonjour Monsieur Martin, j'ai deux questions sur votre facture n° 2026-0417 du 12 septembre : d'abord, la ligne de la formation du 3 septembre manque ; ensuite, le taux horaire de 95 euros diffère des 90 euros convenus. Pourriez-vous vérifier la facture et m'envoyer une version corrigée ? Merci d'avance." },
  { id: "fr-email-3", category: "email", difficulty: "hard", title: "Accès et liens", text: "Bonjour à tous, le nouvel accès est créé : identifiant « m.keller@entreprise.fr », le mot de passe arrive séparément par SMS. La documentation se trouve sur https://intranet.entreprise.fr/wiki/onboarding (section 4.2), le partage d'agenda sous Paramètres > Partages. Merci de changer le mot de passe à la première connexion et d'activer l'authentification à 2 facteurs ; questions à support-it@entreprise.fr." },
  { id: "fr-meeting-1", category: "meeting", difficulty: "easy", title: "Compte rendu hebdomadaire", text: "Nous avons passé en revue les points ouverts de la semaine dernière. La présentation pour le client est terminée et sera envoyée demain. L'équipe attend encore une décision sur le budget du prochain trimestre. Lisa prend en charge la préparation de l'atelier et reviendra avec une proposition d'ici vendredi." },
  { id: "fr-meeting-2", category: "meeting", difficulty: "medium", title: "Décisions et actions", text: "Résultat de la réunion du 24 septembre : 1. La refonte est reportée au 15 novembre. 2. Le marketing livre trois variantes de la page d'accueil d'ici le 30 septembre. 3. Le budget reste à 12 000 euros, dont 4 000 euros pour les textes externes. Prochaine réunion : mardi 1er octobre, 14 h 00, salle 3.12." },
  { id: "fr-meeting-3", category: "meeting", difficulty: "hard", title: "Point technique", text: "Points ouverts (au 24/09) : la version 2.3 de l'API est coupée le 01/10 ; tous les clients doivent migrer vers /v3/. La limite passe de 100 à 250 requêtes/minute. Les erreurs 429 & 503 renvoient désormais un en-tête Retry-After. Responsable : back-end (Ö. Yilmaz), échéance 27/09 ; les tests tournent sur staging.entreprise.fr:8443." },
  { id: "fr-customer-1", category: "customer", difficulty: "easy", title: "Réponse à une réclamation", text: "Chère Madame Hoffmann, je suis désolé que votre livraison ne soit pas arrivée à temps. J'ai vérifié le dossier et lancé un nouvel envoi qui vous parviendra demain. En guise d'excuse, nous vous remboursons les frais de port. Merci pour votre patience et votre compréhension." },
  { id: "fr-customer-2", category: "customer", difficulty: "medium", title: "Devis et conditions", text: "Merci pour votre demande. Notre devis pour 25 licences s'élève à 1 875 euros HT par an, soit 75 euros par utilisateur. Il comprend la mise en place, l'assistance par e-mail sous 24 heures et toutes les mises à jour. Le devis est valable jusqu'au 31 octobre 2026 ; la facture est émise après activation, paiement à 14 jours." },
  { id: "fr-customer-3", category: "customer", difficulty: "hard", title: "Réponse support avec étapes", text: "Bonjour Monsieur Brun, l'erreur « Accès refusé (403) » apparaît quand le navigateur garde d'anciens cookies. Merci de procéder ainsi : 1) Paramètres > Confidentialité > effacer les données de site ; 2) recharger la page (Ctrl + F5) ; 3) vous reconnecter. Si le problème persiste, envoyez-nous une capture d'écran avec l'heure & la version du navigateur à support@entreprise.fr ; nous vérifierons le journal serveur." },
  { id: "fr-project-1", category: "project", difficulty: "easy", title: "Rapport d'avancement", text: "Le projet respecte le calendrier. La première phase est terminée et validée par le client. Dans la deuxième phase, nous construisons l'interface avec le système de commande et la testons avec de vraies données. Le seul risque que nous voyons pour l'instant concerne la disponibilité du prestataire externe, que nous rencontrons la semaine prochaine." },
  { id: "fr-project-2", category: "project", difficulty: "medium", title: "Jalons et chiffres", text: "Projet Aurore, état semaine 39 : jalon 2 sur 5 atteint, 43 pour cent du budget consommé, 3 risques sur 12 clos. La phase de test démarre le 6 octobre et dure 15 jours ouvrés. Pour former les 80 utilisateurs, nous prévoyons 4 sessions de 90 minutes, les mardis et jeudis à 9 h 30." },
  { id: "fr-project-3", category: "project", difficulty: "hard", title: "Demande de modification", text: "Demande de modification #CR-0912 (priorité : haute) : l'export Excel (.xlsx) doit encoder correctement les accents (UTF-8 au lieu d'ISO-8859-1) et afficher les montants avec deux décimales, par ex. 1 234,50 €. Modules concernés : Reporting & Facturation ; charge estimée 3 à 5 jours-personne ; validation par le comité de pilotage le 02/10 à 11 h 00." },
  { id: "fr-ai-1", category: "ai", difficulty: "easy", title: "Prompt pour un résumé", text: "Résume le texte suivant en cinq phrases. Écris pour des lecteurs qui ne connaissent pas le sujet et évite le jargon. À la fin, cite le chiffre le plus important du texte et explique en une phrase pourquoi il compte. Réponds en français et sur un ton factuel." },
  { id: "fr-ai-2", category: "ai", difficulty: "medium", title: "Prompt structuré", text: "Tu es rédacteur d'une revue professionnelle. À partir des notes ci-dessous, rédige un article de 400 à 500 mots : 1. une introduction avec un chiffre, 2. trois intertitres, 3. une conclusion avec une recommandation. Public : dirigeants de PME, 40 à 55 ans. Pas de listes à puces dans le corps du texte et au maximum 2 termes techniques." },
  { id: "fr-ai-3", category: "ai", difficulty: "hard", title: "Prompt pour du code", text: "Écris une fonction Python `parse_dates(rows: list[str]) -> list[date]` qui reconnaît les dates aux formats « 24/09/2026 », « 2026-09-24 » et « 24 sept. 26 ». Les entrées invalides doivent être ignorées et journalisées avec `logging.warning()`. Ajoute 3 tests unitaires (pytest) et une docstring ; aucune bibliothèque externe à part `datetime` & `re`." },
  { id: "fr-numbers-1", category: "numbers", difficulty: "easy", title: "Des chiffres dans la phrase", text: "Au premier semestre, nous avons gagné 214 nouveaux clients, 38 de plus que l'an dernier. Le chiffre d'affaires a progressé de 12 pour cent pour atteindre 3,4 millions d'euros. Pour le second semestre, nous prévoyons 6 nouveaux postes, dont 4 en vente et 2 en support. Nous présentons ces chiffres au conseil le 15 octobre." },
  { id: "fr-numbers-2", category: "numbers", difficulty: "medium", title: "Grille tarifaire en prose", text: "Tarifs 2026 : Base 29,90 euros par mois (jusqu'à 5 utilisateurs), Équipe 79,00 euros (jusqu'à 25 utilisateurs), Entreprise 199,00 euros (jusqu'à 100 utilisateurs) ; paiement annuel avec 15 pour cent de remise. Tous les prix hors TVA à 20 pour cent. Préavis : 30 jours avant la fin du mois, engagement minimum 3 mois. Téléphone : 01 23 45 67 89, du lundi au vendredi de 9 h à 17 h." },
  { id: "fr-numbers-3", category: "numbers", difficulty: "hard", title: "Entraînement aux caractères spéciaux", text: "Commande #48213 (client : Muller & Fils SARL) : 12 × article A-3390 @ 17,50 € = 210,00 € ; 3 × B-771 @ 42,90 € = 128,70 € ; port 5,90 € ; total HT 344,60 €, TTC 413,52 € (20 %). Livraison avant le 30/09, paiement à 14 jours (2 % d'escompte à 7 jours). Questions : [commandes@muller-fils.fr] ou +33 (0)1 55 55 00 00." },
];

const texts: Record<Locale, PracticeText[]> = { de, en, fr };

export function getPracticeTexts(locale: Locale): PracticeText[] {
  return texts[locale] ?? texts.en;
}

export function getPracticeText(locale: Locale, id: string): PracticeText | undefined {
  return getPracticeTexts(locale).find((t) => t.id === id);
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}
