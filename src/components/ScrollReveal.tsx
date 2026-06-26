"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in";
};

export function ScrollReveal({ children, className = "", delay = 0, animation = "fade-up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? animClass : "opacity-0"}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
