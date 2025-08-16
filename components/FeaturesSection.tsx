'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Bell, Clock, MapPin, Smartphone, Navigation, Users, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Globe } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Switch } from "./switch";

const features = [
  {
    icon: Bell,
    title: "Smart Leave Alerts",
    description: "CommuteTimely sends perfectly timed notifications telling you exactly when to leave based on real-time traffic conditions, ensuring you reach on time every day.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
    delay: 0.1,
    benefits: ["AI-powered timing", "Real-time updates", "Personalized alerts"]
  },
  {
    icon: Navigation,
    title: "Real-Time Traffic Data", 
    description: "Our advanced traffic app algorithms analyze live traffic patterns to provide the most accurate departure times and smart commute notifications.",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.4)",
    delay: 0.2,
    benefits: ["Live traffic analysis", "Pattern recognition", "Predictive modeling"]
  },
  {
    icon: MapPin,
    title: "Multiple Commute Modes",
    description: "Whether you drive, take public transit, walk, or bike - CommuteTimely has your commute covered with intelligent planning for every mode.",
    color: "from-purple-500 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
    delay: 0.3,
    benefits: ["Multi-modal support", "Route optimization", "Mode switching"]
  },
  {
    icon: Smartphone,
    title: "Push Notifications",
    description: "Never miss a traffic alert with reliable push notifications that work even when the app is closed, keeping you informed about your commute.",
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(251, 146, 60, 0.4)",
    delay: 0.4,
    benefits: ["Reliable delivery", "Background operation", "Customizable alerts"]
  },
  {
    icon: Clock,
    title: "Arrival Time Optimization",
    description: "Arrive exactly when you need to, not too early or too late. CommuteTimely ensures perfect timing, every time with our intelligent commute planner.",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    delay: 0.5,
    benefits: ["Precise timing", "Buffer management", "Schedule optimization"]
  },
  {
    icon: Users,
    title: "Multi-Destination Support",
    description: "Set up multiple regular destinations like work, gym, appointments, and social events with CommuteTimely's comprehensive commute planning system.",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.4)",
    delay: 0.6,
    benefits: ["Multiple locations", "Schedule management", "Priority routing"]
  }
];

const stats = [
  { number: "99.9%", label: "Accuracy Rate", description: "Precise arrival predictions", icon: CheckCircle, color: "text-green-400" },
  { number: "45min", label: "Time Saved", description: "Average weekly savings", icon: Clock, color: "text-blue-400" },
  { number: "24/7", label: "Monitoring", description: "Continuous traffic analysis", icon: Zap, color: "text-yellow-400" },
  { number: "5+", label: "Transport Modes", description: "Car, transit, bike, walk", icon: Navigation, color: "text-purple-400" }
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your location data stays private and secure with end-to-end encryption.",
    color: "text-green-400"
  },
  {
    icon: TrendingUp,
    title: "Machine Learning",
    description: "Continuously improves predictions based on your commute patterns.",
    color: "text-blue-400"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Available in major cities worldwide with comprehensive traffic data.",
    color: "text-purple-400"
  }
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
        duration: 0.6,
        ease: "premium"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "premium"
      }
    }
  };

  return (
    <section id="features" className="relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "premium" }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-400 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4" />
            <span>Powerful Features</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Everything You Need for
            <span className="block gradient-text-primary">Smart Commuting</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experience the future of commute planning with AI-powered features that adapt to your lifestyle and ensure you're never late again.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              transition={{ delay: feature.delay }}
              className="group"
            >
              <Card className="card-premium h-full border-gradient hover:border-blue-500/50 transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-glow`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <Switch
                      checked={enabledFeatures[feature.title]}
                      onCheckedChange={() => toggleFeature(feature.title)}
                      className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-500"
                    />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Feature Benefits */}
                  <div className="space-y-2 mb-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Link */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-cyan-300 font-medium text-sm group/link transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-200 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Built with <span className="gradient-text-primary">Modern Technology</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-primary p-6 rounded-2xl text-center hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
