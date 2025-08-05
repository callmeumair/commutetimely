'use client'

import { motion } from 'framer-motion'
import { Clock, Bell, Car, Smartphone, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Leave On Time",
    description: "Get precise departure times based on real-time traffic conditions and your commute patterns.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive intelligent alerts that adapt to traffic changes, weather, and your schedule.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Car,
    title: "Multi-Mode Support",
    description: "Works with car, bus, train, walking, and cycling. Optimize any commute type.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "One-tap setup with your regular routes. No complex configuration needed.",
    color: "from-orange-500 to-red-500"
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
    <section className="section-padding bg-black relative">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="gradient-text">CommuteTimely</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Smart notifications that adapt to your commute, traffic conditions, and schedule.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
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
          className="mt-16 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl p-8 border border-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
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