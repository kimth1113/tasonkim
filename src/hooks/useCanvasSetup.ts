"use client";

import { useEffect, useRef, useCallback } from "react";

interface CanvasSetupOptions {
  onResize?: (width: number, height: number) => void;
}

export default function useCanvasSetup(options?: CanvasSetupOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(true);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctxRef.current = ctx;
    }
    options?.onResize?.(w, h);
  }, [options]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resize();

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement || canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [resize]);

  return { canvasRef, ctxRef, rafRef, visibleRef, resize };
}
