'use client'

import { Card, CardContent } from "./card";
import { MapPin, Clock, Bell, CheckCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    icon: MapPin,
    title: "Set Your Destinations",
    description: "Add your regular destinations like work, gym, or appointments with your preferred arrival times using CommuteTimely's intuitive interface.",
    step: "1",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.4)"
  },
  {
    icon: Clock,
    title: "We Monitor Traffic",
    description: "CommuteTimely continuously monitors real-time traffic conditions and learns your commute patterns to provide accurate traffic alerts.",
    step: "2",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.4)"
  },
  {
    icon: Bell,
    title: "Get Smart Alerts",
    description: "Receive perfectly timed smart commute notifications telling you exactly when to leave for optimal arrival with our traffic app.",
    step: "3",
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(251, 146, 60, 0.4)"
  },
  {
    icon: CheckCircle,
    title: "Arrive On Time",
    description: "Follow CommuteTimely's alert and arrive at your destination right on time, stress-free and prepared with our commute planner.",
    step: "4",
    color: "from-purple-500 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.4)"
  }
];

export function HowItWorks() {
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

  return (
    <section id="how-it-works" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-10 sm:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px sm:60px sm:60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-green-600/5 sm:bg-green-600/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-orange-600/5 sm:bg-orange-600/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <motion.div 
              className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(37, 99, 235, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.4)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-sm sm:font-semibold text-white">How It Works</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <span className="text-white">Four Simple Steps to </span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                style={{ backgroundSize: "200% 100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Perfect Timing
              </motion.span>
            </motion.h2>
            
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-semibold"
              variants={itemVariants}
            >
              How CommuteTimely's Traffic App Works
            </motion.h3>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Transform your daily commute with CommuteTimely's intelligent traffic app alerts that ensure you never arrive late again. 
              Our smart commute notifications make it that simple to reach on time, every time. 
              CommuteTimely's advanced algorithms analyze real-time traffic data to provide the most accurate departure times for your specific route.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25
              }}
              className="group relative"
            >
              <Card className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-2xl sm:rounded-3xl">
                {/* Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                  animate={{
                    opacity: [0, 0.05, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl"
                  animate={{
                    boxShadow: [
                      `0 0 20px ${step.glowColor.replace('0.4', '0.1')}`,
                      `0 0 40px ${step.glowColor.replace('0.4', '0.2')}`,
                      `0 0 20px ${step.glowColor.replace('0.4', '0.1')}`
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.8 }}
                />

                <CardContent className="relative p-6 sm:p-8 text-center h-full flex flex-col">
                  {/* Step Number */}
                  <motion.div 
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center font-bold shadow-2xl border-2 border-white/20`}>
                      <span className="text-lg sm:text-xl font-bold">{step.step}</span>
                    </div>
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      boxShadow: [
                        `0 0 30px ${step.glowColor}`,
                        `0 0 50px ${step.glowColor.replace('0.4', '0.6')}`,
                        `0 0 30px ${step.glowColor}`
                      ]
                    }}
                  >
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector (except for last step) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cyan-400"
                      animate={{
                        x: [0, 5, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Platform Availability */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-6 sm:space-x-8 px-6 sm:px-8 py-4 sm:py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            whileHover={{ scale: 1.02 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 255, 255, 0.05)",
                "0 0 40px rgba(37, 99, 235, 0.1)",
                "0 0 20px rgba(255, 255, 255, 0.05)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-white font-semibold text-sm sm:text-base">Available on</span>
            
            <div className="flex items-center space-x-6 sm:space-x-8">
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-gray-300 font-medium text-sm sm:text-base">iOS</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-gray-300 font-medium text-sm sm:text-base">Android</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
