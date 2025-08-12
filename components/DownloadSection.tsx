'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone, Bell, Clock } from 'lucide-react'
import { config } from '@/lib/config'
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from '@/lib/animations'
import AnimatedButton from '@/components/ui/AnimatedButton'
import AnimatedCard from '@/components/ui/AnimatedCard'
import AnimatedGrid, { AnimatedGridItem } from '@/components/ui/AnimatedGrid'

const DownloadSection = () => {
  const handleJoinWaitlist = () => {
    // Open the waitlist form in a new tab
    window.open(config.WAITLIST_FORM_URL, '_blank')
  }

  return (
    <section className="section-padding bg-dark-900 relative">
      <div className="container-max">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Coming <span className="gradient-text">September 2025</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto">
            Be one of our first users and help shape the future of commute planning. Available on iOS and Android.
          </p>
        </motion.div>

        {/* Pre-launch CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 sm:mb-20"
        >
          <motion.div variants={staggerItem}>
            <AnimatedButton
              onClick={handleJoinWaitlist}
              size="lg"
              className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3"
            >
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <div className="text-sm opacity-90">Join our</div>
                <div className="font-bold">Waitlist</div>
              </div>
            </AnimatedButton>
          </motion.div>

          <motion.div variants={staggerItem}>
            <AnimatedButton
              onClick={handleJoinWaitlist}
              variant="secondary"
              size="lg"
              className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3"
            >
              <span className="text-2xl">🔔</span>
              <div className="text-left">
                <div className="text-sm opacity-90">Get</div>
                <div className="font-bold">Notified</div>
              </div>
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <AnimatedGrid
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          <AnimatedGridItem>
            <AnimatedCard className="text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Smartphone className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Free to Download</h3>
              <p className="text-dark-300">No upfront cost, start optimizing your commute today</p>
            </AnimatedCard>
          </AnimatedGridItem>

          <AnimatedGridItem>
            <AnimatedCard className="text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Bell className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Notifications</h3>
              <p className="text-dark-300">Intelligent alerts that adapt to real-time conditions</p>
            </AnimatedCard>
          </AnimatedGridItem>

          <AnimatedGridItem>
            <AnimatedCard className="text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Clock className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Updates</h3>
              <p className="text-dark-300">Live traffic and transit data for accurate timing</p>
            </AnimatedCard>
          </AnimatedGridItem>
        </AnimatedGrid>

        {/* Launch Info */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 sm:p-10 border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Launching September 2025
            </h3>
            <p className="text-lg text-dark-300 mb-6">
              Sign up now to get early access and be the first to try CommuteTimely. 
              <span className="block text-primary-400 font-semibold mt-2">
                Join thousands of commuters who are ready to never be late again.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <AnimatedButton
                onClick={handleJoinWaitlist}
                size="lg"
                className="text-lg px-8 py-4 flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5" />
                <span>Join Waitlist Now</span>
              </AnimatedButton>
            </div>
            
            <div className="flex justify-center gap-6 opacity-80 text-sm">
              <span>Early Access</span>
              <span>App Store</span>
              <span>Google Play</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadSection
