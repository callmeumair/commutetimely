'use client'

import { Button } from "./button";
import { MapPin, Menu, X, ChevronDown, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EarlyAccessModal } from "./EarlyAccessModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isEarlyAccessModalOpen, setIsEarlyAccessModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial scroll state after mounting
    handleScroll();
    setIsMounted(true);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      href: "#features", 
      label: "Features",
      hasDropdown: true,
      dropdownItems: [
        { href: "#smart-alerts", label: "Smart Alerts", description: "AI-powered traffic predictions", icon: Sparkles },
        { href: "#real-time-data", label: "Real-time Data", description: "Live traffic updates", icon: Zap },
        { href: "#route-optimization", label: "Route Optimization", description: "Best path recommendations", icon: MapPin }
      ]
    },
    { href: "#how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "#download", label: "Download" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-3xl border-b border-white/15 shadow-premium' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" as const }}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Premium Logo with Enhanced Interactions */}
          <motion.div 
            className="flex items-center space-x-4 sm:space-x-5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onHoverStart={() => setIsHoveringLogo(true)}
            onHoverEnd={() => setIsHoveringLogo(false)}
          >
            <div className="relative">
              {/* Enhanced Logo Container with Premium Effects */}
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 rounded-3xl sm:rounded-[2rem] flex items-center justify-center shadow-glow-strong"
                whileHover={{ 
                  rotate: [0, -8, 8, 0],
                  scale: 1.15,
                  boxShadow: "0 0 50px rgba(59, 130, 246, 0.8), 0 0 100px rgba(6, 182, 212, 0.6)"
                }}
                animate={{
                  boxShadow: isHoveringLogo 
                    ? "0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(6, 182, 212, 0.4)"
                    : [
                        "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)",
                        "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)",
                        "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)",
                        "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)"
                      ]
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15,
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" as const
                }}
              >
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>
              
              {/* Enhanced Glowing Ring with Premium Animation */}
              <motion.div 
                className="absolute inset-0 rounded-3xl sm:rounded-[2rem] border-2 border-blue-400/60"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 1, 0.4],
                  borderColor: [
                    "rgba(59, 130, 246, 0.6)",
                    "rgba(6, 182, 212, 0.8)",
                    "rgba(139, 92, 246, 0.6)",
                    "rgba(59, 130, 246, 0.6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Floating Particles Effect */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, 8, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
            </div>
            
            <div className="flex flex-col">
              <motion.span 
                className="text-xl sm:text-2xl lg:text-3xl font-black gradient-text-primary leading-none"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
              >
                CommuteTimely
              </motion.span>
              <motion.span 
                className="text-xs sm:text-sm text-cyan-300/80 leading-none hidden sm:block font-semibold"
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Smart Commute Alerts
              </motion.span>
            </div>
          </motion.div>
          
          {/* Enhanced Desktop Navigation with Premium Interactions */}
          <nav className="hidden lg:flex items-center space-x-10 xl:space-x-12" role="navigation" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className="nav-link flex items-center space-x-2 focus-ring"
                    onClick={() => handleDropdownToggle(item.label)}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    aria-label={`${item.label} menu`}
                  >
                    <span>{item.label}</span>
                    <motion.div
                      animate={{
                        rotate: activeDropdown === item.label ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                ) : (
                  <motion.a
                    href={item.href}
                    className="nav-link focus-ring"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -3 }}
                    onClick={closeMobileMenu}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </motion.a>
                )}

                {/* Enhanced Dropdown Menu with Premium Styling */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-3 w-72 bg-gray-900/95 backdrop-blur-3xl border border-white/15 rounded-3xl shadow-premium overflow-hidden"
                        initial={{ opacity: 0, y: -15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" as const }}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        <div className="p-3">
                          {item.dropdownItems?.map((dropdownItem, idx) => (
                            <motion.a
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block p-4 rounded-2xl hover:bg-white/8 transition-all duration-500 group/item focus-ring"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                              role="menuitem"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                                  <dropdownItem.icon className="w-4 h-4 text-blue-400" />
                                </div>
                                <div>
                                  <div className="font-semibold text-white group-hover/item:text-cyan-300 transition-colors duration-300">
                                    {dropdownItem.label}
                                  </div>
                                  <div className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Enhanced CTA Button with Premium Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 50px rgba(59, 130, 246, 0.7), 0 0 100px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/early-access" aria-label="Get early access to CommuteTimely">
                <Button 
                  className="btn-premium px-8 xl:px-10 py-3 xl:py-4 text-base xl:text-lg"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Get Early Access</span>
                  </span>
                </Button>
              </a>
            </motion.div>
          </nav>

          {/* Enhanced Mobile Menu Button with Premium Styling */}
          <motion.button
            className="lg:hidden relative w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center focus-ring"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: isMobileMenuOpen 
                ? "0 0 30px rgba(59, 130, 246, 0.5)" 
                : "0 0 15px rgba(255, 255, 255, 0.1)"
            }}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu with Premium Animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="lg:hidden border-t border-white/15 bg-black/95 backdrop-blur-3xl"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto container-padding py-8">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <div key={item.href}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="w-full text-left text-white/80 hover:text-white transition-all duration-500 py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-lg font-semibold focus-ring"
                          onClick={() => handleDropdownToggle(item.label)}
                          aria-expanded={activeDropdown === item.label}
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            <motion.div
                              animate={{
                                rotate: activeDropdown === item.label ? 180 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </button>
                        
                        {/* Mobile Dropdown with Enhanced Styling */}
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              className="mt-3 ml-6 space-y-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <motion.a
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  className="block py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-300 focus-ring"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  onClick={closeMobileMenu}
                                  role="menuitem"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                                      <dropdownItem.icon className="w-3 h-3 text-blue-400" />
                                    </div>
                                    <div>
                                      <div className="font-semibold">{dropdownItem.label}</div>
                                      <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        href={item.href}
                        className="block text-white/80 hover:text-white transition-all duration-500 py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-lg font-semibold focus-ring"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                        onClick={closeMobileMenu}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`Navigate to ${item.label}`}
                      >
                        {item.label}
                      </motion.a>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Button with Premium Styling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Button 
                    className="w-full btn-premium py-4 text-lg"
                    onClick={() => {
                      closeMobileMenu();
                      setIsEarlyAccessModalOpen(true);
                    }}
                    aria-label="Get early access to CommuteTimely"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Get Early Access</span>
                    </span>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Early Access Modal no longer used here; CTA routes to /early-access */}
    </motion.header>
  );
}
