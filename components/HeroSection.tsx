'use client'

import { motion } from 'framer-motion'
import { config } from '../lib/config'
import { useEffect, useState } from 'react'
import AnimatedButton from './AnimatedButton'

const HeroSection = () => {
  const handleJoinWaitlist = () => {
    window.open(config.GOOGLE_FORM_URL, '_blank')
  }

  const handleLearnMore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animated counter for downloads
  const [downloads, setDownloads] = useState(0)
  useEffect(() => {
    let start = 0
    const end = 500
    if (downloads === end) return
    const increment = () => {
      start += Math.ceil((end - start) / 20)
      setDownloads(start > end ? end : start)
      if (start < end) setTimeout(increment, 24)
    }
    increment()
    // eslint-disable-next-line
  }, [])

  return (
    <motion.section 
      className="w-full min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 relative overflow-hidden hero-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero animated background shapes */}
      <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] bg-[#0f3d3e]/20 rounded-full blur-3xl z-0 animate-blob1 hero-bg-element" />
      <div className="absolute -bottom-32 -right-32 w-[30vw] h-[30vw] bg-[#FFC773]/15 rounded-full blur-2xl z-0 animate-blob2 hero-bg-element" />
      <div className="absolute inset-0 bg-gradient-radial from-[#FFC773]/10 via-transparent to-transparent z-0 pointer-events-none" />
      
      {/* Additional subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2EBFA5]/5 rounded-full blur-2xl z-0 hero-bg-element" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC773]/5 rounded-full blur-3xl z-0 hero-bg-element" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12 xl:space-y-16">
          
          {/* Main Headline */}
          <motion.div 
            className="space-y-4 sm:space-y-6 lg:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight max-w-5xl mx-auto hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Never Be Late
              <span className="block gradient-text mt-2 sm:mt-3 lg:mt-4">Again.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 leading-relaxed max-w-4xl mx-auto hero-subheadline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              One smart notification that tells you exactly when to leave. 
              <span className="block text-[#2EBFA5] font-semibold mt-2">
                Transform your daily commute with AI-powered timing.
              </span>
            </motion.p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <AnimatedButton 
              onClick={handleJoinWaitlist}
              variant="primary"
              size="lg"
              withSparkle={true}
              className="flex items-center justify-center space-x-3 w-full sm:w-auto touch-target text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 hero-cta-button"
              aria-label="Get started with CommuteTimely - Join waitlist for early access"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl">🚀</span>
              <span>Get Started</span>
            </AnimatedButton>
            
            <AnimatedButton 
              onClick={handleLearnMore}
              variant="outline"
              size="lg"
              className="flex items-center justify-center space-x-3 w-full sm:w-auto touch-target text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 hero-cta-button"
              aria-label="Learn more about CommuteTimely features and benefits"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl">ℹ️</span>
              <span>Learn More</span>
            </AnimatedButton>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center pt-8 sm:pt-10 lg:pt-12 hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <div className="text-center hero-stat-item">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2EBFA5]">{downloads}+</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-400">Downloads</div>
            </div>
            <div className="text-center hero-stat-item">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFC773]">4.9★</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-400">Rating</div>
            </div>
            <div className="text-center hero-stat-item">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">24/7</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-[var(--duration-normal)] cursor-pointer touch-target hero-scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        onClick={handleLearnMore}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleLearnMore()}
        aria-label="Scroll to features section to learn more"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-current rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-sm font-medium">Scroll to explore</span>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection 