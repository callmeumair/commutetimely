'use client'

import { motion } from 'framer-motion'
import { Clock, Bell, MapPin } from 'lucide-react'
import { config } from '@/lib/config'

const HeroSection = () => {
  const handleJoinWaitlist = () => {
    // Open the waitlist form in a new tab
    window.open(config.WAITLIST_FORM_URL, '_blank')
  }

  const handleLearnMore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-primary-400/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Clock className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-20 text-accent-400/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bell className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-primary-400/20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <MapPin className="w-14 h-14" />
      </motion.div>

      <div className="relative z-10 container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          >
            Never Be Late
            <span className="block gradient-text mt-2">Again</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-300 max-w-4xl mx-auto leading-relaxed"
          >
            Smart notifications that tell you exactly when to leave. 
            <span className="block text-primary-400 font-semibold mt-2">
              Works with car, bus, train, walking, and cycling.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <button
              onClick={handleJoinWaitlist}
              className="btn-primary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3"
            >
              <span className="text-2xl">🚀</span>
              <span>Join Waitlist</span>
            </button>

            <button
              onClick={handleLearnMore}
              className="btn-secondary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3"
            >
              <span className="text-2xl">ℹ️</span>
              <span>Learn More</span>
            </button>
          </motion.div>

          {/* Launch Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-8 sm:mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-6 py-3 text-primary-300">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
              <span className="text-sm sm:text-base font-medium">Launching September 2025</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
