"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

export function TypingHeadline({ text, className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [idx, setIdx] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || idx >= text.length) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 60 + Math.random() * 40);
    return () => clearTimeout(t);
  }, [started, idx, text]);

  return (
    <h2 ref={ref} className={className}>
      {text.slice(0, idx)}
      <span
        className={`inline-block w-[3px] h-[0.7em] bg-indigo align-baseline ml-0.5 ${
          !started || idx >= text.length ? "animate-cursor-blink" : ""
        }`}
      />
    </h2>
  );
}
