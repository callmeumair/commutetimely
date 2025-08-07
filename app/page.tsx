'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import { config } from '@/lib/config'

// Dynamically import non-critical components
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="h-screen bg-black" />
})

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="h-screen bg-black" />
})

const DownloadCTASection = dynamic(() => import('@/components/DownloadCTASection'), {
  loading: () => <div className="h-screen bg-black" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 bg-black" />
})

const TrustSection = dynamic(() => import('@/components/TrustSection'), {
  loading: () => <div className="h-screen bg-black" />
})

const CommuteCalculator = dynamic(() => import('@/components/CommuteCalculator'), {
  loading: () => <div className="h-screen bg-black" />
})

const SupportBot = dynamic(() => import('@/components/SupportBot'), {
  ssr: false,
  loading: () => null
})

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
    <div className="min-h-screen bg-black relative">
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
      <div className="floating-clock" aria-hidden="true">
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
      <motion.button 
        className="floating-chat focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black" 
        onClick={handleChatClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Join waitlist for early access"
      >
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Notify Me</span>
          <span className="text-lg" aria-hidden="true">💬</span>
        </div>
      </motion.button>

      {/* Support Bot */}
      <SupportBot />
    </div>
  )
} 