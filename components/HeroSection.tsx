'use client'

import { motion } from 'framer-motion'
import { Clock, Smartphone, Download } from 'lucide-react'
import { config } from '@/lib/config'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const handleJoinWaitlist = () => {
    window.open(config.GOOGLE_FORM_URL, '_blank')
  }

  const handleAppStoreClick = () => {
    window.open(config.APP_STORE_URL, '_blank')
  }

  const handlePlayStoreClick = () => {
    window.open(config.PLAY_STORE_URL, '_blank')
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
    <section className="hero-section bg-transparent relative overflow-hidden">
      {/* Hero animated background shapes */}
      <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] bg-[#0f3d3e]/20 rounded-full blur-3xl z-0 animate-blob1" />
      <div className="absolute -bottom-32 -right-32 w-[30vw] h-[30vw] bg-[#d4af37]/15 rounded-full blur-2xl z-0 animate-blob2" />
      <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/10 via-transparent to-transparent z-0 pointer-events-none" />
              <div className="container-max relative z-10 w-full h-full flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          {/* Left side - Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Never Be Late
                <span className="block gradient-text">Again.</span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                One smart notification that tells you exactly when to leave.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={handleAppStoreClick}
                className="btn-primary flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-125" />
                <span>App Store</span>
              </button>
              <button 
                onClick={handlePlayStoreClick}
                className="btn-secondary flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-125" />
                <span>Play Store</span>
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-gray-500 text-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span><motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>{downloads}+</motion.span> downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Launch Q3 2025</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - App mockup */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Phone mockup with glassmorphism */}
              <motion.div 
                className="w-56 sm:w-64 md:w-72 h-72 sm:h-80 md:h-96 glass p-2 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 ease-in-out"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-full bg-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0f3d3e] to-[#d4af37] rounded-xl flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">CommuteTimely</div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                      <span className="text-gray-400 text-xs">⚙️</span>
                    </div>
                  </div>
                  
                  {/* Notification */}
                  <motion.div 
                    className="bg-[#1a1a1a]/70 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-[#d4af37]/30"
                    animate={{ 
                      boxShadow: ["0 0 0 rgba(212, 175, 55, 0)", "0 0 20px rgba(212, 175, 55, 0.4)", "0 0 0 rgba(212, 175, 55, 0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-gray-400">Now</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                      Time to leave!
                    </div>
                    <div className="text-xs text-gray-400">
                      Leave at 8:12 AM to arrive on time
                    </div>
                  </motion.div>
                  
                  {/* Time display */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <motion.div 
                      className="text-2xl sm:text-4xl font-bold gradient-text mb-2 sm:mb-3"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      8:12 AM
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Departure time</div>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#0f3d3e] to-[#d4af37] rounded-full mx-auto"></div>
                  </div>
                  
                  {/* Bottom nav */}
                  <div className="flex justify-around pt-4 sm:pt-6 border-t border-[#1a1a1a]">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#0f3d3e] to-[#d4af37] rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">🏠</span>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs">📊</span>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs">👤</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-20 h-20 bg-[#0f3d3e]/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#0f3d3e]/40 hidden sm:flex"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">🚗</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#d4af37]/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#d4af37]/40 hidden sm:flex"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xl">⏰</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 