"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/faq-data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 overflow-hidden max-w-3xl mx-auto" id="faq">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white font-geist-sans tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4 relative z-10 block w-full">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-white/10 rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}>
            <button
              className="w-full text-left p-6 font-geist-sans text-base sm:text-lg text-white/90 focus:outline-none flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium pr-4">{faq.q}</span>
              <span className="text-[#3A7BFF] text-xl bg-[#3A7BFF]/10 w-8 h-8 flex items-center justify-center rounded-full shrink-0">
                  {openIndex === i ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-white/60 text-base leading-relaxed"
                >
                  <p className="pt-2 border-t border-white/10">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
