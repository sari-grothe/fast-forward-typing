"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type Props = {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
  decimals?: number;
  decimalSeparator?: string;
};

export function CountUpOnView({ value, duration = 1400, suffix = "", className = "", decimals = 0, decimalSeparator = "." }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
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
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      <AnimatedCounter
        value={visible ? value : 0}
        duration={duration}
        suffix={suffix}
        className={className}
        decimals={decimals}
        decimalSeparator={decimalSeparator}
      />
    </span>
  );
}
