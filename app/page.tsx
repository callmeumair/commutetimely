"use client";

import { useEffect } from 'react';
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
  useEffect(() => {
    // Performance optimization: preload critical resources
    if (typeof window !== 'undefined') {
      // Preload critical images
      const criticalImages = [
        '/images/IMG_750E9EF883FD-1.jpeg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preconnect to external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];
      
      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
      });
    }
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects - Optimized for performance */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Optimized background animations */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/5 sm:bg-blue-500/10 rounded-full blur-xl sm:blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/5 sm:bg-purple-500/10 rounded-full blur-xl sm:blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Cyber Lines - Hidden on small screens for performance */}
        <motion.div
          className="hidden sm:block absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            x: ['-100%', '0%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="hidden sm:block absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            x: ['100%', '0%', '-100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
