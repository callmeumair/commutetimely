import { Button } from "./button";
import { Input } from "./input";
import { Card, CardContent } from "./card";
import { Smartphone, Mail, Calendar, ArrowRight, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { EarlyAccessModal } from "./EarlyAccessModal";

export function Download() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEarlyAccessModalOpen, setIsEarlyAccessModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const features = [
    "Early access before public launch",
    "Exclusive beta features",
    "Priority customer support",
    "No ads during beta period"
  ];

  return (
    <section id="download" ref={ref} className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)`
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-indigo-500/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <motion.div 
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-blue-100">Join the Beta</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              Ready to Transform
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Your Daily Commute?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Join thousands of early users who will get exclusive access to CommuteTimely 
              when we launch in September 2025. Be part of the revolution in smart commuting.
            </motion.p>
          </motion.div>
          
          {/* Info Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            variants={containerVariants}
          >
            {[
              { icon: Calendar, title: "Launch Date", subtitle: "September 2025", description: "Mark your calendar" },
              { icon: Smartphone, title: "Platforms", subtitle: "iOS & Android", description: "Universal compatibility" },
              { icon: Mail, title: "Early Access", subtitle: "Limited Spots", description: "Be among the first" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-white">{item.title}</h3>
                    <p className="text-blue-200 font-medium mb-2 text-sm sm:text-base">{item.subtitle}</p>
                    <p className="text-blue-300 text-xs sm:text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Main CTA Section */}
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                {!isSubmitted ? (
                  <motion.div 
                    className="space-y-4 sm:space-y-6"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 id="early-access-title" className="text-xl sm:text-2xl font-bold text-white mb-2">Get Early Access</h3>
                      <p className="text-blue-200 text-sm sm:text-base">Join our exclusive beta program</p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {features.map((feature, index) => (
                        <motion.div 
                          key={feature}
                          className="flex items-center space-x-2 sm:space-x-3 text-blue-100"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" aria-labelledby="early-access-title">
                      <div className="flex flex-col gap-3">
                        <motion.div 
                          className="flex-1"
                          whileFocus={{ scale: 1.02 }}
                        >
                          <label htmlFor="email-input" className="sr-only">Email address</label>
                          <Input
                            id="email-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-label="Email address for early access"
                            className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400 focus:ring-blue-400/20 h-11 sm:h-12 text-sm sm:text-base"
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            type="button"
                            aria-label="Open early access form"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 h-11 sm:h-12 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                            onClick={() => setIsEarlyAccessModalOpen(true)}
                          >
                            Get Early Access
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-blue-300 text-center">
                        We'll notify you as soon as CommuteTimely is available. No spam, ever.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="text-center py-6 sm:py-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">You're In!</h3>
                    <p className="text-blue-200 text-sm sm:text-base">
                      Thanks for joining! We'll notify you when CommuteTimely launches in September.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            variants={itemVariants}
          >
            <p className="text-blue-200 mb-4 sm:mb-6 text-sm sm:text-base">Follow our journey:</p>
            <div className="flex justify-center space-x-6 sm:space-x-8">
              {[
                { name: "Twitter", href: "#" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/commutetimely/" },
                { name: "GitHub", href: "https://github.com/CommuteTimely" }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-blue-200 hover:text-white transition-colors font-medium text-sm sm:text-base"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Early Access Modal */}
      <EarlyAccessModal 
        isOpen={isEarlyAccessModalOpen}
        onClose={() => setIsEarlyAccessModalOpen(false)}
      />
    </section>
  );
}
