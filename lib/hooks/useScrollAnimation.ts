import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

// Custom hook for optimized scroll animations
export const useScrollAnimation = (amount = 0.1) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, {
    amount,
    once: true, // Only animate once for performance
  })

  return { ref, isInView }
}

// Hook for staggered animations with performance optimization
export const useStaggerAnimation = (itemsCount: number, staggerDelay = 0.1) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedItems = new Array(itemsCount).fill(false)
      setAnimatedItems(newAnimatedItems)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [itemsCount])

  const triggerItem = (index: number) => {
    setTimeout(() => {
      setAnimatedItems(prev => {
        const newItems = [...prev]
        newItems[index] = true
        return newItems
      })
    }, index * staggerDelay * 1000)
  }

  return { animatedItems, triggerItem }
}

// Hook for performance monitoring
export const useAnimationPerformance = () => {
  const [fps, setFps] = useState(60)
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())

  useEffect(() => {
    let animationId: number

    const measureFPS = (currentTime: number) => {
      frameCount.current++
      
      if (currentTime - lastTime.current >= 1000) {
        setFps(Math.round((frameCount.current * 1000) / (currentTime - lastTime.current)))
        frameCount.current = 0
        lastTime.current = currentTime
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    animationId = requestAnimationFrame(measureFPS)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return { fps }
}
