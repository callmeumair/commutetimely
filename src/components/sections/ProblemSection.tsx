"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "You leave too early",
    desc: "Arriving 30 minutes early kills productivity. You waste time waiting in parking lots or coffee shops.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M3 3l18 18M10.5 10.68A4 4 0 0112 8a4 4 0 014 4 4 4 0 01-.68 2.23M6.34 6.34A8 8 0 0012 4a8 8 0 018 8 8 8 0 01-1.95 5.27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Traffic is unpredictable",
    desc: "A crash on one road ripples into delays on roads miles away. Navigation apps react — they don't predict.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 2l-2 4M16 2l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Late arrivals cause stress",
    desc: "Showing up late to a meeting, an interview, or a flight creates anxiety that impacts your entire day.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(110,92,255,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <FadeIn className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-[#6E5CFF] border border-[#6E5CFF]/20 tracking-wide uppercase">
            The Problem
          </span>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1} className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-tight tracking-tight text-white">
            Most Commute Apps <br />
            <span className="gradient-text-violet">Solve the Wrong Problem</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} className="text-center mb-20">
          <p className="text-lg text-[#E6EAF2]/50 max-w-[560px] mx-auto leading-relaxed">
            Navigation apps tell you <span className="text-[#E6EAF2]/80 italic">how to get somewhere</span>.
            But they don't tell you <span className="text-[#E6EAF2]/80 italic">when to leave</span>.
            That's the gap CommuteTimely was built to close.
          </p>
        </FadeIn>

        {/* Comparison visual */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Nav apps */}
          <FadeIn delay={0.1} direction="left">
            <div className="relative rounded-2xl p-7 bg-[#0D1525] border border-white/[0.06] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(255,50,50,0.06)_0%,transparent_70%)]" />
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 text-red-400">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Navigation Apps</h3>
              <ul className="space-y-2.5">
                {[
                  "Tells you the fastest route",
                  "Shows real-time traffic on route",
                  "Recalculates when there's a jam",
                  "Assumes you already left",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#E6EAF2]/50">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400/70" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M5.5 8h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-red-400/70 font-medium">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M8 2v6l4 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <circle cx="8" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                Reactive, not predictive
              </div>
            </div>
          </FadeIn>

          {/* CommuteTimely */}
          <FadeIn delay={0.2} direction="right">
            <div className="relative rounded-2xl p-7 bg-[#0D1525] border border-[#3A7BFF]/30 overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.08)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(58,123,255,0.10)_0%,transparent_70%)]" />
              <div className="w-10 h-10 rounded-xl bg-[#3A7BFF]/15 border border-[#3A7BFF]/30 flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3A7BFF]" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9.5 12l1.5 1.5L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">CommuteTimely</h3>
              <ul className="space-y-2.5">
                {[
                  "Tells you exactly when to leave",
                  "Predicts delays before they happen",
                  "Learns your commute over time",
                  "Sends a departure alert at the right moment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#E6EAF2]/70">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00D4FF]" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-[#00D4FF] font-semibold">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M8 2v4l3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 8a5 5 0 1010 0A5 5 0 003 8z" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                Predictive departure intelligence
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(110,92,255,0.2)" }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 bg-[#0D1525] border border-white/[0.06] cursor-default h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6E5CFF]/10 border border-[#6E5CFF]/20 flex items-center justify-center mb-4 text-[#6E5CFF]">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-[#E6EAF2]/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
