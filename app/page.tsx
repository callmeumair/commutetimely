'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import DownloadCTASection from '@/components/DownloadCTASection'
import Footer from '@/components/Footer'
import TrustSection from '@/components/TrustSection'
import CommuteCalculator from '@/components/CommuteCalculator'
import { config } from '@/lib/config'
import SupportBot from '@/components/SupportBot'

export default function HomePage() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleChatClick = () => {
    // Open Google Form in a new tab
    window.open(config.GOOGLE_FORM_URL, '_blank')
  }

  return (
    <div className="min-h-screen bg-black relative scroll-snap-container">
      {/* Modern Premium Background System */}
      <div className="premium-bg"></div>
      <div className="premium-bg-overlay"></div>
      <div className="premium-glow"></div>
      
      {/* Enhanced Animated Radial Gradient Backgrounds */}
      <div className="animated-radial-bg"></div>
      <div className="subtle-pulse-bg"></div>
      
      {/* Enhanced floating blobs with subtle animations */}
      <div className="floating-blob-1"></div>
      <div className="floating-blob-2"></div>
      <div className="floating-blob-3"></div>
      
      {/* Floating clock icon */}
      <div className="floating-clock">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CommuteCalculator />
        <TestimonialsSection />
        <TrustSection />
        <FAQSection />
        <DownloadCTASection />
        <Footer />
      </div>

      {/* Floating chat bubble */}
      <motion.div 
        className="floating-chat" 
        onClick={handleChatClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Notify Me</span>
          <span className="text-lg">💬</span>
        </div>
      </motion.div>

      {/* Support Bot */}
      <SupportBot />
    </div>
  )
} 