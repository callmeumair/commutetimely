'use client'

import { motion } from 'framer-motion'
import { Clock, Bell, Car, Smartphone, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Leave On Time",
    description: "Get precise departure times based on real-time traffic conditions and your commute patterns.",
    color: "from-[#0f3d3e] to-[#d4af37]"
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
    color: "from-[#d4af37] to-[#b8941f]"
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
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Why Choose <span className="gradient-text">CommuteTimely</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
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
              className="card group transition-transform duration-200 hover:scale-105 hover:shadow-xl glass"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 12px 32px 0 rgba(31,38,135,0.22)',
              }}
            >
              <div className="text-center space-y-4">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white transition-colors duration-200 group-hover:text-brand-accent" />
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional feature highlight */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#0f3d3e]/20 to-[#d4af37]/20 rounded-3xl p-8 border border-[#d4af37]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-r from-[#0f3d3e] to-[#d4af37] rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                Privacy First
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your location data stays on your device. We never track your personal information or sell your data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection 