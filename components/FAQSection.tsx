'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Everything you need to know about CommuteTimely
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="glass border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <AccordionTrigger className="text-left text-white hover:text-brand-accent transition-colors duration-200 px-6 py-4">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you get the most out of CommuteTimely
            </p>
            <button className="btn-primary px-8 py-3">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FAQSection 