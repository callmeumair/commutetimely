"use client"

import { motion } from 'framer-motion'
import { Star, Award, Users, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'

const preLaunchData = {
  title: "Launching September 2025",
  subtitle: "Be one of our first users",
  description: "We're building the future of commute planning. Join us on this journey.",
  platforms: [
    { name: "App Store", icon: "🍎" },
    { name: "Google Play", icon: "🤖" },
    { name: "Product Hunt", icon: "🚀" }
  ]
}

export default function TrustSection() {

  return (
    <motion.section 
      className="fullscreen-section bg-black relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max w-full h-full flex flex-col justify-center">
        {/* Reviews Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {preLaunchData.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {preLaunchData.subtitle}
          </p>
        </motion.div>

        {/* Pre-launch Message */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-2xl text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              {preLaunchData.description}
            </p>
            
            {/* Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {preLaunchData.platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center space-x-3 p-4 glass rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl">{platform.icon}</div>
                  <span className="text-white font-medium">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Launch Countdown */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Coming This September
            </h3>
            <p className="text-gray-300 mb-6">
              Be one of our first users and help shape the future of commute planning
            </p>
            <div className="flex justify-center gap-4 opacity-60 text-sm">
              <span>Product Hunt</span>
              <span>App Store</span>
              <span>Google Play</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 