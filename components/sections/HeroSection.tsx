'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { config } from '@/lib/config'
import { COLORS, ANIMATIONS, SPACING } from '@/lib/constants'
import { cn, conditionalClass } from '@/lib/utils/index'
import { BaseComponentProps } from '@/lib/types/components'
import AnimatedButton from '../AnimatedButton'
import LazyLottie from '../LazyLottie'
import phoneAnimation from '@/public/lottie/phone-screen.json'

interface HeroSectionProps extends BaseComponentProps {
  onJoinWaitlist?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  className,
  onJoinWaitlist,
  ...props 
}) => {
  // State for animated download counter
  const [downloads, setDownloads] = useState(0)

  // Handle waitlist signup
  const handleJoinWaitlist = () => {
    if (onJoinWaitlist) {
      onJoinWaitlist()
    } else {
      window.open(config.GOOGLE_FORM_URL, '_blank')
    }
  }

  // Animated counter effect
  useEffect(() => {
    let start = 0
    const end = 500
    
    if (downloads === end) return
    
    const increment = () => {
      start += Math.ceil((end - start) / 20)
      setDownloads(start > end ? end : start)
      
      if (start < end) {
        setTimeout(increment, 24)
      }
    }
    
    increment()
  }, [downloads])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: ANIMATIONS.easing.easeOut 
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: ANIMATIONS.easing.easeOut 
      }
    }
  }

  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: ANIMATIONS.easing.easeOut 
      }
    }
  }

  const phoneVariants = {
    hover: { 
      scale: 1.05, 
      rotateY: 5, 
      y: -10, 
      boxShadow: `0 0 24px ${COLORS.primary.main}` 
    },
    tap: { scale: 0.95 },
    float: {
      y: [0, -5, 0],
      rotateY: [0, 2, 0],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: ANIMATIONS.easing.easeInOut 
      }
    }
  }

  const floatingElementVariants = {
    float: {
      y: [0, -10, 0],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: ANIMATIONS.easing.easeInOut 
      }
    },
    floatDelayed: {
      y: [0, 10, 0],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: ANIMATIONS.easing.easeInOut,
        delay: 1 
      }
    }
  }

  // Transport mode options
  const transportModes = [
    { icon: '🚗', label: 'Car', active: true },
    { icon: '🚌', label: 'Bus', active: false },
    { icon: '🚲', label: 'Bike', active: false },
    { icon: '🚶‍♂️', label: 'Walk', active: false }
  ]

  return (
    <motion.section 
      className={cn(
        'hero-section bg-transparent relative min-h-screen flex items-center justify-center',
        'pb-16 sm:pb-20 md:pb-24',
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {/* Background animated shapes - hidden on mobile for performance */}
      <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] bg-[#0f3d3e]/20 rounded-full blur-3xl z-0 animate-blob1 hidden md:block" />
      <div className="absolute -bottom-32 -right-32 w-[30vw] h-[30vw] bg-[#FFC773]/15 rounded-full blur-2xl z-0 animate-blob2 hidden md:block" />
      <div className="absolute inset-0 bg-gradient-radial from-[#FFC773]/10 via-transparent to-transparent z-0 pointer-events-none hidden md:block" />
      
      <div className="container-max relative z-10 w-full h-full flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          
          {/* Left side - Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1 px-4 sm:px-6 lg:px-0"
            variants={contentVariants}
          >
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Never Be Late
                <span className="block gradient-text">Again.</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                One smart notification that tells you exactly when to leave.
              </motion.p>
            </div>
            
            {/* Action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedButton 
                onClick={handleJoinWaitlist}
                variant="primary"
                size="lg"
                withSparkle={true}
                className="flex items-center justify-center space-x-3 w-full sm:w-auto touch-target"
                aria-label="Join waitlist for early access to CommuteTimely"
              >
                <span className="text-xl sm:text-2xl">🚀</span>
                <span>Join Waitlist</span>
              </AnimatedButton>
              
              <AnimatedButton 
                onClick={handleJoinWaitlist}
                variant="outline"
                size="lg"
                withSparkle={true}
                className="flex items-center justify-center space-x-3 w-full sm:w-auto touch-target"
                aria-label="Get notified when CommuteTimely launches"
              >
                <span className="text-xl sm:text-2xl">🔔</span>
                <span>Get Notified</span>
              </AnimatedButton>
            </motion.div>

            {/* Pre-launch status */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-8 lg:space-x-10 text-gray-500 text-sm sm:text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#FFC773] rounded-full"></div>
                <span>Launching September 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>App Store & Play Store</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Phone Animation */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2 px-4 sm:px-6 lg:px-0 mb-8 lg:mb-0"
            variants={animationVariants}
          >
            <div className="relative">
              {/* Phone screen animation */}
              <motion.div 
                className={cn(
                  'w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80',
                  'h-64 sm:h-72 md:h-80 lg:h-88 xl:h-96',
                  'glass p-3 sm:p-4 md:p-5 shadow-2xl border border-gray-800',
                  'hover:border-[#2EBFA5] transition-all duration-500 ease-in-out',
                  'bg-gradient-to-br from-[#23272f] to-[#181c22]'
                )}
                variants={phoneVariants}
                whileHover="hover"
                whileTap="tap"
                animate="float"
              >
                <div className="w-full h-full bg-[#181c22] rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col">
                  
                  {/* App header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0f3d3e] to-[#2EBFA5] rounded-xl flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-wide">
                      CommuteTimely
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#23272f] rounded-full flex items-center justify-center hover:bg-[#2EBFA5]/20 transition-colors touch-target">
                      <span className="text-[#2EBFA5] text-sm">⚙️</span>
                    </div>
                  </div>
                  
                  {/* Commute status card */}
                  <motion.div 
                    className="rounded-xl bg-gradient-to-r from-[#23272f] to-[#1e8372]/30 p-3 sm:p-4 flex items-center mb-3 sm:mb-4 shadow-md border border-[#2EBFA5]/10"
                    whileHover={{ boxShadow: '0 0 12px #2EBFA5', scale: 1.03 }}
                  >
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-2">Next commute</div>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        <span>Leave in</span>
                        <span className="text-[#2EBFA5] animate-pulse">12 mins</span>
                      </div>
                      <div className="text-sm text-gray-400 mt-2">ETA: 8:42 AM</div>
                    </div>
                    <div className="ml-3 sm:ml-4 flex flex-col items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2EBFA5]/10 flex items-center justify-center mb-2 border border-[#2EBFA5]/30">
                        <span className="text-[#2EBFA5] text-lg sm:text-xl">🚗</span>
                      </div>
                      <div className="text-xs sm:text-sm text-[#2EBFA5] font-semibold">Car</div>
                    </div>
                  </motion.div>
                  
                  {/* Transport mode toggle */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    {transportModes.map((mode) => (
                      <motion.button
                        key={mode.label}
                        className={cn(
                          'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-11 rounded-full flex items-center justify-center border-2',
                          'hover:shadow-lg transition-all duration-200 touch-target',
                          conditionalClass(
                            'bg-[#2EBFA5] border-[#2EBFA5] text-white shadow-md',
                            { 'bg-[#23272f] border-[#2EBFA5]/30 text-[#2EBFA5]': !mode.active }
                          )
                        )}
                        whileHover={{ scale: 1.15, boxShadow: '0 0 8px #2EBFA5' }}
                        aria-label={mode.label}
                      >
                        <span className="text-lg sm:text-xl">{mode.icon}</span>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Destination preview */}
                  <motion.div 
                    className="rounded-xl bg-[#23272f] border border-[#2EBFA5]/10 p-3 flex items-center mb-3 sm:mb-4 hover:border-[#2EBFA5]/40 transition-colors"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 8px #2EBFA5' }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#2EBFA5]/30 to-[#1e8372]/30 flex items-center justify-center mr-3">
                      <span className="text-xl sm:text-2xl">🏢</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">Destination</div>
                      <div className="text-sm sm:text-base font-semibold text-white truncate">Acme HQ, 123 Main St</div>
                      <div className="text-xs sm:text-sm text-[#2EBFA5]">7.2 mi • 18 min</div>
                    </div>
                    <div className="ml-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#2EBFA5]/10 flex items-center justify-center">
                      <span className="text-[#2EBFA5] text-lg sm:text-xl">🗺️</span>
                    </div>
                  </motion.div>
                  
                  {/* Notification toggle */}
                  <motion.div 
                    className="w-full h-4 sm:h-5 rounded-full bg-[#23272f] border border-[#2EBFA5]/10 flex items-center overflow-hidden relative"
                    whileHover={{ boxShadow: '0 0 8px #2EBFA5' }}
                  >
                    <div className="h-full bg-[#2EBFA5] rounded-full animate-pulse" style={{ width: '60%' }} />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-white font-semibold">
                      Notifications On
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-[#2EBFA5] font-semibold">
                      ETA: 8:42 AM
                    </div>
                  </motion.div>
                  
                  {/* Bottom navigation */}
                  <div className="flex justify-around pt-4 sm:pt-5 md:pt-6 border-t border-[#1a1a1a] mt-auto">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#0f3d3e] to-[#2EBFA5] rounded-lg flex items-center justify-center hover:shadow-md hover:bg-[#2EBFA5]/20 transition-all touch-target">
                      <span className="text-white text-sm">🏠</span>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#23272f] rounded-lg flex items-center justify-center hover:shadow-md hover:bg-[#2EBFA5]/20 transition-all touch-target">
                      <span className="text-[#2EBFA5] text-sm">📊</span>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#23272f] rounded-lg flex items-center justify-center hover:shadow-md hover:bg-[#2EBFA5]/20 transition-all touch-target">
                      <span className="text-[#2EBFA5] text-sm">👤</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements - hidden on very small screens */}
              <motion.div 
                className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 bg-[#0f3d3e]/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#0f3d3e]/40 hidden sm:flex"
                variants={floatingElementVariants}
                animate="float"
              >
                <span className="text-xl sm:text-2xl">🚗</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 bg-[#FFC773]/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFC773]/40 hidden sm:flex"
                variants={floatingElementVariants}
                animate="floatDelayed"
              >
                <span className="text-lg sm:text-xl">⏰</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
