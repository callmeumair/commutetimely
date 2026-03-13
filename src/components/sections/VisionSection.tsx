"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const roadmapItems = [
  {
    phase: "Now",
    status: "live",
    title: "Departure Intelligence",
    items: ["Real-time traffic prediction", "Weather-aware departures", "Smart push alerts", "Available on the App Store"],
    color: "#3A7BFF",
  },
  {
    phase: "Q3 2026",
    status: "building",
    title: "Calendar Integration",
    items: [
      "Automatic event-based departures",
      "Meeting buffer calculation",
      "Multi-stop trip planning",
      "Google & Apple Calendar sync",
    ],
    color: "#6E5CFF",
  },
  {
    phase: "2027",
    status: "vision",
    title: "Predictive Commute OS",
    items: [
      "Pre-emptive traffic signal analysis",
      "City-wide delay prediction",
      "Smart city data integration",
      "Autonomous route optimization",
    ],
    color: "#00D4FF",
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[#080E1C] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(110,92,255,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Orbiting circles decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-[#6E5CFF]/30" />
        <div className="absolute inset-12 rounded-full border border-[#3A7BFF]/20" />
        <div className="absolute inset-24 rounded-full border border-[#00D4FF]/15" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[#6E5CFF]"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -top-[150px] left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#6E5CFF] shadow-[0_0_10px_#6E5CFF]" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-[#6E5CFF] border border-[#6E5CFF]/20 tracking-wide uppercase">
            The Vision
          </span>
        </FadeIn>

        <div className="max-w-3xl mb-16">
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight text-white mb-6">
              The Future of{" "}
              <span className="gradient-text-violet">Arrival Intelligence</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-[#E6EAF2]/50 leading-relaxed">
              We're not building another navigation app. We're creating a new category:{" "}
              <span className="text-[#E6EAF2]/80 font-medium">the intelligent layer between your schedule and your commute</span>{" "}
              — a system that eventually knows when you need to leave before you even think about it.
            </p>
          </FadeIn>
        </div>

        {/* Roadmap */}
        <div className="grid md:grid-cols-3 gap-5 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-[#3A7BFF]/30 via-[#6E5CFF]/30 to-[#00D4FF]/30" />

          {roadmapItems.map((item, i) => (
            <FadeIn key={item.phase} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-2xl p-6 border overflow-hidden h-full ${
                  item.status === "live"
                    ? "bg-[#0D1525] border-[#3A7BFF]/30"
                    : item.status === "building"
                    ? "bg-[#0D1525] border-[#6E5CFF]/20"
                    : "bg-[#0A1220] border-white/[0.05]"
                }`}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${item.color}12 0%, transparent 70%)`,
                  }}
                />

                {/* Phase badge */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.color }}
                  />
                  <span
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: item.color }}
                  >
                    {item.phase}
                  </span>
                  {item.status === "live" && (
                    <span className="ml-auto text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                      Live
                    </span>
                  )}
                  {item.status === "building" && (
                    <span className="ml-auto text-[10px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                      Building
                    </span>
                  )}
                  {item.status === "vision" && (
                    <span className="ml-auto text-[10px] font-semibold text-[#6E5CFF] bg-[#6E5CFF]/10 border border-[#6E5CFF]/20 px-2 py-0.5 rounded-full">
                      Vision
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-4">{item.title}</h3>

                <ul className="space-y-2">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#E6EAF2]/50">
                      <div
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: item.color, opacity: 0.7 }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Vision statement */}
        <FadeIn delay={0.3} className="mt-16">
          <div className="rounded-2xl border border-[#6E5CFF]/20 bg-gradient-to-br from-[#0D1525] to-[#0A1220] p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(110,92,255,0.08)_0%,transparent_70%)]" />
            <div className="relative">
              <div className="text-lg md:text-2xl font-semibold text-white/80 leading-relaxed max-w-3xl mx-auto">
                "Imagine a world where you never have to <span className="text-[#6E5CFF]">think about when to leave</span>.
                Your phone knows your schedule, knows the roads, and knows exactly when to nudge you.{" "}
                <span className="text-[#00D4FF]">That's what we're building.</span>"
              </div>
              <div className="mt-6 text-sm text-white/30">— CommuteTimely Team</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
