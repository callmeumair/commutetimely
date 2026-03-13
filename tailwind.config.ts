import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B14",
        "primary-blue": "#3A7BFF",
        "electric-cyan": "#00D4FF",
        "secondary-violet": "#6E5CFF",
        "neutral-text": "#E6EAF2",
        "surface-1": "#0D1525",
        "surface-2": "#111827",
        "surface-3": "#1A2235",
        "border-subtle": "rgba(255,255,255,0.07)",
        "border-mid": "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "glow": "glow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "route-draw": "routeDraw 2s ease-in-out forwards",
        "particle-move": "particleMove 3s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        routeDraw: {
          from: { strokeDashoffset: "300" },
          to: { strokeDashoffset: "0" },
        },
        particleMove: {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(58,123,255,0.18) 0%, transparent 70%)",
        "hero-radial-right": "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(0,212,255,0.10) 0%, transparent 60%)",
        "glow-blue": "radial-gradient(circle, rgba(58,123,255,0.3) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(circle, rgba(0,212,255,0.25) 0%, transparent 70%)",
        "glow-violet": "radial-gradient(circle, rgba(110,92,255,0.3) 0%, transparent 70%)",
        "card-surface": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "gradient-blue-cyan": "linear-gradient(135deg, #3A7BFF 0%, #00D4FF 100%)",
        "gradient-blue-violet": "linear-gradient(135deg, #3A7BFF 0%, #6E5CFF 100%)",
        "gradient-text": "linear-gradient(135deg, #E6EAF2 0%, #3A7BFF 50%, #00D4FF 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(58,123,255,0.3), 0 0 80px rgba(58,123,255,0.1)",
        "glow-cyan": "0 0 40px rgba(0,212,255,0.25), 0 0 80px rgba(0,212,255,0.08)",
        "glow-violet": "0 0 40px rgba(110,92,255,0.3)",
        "card": "0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(58,123,255,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
