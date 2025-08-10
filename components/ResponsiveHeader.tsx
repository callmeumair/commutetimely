'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

const MENU = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Support', href: '#support' },
  { label: 'Contact', href: '#contact' },
]

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  // Prevent background scroll when menu is open
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    if (open) {
      html.classList.add('overflow-hidden')
      body.classList.add('overflow-hidden')
    } else {
      html.classList.remove('overflow-hidden')
      body.classList.remove('overflow-hidden')
    }
    return () => {
      html.classList.remove('overflow-hidden')
      body.classList.remove('overflow-hidden')
    }
  }, [open])

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  // Close on escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMenu()
  }

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-[#0C3F3F] shadow-lg border-b border-[#2EBFA5]/20"
    >
      <div className="container-max flex items-center justify-between h-16 sm:h-18 md:h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group touch-target" aria-label="CommuteTimely - Navigate to home page">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-[#0f3d3e] to-[#2EBFA5] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-base sm:text-lg" aria-hidden="true">CT</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-white group-hover:text-[#2EBFA5] transition-colors duration-200">CommuteTimely</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main navigation">
          {MENU.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0C3F3F] rounded px-3 py-2 min-h-[44px] flex items-center touch-target"
              title={`Learn more about ${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#download"
          className="hidden md:block relative group bg-gradient-to-r from-[#2EBFA5] to-[#1E8372] hover:from-[#24A892] hover:to-[#1E8372] text-white font-semibold rounded-xl px-5 py-2.5 md:px-6 md:py-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0C3F3F] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] flex items-center touch-target"
          aria-label="Download CommuteTimely app"
        >
          <Download className="w-5 h-5 mr-2 inline" aria-hidden="true" />
          <span>Download</span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden w-12 h-12 flex items-center justify-center text-white hover:text-[#2EBFA5] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0C3F3F] rounded-lg min-h-[48px] touch-target"
          aria-label="Open mobile menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0C3F3F] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out"
            style={{
              transform: open ? 'translateX(0)' : 'translateX(100%)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-white/10">
              <span className="text-white font-semibold text-lg">Menu</span>
              <button
                onClick={closeMenu}
                className="w-12 h-12 flex items-center justify-center text-white hover:text-[#2EBFA5] focus:outline-none focus:ring-2 focus:ring-[#2EBFA5]/50 focus:ring-offset-2 focus:ring-offset-[#0C3F3F] rounded-lg min-h-[48px] transition-colors duration-200 touch-target"
                aria-label="Close mobile menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="px-4 sm:px-6 py-6 space-y-2" aria-label="Mobile navigation">
              {MENU.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white/90 hover:text-white rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#2EBFA5]/50 focus:ring-offset-2 focus:ring-offset-[#0C3F3F] transition-colors duration-200 min-h-[48px] flex items-center touch-target"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="#download"
                  onClick={closeMenu}
                  className="block w-full text-center bg-gradient-to-r from-[#2EBFA5] to-[#1E8372] hover:from-[#24A892] hover:to-[#1E8372] text-white font-semibold rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#2EBFA5]/50 focus:ring-offset-2 focus:ring-offset-[#0C3F3F] transition-all duration-200 min-h-[48px] flex items-center justify-center touch-target"
                >
                  <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                  Download App
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}