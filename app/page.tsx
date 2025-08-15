"use client";

import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/HeroSection';
import { Features as FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorks } from '@/components/HowItWorksSection';
import AccordionDemoSection from '@/components/AccordionDemoSection';
import { Download } from '@/components/Download';
import { Footer } from '@/components/Footer';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { LazyLoad } from '@/components/PerformanceOptimizer';

export default function Home() {
  // Removed duplicate preload - already handled in layout.tsx

  return (
    <motion.div 
      className="min-h-screen bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects - Performance optimized */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Static background elements for better performance */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/5 sm:bg-blue-500/10 rounded-full blur-xl sm:blur-2xl" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/5 sm:bg-purple-500/10 rounded-full blur-xl sm:blur-2xl" />
        
        {/* Minimal animated elements - only on larger screens */}
        <motion.div
          className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <ScrollIndicator />
      <Header />
      
      <main>
        {/* Critical above-the-fold content */}
        <PerformanceOptimizer threshold={0.1}>
          <Hero />
        </PerformanceOptimizer>
        
        {/* Lazy load below-the-fold content */}
        <LazyLoad>
          <FeaturesSection />
        </LazyLoad>
        
        <LazyLoad>
          <HowItWorks />
        </LazyLoad>

        <LazyLoad>
          <AccordionDemoSection />
        </LazyLoad>
        
        <LazyLoad>
          <Download />
        </LazyLoad>
      </main>
      
      <Footer />
    </motion.div>
  );
}
