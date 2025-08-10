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
              <div className="w-10 h-10 bg-gradient-to-r from-[#0f3d3e] to-[#2EBFA5] rounded-xl flex items-center justify-center" aria-hidden="true">
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
                className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-[#2EBFA5] transition-all duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-[#2EBFA5]/50 focus:ring-offset-2 focus:ring-offset-black touch-target"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={config.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-[#2EBFA5] transition-all duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-[#2EBFA5]/50 focus:ring-offset-2 focus:ring-offset-black touch-target"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View our GitHub repository"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="mailto:support@commutetimely.com"
                className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-[#2EBFA5] transition-all duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-[#2EBFA5]/50 focus:ring-offset-2 focus:ring-offset-black touch-target"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
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
                <a href="/features" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
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
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-normal)] hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} CommuteTimely. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" aria-hidden="true" />
              <span>for commuters</span>
            </div>
          </div>
          
          {/* Additional links */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <a href="/sitemap" className="hover:text-gray-300 transition-colors duration-[var(--duration-normal)]">
              Sitemap
            </a>
            <span>•</span>
            <a href="/accessibility" className="hover:text-gray-300 transition-colors duration-[var(--duration-normal)]">
              Accessibility
            </a>
            <span>•</span>
            <a href="/cookies" className="hover:text-gray-300 transition-colors duration-[var(--duration-normal)]">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 