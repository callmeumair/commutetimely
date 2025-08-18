'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Brain, Shield, Zap, Users, TrendingUp, Award } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const advantages = [
  {
    icon: Brain,
    title: "AI-Powered Personalization",
    description: "CommuteTimely's advanced AI learns your unique commute patterns, preferences, and routes to provide personalized smart commute notifications that generic traffic apps simply can't match.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.4)",
    delay: 0.1
  },
  {
    icon: Shield,
    title: "Privacy-First Approach",
    description: "Unlike other traffic apps that sell your data, CommuteTimely is built with privacy-first principles. Your location data stays encrypted and private, never shared with third parties.",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.4)",
    delay: 0.2
  },
  {
    icon: Zap,
    title: "Real-Time Intelligence",
    description: "CommuteTimely processes real-time traffic data from multiple sources to provide the most accurate departure times. Our algorithms update continuously to ensure you always reach on time.",
    color: "from-purple-500 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
    delay: 0.3
  },
  {
    icon: Users,
    title: "Community-Driven Accuracy",
    description: "Join thousands of commuters who trust CommuteTimely. Our community-driven approach improves accuracy for everyone, making us the most reliable traffic app available.",
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(251, 146, 60, 0.4)",
    delay: 0.4
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "CommuteTimely gets smarter every day. Our machine learning algorithms continuously improve based on real-world data, ensuring increasingly accurate predictions and better commute planning.",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    delay: 0.5
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "CommuteTimely users report 99.9% on-time arrival rates and save an average of 45 minutes per week. Join the thousands of professionals who trust CommuteTimely for their daily commute.",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.4)",
    delay: 0.6
  }
];

export function UniqueAdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="unique-advantages" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
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
          className="text-center mb-8 sm:mb-10 lg:mb-12"
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
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-sm sm:font-semibold text-white">Why CommuteTimely Leads</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-8"
              variants={itemVariants}
            >
              <span className="text-white">What Makes </span>
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                style={{ backgroundSize: "200% 100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                CommuteTimely Different?
              </motion.span>
            </motion.h2>
            
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-semibold"
              variants={itemVariants}
            >
              The Advanced Features That Set CommuteTimely Apart from Generic Traffic Apps
            </motion.h3>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              While other traffic apps provide basic information, CommuteTimely delivers intelligent commute planning with AI-powered personalization. 
              Our unique approach ensures you always reach on time with smart commute notifications that learn and adapt to your specific needs.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Advantages Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {advantages.map((advantage, index) => (
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
                delay: advantage.delay
              }}
              className="group perspective-1000"
            >
              <Card className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-2xl sm:rounded-3xl">
                {/* Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                  animate={{
                    opacity: [0, 0.05, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl"
                  animate={{
                    boxShadow: [
                      `0 0 20px ${advantage.glowColor.replace('0.4', '0.1')}`,
                      `0 0 40px ${advantage.glowColor.replace('0.4', '0.3')}`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                />
                
                <div className="relative h-full p-6 sm:p-8">
                  <CardHeader className="text-center pb-4 sm:pb-6 pt-2 sm:pt-4">
                    <motion.div 
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${advantage.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                      animate={{
                        boxShadow: [
                          `0 0 30px ${advantage.glowColor}`,
                          `0 0 50px ${advantage.glowColor.replace('0.4', '0.6')}`,
                          `0 0 30px ${advantage.glowColor}`
                        ]
                      }}
                    >
                      <advantage.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white relative z-10" />
                      
                      {/* Rotating Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 bg-gradient-to-r ${advantage.color} opacity-30`}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-white group-hover:text-blue-200 transition-colors">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-6 sm:pb-8">
                    <CardDescription className="text-center text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA removed per request */}
      </div>
    </section>
  );
}
