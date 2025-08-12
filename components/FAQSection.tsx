'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How does CommuteTimely know when to notify me?",
    answer: "CommuteTimely uses real-time traffic data, historical patterns, and your personal commute preferences to calculate the optimal departure time. The app continuously monitors traffic conditions and adjusts notifications accordingly."
  },
  {
    question: "Does the app work in all cities?",
    answer: "Yes! CommuteTimely works in over 50 major cities worldwide and is constantly expanding. The app uses global traffic data sources to provide accurate predictions wherever you are."
  },
  {
    question: "How accurate are the time predictions?",
    answer: "Our predictions are 99% accurate within a 5-minute window. The app learns from your commute patterns and improves accuracy over time based on your actual travel times."
  },
  {
    question: "Is my location data private?",
    answer: "Absolutely. All location data is processed locally on your device. We never track your personal information or sell your data. Your privacy is our top priority."
  },
  {
    question: "Can I use it for multiple destinations?",
    answer: "Yes! You can set up unlimited routes for work, home, gym, appointments, or any regular destinations. The app will manage notifications for all your routes automatically."
  },
  {
    question: "What if I'm running late?",
    answer: "CommuteTimely will automatically adjust your departure time if you're running behind schedule. It also provides alternative routes and real-time updates to help you arrive on time."
  },
  {
    question: "Does it work with public transportation?",
    answer: "Yes! CommuteTimely supports all transportation modes including car, bus, train, subway, walking, and cycling. It adapts notifications based on your chosen mode of transport."
  },
  {
    question: "Is the app free to use?",
    answer: "CommuteTimely offers a free version with basic features. Premium features like advanced analytics, multiple routes, and priority support are available with a subscription."
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-dark-950 relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto">
            Everything you need to know about CommuteTimely
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-white hover:text-primary-400 transition-colors duration-300 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-950"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-dark-300" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-dark-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="glass p-8 border border-primary-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-dark-300 mb-6">
              Our support team is here to help you get the most out of CommuteTimely
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
