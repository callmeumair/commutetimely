"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * KineticGrid — full-viewport background that subtly warps
 * based on cursor position, giving the page a "living" feel.
 *
 * The grid shifts ≤ 12px in each axis as the mouse moves edge-to-edge.
 * A CSS transition on background-position makes it silky smooth.
 */
export default function KineticGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    if (!ref.current) return;
    // Shift amplitude is very subtle — max ±12px to avoid dizziness
    const shiftX = mouse.normalized.x * 12;
    const shiftY = mouse.normalized.y * 12;
    ref.current.style.backgroundPosition = `${shiftX}px ${shiftY}px`;
  }, [mouse]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 kinetic-grid"
      aria-hidden="true"
      style={{
        willChange: "background-position",
        transition: "background-position 0.12s ease-out",
      }}
    />
  );
}
