'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone, Star } from 'lucide-react'
import { config } from '@/lib/config'

const DownloadCTASection = () => {
  const handleAppStoreClick = () => {
    window.open(config.APP_STORE_URL, '_blank')
  }

  const handlePlayStoreClick = () => {
    window.open(config.PLAY_STORE_URL, '_blank')
  }

  return (
    <section className="section-padding bg-black relative">
      <div className="container-max">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Download <span className="gradient-text">CommuteTimely</span> Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Join thousands of users who never worry about being late again. Available on iOS and Android.
          </p>

          {/* Download buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={handleAppStoreClick}
              className="btn-primary flex items-center space-x-3 px-8 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-90">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </motion.button>

            <motion.button 
              onClick={handlePlayStoreClick}
              className="btn-secondary flex items-center space-x-3 px-8 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-90">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </motion.button>
          </motion.div>

          {/* Features grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center glass p-6 hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Free to Download</h3>
              <p className="text-gray-400">No upfront cost, start optimizing your commute today</p>
            </div>

            <div className="text-center glass p-6 hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">4.8★ Rating</h3>
              <p className="text-gray-400">Trusted by thousands of users worldwide</p>
            </div>

            <div className="text-center glass p-6 hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Setup</h3>
              <p className="text-gray-400">Get started in minutes with one-tap configuration</p>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            className="glass rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  "CommuteTimely has saved me countless hours of stress. I never worry about traffic anymore!"
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
    </section>
  )
}

export default DownloadCTASection 