'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion'

export default function AccordionDemoSection() {
  const faqItems = [
    {
      question: "How does CommuteTimely calculate departure times?",
      answer: "Our AI-powered system analyzes real-time traffic data, historical patterns, and current conditions to provide accurate departure times. We consider multiple factors including traffic congestion, weather conditions, and your preferred route to ensure you arrive exactly on time."
    },
    {
      question: "What commute modes are supported?",
      answer: "CommuteTimely supports all major transportation methods: driving, public transit, walking, cycling, and ride-sharing. Our system automatically detects the best route for your chosen mode and provides optimized departure times accordingly."
    },
    {
      question: "How accurate are the traffic predictions?",
      answer: "Our traffic predictions are highly accurate, typically within 2-3 minutes of actual travel time. We use machine learning algorithms that continuously improve based on real-world data, ensuring the most reliable estimates possible."
    },
    {
      question: "Can I set up multiple destinations?",
      answer: "Yes! You can configure multiple regular destinations like work, gym, appointments, and social events. Each destination can have its own schedule and preferences, making it easy to manage all your daily commutes from one app."
    },
    {
      question: "Is my location data private?",
      answer: "Absolutely. CommuteTimely is built with privacy-first principles. Your location data is encrypted, never shared with third parties, and only used to provide you with accurate commute times. You have full control over your data."
    },
    {
      question: "What happens if I'm running late?",
      answer: "If you're running behind schedule, CommuteTimely will automatically recalculate your route and provide updated departure times. You'll also receive smart notifications with alternative routes and real-time updates to help you catch up."
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
    hidden: { opacity: 0, y: 20 },
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about CommuteTimely and how it works to keep you punctual.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-dark-700 px-6"
                >
                  <AccordionTrigger className="text-white hover:text-blue-400 text-left py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}
