import Link from 'next/link'
import { Download, Menu } from 'lucide-react'

const MENU = [
  { label: "Features", href: "/features" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
]

export default function ServerHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl bg-gradient-to-r from-[#0f3d3e]/90 via-[#1a1a1a]/90 to-[#0f3d3e]/90 shadow-lg border-b border-[#FFC773]/20">
      <div className="container-max flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 group"
          aria-label="CommuteTimely - Navigate to home page"
        >
          <div className="w-9 h-9 bg-gradient-to-r from-[#0f3d3e] to-[#FFC773] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg" aria-hidden="true">CT</span>
          </div>
          <span className="text-xl font-bold text-white group-hover:text-[#FFC773] transition-colors duration-200">CommuteTimely</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
          {MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC773]/50 focus:ring-offset-2 focus:ring-offset-black rounded"
              title={`Learn more about ${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Desktop CTA Button */}
        <Link
          href="/#download"
          className="hidden md:block relative group bg-gradient-to-r from-[#FFC773] to-[#E6B35C] hover:from-[#FFD494] hover:to-[#FFC773] text-white font-semibold rounded-xl px-6 py-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#FFC773]/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          aria-label="Download CommuteTimely app from app stores"
        >
          <Download className="w-5 h-5" aria-hidden="true" />
          <span>Download Now</span>
          {/* Subtext on hover */}
          <span className="absolute left-0 top-full mt-2 w-full text-xs text-center text-[#FFC773] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Available on App Store & Play Store
          </span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#FFC773] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC773]/50 focus:ring-offset-2 focus:ring-offset-black rounded"
          aria-label="Open mobile menu"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
} 