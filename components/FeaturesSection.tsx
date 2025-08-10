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
      className="w-full bg-black relative section-padding"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max w-full h-full flex flex-col justify-center">
        <motion.div 
          className="text-center mb-[var(--space-2xl)] sm:mb-[var(--space-3xl)] lg:mb-[var(--space-4xl)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-[var(--space-sm)] sm:mb-[var(--space-md)] lg:mb-[var(--space-lg)]">
            Why Choose <span className="gradient-text">CommuteTimely</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Smart notifications that adapt to your commute, traffic conditions, and schedule.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)] sm:gap-[var(--space-lg)] lg:gap-[var(--space-2xl)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group transition-all duration-[var(--duration-normal)] hover:scale-105 hover:shadow-xl glass touch-target"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="text-center space-y-[var(--space-sm)] sm:space-y-[var(--space-md)] p-[var(--space-lg)]">
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${feature.color} rounded-[var(--radius-2xl)] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-[var(--duration-normal)] shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-[#2EBFA5] transition-colors duration-[var(--duration-normal)]">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-[var(--duration-normal)]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional features section */}
        <motion.div 
          className="mt-[var(--space-4xl)] sm:mt-[var(--space-5xl)] lg:mt-[var(--space-6xl)] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-[var(--space-lg)] sm:mb-[var(--space-2xl)]">
            Built for Modern Commuters
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)] sm:gap-[var(--space-2xl)] max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center space-x-[var(--space-md)] p-[var(--space-md)] rounded-[var(--radius-lg)] bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/80 transition-all duration-[var(--duration-normal)] group"
              whileHover={{ x: 8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#2EBFA5] to-[#1E8372] rounded-[var(--radius-lg)] flex items-center justify-center group-hover:scale-110 transition-transform duration-[var(--duration-normal)]">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Privacy First</h4>
                <p className="text-sm text-gray-400">Your data stays on your device</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-[var(--space-md)] p-[var(--space-md)] rounded-[var(--radius-lg)] bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/80 transition-all duration-[var(--duration-normal)] group"
              whileHover={{ x: 8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#FFC773] to-[#E6B85C] rounded-[var(--radius-lg)] flex items-center justify-center group-hover:scale-110 transition-transform duration-[var(--duration-normal)]">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Cross-Platform</h4>
                <p className="text-sm text-gray-400">iOS, Android & Web</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-[var(--space-md)] p-[var(--space-md)] rounded-[var(--radius-lg)] bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/80 transition-all duration-[var(--duration-normal)] group sm:col-span-2 lg:col-span-1"
              whileHover={{ x: 8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#2EBFA5] to-[#0f3d3e] rounded-[var(--radius-lg)] flex items-center justify-center group-hover:scale-110 transition-transform duration-[var(--duration-normal)]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white">Lightning Fast</h4>
                <p className="text-sm text-gray-400">Real-time updates & notifications</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturesSection 