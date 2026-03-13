"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AppStoreBadge from "@/components/AppStoreBadge";

const SPRING = { type: "spring" as const, stiffness: 120, damping: 20 };

export default function FinalCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: "#020617" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(58,123,255,0.08) 0%, transparent 65%)"
        }} />
        <div className="absolute inset-0 precision-grid opacity-30" />
      </div>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[280, 420, 560].map((r, i) => (
          <motion.div
            key={r}
            className="absolute rounded-full"
            style={{
              width: r, height: r,
              border: `0.5px solid rgba(58,123,255,${0.08 - i * 0.02})`,
            }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.div
          className="tag-badge"
          initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse-ring-cyan" />
          Available Now · iOS Exclusive
        </motion.div>

        <motion.h2
          className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING, delay: 0.15 }}
        >
          <span className="text-white">Your precision commute</span>
          <br />
          <span className="shimmer-text">starts today.</span>
        </motion.h2>

        <motion.p
          className="text-white/35 text-base max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING, delay: 0.25 }}
        >
          Download the app rated 5.0★ on the App Store.
          Driving, biking, or transit — your most precise departure, every day.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING, delay: 0.35 }}
        >
          <AppStoreBadge size="lg" />
        </motion.div>

        {/* Transport modes */}
        <motion.div
          className="flex items-center gap-2 flex-wrap justify-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: "🚗", label: "Driving" },
            { icon: "🚴", label: "Biking" },
            { icon: "🚌", label: "Public Transport" },
          ].map((m) => (
            <span key={m.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium"
              style={{ background: "rgba(58,123,255,0.08)", border: "0.5px solid rgba(58,123,255,0.2)", color: "rgba(255,255,255,0.5)" }}
            >
              {m.icon} {m.label}
            </span>
          ))}
        </motion.div>

        {/* Social proof micro */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex -space-x-2">
            {["#3A7BFF","#6E5CFF","#10B981","#F59E0B"].map((c, i) => (
              <div key={i} className="w-8 h-8 rounded-full border border-[#020617] flex items-center justify-center text-[11px]"
                style={{ background: `${c}25`, border: `1px solid ${c}40` }}>
                {["J","S","A","M"][i]}
              </div>
            ))}
          </div>
          <p className="text-xs text-white/30">
            <span className="text-white/60 font-medium">5.0★</span> Verified rating · App Store
          </p>
          <div className="h-3 w-px bg-white/10" />
          <p className="text-[10px] text-white/25 font-mono">iOS Exclusive · Requires iOS 17.0+</p>
        </motion.div>
      </div>
    </section>
  );
}
