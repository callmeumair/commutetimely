"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const HEAVY_SPRING = { type: "spring" as const, mass: 1, stiffness: 80, damping: 15 };
const SPRING = { type: "spring" as const, stiffness: 120, damping: 20 };

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{ background: "#020617" }}
    >
      {/* Precision grid */}
      <div className="absolute inset-0 precision-grid opacity-30 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(58,123,255,0.07) 0%, transparent 65%)" }} />

      {/* Animated off-route orbit */}
      <motion.div
        className="relative mb-10"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...HEAVY_SPRING, delay: 0.1 }}
      >
        <svg width={180} height={180} viewBox="0 0 180 180" fill="none">
          {/* Outer ring */}
          <circle cx={90} cy={90} r={80}
            stroke="rgba(58,123,255,0.1)" strokeWidth={0.5} strokeDasharray="4 8" />
          {/* Mid ring */}
          <circle cx={90} cy={90} r={55}
            stroke="rgba(0,212,255,0.07)" strokeWidth={0.5} />

          {/* Drifted route path — squiggly */}
          <motion.path
            d="M 30 90 Q 60 30 90 90 Q 120 150 150 90"
            stroke="rgba(239,68,68,0.5)" strokeWidth={1.5} fill="none" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Correct route — straight */}
          <motion.line
            x1={30} y1={90} x2={150} y2={90}
            stroke="rgba(16,185,129,0.4)" strokeWidth={1} strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />

          {/* Off-course dot */}
          <motion.circle
            cx={90} cy={38} r={5} fill="#EF4444"
            animate={{ y: [0, 4, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Core */}
          <circle cx={90} cy={90} r={8}
            fill="rgba(58,123,255,0.15)" stroke="rgba(58,123,255,0.4)" strokeWidth={0.5} />
          <circle cx={90} cy={90} r={3} fill="#3A7BFF" />
        </svg>
      </motion.div>

      <motion.div
        className="tag-badge mb-5"
        style={{ color: "#EF4444", borderColor: "rgba(239,68,68,0.25)", background: "rgba(239,68,68,0.08)" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.3 }}
      >
        404 · Route Not Found
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...HEAVY_SPRING, delay: 0.4 }}
      >
        You&apos;ve drifted off-route.
      </motion.h1>

      <motion.p
        className="text-white/35 text-base max-w-md mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.5 }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has moved.
        Don&apos;t worry — recalculating your route now.
      </motion.p>

      <motion.button
        className="relative px-8 py-4 rounded-2xl text-sm font-bold text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#3A7BFF 0%,#6E5CFF 100%)",
          boxShadow: "0 0 32px rgba(58,123,255,0.3), 0 1px 0 rgba(255,255,255,0.1) inset",
        }}
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...HEAVY_SPRING, delay: 0.55 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 48px rgba(58,123,255,0.45)" }}
        whileTap={{ scale: 0.96 }}
        onClick={() => router.push("/")}
      >
        <span className="flex items-center gap-2">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Recalculate to Home
        </span>
      </motion.button>

      {/* Subtle coordinates */}
      <motion.p
        className="absolute bottom-8 text-[10px] font-mono text-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ERR_ROUTE_UNDEFINED · CommuteTimely v2.0
      </motion.p>
    </div>
  );
}
