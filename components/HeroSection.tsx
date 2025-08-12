'use client'

import { Button } from "./button";
import { Clock, MapPin, Smartphone, ArrowRight, Play, Shield, Zap, Cpu } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.7, rotateY: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };

  const trustIndicators = [
    { icon: Shield, text: "Privacy First", color: "text-green-400" },
    { icon: Zap, text: "Real-time Data", color: "text-yellow-400" },
    { icon: Cpu, text: "AI Powered", color: "text-purple-400" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Hero Background Effects */}
      <div className="absolute inset-0">
        {/* Cyber Grid */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Neon Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-10 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <motion.div 
                className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(37, 99, 235, 0.3)",
                    "0 0 40px rgba(6, 182, 212, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(37, 99, 235, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div 
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm sm:font-semibold text-white">Launching September 2024</span>
              </motion.div>

              <div className="space-y-6 sm:space-y-8">
                <motion.h1 
                  className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] sm:leading-[0.9] tracking-tight"
                  variants={itemVariants}
                >
                  <span className="text-white">Never Be</span>
                  <motion.span 
                    className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                    }}
                    style={{
                      backgroundSize: "200% 100%"
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Late Again
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  variants={itemVariants}
                >
                  CommuteTimely sends{" "}
                  <motion.span 
                    className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    style={{ backgroundSize: "200% 100%" }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    intelligent leave alerts
                  </motion.span>{" "}
                  using real-time traffic data to help you arrive perfectly on time, every time.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto group relative bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-700 hover:via-cyan-600 hover:to-purple-700 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl overflow-hidden rounded-xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    Get Early Access
                    <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto group border-2 border-white/20 hover:border-cyan-400/50 bg-black/50 backdrop-blur-sm px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-white/5 transition-all duration-300 text-white rounded-xl"
                >
                  <Play className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start">
                {trustIndicators.map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center"
                      whileHover={{ 
                        rotate: 5,
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(37, 99, 235, 0.1)",
                          "0 0 20px rgba(6, 182, 212, 0.2)",
                          "0 0 10px rgba(139, 92, 246, 0.1)",
                          "0 0 10px rgba(37, 99, 235, 0.1)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                    </motion.div>
                    <span className="text-sm sm:font-semibold text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 pt-2 sm:pt-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <span className="text-sm sm:text-gray-300 font-medium">iOS & Android</span>
                </div>
                <div className="w-2 h-2 bg-gray-600 rounded-full hidden sm:block" />
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <span className="text-sm sm:text-gray-300 font-medium">Free Download</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Phone Mockup Column */}
          <div className="lg:col-span-6 flex justify-center order-first lg:order-last">
            <motion.div 
              className="relative"
              variants={phoneVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Phone Container */}
              <motion.div 
                className="relative w-64 h-[520px] sm:w-80 sm:h-[650px] lg:w-[300px] lg:h-[620px] mx-auto"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -8,
                  rotateX: 3
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Holographic Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 rounded-[2.5rem] blur-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Phone Frame */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-[2.5rem] p-2 shadow-2xl border border-white/10">
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-[2.2rem] overflow-hidden relative border border-white/5">
                    {/* Mobile App Interface Mockup */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 rounded-[2.2rem] p-4">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-white text-xs mb-4">
                        <span>6:20</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 border border-white rounded-sm"></div>
                          <div className="w-1 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="w-12 h-1 bg-white rounded-full"></div>
                      </div>

                      {/* App Content */}
                      <div className="text-center text-white">
                        <h2 className="text-lg font-bold mb-2">CommuteTimely</h2>
                        <p className="text-sm mb-1">Today's Commute</p>
                        <p className="text-sm mb-6">to Work</p>

                        <div className="mb-6">
                          <p className="text-sm mb-1">Leave at</p>
                          <p className="text-3xl font-bold text-cyan-400">8:20 AM</p>
                        </div>

                        <div className="flex items-center justify-center space-x-2 mb-6">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">39m commute</span>
                        </div>

                        {/* Commute Mode Selection */}
                        <div className="mb-6">
                          <p className="text-sm mb-3">Commute Mode</p>
                          <div className="flex space-x-2">
                            <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg text-xs">
                              Car
                            </button>
                            <button className="flex-1 bg-gray-700 text-white py-2 px-3 rounded-lg text-xs border border-gray-600">
                              Transit
                            </button>
                          </div>
                        </div>

                        {/* Traffic Status */}
                        <div className="mb-6">
                          <p className="text-sm mb-3">Traffic Status</p>
                          <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                            <div className="w-5 h-5 bg-orange-400 rounded-sm"></div>
                            <div className="text-right">
                              <span className="text-sm">Moderate</span>
                              <p className="text-gray-400 text-xs">Traffic conditions</p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg text-sm">
                            Re-calculate
                          </button>
                          <button className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg text-sm border border-gray-600">
                            Notifications On
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtle overlay for extra glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-cyan-500/5 rounded-[2.2rem] pointer-events-none"
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute -bottom-16 -right-16 w-24 h-24 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30"
                  animate={{ 
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
