'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import Lottie to reduce initial bundle size
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-800 rounded-lg animate-pulse" />
  )
})

interface LazyLottieProps {
  animationData: object
  className?: string
  style?: React.CSSProperties
  loop?: boolean
  autoplay?: boolean
  width?: number | string
  height?: number | string
  onDOMLoaded?: () => void
  onError?: () => void
}

const LazyLottie = ({
  animationData,
  className = '',
  style = {},
  loop = true,
  autoplay = true,
  width,
  height,
  onDOMLoaded,
  onError
}: LazyLottieProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reduced loading delay for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 50) // Reduced from 100ms to 50ms

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const currentRef = containerRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Handle successful load
  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
    onDOMLoaded?.()
  }

  // Handle error
  const handleError = () => {
    setHasError(true)
    setIsLoaded(false)
    onError?.()
  }

  if (!isLoaded) {
    return (
      <div 
        ref={containerRef}
        className={`lazy-lottie-container bg-gray-800 rounded-lg animate-pulse ${className}`}
        style={{ width, height, ...style }}
      />
    )
  }

  if (hasError) {
    return (
      <div 
        ref={containerRef}
        className={`lazy-lottie-container bg-gray-700 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <div className="text-center p-4">
          <div className="text-2xl mb-2">⚠️</div>
          <div className="text-sm text-gray-400">Animation failed to load</div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      className={`lazy-lottie-container ${className}`}
      style={{ width, height, ...style }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isInView && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          className="w-full h-full"
          onDOMLoaded={handleLoad}
          onError={handleError}
        />
      )}
    </motion.div>
  )
}

export default LazyLottie 