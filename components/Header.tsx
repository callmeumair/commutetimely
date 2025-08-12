'use client'

import Link from 'next/link'
import { Download } from 'lucide-react'
import { config } from '@/lib/config'
import AnimatedButton from '@/components/ui/AnimatedButton'

const Header = () => {
  const handleJoinWaitlist = () => {
    window.open(config.WAITLIST_FORM_URL, '_blank')
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-950/95 backdrop-blur-md shadow-lg border-b border-dark-700">
      <div className="container-max flex items-center justify-between h-16 sm:h-18 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group" aria-label="CommuteTimely - Navigate to home page">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-base sm:text-lg">CT</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
            CommuteTimely
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          <Link href="#features" className="text-white/90 hover:text-white font-medium transition-colors duration-300">
            Features
          </Link>
          <Link href="#how-it-works" className="text-white/90 hover:text-white font-medium transition-colors duration-300">
            How It Works
          </Link>
          <Link href="#faq" className="text-white/90 hover:text-white font-medium transition-colors duration-300">
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <AnimatedButton
          onClick={handleJoinWaitlist}
          size="sm"
          className="flex items-center gap-2"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          Join Waitlist
        </AnimatedButton>
      </div>
    </header>
  )
}

export default Header
