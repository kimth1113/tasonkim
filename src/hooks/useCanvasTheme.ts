"use client";

import { useEffect, useState, useCallback } from "react";

interface ThemeColors {
  background: string;
  foreground: string;
  muted: string;
  border: string;
  card: string;
  accent: string;
}

function parseColors(): ThemeColors {
  const style = getComputedStyle(document.documentElement);
  return {
    background: style.getPropertyValue("--background").trim(),
    foreground: style.getPropertyValue("--foreground").trim(),
    muted: style.getPropertyValue("--muted").trim(),
    border: style.getPropertyValue("--border").trim(),
    card: style.getPropertyValue("--card").trim(),
    accent: style.getPropertyValue("--accent").trim(),
  };
}

export default function useCanvasTheme(): ThemeColors {
  const [colors, setColors] = useState<ThemeColors>({
    background: "#0a0a0a",
    foreground: "#ededed",
    muted: "#9ca3af",
    border: "#27272a",
    card: "#18181b",
    accent: "#3b82f6",
  });

  const update = useCallback(() => setColors(parseColors()), []);

  useEffect(() => {
    update();
    const observer = new MutationObserver(() => update());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
    return () => observer.disconnect();
  }, [update]);

  return colors;
}
