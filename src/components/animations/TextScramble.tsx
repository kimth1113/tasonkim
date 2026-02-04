"use client";

import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function TextScramble({ text, className, delay = 0 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState(text);
  const [started, setStarted] = useState(false);
  const prefersReduced = useReducedMotion();
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (prefersReduced) {
      setDisplayed(text);
      return;
    }

    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay, prefersReduced, text]);

  useEffect(() => {
    if (!started || prefersReduced) return;

    let iteration = 0;
    const totalFrames = text.length * 2;

    const scramble = () => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration / 2) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration <= totalFrames) {
        frameRef.current = requestAnimationFrame(scramble);
      }
    };

    frameRef.current = requestAnimationFrame(scramble);
    return () => cancelAnimationFrame(frameRef.current);
  }, [started, text, prefersReduced]);

  return <span className={className}>{displayed}</span>;
}
