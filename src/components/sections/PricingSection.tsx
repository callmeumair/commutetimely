"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const SPRING       = { type: "spring" as const, stiffness: 120, damping: 20 };
const HEAVY_SPRING = { type: "spring" as const, mass: 1, stiffness: 80, damping: 15 };

/* ── Animated conic-gradient border for Executive card ── */
function ExecutiveConicBorder() {
  const [angle, setAngle] = useState(0);
  const rafRef = useRef<number>(0);
  const lastRef = useRef(0);

  useEffect(() => {
    const loop = (t: number) => {
      if (t - lastRef.current > 14) {
        setAngle(a => (a + 1.4) % 360);
        lastRef.current = t;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="absolute pointer-events-none z-0"
      style={{
        inset: "-1.5px",
        borderRadius: "18px",
        background: `conic-gradient(from ${angle}deg, rgba(110,92,255,0.9), rgba(58,123,255,0.85), rgba(0,212,255,0.7), rgba(110,92,255,0.9))`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1.5px",
      } as React.CSSProperties}
    />
  );
}

const TIERS = [
  {
    id: "commuter",
    name: "Commuter",
    tagline: "Start your precision journey",
    priceMonthly: 0,
    priceAnnual: 0,
    color: "#E2E8F0",
    borderColor: "rgba(255,255,255,0.06)",
    glowColor: "rgba(255,255,255,0.04)",
    featured: false,
    features: [
      { text: "5 departure predictions / day",         included: true  },
      { text: "Basic traffic layer",                    included: true  },
      { text: "iPhone & iPad app (iOS Exclusive)",        included: true  },
      { text: "Calendar sync (Google)",                 included: false },
      { text: "Pattern learning engine",                included: false },
      { text: "Multi-modal routing",                    included: false },
      { text: "Priority support",                       included: false },
    ],
    cta: "Get Started Free",
    ctaStyle: {
      background: "rgba(255,255,255,0.06)",
      border: "0.5px solid rgba(255,255,255,0.1)",
      color: "rgba(255,255,255,0.7)",
    },
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "The complete Arrival Intelligence stack",
    priceMonthly: 9,
    priceAnnual: 7,
    color: "#3A7BFF",
    borderColor: "rgba(58,123,255,0.25)",
    glowColor: "rgba(58,123,255,0.1)",
    badge: "Most Popular",
    featured: false,
    features: [
      { text: "Unlimited departure predictions",        included: true  },
      { text: "Live multi-layer traffic fusion",        included: true  },
      { text: "Calendar sync (Google + Outlook)",       included: true  },
      { text: "30-day pattern learning engine",         included: true  },
      { text: "Multi-modal routing (Drive + Transit)",  included: true  },
      { text: "Apple Watch + Siri integration",         included: true  },
      { text: "Priority support (24h response)",        included: false },
    ],
    cta: "Start 14-Day Free Trial",
    ctaStyle: {
      background: "linear-gradient(135deg,#3A7BFF,#6E5CFF)",
      boxShadow: "0 0 24px rgba(58,123,255,0.35)",
      color: "#fff",
    },
  },
  {
    id: "executive",
    name: "Executive",
    tagline: "For high-stakes commutes. Zero tolerance for late.",
    priceMonthly: 29,
    priceAnnual: 22,
    color: "#6E5CFF",
    borderColor: "rgba(110,92,255,0.4)",
    glowColor: "rgba(110,92,255,0.15)",
    featured: true,
    badge: "Executive Tier",
    features: [
      { text: "Everything in Pro",                      included: true  },
      { text: "Sub-2min re-routing on incidents",       included: true  },
      { text: "Calendar AI scheduling assistant",       included: true  },
      { text: "Team dashboard (up to 10 members)",      included: true  },
      { text: "API access + webhook notifications",     included: true  },
      { text: "Dedicated success manager",              included: true  },
      { text: "White-glove onboarding + SLA",           included: true  },
    ],
    cta: "Schedule a Demo",
    ctaStyle: {
      background: "linear-gradient(135deg,#6E5CFF,#3A7BFF)",
      boxShadow: "0 0 32px rgba(110,92,255,0.4)",
      color: "#fff",
    },
  },
];

function CheckIcon({ filled }: { filled: boolean }) {
  if (!filled) return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-20">
      <circle cx={8} cy={8} r={6} stroke="white" strokeWidth={1} />
      <path d="M5 8h6" stroke="white" strokeWidth={1} strokeLinecap="round" />
    </svg>
  );
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx={8} cy={8} r={6} fill="rgba(58,123,255,0.15)" stroke="rgba(58,123,255,0.5)" strokeWidth={1} />
      <path d="M5.5 8l2 2 3-3" stroke="#3A7BFF" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="relative py-28 px-6 overflow-hidden" style={{ background: "#020617" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(110,92,255,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 32, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={HEAVY_SPRING}
        >
          <div className="tag-badge mb-5">Precision Pricing</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Invest in <span className="gradient-text-violet">never being late</span> again.
          </h2>
          <p className="text-white/40 text-base max-w-md mb-6">
            Transparent tiers. Cancel anytime. Every plan backed by our 30-day Precision Guarantee.
          </p>

          {/* Toggle */}
          <div
            className="flex items-center gap-3 p-1.5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)" }}
          >
            {["Monthly", "Annual"].map((label) => {
              const isSelected = (label === "Annual") === annual;
              return (
                <motion.button
                  key={label}
                  onClick={() => setAnnual(label === "Annual")}
                  className="relative px-5 py-2 rounded-xl text-sm font-medium"
                  style={{ color: isSelected ? "#fff" : "rgba(255,255,255,0.3)" }}
                  transition={SPRING}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="pricing-toggle"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.1)" }}
                      transition={SPRING}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                  {label === "Annual" && (
                    <span className="relative z-10 ml-1.5 text-[9px] font-mono px-1.5 py-0.5 rounded-full"
                      style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>
                      −22%
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: tier.featured
                  ? "linear-gradient(160deg, rgba(110,92,255,0.12) 0%, rgba(58,123,255,0.06) 100%)"
                  : "rgba(255,255,255,0.025)",
                border: tier.featured ? "none" : `0.5px solid ${tier.borderColor}`,
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                boxShadow: tier.featured
                  ? "0 0 80px rgba(110,92,255,0.2), 0 20px 60px rgba(0,0,0,0.4)"
                  : "none",
              }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ ...HEAVY_SPRING, delay: 0.12 * i }}
              whileHover={{ scale: 1.015, y: -5 }}
            >
              {/* Animated conic border — Executive only */}
              {tier.featured && <ExecutiveConicBorder />}

              {/* Noise texture overlay for glass depth */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                  opacity: 0.018, mixBlendMode: "overlay",
                }}
              />

              {/* Glow strip at top for featured */}
              {tier.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 z-10"
                  style={{ background: "linear-gradient(90deg, transparent, #6E5CFF, #3A7BFF, transparent)" }}
                />
              )}

              <div className="relative z-10 p-7 flex flex-col flex-1 gap-6">
                {/* Header */}
                <div className="flex flex-col gap-2">
                  {tier.badge && (
                    <span
                      className="self-start text-[9px] font-mono px-2.5 py-1 rounded-full uppercase tracking-widest"
                      style={{
                        background: tier.featured ? "rgba(110,92,255,0.15)" : "rgba(58,123,255,0.1)",
                        color: tier.featured ? "#6E5CFF" : "#3A7BFF",
                        border: `0.5px solid ${tier.featured ? "rgba(110,92,255,0.3)" : "rgba(58,123,255,0.25)"}`,
                      }}
                    >
                      {tier.badge}
                    </span>
                  )}
                  {/* White-Glove Service badge — Executive only */}
                  {tier.featured && (
                    <div className="flex items-center gap-1.5 self-start">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1l1.15 2.33L9.8 3.83l-1.9 1.85.45 2.62L6 7.02 3.65 8.3l.45-2.62L2.2 3.83l2.65-.5L6 1z"
                          fill="#F5D060" stroke="#B8860B" strokeWidth="0.5" />
                      </svg>
                      <span className="text-[10px] font-mono tracking-wider badge-gold-shimmer font-semibold">
                        White-Glove Concierge Service
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-white/35 leading-relaxed">{tier.tagline}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? "annual" : "monthly"}
                      className="data-mono text-4xl font-black text-white"
                      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      transition={SPRING}
                    >
                      {tier.priceAnnual === 0 && tier.priceMonthly === 0
                        ? "Free"
                        : `$${annual ? tier.priceAnnual : tier.priceMonthly}`}
                    </motion.span>
                  </AnimatePresence>
                  {(tier.priceMonthly > 0) && (
                    <span className="text-white/30 text-sm font-mono">/month</span>
                  )}
                </div>
                {annual && tier.priceAnnual > 0 && (
                  <p className="text-[10px] font-mono text-white/25 -mt-4">
                    Billed annually · ${tier.priceAnnual * 12}/yr
                  </p>
                )}

                {/* CTA */}
                <motion.button
                  className="w-full py-3 rounded-xl text-sm font-semibold"
                  style={tier.ctaStyle}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={SPRING}
                >
                  {tier.cta}
                </motion.button>

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feat) => (
                    <li key={feat.text} className="flex items-start gap-2.5">
                      <CheckIcon filled={feat.included} />
                      <span
                        className="text-xs leading-relaxed"
                        style={{ color: feat.included ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)" }}
                      >
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 30-day Precision Guarantee */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 p-6 rounded-2xl glass-heavy"
          style={{ border: "0.5px solid rgba(16,185,129,0.15)" }}
          initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ ...HEAVY_SPRING, delay: 0.45 }}
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(16,185,129,0.1)", border: "0.5px solid rgba(16,185,129,0.25)" }}>
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
              <path d="M11 2L3 6v5c0 4.55 3.4 8.74 8 9.93C16.6 19.74 20 15.55 20 11V6L11 2z"
                stroke="#10B981" strokeWidth={1.4} fill="rgba(16,185,129,0.1)" />
              <path d="M7.5 11l2.5 2.5 5-5" stroke="#10B981" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">30-Day Precision Guarantee</p>
            <p className="text-xs text-white/35 mt-1 max-w-md">
              If CommuteTimely doesn't save you time in 30 days, we'll refund your subscription in full.
              No questions. No forms. One email.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end shrink-0 gap-1">
            <span className="data-mono text-2xl font-bold gradient-text-emerald">100%</span>
            <span className="text-[10px] font-mono text-white/25 uppercase tracking-wider">Money Back</span>
          </div>
        </motion.div>

        {/* Enterprise note */}
        <motion.p
          className="text-center text-xs text-white/25 mt-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          Need volume licensing or a custom SLA?{" "}
          <span className="text-[#3A7BFF] cursor-pointer hover:text-[#00D4FF] transition-colors">
            Contact our enterprise team →
          </span>
        </motion.p>
      </div>
    </section>
  );
}
