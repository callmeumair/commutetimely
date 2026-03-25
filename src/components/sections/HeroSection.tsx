"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import AppStoreBadge from "@/components/AppStoreBadge";
import BrandLogo from "@/components/BrandLogo";

/* ── Spring configs ── */
const SPRING       = { type: "spring" as const, stiffness: 120, damping: 20 };
const SPRING_SLOW  = { type: "spring" as const, stiffness: 80,  damping: 24 };
/** Heavy entrance spring — mass: 1, feels weighty and final */
const HEAVY_SPRING = { type: "spring" as const, mass: 1, stiffness: 80, damping: 15 };

/* ── Trig helpers — pre-computed at module level so SSR and browser V8
   produce byte-for-byte identical attribute values (no hydration mismatch) ── */
function _rad(deg: number) { return (deg - 90) * (Math.PI / 180); }
function _px(v: number)    { return Math.round(v * 1000) / 1000; }

/* ── Ghost nodes scattered around outer orbit ── */
const GHOST_NODES = (
  [
    { angle: 32,  r: 136, size: 3,   dur: "2.8s", delay: "0s"   },
    { angle: 107, r: 148, size: 5,   dur: "3.6s", delay: "0.5s" },
    { angle: 162, r: 139, size: 2.5, dur: "2.2s", delay: "1.1s" },
    { angle: 228, r: 128, size: 4,   dur: "4.1s", delay: "0.3s" },
    { angle: 278, r: 153, size: 3.5, dur: "2.7s", delay: "1.4s" },
    { angle: 320, r: 131, size: 2,   dur: "3.3s", delay: "0.8s" },
    { angle: 56,  r: 156, size: 4.5, dur: "3.9s", delay: "0.2s" },
    { angle: 193, r: 145, size: 3,   dur: "2.5s", delay: "0.6s" },
    { angle: 340, r: 144, size: 2.5, dur: "3.0s", delay: "1.7s" },
  ] as const
).map(gn => ({
  ...gn,
  cx: _px(160 + gn.r * Math.cos(_rad(gn.angle))),
  cy: _px(160 + gn.r * Math.sin(_rad(gn.angle))),
}));

/* ── Data node definition ── */
const DATA_NODES = (
  [
    { id: "traffic",  label: "Live Traffic",    color: "#3A7BFF", angle: 0,   r: 112, icon: "◈" },
    { id: "calendar", label: "Calendar Sync",   color: "#6E5CFF", angle: 72,  r: 112, icon: "◉" },
    { id: "weather",  label: "Weather Layer",   color: "#00D4FF", angle: 144, r: 112, icon: "◎" },
    { id: "transit",  label: "Transit API",     color: "#10B981", angle: 216, r: 112, icon: "◇" },
    { id: "history",  label: "Pattern History", color: "#F59E0B", angle: 288, r: 112, icon: "◆" },
  ] as const
).map(node => {
  const rad = _rad(node.angle);
  return {
    ...node,
    x:  _px(160 + node.r * Math.cos(rad)),
    y:  _px(160 + node.r * Math.sin(rad)),
    mx: _px(160 + 60   * Math.cos(rad)),
    my: _px(160 + 60   * Math.sin(rad)),
  };
});

