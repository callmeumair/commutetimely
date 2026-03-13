"use client";

import { motion } from "framer-motion";
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
    return (
        <SiteLayout>
            <article className="pt-36 pb-28 px-6 min-h-screen">
                <div className="max-w-3xl mx-auto">
                    {/* Back to Blog */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...SPRING, delay: 0 }}
                        className="mb-10"
                    >
                        <Link
                            href="/blog"
                            className="text-white/40 hover:text-white/80 transition-colors text-sm flex items-center gap-2"
                        >
                            <span>←</span> Back to all articles
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...SPRING, delay: 0.1 }}
                        className="mb-12 border-b border-white/5 pb-10"
                    >
                        <span
                            className="text-[10px] font-mono uppercase tracking-widest mb-6 inline-block px-2.5 py-1 rounded-full"
                            style={{
                                color: tagColor,
                                background: `${tagColor}12`,
                                border: `0.5px solid ${tagColor}30`,
                            }}
                        >
                            {tag}
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        <div className="flex items-center gap-3 text-sm text-white/40">
                            <span className="text-white/70">{author}</span>
                            <span>·</span>
                            <span>{date}</span>
                            <span>·</span>
                            <span className="font-mono">{readTime}</span>
                        </div>
                    </motion.header>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...SPRING, delay: 0.2 }}
                        className="prose prose-invert prose-blue max-w-none 
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-headings:text-white prose-headings:font-semibold prose-headings:mt-12 prose-headings:mb-6
              prose-h2:text-2xl prose-h3:text-xl
              prose-a:text-[#3A7BFF] prose-a:no-underline hover:prose-a:underline
              prose-li:text-white/70 prose-ul:mb-6 prose-ol:mb-6"
                    >
                        {children}
                    </motion.div>
                </div>
            </article>
        </SiteLayout>
    );
}
