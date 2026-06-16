const texts: Record<string, string[]> = {
  de: [
    "Die Sonne scheint durch das Fenster und wirft lange Schatten auf den Boden. Draußen singen die Vögel ihr Morgenlied. Eine Tasse Kaffee steht dampfend auf dem Tisch. Der Tag beginnt ruhig und voller Möglichkeiten.",
    "Wer schneller tippt, spart jeden Tag wertvolle Minuten. Diese Minuten summieren sich über Wochen und Monate zu Stunden. Zeit, die man für die wirklich wichtigen Dinge nutzen kann.",
    "Die Tastatur ist das wichtigste Werkzeug im digitalen Alltag. Jeder Finger hat seinen Platz, jede Taste ihren Zweck. Mit etwas Übung fließen die Wörter fast von allein auf den Bildschirm.",
    "Ein guter Text entsteht nicht beim ersten Versuch. Er wächst mit jedem Entwurf, jeder Korrektur, jeder neuen Idee. Das Wichtigste ist, überhaupt anzufangen und die Finger auf die Tasten zu legen.",
    "Der Regen trommelt leise gegen die Scheibe. Drinnen ist es warm und still. Nur das leise Klicken der Tastatur durchbricht die Stille. Wort für Wort entsteht ein neuer Gedanke auf dem Bildschirm.",
    "In der Bibliothek riecht es nach alten Büchern und frischem Papier. Die Regale reichen bis zur Decke. Zwischen den Seiten warten tausend Geschichten darauf, entdeckt zu werden. Jedes Buch ist eine Tür in eine andere Welt.",
    "Der Markt am Samstagmorgen ist voller Leben. Frisches Obst und Gemüse leuchten in allen Farben. Der Duft von frisch gebackenem Brot zieht durch die Gassen. Die Menschen lachen und plaudern in der Morgensonne.",
    "Musik kann Stimmungen verändern wie nichts anderes. Ein Lied kann Erinnerungen wecken, die man längst vergessen glaubte. Melodien verbinden Menschen über Grenzen und Sprachen hinweg. Sie ist die universelle Sprache der Gefühle.",
    "Der erste Schnee des Winters bedeckt die Stadt wie eine weiße Decke. Kinder bauen Schneemänner im Park. Die Straßenlaternen werfen warmes Licht auf die verschneiten Wege. Alles wirkt friedlich und neu.",
    "Kochen ist wie Musik machen mit Zutaten. Man braucht ein gutes Rezept, frische Produkte und etwas Mut zum Experimentieren. Das beste Gericht entsteht oft, wenn man sich traut, etwas Neues auszuprobieren.",
  ],
  en: [
    "The morning light filtered through the window, casting soft patterns across the desk. A cup of coffee sat steaming beside the keyboard. Outside, birds were singing their first songs of the day. Everything felt calm and full of possibility.",
    "Typing faster means thinking less about your fingers and more about your ideas. Every word per minute you gain is time returned to your day. Time you can spend on the things that actually matter.",
    "The keyboard is the most important tool in the digital world. Each finger has its place, each key its purpose. With a little practice, words flow onto the screen almost by themselves.",
    "A good text does not come together on the first try. It grows with each draft, each revision, each new idea. The most important thing is to start and put your fingers on the keys.",
    "Rain taps softly against the window. Inside it is warm and quiet. Only the gentle clicking of the keyboard breaks the silence. Word by word, a new thought takes shape on the screen.",
    "The library smells of old books and fresh paper. Shelves reach up to the ceiling. Between the pages, a thousand stories wait to be discovered. Every book is a door into a different world.",
    "The Saturday morning market is full of life. Fresh fruit and vegetables glow in every color. The scent of freshly baked bread drifts through the lanes. People laugh and chat in the morning sun.",
    "Music can change a mood like nothing else. A single song can bring back memories you thought were long forgotten. Melodies connect people across borders and languages. It is the universal language of feeling.",
    "The first snow of winter covers the city like a white blanket. Children build snowmen in the park. Street lamps cast warm light on the snowy paths. Everything feels peaceful and brand new.",
    "Cooking is like making music with ingredients. You need a good recipe, fresh produce, and a little courage to experiment. The best dish often comes when you dare to try something new.",
  ],
  fr: [
    "La lumière du matin filtre à travers la fenêtre et dessine des ombres douces sur le bureau. Une tasse de café fume doucement à côté du clavier. Dehors, les oiseaux chantent leurs premières mélodies. Tout semble calme et plein de promesses.",
    "Taper plus vite, c'est penser moins à ses doigts et plus à ses idées. Chaque mot par minute gagné, c'est du temps rendu à ta journée. Du temps pour les choses qui comptent vraiment.",
    "Le clavier est l'outil le plus important du monde numérique. Chaque doigt a sa place, chaque touche son rôle. Avec un peu de pratique, les mots coulent presque tout seuls sur l'écran.",
    "Un bon texte ne vient pas du premier coup. Il grandit avec chaque brouillon, chaque correction, chaque nouvelle idée. Le plus important, c'est de commencer et de poser les doigts sur les touches.",
    "La pluie tambourine doucement contre la vitre. À l'intérieur, il fait chaud et calme. Seul le clic léger du clavier brise le silence. Mot après mot, une nouvelle pensée prend forme sur l'écran.",
    "La bibliothèque sent les vieux livres et le papier frais. Les étagères montent jusqu'au plafond. Entre les pages, mille histoires attendent d'être découvertes. Chaque livre est une porte vers un autre monde.",
    "Le marché du samedi matin déborde de vie. Fruits et légumes frais brillent de toutes les couleurs. Le parfum du pain tout juste sorti du four flotte dans les allées. Les gens rient et discutent au soleil du matin.",
    "La musique peut changer une humeur comme rien d'autre. Une seule chanson peut raviver des souvenirs qu'on croyait oubliés. Les mélodies relient les gens par-delà les frontières et les langues. C'est le langage universel des émotions.",
    "La première neige de l'hiver recouvre la ville comme une couverture blanche. Les enfants construisent des bonshommes de neige dans le parc. Les réverbères projettent une lumière chaude sur les chemins enneigés. Tout semble paisible et nouveau.",
    "Cuisiner, c'est comme faire de la musique avec des ingrédients. Il faut une bonne recette, des produits frais et un peu de courage pour expérimenter. Le meilleur plat naît souvent quand on ose essayer quelque chose de nouveau.",
  ],
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getRandomText(locale: string, durationSeconds = 60): string {
  const pool = texts[locale] || texts.en;
  const shuffled = shuffle(pool);

  const charsPerSecond = 2;
  const targetChars = durationSeconds * charsPerSecond;

  let combined = "";
  let i = 0;
  while (combined.length < targetChars) {
    combined += (combined ? " " : "") + shuffled[i % shuffled.length];
    i++;
  }
  return combined;
}

export function getAllTexts(locale: string): string[] {
  return texts[locale] || texts.en;
}
