'use client'

import { motion } from 'framer-motion'
import { Clock, Bell, Car, Smartphone, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Leave On Time",
    description: "Get precise departure times based on real-time traffic conditions and your commute patterns.",
          color: "from-[#0f3d3e] to-[#2EBFA5]"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive intelligent alerts that adapt to traffic changes, weather, and your schedule.",
    color: "from-[#1a1a1a] to-[#2c2c2c]"
  },
  {
    icon: Car,
    title: "Multi-Mode Support",
    description: "Works with car, bus, train, walking, and cycling. Optimize any commute type.",
          color: "from-[#2EBFA5] to-[#1E8372]"
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "One-tap setup with your regular routes. No complex configuration needed.",
    color: "from-[#0f3d3e] to-[#1a1a1a]"
  }
]

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="fullscreen-section bg-black relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Why Choose <span className="gradient-text">CommuteTimely</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-2 sm:px-4">
            Smart notifications that adapt to your commute, traffic conditions, and schedule.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group transition-transform duration-200 hover:scale-105 hover:shadow-xl glass touch-target"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 12px 32px 0 rgba(31,38,135,0.22)',
              }}
            >
              <div className="text-center space-y-3 sm:space-y-4">
                <motion.div 
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  aria-hidden="true"
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-colors duration-200 group-hover:text-brand-accent" />
                </motion.div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional feature highlight */}
        <motion.div 
          className="mt-12 sm:mt-16 bg-gradient-to-r from-[#0f3d3e]/20 to-[#2EBFA5]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#2EBFA5]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#0f3d3e] to-[#2EBFA5] rounded-2xl flex items-center justify-center" aria-hidden="true">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Privacy First
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Your location data stays on your device. We never track your personal information or sell your data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturesSection 