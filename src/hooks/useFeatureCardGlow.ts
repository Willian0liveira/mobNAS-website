"use client";

import { useCallback, useEffect, useRef } from "react";

export function useFeatureCardGlow() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--glow-x", x + "px");
    card.style.setProperty("--glow-y", y + "px");
  }, []);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return ref;
}
