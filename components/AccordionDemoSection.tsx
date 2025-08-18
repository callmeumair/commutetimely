'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Minus, Sparkles, Clock, Shield, Zap, Users, MapPin, Smartphone } from 'lucide-react'

export default function AccordionDemoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      question: "How does CommuteTimely calculate departure times?",
      answer: "Our AI-powered system analyzes real-time traffic data, historical patterns, and current conditions to provide accurate departure times. We consider multiple factors including traffic congestion, weather conditions, and your preferred route to ensure you arrive exactly on time.",
      icon: Clock,
      category: "Technology"
    },
    {
      question: "What commute modes are supported?",
      answer: "CommuteTimely supports all major transportation methods: driving, public transit, walking, cycling, and ride-sharing. Our system automatically detects the best route for your chosen mode and provides optimized departure times accordingly.",
      icon: MapPin,
      category: "Features"
    },
    {
      question: "How accurate are the traffic predictions?",
      answer: "Our traffic predictions are highly accurate, typically within 2-3 minutes of actual travel time. We use machine learning algorithms that continuously improve based on real-world data, ensuring the most reliable estimates possible.",
      icon: Zap,
      category: "Accuracy"
    },
    {
      question: "Can I set up multiple destinations?",
      answer: "Yes! You can configure multiple regular destinations like work, gym, appointments, and social events. Each destination can have its own schedule and preferences, making it easy to manage all your daily commutes from one app.",
      icon: Users,
      category: "Features"
    },
    {
      question: "Is my location data private?",
      answer: "Absolutely. CommuteTimely is built with privacy-first principles. Your location data is encrypted, never shared with third parties, and only used to provide you with accurate commute times. You have full control over your data.",
      icon: Shield,
      category: "Privacy"
    },
    {
      question: "What happens if I'm running late?",
      answer: "If you're running behind schedule, CommuteTimely will automatically recalculate your route and provide updated departure times. You'll also receive smart notifications with alternative routes and real-time updates to help you catch up.",
      icon: Smartphone,
      category: "Features"
    },
    {
      question: "How is CommuteTimely different from other traffic apps?",
      answer: "CommuteTimely stands out by learning your personal commute patterns and providing intelligent leave alerts, not just traffic information. Unlike generic traffic apps, we analyze your specific routes, preferences, and arrival times to ensure you always reach on time with our advanced commute planner technology.",
      icon: Sparkles,
      category: "Unique Features"
    },
    {
      question: "What makes CommuteTimely the best choice for commuters?",
      answer: "CommuteTimely combines real-time traffic data with AI-powered personalization to deliver the most accurate commute planning experience. Our smart commute notifications are tailored to your specific needs, making us the preferred choice for professionals who value punctuality and efficiency.",
      icon: Zap,
      category: "Benefits"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
      }
    }
  }

  const contentVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const iconVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 180, scale: 1.1 }
  }

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl faq-bg-element"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl faq-bg-element"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10 mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Smart FAQ</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about CommuteTimely, the #1 traffic app, and how it works to keep you punctual with smart commute notifications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => {
            const IconComponent = item.icon
            const isOpen = openIndex === index
            
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`
                    relative bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl border border-dark-600/50 
                    overflow-hidden transition-all duration-300 ease-out faq-item
                    hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10
                    ${isOpen ? 'border-blue-500/50 shadow-xl shadow-blue-500/20 open' : ''}
                  `}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Subtle glow effect when open */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"
                    />
                  )}

                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full px-8 py-6 text-left flex items-start justify-between group"
                  >
                    <div className="flex-1 pr-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`
                          p-2 rounded-lg transition-all duration-300 faq-icon
                          ${isOpen 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-dark-600/50 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400'
                          }
                        `}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className={`
                          text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 faq-category
                          ${isOpen 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-dark-600/50 text-gray-500 group-hover:bg-blue-500/20 group-hover:text-blue-400'
                          }
                        `}>
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 className={`
                        text-lg lg:text-xl font-semibold transition-all duration-300
                        ${isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'}
                      `}>
                        {item.question}
                      </h3>
                    </div>

                    <motion.div
                      variants={iconVariants}
                      animate={isOpen ? "open" : "closed"}
                      className={`
                        flex-shrink-0 p-2 rounded-full transition-all duration-300 faq-icon
                        ${isOpen 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-dark-600/50 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400'
                        }
                      `}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        variants={contentVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="overflow-hidden faq-content"
                      >
                        <div className="px-8 pb-6">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-gray-300 leading-relaxed"
                          >
                            {item.answer}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 mb-8"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">Still have questions? We're here to help!</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 faq-button"
          >
            <span>Contact Support</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
