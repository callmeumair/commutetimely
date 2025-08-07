'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import TestimonialVideoModal from './TestimonialVideoModal'

const preLaunchMessage = {
  title: "Coming September 2025",
  subtitle: "Be one of our first users",
  description: "We're working closely with early users to perfect CommuteTimely. Real testimonials will be added after our September 2025 launch.",
  features: [
    "Smart traffic notifications",
    "Real-time weather integration", 
    "Multi-transport support",
    "Privacy-first design"
  ]
}

const TestimonialsSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
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

  // Pre-launch stats
  const preLaunchStats = [
    {
      label: "Launch Date",
      value: "September 2025",
      icon: "🚀"
    },
    {
      label: "Platforms",
      value: "App Store & Play Store",
      icon: "📱"
    },
    {
      label: "Data Sources",
      value: "Real-time traffic, transit & weather",
      icon: "🌐"
    },
    {
      label: "Early Access",
      value: "Be one of our first users",
      icon: "⭐"
    }
  ]

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
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {preLaunchMessage.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {preLaunchMessage.subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-2xl text-center">
            <Quote className="w-12 h-12 text-[#FFC773] mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              &ldquo;{preLaunchMessage.description}&rdquo;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {preLaunchMessage.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-400">
                  <div className="w-2 h-2 bg-[#FFC773] rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pre-launch Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {preLaunchStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-lg md:text-xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <TestimonialVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="See CommuteTimely in Action"
        description="Watch how Sarah uses CommuteTimely to never be late again."
      />
    </motion.section>
  )
}

export default TestimonialsSection 