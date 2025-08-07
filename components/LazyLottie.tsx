'use client'

import { useState, useEffect } from 'react'
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
  animationData: any
  className?: string
  style?: React.CSSProperties
  loop?: boolean
  autoplay?: boolean
  width?: number | string
  height?: number | string
}

const LazyLottie = ({
  animationData,
  className = '',
  style = {},
  loop = true,
  autoplay = true,
  width,
  height
}: LazyLottieProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
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

    const element = document.querySelector('.lazy-lottie-container')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  if (!isLoaded) {
    return (
      <div 
        className={`lazy-lottie-container bg-gray-800 rounded-lg animate-pulse ${className}`}
        style={{ width, height, ...style }}
      />
    )
  }

  return (
    <motion.div
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
        />
      )}
    </motion.div>
  )
}

export default LazyLottie 