'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, User, MapPin, Clock, Smartphone, CheckCircle } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { useEarlyAccess } from './use-early-access';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const { isLoading, isSubmitted, error, submitEarlyAccess, reset } = useEarlyAccess();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    useCase: '',
    location: '',
    commuteChallenge: '',
    device: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitEarlyAccess(formData);
    if (result.success) {
      // Form submitted successfully
      setTimeout(() => {
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
      }, 2000);
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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Welcome to Early Access!</h3>
                <p className="text-gray-300 text-sm">
                  Thank you for joining! We'll notify you as soon as CommuteTimely launches.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
