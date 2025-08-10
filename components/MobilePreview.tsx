'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Zap } from 'lucide-react'
import { COLORS } from '../lib/constants/colors'
import LazyLottie from './LazyLottie'

interface MobilePreviewProps {
  className?: string
  animationData?: object
  fallbackType?: 'branding' | 'screenshots' | 'demo' | 'auto'
}

const MobilePreview = ({ 
  className = '', 
  animationData, 
  fallbackType = 'auto' 
}: MobilePreviewProps) => {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const [currentFallback, setCurrentFallback] = useState<'branding' | 'screenshots' | 'demo'>('branding')

  // Auto-detect fallback type if not specified
  useEffect(() => {
    if (fallbackType === 'auto') {
      if (animationData) {
        setCurrentFallback('demo')
      } else {
        setCurrentFallback('branding')
      }
    } else {
      setCurrentFallback(fallbackType)
    }
  }, [fallbackType, animationData])

  // Show fallback after a delay if animation doesn't load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimationLoaded) {
        setShowFallback(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [isAnimationLoaded])

  // Handle animation load success
  const handleAnimationLoad = () => {
    setIsAnimationLoaded(true)
    setShowFallback(false)
  }

  // Handle animation load error
  const handleAnimationError = () => {
    setIsAnimationLoaded(false)
    setShowFallback(true)
  }

  // App screenshot mockup data
  const appScreenshots = [
    {
      id: 'home',
      title: 'Smart Dashboard',
      description: 'Real-time commute insights',
      icon: <Clock className="w-6 h-6" />,
      color: COLORS.primary.main
    },
    {
      id: 'route',
      title: 'Route Planning',
      description: 'Optimize your journey',
      icon: <MapPin className="w-6 h-6" />,
      color: COLORS.accent.gold
    },
    {
      id: 'notifications',
      title: 'Smart Alerts',
      description: 'Never miss your departure',
      icon: <Zap className="w-6 h-6" />,
      color: COLORS.accent.blue
    }
  ]

  // Branding placeholder content
  const brandingContent = {
    logo: '🚗',
    title: 'CommuteTimely',
    subtitle: 'Smart Commute Planning',
    features: [
      { icon: '⏰', text: 'Real-time Updates' },
      { icon: '🗺️', text: 'Route Optimization' },
      { icon: '🔔', text: 'Smart Notifications' },
      { icon: '📱', text: 'Cross-Platform' }
    ]
  }

  // Demo animation content
  const demoContent = {
    elements: [
      { icon: '🚗', label: 'Car', delay: 0 },
      { icon: '🚌', label: 'Bus', delay: 0.5 },
      { icon: '🚲', label: 'Bike', delay: 1 },
      { icon: '🚶‍♂️', label: 'Walk', delay: 1.5 }
    ]
  }

  // Render branding placeholder
  const renderBrandingPlaceholder = () => (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <motion.div 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 mobile-preview-icon"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {brandingContent.logo}
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 mobile-preview-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {brandingContent.title}
      </motion.h3>

      {/* Subtitle */}
      <motion.p 
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-4 sm:mb-5 md:mb-6 lg:mb-8 mobile-preview-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {brandingContent.subtitle}
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mobile-preview-grid">
        {brandingContent.features.map((feature, index) => (
          <motion.div
            key={feature.text}
            className="flex flex-col items-center p-2 sm:p-3 md:p-4 lg:p-5 bg-gray-800/50 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2 mobile-preview-icon">{feature.icon}</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 text-center leading-tight mobile-preview-text">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  // Render app screenshots placeholder
  const renderScreenshotsPlaceholder = () => (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main screenshot preview */}
      <motion.div 
        className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-2 sm:top-3 md:top-4 lg:top-5 left-2 sm:left-3 md:left-4 lg:left-5 right-2 sm:right-3 md:right-4 lg:right-5 h-1 sm:h-1.5 md:h-2 bg-gray-700 rounded-full" />
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-2 sm:left-3 md:left-4 lg:left-5 right-2 sm:right-3 md:right-4 lg:right-5 h-6 sm:h-8 md:h-10 lg:h-12 bg-gray-700 rounded-lg" />
        <div className="absolute top-12 sm:top-16 md:top-20 lg:top-24 left-2 sm:left-3 md:left-4 lg:left-5 right-2 sm:right-3 md:right-4 lg:right-5 h-3 sm:h-4 md:h-5 lg:h-6 bg-gray-600 rounded" />
        <div className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-2 sm:left-3 md:left-4 lg:left-5 right-2 sm:right-3 md:right-4 lg:right-5 h-2 sm:h-3 md:h-4 lg:h-5 bg-gray-600 rounded" />
      </motion.div>

      {/* Screenshot indicators */}
      <div className="flex space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3">
        {appScreenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.id}
            className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-full bg-gray-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
          />
        ))}
      </div>

      {/* Feature highlights */}
      <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mobile-preview-grid">
        {appScreenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.id}
            className="flex items-center space-x-2 sm:space-x-2.5 md:space-x-3 lg:space-x-3.5 text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
          >
            <div 
              className="w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 rounded-lg flex items-center justify-center flex-shrink-0 mobile-preview-icon"
              style={{ backgroundColor: screenshot.color }}
            >
              {screenshot.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white truncate mobile-preview-text">{screenshot.title}</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 truncate mobile-preview-text">{screenshot.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  // Render demo animation placeholder
  const renderDemoPlaceholder = () => (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated transport modes */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mobile-preview-grid">
        {demoContent.elements.map((element) => (
          <motion.div
            key={element.label}
            className="flex flex-col items-center p-2 sm:p-3 md:p-4 lg:p-5 bg-gray-800/50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: element.delay }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.span 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 mobile-preview-icon"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: element.delay }}
            >
              {element.icon}
            </motion.span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 text-center leading-tight mobile-preview-text">{element.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Animated progress bar */}
      <motion.div 
        className="w-full max-w-24 sm:max-w-28 md:max-w-32 lg:max-w-36 xl:max-w-40 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 2.5 }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.p 
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-center leading-tight mobile-preview-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        Loading your commute...
      </motion.p>
    </motion.div>
  )

  // Render the appropriate fallback content
  const renderFallbackContent = () => {
    switch (currentFallback) {
      case 'branding':
        return renderBrandingPlaceholder()
      case 'screenshots':
        return renderScreenshotsPlaceholder()
      case 'demo':
        return renderDemoPlaceholder()
      default:
        return renderBrandingPlaceholder()
    }
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Main content area */}
      <div className="w-full h-full relative">
        {/* Lottie animation (if available) */}
        {animationData && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimationLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <LazyLottie
              animationData={animationData}
              className="w-full h-full"
              onDOMLoaded={handleAnimationLoad}
              onError={handleAnimationError}
            />
          </motion.div>
        )}

        {/* Fallback content */}
        {showFallback && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderFallbackContent()}
          </motion.div>
        )}

        {/* Loading state */}
        {!isAnimationLoaded && !showFallback && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-3">
              <motion.div
                className="w-8 h-8 border-2 border-gray-600 border-t-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-sm text-gray-400">Loading...</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MobilePreview
