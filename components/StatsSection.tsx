'use client'

import { Zap, Clock, TrendingUp, Car } from 'lucide-react'
import { motion } from 'framer-motion'

export default function StatsSection() {
  const stats = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      bgColor: 'bg-blue-500',
      metric: '99.9%',
      title: 'Accuracy Rate',
      subtitle: 'Precise arrival predictions'
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      bgColor: 'bg-blue-500',
      metric: '45min',
      title: 'Time Saved',
      subtitle: 'Average weekly savings'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      bgColor: 'bg-blue-500',
      metric: '24/7',
      title: 'Monitoring',
      subtitle: 'Continuous traffic analysis'
    },
    {
      icon: <Car className="w-6 h-6 text-white" />,
      bgColor: 'bg-blue-500',
      metric: '5+',
      title: 'Transport Modes',
      subtitle: 'Car, transit, bike, walk, etc.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-20 lg:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Powerful Features</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="text-blue-400">CommuteTimely?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for the modern commuter who values punctuality and efficiency. Our intelligent system learns your patterns and adapts to changing conditions in real-time.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`feature-icon ${stat.bgColor} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-3"
              >
                <span className="text-4xl lg:text-5xl font-bold text-white">{stat.metric}</span>
              </motion.div>
              
              <h3 className="text-lg font-bold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-400 text-sm">{stat.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
