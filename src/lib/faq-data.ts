type FAQItem = { question: string; answer: string };

export const homeFAQ: Record<string, { title: string; items: FAQItem[] }> = {
  de: {
    title: "Häufig gestellte Fragen",
    items: [
      {
        question: "Ist Fast Forward Typing kostenlos?",
        answer: "Der Test und die Grundfunktionen sind komplett kostenlos. Für das offizielle Tippzertifikat fällt eine einmalige Gebühr von 5 Euro an.",
      },
      {
        question: "Für wen ist Fast Forward Typing gedacht?",
        answer: "Für Erwachsene, die schneller und sicherer tippen möchten - egal ob Berufseinsteiger, Studierende oder erfahrene Büroangestellte, die ihr Tippen verbessern wollen.",
      },
      {
        question: "Wie lange dauert es, bis ich schneller tippe?",
        answer: "Die meisten Nutzer sehen nach zwei bis drei Wochen mit täglichen Übungen von 10 bis 15 Minuten deutliche Verbesserungen. Manche schaffen den Wechsel von 6 auf 10 Finger in nur drei Wochen.",
      },
      {
        question: "Brauche ich eine bestimmte Tastatur?",
        answer: "Nein. Fast Forward Typing funktioniert mit jeder Tastatur. Ob Laptop, Desktop oder mechanische Tastatur - du kannst sofort loslegen.",
      },
      {
        question: "Welche Sprachen werden unterstützt?",
        answer: "Aktuell ist Fast Forward Typing auf Deutsch, Englisch und Französisch verfügbar. Weitere Sprachen sind in Planung.",
      },
      {
        question: "Was bringt mir das Tippzertifikat?",
        answer: "Das Zertifikat bestätigt deine Tippgeschwindigkeit und Genauigkeit offiziell. Du kannst es in deinen Lebenslauf oder dein LinkedIn-Profil aufnehmen, um deine Fähigkeiten nachzuweisen.",
      },
      {
        question: "Kann ich meinen Fortschritt speichern?",
        answer: "Ja, mit einem kostenlosen Konto werden deine Ergebnisse gespeichert und du kannst deinen Fortschritt über Zeit verfolgen. Das Feature ist in Kürze verfügbar.",
      },
      {
        question: "Wie wird meine Tippgeschwindigkeit gemessen?",
        answer: "Die Geschwindigkeit wird in Wörtern pro Minute (WPM) gemessen. Ein Wort entspricht dabei fünf Zeichen. Der Test zählt nur korrekt getippte Zeichen.",
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is Fast Forward Typing free?",
        answer: "The typing test and core features are completely free. The official typing certificate costs a one-time fee of 5 euros.",
      },
      {
        question: "Who is Fast Forward Typing for?",
        answer: "For adults who want to type faster and more accurately - whether you're starting your career, studying, or an experienced office worker looking to improve.",
      },
      {
        question: "How long until I type faster?",
        answer: "Most users see clear improvements after two to three weeks of daily practice for 10 to 15 minutes. Some manage the switch from 6 to 10 fingers in just three weeks.",
      },
      {
        question: "Do I need a specific keyboard?",
        answer: "No. Fast Forward Typing works with any keyboard. Laptop, desktop, or mechanical - you can start right away.",
      },
      {
        question: "What languages are supported?",
        answer: "Fast Forward Typing is currently available in German, English, and French. More languages are planned.",
      },
      {
        question: "What's the typing certificate for?",
        answer: "The certificate officially confirms your typing speed and accuracy. You can add it to your CV or LinkedIn profile to prove your skills.",
      },
      {
        question: "Can I save my progress?",
        answer: "Yes, with a free account your results are saved and you can track your progress over time. This feature is coming soon.",
      },
      {
        question: "How is typing speed measured?",
        answer: "Speed is measured in words per minute (WPM). One word equals five characters. The test only counts correctly typed characters.",
      },
    ],
  },
  fr: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Est-ce que Fast Forward Typing est gratuit ?",
        answer: "Le test de frappe et les fonctionnalités de base sont entièrement gratuits. Le certificat de frappe officiel coûte 5 euros en paiement unique.",
      },
      {
        question: "À qui s'adresse Fast Forward Typing ?",
        answer: "Aux adultes qui veulent taper plus vite et plus précisément - que tu débutes ta carrière, que tu sois étudiant ou employé de bureau souhaitant s'améliorer.",
      },
      {
        question: "Combien de temps avant de taper plus vite ?",
        answer: "La plupart des utilisateurs voient des améliorations nettes après deux à trois semaines de pratique quotidienne de 10 à 15 minutes. Certains passent de 6 à 10 doigts en seulement trois semaines.",
      },
      {
        question: "Ai-je besoin d'un clavier spécifique ?",
        answer: "Non. Fast Forward Typing fonctionne avec n'importe quel clavier. Portable, bureau ou mécanique - tu peux commencer tout de suite.",
      },
      {
        question: "Quelles langues sont disponibles ?",
        answer: "Fast Forward Typing est actuellement disponible en allemand, anglais et français. D'autres langues sont prévues.",
      },
      {
        question: "À quoi sert le certificat de frappe ?",
        answer: "Le certificat confirme officiellement ta vitesse et ta précision de frappe. Tu peux l'ajouter à ton CV ou ton profil LinkedIn pour prouver tes compétences.",
      },
      {
        question: "Puis-je sauvegarder mes progrès ?",
        answer: "Oui, avec un compte gratuit, tes résultats sont sauvegardés et tu peux suivre ta progression dans le temps. Cette fonctionnalité arrive bientôt.",
      },
      {
        question: "Comment la vitesse de frappe est-elle mesurée ?",
        answer: "La vitesse est mesurée en mots par minute (MPM). Un mot correspond à cinq caractères. Le test ne compte que les caractères correctement tapés.",
      },
    ],
  },
};

