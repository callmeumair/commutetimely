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

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 80)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleDownload = () => {
    window.open(config.PLAY_STORE_URL, "_blank")
  }

  if (!show) return null

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-md bg-black/60 border-b border-white/10"
    >
      <div className="container-max flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">CT</span>
          </div>
          <span className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors duration-200">CommuteTimely</span>
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
          className="relative group btn-primary flex items-center space-x-2 px-6 py-3 text-base md:text-lg font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all duration-200"
        >
          <Download className="w-5 h-5" />
          <span>Download Now</span>
          {/* Subtext on hover */}
          <span className="absolute left-0 top-full mt-2 w-full text-xs text-center text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Available on App Store & Play Store
          </span>
        </button>
      </div>
    </motion.header>
  )
}