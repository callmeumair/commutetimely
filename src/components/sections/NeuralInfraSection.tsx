"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const SPRING       = { type: "spring" as const, stiffness: 120, damping: 20 };
const HEAVY_SPRING = { type: "spring" as const, mass: 1, stiffness: 80, damping: 15 };

/** Live-ping CSS class per card position (varies rhythm per card) */
const PING_CLASSES = ["live-ping-a","live-ping-b","live-ping-c","live-ping-d","live-ping-e","live-ping-f"] as const;

/* ── Tech Stack Data ── */
const STACK_NODES = [
  {
    name: "PostgreSQL",
    role: "Structured Data Layer",
    desc: "Time-series commute events, user profiles, route history.",
    color: "#3A7BFF",
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <ellipse cx={10} cy={5} rx={7} ry={3} stroke="#3A7BFF" strokeWidth={1.2} />
        <path d="M3 5v10c0 1.66 3.13 3 7 3s7-1.34 7-3V5" stroke="#3A7BFF" strokeWidth={1.2} />
        <path d="M3 10c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="#3A7BFF" strokeWidth={1.2} />
      </svg>
    ),
  },
  {
    name: "Redis",
    role: "Real-Time Cache",
    desc: "Sub-5ms latency for live traffic state and departure triggers.",
    color: "#EF4444",
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <path d="M3 10l7-4 7 4-7 4-7-4z" stroke="#EF4444" strokeWidth={1.2} />
        <path d="M3 10v3l7 4 7-4v-3" stroke="#EF4444" strokeWidth={1.2} />
      </svg>
    ),
  },
  {
    name: "Vector ML",
    role: "Embedding Engine",
    desc: "HNSW-indexed commute patterns. Cosine-similarity departure matching.",
    color: "#6E5CFF",
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <circle cx={5}  cy={5}  r={2.5} stroke="#6E5CFF" strokeWidth={1.2} />
        <circle cx={15} cy={5}  r={2.5} stroke="#6E5CFF" strokeWidth={1.2} />
        <circle cx={10} cy={15} r={2.5} stroke="#6E5CFF" strokeWidth={1.2} />
        <path d="M7 5h6M6.5 6.5l3 7M13.5 6.5l-3 7" stroke="#6E5CFF" strokeWidth={1} opacity={0.6} />
      </svg>
    ),
  },
  {
    name: "Kafka Streams",
    role: "Event Pipeline",
    desc: "100K+ events/sec from traffic APIs, GTFS transit, weather feeds.",
    color: "#F59E0B",
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M10 4l6 6-6 6" stroke="#F59E0B" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Next.js Edge",
    role: "Compute Layer",
    desc: "Departure predictions computed at the edge — globally distributed.",
    color: "#E2E8F0",
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <path d="M3 10a7 7 0 1014 0A7 7 0 003 10z" stroke="#E2E8F0" strokeWidth={1.2} />
        <path d="M10 3v4M10 13v4M3 10h4M13 10h4" stroke="#E2E8F0" strokeWidth={1} opacity={0.5} />
      </svg>
    ),
  },
  {
    name: "GTFS + HERE",
    role: "Data Feeds",
    desc: "Real-time transit (GTFS-RT) fused with HERE Maps routing v9.",
    color: "#00D4FF",
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <path d="M10 3C7.24 3 5 5.24 5 8c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="#00D4FF" strokeWidth={1.2} />
        <circle cx={10} cy={8} r={2} stroke="#00D4FF" strokeWidth={1.2} />
      </svg>
    ),
  },
];

/* ── Comparison Chart ── */
const COMPARISON_ROWS = [
  { feature: "Departure Prediction",     us: 96, them: 0,  note: "Legacy apps have no concept of departure windows" },
  { feature: "Calendar-Aware Alerts",    us: 100, them: 0, note: "Google Maps/Waze are calendar-blind" },
  { feature: "Personal Pattern Learning",us: 94, them: 18, note: "Waze has basic re-routing; no personal ML baseline" },
  { feature: "Idle-Time Avoidance",      us: 89, them: 32, note: "Navigation starts routing after you leave" },
  { feature: "Precision Accuracy (90d)", us: 96, them: 72, note: "Based on independent user data study" },
  { feature: "Drive · Bike · Transit Fusion",  us: 91, them: 45, note: "Most apps handle one mode only" },
];

