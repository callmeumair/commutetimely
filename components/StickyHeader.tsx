"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { config } from "@/lib/config"
import { Download, Menu, X } from "lucide-react"

const MENU = [
  { label: "Features", href: "/features" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
]

export default function StickyHeader() {
  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setShow(currentScrollY > 100)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY])

  const handleDownload = () => {
    window.open(config.PLAY_STORE_URL, "_blank")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ 
          y: show ? 0 : -80, 
          opacity: show ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          show 
            ? 'backdrop-blur-xl bg-gradient-to-r from-[#0f3d3e]/90 via-[#1a1a1a]/90 to-[#0f3d3e]/90 shadow-lg border-b border-[#d4af37]/20' 
            : 'backdrop-blur-none bg-transparent shadow-none border-b-transparent'
        }`}
      >
        <div className="container-max flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-2 group"
            aria-label="CommuteTimely - Navigate to home page"
          >
            <div className="w-9 h-9 bg-gradient-to-r from-[#0f3d3e] to-[#d4af37] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg" aria-hidden="true">CT</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-200">CommuteTimely</span>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            {MENU.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black rounded"
                title={`Learn more about ${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <button
            onClick={handleDownload}
            className="hidden md:block relative group bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-xl px-6 py-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Download CommuteTimely app from app stores"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            <span>Download Now</span>
            {/* Subtext on hover */}
            <span className="absolute left-0 top-full mt-2 w-full text-xs text-center text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Available on App Store & Play Store
            </span>
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#d4af37] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black rounded"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-40 md:hidden"
          onClick={toggleMobileMenu}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[#0f3d3e] to-[#1a1a1a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0f3d3e] to-[#d4af37] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CT</span>
                  </div>
                  <span className="text-xl font-bold text-white">CommuteTimely</span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="w-8 h-8 flex items-center justify-center text-white hover:text-[#d4af37] transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-8" id="mobile-menu" aria-label="Mobile navigation">
                {MENU.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="block text-lg text-white hover:text-[#d4af37] font-medium transition-colors duration-200 py-3 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black rounded"
                    title={`Learn more about ${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              {/* Mobile CTA Button */}
              <button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                aria-label="Download CommuteTimely app from app stores"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                <span>Download Now</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}