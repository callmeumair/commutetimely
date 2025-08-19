"use client";

import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Hero } from '@/components/HeroSection';
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection').then(m => m.Features), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/HowItWorksSection').then(m => m.HowItWorks), { ssr: false });
const AccordionDemoSection = dynamic(() => import('@/components/AccordionDemoSection'), { ssr: false });
const Download = dynamic(() => import('@/components/Download').then(m => m.Download), { ssr: false });
import { Footer } from '@/components/Footer';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { LazyLoad } from '@/components/PerformanceOptimizer';
import { UniqueAdvantagesSection } from '@/components/UniqueAdvantagesSection';

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" as const }}
    >
      {/* Premium Background Effects - Enhanced Performance & Visual Appeal */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Enhanced static background elements for better performance */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/4 sm:bg-blue-500/6 rounded-full blur-3xl sm:blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 sm:w-64 sm:h-64 bg-purple-500/4 sm:bg-purple-500/6 rounded-full blur-3xl sm:blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-500/4 sm:bg-cyan-500/6 rounded-full blur-2xl sm:blur-[80px]" />
        
        {/* Premium animated elements - only on larger screens for performance */}
        <motion.div
          className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        
        <motion.div
          className="hidden lg:block absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 5
          }}
        />
        
        {/* Premium floating particles for enhanced visual appeal */}
        <motion.div
          className="hidden sm:block absolute top-1/6 right-1/6 w-2 h-2 bg-blue-400/60 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -30, 0],
            x: [0, 15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="hidden sm:block absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-purple-400/60 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -25, 0],
            x: [0, -12, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-1/3 left-1/2 w-1 h-1 bg-cyan-400/60 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -20, 0],
            x: [0, 8, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 4 }}
        />
      </div>

      {/* Enhanced Scroll Indicator with Premium Styling */}
      <ScrollIndicator />
      
      {/* Premium Header with Enhanced Navigation */}
      <Header />
      
      <main className="relative z-10">
        {/* Critical above-the-fold content with Premium Performance */}
        <PerformanceOptimizer threshold={0.05}>
          <Hero />
        </PerformanceOptimizer>
        
        {/* Enhanced Lazy Loading with Premium Spacing & Animations */}
        <LazyLoad>
          <motion.div 
            className="section-padding cv-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeaturesSection />
          </motion.div>
        </LazyLoad>
        
        <LazyLoad>
          <motion.div 
            className="section-padding cv-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <HowItWorks />
          </motion.div>
        </LazyLoad>

        <LazyLoad>
          <motion.div 
            className="section-padding cv-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <UniqueAdvantagesSection />
          </motion.div>
        </LazyLoad>

        <LazyLoad>
          <motion.div 
            className="section-padding cv-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AccordionDemoSection />
        </motion.div>
        </LazyLoad>
        
        <LazyLoad>
          <motion.div 
            className="section-padding cv-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Download />
          </motion.div>
        </LazyLoad>
      </main>
      
      {/* Premium Footer with Enhanced Styling */}
      <Footer />
      
      {/* Enhanced Performance Monitoring */}
      <div className="hidden">
        <PerformanceOptimizer threshold={0.01}>
          <div />
        </PerformanceOptimizer>
      </div>
    </motion.div>
  );
}
