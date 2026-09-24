"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in";
  // Render as this element (e.g. "li" inside a <ul>) so the wrapper never
  // breaks the semantics of the list it sits in.
  as?: ElementType;
};

// Reveal-on-scroll that is safe for first paint, crawlers and no-JS:
// the server HTML is fully visible. Only after hydration, and only for
// elements that are still below the fold, the content is hidden and then
// animated in when it scrolls into view. Elements already on screen at
// load are left as they are, so nothing flashes and the LCP is never
// delayed by an opacity-0 wrapper.
export function ScrollReveal({ children, className = "", delay = 0, animation = "fade-up", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "revealed">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) return; // already on screen: keep it visible

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "scale-in": "animate-scale-in",
  }[animation];

  const stateClass = state === "hidden" ? "opacity-0" : state === "revealed" ? animClass : "";

  return (
    <Tag
      ref={ref}
      className={`${className} ${stateClass}`.trim()}
      style={state === "revealed" && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
