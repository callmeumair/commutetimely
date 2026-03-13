"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, animate } from "framer-motion";

const SPRING       = { type: "spring" as const, stiffness: 120, damping: 20 };
const HEAVY_SPRING = { type: "spring" as const, mass: 1, stiffness: 80, damping: 15 };

/* ── Animated counter hook ── */
function useCounter(to: number, duration = 2, delay = 0, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef(false);
  const inRef = useRef(null);
  const inView = useInView(inRef, { once: true });

  useEffect(() => {
    if (!inView || ref.current) return;
    ref.current = true;
    const timeout = setTimeout(() => {
      const start = Date.now();
      const step = () => {
        const elapsed = (Date.now() - start) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((to * eased).toFixed(decimals)));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, to, duration, delay, decimals]);

  return { value, ref: inRef };
}

/* ── Weekly Schedule Grid ── */
function WeeklySchedule() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const schedule = [
    // [departure hour, meeting hour, depart-min, meeting-len]
    [8.25, 9.0,  1],
    [8.75, 9.5,  1],
    [7.5,  8.5,  3], // early day
    [8.5,  9.25, 1],
    [8.0,  9.0,  2],
  ];

  // Traffic heat: 0=clear, 1=light, 2=moderate, 3=heavy
  const trafficColors = ["#10B981", "#10B981", "#EF4444", "#F59E0B", "#3A7BFF"];

  return (
    <div className="flex flex-col gap-2">
      {/* Legend */}
      <div className="flex items-center gap-4 mb-1">
        {[["#3A7BFF","Meeting"], ["#10B981","Depart window"], ["#EF4444","Heavy traffic"]].map(([color, label]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm" style={{ background: color }} />
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">{label}</span>
          </div>
        ))}
      </div>

      {/* Timeline rows with periodic scan bar */}
      <div className="relative">
        {/* ── Scan bar — sweeps across the entire chart periodically ── */}
        <div className="scan-bar" style={{ zIndex: 10 }} />

        {days.map((day, i) => {
          const [deptH, meetH, meetLen] = schedule[i];
          const startHr = 7;
          const totalHrs = 4;
          const deptPct = ((deptH - startHr) / totalHrs) * 100;
          const meetPct = ((meetH - startHr) / totalHrs) * 100;
          const meetWidth = (meetLen / totalHrs) * 100;

          return (
            <div key={day} className="flex items-center gap-3 mb-2">
              <span className="data-mono text-[10px] text-white/30 w-8 shrink-0">{day}</span>
              <div className="flex-1 relative h-5 rounded-md overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
                {/* Traffic background */}
                <div className="absolute inset-0 rounded-md" style={{ background: `${trafficColors[i]}06` }} />
                {/* Depart window */}
                <motion.div
                  className="absolute top-1 bottom-1 rounded-sm"
                  style={{ left: `${deptPct}%`, width: "8%", background: trafficColors[i], opacity: 0.7 }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ ...SPRING, delay: 0.3 + i * 0.07 }}
                />
                {/* Meeting block */}
                <motion.div
                  className="absolute top-0.5 bottom-0.5 rounded-sm"
                  style={{ left: `${meetPct}%`, width: `${meetWidth}%`, background: "rgba(58,123,255,0.35)", border: "0.5px solid rgba(58,123,255,0.5)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ ...SPRING, delay: 0.5 + i * 0.07 }}
                />
              </div>
              <span className="data-mono text-[9px] text-white/20 w-10 text-right shrink-0">
                {String(Math.floor(deptH)).padStart(2,"0")}:{String(Math.round((deptH % 1) * 60)).padStart(2,"0")}
              </span>
            </div>
          );
        })}
      </div>

      {/* Hour axis */}
      <div className="flex ml-11 mr-12">
        {["7am","8am","9am","10am","11am"].map(h => (
          <span key={h} className="flex-1 text-[8px] font-mono text-white/15 text-center">{h}</span>
        ))}
      </div>
    </div>
  );
}

/* ── CO2 Widget ── */
function CO2Widget() {
  const { value, ref } = useCounter(142, 2.5, 0.5, 0);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(16,185,129,0.12)", border: "0.5px solid rgba(16,185,129,0.2)" }}>
            <span className="text-[14px]">🌱</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/80">CO₂ Avoided</p>
            <p className="text-[10px] text-white/30 font-mono">by idle engine reduction</p>
          </div>
        </div>
        <div className="text-right">
          <p className="data-mono text-2xl font-bold gradient-text-emerald">{value}</p>
          <p className="text-[9px] font-mono text-white/25 uppercase">kg this year</p>
        </div>
      </div>

      {/* CO2 bar */}
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #10B981, #00D4FF)" }}
          initial={{ width: 0 }}
          animate={{ width: "68%" }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
        />
      </div>
      <p className="text-[10px] text-white/25 font-mono">
        ≈ {Math.round(value * 0.024)} trees · {Math.round(value / 2.3)} hours of engine idle saved
      </p>
    </div>
  );
}

/* ── Hours Reclaimed Ticker ── */
function HoursReclaimedTicker() {
  const { value, ref } = useCounter(127.5, 3, 0, 1);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <p className="text-[10px] font-mono text-white/25 uppercase tracking-widest">Hours Reclaimed</p>
      <div className="flex items-baseline gap-1">
        <span className="data-mono text-5xl font-black gradient-text-blue tabular-nums">
          {value.toFixed(1)}
        </span>
        <span className="text-white/30 text-lg font-mono">hrs</span>
      </div>
      <p className="text-[11px] text-white/35 text-center max-w-[160px]">
        since you started using CommuteTimely
      </p>
    </div>
  );
}

/* ── Today's Commute Strip ── */
function TodayStrip() {
  const events = [
    { time: "8:45 AM", label: "Depart Home",           icon: "🏠", color: "#3A7BFF", active: false },
    { time: "9:02 AM", label: "Arrive Office",          icon: "🏢", color: "#10B981", active: true  },
    { time: "10:30 AM",label: "Board Review",            icon: "📊", color: "#6E5CFF", active: false },
    { time: "6:15 PM", label: "Depart Home (suggest)",  icon: "🚗", color: "#F59E0B", active: false },
  ];

  return (
    <div className="flex flex-col gap-0">
      {events.map((ev, i) => (
        <div key={ev.label} className="flex gap-3 relative">
          {/* Vertical connector */}
          {i < events.length - 1 && (
            <div className="absolute left-[11px] top-8 w-0.5 h-6 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
          )}
          {/* Dot */}
          <div
            className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-3 z-10"
            style={{
              background: ev.active ? ev.color : "rgba(255,255,255,0.05)",
              border: `0.5px solid ${ev.active ? ev.color : "rgba(255,255,255,0.08)"}`,
              boxShadow: ev.active ? `0 0 10px ${ev.color}50` : "none",
            }}
          >
            {ev.active && <span className="w-2 h-2 rounded-full" style={{ background: "#fff" }} />}
          </div>
          <div className="pb-5">
            <p className="data-mono text-xs font-semibold" style={{ color: ev.active ? ev.color : "rgba(255,255,255,0.6)" }}>
              {ev.time}
            </p>
            <p className="text-[11px] text-white/30">{ev.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main Section ── */
export default function ExecutiveDashboardSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" ref={ref} className="relative py-28 px-6 overflow-hidden" style={{ background: "#020617" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(110,92,255,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 32, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={HEAVY_SPRING}
        >
          <div className="tag-badge mb-5" style={{ color: "#6E5CFF", borderColor: "rgba(110,92,255,0.3)", background: "rgba(110,92,255,0.08)" }}>
            Executive Dashboard
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Your commute, <span className="gradient-text-violet">orchestrated.</span>
          </h2>
          <p className="text-white/40 text-base max-w-lg">
            A live view of your schedule, traffic, and departure windows — fused into one precision timeline.
          </p>
        </motion.div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">

          {/* Left: Weekly Schedule (spans 2 cols) */}
          <motion.div
            className="lg:col-span-2 glass-heavy p-6 flex flex-col gap-6"
            initial={{ opacity: 0, y: 36, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ ...HEAVY_SPRING, delay: 0.1 }}
          >
            {/* Dashboard header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Weekly Commute Intelligence</h3>
                <p className="text-[11px] font-mono text-white/30 mt-0.5">Mon 9 – Fri 13 March 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse-ring-cyan" />
                <span className="text-[10px] font-mono text-[#10B981]">LIVE</span>
              </div>
            </div>

            <WeeklySchedule />

            {/* Insight bar */}
            <div
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: "rgba(58,123,255,0.06)", border: "0.5px solid rgba(58,123,255,0.15)" }}
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(58,123,255,0.12)", border: "0.5px solid rgba(58,123,255,0.2)" }}>
                <svg width={14} height={14} fill="none" viewBox="0 0 14 14">
                  <circle cx={7} cy={7} r={5} stroke="#3A7BFF" strokeWidth={1.2} />
                  <path d="M7 5v3M7 9.5v.5" stroke="#3A7BFF" strokeWidth={1.2} strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[11px] text-white/50">
                <span className="text-[#3A7BFF] font-semibold">Wednesday</span> has heavy I-280 congestion predicted 7–9 AM.
                Optimal departure moved to <span className="data-mono text-white/70">7:28 AM</span>.
              </p>
            </div>
          </motion.div>

          {/* Right column: 3 stacked cards */}
          <div className="flex flex-col gap-4">

            {/* Today's timeline */}
            <motion.div
              className="glass-heavy p-5"
              initial={{ opacity: 0, y: 36, scale: 0.96 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ ...HEAVY_SPRING, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">Today's Timeline</h3>
              <TodayStrip />
            </motion.div>

            {/* Hours reclaimed */}
            <motion.div
              className="glass-heavy p-5 flex items-center justify-center"
              initial={{ opacity: 0, y: 36, scale: 0.96 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ ...HEAVY_SPRING, delay: 0.3 }}
              style={{ background: "linear-gradient(135deg, rgba(58,123,255,0.06) 0%, rgba(0,212,255,0.04) 100%)" }}
            >
              <HoursReclaimedTicker />
            </motion.div>

            {/* CO2 widget */}
            <motion.div
              className="glass-heavy p-5"
              initial={{ opacity: 0, y: 36, scale: 0.96 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ ...HEAVY_SPRING, delay: 0.4 }}
              style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(0,212,255,0.03) 100%)" }}
            >
              <CO2Widget />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
