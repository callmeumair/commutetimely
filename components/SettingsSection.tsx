'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Bell, Clock, MapPin, Smartphone, Navigation, Users, Settings, Shield, Globe } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Switch } from "./switch";

const notificationSettings = [
  {
    icon: Bell,
    title: "Traffic Alerts",
    description: "Get notified about traffic delays and route changes",
    category: "Essential"
  },
  {
    icon: Clock,
    title: "Departure Reminders",
    description: "Receive timely reminders when it's time to leave",
    category: "Essential"
  },
  {
    icon: MapPin,
    title: "Route Updates",
    description: "Notifications about faster alternative routes",
    category: "Optional"
  },
  {
    icon: Smartphone,
    title: "Push Notifications",
    description: "Enable push notifications for all alerts",
    category: "Essential"
  },
  {
    icon: Navigation,
    title: "Weather Warnings",
    description: "Get alerts about weather affecting your commute",
    category: "Optional"
  },
  {
    icon: Users,
    title: "Social Updates",
    description: "Notifications about friends' commute status",
    category: "Optional"
  }
];

const privacySettings = [
  {
    icon: Shield,
    title: "Location Sharing",
    description: "Share your location with trusted contacts",
    category: "Privacy"
  },
  {
    icon: Globe,
    title: "Analytics",
    description: "Help improve the app with anonymous usage data",
    category: "Privacy"
  }
];

export function SettingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [notificationStates, setNotificationStates] = useState<{ [key: string]: boolean }>({
    "Traffic Alerts": true,
    "Departure Reminders": true,
    "Route Updates": false,
    "Push Notifications": true,
    "Weather Warnings": false,
    "Social Updates": false
  });

  const [privacyStates, setPrivacyStates] = useState<{ [key: string]: boolean }>({
    "Location Sharing": false,
    "Analytics": true
  });

  const toggleNotification = (title: string) => {
    setNotificationStates(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const togglePrivacy = (title: string) => {
    setPrivacyStates(prev => ({
      ...prev,
      [title]: !prev[title]
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="settings" ref={ref} className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 sm:mb-8"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Customize Your
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take control of your notifications and privacy settings to make CommuteTimely work exactly how you want it to.
          </p>
        </motion.div>

        {/* Notification Settings */}
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
            Notification Preferences
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {notificationSettings.map((setting, index) => (
              <motion.div
                key={setting.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <setting.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        setting.category === "Essential" 
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                      }`}>
                        {setting.category}
                      </span>
                    </div>
                    
                    <CardTitle className="text-lg text-white mb-2">
                      {setting.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {setting.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Enable</span>
                      <Switch
                        checked={notificationStates[setting.title]}
                        onCheckedChange={() => toggleNotification(setting.title)}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-600"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Settings */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 text-center"
            variants={itemVariants}
          >
            Privacy & Security
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {privacySettings.map((setting, index) => (
              <motion.div
                key={setting.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <setting.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {setting.category}
                      </span>
                    </div>
                    
                    <CardTitle className="text-lg text-white mb-2">
                      {setting.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {setting.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Enable</span>
                      <Switch
                        checked={privacyStates[setting.title]}
                        onCheckedChange={() => togglePrivacy(setting.title)}
                        className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-600"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Save Settings Button */}
        <motion.div 
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-2xl cursor-pointer text-base sm:text-lg font-semibold overflow-hidden relative"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Save settings"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <span className="relative z-10">Save Settings</span>
            <Settings className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
