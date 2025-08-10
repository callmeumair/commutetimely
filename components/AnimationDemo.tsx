'use client'

import { motion } from 'framer-motion'

/**
 * Demo component showcasing the new Tailwind animations and spacing utilities
 * This component demonstrates the enhanced spacing scale and custom animations
 * with proper prefers-reduced-motion support
 */
export default function AnimationDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Animation & Spacing Demo
        </motion.h1>

        {/* Extended Spacing Scale Demo */}
        <section className="mb-20">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Extended Spacing Scale
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Showcase various spacing values */}
            {[18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 88, 90, 94, 98, 102, 106, 110, 114, 118, 122, 126, 128, 130, 134, 138, 142, 144, 146, 150, 154, 158, 162, 166, 170, 174, 178, 182, 186, 190, 194, 198, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 256].slice(0, 24).map((spacing) => (
              <motion.div
                key={spacing}
                className={`bg-blue-500 rounded-lg flex items-center justify-center text-white font-mono text-sm`}
                style={{ width: `var(--tw-spacing-${spacing})`, height: `var(--tw-spacing-${spacing})` }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: spacing * 0.01 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {spacing}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Animations Demo */}
        <section className="mb-20">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Custom Animations
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* fadeIn Animation */}
            <motion.div
              className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-8 text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">fadeIn</h3>
              <p className="text-teal-100">Smooth fade in with upward motion</p>
              <div className="mt-4 motion-safe:animate-fadeIn motion-reduce:animate-none">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto animate-pulse"></div>
              </div>
            </motion.div>

            {/* slideDown Animation */}
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">slideDown</h3>
              <p className="text-purple-100">Slide down from above</p>
              <div className="mt-4 motion-safe:animate-slideDown motion-reduce:animate-none">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto animate-bounce"></div>
              </div>
            </motion.div>

            {/* scaleIn Animation */}
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">scaleIn</h3>
              <p className="text-orange-100">Scale in from smaller size</p>
              <div className="mt-4 motion-safe:animate-scaleIn motion-reduce:animate-none">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto animate-ping"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Prefers Reduced Motion Demo */}
        <section className="mb-20">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Accessibility Features
          </motion.h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Prefers Reduced Motion Support</h3>
            <p className="text-gray-300 mb-6">
              These animations respect the user&apos;s motion preferences. Users with vestibular disorders 
              or who prefer reduced motion will see static content instead of animations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-green-400 font-semibold mb-2">Motion Safe</h4>
                <p className="text-green-200 text-sm mb-4">
                  Users who prefer motion will see smooth animations
                </p>
                <div className="motion-safe:animate-fadeIn motion-reduce:animate-none">
                  <div className="w-12 h-12 bg-green-400 rounded-lg mx-auto animate-pulse"></div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-blue-400 font-semibold mb-2">Motion Reduced</h4>
                <p className="text-blue-200 text-sm mb-4">
                  Users who prefer reduced motion will see static content
                </p>
                <div className="motion-reduce:animate-none">
                  <div className="w-12 h-12 bg-blue-400 rounded-lg mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-20">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Usage Examples
          </motion.h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Tailwind Classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Spacing Classes</h4>
                <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                  p-18, m-22, w-26, h-30, gap-34, space-x-38
                </code>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Animation Classes</h4>
                <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                  motion-safe:animate-fadeIn<br/>
                  motion-safe:animate-slideDown<br/>
                  motion-safe:animate-scaleIn
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
