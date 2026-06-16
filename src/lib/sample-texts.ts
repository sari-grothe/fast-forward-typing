const texts: Record<string, string[]> = {
  de: [
    "Die Sonne scheint durch das Fenster und wirft lange Schatten auf den Boden. Draußen singen die Vögel ihr Morgenlied. Eine Tasse Kaffee steht dampfend auf dem Tisch. Der Tag beginnt ruhig und voller Möglichkeiten.",
    "Wer schneller tippt, spart jeden Tag wertvolle Minuten. Diese Minuten summieren sich über Wochen und Monate zu Stunden. Zeit, die man für die wirklich wichtigen Dinge nutzen kann.",
    "Die Tastatur ist das wichtigste Werkzeug im digitalen Alltag. Jeder Finger hat seinen Platz, jede Taste ihren Zweck. Mit etwas Übung fließen die Wörter fast von allein auf den Bildschirm.",
  ],
  en: [
    "The morning light filtered through the window, casting soft patterns across the desk. A cup of coffee sat steaming beside the keyboard. Outside, birds were singing their first songs of the day. Everything felt calm and full of possibility.",
    "Typing faster means thinking less about your fingers and more about your ideas. Every word per minute you gain is time returned to your day. Time you can spend on the things that actually matter.",
    "The keyboard is the most important tool in the digital world. Each finger has its place, each key its purpose. With a little practice, words flow onto the screen almost by themselves.",
  ],
  fr: [
    "La lumière du matin filtre à travers la fenêtre et dessine des ombres douces sur le bureau. Une tasse de café fume doucement à côté du clavier. Dehors, les oiseaux chantent leurs premières mélodies. Tout semble calme et plein de promesses.",
    "Taper plus vite, c'est penser moins à ses doigts et plus à ses idées. Chaque mot par minute gagné, c'est du temps rendu à ta journée. Du temps pour les choses qui comptent vraiment.",
    "Le clavier est l'outil le plus important du monde numérique. Chaque doigt a sa place, chaque touche son rôle. Avec un peu de pratique, les mots coulent presque tout seuls sur l'écran.",
  ],
};

export function getRandomText(locale: string): string {
  const pool = texts[locale] || texts.en;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getAllTexts(locale: string): string[] {
  return texts[locale] || texts.en;
}
