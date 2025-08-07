'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone, Star } from 'lucide-react'
import { config } from '@/lib/config'
import AnimatedButton from './AnimatedButton'

const DownloadCTASection = () => {
  const handleJoinWaitlist = () => {
    // TODO: Implement waitlist signup
    alert('Join our waitlist for early access!')
  }

  return (
    <motion.section 
      className="fullscreen-section bg-black relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max w-full h-full flex flex-col justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Coming <span className="gradient-text">September 2025</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Be one of our first users and help shape the future of commute planning. Available on iOS and Android.
          </p>

          {/* Pre-launch CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedButton 
              onClick={handleJoinWaitlist}
              variant="primary"
              size="lg"
              withSparkle={true}
              className="flex items-center space-x-3 w-full sm:w-auto"
            >
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <div className="text-xs sm:text-sm opacity-90">Join our</div>
                <div className="font-bold">Waitlist</div>
              </div>
            </AnimatedButton>

            <AnimatedButton 
              onClick={handleJoinWaitlist}
              variant="outline"
              size="lg"
              withSparkle={true}
              className="flex items-center space-x-3 w-full sm:w-auto"
            >
              <span className="text-2xl">🔔</span>
              <div className="text-left">
                <div className="text-xs sm:text-sm opacity-90">Get</div>
                <div className="font-bold">Notified</div>
              </div>
            </AnimatedButton>
          </motion.div>

          {/* Features grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center glass p-6"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-[#0f3d3e] to-[#2EBFA5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Free to Download</h3>
              <p className="text-gray-400">No upfront cost, start optimizing your commute today</p>
            </motion.div>

            <motion.div 
              className="text-center glass p-6"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-[#2EBFA5] to-[#1E8372] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Star className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">4.8★ Rating</h3>
              <p className="text-gray-400">Trusted by thousands of users worldwide</p>
            </motion.div>

            <motion.div 
              className="text-center glass p-6"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Download className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Setup</h3>
              <p className="text-gray-400">Get started in minutes with one-tap configuration</p>
            </motion.div>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            className="glass rounded-3xl p-8 border border-[#2EBFA5]/30 hover:border-[#2EBFA5]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Join 10,000+ Users
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  &ldquo;CommuteTimely has saved me countless hours of stress. I never worry about traffic anymore!&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-400">4.8/5 from 2,500+ reviews</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  99%
                </div>
                <div className="text-gray-400">User Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default DownloadCTASection 