"use client";

import { useState, useEffect, useCallback } from "react";

type Testimonial = {
  name: string;
  stars: number;
  title: string;
  text: string;
};

const testimonials: Record<string, Testimonial[]> = {
  de: [
    {
      name: "Christin G.",
      stars: 5,
      title: "So ermutigend",
      text: "Ich hatte ehrlich gesagt keine Lust, Tippen zu üben. Aber die App macht es so einfach und motivierend, dass ich drangeblieben bin. Nach jeder Übung sieht man direkt den Fortschritt. Das hält einen bei der Stange.",
    },
    {
      name: "Tom L.",
      stars: 5,
      title: "Von 6 auf 10 Finger",
      text: "Ich habe immer mit sechs Fingern getippt und dachte, das reicht. Drei Wochen später tippe ich mit allen zehn. Einfach dem Kurs folgen, dem Prozess vertrauen - der Fortschritt kommt schneller als man denkt.",
    },
    {
      name: "Lino L.",
      stars: 5,
      title: "Endlich produktiv",
      text: "Es hat mich so genervt, wie langsam ich war. Jede E-Mail hat ewig gedauert. Jetzt tippe ich so viel schneller und mache weniger Fehler. Die Verbesserung nach nur zwei Wochen ist wahnsinnig gut.",
    },
    {
      name: "Lola L.",
      stars: 5,
      title: "Modern und macht Spaß",
      text: "Sehr übersichtlich, genau die Features, die man braucht, und dazu richtig modern. Kein Schnickschnack, kein Abo-Druck. Hat einfach Spaß gemacht, jeden Tag eine Übung zu machen.",
    },
  ],
  en: [
    {
      name: "Christin G.",
      stars: 5,
      title: "So encouraging",
      text: "Honestly, I wasn't excited about practicing typing. But the app makes it so easy and encouraging that I kept going. After every exercise, you see your progress right away. That keeps you motivated.",
    },
    {
      name: "Tom L.",
      stars: 5,
      title: "From 6 to 10 fingers",
      text: "I always typed with six fingers and thought that was enough. Three weeks later, I'm typing with all ten. Just follow the course, trust the process - progress comes faster than you'd think.",
    },
    {
      name: "Lino L.",
      stars: 5,
      title: "Finally productive",
      text: "It frustrated me so much how slow I was. Every email took forever. Now I type so much faster with fewer errors. The improvement after just two weeks is incredible.",
    },
    {
      name: "Lola L.",
      stars: 5,
      title: "Modern and fun",
      text: "Super clean, exactly the features you need, and really modern. No clutter, no subscription pressure. It was genuinely fun to do one exercise a day.",
    },
  ],
  fr: [
    {
      name: "Christin G.",
      stars: 5,
      title: "Tellement encourageant",
      text: "Honnêtement, je n'avais pas envie de m'entraîner à taper. Mais l'app rend les choses tellement simples et motivantes que j'ai continué. Après chaque exercice, on voit ses progrès. Ça motive vraiment.",
    },
    {
      name: "Tom L.",
      stars: 5,
      title: "De 6 à 10 doigts",
      text: "J'ai toujours tapé avec six doigts en pensant que c'était suffisant. Trois semaines plus tard, je tape avec les dix. Il suffit de suivre le cours, de faire confiance au processus - les progrès viennent vite.",
    },
    {
      name: "Lino L.",
      stars: 5,
      title: "Enfin productif",
      text: "Ça m'énervait tellement d'être aussi lent. Chaque email prenait une éternité. Maintenant, je tape beaucoup plus vite avec moins d'erreurs. L'amélioration en seulement deux semaines est incroyable.",
    },
    {
      name: "Lola L.",
      stars: 5,
      title: "Moderne et amusant",
      text: "Très clair, exactement les fonctionnalités dont on a besoin, et vraiment moderne. Pas de superflu, pas de pression d'abonnement. C'était vraiment agréable de faire un exercice par jour.",
    },
  ],
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-electric-yellow" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type Props = {
  locale: string;
};

export function TestimonialSlider({ locale }: Props) {
  const items = testimonials[locale] || testimonials.en;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = items[current];

  return (
    <div
      className="relative max-w-xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rounded-2xl bg-indigo p-8 sm:p-10 text-white min-h-[260px] flex flex-col justify-between">
        <div>
          <Stars count={t.stars} />
          <p className="font-bold text-lg mt-3">{t.title}</p>
          <p className="mt-3 text-white/85 leading-relaxed">{t.text}</p>
        </div>
        <p className="mt-6 text-sm text-white/60 text-right">{t.name}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={prev}
          aria-label="Previous"
          className="rounded-full border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface w-9 h-9 flex items-center justify-center text-zinc-500 hover:text-indigo hover:border-indigo/30 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-indigo" : "bg-zinc-300 dark:bg-zinc-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="rounded-full border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface w-9 h-9 flex items-center justify-center text-zinc-500 hover:text-indigo hover:border-indigo/30 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
