'use client'

import { motion } from 'framer-motion'
import { Twitter, Github, Mail, Heart } from 'lucide-react'
import { config } from '@/lib/config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fullscreen-section bg-black border-t border-gray-800">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div 
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
                              <div className="w-10 h-10 bg-gradient-to-r from-[#0f3d3e] to-[#FFC773] rounded-xl flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-bold text-lg">CT</span>
              </div>
              <span className="text-2xl font-bold text-white">CommuteTimely</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your commute, optimized. Never be late again with smart notifications that adapt to traffic conditions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href={config.TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-[#FFC773] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC773]/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={config.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-[#FFC773] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC773]/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View our GitHub repository"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="mailto:support@commutetimely.com"
                className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-[#FFC773] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC773]/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Contact us via email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/features" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} CommuteTimely. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1 mt-2 md:mt-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by CommuteTimely Team</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 