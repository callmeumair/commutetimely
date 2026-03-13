"use client";

import { useRef, useState, useCallback, useEffect, MouseEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SPRING = { type: "spring" as const, stiffness: 120, damping: 20 };
const HEAVY_SPRING = { type: "spring" as const, mass: 1, stiffness: 80, damping: 15 };

/* ── Proximity Glow Card ── */
interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  style?: React.CSSProperties;
  delay?: number;
}

function GlowCard({ children, className, glowColor = "rgba(58,123,255,0.18)", style, delay = 0 }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowStyle, setGlowStyle] = useState({ opacity: 0, x: "50%", y: "50%" });
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowStyle({ opacity: 1, x: `${x}%`, y: `${y}%` });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlowStyle(s => ({ ...s, opacity: 0 }));
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden rounded-2xl cursor-default", className)}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "0.5px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(24px)",
        ...style,
      }}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...HEAVY_SPRING, delay }}
      whileHover={{ scale: 1.012, borderColor: "rgba(255,255,255,0.1)" }}
    >
      {/* Proximity glow layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl z-0"
        style={{
          background: `radial-gradient(320px circle at ${glowStyle.x} ${glowStyle.y}, ${glowColor}, transparent 70%)`,
          opacity: glowStyle.opacity,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

/* ── Miniature Alert Mockup ── */
function AlertMockup() {
  const alerts = [
    { time: "Leave in 8 min", reason: "Accident on I-280", severity: "warn", color: "#F59E0B" },
    { time: "Leave now",       reason: "Clear route detected", severity: "ok",   color: "#10B981" },
    { time: "Delay 12 min",    reason: "BART delays", severity: "bad",  color: "#EF4444" },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx(i => (i + 1) % alerts.length), 2800);
    return () => clearInterval(iv);
  }, []);

  const alert = alerts[idx];

  return (
    <div className="flex flex-col gap-1.5">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          className="flex items-start gap-3 p-3 rounded-xl"
          style={{ background: `${alert.color}10`, border: `0.5px solid ${alert.color}30` }}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={SPRING}
        >
          <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: alert.color }} />
          <div>
            <p className="data-mono text-sm font-semibold text-white">{alert.time}</p>
            <p className="text-[11px] text-white/40 mt-0.5">{alert.reason}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Static upcoming */}
      <div className="flex items-center gap-3 p-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.04)" }}>
        <span className="w-2 h-2 rounded-full bg-white/20 shrink-0" />
        <p className="text-[11px] text-white/25">Next alert in 47 minutes...</p>
      </div>
    </div>
  );
}

