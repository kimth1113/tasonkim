"use client";

import { useReducedMotion } from "motion/react";
import { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

export default function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!prefersReduced && (
        <div className="aurora-bg absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