/* ── Precision Engine (center SVG visualization) ── */
function PrecisionEngine() {
  const [phase, setPhase] = useState(0);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const iv = setInterval(() => setPhase(p => (p + 1) % 5), 2200);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (phase < DATA_NODES.length) setActiveNode(DATA_NODES[phase].id);
  }, [phase]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
      {/* SVG orbit rings + data streams */}
      <svg className="absolute inset-0" width={320} height={320} viewBox="0 0 320 320">
        {/* Outer orbit ring */}
        <circle cx={160} cy={160} r={112}
          fill="none" stroke="rgba(58,123,255,0.08)" strokeWidth={0.5}
          strokeDasharray="4 8" />
        {/* Mid orbit ring */}
        <circle cx={160} cy={160} r={72}
          fill="none" stroke="rgba(0,212,255,0.06)" strokeWidth={0.5} />
        {/* Inner ring */}
        <circle cx={160} cy={160} r={42}
          fill="none" stroke="rgba(110,92,255,0.1)" strokeWidth={0.5}
          strokeDasharray="2 6" />

        {/* ── Ghost nodes — ambient faded pulsing data points ── */}
        {GHOST_NODES.map((gn, i) => (
          <circle
            key={`ghost-${i}`}
            cx={gn.cx} cy={gn.cy} r={gn.size}
            fill="rgba(255,255,255,0.12)"
            className="ghost-node"
            style={{ "--ghost-dur": gn.dur, "--ghost-delay": gn.delay } as React.CSSProperties}
          />
        ))}

        {/* Data stream lines */}
        {DATA_NODES.map((node, i) => {
          const x1 = node.x;
          const y1 = node.y;
          const isActive = activeNode === node.id;

          return (
            <g key={node.id}>
              {/* Static line */}
              <line
                x1={x1} y1={y1} x2={160} y2={160}
                stroke={node.color} strokeWidth={0.5} opacity={0.15}
              />
              {/* Active stream */}
              {isActive && (
                <motion.line
                  key={`stream-${node.id}-${phase}`}
                  x1={x1} y1={y1} x2={160} y2={160}
                  stroke={node.color} strokeWidth={1.5}
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              )}
              {/* Traveling dot on active line */}
              {isActive && (
                <motion.circle
                  key={`dot-${node.id}-${phase}`}
                  r={3} fill={node.color}
                  initial={{ offsetDistance: "0%" } as never}
                  animate={{ offsetDistance: "100%" } as never}
                  style={{
                    offsetPath: `path('M ${x1} ${y1} L ${node.mx} ${node.my} L 160 160')`,
                  } as never}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Orbit nodes */}
      {DATA_NODES.map((node, i) => {
        const isActive = activeNode === node.id;

        return (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: node.x - 20, top: node.y - 20, width: 40 }}
            animate={isActive ? { scale: 1.15 } : { scale: 1 }}
            transition={SPRING}
            onMouseEnter={() => setActiveNode(node.id)}
          >
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-mono"
              style={{
                background: isActive ? `${node.color}18` : "rgba(255,255,255,0.03)",
                border: `0.5px solid ${isActive ? node.color + "50" : "rgba(255,255,255,0.06)"}`,
                boxShadow: isActive ? `0 0 16px ${node.color}30` : "none",
                color: node.color,
                transition: "all 0.3s ease",
              }}
            >
              {node.icon}
            </motion.div>
            <span
              className="text-[9px] font-mono text-center leading-tight"
              style={{ color: isActive ? node.color : "rgba(255,255,255,0.3)", transition: "color 0.3s" }}
            >
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Central Precision Engine core */}
      <div className="relative z-10 flex items-center justify-center" style={{ width: 88, height: 88 }}>
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(58,123,255,0.06)", border: "0.5px solid rgba(58,123,255,0.2)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(0,212,255,0.04)", border: "0.5px solid rgba(0,212,255,0.15)" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Core badge */}
        <div
          className="w-full h-full rounded-full flex items-center justify-center cursor-default"
          style={{
            background: "linear-gradient(135deg, rgba(58,123,255,0.12) 0%, rgba(110,92,255,0.08) 100%)",
            border: "0.5px solid rgba(58,123,255,0.38)",
            boxShadow: "0 0 32px rgba(58,123,255,0.22), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <BrandLogo size={54} glow />
        </div>
      </div>
    </div>
  );
}

/* ── Dynamic Island Component ── */
function DynamicIsland() {
  const [expanded, setExpanded] = useState(false);
  const [depart, setDepart] = useState(7);

  useEffect(() => {
    const t = setTimeout(() => setExpanded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const iv = setInterval(() => setDepart(d => d > 0 ? d - 1 : 7), 5000);
    return () => clearInterval(iv);
  }, [expanded]);

  return (
    <motion.div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ background: "#000", borderRadius: expanded ? 20 : 50 }}
      animate={{ width: expanded ? 264 : 120, height: expanded ? 60 : 32 }}
      transition={SPRING}
    >
      {/* Collapsed pill */}
      <AnimatePresence>
        {!expanded && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#3A7BFF] animate-pulse-ring" />
            <span className="text-white text-[11px] font-mono">Live</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded island */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 flex items-center justify-between px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col">
              <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest">Depart in</span>
              <span className="text-white text-xl font-mono leading-tight font-semibold">
                {depart}m
              </span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-col items-end">
              <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest">Arrive</span>
              <span className="text-[#10B981] text-sm font-mono font-medium">9:02 AM</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse-ring-cyan" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Stat Chip ── */
function StatChip({ value, label, color, delay }: { value: string; label: string; color: string; delay: number }) {
  return (
    <motion.div
      className="flex flex-col items-center px-5 py-3 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "0.5px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...SPRING, delay }}
    >
      <span className="data-mono text-xl font-bold" style={{ color }}>{value}</span>
      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-0.5">{label}</span>
    </motion.div>
  );
}

/* ── Main Hero ── */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ background: "#020617" }}
    >
      {/* Precision grid background */}
      <div className="absolute inset-0 precision-grid opacity-60" />

      {/* Radial glow originates from hero center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(58,123,255,0.07) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-5xl w-full mx-auto text-center">

        {/* Tag */}
        <motion.div
          className="tag-badge"
          initial={{ opacity: 0, scale: 0.8, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...HEAVY_SPRING, delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] glow-pulse" />
          Arrival Intelligence Platform · v2.0
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...HEAVY_SPRING, delay: 0.2 }}
        >
          <span className="text-radial-light">Know Exactly When to Leave</span>
          <br />
          <span className="text-radial-light" style={{ filter: "brightness(0.82)" }}>for Work—Not When Traffic Tells You.</span>
        </motion.h1>

        {/* Sub headline (H2 equivalent semantically) */}
        <motion.h2
          className="text-base sm:text-lg text-white/45 max-w-xl leading-relaxed font-light mt-4"
          initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...HEAVY_SPRING, delay: 0.35 }}
        >
          AI-Powered Departure Timing for Every Commute. Stop guessing. Stop leaving 30 minutes early just in case. Start reclaiming your time today.
        </motion.h2>

        {/* CTAs */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...HEAVY_SPRING, delay: 0.45 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <AppStoreBadge size="lg" />
            <motion.button
              className="px-6 py-4 rounded-xl text-sm font-medium text-white/70"
              style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)" }}
              whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
            >
              View Live Demo →
            </motion.button>
          </div>
          {/* App Store rating strip */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width={12} height={12} viewBox="0 0 12 12" fill="#F59E0B" aria-hidden="true">
                  <path d="M6 1l1.3 2.9L10.5 4 8 6.5l.6 3.5L6 8.5 3.4 10l.6-3.5L1.5 4l3.2-.1L6 1z" />
                </svg>
              ))}
            </div>
            <span className="text-[11px] font-mono text-white/35">5.0 · Verified rating · App Store</span>
          </div>
        </motion.div>

        {/* ── LIVE ORBIT VISUALIZATION ── */}
        <motion.div
          className="relative flex flex-col items-center gap-4 mt-2"
          initial={{ opacity: 0, scale: 0.88, y: 32 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...HEAVY_SPRING, delay: 0.55 }}
        >
          {/* Dynamic Island floats above the engine */}
          <DynamicIsland />

          {/* Precision Engine */}
          <PrecisionEngine />

          {/* App Store float card */}
          <motion.div
            className="absolute right-0 top-1/3 glass rounded-xl px-3 py-2 flex flex-col gap-0.5"
            style={{ transform: "translateX(calc(100% + 16px))" }}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING, delay: 1.2 }}
          >
            <span className="data-mono text-lg font-bold text-[#F59E0B]">5.0★</span>
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">App Store</span>
          </motion.div>

          {/* iOS version float card */}
          <motion.div
            className="absolute left-0 top-1/3 glass rounded-xl px-3 py-2 flex flex-col gap-0.5"
            style={{ transform: "translateX(calc(-100% - 16px))" }}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING, delay: 1.4 }}
          >
            <span className="data-mono text-lg font-bold text-[#10B981]">iOS 17</span>
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">Minimum</span>
          </motion.div>
        </motion.div>

        {/* Stats row — App Store verified only */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ ...SPRING, delay: 0.9 }}
        >
          <StatChip value="5.0★"   label="App Store" color="#F59E0B"  delay={0.9} />
          <StatChip value="iOS 17+" label="Required" color="#6E5CFF"  delay={1.0} />
          <StatChip value="~20 MB" label="Lightweight" color="#10B981" delay={1.1} />
          <StatChip value="Free"   label="No in-app purchases" color="#E2E8F0" delay={1.2} />
        </motion.div>
      </div>
    </section>
  );
}
