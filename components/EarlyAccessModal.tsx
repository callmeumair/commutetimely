'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, User, MapPin, Clock, Smartphone, CheckCircle } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { useEarlyAccess } from './use-early-access';

// Full Screen Party Popper Animation Component
function FullScreenPartyAnimation() {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    y: number;
    rotation: number;
    scale: number;
    color: string;
    shape: string;
  }>>([]);

  useEffect(() => {
    // Create more confetti particles for full screen effect
    const particles = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100, // -100 to 100 for full screen coverage
      y: Math.random() * 200 - 100, // -100 to 100 for full screen coverage
      rotation: Math.random() * 360,
      scale: Math.random() * 1.2 + 0.4, // Larger particles
      color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#FF8E53', '#FF6B9D', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 15)],
      shape: Math.random() > 0.5 ? 'circle' : 'square'
    }));
    
    setConfetti(particles);
  }, []);

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none bg-black/20 backdrop-blur-sm">
      {/* Multiple central burst effects */}
      {Array.from({ length: 3 }).map((_, burstIndex) => (
        <motion.div
          key={burstIndex}
          className="absolute left-1/2 top-1/2 w-6 h-6 bg-yellow-400 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, 4, 0], 
            opacity: [1, 0.8, 0],
            x: (burstIndex - 1) * 20,
            y: (burstIndex - 1) * 20
          }}
          transition={{ 
            duration: 1.2, 
            delay: burstIndex * 0.2,
            ease: "easeOut" as const 
          }}
        />
      ))}
      
      {/* Confetti particles */}
      {confetti.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.shape === 'circle' ? 'rounded-full' : 'rounded-sm'}`}
          style={{
            left: '50%',
            top: '50%',
            backgroundColor: particle.color,
            width: particle.shape === 'circle' ? '12px' : '8px',
            height: particle.shape === 'circle' ? '12px' : '8px',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, 1, 0],
            scale: [0, particle.scale, 0],
            rotate: particle.rotation,
          }}
          transition={{
            duration: 3 + Math.random() * 2, // Longer duration for full screen
            delay: Math.random() * 1.2,
            ease: "easeOut" as const,
          }}
        />
      ))}
      
      {/* Enhanced sparkle effects */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 0], 
            opacity: [0, 1, 0] 
          }}
          transition={{
            duration: 1.5 + Math.random(),
            delay: Math.random() * 2,
            repeat: 3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating emojis */}
      {['🎉', '🎊', '✨', '🚀', '⭐', '🎯', '🔥', '💫'].map((emoji, index) => (
        <motion.div
          key={`emoji-${index}`}
          className="absolute text-4xl"
          style={{
            left: `${20 + (index * 10)}%`,
            top: `${20 + (index * 5)}%`,
          }}
          initial={{ 
            scale: 0, 
            rotate: -180, 
            opacity: 0,
            y: 0 
          }}
          animate={{ 
            scale: [0, 1.2, 1], 
            rotate: [0, 360], 
            opacity: [0, 1, 1],
            y: [-20, 0, -20]
          }}
          transition={{
            duration: 3,
            delay: index * 0.3,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut"
          }}
        >
          {emoji}
        </motion.div>
      ))}
      
      {/* Success message overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="text-center bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <motion.div
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 300 }}
          >
            🎉 Welcome to Early Access! 🎉
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
          >
            Thank you for joining! We'll notify you as soon as CommuteTimely launches.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const { isLoading, isSubmitted, error, submitEarlyAccess, reset } = useEarlyAccess();
  const [isMounted, setIsMounted] = useState(false);
  const [showFullScreenAnimation, setShowFullScreenAnimation] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    useCase: '',
    location: '',
    commuteChallenge: '',
    device: ''
  });

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitEarlyAccess(formData);
    if (result.success) {
      // Show full screen animation immediately
      setShowFullScreenAnimation(true);
      
      // Close modal and reset after 3 seconds
      setTimeout(() => {
        setShowFullScreenAnimation(false);
        onClose();
        reset();
        setFormData({
          email: '',
          name: '',
          useCase: '',
          location: '',
          commuteChallenge: '',
          device: ''
        });
      }, 3000);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      reset();
      setFormData({
        email: '',
        name: '',
        useCase: '',
        location: '',
        commuteChallenge: '',
        device: ''
      });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isOpen ? 'open' : 'closed'}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        suppressHydrationWarning
      >
        <motion.div
          className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-white/10">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              disabled={isLoading}
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Join Early Access</h2>
              <p className="text-gray-300 text-sm">
                Be among the first to experience CommuteTimely
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                {/* Use Case */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-300 mb-2">
                    How will you use CommuteTimely?
                  </label>
                  <select
                    id="useCase"
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-blue-400 focus:ring-blue-400/20"
                  >
                    <option value="">Select an option</option>
                    <option value="office-worker">Office worker</option>
                    <option value="university-staff">University staff</option>
                    <option value="delivery-driver">Delivery driver</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Location/Commute Type */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                    Location/Commute Type
                  </label>
                  <Input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Downtown, Suburbs, Rural"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                {/* Biggest Challenge */}
                <div>
                  <label htmlFor="commuteChallenge" className="block text-sm font-medium text-gray-300 mb-2">
                    What's your biggest commute challenge?
                  </label>
                  <textarea
                    id="commuteChallenge"
                    value={formData.commuteChallenge}
                    onChange={(e) => setFormData({ ...formData, commuteChallenge: e.target.value })}
                    placeholder="Tell us about your commute struggles..."
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                  />
                </div>

                {/* Device */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What device will you use?
                  </label>
                  <div className="flex space-x-3">
                    {['Android', 'iOS', 'Both'].map((device) => (
                      <label key={device} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="device"
                          value={device}
                          checked={formData.device === device}
                          onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                          className="text-blue-500 focus:ring-blue-400"
                        />
                        <span className="text-sm text-gray-300">{device}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Join Early Access'}
                </Button>
              </form>
            ) : (
              <motion.div
                className="text-center py-8 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                >
                  🎉 Welcome to Early Access! 🎉
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                >
                  Thank you for joining! We'll notify you as soon as CommuteTimely launches.
                </motion.p>
                
                {/* Celebration Emojis */}
                <motion.div 
                  className="flex justify-center space-x-2 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                >
                  {['🚀', '⭐', '🎯', '🔥', '💫'].map((emoji, index) => (
                    <motion.span
                      key={index}
                      className="text-2xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.8 + index * 0.1, 
                        type: "spring", 
                        stiffness: 300 
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Full Screen Party Animation */}
      <AnimatePresence>
        {showFullScreenAnimation && (
          <FullScreenPartyAnimation />
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