/* ── Draggable Comparison Slider ── */
function ComparisonDragSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splitPct, setSplitPct] = useState(50);
  const dragging = useRef(false);
  const inView = useInView(containerRef, { once: true, margin: "-40px" });

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(92, Math.max(8, ((e.clientX - rect.left) / rect.width) * 100));
    setSplitPct(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden select-none"
      style={{ height: 392, cursor: "ew-resize" }}
      onPointerMove={onPointerMove}
      onPointerUp={() => { dragging.current = false; }}
      onPointerLeave={() => { dragging.current = false; }}
    >
      {/* ── Legacy panel (base layer — full width) ── */}
      <div className="absolute inset-0 flex flex-col"
        style={{ background: "linear-gradient(170deg, rgba(42,8,8,0.97) 0%, rgba(22,4,4,0.99) 100%)" }}>
        <div className="flex items-center justify-between px-6 pt-5 pb-3"
          style={{ borderBottom: "0.5px solid rgba(255,60,60,0.1)" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/60 animate-pulse" />
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              Legacy Navigation · Waze / Google Maps
            </span>
          </div>
          <span className="text-[9px] font-mono text-red-500/40">Static Routing Mode</span>
        </div>
        <div className="flex-1 px-6 py-4 flex flex-col gap-3 overflow-hidden">
          {COMPARISON_ROWS.map((row) => (
            <div key={row.feature} className="flex items-center gap-3">
              <span className="text-[11px] text-white/20 font-mono shrink-0" style={{ minWidth: 182 }}>{row.feature}</span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                {row.them > 0 && (
                  <div className="h-full rounded-full" style={{ width: `${row.them}%`, background: "rgba(255,80,80,0.3)" }} />
                )}
              </div>
              <span className="data-mono text-[11px] text-red-500/40 w-10 text-right shrink-0">
                {row.them === 0 ? "—" : `${row.them}%`}
              </span>
            </div>
          ))}
          {/* chaotic bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(0deg, rgba(42,8,8,0.95) 0%, transparent 100%)" }} />
          <div className="absolute bottom-5 left-6 right-6 flex gap-2 opacity-25 pointer-events-none">
            {["#f55","#f84","#fc5"].map((c, i) => (
              <div key={i} className="flex-1 h-7 rounded-lg"
                style={{ background: `${c}18`, border: `0.5px solid ${c}30` }} />
            ))}
          </div>
          <p className="absolute bottom-2.5 right-6 text-[8px] font-mono text-red-400/25">
            No departure model · Calendar-blind · Drive-only
          </p>
        </div>
      </div>

      {/* ── CommuteTimely panel (clips in from left) ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - splitPct}% 0 0)` }}
      >
        <div className="absolute inset-0 flex flex-col glass-heavy" style={{ borderRadius: 0 }}>
          <div className="flex items-center justify-between px-6 pt-5 pb-3"
            style={{ borderBottom: "0.5px solid rgba(58,123,255,0.1)" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981] live-ping-a" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                CommuteTimely · Arrival Intelligence
              </span>
            </div>
            <span className="text-[9px] font-mono text-[#10B981]/50">Precision Mode</span>
          </div>
          <div className="flex-1 px-6 py-4 flex flex-col gap-3">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.feature} className="flex items-center gap-3">
                <span className="text-[11px] text-white/60 font-mono shrink-0" style={{ minWidth: 182 }}>{row.feature}</span>
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg,#3A7BFF,#00D4FF)" }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${row.us}%` } : {}}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                  />
                </div>
                <span className="data-mono text-[11px] font-bold text-[#3A7BFF] w-10 text-right shrink-0">
                  {row.us}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Drag handle divider ── */}
      <div
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
        style={{ left: `${splitPct}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-px h-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div
          className="drag-handle absolute"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            dragging.current = true;
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H2M5 8l2.5-2.5M5 8l2.5 2.5M11 8h3M11 8L8.5 5.5M11 8l-2.5 2.5"
              stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.25)", border: "0.5px solid rgba(255,255,255,0.07)" }}>
          ⟵  Drag to compare  ⟶
        </span>
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function NeuralInfraSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="infra" ref={ref} className="relative py-28 px-6 overflow-hidden" style={{ background: "#020617" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 45% at 80% 50%, rgba(110,92,255,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto space-y-20">

        {/* ── Tech Stack ── */}
        <div>
          <motion.div
            className="flex flex-col items-center text-center mb-12"
            initial={{ opacity: 0, y: 32, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={HEAVY_SPRING}
          >
            <div className="tag-badge mb-5" style={{ color: "#6E5CFF", borderColor: "rgba(110,92,255,0.3)", background: "rgba(110,92,255,0.08)" }}>
              Neural Infrastructure
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Built on a <span className="gradient-text-violet">defensible moat.</span>
            </h2>
            <p className="text-white/40 text-base max-w-xl">
              Six layers of proprietary infrastructure that no navigation app has — or could rebuild in less than two years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STACK_NODES.map((node, i) => (
              <motion.div
                key={node.name}
                className="glass-heavy p-5 flex flex-col gap-3 group"
                initial={{ opacity: 0, y: 28, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ ...HEAVY_SPRING, delay: 0.06 * i }}
                whileHover={{ scale: 1.025 }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${node.color}12`, border: `0.5px solid ${node.color}25` }}
                  >
                    {node.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {/* Live status ping — each card has its own rhythm */}
                    <div className="relative flex items-center justify-center w-4 h-4">
                      <div
                        className={`absolute w-2.5 h-2.5 rounded-full ${PING_CLASSES[i]}`}
                        style={{ background: node.color, opacity: 0.3 }}
                      />
                      <div
                        className="relative w-1.5 h-1.5 rounded-full"
                        style={{ background: node.color }}
                      />
                    </div>
                    <span
                      className="text-[9px] font-mono px-2 py-1 rounded-full"
                      style={{ background: `${node.color}10`, color: node.color, border: `0.5px solid ${node.color}20` }}
                    >
                      {["<3ms","<1ms","batch","stream","edge","live"][i]}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{node.name}</h3>
                  <p className="text-[11px] font-mono text-white/40 mt-0.5 uppercase tracking-wider">{node.role}</p>
                </div>
                <p className="text-xs text-white/30 leading-relaxed">{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Comparison Drag Slider ── */}
        <div>
          <motion.div
            className="flex flex-col items-center text-center mb-12"
            initial={{ opacity: 0, y: 32, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ ...HEAVY_SPRING, delay: 0.2 }}
          >
            <div className="tag-badge mb-5">Defensible Moat</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              CommuteTimely <span className="text-white/25">vs.</span>{" "}
              <span className="text-white/35">Legacy Navigation</span>
            </h2>
            <p className="text-white/35 text-base max-w-lg mb-3">
              This is not a feature comparison. It&apos;s a category distinction.
            </p>
            <p className="text-[11px] font-mono text-white/20 flex items-center gap-2">
              <span>⟵</span>
              <span>Drag the handle to reveal the advantage</span>
              <span>⟶</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ ...HEAVY_SPRING, delay: 0.35 }}
          >
            <ComparisonDragSlider />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
