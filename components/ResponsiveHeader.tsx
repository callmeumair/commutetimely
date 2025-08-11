'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const MENU = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Support', href: '#support' },
  { label: 'Contact', href: '#contact' },
]

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const panelRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const firstMenuItemRef = useRef<HTMLButtonElement | null>(null)
  const lastMenuItemRef = useRef<HTMLButtonElement | null>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const closeMenu = useCallback(() => {
    setOpen(false)
    // Return focus to the previously focused element or menu button
    if (previousActiveElement.current) {
      previousActiveElement.current.focus()
      previousActiveElement.current = null
    } else {
      buttonRef.current?.focus()
    }
  }, [])

  const openMenu = useCallback(() => {
    // Store the currently focused element before opening menu
    previousActiveElement.current = document.activeElement as HTMLElement
    setOpen(true)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        closeMenu()
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open, closeMenu])

  // Enhanced keyboard navigation with proper focus trap
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!open) return

      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          closeMenu()
          break
        case 'Tab':
          // Trap focus within menu when open
          if (e.shiftKey) {
            if (document.activeElement === firstMenuItemRef.current) {
              e.preventDefault()
              lastMenuItemRef.current?.focus()
            }
          } else {
            if (document.activeElement === lastMenuItemRef.current) {
              e.preventDefault()
              firstMenuItemRef.current?.focus()
            }
          }
          break
        case 'ArrowDown':
          e.preventDefault()
          if (document.activeElement === buttonRef.current) {
            firstMenuItemRef.current?.focus()
          } else {
            const currentIndex = MENU.findIndex((_, index) => 
              document.activeElement === document.querySelector(`[data-menu-item="${index}"]`)
            )
            if (currentIndex < MENU.length - 1) {
              const nextElement = document.querySelector(`[data-menu-item="${currentIndex + 1}"]`) as HTMLElement
              nextElement?.focus()
            }
          }
          break
        case 'ArrowUp':
          e.preventDefault()
          const currentIndex = MENU.findIndex((_, index) => 
            document.activeElement === document.querySelector(`[data-menu-item="${index}"]`)
          )
          if (currentIndex > 0) {
            const prevElement = document.querySelector(`[data-menu-item="${currentIndex - 1}"]`) as HTMLElement
            prevElement?.focus()
          } else {
            buttonRef.current?.focus()
          }
          break
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, closeMenu])

  // Handle Enter key on menu button
  const handleMenuButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(!open)
    }
  }

  // Smooth scroll to section
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMenu()
  }, [closeMenu])

  // Focus management
  useEffect(() => {
    if (open) {
      // Small delay to ensure animation has started
      const timer = setTimeout(() => {
        firstMenuItemRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [open])

  // Announce menu state changes to screen readers
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = open ? 'Mobile navigation menu opened' : 'Mobile navigation menu closed'
      
      document.body.appendChild(announcement)
      
      setTimeout(() => {
        if (document.body.contains(announcement)) {
          document.body.removeChild(announcement)
        }
      }, 1000)
    }
  }, [open])

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-white/10 dark:bg-black/30 backdrop-blur-[12px] shadow-lg border-b border-white/20 dark:border-white/20"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
      role="banner"
    >
      <div className="container-max flex items-center justify-between h-16 sm:h-18 md:h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group touch-target" aria-label="CommuteTimely - Navigate to home page">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-[#0f3d3e] to-[#2EBFA5] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-base sm:text-lg" aria-hidden="true">CT</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-white group-hover:text-[#2EBFA5] transition-colors duration-[var(--duration-normal)]">CommuteTimely</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main navigation">
          {MENU.map((item) => {
            const isActive = activeSection === item.href
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-white/90 hover:text-white font-medium transition-all duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-[#2EBFA5] focus:ring-offset-2 focus:ring-offset-white/20 dark:focus:ring-offset-black/20 rounded-lg px-3 py-2 min-h-[44px] flex items-center touch-target hover:scale-105 transform backdrop-blur-sm ${
                  isActive ? 'text-white bg-white/25 dark:bg-white/25' : 'hover:bg-white/15 dark:hover:bg-white/15'
                }`}
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
                title={`Learn more about ${item.label.toLowerCase()}`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2EBFA5]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </button>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#download"
          className="hidden md:block relative group bg-gradient-to-r from-[#2EBFA5] to-[#1E8372] hover:from-[#24A892] hover:to-[#1E8372] text-white font-semibold rounded-xl px-5 py-2.5 md:px-6 md:py-3 text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0C3F3F] transition-all duration-[var(--duration-normal)] shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] flex items-center touch-target"
          aria-label="Download CommuteTimely app"
        >
          <Download className="w-5 h-5 mr-2 inline" aria-hidden="true" />
          <span>Download</span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          ref={buttonRef}
          onClick={() => open ? closeMenu() : openMenu()}
          onKeyDown={handleMenuButtonKeyDown}
          className="lg:hidden w-12 h-12 flex items-center justify-center text-white hover:text-[#2EBFA5] transition-all duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-[#2EBFA5] focus:ring-offset-2 focus:ring-offset-[#0C3F3F] rounded-lg min-h-[48px] touch-target hover:bg-white/10 hover:scale-105 transform"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-haspopup="true"
          aria-describedby={open ? "mobile-menu-description" : undefined}
        >
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </motion.div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            aria-describedby="mobile-menu-description"
            className="absolute top-0 right-0 h-full w-full max-w-sm bg-white/15 dark:bg-black/30 backdrop-blur-[12px] border-l border-white/20 dark:border-white/20 shadow-2xl"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Hidden description for screen readers */}
            <div id="mobile-menu-description" className="sr-only">
              Mobile navigation menu with links to Features, How it Works, FAQ, Support, and Contact sections. Use Tab to navigate between menu items, Escape to close the menu, or click outside to close.
            </div>
            
            {/* Header */}
            <motion.div 
              className="flex items-center justify-between px-6 h-20 border-b border-white/20 dark:border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-[8px]"
              style={{
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="text-white font-semibold text-xl drop-shadow-sm">Menu</span>
              <button
                onClick={closeMenu}
                className="w-12 h-12 flex items-center justify-center text-white hover:text-[#2EBFA5] focus:outline-none focus:ring-2 focus:ring-[#2EBFA5] focus:ring-offset-2 focus:ring-offset-white/20 dark:focus:ring-offset-black/20 rounded-lg min-h-[48px] transition-all duration-[var(--duration-normal)] touch-target hover:bg-white/20 dark:hover:bg-white/20 hover:scale-105 transform backdrop-blur-sm"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </motion.div>
            
            {/* Navigation */}
            <nav className="px-6 py-8 space-y-4" aria-label="Mobile navigation">
              {MENU.map((item, index) => {
                const isActive = activeSection === item.href
                return (
                  <motion.button
                    key={item.href}
                    ref={index === 0 ? firstMenuItemRef : index === MENU.length - 1 ? lastMenuItemRef : null}
                    data-menu-item={index}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left text-white/90 hover:text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#2EBFA5] focus:ring-offset-2 focus:ring-offset-white/20 dark:focus:ring-offset-black/20 transition-all duration-[var(--duration-normal)] min-h-[56px] flex items-center touch-target hover:scale-105 transform backdrop-blur-sm ${
                      isActive ? 'text-white bg-white/25 dark:bg-white/25' : 'hover:bg-white/15 dark:hover:bg-white/15'
                    }`}
                    style={{
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)'
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    <span className="text-lg font-medium drop-shadow-sm">{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-[#2EBFA5] rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                )
              })}
              
              {/* Mobile CTA */}
              <motion.div 
                className="pt-6 border-t border-white/20 dark:border-white/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Link
                  href="#download"
                  onClick={closeMenu}
                  className="block w-full text-center bg-gradient-to-r from-[#2EBFA5] to-[#1E8372] hover:from-[#24A892] hover:to-[#1E8372] text-white font-semibold rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#2EBFA5] focus:ring-offset-2 focus:ring-offset-white/20 dark:focus:ring-offset-black/20 transition-all duration-[var(--duration-normal)] min-h-[56px] flex items-center justify-center touch-target shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm"
                  style={{
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                  }}
                  aria-label="Download CommuteTimely app"
                >
                  <Download className="w-5 h-5 mr-3" aria-hidden="true" />
                  <span className="text-lg">Download App</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      )}
    </header>
  )
}