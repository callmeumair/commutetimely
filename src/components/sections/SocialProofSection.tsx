"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const stats = [
  { value: "5.0★",    label: "App Store Rating",  sublabel: "Verified on iOS App Store" },
  { value: "~20 MB",  label: "Lightweight App",    sublabel: "iOS 17.0 or later · Free" },
  { value: "iOS 17+", label: "Minimum Version",    sublabel: "Requires iPhone or iPad" },
  { value: "Free",    label: "No Cost",            sublabel: "No in-app purchases" },
];

const testimonials = [
  {
    quote: "Helped me commute on time everyday. Very useful.",
    name: "Obed1s",
    role: "Verified App Store Review",
    initials: "OB",
  },
];

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  return (
    <span className="tabular-nums">
      {target}
      {suffix}
    </span>
  );
}

export default function SocialProofSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(58,123,255,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-[#00D4FF] border border-[#00D4FF]/20 tracking-wide uppercase">
            Results
          </span>
        </FadeIn>

        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Numbers that{" "}
            <span className="gradient-text-blue">speak for themselves</span>
          </h2>
        </FadeIn>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(58,123,255,0.2)" }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 bg-[#0D1525] border border-white/[0.06] text-center"
              >
                <div className="text-4xl font-bold gradient-text-blue mb-1">
                  <CountUp target={s.value} />
                </div>
                <div className="text-sm font-semibold text-white/80 mb-1">{s.label}</div>
                <div className="text-xs text-white/35">{s.sublabel}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Testimonials — single verified App Store review */}
        <div className="flex justify-center">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 * i} className="w-full max-w-lg">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 bg-[#0D1525] border border-white/[0.06] flex flex-col h-full"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} viewBox="0 0 12 12" fill="#F59E0B" className="w-3.5 h-3.5" aria-hidden="true">
                      <path d="M6 1l1.3 2.9L10.5 4 8 6.5l.6 3.5L6 8.5 3.4 10l.6-3.5L1.5 4l3.2-.1L6 1z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#E6EAF2]/65 leading-relaxed flex-1 mb-5 italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3A7BFF] to-[#6E5CFF] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-[11px] text-white/40">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Trust bar */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="rounded-2xl p-6 bg-[#0A1220] border border-white/[0.05] flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
            {[
              {
                icon: "🔒",
                title: "Privacy-First Architecture",
                desc: "Data Not Collected \u00b7 Zero tracking \u00b7 Zero selling",
                badge: true,
              },
              {
                icon: "⚡",
                title: "Real-Time Processing",
                desc: "Live traffic, weather & transit feeds processed continuously",
              },
              {
                icon: "🎯",
                title: "ML-Powered",
                desc: "Personal departure model trained on your commute history",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    {item.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(16,185,129,0.12)", color: "#10B981", border: "0.5px solid rgba(16,185,129,0.3)" }}>
                        App Store Verified
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-white/40">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