export const speedTestFAQ: Record<string, { title: string; items: FAQItem[] }> = {
  de: {
    title: "Häufig gestellte Fragen zur Tippgeschwindigkeit",
    items: [
      {
        question: "Wie funktioniert der Test?",
        answer: "Wähle eine Dauer (1, 2 oder 5 Minuten), klicke in das Textfeld und tippe den angezeigten Text ab. Der Timer startet mit dem ersten Tastendruck. Bei falschen Eingaben wird die Eingabe blockiert, bis du die richtige Taste triffst.",
      },
      {
        question: "Was ist eine gute Tippgeschwindigkeit?",
        answer: "Der Median liegt bei 44-46 WPM - etwas höher, als die meisten Seiten dir erzählen. Ab 60 WPM bist du schnell, das ist Chefsekretärinnen-Tempo aus einem 90er-Film. Profi-Schreibkräfte schaffen 100+.",
      },
      {
        question: "Was ist die schnellste je gemessene Tippgeschwindigkeit?",
        answer: "216 WPM, aufgestellt von Stella Pajunas 1946 - auf einer mechanischen Schreibmaschine. Die brauchte deutlich mehr Kraft pro Taste als deine. So schnell musst du gar nicht sein, um als schnell zu gelten.",
      },
      {
        question: "Warum wird meine Eingabe blockiert, wenn ich falsch tippe?",
        answer: "Die Blockierung bei Fehlern trainiert Genauigkeit. Statt Fehler zu überspringen, lernst du, jeden Buchstaben richtig zu treffen. Das verbessert langfristig sowohl Geschwindigkeit als auch Präzision.",
      },
      {
        question: "Kann ich den Test mehrmals machen?",
        answer: "Ja, so oft du möchtest. Klicke nach dem Ergebnis einfach auf 'Nochmal tippen' oder 'Neuer Text' für einen neuen Versuch. Jeder Test verwendet einen zufälligen Text.",
      },
      {
        question: "Was bedeuten WPM und Genauigkeit?",
        answer: "WPM steht für Wörter pro Minute (ein Wort = 5 Zeichen). Die Genauigkeit zeigt den Prozentsatz der fehlerfreien Eingaben im Verhältnis zu allen Tastenanschlägen.",
      },
      {
        question: "Kann ich meine Tippgeschwindigkeit offiziell nachweisen?",
        answer: "Klar - hol dir unser Tippzertifikat für 5 Euro. Mit WPM, Genauigkeit und Ausstellungsdatum, bereit für Lebenslauf oder LinkedIn.",
      },
    ],
  },
  en: {
    title: "Typing Test FAQ",
    items: [
      {
        question: "How does the typing test work?",
        answer: "Choose a duration (1, 2, or 5 minutes), click the text area, and type the displayed text. The timer starts with your first keystroke. Wrong inputs are blocked until you hit the correct key.",
      },
      {
        question: "What is a good typing speed?",
        answer: "Median is 44-46 WPM - a bit higher than most sites tell you. Cross 60 and you're fast, think secretary in a 90s movie. Professional typists clear 100+.",
      },
      {
        question: "What's the fastest typing speed ever recorded?",
        answer: "216 WPM, set by Stella Pajunas back in 1946 - on a manual typewriter. Those needed way more force per key than yours does. You don't need anywhere close to that to call yourself fast.",
      },
      {
        question: "Why is my input blocked when I mistype?",
        answer: "Blocking on errors trains accuracy. Instead of skipping mistakes, you learn to hit every key correctly. This improves both speed and precision in the long run.",
      },
      {
        question: "Can I take the test multiple times?",
        answer: "Yes, as many times as you like. After your result, click 'Try again' or 'New text' for a fresh attempt. Each test uses a random text.",
      },
      {
        question: "What do WPM and accuracy mean?",
        answer: "WPM stands for words per minute (one word = 5 characters). Accuracy shows the percentage of error-free keystrokes compared to all keystrokes.",
      },
      {
        question: "Can I get proof of my typing speed?",
        answer: "Yep - grab our typing certificate for 5 euros. It's got your WPM, your accuracy, and a real issue date, ready for your CV or LinkedIn.",
      },
    ],
  },
  fr: {
    title: "FAQ du test de frappe",
    items: [
      {
        question: "Comment fonctionne le test de frappe ?",
        answer: "Choisis une durée (1, 2 ou 5 minutes), clique dans la zone de texte et tape le texte affiché. Le chrono démarre au premier appui. Les erreurs bloquent la saisie jusqu'à ce que tu appuies sur la bonne touche.",
      },
      {
        question: "Quelle est une bonne vitesse de frappe ?",
        answer: "La médiane est de 44-46 MPM - un peu plus haute que ce que la plupart des sites te disent. Au-dessus de 60 MPM, tu es rapide, façon secrétaire de direction dans un film des années 90. Les dactylos professionnels dépassent 100.",
      },
      {
        question: "Quelle est la vitesse de frappe la plus rapide jamais enregistrée ?",
        answer: "216 MPM, record établi par Stella Pajunas en 1946 - sur une machine à écrire mécanique, qui demandait bien plus de force par touche que ton clavier. Pas besoin d'être aussi rapide pour être considéré comme rapide.",
      },
      {
        question: "Pourquoi ma saisie est-elle bloquée quand je fais une erreur ?",
        answer: "Le blocage en cas d'erreur entraîne la précision. Au lieu de sauter les erreurs, tu apprends à frapper chaque touche correctement. Cela améliore la vitesse et la précision sur le long terme.",
      },
      {
        question: "Puis-je refaire le test plusieurs fois ?",
        answer: "Oui, autant de fois que tu veux. Après ton résultat, clique sur 'Réessayer' ou 'Nouveau texte' pour un nouvel essai. Chaque test utilise un texte aléatoire.",
      },
      {
        question: "Que signifient MPM et précision ?",
        answer: "MPM signifie mots par minute (un mot = 5 caractères). La précision montre le pourcentage de frappes sans erreur par rapport à toutes les frappes.",
      },
      {
        question: "Puis-je prouver ma vitesse de frappe ?",
        answer: "Oui - récupère notre certificat de frappe pour 5 euros. Avec ta vitesse, ta précision et une date de délivrance, prêt pour ton CV ou LinkedIn.",
      },
    ],
  },
};

