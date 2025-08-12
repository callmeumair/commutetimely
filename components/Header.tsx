'use client'

import { Button } from "./button";
import { MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#download", label: "Download" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 sm:space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl"
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(37, 99, 235, 0.3)",
                    "0 0 40px rgba(6, 182, 212, 0.4)",
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(37, 99, 235, 0.3)"
                  ]
                }}
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              
              {/* Glowing Ring */}
              <motion.div 
                className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-blue-400/50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            <div className="flex flex-col">
              <motion.span 
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-none"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                CommuteTimely
              </motion.span>
              <span className="text-xs text-blue-300/70 leading-none hidden sm:block">Smart Commute Alerts</span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-white/80 hover:text-white transition-colors py-2 px-1 group text-base xl:text-lg font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -3 }}
                onClick={closeMobileMenu}
              >
                {item.label}
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)"
                  }}
                />
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="relative group bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-700 hover:via-cyan-600 hover:to-purple-700 text-white font-semibold px-6 xl:px-8 py-2.5 xl:py-3 rounded-xl shadow-2xl overflow-hidden"
                onClick={() => window.open('https://forms.gle/zFuKctQGXTVjKT967', '_blank')}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="relative z-10 text-sm xl:text-base">Get Early Access</span>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: isMobileMenuOpen 
                ? "0 0 20px rgba(37, 99, 235, 0.4)" 
                : "0 0 10px rgba(255, 255, 255, 0.1)"
            }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="relative text-white/80 hover:text-white transition-colors py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-lg font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)"
                      }}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-700 hover:via-cyan-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-2xl relative overflow-hidden"
                    onClick={() => {
                      closeMobileMenu();
                      window.open('https://forms.gle/zFuKctQGXTVjKT967', '_blank');
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">Get Early Access</span>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
