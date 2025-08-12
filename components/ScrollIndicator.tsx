"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 origin-left z-50"
        style={{ scaleX }}
        animate={{
          boxShadow: [
            "0 0 10px rgba(37, 99, 235, 0.5)",
            "0 0 20px rgba(6, 182, 212, 0.7)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/50 via-cyan-300/50 to-purple-400/50 origin-left z-40 blur-sm"
        style={{ scaleX }}
      />
    </>
  );
}
