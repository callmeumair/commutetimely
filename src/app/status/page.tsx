"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SiteLayout from "@/components/SiteLayout";

const SPRING = { type: "spring" as const, stiffness: 80, damping: 18 };

/* ── Service definitions ── */
const SERVICES = [
  {
    name: "Kafka Streams",
    desc: "Real-time event processing pipeline",
    color: "#3A7BFF",
    uptime: "99.98%",
    latency: "4.2ms",
    latencyLabel: "avg ingest latency",
    detail: "180k events/sec · 28 metro areas · hot standby active",
  },
  {
    name: "Redis Cache",
    desc: "Sub-5ms traffic trigger store",
    color: "#10B981",
    uptime: "100%",
    latency: "2.1ms",
    latencyLabel: "avg read latency",
    detail: "12 shards · AOF enabled · cluster failover < 800ms",
  },
  {
    name: "Vector ML Engine",
    desc: "HNSW-indexed commute pattern model",
    color: "#6E5CFF",
    uptime: "99.96%",
    latency: "8.7ms",
    latencyLabel: "avg inference latency",
    detail: "40M vectors · ef_construction=200 · daily reindex 02:00 UTC",
  },
  {
    name: "API Gateway",
    desc: "Client request routing & auth",
    color: "#00D4FF",
    uptime: "99.99%",
    latency: "11ms",
    latencyLabel: "p50 response time",
    detail: "3 regions · rate limit 2000 req/min · TLS 1.3 enforced",
  },
  {
    name: "Mobile Push",
    desc: "iOS notification delivery via APNs",
    color: "#F59E0B",
    uptime: "99.94%",
    latency: "340ms",
    latencyLabel: "avg APNs delivery",
    detail: "12,400 active devices · 98.7% delivery rate · priority: high",
  },
  {
    name: "Commute Data Pipeline",
    desc: "Traffic, weather & transit feed aggregation",
    color: "#EC4899",
    uptime: "99.97%",
    latency: "19ms",
    latencyLabel: "avg source refresh",
    detail: "14 upstream sources · GTFS-RT · OpenWeather · HERE Traffic",
  },
];

const INCIDENTS = [
  { date: "Mar 7, 2026", title: "Resolved: Elevated Redis latency in US-West-2", duration: "12 min", severity: "degraded" },
  { date: "Feb 19, 2026", title: "Resolved: ML Engine reindex delay", duration: "8 min", severity: "degraded" },
  { date: "Jan 31, 2026", title: "Resolved: APNs connectivity issue", duration: "22 min", severity: "degraded" },
];

/* ── Live pulse component per service ── */
function PulseService({ service, delay }: { service: typeof SERVICES[0]; delay: number }) {
  const [pulses, setPulses] = useState<number[]>([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Generates a new pulse dot every ~1.8s
  useEffect(() => {
    const iv = setInterval(() => {
      setPulses(prev => {
        const next = [...prev, Date.now()];
        return next.length > 4 ? next.slice(-4) : next;
      });
    }, 1600 + Math.random() * 800);
    return () => clearInterval(iv);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-5 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "0.5px solid rgba(255,255,255,0.06)",
      }}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...SPRING, delay }}
      whileHover={{ borderColor: `${service.color}30`, boxShadow: `0 0 28px ${service.color}0D` }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Live ping dot */}
          <div className="relative w-5 h-5 flex items-center justify-center">
            <motion.div
              className="absolute rounded-full"
              style={{ background: service.color, width: 20, height: 20, opacity: 0 }}
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <div className="w-2 h-2 rounded-full" style={{ background: service.color }} />
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white">{service.name}</div>
            <div className="text-[11px] text-white/30">{service.desc}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-mono text-white/25 uppercase tracking-widest">Uptime</div>
          <div className="text-sm font-mono font-semibold" style={{ color: service.color }}>{service.uptime}</div>
        </div>
      </div>

      {/* Latency + pulse chart */}
      <div className="flex items-end justify-between gap-2">
        <div>
          <div className="text-xl font-mono font-bold text-white">{service.latency}</div>
          <div className="text-[10px] font-mono text-white/25 uppercase tracking-wider">{service.latencyLabel}</div>
        </div>

        {/* Mini pulse bars */}
        <div className="flex items-end gap-1 h-8">
          {Array.from({ length: 16 }).map((_, i) => {
            const h = 4 + Math.sin(i * 0.9 + (pulses.length * 0.4)) * 10 + Math.random() * 6;
            return (
              <motion.div
                key={i}
                className="w-1 rounded-full"
                style={{ background: `${service.color}60`, minHeight: 4 }}
                animate={{ height: `${h}px` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            );
          })}
        </div>
      </div>

      {/* Detail */}
      <div className="mt-3 pt-3 border-t border-white/[0.04]">
        <p className="text-[10px] font-mono text-white/20">{service.detail}</p>
      </div>
    </motion.div>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...SPRING, delay }}>
      {children}
    </motion.div>
  );
}

export default function StatusPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(16,185,129,0.1) 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-5">
          <FadeUp>
            <div className="tag-badge" style={{ color: "#10B981", borderColor: "rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.08)" }}>
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              System Status
            </div>
          </FadeUp>

          <FadeUp delay={0.07}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
              All Systems <span style={{ color: "#10B981" }}>Operational</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.13}>
            <p className="text-base text-white/35 max-w-md">
              CommuteTimely infrastructure is running at full capacity.
              Last checked: <span className="font-mono text-white/50">{new Date().toUTCString().replace(" GMT", " UTC")}</span>
            </p>
          </FadeUp>

          {/* Global uptime strip */}
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-8 mt-2">
              {[
                { label: "30-day uptime", value: "99.97%", color: "#10B981" },
                { label: "Incidents this month", value: "0", color: "#E2E8F0" },
                { label: "Avg response time", value: "11ms", color: "#3A7BFF" },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div className="text-xl font-mono font-bold" style={{ color: item.color }}>{item.value}</div>
                  <div className="text-[10px] font-mono text-white/25 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Service grid */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <FadeUp className="mb-8">
          <h2 className="text-lg font-semibold text-white/50 uppercase tracking-widest text-xs font-mono">Infrastructure Services</h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <PulseService key={service.name} service={service} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* Uptime chart bar */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <FadeUp>
          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">90-day availability</h3>
              <span className="text-xs font-mono text-[#10B981]">99.97% avg</span>
            </div>
            <div className="flex items-end gap-0.5 h-10">
              {Array.from({ length: 90 }).map((_, i) => {
                const isDown = [23, 51, 72].includes(i);
                return (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ background: isDown ? "#EF4444" : "#10B981", minHeight: 4 }}
                    initial={{ scaleY: 0, originY: 1 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.008, ease: "easeOut" }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] font-mono text-white/20">90 days ago</span>
              <span className="text-[10px] font-mono text-white/20">Today</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Incident history */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <FadeUp className="mb-6">
          <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest">Recent Incident History</h2>
        </FadeUp>
        <div className="flex flex-col gap-3">
          {INCIDENTS.map((inc, i) => (
            <FadeUp key={inc.title} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.05)" }}>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono uppercase"
                  style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "0.5px solid rgba(245,158,11,0.25)" }}>
                  {inc.severity}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-white/60">{inc.title}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[11px] font-mono text-white/25">{inc.date}</p>
                  <p className="text-[10px] font-mono text-white/15">Duration: {inc.duration}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
