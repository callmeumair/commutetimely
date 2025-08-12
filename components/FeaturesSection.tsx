'use client'

import { motion } from 'framer-motion'
import { Clock, Bell, Car, Zap, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Leave On Time",
    description: "Get precise departure times based on real-time traffic conditions and your commute patterns.",
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive intelligent alerts that adapt to traffic changes, weather, and your schedule.",
    color: "from-accent-500 to-accent-600"
  },
  {
    icon: Car,
    title: "Multi-Mode Support",
    description: "Works with car, bus, train, walking, and cycling. Optimize any commute type.",
    color: "from-primary-600 to-primary-700"
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "One-tap setup with your regular routes. No complex configuration needed.",
    color: "from-accent-600 to-accent-700"
  }
]

const modernFeatures = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays on your device",
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "iOS, Android & Web",
    color: "from-accent-500 to-accent-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time updates & notifications",
    color: "from-primary-600 to-primary-700"
  }
]

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-dark-900 relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="gradient-text">CommuteTimely</span>?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto">
            Smart notifications that adapt to your commute, traffic conditions, and schedule.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="text-center space-y-4">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-dark-300 leading-relaxed group-hover:text-dark-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Built for Modern Commuters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Built for Modern Commuters
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {modernFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-dark-800/50 hover:bg-dark-800/80 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{feature.title}</h4>
                  <p className="text-sm text-dark-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
