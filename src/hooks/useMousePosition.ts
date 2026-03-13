"use client";

import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
  normalized: { x: number; y: number }; // -1 to 1 relative to viewport center
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalized: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({
        x: e.clientX,
        y: e.clientY,
        normalized: { x: nx, y: ny },
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
