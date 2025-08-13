'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Car, Train, Bike, Footprints, Clock, MapPin, Zap, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Switch } from "./switch";

const commuteScenarios = [
  {
    icon: Car,
    title: "Rush Hour Traffic",
    description: "Simulate peak traffic conditions with delays",
    baseTime: "30 min",
    delayTime: "45 min",
    color: "from-red-500 to-orange-500",
    glowColor: "rgba(239, 68, 68, 0.4)"
  },
  {
    icon: Train,
    title: "Public Transit Delays",
    description: "Test scenarios with train/bus delays",
    baseTime: "25 min",
    delayTime: "40 min",
    color: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.4)"
  },
  {
    icon: Bike,
    title: "Weather Conditions",
    description: "Simulate rain, wind, and weather impacts",
    baseTime: "20 min",
    delayTime: "35 min",
    color: "from-gray-500 to-slate-500",
    glowColor: "rgba(107, 114, 128, 0.4)"
  },
  {
    icon: Footprints,
    title: "Pedestrian Routes",
    description: "Test walking path optimizations",
    baseTime: "15 min",
    delayTime: "25 min",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.4)"
  }
];

const optimizationFeatures = [
  {
    icon: Zap,
    title: "Smart Routing",
    description: "AI-powered route optimization",
    enabled: true
  },
  {
    icon: Clock,
    title: "Time Prediction",
    description: "Accurate arrival time estimates",
    enabled: true
  },
  {
    icon: MapPin,
    title: "Real-time Updates",
    description: "Live traffic and route changes",
    enabled: false
  },
  {
    icon: Users,
    title: "Carpool Matching",
    description: "Find ride-sharing opportunities",
    enabled: false
  }
];

export function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [activeScenarios, setActiveScenarios] = useState<{ [key: string]: boolean }>({
    "Rush Hour Traffic": false,
    "Public Transit Delays": false,
    "Weather Conditions": false,
    "Pedestrian Routes": false
  });

  const [optimizationStates, setOptimizationStates] = useState<{ [key: string]: boolean }>({
    "Smart Routing": true,
    "Time Prediction": true,
    "Real-time Updates": false,
    "Carpool Matching": false
  });

  const toggleScenario = (title: string) => {
    setActiveScenarios(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleOptimization = (title: string) => {
    setOptimizationStates(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const getTotalDelay = () => {
    return Object.entries(activeScenarios)
      .filter(([_, isActive]) => isActive)
      .reduce((total, [title]) => {
        const scenario = commuteScenarios.find(s => s.title === title);
        if (scenario) {
          const base = parseInt(scenario.baseTime);
          const delay = parseInt(scenario.delayTime);
          return total + (delay - base);
        }
        return total;
      }, 0);
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
    <section id="demo" ref={ref} className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 sm:mb-8"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Interactive
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Demo
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience how CommuteTimely adapts to different scenarios. Toggle various conditions and see how our smart algorithms optimize your route in real-time.
          </p>
        </motion.div>

        {/* Live Demo Results */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Card className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden rounded-3xl">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
              animate={{
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-2xl sm:text-3xl text-white mb-4">
                Live Route Simulation
              </CardTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                    {Object.values(activeScenarios).filter(Boolean).length}
                  </div>
                  <div className="text-gray-300 text-sm">Active Scenarios</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                    {getTotalDelay()}+
                  </div>
                  <div className="text-gray-300 text-sm">Minutes Delay</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                    {Object.values(optimizationStates).filter(Boolean).length}
                  </div>
                  <div className="text-gray-300 text-sm">Optimizations</div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Commute Scenarios */}
        <motion.div 
          className="mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 text-center"
            variants={itemVariants}
          >
            Toggle Commute Scenarios
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {commuteScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className={`relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-2xl ${
                  activeScenarios[scenario.title] ? 'ring-2 ring-cyan-400/50' : ''
                }`}>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${scenario.color} opacity-0 transition-opacity duration-500 ${
                      activeScenarios[scenario.title] ? 'opacity-10' : ''
                    }`}
                  />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${scenario.color} rounded-xl flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <scenario.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Base: {scenario.baseTime}</div>
                        <div className="text-xs text-red-400">Delay: {scenario.delayTime}</div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg text-white mb-2">
                      {scenario.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {scenario.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Simulate</span>
                      <Switch
                        checked={activeScenarios[scenario.title]}
                        onCheckedChange={() => toggleScenario(scenario.title)}
                        className="data-[state=checked]:bg-cyan-600 data-[state=unchecked]:bg-gray-600"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optimization Features */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 text-center"
            variants={itemVariants}
          >
            Route Optimization Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {optimizationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className={`relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-2xl ${
                  optimizationStates[feature.title] ? 'ring-2 ring-blue-400/50' : ''
                }`}>
                  <CardHeader className="pb-4 text-center">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-lg text-white mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-sm text-gray-400">Enable</span>
                      <Switch
                        checked={optimizationStates[feature.title]}
                        onCheckedChange={() => toggleOptimization(feature.title)}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-600"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo CTA */}
        <motion.div 
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-2xl cursor-pointer text-base sm:text-lg font-semibold overflow-hidden relative"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Try the full demo"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <span className="relative z-10">Try Full Demo</span>
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