export const certificateFAQ: Record<string, { title: string; items: FAQItem[] }> = {
  de: {
    title: "Fragen zum Zertifikat",
    items: [
      {
        question: "Was kostet das Tippzertifikat?",
        answer: "Das Zertifikat kostet einmalig 5 Euro. Keine Abos, keine versteckten Kosten.",
      },
      {
        question: "Wie bekomme ich mein Zertifikat?",
        answer: "Du misst zuerst deine Tippgeschwindigkeit. Wenn du mit deinem Ergebnis zufrieden bist, kaufst du das Zertifikat - und bekommst es sofort als PDF per E-Mail.",
      },
      {
        question: "Kann ich das Zertifikat in meinen Lebenslauf aufnehmen?",
        answer: "Ja. Das Zertifikat enthält deine Tippgeschwindigkeit, Genauigkeit und ein Ausstellungsdatum. Es eignet sich für Lebensläufe, LinkedIn-Profile und Bewerbungen.",
      },
      {
        question: "Kann ich den Zertifikatstest wiederholen?",
        answer: "Ja, du kannst den Test wiederholen, um ein besseres Ergebnis zu erzielen. Jeder Versuch ist im Kaufpreis enthalten.",
      },
    ],
  },
  en: {
    title: "Certificate FAQ",
    items: [
      {
        question: "How much does the typing certificate cost?",
        answer: "The certificate costs a one-time fee of 5 euros. No subscriptions, no hidden fees.",
      },
      {
        question: "How do I get my certificate?",
        answer: "You take the typing test first. If you're happy with your result, you buy the certificate - and receive it instantly as a PDF via email.",
      },
      {
        question: "Can I add the certificate to my CV?",
        answer: "Yes. The certificate includes your typing speed, accuracy, and issue date. It's suitable for CVs, LinkedIn profiles, and job applications.",
      },
      {
        question: "Can I retake the certificate test?",
        answer: "Yes, you can retake the test to achieve a better result. Every attempt is included in the purchase price.",
      },
    ],
  },
  fr: {
    title: "FAQ du certificat",
    items: [
      {
        question: "Combien coûte le certificat de frappe ?",
        answer: "Le certificat coûte 5 euros en paiement unique. Pas d'abonnement, pas de frais cachés.",
      },
      {
        question: "Comment obtenir mon certificat ?",
        answer: "Tu passes d'abord le test de frappe. Si tu es content de ton résultat, tu achètes le certificat - et tu le reçois instantanément en PDF par e-mail.",
      },
      {
        question: "Puis-je ajouter le certificat à mon CV ?",
        answer: "Oui. Le certificat inclut ta vitesse de frappe, ta précision et la date de délivrance. Il convient pour les CV, profils LinkedIn et candidatures.",
      },
      {
        question: "Puis-je repasser le test du certificat ?",
        answer: "Oui, tu peux repasser le test pour obtenir un meilleur résultat. Chaque tentative est incluse dans le prix d'achat.",
      },
    ],
  },
};
