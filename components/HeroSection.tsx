'use client'

import { Button } from "./button";
import { Clock, MapPin, Smartphone, ArrowRight, Play, Shield, Zap, Cpu, Star, Users, TrendingUp, Sparkles, CheckCircle, Globe, Smartphone as PhoneIcon } from "lucide-react";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { DemoVideoModal } from "./DemoVideoModal";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isEarlyAccessModalOpen, setIsEarlyAccessModalOpen] = useState(false);
  const [isDemoVideoModalOpen, setIsDemoVideoModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: 45, y: 120 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  };

  // Enhanced floating animation variants
  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  };

  // Parallax scroll effect variants
  const parallaxVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-30, 30, -30],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const trustIndicators = [
    { icon: Shield, text: "Privacy First", color: "text-green-400", description: "Your data stays private", bgColor: "from-green-500/20 to-emerald-500/20", borderColor: "border-green-400/40" },
    { icon: Zap, text: "Real-time Data", color: "text-yellow-400", description: "Live traffic updates", bgColor: "from-yellow-500/20 to-orange-500/20", borderColor: "border-yellow-400/40" },
    { icon: Cpu, text: "AI Powered", color: "text-purple-400", description: "Smart predictions", bgColor: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-400/40" }
  ];

  const socialProof = [
    { icon: Users, text: "10K+", description: "Active Users", color: "text-cyan-400" },
    { icon: Star, text: "4.9/5", description: "App Store Rating", color: "text-yellow-400" },
    { icon: TrendingUp, text: "95%", description: "On-time Rate", color: "text-green-400" }
  ];

  const features = [
    { icon: Globe, text: "Global Coverage", description: "Works worldwide" },
    { icon: PhoneIcon, text: "Cross Platform", description: "iOS & Android" },
    { icon: CheckCircle, text: "Free Forever", description: "No hidden fees" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden pt-24 sm:pt-28" suppressHydrationWarning>
      {/* Premium Hero Background Effects with Enhanced Depth */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Enhanced Grid Pattern with Premium Aesthetics */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Premium Neon Lines with Enhanced Animation */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 6,
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
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Enhanced Floating Background Elements with Premium Effects */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl animate-float"
          variants={floatingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float-delayed"
          variants={floatingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        
        {/* Additional Premium Background Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/6 rounded-full blur-2xl animate-float-slow"
          variants={floatingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        
        {/* Premium Particle System */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-purple-400 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -15, 0],
            x: [0, -8, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </motion.div>

      <div className="container mx-auto container-padding py-16 sm:py-24 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[calc(100vh-12rem)] sm:min-h-[calc(100vh-14rem)]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Content Column with Premium Typography */}
          <div className="lg:col-span-6 space-y-10 sm:space-y-16 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-10 sm:space-y-16">
              {/* Premium Launch Badge with Enhanced Effects */}
              <motion.div 
                className="inline-flex items-center space-x-4 sm:space-x-5 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500/15 via-cyan-400/15 to-purple-500/15 backdrop-blur-2xl rounded-full border border-white/25 hover:border-white/40 transition-all duration-700"
                whileHover={{ scale: 1.05, y: -3 }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.4)",
                    "0 0 50px rgba(6, 182, 212, 0.5)",
                    "0 0 40px rgba(139, 92, 246, 0.4)",
                    "0 0 30px rgba(59, 130, 246, 0.4)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div 
                  className="w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span className="text-base sm:text-lg font-bold text-white">Launching September 2025</span>
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>

              <div className="space-y-10 sm:space-y-16">
                {/* Enhanced Headline with Premium Typography */}
                <motion.h1 
                  className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tight"
                  variants={itemVariants}
                >
                  <span className="text-white">CommuteTimely:</span>
                  <motion.span 
                    className="block gradient-text-primary"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                    }}
                    style={{
                      backgroundSize: "200% 100%"
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Never Be Late Again
                  </motion.span>
                </motion.h1>
                
                {/* Enhanced Subheadline with Premium Styling */}
                <motion.p 
                  className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 max-w-4xl mx-auto lg:mx-0 leading-relaxed"
                  variants={itemVariants}
                >
                  The #1{" "}
                  <motion.span 
                    className="font-bold gradient-text-secondary"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    style={{ backgroundSize: "200% 100%" }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    intelligent traffic app
                  </motion.span>{" "}
                  that sends smart leave alerts using real-time traffic data to help you reach on time, every time.
                </motion.p>
                
                {/* Enhanced Description with Premium Content */}
                <motion.p 
                  className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                  variants={itemVariants}
                >
                  Unlike generic traffic apps, CommuteTimely learns your commute patterns and provides personalized smart notifications. Join thousands of commuters who trust CommuteTimely for accurate real-time traffic alerts.
                </motion.p>
              </div>
            </motion.div>
            
            {/* Enhanced CTA Buttons with Premium Interactions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start">
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
                onHoverStart={() => setIsHoveringCTA(true)}
                onHoverEnd={() => setIsHoveringCTA(false)}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto btn-premium px-10 sm:px-16 py-5 sm:py-6 text-xl sm:text-2xl font-black shadow-glow-strong"
                  onClick={() => setIsEarlyAccessModalOpen(true)}
                  aria-label="Get early access to CommuteTimely - Start your journey to never being late again"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <motion.div
                      animate={{
                        rotate: isHoveringCTA ? 360 : 0,
                        scale: isHoveringCTA ? 1.2 : 1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-6 h-7 sm:w-7 sm:h-8" />
                    </motion.div>
                    <span>Get Early Access</span>
                    <motion.div
                      animate={{
                        x: isHoveringCTA ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-6 h-7 sm:w-7 sm:h-8 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto btn-secondary px-10 sm:px-16 py-5 sm:py-6 text-xl sm:text-2xl font-bold"
                  onClick={() => setIsDemoVideoModalOpen(true)}
                  aria-label="Watch demo video to see CommuteTimely in action"
                >
                  <Play className="mr-3 sm:mr-4 w-6 h-7 sm:w-7 sm:h-8 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Trust Indicators with Premium Styling */}
            <motion.div variants={itemVariants} className="space-y-8 sm:space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-center lg:justify-start">
                {trustIndicators.map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex flex-col items-center sm:items-start space-y-4 text-center sm:text-left group"
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${item.bgColor} backdrop-blur-2xl border ${item.borderColor} rounded-3xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ 
                        rotate: 8,
                        boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 30px rgba(6, 182, 212, 0.4)",
                          "0 0 25px rgba(139, 92, 246, 0.3)",
                          "0 0 20px rgba(59, 130, 246, 0.3)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                    >
                      <item.icon className={`w-8 h-8 sm:w-9 sm:h-9 ${item.color}`} />
                    </motion.div>
                    <div>
                      <div className="font-bold text-white text-lg sm:text-xl">{item.text}</div>
                      <div className="text-base text-gray-400">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Social Proof with Premium Layout */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-12 pt-6 sm:pt-8">
                {socialProof.map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex items-center space-x-3 sm:space-x-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color} flex-shrink-0`} />
                    <div className="text-center sm:text-left">
                      <div className="font-black text-white text-xl sm:text-2xl">{item.text}</div>
                      <div className="text-base text-gray-400">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Platform Info with Premium Styling */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-6 sm:pt-8 justify-center lg:justify-start">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.text}
                    className="flex items-center space-x-3 sm:space-x-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 1.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-300 font-semibold">{feature.text}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-base sm:text-lg text-gray-300 font-semibold">{feature.description}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced Phone Mockup Column with Premium Effects */}
          <div className="lg:col-span-6 flex justify-center order-first lg:order-last">
            <motion.div 
              className="relative"
              variants={phoneVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Enhanced Phone Container with Premium Styling */}
              <motion.div 
                className="relative w-80 h-[640px] sm:w-96 sm:h-[720px] lg:w-[360px] lg:h-[760px] mx-auto"
                whileHover={{ 
                  scale: 1.03,
                  rotateY: -10,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Enhanced Holographic Effect with Premium Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/25 via-transparent to-purple-400/25 rounded-[3rem] blur-2xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.08, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Enhanced Phone Frame with Premium Materials */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-[3rem] p-3 shadow-premium border border-white/15">
                  {/* Enhanced Screen with Premium Display */}
                  <div className="w-full h-full bg-black rounded-[2.7rem] overflow-hidden relative border border-white/8">
                    {/* Mobile App Interface - Using Actual Image */}
                    <div className="w-full h-full rounded-[2.7rem] overflow-hidden relative">
                      <Image 
                        src="/images/IMG_750E9EF883FD-1.jpeg" 
                        alt="CommuteTimely traffic app interface displaying real-time commute details, traffic alerts, and smart navigation features for optimal commute planning"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* Enhanced overlay for premium glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/8 via-transparent to-cyan-500/8 rounded-[2.7rem] pointer-events-none"
                      animate={{
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Enhanced Floating Elements with Premium Animation */}
                <motion.div 
                  className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/15 rounded-full backdrop-blur-2xl border border-blue-400/40 animate-float"
                  variants={floatingVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
                
                <motion.div 
                  className="absolute -bottom-24 -right-24 w-36 h-36 bg-purple-500/15 rounded-full backdrop-blur-2xl border border-purple-400/40 animate-float-delayed"
                  variants={floatingVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />

                {/* Additional Premium Floating Elements */}
                <motion.div 
                  className="absolute top-1/2 -right-12 w-20 h-20 bg-cyan-500/12 rounded-full backdrop-blur-xl border border-cyan-400/25 animate-float-slow"
                  variants={floatingVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  style={{ animationDelay: '-2s' }}
                />
                
                <motion.div 
                  className="absolute top-1/4 -left-8 w-16 h-16 bg-green-500/10 rounded-full backdrop-blur-lg border border-green-400/20 animate-float"
                  variants={floatingVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  style={{ animationDelay: '-1s' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Early Access Modal */}
      <EarlyAccessModal 
        isOpen={isEarlyAccessModalOpen}
        onClose={() => setIsEarlyAccessModalOpen(false)}
      />
      
      {/* Demo Video Modal */}
      <DemoVideoModal 
        isOpen={isDemoVideoModalOpen}
        onClose={() => setIsDemoVideoModalOpen(false)}
      />
    </section>
  );
}

