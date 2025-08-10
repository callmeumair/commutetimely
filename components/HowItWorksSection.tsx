'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Bell, CheckCircle } from 'lucide-react'
import stepAnimation from '@/public/lottie/step-animation.json'
import LazyLottie from './LazyLottie'

const steps = [
  {
    icon: MapPin,
    title: "Set Your Routes",
    description: "Add your regular destinations - work, home, gym, or anywhere you go frequently.",
    color: "from-blue-500 to-cyan-500",
    delay: 0
  },
  {
    icon: Clock,
    title: "Get Smart Timing",
    description: "Our AI analyzes traffic patterns and calculates the perfect departure time for you.",
    color: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: Bell,
    title: "Receive Notifications",
    description: "Get timely alerts that adapt to real-time traffic conditions and your schedule.",
    color: "from-green-500 to-emerald-500",
    delay: 0.4
  },
  {
    icon: CheckCircle,
    title: "Arrive On Time",
    description: "Leave with confidence knowing you'll arrive exactly when you need to be there.",
    color: "from-orange-500 to-red-500",
    delay: 0.6
  }
]

const HowItWorksSection = () => {
  return (
    <motion.section 
      className="w-full bg-black relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full h-full flex flex-col justify-center">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Four simple steps to never be late again
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block"></div>
          
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
              >
                {/* Lottie Animation */}
                <motion.div 
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg p-2`}>
                    <LazyLottie 
                      animationData={stepAnimation} 
                      loop={true} 
                      className="w-full h-full"
                      style={{ maxWidth: '80px', maxHeight: '80px' }}
                    />
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-black rounded-full border-4 border-blue-500 hidden lg:block"></div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`text-center lg:text-left flex-1 ${
                    index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: step.delay + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl p-6 sm:p-8 border border-blue-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Download CommuteTimely today and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="btn-primary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                Download Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HowItWorksSection 