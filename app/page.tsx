'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import { config } from '@/lib/config'

import LoadingPlaceholder from '@/components/LoadingPlaceholder'

// Dynamically import non-critical components
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => (
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <LoadingPlaceholder height="h-8" width="w-64" className="mx-auto mb-4" />
          <LoadingPlaceholder height="h-4" width="w-96" className="mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass p-6 rounded-xl">
              <LoadingPlaceholder height="h-4" width="w-3/4" className="mb-4" />
              <LoadingPlaceholder height="h-3" width="w-full" className="mb-2" />
              <LoadingPlaceholder height="h-3" width="w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => (
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <LoadingPlaceholder height="h-8" width="w-48" className="mx-auto mb-4" />
          <LoadingPlaceholder height="h-4" width="w-80" className="mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass p-6 rounded-xl">
              <LoadingPlaceholder height="h-5" width="w-3/4" className="mb-3" />
              <LoadingPlaceholder height="h-3" width="w-full" className="mb-2" />
              <LoadingPlaceholder height="h-3" width="w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

const DownloadCTASection = dynamic(() => import('@/components/DownloadCTASection'), {
  loading: () => (
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <LoadingPlaceholder height="h-8" width="w-72" className="mx-auto mb-4" />
          <LoadingPlaceholder height="h-4" width="w-96" className="mx-auto" />
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <LoadingPlaceholder height="h-12" width="w-48" />
          <LoadingPlaceholder height="h-12" width="w-48" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass p-6 rounded-xl text-center">
              <LoadingPlaceholder height="h-16" width="w-16" className="mx-auto mb-4 rounded-full" />
              <LoadingPlaceholder height="h-5" width="w-3/4" className="mx-auto mb-2" />
              <LoadingPlaceholder height="h-3" width="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => (
    <footer className="fullscreen-section bg-black border-t border-gray-800">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="sm:col-span-2">
            <LoadingPlaceholder height="h-8" width="w-48" className="mb-4" />
            <LoadingPlaceholder height="h-4" width="w-64" className="mb-6" />
            <div className="flex space-x-4">
              {[...Array(3)].map((_, i) => (
                <LoadingPlaceholder key={i} height="h-10" width="w-10" className="rounded-full" />
              ))}
            </div>
          </div>
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <LoadingPlaceholder height="h-5" width="w-24" className="mb-4" />
              <div className="space-y-3">
                {[...Array(4)].map((_, j) => (
                  <LoadingPlaceholder key={j} height="h-4" width="w-20" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
})

const TrustSection = dynamic(() => import('@/components/TrustSection'), {
  loading: () => (
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <LoadingPlaceholder height="h-8" width="w-56" className="mx-auto mb-4" />
          <LoadingPlaceholder height="h-4" width="w-80" className="mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="text-center">
              <LoadingPlaceholder height="h-12" width="w-12" className="mx-auto mb-3 rounded-full" />
              <LoadingPlaceholder height="h-4" width="w-20" className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

const CommuteCalculator = dynamic(() => import('@/components/CommuteCalculator'), {
  loading: () => (
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <LoadingPlaceholder height="h-8" width="w-64" className="mx-auto mb-4" />
          <LoadingPlaceholder height="h-4" width="w-96" className="mx-auto" />
        </div>
        <div className="max-w-2xl mx-auto glass p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <LoadingPlaceholder height="h-4" width="w-24" className="mb-2" />
                <LoadingPlaceholder height="h-10" width="w-full" />
              </div>
            ))}
          </div>
          <LoadingPlaceholder height="h-12" width="w-48" className="mx-auto" />
        </div>
      </div>
    </section>
  )
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