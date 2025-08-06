"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { config } from "@/lib/config"
import { Download } from "lucide-react"

const MENU = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export default function StickyHeader() {
  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  return (
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
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 bg-gradient-to-r from-[#0f3d3e] to-[#d4af37] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">CT</span>
          </div>
          <span className="text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-200">CommuteTimely</span>
        </a>
        {/* Menu (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-8">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* CTA Button */}
        <button
          onClick={handleDownload}
          className="relative group bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-xl px-6 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Download className="w-5 h-5" />
          <span>Download Now</span>
          {/* Subtext on hover */}
          <span className="absolute left-0 top-full mt-2 w-full text-xs text-center text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Available on App Store & Play Store
          </span>
        </button>
      </div>
    </motion.header>
  )
}