"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SiteLayout from "@/components/SiteLayout";
import AppStoreBadge from "@/components/AppStoreBadge";

const SPRING = { type: "spring" as const, stiffness: 80, damping: 18 };

const TIMELINE = [
  {
    era: "1990s",
    label: "Turn-by-Turn Navigation",
    desc: "GPS devices told you where to go. Static routes. Zero context. If traffic hit, you were already in it.",
    status: "legacy",
    color: "#475569",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-10.498l4.875 2.437c.75.375.75 1.313 0 1.688l-4.875 2.437a1.5 1.5 0 01-1.006.085L4.5 9.75l-.094-.028a.75.75 0 010-1.444L4.5 8.25l9.997-2.813a1.5 1.5 0 011.006.065z" />
      </svg>
    ),
  },
  {
    era: "2008",
    label: "Real-Time Re-routing",
    desc: "Waze and Google Maps learned to react. Crowdsourced incidents let apps reroute mid-journey — but still reactive, not predictive.",
    status: "legacy",
    color: "#64748B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-10.498l4.875 2.437c.75.375.75 1.313 0 1.688l-4.875 2.437a1.5 1.5 0 01-1.006.085L4.5 9.75l-.094-.028a.75.75 0 010-1.444L4.5 8.25l9.997-2.813a1.5 1.5 0 011.006.065z" />
        <circle cx={12} cy={5} r={2} />
      </svg>
    ),
  },
  {
    era: "2016",
    label: "Predictive Routing",
    desc: "Historical patterns unlocked departure suggestions. But the models were generic — built for the average commuter, not for you.",
    status: "legacy",
    color: "#3A7BFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    era: "2024",
    label: "Arrival Intelligence",
    desc: "CommuteTimely fuses live traffic feeds, personal calendar context, weather, and 18 months of your personal commute history. The result: a single precise departure signal — built for you, updated every 90 seconds.",
    status: "live",
    color: "#10B981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    era: "2027",
    label: "Autonomous Schedule Orchestration",
    desc: "The next frontier: your calendar becomes self-managing. CommuteTimely proactively reschedules meetings, adjusts departure buffers, and coordinates multi-modal trips — all before you wake up.",
    status: "vision",
    color: "#6E5CFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const FOUNDERS = [
  {
    name: "Umer Patel",
    role: "Founder & CEO",
    bio: "Built CommuteTimely solo because no existing tool told him when to leave — only where to go. A lifelong commuter obsessed with making departure timing feel effortless, Umer combines product intuition with engineering depth to turn a daily frustration into precision intelligence.",
    initials: "UP",
    color: "#3A7BFF",
    linkedin: "https://www.linkedin.com/in/umerpatel/",
  },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...SPRING, delay }}
    >
      {children}
    </motion.div>
  );
}

function TimelineItem({ item, index }: { item: typeof TIMELINE[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isLast = index === TIMELINE.length - 1;

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Left — year + connector */}
      <div className="flex flex-col items-center w-20 shrink-0">
        <motion.div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 z-10"
          style={{ background: `${item.color}18`, border: `1px solid ${item.color}40`, color: item.color }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ ...SPRING, delay: index * 0.1 }}
        >
          {item.icon}
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${item.color}40, transparent)` }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }}
          />
        )}
      </div>

      {/* Right — content */}
      <motion.div
        className="pb-12 flex-1"
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ ...SPRING, delay: index * 0.1 + 0.05 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">{item.era}</span>
          {item.status === "live" && (
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#10B981] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> Live
            </span>
          )}
          {item.status === "vision" && (
            <span className="text-[10px] font-mono text-[#6E5CFF] uppercase tracking-wider">Vision</span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2" style={{ color: item.status === "legacy" ? "rgba(255,255,255,0.5)" : "white" }}>
          {item.label}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed max-w-xl">{item.desc}</p>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(110,92,255,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <FadeUp>
            <div className="tag-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E5CFF]" />
              Our Mission
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="gradient-text-violet">The Era of</span>
              <br />
              <span className="text-white">Arrival Intelligence</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
              We believe the question should never be "did I leave early enough?" We built CommuteTimely
              to eliminate that uncertainty forever — replacing guesswork with precision.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats strip */}
      <FadeUp className="max-w-4xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {[
            { value: "5.0★", label: "App Store rating", color: "#F59E0B" },
            { value: "iOS 17+", label: "\u223c20 MB · Free", color: "#6E5CFF" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-5 text-center"
              style={{ background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[11px] font-mono text-white/30 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 mb-28">
        <FadeUp className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">The evolution of getting there</h2>
          <p className="text-white/35 text-base">Five decades of innovation converging on a single moment.</p>
        </FadeUp>
        <div>
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.era} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-6 mb-28">
        <FadeUp className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Who built this</h2>
          <p className="text-white/35">One founder. One obsession. Zero tolerance for leaving too early.</p>
        </FadeUp>
        <div className="flex justify-center">
          {FOUNDERS.map((f, i) => (
            <FadeUp key={f.name} delay={i * 0.1} className="w-full max-w-md">
              <div className="rounded-2xl p-8 h-full"
                style={{ background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold text-white mb-5"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}40`, color: f.color }}>
                  {f.initials}
                </div>
                <div className="text-lg font-semibold text-white mb-0.5">{f.name}</div>
                <div className="text-[11px] font-mono text-white/35 uppercase tracking-wider mb-4">{f.role}</div>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{f.bio}</p>
                {f.linkedin && (
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] font-mono text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <FadeUp>
          <p className="text-white/30 text-sm mb-6">Ready to stop leaving early just in case?</p>
          <AppStoreBadge size="lg" />
        </FadeUp>
      </section>
    </SiteLayout>
  );
}
