'use client'

import { ArrowRight, Check, Calendar, Smartphone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EarlyAccessSection() {
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
    <section className="py-20 lg:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Ready to Transform</span>
              <br />
              <span className="text-blue-400">Your Daily Commute?</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of early users who will get exclusive access to CommuteTimely when we launch in September 2024. Be part of the revolution in smart commuting.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div variants={itemVariants} className="card text-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="feature-icon bg-blue-500 mb-4 mx-auto"
              >
                <Calendar className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">Launch Date</h3>
              <p className="text-gray-300 text-sm mb-1">September 2024</p>
              <p className="text-gray-400 text-xs">Mark your calendar</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card text-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="feature-icon bg-green-500 mb-4 mx-auto"
              >
                <Smartphone className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">Platforms</h3>
              <p className="text-gray-300 text-sm mb-1">iOS & Android</p>
              <p className="text-gray-400 text-xs">Universal compatibility</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card text-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="feature-icon bg-purple-500 mb-4 mx-auto"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">Early Access</h3>
              <p className="text-gray-300 text-sm mb-1">Limited Spots</p>
              <p className="text-gray-400 text-xs">Be among the first</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Early Access
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
