'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-max py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">CT</span>
              </div>
              <span className="text-2xl font-bold text-white">CommuteTimely</span>
            </div>
            <p className="text-dark-300 text-lg leading-relaxed max-w-md">
              Your commute, optimized. Never be late again with smart notifications that adapt to traffic conditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-dark-300 text-sm">
              © {currentYear} CommuteTimely. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/sitemap" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                Sitemap
              </Link>
              <span className="text-dark-500">•</span>
              <Link href="/accessibility" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                Accessibility
              </Link>
              <span className="text-dark-500">•</span>
              <Link href="/cookies" className="text-dark-300 hover:text-primary-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6">
            <p className="text-dark-400 text-sm flex items-center justify-center gap-2">
              Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              for commuters
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
