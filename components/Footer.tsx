'use client'

import { MapPin, Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle Grid */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-10 left-1/4 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-10 right-1/4 w-24 h-24 bg-purple-600/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 sm:space-x-4 mb-6"
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
                      "0 0 40px rgba(6, 182, 212, 0.4)"
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
              
              <div>
                <motion.span 
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  CommuteTimely
                </motion.span>
                <div className="text-xs sm:text-sm text-blue-300/70">Smart Commute Alerts</div>
              </div>
            </motion.div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Intelligent leave alerts using real-time traffic data to help you arrive on time, every time. 
              <span className="text-blue-300 font-medium"> Launching September 2025</span> on iOS and Android.
            </p>
            
            <div className="flex items-center space-x-6">
              {[
                { icon: Twitter, name: "Twitter", href: "#", color: "hover:text-blue-400" },
                { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/company/commutetimely/", color: "hover:text-blue-500" },
                { icon: Github, name: "GitHub", href: "https://github.com/CommuteTimely", color: "hover:text-gray-300" },
                { icon: Mail, name: "Email", href: "mailto:umerpatel1540@gmail.com", color: "hover:text-cyan-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.05)",
                      "0 0 20px rgba(37, 99, 235, 0.15)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-3">
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Download", href: "#download" },
                { name: "Pricing", href: "/pricing" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors relative group text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors relative group text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 sm:pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              © 2025 CommuteTimely. All rights reserved.
            </p>
            <div className="flex space-x-6 justify-center sm:justify-start">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Support", href: "#" }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="relative group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-3 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll back to top of page"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 255, 255, 0.05)",
                "0 0 30px rgba(37, 99, 235, 0.1)",
                "0 0 20px rgba(255, 255, 255, 0.05)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="sr-only">Back to top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
