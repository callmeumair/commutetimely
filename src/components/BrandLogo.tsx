"use client";

/**
 * BrandLogo — renders the official CommuteTimely mark as an inline SVG.
 * Zero external file dependency; never shows a broken-image box.
 * Matches the App Store icon: blue→cyan gradient square, white map-pin with clock.
 */

interface BrandLogoProps {
  /** Pixel size of the square icon (width = height). Default 32. */
  size?: number;
  /** Extra className applied to the outer <svg> element. */
  className?: string;
  /** Drop-shadow glow. Default true (brand blue glow). */
  glow?: boolean;
}

export default function BrandLogo({ size = 32, className = "", glow = true }: BrandLogoProps) {
  const id = `brand-grad-${size}`;
  const glowStyle = glow
    ? { filter: "drop-shadow(0 0 8px rgba(59,130,246,0.55))" }
    : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CommuteTimely - Arrival Intelligence"
      role="img"
      style={glowStyle}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#1E40AF" />
          <stop offset="50%"  stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <rect width="100" height="100" rx="22" ry="22" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="100" height="100" rx="22" ry="22" fill={`url(#${id})`} />

      {/* Map-pin body */}
      <path
        d="M50 14 C34 14 22 26 22 42 C22 54 30 63 40 72 L50 86 L60 72 C70 63 78 54 78 42 C78 26 66 14 50 14 Z"
        fill="white"
        opacity="0.97"
      />

      {/* Clock face (circle inside pin) */}
      <circle cx="50" cy="41" r="13" fill="#2563EB" />

      {/* Clock hands */}
      {/* Hour hand — pointing ~10 o'clock */}
      <line
        x1="50" y1="41"
        x2="44" y2="35"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Minute hand — pointing ~3 o'clock */}
      <line
        x1="50" y1="41"
        x2="57" y2="41"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="50" cy="41" r="1.8" fill="white" />
    </svg>
  );
}
