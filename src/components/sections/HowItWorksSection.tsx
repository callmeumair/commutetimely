"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Set your destination",
    desc: "Add your home, office, or any recurring destination. Set your required arrival time once.",
    color: "#3A7BFF",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v4l3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12h2M19 12h2M12 3v2M12 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "AI analyzes everything",
    desc: "Real-time traffic, weather, construction, events, and your historical commute patterns are processed.",
    color: "#6E5CFF",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Receive a smart alert",
    desc: "A precise departure notification arrives on your phone. Leave now, and you'll arrive exactly on time.",
    color: "#00D4FF",
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Arrive on time, stress-free",
    desc: "Walk into every meeting, class, and appointment relaxed — knowing you left at exactly the right moment.",
    color: "#00D4FF",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1220] pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,212,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-[#00D4FF] border border-[#00D4FF]/20 tracking-wide uppercase">
            How it works
          </span>
        </FadeIn>

        <FadeIn delay={0.1} className="text-center mb-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Four steps to{" "}
            <span className="gradient-text-blue">perfect timing</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} className="text-center mb-20">
          <p className="text-lg text-[#E6EAF2]/50 max-w-[480px] mx-auto">
            From setup to departure — CommuteTimely does the heavy lifting so you don't have to.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-[#3A7BFF]/20 via-[#6E5CFF]/30 to-[#00D4FF]/20" />
            {/* Animated dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.8)]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Number + icon */}
                  <div className="relative mb-6">
                    {/* Glow ring */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle, ${step.color}50, transparent 70%)` }}
                    />
                    {/* Icon circle */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                      className="relative w-20 h-20 rounded-full border-2 flex items-center justify-center"
                      style={{
                        borderColor: `${step.color}40`,
                        background: `radial-gradient(circle, ${step.color}12 0%, ${step.color}05 100%)`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                      {/* Step number badge */}
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ background: step.color }}
                      >
                        {parseInt(step.number)}
                      </div>
                    </motion.div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#E6EAF2]/45 leading-relaxed max-w-[220px]">{step.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <FadeIn delay={0.2} className="mt-20 text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#3A7BFF] to-[#00D4FF] hover:opacity-90 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-[0_0_30px_rgba(0,212,255,0.35)] hover:shadow-[0_0_44px_rgba(0,212,255,0.55)] active:scale-[0.97]"
          >
            Start your first commute
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
