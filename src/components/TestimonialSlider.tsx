type Testimonial = {
  name: string;
  role: string;
  text: string;
};

const testimonials: Record<string, Testimonial[]> = {
  de: [
    {
      name: "Christin G.",
      role: "Studentin",
      text: "Ich hatte ehrlich gesagt keine Lust, Tippen zu üben. Aber die App macht es so einfach und motivierend, dass ich drangeblieben bin. Nach jeder Übung sieht man direkt den Fortschritt. Das hält einen bei der Stange.",
    },
    {
      name: "Tom L.",
      role: "Softwareentwickler",
      text: "Ich habe immer mit sechs Fingern getippt und dachte, das reicht. Drei Wochen später tippe ich mit allen zehn. Einfach dem Kurs folgen, dem Prozess vertrauen - der Fortschritt kommt schneller als man denkt.",
    },
    {
      name: "Lino L.",
      role: "Projektmanager",
      text: "Es hat mich so genervt, wie langsam ich war. Jede E-Mail hat ewig gedauert. Jetzt tippe ich so viel schneller und mache weniger Fehler. Die Verbesserung nach nur zwei Wochen ist wahnsinnig gut.",
    },
    {
      name: "Lola L.",
      role: "Freelancerin",
      text: "Sehr übersichtlich, genau die Features, die man braucht, und dazu richtig modern. Kein Schnickschnack, kein Abo-Druck. Hat einfach Spaß gemacht, jeden Tag eine Übung zu machen.",
    },
  ],
  en: [
    {
      name: "Christin G.",
      role: "Student",
      text: "Honestly, I wasn't excited about practicing typing. But the app makes it so easy and encouraging that I kept going. After every exercise, you see your progress right away. That keeps you motivated.",
    },
    {
      name: "Tom L.",
      role: "Software Developer",
      text: "I always typed with six fingers and thought that was enough. Three weeks later, I'm typing with all ten. Just follow the course, trust the process - progress comes faster than you'd think.",
    },
    {
      name: "Lino L.",
      role: "Project Manager",
      text: "It frustrated me so much how slow I was. Every email took forever. Now I type so much faster with fewer errors. The improvement after just two weeks is incredible.",
    },
    {
      name: "Lola L.",
      role: "Freelancer",
      text: "Super clean, exactly the features you need, and really modern. No clutter, no subscription pressure. It was genuinely fun to do one exercise a day.",
    },
  ],
  fr: [
    {
      name: "Christin G.",
      role: "Étudiante",
      text: "Honnêtement, je n'avais pas envie de m'entraîner à taper. Mais l'app rend les choses tellement simples et motivantes que j'ai continué. Après chaque exercice, on voit ses progrès. Ça motive vraiment.",
    },
    {
      name: "Tom L.",
      role: "Développeur",
      text: "J'ai toujours tapé avec six doigts en pensant que c'était suffisant. Trois semaines plus tard, je tape avec les dix. Il suffit de suivre le cours, de faire confiance au processus - les progrès viennent vite.",
    },
    {
      name: "Lino L.",
      role: "Chef de projet",
      text: "Ça m'énervait tellement d'être aussi lent. Chaque email prenait une éternité. Maintenant, je tape beaucoup plus vite avec moins d'erreurs. L'amélioration en seulement deux semaines est incroyable.",
    },
    {
      name: "Lola L.",
      role: "Freelance",
      text: "Très clair, exactement les fonctionnalités dont on a besoin, et vraiment moderne. Pas de superflu, pas de pression d'abonnement. C'était vraiment agréable de faire un exercice par jour.",
    },
  ],
};

const i18n: Record<string, { title: string; cta: string }> = {
  de: { title: "Das sagen unsere Nutzer", cta: "Tippkurs starten" },
  en: { title: "What our users say", cta: "Start typing course" },
  fr: { title: "Ce que disent nos utilisateurs", cta: "Commencer le cours" },
};

type Props = {
  locale: string;
};

export function TestimonialSlider({ locale }: Props) {
  const items = testimonials[locale] || testimonials.en;
  const l = i18n[locale] || i18n.en;

  return (
    <div className="space-y-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center">{l.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white dark:bg-dark-surface border border-zinc-100 dark:border-dark-border p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              <svg className="w-8 h-8 text-indigo/30 mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t.text}</p>
            </div>
            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-dark-border">
              <p className="font-semibold text-dark-text dark:text-white">- {t.name}</p>
              <p className="text-xs text-zinc-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href={`/${locale}/lessons/1`}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors"
        >
          {l.cta}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
