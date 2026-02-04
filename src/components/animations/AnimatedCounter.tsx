"use client";

import { useInView, useReducedMotion, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseNumeric(val: string): { prefix: string; number: number; suffix: string } | null {
  const match = val.match(/^([~$₩<>]*)(\d+(?:\.\d+)?)([\w+%]*)$/);
  if (!match) return null;
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView || prefersReduced) return;

    const parsed = parseNumeric(value);
    if (!parsed) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, parsed.number, {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(v) {
        const formatted = parsed.number % 1 !== 0 ? v.toFixed(2) : Math.floor(v).toString();
        setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
