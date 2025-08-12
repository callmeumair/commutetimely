'use client'

import { ImageWithFallback } from './ImageWithFallback'
import { motion } from 'framer-motion'

export default function ImageDemoSection() {
  const demoImages = [
    {
      src: '/demo-image-1.jpg',
      alt: 'Demo image showing traffic monitoring',
      className: 'w-full h-48 object-cover rounded-lg'
    },
    {
      src: '/demo-image-2.jpg',
      alt: 'Demo image showing mobile app interface',
      className: 'w-full h-48 object-cover rounded-lg'
    },
    {
      src: '/demo-image-3.jpg',
      alt: 'Demo image showing route optimization',
      className: 'w-full h-48 object-cover rounded-lg'
    }
  ]

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

  return (
    <section className="py-20 lg:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Image</span>
            <br />
            <span className="text-blue-400">Fallback Demo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our ImageWithFallback component gracefully handles missing or failed images with intelligent fallbacks.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {demoImages.map((image, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card group"
            >
              <div className="mb-4">
                <ImageWithFallback 
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Demo Image {index + 1}
              </h3>
              <p className="text-gray-300 text-sm">
                This image will show a fallback if it fails to load, demonstrating the component's error handling capabilities.
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-dark-900 rounded-2xl p-8 border border-dark-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Component Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Automatic Fallback</h4>
              <p className="text-gray-300">
                When an image fails to load, the component automatically displays a meaningful fallback image with error context.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Accessibility First</h4>
              <p className="text-gray-300">
                Maintains proper alt text and accessibility attributes even when showing fallback content.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Flexible Styling</h4>
              <p className="text-gray-300">
                Accepts all standard img attributes plus custom className and style for seamless integration.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-2">Error Tracking</h4>
              <p className="text-gray-300">
                Uses data attributes to track original image sources for debugging and analytics.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
