type Testimonial = {
  name: string;
  role: string;
  text: string;
  stars: number;
};

const testimonials: Record<string, Testimonial[]> = {
  de: [
    {
      name: "Christin G.",
      role: "Studentin",
      stars: 5,
      text: "Ich hatte ehrlich gesagt keine Lust, Tippen zu üben. Aber die App macht es so einfach und motivierend, dass ich drangeblieben bin. Nach jeder Übung sieht man direkt den Fortschritt. Das hält einen bei der Stange.",
    },
    {
      name: "Tom L.",
      role: "Softwareentwickler",
      stars: 5,
      text: "Ich habe immer mit sechs Fingern getippt und dachte, das reicht. Drei Wochen später tippe ich mit allen zehn. Einfach dem Kurs folgen, dem Prozess vertrauen - der Fortschritt kommt schneller als man denkt.",
    },
    {
      name: "Lino L.",
      role: "Projektmanager",
      stars: 5,
      text: "Es hat mich so genervt, wie langsam ich war. Jede E-Mail hat ewig gedauert. Jetzt tippe ich so viel schneller und mache weniger Fehler. Die Verbesserung nach nur zwei Wochen ist wahnsinnig gut.",
    },
    {
      name: "Lola L.",
      role: "Freelancerin",
      stars: 5,
      text: "Sehr übersichtlich, genau die Features, die man braucht, und dazu richtig modern. Kein Schnickschnack, kein Abo-Druck. Hat einfach Spaß gemacht, jeden Tag eine Übung zu machen.",
    },
  ],
  en: [
    {
      name: "Christin G.",
      role: "Student",
      stars: 5,
      text: "Honestly, I wasn't excited about practicing typing. But the app makes it so easy and encouraging that I kept going. After every exercise, you see your progress right away. That keeps you motivated.",
    },
    {
      name: "Tom L.",
      role: "Software Developer",
      stars: 5,
      text: "I always typed with six fingers and thought that was enough. Three weeks later, I'm typing with all ten. Just follow the course, trust the process - progress comes faster than you'd think.",
    },
    {
      name: "Lino L.",
      role: "Project Manager",
      stars: 5,
      text: "It frustrated me so much how slow I was. Every email took forever. Now I type so much faster with fewer errors. The improvement after just two weeks is incredible.",
    },
    {
      name: "Lola L.",
      role: "Freelancer",
      stars: 5,
      text: "Super clean, exactly the features you need, and really modern. No clutter, no subscription pressure. It was genuinely fun to do one exercise a day.",
    },
  ],
  fr: [
    {
      name: "Christin G.",
      role: "Étudiante",
      stars: 5,
      text: "Honnêtement, je n'avais pas envie de m'entraîner à taper. Mais l'app rend les choses tellement simples et motivantes que j'ai continué. Après chaque exercice, on voit ses progrès. Ça motive vraiment.",
    },
    {
      name: "Tom L.",
      role: "Développeur",
      stars: 5,
      text: "J'ai toujours tapé avec six doigts en pensant que c'était suffisant. Trois semaines plus tard, je tape avec les dix. Il suffit de suivre le cours, de faire confiance au processus - les progrès viennent vite.",
    },
    {
      name: "Lino L.",
      role: "Chef de projet",
      stars: 5,
      text: "Ça m'énervait tellement d'être aussi lent. Chaque email prenait une éternité. Maintenant, je tape beaucoup plus vite avec moins d'erreurs. L'amélioration en seulement deux semaines est incroyable.",
    },
    {
      name: "Lola L.",
      role: "Freelance",
      stars: 5,
      text: "Très clair, exactement les fonctionnalités dont on a besoin, et vraiment moderne. Pas de superflu, pas de pression d'abonnement. C'était vraiment agréable de faire un exercice par jour.",
    },
  ],
};

const i18n: Record<string, { title: string; subtitle: string; cta: string }> = {
  de: {
    title: "Das sagen unsere Nutzer",
    subtitle: "Echte Ergebnisse von echten Erwachsenen, die schneller tippen wollten.",
    cta: "Tippkurs starten",
  },
  en: {
    title: "What our users say",
    subtitle: "Real results from real adults who wanted to type faster.",
    cta: "Start typing course",
  },
  fr: {
    title: "Ce que disent nos utilisateurs",
    subtitle: "Des résultats réels d'adultes qui voulaient taper plus vite.",
    cta: "Commencer le cours",
  },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[260px] sm:w-[280px] shrink-0 rounded-2xl bg-white dark:bg-dark-surface border border-zinc-100 dark:border-dark-border p-5 shadow-sm">
      <div className="mb-2">
        <p className="font-semibold text-sm text-dark-text dark:text-white">{t.name}</p>
        <p className="text-xs text-zinc-400">{t.role}</p>
      </div>
      <Stars count={t.stars} />
      <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t.text}</p>
    </div>
  );
}

import { KeyCharacter } from "./KeyCharacter";

type Props = {
  locale: string;
};

export function TestimonialSlider({ locale }: Props) {
  const items = testimonials[locale] || testimonials.en;
  const l = i18n[locale] || i18n.en;

  const reversed = [...items].reverse();

  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <KeyCharacter pose="running" size={120} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold">{l.title}</h2>
        <p className="text-zinc-400 max-w-lg mx-auto">{l.subtitle}</p>
      </div>

      <div
        className="relative space-y-4 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 - scrolls left */}
        <div className="animate-marquee-left flex gap-4 w-max hover:[animation-play-state:paused]">
          {[...items, ...items, ...items, ...items].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>

        {/* Row 2 - scrolls right (reversed order) */}
        <div className="animate-marquee-right flex gap-4 w-max hover:[animation-play-state:paused]">
          {[...reversed, ...reversed, ...reversed, ...reversed].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href={`/${locale}/lessons/1`}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors"
        >
          {l.cta}
          <span className="text-electric-yellow">&gt;&gt;</span>
        </a>
      </div>
    </div>
  );
}
