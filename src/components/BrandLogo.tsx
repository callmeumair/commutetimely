"use client";

import Image from "next/image";

interface BrandLogoProps {
  /** Pixel size of the square icon (width = height). Default 32. */
  size?: number;
  /** Extra className applied to the img element. */
  className?: string;
  /** Drop-shadow glow. Default true (brand blue glow). */
  glow?: boolean;
}

export default function BrandLogo({ size = 32, className = "", glow = true }: BrandLogoProps) {
  const glowStyle = glow
    ? { filter: "drop-shadow(0 0 8px rgba(59,130,246,0.55))" }
    : undefined;

  return (
    <Image
      src="/logo.png"
      alt="CommuteTimely - Arrival Intelligence"
      width={size}
      height={size}
      className={className}
      style={{ borderRadius: "22%", ...glowStyle }}
      priority
    />
  );
}
