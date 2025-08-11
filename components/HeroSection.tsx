'use client'

import { motion } from 'framer-motion'
import { Clock, Smartphone, Download } from 'lucide-react'
import { config } from '../lib/config'
import { useEffect, useState } from 'react'
import phoneAnimation from '../public/lottie/phone-screen.json'
import AnimatedButton from './AnimatedButton'
import MobilePreview from './MobilePreview'

const HeroSection = () => {
  const handleJoinWaitlist = () => {
    window.open(config.GOOGLE_FORM_URL, '_blank')
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
      className="w-full min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero animated background shapes - hidden on mobile for performance */}
      <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] bg-[#0f3d3e]/20 rounded-full blur-3xl z-0 animate-blob1 hidden md:block" />
      <div className="absolute -bottom-32 -right-32 w-[30vw] h-[30vw] bg-[#FFC773]/15 rounded-full blur-2xl z-0 animate-blob2 hidden md:block" />
      <div className="absolute inset-0 bg-gradient-radial from-[#FFC773]/10 via-transparent to-transparent z-0 pointer-events-none hidden md:block" />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left side - Content */}
          <motion.div 
            className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8">
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Never Be Late
                <span className="block gradient-text">Again.</span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                One smart notification that tells you exactly when to leave.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedButton 
                onClick={handleJoinWaitlist}
                variant="primary"
                size="lg"
                withSparkle={true}
                className="flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto touch-target text-sm sm:text-base lg:text-lg"
                aria-label="Join waitlist for early access to CommuteTimely"
              >
                <span className="text-lg sm:text-xl lg:text-2xl">🚀</span>
                <span>Join Waitlist</span>
              </AnimatedButton>
              <AnimatedButton 
                onClick={handleJoinWaitlist}
                variant="outline"
                size="lg"
                className="flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto touch-target text-sm sm:text-base lg:text-lg"
                aria-label="Learn more about CommuteTimely features"
              >
                <span className="text-lg sm:text-xl lg:text-2xl">ℹ️</span>
                <span>Learn More</span>
              </AnimatedButton>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start pt-4 sm:pt-6 lg:pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2EBFA5]">{downloads}+</div>
                <div className="text-sm sm:text-base text-gray-400">Downloads</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFC773]">4.9★</div>
                <div className="text-sm sm:text-base text-gray-400">Rating</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm sm:text-base text-gray-400">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Phone Mockup */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative group max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] 2xl:max-w-[480px] w-full mx-auto lg:mx-0 mobile-preview-container"
              whileHover={{ scale: 1.05, rotateY: 5, y: -10, boxShadow: '0 0 24px #2EBFA5' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Phone frame - Responsive sizing with aspect ratio */}
              <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-[#23272f] to-[#181c22] rounded-[2.5rem] sm:rounded-[2.75rem] md:rounded-[3rem] lg:rounded-[3.25rem] xl:rounded-[3.5rem] shadow-2xl border border-[#2EBFA5]/20 hover:border-[#2EBFA5] transition-all duration-[var(--duration-slow)] ease-in-out phone-mockup-responsive">
                {/* Screen */}
                <div className="absolute inset-[0.5rem] sm:inset-[0.75rem] md:inset-[1rem] lg:inset-[1.25rem] xl:inset-[1.5rem] bg-black rounded-[2rem] sm:rounded-[2.25rem] md:rounded-[2.5rem] lg:rounded-[2.75rem] xl:rounded-[3rem] overflow-hidden flex items-center justify-center hover:bg-[#2EBFA5]/20 transition-colors touch-target">
                  <motion.div
                    whileHover={{ boxShadow: '0 0 12px #2EBFA5', scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <MobilePreview 
                      animationData={phoneAnimation}
                      fallbackType="auto"
                      className="w-full h-full"
                    />
                  </motion.div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-[1rem] sm:bottom-[1.25rem] md:bottom-[1.5rem] lg:bottom-[1.75rem] xl:bottom-[2rem] left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-1 bg-white rounded-full opacity-60" />
              </div>

              {/* Floating elements - Responsive positioning and sizing */}
              <motion.div 
                className="absolute -top-2 sm:-top-3 md:-top-4 lg:-top-5 xl:-top-6 -right-2 sm:-right-3 md:-right-4 lg:-right-5 xl:-right-6 w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 bg-gradient-to-br from-[#2EBFA5] to-[#1E8372] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-[var(--duration-normal)] touch-target floating-element"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ transform: 'translateZ(0)' }}
                role="button"
                tabIndex={0}
                aria-label="Clock icon - Smart timing features"
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <Clock className="w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 text-white mobile-preview-icon" />
              </motion.div>

              <motion.div 
                className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-5 xl:-bottom-6 -left-2 sm:-left-3 md:-left-4 lg:-left-5 xl:-left-6 w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 bg-gradient-to-br from-[#FFC773] to-[#E6B85C] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-[var(--duration-normal)] touch-target floating-element"
                whileHover={{ scale: 1.1, rotate: -360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ transform: 'translateZ(0)' }}
                role="button"
                tabIndex={0}
                aria-label="Smartphone icon - Mobile app features"
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <Smartphone className="w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 text-white mobile-preview-icon" />
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -right-6 sm:-right-8 md:-right-10 lg:-right-12 xl:-right-14 transform -translate-y-1/2 w-10 sm:w-12 md:w-14 lg:w-16 xl:w-18 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 bg-gradient-to-br from-[#2EBFA5] to-[#1E8372] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-[var(--duration-normal)] touch-target floating-element"
                whileHover={{ scale: 1.1, y: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ transform: 'translateZ(0)' }}
                role="button"
                tabIndex={0}
                aria-label="Download icon - Get the app"
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <Download className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 text-white mobile-preview-icon" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-[var(--duration-normal)] cursor-pointer touch-target"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to features section"
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