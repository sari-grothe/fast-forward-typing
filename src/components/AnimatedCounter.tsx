"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
  decimals?: number;
  decimalSeparator?: string;
};

export function AnimatedCounter({
  value,
  duration = 800,
  suffix = "",
  className = "",
  decimals = 0,
  decimalSeparator = ".",
}: Props) {
  const [display, setDisplay] = useState(0);
  const prevValue = useRef(0);
  const frameRef = useRef<number>(0);
  const factor = 10 ** decimals;

  useEffect(() => {
    const start = prevValue.current;
    const diff = value - start;
    if (diff === 0) return;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round((start + diff * eased) * factor) / factor;
      setDisplay(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        prevValue.current = value;
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration, factor]);

  const formatted = decimals > 0
    ? display.toFixed(decimals).replace(".", decimalSeparator)
    : display.toString();

  return <span className={className}>{formatted}{suffix}</span>;
}
