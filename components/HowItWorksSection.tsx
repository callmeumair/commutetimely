'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Bell, CheckCircle } from 'lucide-react'
import { config } from '@/lib/config'

const steps = [
  {
    icon: MapPin,
    title: "Set Your Route",
    description: "Add your regular destinations - work, home, gym, or anywhere you go frequently. Set your preferred arrival time.",
    color: "from-primary-500 to-primary-600",
    delay: 0
  },
  {
    icon: Clock,
    title: "Get Smart Timing",
    description: "Our AI analyzes real-time traffic patterns, transit schedules, and calculates the perfect departure time for you.",
    color: "from-accent-500 to-accent-600",
    delay: 0.2
  },
  {
    icon: Bell,
    title: "Receive Notifications",
    description: "Get timely 'Leave by X:XX AM' alerts that adapt to traffic changes, weather, and your schedule.",
    color: "from-primary-600 to-primary-700",
    delay: 0.4
  },
  {
    icon: CheckCircle,
    title: "Arrive On Time",
    description: "Leave with confidence knowing you'll arrive exactly when you need to be there, every single time.",
    color: "from-accent-600 to-accent-700",
    delay: 0.6
  }
]

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-dark-950 relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto">
            Four simple steps to never be late again
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg p-2`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-dark-950 rounded-full border-4 border-primary-500 hidden lg:block"></div>
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
                  <div className="glass p-6 sm:p-8 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-dark-300 leading-relaxed">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="glass p-8 sm:p-10 border border-primary-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-dark-300 mb-6">
              Join our waitlist and be one of the first to experience the future of commute planning
            </p>
            <button 
              onClick={() => window.open(config.WAITLIST_FORM_URL, '_blank')}
              className="btn-primary text-lg px-8 py-4"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
