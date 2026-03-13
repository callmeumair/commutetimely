"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SiteLayout from "@/components/SiteLayout";

const SPRING = { type: "spring" as const, stiffness: 80, damping: 18 };

const FEATURED = {
  slug: "early-commuters-arrival-intelligence",
  tag: "Product Update",
  tagColor: "#3A7BFF",
  title: "Why we built CommuteTimely: the problem with \'just leave earlier\'",
  excerpt:
    "Every commuter has received the same advice: leave earlier to be safe. We think that's a failure of tooling, not a personal problem. CommuteTimely was built to give you a precise departure time instead of a vague buffer.",
  author: "CommuteTimely Team",
  date: "March 2026",
  readTime: "5 min read",
  stats: [
    { value: "5.0★", label: "App Store rating" },
    { value: "iOS 17+",  label: "Minimum requirement" },
    { value: "Free",   label: "No in-app purchases" },
  ],
};

const ARTICLES = [
  {
    tag: "Engineering",
    tagColor: "#6E5CFF",
    title: "How we fuse live traffic, transit, and weather into a single departure signal",
    excerpt: "A walkthrough of the data pipeline behind CommuteTimely: ingesting multiple real-time feeds and distilling them into one precise push notification.",
    author: "CommuteTimely Team",
    date: "Feb 2026",
    readTime: "10 min",
  },
  {
    tag: "Product",
    tagColor: "#10B981",
    title: "The invisible UI principle: why CommuteTimely has zero manual inputs",
    excerpt: "Great commute tools should feel like they read your mind. We explain the design philosophy behind our zero-friction prediction engine.",
    author: "CommuteTimely Team",
    date: "Jan 2026",
    readTime: "6 min",
  },
  {
    tag: "Insight",
    tagColor: "#F59E0B",
    title: "Why historical commute patterns matter as much as live traffic",
    excerpt:
      "The biggest predictor of your travel time often isn't today's traffic \u2014 it's what happened on the same route, same day, same time, in previous weeks. Here's why.",
    author: "CommuteTimely Team",
    date: "Dec 2025",
    readTime: "7 min",
  },
  {
    tag: "Privacy",
    tagColor: "#3A7BFF",
    title: "Privacy-First by design: what \"Data Not Collected\" actually means",
    excerpt: "Our App Store listing says \"Data Not Collected.\" Here's exactly what that means technically, and why we chose this architecture from day one.",
    author: "CommuteTimely Team",
    date: "Nov 2025",
    readTime: "6 min",
  },
  {
    tag: "Engineering",
    tagColor: "#6E5CFF",
    title: "Building a real-time commute engine: lessons from early development",
    excerpt: "What we learned scaling our real-time processing pipeline during private beta — and the infrastructure decisions we'd make again.",
    author: "CommuteTimely Team",
    date: "Oct 2025",
    readTime: "10 min",
  },
  {
    tag: "Culture",
    tagColor: "#00D4FF",
    title: "The commute is not dead: why hybrid work made arrival intelligence more important",
    excerpt: "Remote work didn't kill commuting \u2014 it made it spikey, high-stakes, and harder to predict. Here's the case for smarter departure timing.",
    author: "CommuteTimely Team",
    date: "Sep 2025",
    readTime: "5 min",
  },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...SPRING, delay }}>
      {children}
    </motion.div>
  );
}

function ArticleCard({ article, delay = 0 }: { article: typeof ARTICLES[0]; delay?: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      className="relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `0.5px solid ${hovered ? article.tagColor + "40" : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered ? `0 0 32px ${article.tagColor}18, 0 8px 32px rgba(0,0,0,0.4)` : "none",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...SPRING, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
    >
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-mono uppercase tracking-widest mb-3 self-start px-2 py-0.5 rounded-full"
          style={{ color: article.tagColor, background: `${article.tagColor}12`, border: `0.5px solid ${article.tagColor}30` }}>
          {article.tag}
        </span>
        <h3 className="text-[15px] font-semibold text-white leading-snug mb-3 flex-1">{article.title}</h3>
        <p className="text-sm text-white/35 leading-relaxed mb-5">{article.excerpt}</p>
        <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 mt-auto">
          <span className="text-[11px] text-white/30">{article.author}</span>
          <span className="text-[11px] font-mono text-white/20">{article.date} · {article.readTime}</span>
        </div>
      </div>

      {/* Blue glow bottom accent on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${article.tagColor}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(58,123,255,0.1) 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-4">
            <div className="tag-badge self-start inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3A7BFF]" />
              Reclaimed Time · Research & Engineering
            </div>
          </FadeUp>
          <FadeUp delay={0.07}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-4">
              From the <span className="gradient-text-blue">CommuteTimely</span> team
            </h1>
          </FadeUp>
          <FadeUp delay={0.13}>
            <p className="text-lg text-white/40 max-w-xl">
              Case studies, engineering deep-dives, and data-driven essays on the future of urban mobility.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <FadeUp>
          <motion.article
            className="relative rounded-2xl overflow-hidden"
            style={{ background: "rgba(58,123,255,0.04)", border: "0.5px solid rgba(58,123,255,0.2)" }}
            whileHover={{ boxShadow: "0 0 60px rgba(58,123,255,0.12), 0 16px 48px rgba(0,0,0,0.5)", y: -2 }}
            transition={SPRING}
          >
            <div className="p-8 sm:p-10 grid sm:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest mb-4 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                  style={{ color: "#3A7BFF", background: "rgba(58,123,255,0.1)", border: "0.5px solid rgba(58,123,255,0.3)" }}>
                  ★ Featured · {FEATURED.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug max-w-2xl">{FEATURED.title}</h2>
                <p className="text-white/45 leading-relaxed mb-6 max-w-xl">{FEATURED.excerpt}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs text-white/30">{FEATURED.author} · {FEATURED.date}</span>
                  <span className="text-xs font-mono text-white/20">{FEATURED.readTime}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-4 min-w-[140px]">
                {FEATURED.stats.map((s) => (
                  <div key={s.label} className="rounded-xl p-4 text-center"
                    style={{ background: "rgba(58,123,255,0.06)", border: "0.5px solid rgba(58,123,255,0.15)" }}>
                    <div className="text-2xl font-bold text-[#3A7BFF]">{s.value}</div>
                    <div className="text-[9px] font-mono text-white/30 uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </FadeUp>
      </section>

      {/* Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <FadeUp className="mb-8">
          <h2 className="text-xl font-semibold text-white/60">All articles</h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ARTICLES.map((article, i) => (
            <ArticleCard key={article.title} article={article} delay={i * 0.06} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
