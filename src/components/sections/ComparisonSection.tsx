"use client";

import { motion } from "framer-motion";

export default function ComparisonSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-x-0 top-0 h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#3A7BFF]/50 to-transparent" />
        
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white font-geist-sans tracking-tight">
          Why Choose CommuteTimely
        </h2>
        <h3 className="text-lg text-white/50 font-light mb-16 text-center">
            Google Maps tells you the time after you leave. We tell you when to leave.
        </h3>
        
        <div className="w-full overflow-x-auto rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)" }}>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-white/40 font-mono text-xs uppercase tracking-widest font-normal">Feature</th>
                <th className="p-6 text-[#3A7BFF] font-mono text-sm uppercase tracking-widest font-bold bg-[#3A7BFF]/5 rounded-tr-lg">CommuteTimely</th>
                <th className="p-6 text-white/40 font-mono text-xs uppercase tracking-widest font-normal border-l border-white/5">Google Maps</th>
                <th className="p-6 text-white/40 font-mono text-xs uppercase tracking-widest font-normal border-l border-white/5">Waze</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {[
                { label: "Predicts when to leave", ct: true, gm: false, wz: false },
                { label: "Learns personal patterns", ct: true, gm: false, wz: false },
                { label: "Calendar-integrated alerts", ct: true, gm: false, wz: false },
                { label: "Focus on departure timing", ct: true, gm: false, wz: false },
                { label: "Multi-modal routing support", ct: true, gm: true, wz: false },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.04] transition-colors">
                  <td className="p-6 font-mono text-sm text-white/80">{row.label}</td>
                  <td className="p-6 bg-[#3A7BFF]/5 border-l border-white/5 text-center text-lg">{row.ct ? "✅" : "❌"}</td>
                  <td className="p-6 border-l border-white/5 text-center opacity-50 text-lg">{row.gm ? "✅" : "❌"}</td>
                  <td className="p-6 border-l border-white/5 text-center opacity-50 text-lg">{row.wz ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
