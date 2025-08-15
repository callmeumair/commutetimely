'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Bell, Clock, MapPin, Smartphone, Navigation, Users, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Switch } from "./switch";

const features = [
  {
    icon: Bell,
    title: "Smart Leave Alerts",
    description: "CommuteTimely sends perfectly timed notifications telling you exactly when to leave based on real-time traffic conditions, ensuring you reach on time every day.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.4)",
    delay: 0.1
  },
  {
    icon: Navigation,
    title: "Real-Time Traffic Data", 
    description: "Our advanced traffic app algorithms analyze live traffic patterns to provide the most accurate departure times and smart commute notifications.",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.4)",
    delay: 0.2
  },
  {
    icon: MapPin,
    title: "Multiple Commute Modes",
    description: "Whether you drive, take public transit, walk, or bike - CommuteTimely has your commute covered with intelligent planning for every mode.",
    color: "from-purple-500 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
    delay: 0.3
  },
  {
    icon: Smartphone,
    title: "Push Notifications",
    description: "Never miss a traffic alert with reliable push notifications that work even when the app is closed, keeping you informed about your commute.",
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(251, 146, 60, 0.4)",
    delay: 0.4
  },
  {
    icon: Clock,
    title: "Arrival Time Optimization",
    description: "Arrive exactly when you need to, not too early or too late. CommuteTimely ensures perfect timing, every time with our intelligent commute planner.",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    delay: 0.5
  },
  {
    icon: Users,
    title: "Multi-Destination Support",
    description: "Set up multiple regular destinations like work, gym, appointments, and social events with CommuteTimely's comprehensive commute planning system.",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.4)",
    delay: 0.6
  }
];

const stats = [
  { number: "99.9%", label: "Accuracy Rate", description: "Precise arrival predictions with CommuteTimely", icon: CheckCircle },
  { number: "45min", label: "Time Saved", description: "Average weekly time savings", icon: Clock },
  { number: "24/7", label: "Monitoring", description: "Continuous real-time traffic analysis", icon: Zap },
  { number: "5+", label: "Transport Modes", description: "Car, transit, bike, walk, and more", icon: Navigation }
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [enabledFeatures, setEnabledFeatures] = useState<{ [key: string]: boolean }>({
    "Smart Leave Alerts": true,
    "Real-Time Traffic Data": true,
    "Multiple Commute Modes": false,
    "Push Notifications": true,
    "Arrival Time Optimization": false,
    "Multi-Destination Support": false
  });

  const toggleFeature = (featureTitle: string) => {
    setEnabledFeatures(prev => ({
      ...prev,
      [featureTitle]: !prev[featureTitle]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="features" ref={ref} className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
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
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 bg-purple-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <motion.div 
              className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(37, 99, 235, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.4)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-sm sm:font-semibold text-white">Powerful Features</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-8"
              variants={itemVariants}
            >
              <span className="text-white">Why Choose </span>
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                style={{ backgroundSize: "200% 100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                CommuteTimely?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              CommuteTimely is built for the modern commuter who values punctuality and efficiency. 
              Our intelligent traffic app learns your commute patterns and adapts to changing conditions with real-time traffic alerts, ensuring you always reach on time.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.05)",
                    "0 0 40px rgba(37, 99, 235, 0.15)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              >
                <motion.div 
                  className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </motion.div>
                
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2 sm:mb-3"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">{stat.label}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.03,
                rotateY: 8,
                rotateX: 5,
                y: -10
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                delay: feature.delay
              }}
              className="group perspective-1000"
            >
              <Card className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-2xl sm:rounded-3xl">
                {/* Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                  animate={{
                    opacity: [0, 0.05, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl"
                  animate={{
                    boxShadow: [
                      `0 0 20px ${feature.glowColor.replace('0.4', '0.1')}`,
                      `0 0 40px ${feature.glowColor.replace('0.4', '0.3')}`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                />
                
                <div className="relative h-full p-6 sm:p-8">
                  <CardHeader className="text-center pb-4 sm:pb-6 pt-2 sm:pt-4">
                    <motion.div 
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                      animate={{
                        boxShadow: [
                          `0 0 30px ${feature.glowColor}`,
                          `0 0 50px ${feature.glowColor.replace('0.4', '0.6')}`,
                          `0 0 30px ${feature.glowColor}`
                        ]
                      }}
                    >
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white relative z-10" />
                      
                      {/* Rotating Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 bg-gradient-to-r ${feature.color} opacity-30`}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-white group-hover:text-blue-200 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-6 sm:pb-8">
                    <CardDescription className="text-center text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                      {feature.description}
                    </CardDescription>
                    
                    {/* Feature Toggle */}
                    <motion.div 
                      className="flex items-center justify-center space-x-3 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-sm text-gray-400">Enable feature</span>
                      <Switch
                        checked={enabledFeatures[feature.title]}
                        onCheckedChange={() => toggleFeature(feature.title)}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-600"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors opacity-0 group-hover:opacity-100"
                      initial={{ x: -20 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="font-semibold mr-2 sm:mr-3 text-sm sm:text-base">Learn more</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-2xl cursor-pointer text-base sm:text-lg font-semibold overflow-hidden relative"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Learn more about transforming your commute"
            animate={{
              boxShadow: [
                "0 0 40px rgba(37, 99, 235, 0.3)",
                "0 0 60px rgba(6, 182, 212, 0.4)",
                "0 0 40px rgba(139, 92, 246, 0.3)",
                "0 0 40px rgba(37, 99, 235, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <span className="relative z-10">Ready to transform your commute with CommuteTimely?</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
