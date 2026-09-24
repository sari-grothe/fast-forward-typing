type FAQItem = { question: string; answer: string };

export const homeFAQ: Record<string, { title: string; items: FAQItem[] }> = {
  de: {
    title: "Häufig gestellte Fragen",
    items: [
      {
        question: "Ist das 10-Finger-System-Training kostenlos?",
        answer: "Deine Tippgeschwindigkeit misst du kostenlos, und auch die ersten Lektionen sind frei. Der komplette Kurs und das offizielle Tippzertifikat sind kostenpflichtig.",
      },
      {
        question: "Für wen ist das 10-Finger-System gedacht?",
        answer: "Für alle, die im Beruf viel schreiben: E-Mails, Dokumente, Chats, KI-Prompts. Wer mit zehn Fingern tippt, arbeitet schneller und konzentrierter, macht weniger Fehler und wirkt bei allem, was er schreibt, professioneller.",
      },
      {
        question: "Wie lange dauert es, bis ich schneller tippe?",
        answer: "Die meisten sehen nach zwei bis drei Wochen mit täglich 10 bis 15 Minuten Übung deutliche Verbesserungen. Wer dranbleibt, hat das 10-Finger-System nach wenigen Wochen verinnerlicht - danach wächst die Geschwindigkeit mit jedem Arbeitstag weiter.",
      },
      {
        question: "Brauche ich eine bestimmte Tastatur?",
        answer: "Nein. Der Kurs funktioniert mit jeder Tastatur. Ob Laptop, Desktop oder mechanische Tastatur - du kannst sofort loslegen.",
      },
      {
        question: "Welche Sprachen werden unterstützt?",
        answer: "Aktuell gibt es den Kurs auf Deutsch, Englisch und Französisch, jeweils passend zum Tastaturlayout. Weitere Sprachen sind in Planung.",
      },
      {
        question: "Was bringt mir das Tippzertifikat?",
        answer: "Das Zertifikat bestätigt deine Tippgeschwindigkeit und Genauigkeit offiziell. Du kannst es in deinen Lebenslauf oder dein LinkedIn-Profil aufnehmen, um deine Fähigkeiten nachzuweisen.",
      },
      {
        question: "Kann ich meinen Fortschritt speichern?",
        answer: "Dein Fortschritt wird automatisch in deinem Browser gespeichert, ganz ohne Konto oder Anmeldung. Auf einem neuen Gerät geht er aktuell verloren - geräteübergreifender Fortschritt ist geplant.",
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
        question: "Is the touch typing course free?",
        answer: "The typing test is free, and so are the first lessons. The full course and the official typing certificate are paid.",
      },
      {
        question: "Who is the touch typing course for?",
        answer: "For anyone who writes a lot at work: emails, documents, chat, AI prompts. Touch typists work faster and with more focus, make fewer mistakes, and come across as more professional in everything they write.",
      },
      {
        question: "How long until I type faster?",
        answer: "Most people see clear improvements after two to three weeks of 10 to 15 minutes a day. Stick with it and touch typing is second nature after a few weeks - speed keeps growing with every working day after that.",
      },
      {
        question: "Do I need a specific keyboard?",
        answer: "No. The course works with any keyboard. Laptop, desktop, or mechanical - you can start right away.",
      },
      {
        question: "What languages are supported?",
        answer: "The course is currently available in English, German and French, each built for its own keyboard layout. More languages are planned.",
      },
      {
        question: "What's the typing certificate for?",
        answer: "The certificate officially confirms your typing speed and accuracy. You can add it to your CV or LinkedIn profile to prove your skills.",
      },
      {
        question: "Can I save my progress?",
        answer: "Your progress is saved automatically in your browser, no account or sign-up needed. It won't carry over to a new device yet - cross-device progress is planned.",
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
        question: "Est-ce que le cours de dactylographie est gratuit ?",
        answer: "Le test de dactylographie est gratuit, et les premières leçons aussi. Le cours complet et le certificat de dactylographie officiel sont payants.",
      },
      {
        question: "À qui s'adresse le cours de dactylographie ?",
        answer: "À tous ceux qui écrivent beaucoup au travail : e-mails, documents, chats, prompts IA. Taper à dix doigts, c'est travailler plus vite et plus concentré, faire moins d'erreurs et paraître plus pro dans tout ce que tu écris.",
      },
      {
        question: "Combien de temps avant de taper plus vite ?",
        answer: "La plupart voient des progrès nets après deux à trois semaines à raison de 10 à 15 minutes par jour. En restant régulier, la frappe à dix doigts devient naturelle en quelques semaines - ensuite, la vitesse continue de monter à chaque journée de travail.",
      },
      {
        question: "Ai-je besoin d'un clavier spécifique ?",
        answer: "Non. Le cours fonctionne avec n'importe quel clavier. Portable, bureau ou mécanique - tu peux commencer tout de suite.",
      },
      {
        question: "Quelles langues sont disponibles ?",
        answer: "Le cours est actuellement disponible en français, anglais et allemand, chacun pensé pour sa disposition de clavier. D'autres langues sont prévues.",
      },
      {
        question: "À quoi sert le certificat de dactylographie ?",
        answer: "Le certificat confirme officiellement ta vitesse et ta précision de frappe. Tu peux l'ajouter à ton CV ou ton profil LinkedIn pour prouver tes compétences.",
      },
      {
        question: "Puis-je sauvegarder mes progrès ?",
        answer: "Ta progression est sauvegardée automatiquement dans ton navigateur, sans compte ni inscription. Elle ne se transfère pas encore sur un nouvel appareil - la progression multi-appareils est prévue.",
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
        answer: "Klar - trag dich für unser Tippzertifikat (5 Euro, aktuell Warteliste) ein. Mit WPM, Genauigkeit und Ausstellungsdatum, bereit für Lebenslauf oder LinkedIn.",
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
        answer: "Yep - join the waitlist for our typing certificate (5 euros). It'll have your WPM, your accuracy, and a real issue date, ready for your CV or LinkedIn.",
      },
    ],
  },
  fr: {
    title: "FAQ du test de dactylographie",
    items: [
      {
        question: "Comment fonctionne le test de dactylographie ?",
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
        answer: "Oui - inscris-toi sur la liste d'attente de notre certificat de dactylographie (5 euros). Avec ta vitesse, ta précision et une date de délivrance, prêt pour ton CV ou LinkedIn.",
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
        answer: "Einmalig 5 Euro, kein Abo. Das Zertifikat ist aktuell noch nicht käuflich - trag dich in die Warteliste ein und dein Preis von 5 Euro ist dir sicher, auch wenn er später steigt. Wenn du den kompletten Kurs machst, ist das Zertifikat ohne Aufpreis enthalten.",
      },
      {
        question: "Wie bekomme ich mein Zertifikat?",
        answer: "Du misst zuerst deine Tippgeschwindigkeit, dann trägst du dich mit deiner E-Mail-Adresse in die Warteliste ein. Sobald das Zertifikat verfügbar ist, schreiben wir dir.",
      },
      {
        question: "Kann ich das Zertifikat in meinen Lebenslauf aufnehmen?",
        answer: "Ja, das ist der Zweck. Es enthält deine Tippgeschwindigkeit, Genauigkeit und ein Ausstellungsdatum - geeignet für Lebenslauf, LinkedIn-Profil und Bewerbungen.",
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
        answer: "A one-time 5 euros, no subscription. It's not purchasable yet - join the waitlist and your 5 euro price is locked in, even if it goes up later. If you take the full course, the certificate is included at no extra cost.",
      },
      {
        question: "How do I get my certificate?",
        answer: "Take the typing test first, then sign up with your email on the waitlist. We'll email you the moment the certificate is available.",
      },
      {
        question: "Can I add the certificate to my CV?",
        answer: "Yes, that's the point. It includes your typing speed, accuracy, and issue date - suitable for a CV, LinkedIn profile, or job application.",
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
        question: "Combien coûte le certificat de dactylographie ?",
        answer: "5 euros en une fois, pas d'abonnement. Il n'est pas encore disponible à l'achat - inscris-toi sur la liste d'attente et ce prix de 5 euros est garanti, même s'il augmente plus tard. Si tu suis le cours complet, le certificat est inclus sans supplément.",
      },
      {
        question: "Comment obtenir mon certificat ?",
        answer: "Passe d'abord le test de dactylographie, puis inscris-toi avec ton e-mail sur la liste d'attente. On t'écrit dès que le certificat est disponible.",
      },
      {
        question: "Puis-je ajouter le certificat à mon CV ?",
        answer: "Oui, c'est fait pour ça. Il inclut ta vitesse de frappe, ta précision et la date de délivrance - adapté au CV, au profil LinkedIn et aux candidatures.",
      },
      {
        question: "Puis-je repasser le test du certificat ?",
        answer: "Oui, tu peux repasser le test pour obtenir un meilleur résultat. Chaque tentative est incluse dans le prix d'achat.",
      },
    ],
  },
};
