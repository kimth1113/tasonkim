"use client";

import { useRef, useState, ReactNode } from "react";
import { useReducedMotion } from "motion/react";

interface PerspectiveCardProps {
  children: ReactNode;
  className?: string;
}

export default function PerspectiveCard({ children, className = "" }: PerspectiveCardProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(8px)`,
      boxShadow: `${-x * 20}px ${y * 20}px 40px rgba(0,0,0,0.12)`,
      transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      transition: "transform 0.4s ease-out, box-shadow 0.4s ease-out",
    });
  }

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
