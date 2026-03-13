"use client";

import { motion } from "framer-motion";

const SPRING = { type: "spring" as const, stiffness: 120, damping: 20 };

interface AppStoreBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export default function AppStoreBadge({ size = "md", className = "", href = "https://apps.apple.com/in/app/commutetimely/id6752309705" }: AppStoreBadgeProps) {
  const sizes = {
    sm: { px: "px-4 py-2",    text: "text-[11px]", subtext: "text-[8px]",  logo: 16 },
    md: { px: "px-5 py-3",    text: "text-[13px]", subtext: "text-[9px]",  logo: 20 },
    lg: { px: "px-7 py-4",    text: "text-[15px]", subtext: "text-[10px]", logo: 24 },
  };
  const s = sizes[size];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-xl select-none ${s.px} ${className}`}
      style={{
        background: "#000",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 0 28px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(58,123,255,0.25), inset 0 1px 0 rgba(255,255,255,0.12)" }}
      whileTap={{ scale: 0.97 }}
      transition={SPRING}
      aria-label="Download on the App Store"
    >
      {/* Apple logo */}
      <svg width={s.logo} height={s.logo} viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      {/* Text */}
      <div className="flex flex-col items-start leading-none">
        <span className={`font-normal text-white/60 ${s.subtext} uppercase tracking-widest`}>Download on the</span>
        <span className={`font-semibold text-white ${s.text} tracking-tight`}>App Store</span>
      </div>
    </motion.a>
  );
}
