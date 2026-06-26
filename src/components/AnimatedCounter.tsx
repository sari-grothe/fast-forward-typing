"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({ value, duration = 800, suffix = "", className = "" }: Props) {
  const [display, setDisplay] = useState(0);
  const prevValue = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = prevValue.current;
    const diff = value - start;
    if (diff === 0) return;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + diff * eased);
      setDisplay(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        prevValue.current = value;
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration]);

  return <span className={className}>{display}{suffix}</span>;
}
