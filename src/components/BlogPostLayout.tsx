"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";

const SPRING = { type: "spring" as const, stiffness: 80, damping: 18 };

export default function BlogPostLayout({
    title,
    tag,
    tagColor,
    author,
    date,
    readTime,
    children,
}: {
    title: string;
    tag: string;
    tagColor: string;
    author: string;
    date: string;
    readTime: string;
    children: React.ReactNode;
}) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <SiteLayout>
            {/* Reading Progress Bar (Mobile) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left lg:hidden"
                style={{ scaleX, backgroundColor: tagColor, boxShadow: `0 0 10px ${tagColor}80` }}
            />

            {/* Dynamic Header Glow */}
            <div
                className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none opacity-[0.15] dark:opacity-[0.12] -z-10 mix-blend-screen"
                style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${tagColor}, transparent 80%)`
                }}
            />

            <article className="pt-36 pb-28 px-6 min-h-screen selection:bg-[#3A7BFF]/30 selection:text-white relative z-10">
                <div className="max-w-3xl mx-auto relative">

                    {/* Floating Side Bar (Desktop) */}
                    <motion.div
                        className="hidden lg:flex flex-col items-center gap-6 absolute top-32 -left-24 xl:-left-32 sticky-container h-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <div className="sticky top-40 flex flex-col items-center gap-6">
                            {/* Side Progress Circle */}
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="46" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                                    <motion.circle
                                        cx="50" cy="50" r="46" fill="transparent" stroke={tagColor} strokeWidth="8"
                                        strokeLinecap="round" strokeDasharray="289" style={{ pathLength: scrollYProgress }}
                                    />
                                </svg>
                            </div>

                            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />

                            <button className="w-10 h-10 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs flex items-center justify-center group">
                                <span className="group-hover:scale-110 transition-transform">X</span>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs flex items-center justify-center group font-serif italic">
                                <span className="group-hover:scale-110 transition-transform">in</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Back to Blog */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...SPRING, delay: 0 }}
                        className="mb-10"
                    >
                        <Link
                            href="/blog"
                            className="text-white/40 hover:text-white/80 transition-colors text-sm flex items-center gap-2 w-fit relative group"
                        >
                            <span className="transform transition-transform group-hover:-translate-x-1">←</span>
                            <span>Back to all articles</span>
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...SPRING, delay: 0.1 }}
                        className="mb-16 border-b border-white/5 pb-10"
                    >
                        <span
                            className="text-[10px] font-mono uppercase tracking-widest mb-6 inline-block px-3 py-1.5 rounded-full backdrop-blur-md"
                            style={{
                                color: tagColor,
                                background: `${tagColor}15`,
                                border: `0.5px solid ${tagColor}30`,
                                boxShadow: `0 0 20px ${tagColor}20`,
                            }}
                        >
                            {tag}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-8 leading-tight tracking-tight">
                            {title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-white/40">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3A7BFF] to-[#00D4FF] p-[1px]">
                                    <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center text-[10px] font-bold text-white">
                                        CT
                                    </div>
                                </div>
                                <span className="text-white/80 font-medium">{author}</span>
                            </div>
                            <span>·</span>
                            <span>{date}</span>
                            <span>·</span>
                            <span className="font-mono flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                {readTime}
                            </span>
                        </div>
                    </motion.header>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...SPRING, delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none 
                            prose-p:text-white/70 prose-p:leading-[1.85] prose-p:mb-8 prose-p:text-[19px] sm:prose-p:text-[21px]
                            prose-headings:text-white/95 prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-16 prose-headings:mb-6
                            prose-h2:text-3xl sm:prose-h2:text-4xl 
                            prose-h3:text-2xl 
                            prose-a:text-[#3A7BFF] prose-a:no-underline hover:prose-a:underline
                            prose-li:text-white/70 prose-li:text-[19px] sm:prose-li:text-[21px] prose-li:leading-[1.85] prose-ul:mb-8 prose-ol:mb-8
                            prose-strong:text-white/90 prose-strong:font-semibold
                            prose-hr:my-16 prose-hr:border-white/10
                            prose-blockquote:border-l-4 prose-blockquote:border-l-[#3A7BFF] prose-blockquote:bg-white/5 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-white/80 prose-blockquote:my-10"
                    >
                        {children}
                    </motion.div>

                    {/* Share & End Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6"
                    >
                        <div className="flex items-center gap-4 lg:hidden">
                            <span className="text-white/40 text-sm">Share this article</span>
                            <div className="flex gap-3">
                                {['Twitter', 'LinkedIn'].map((network) => (
                                    <button
                                        key={network}
                                        className="h-10 px-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-sm flex items-center gap-2"
                                    >
                                        {network}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Link
                            href="/blog"
                            className="h-10 px-6 rounded-full bg-[#3A7BFF]/10 text-[#3A7BFF] flex items-center justify-center text-sm font-medium hover:bg-[#3A7BFF]/20 transition-colors w-full sm:w-auto"
                        >
                            Read more articles
                        </Link>
                    </motion.div>
                </div>
            </article>
        </SiteLayout>
    );
}