/* ── Traffic Bars ── */
function TrafficBars() {
  const hours = ["7am", "8am", "9am", "10am", "11am", "12pm"];
  const levels = [0.4, 0.95, 0.8, 0.5, 0.3, 0.25];
  const colors  = ["#10B981", "#EF4444", "#F59E0B", "#3A7BFF", "#10B981", "#10B981"];
  const inView = useInView(useRef(null), { once: true });

  return (
    <div className="flex items-end gap-2 h-16 mt-auto">
      {hours.map((h, i) => (
        <div key={h} className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            className="w-full rounded-t-md"
            style={{ background: colors[i], minHeight: 4 }}
            initial={{ height: 0 }}
            animate={{ height: `${levels[i] * 56}px` }}
            transition={{ ...SPRING, delay: 0.4 + i * 0.08 }}
          />
          <span className="text-[8px] font-mono text-white/25">{h}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Calendar mini ── */
function CalendarMini() {
  const events = [
    { name: "Standup",     time: "9:00 AM", travel: "Leave 8:43",  color: "#3A7BFF", important: false },
    { name: "Board Review", time: "10:30 AM", travel: "Leave 9:52", color: "#6E5CFF", important: true },
    { name: "Lunch – HQ",  time: "12:00 PM", travel: "Leave 11:44", color: "#10B981", important: false },
  ];
  return (
    <div className="flex flex-col gap-2">
      {events.map((ev, i) => (
        <motion.div
          key={ev.name}
          className="flex items-center gap-3 p-2.5 rounded-xl"
          style={{ background: `${ev.color}10`, border: `0.5px solid ${ev.color}25` }}
          initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
          transition={{ ...SPRING, delay: 0.3 + i * 0.1 }}
        >
          <div className="w-1 h-8 rounded-full shrink-0" style={{ background: ev.color }} />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white/90 truncate">{ev.name}</p>
            <p className="data-mono text-[10px] text-white/40">{ev.time}</p>
          </div>
          <span
            className="text-[9px] font-mono px-2 py-0.5 rounded-full shrink-0"
            style={{ background: `${ev.color}15`, color: ev.color }}
          >
            {ev.travel}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ── App Store Rating Ring ── */
function AccuracyRing() {
  const pct = 100; // 5.0 / 5.0 = 100%
  const r = 42;
  const circ = 2 * Math.PI * r;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg width={112} height={112} viewBox="0 0 112 112">
          {/* Track */}
          <circle cx={56} cy={56} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={6} />
          {/* Progress */}
          <motion.circle
            cx={56} cy={56} r={r} fill="none"
            stroke="url(#accGrad)" strokeWidth={6} strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "56px 56px" }}
          />
          <defs>
            <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="data-mono text-2xl font-bold" style={{ color: "#F59E0B" }}>5.0★</span>
          <span className="text-[9px] font-mono text-white/30 uppercase">App Store</span>
        </div>
      </div>
      <p className="text-xs text-white/40 text-center">Verified rating on the iOS App Store.</p>
    </div>
  );
}

/* ── Section ── */
export default function BentoGridSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-28 px-6 overflow-hidden" style={{ background: "#020617" }}>
      {/* Section glow */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(58,123,255,0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING }}
        >
          <div className="tag-badge mb-5">CommuteGraph™ Intelligence Suite</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Every signal. <span className="gradient-text-blue">One decision.</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl">
            Five proprietary data layers distilled into a single departure signal.
            No noise. Just precision.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* Card 1 — Large: Smart Alerts (spans 2 cols on lg) */}
          <GlowCard
            className="lg:col-span-2 p-6 flex flex-col gap-4"
            glowColor="rgba(58,123,255,0.15)"
            delay={0}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="tag-badge text-[10px] mb-2 inline-flex">Smart Alerts</span>
                <h3 className="text-xl font-semibold text-white mt-2">Departure Intelligence</h3>
                <p className="text-sm text-white/35 mt-1 max-w-xs">
                  Context-aware push alerts that account for your calendar, not just traffic.
                </p>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(58,123,255,0.1)", border: "0.5px solid rgba(58,123,255,0.2)" }}
              >
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <circle cx={9} cy={9} r={4} fill="#3A7BFF" />
                  <circle cx={9} cy={9} r={7} fill="none" stroke="rgba(58,123,255,0.4)" strokeWidth={1} strokeDasharray="2 2" />
                </svg>
              </div>
            </div>
            <AlertMockup />
          </GlowCard>

          {/* Card 2 — Accuracy */}
          <GlowCard
            className="p-6 flex flex-col items-center justify-center gap-3"
            glowColor="rgba(0,212,255,0.14)"
            delay={0.1}
          >
            <AccuracyRing />
          </GlowCard>

          {/* Card 3 — Traffic Prediction */}
          <GlowCard
            className="p-6 flex flex-col gap-3"
            glowColor="rgba(239,68,68,0.12)"
            delay={0.15}
          >
            <span className="tag-badge text-[10px]" style={{ color: "#F59E0B", borderColor: "rgba(245,158,11,0.25)", background: "rgba(245,158,11,0.08)" }}>
              Traffic Prediction
            </span>
            <h3 className="text-base font-semibold text-white">Congestion Forecast</h3>
            <p className="text-xs text-white/30 mb-2">Hourly severity on your corridor</p>
            <TrafficBars />
          </GlowCard>

          {/* Card 4 — Calendar Sync (spans 2 cols on lg) */}
          <GlowCard
            className="lg:col-span-2 p-6 flex flex-col gap-4"
            glowColor="rgba(110,92,255,0.14)"
            delay={0.2}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="tag-badge text-[10px] mb-2 inline-flex" style={{ color: "#6E5CFF", borderColor: "rgba(110,92,255,0.3)", background: "rgba(110,92,255,0.08)" }}>
                  Calendar Intelligence
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">Schedule-Synced Departure</h3>
                <p className="text-sm text-white/35 mt-1">
                  Connects to Google Calendar and Outlook. Knows your next meeting before you do.
                </p>
              </div>
            </div>
            <CalendarMini />
          </GlowCard>

          {/* Card 5 — Pattern Learning */}
          <GlowCard
            className="p-6 flex flex-col gap-3"
            glowColor="rgba(16,185,129,0.12)"
            delay={0.25}
          >
            <span className="tag-badge text-[10px]" style={{ color: "#10B981", borderColor: "rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.08)" }}>
              ML Engine
            </span>
            <h3 className="text-base font-semibold text-white">Pattern Learning</h3>
            <p className="text-xs text-white/30 mb-2">
              Builds a personal commute model after 30 days. Gets smarter every trip.
            </p>
            {/* Mini learning viz */}
            <div className="flex flex-col gap-2 mt-auto">
              {[
                { label: "Rush hour fit", pct: 94, color: "#3A7BFF" },
                { label: "Incident response", pct: 87, color: "#00D4FF" },
                { label: "Weekend adapt", pct: 79, color: "#10B981" },
              ].map(({ label, pct, color }) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 font-mono">{label}</span>
                    <span className="data-mono text-[10px] font-semibold" style={{ color }}>{pct}%</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : {}}
                      transition={{ ...HEAVY_SPRING, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>

        </div>
      </div>
    </section>
  );
}
