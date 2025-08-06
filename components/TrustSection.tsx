"use client"

import { motion } from 'framer-motion'
import { Star, Award, Users, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'

const reviews = [
  {
    platform: "App Store",
    rating: 4.8,
    count: 1250,
    text: "Finally, an app that actually helps me be on time!",
    author: "Sarah M."
  },
  {
    platform: "Play Store", 
    rating: 4.7,
    count: 890,
    text: "Game changer for my daily commute. Highly recommend!",
    author: "Mike T."
  }
]

const partners = [
  { name: "Google Maps", logo: "🗺️" },
  { name: "Waze", logo: "🚗" },
  { name: "Apple Maps", logo: "🍎" },
  { name: "Uber", logo: "🚕" },
  { name: "Lyft", logo: "🚙" },
  { name: "Transit", logo: "🚌" }
]

const press = [
  {
    outlet: "TechCrunch",
    title: "CommuteTimely Raises $2M to Revolutionize Commute Planning",
    date: "2024-12-15"
  },
  {
    outlet: "Product Hunt",
    title: "Product of the Day - CommuteTimely",
    date: "2024-12-10"
  },
  {
    outlet: "The Verge",
    title: "This App Could End Your Commute Stress Forever",
    date: "2024-12-05"
  }
]

export default function TrustSection() {
  const [reviewCount, setReviewCount] = useState(0)
  const [totalRating, setTotalRating] = useState(0)

  useEffect(() => {
    let count = 0, rating = 0
    const countEnd = 2140, ratingEnd = 4.75
    const step = () => {
      if (count < countEnd) count += 50
      if (rating < ratingEnd) rating += 0.1
      setReviewCount(count > countEnd ? countEnd : count)
      setTotalRating(rating > ratingEnd ? ratingEnd : Math.round(rating * 100) / 100)
      if (count < countEnd || rating < ratingEnd) setTimeout(step, 32)
    }
    step()
  }, [])

  return (
    <section className="fullscreen-section bg-black relative">
      <div className="container-max w-full h-full flex flex-col justify-center">
        {/* Reviews Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            See what our users and partners are saying about CommuteTimely
          </p>
        </motion.div>

        {/* Review Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center glass p-6">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {totalRating}★
            </div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center glass p-6">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {reviewCount.toLocaleString()}+
            </div>
            <div className="text-gray-400">Reviews</div>
          </div>
          <div className="text-center glass p-6">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              50+
            </div>
            <div className="text-gray-400">Cities Supported</div>
          </div>
        </motion.div>

        {/* Store Reviews */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="glass p-6 hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{review.platform}</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">— {review.author}</span>
                <span className="text-gray-400">{review.count} reviews</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Integrated with Leading Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="glass p-4 text-center hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{partner.logo}</div>
                <div className="text-sm text-gray-400">{partner.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Mentions */}
        <motion.div 
          className="glass p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Featured in the Press
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {press.map((article, index) => (
              <motion.div
                key={index}
                className="p-4 hover:bg-white/5 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-brand-accent font-semibold mb-2">
                  {article.outlet}
                </div>
                <div className="text-white mb-2">
                  {article.title}
                </div>
                <div className="text-gray-400 text-sm">
                  {new Date(article.date).toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 