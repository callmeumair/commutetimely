'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import TestimonialVideoModal from './TestimonialVideoModal'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "TechCorp",
    rating: 5,
    text: "CommuteTimely has completely changed my morning routine. I used to stress about traffic, but now I get notified exactly when to leave. Never been late to work since!",
    avatar: "👩‍💼"
  },
  {
    name: "Mike Chen",
    role: "Software Engineer",
    company: "StartupXYZ",
    rating: 5,
    text: "The app is incredibly accurate. It even accounts for weather and special events. My commute time predictions are spot-on every time.",
    avatar: "👨‍💻"
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    company: "City Schools",
    rating: 5,
    text: "As a teacher, being on time is crucial. CommuteTimely helps me arrive at school with time to spare, even on busy days.",
    avatar: "👩‍🏫"
  },
  {
    name: "David Thompson",
    role: "Sales Executive",
    company: "Global Sales",
    rating: 5,
    text: "I travel between multiple client locations daily. This app has been a game-changer for my productivity and punctuality.",
    avatar: "👨‍💼"
  },
  {
    name: "Lisa Wang",
    role: "Healthcare Worker",
    company: "City Hospital",
    rating: 5,
    text: "Working in healthcare means every minute counts. CommuteTimely ensures I'm never late for my shifts, even during emergencies.",
    avatar: "👩‍⚕️"
  }
]

const TestimonialsSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Animated counters for stats
  const [users, setUsers] = useState(0)
  const [rating, setRating] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [cities, setCities] = useState(0)
  useEffect(() => {
    let u = 0, r = 0, a = 0, c = 0
    const uEnd = 10000, rEnd = 4.8, aEnd = 99, cEnd = 50
    const step = () => {
      if (u < uEnd) u += 200
      if (r < rEnd) r += 0.2
      if (a < aEnd) a += 2
      if (c < cEnd) c += 2
      setUsers(u > uEnd ? uEnd : u)
      setRating(r > rEnd ? rEnd : Math.round(r * 10) / 10)
      setAccuracy(a > aEnd ? aEnd : a)
      setCities(c > cEnd ? cEnd : c)
      if (u < uEnd || r < rEnd || a < aEnd || c < cEnd) setTimeout(step, 32)
    }
    step()
    // eslint-disable-next-line
  }, [])

  return (
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Join thousands of users who never worry about being late again
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card group transition-transform duration-200 hover:scale-105 hover:shadow-xl glass"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
            >
              <div className="space-y-4">
                {/* Quote icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-blue-500/50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Watch Video button for first testimonial */}
                {index === 0 && (
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="w-full mt-4 px-4 py-2 bg-brand-accent/20 hover:bg-brand-accent/30 text-brand-accent font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Video</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {users.toLocaleString()}+
            </div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {rating}★
            </div>
            <div className="text-gray-400">App Store Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {accuracy}%
            </div>
            <div className="text-gray-400">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {cities}+
            </div>
            <div className="text-gray-400">Cities Supported</div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <TestimonialVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="See CommuteTimely in Action"
        description="Watch how Sarah uses CommuteTimely to never be late again."
      />
    </section>
  )
}

export default TestimonialsSection 