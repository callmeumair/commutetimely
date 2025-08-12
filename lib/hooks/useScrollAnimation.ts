import { useRef, useEffect, useState, useCallback, useMemo } from 'react'
import { useInView } from 'framer-motion'
import { getDeviceCapabilities, getOptimizedVariants } from '@/lib/animations'

// Enhanced scroll animation hook with performance monitoring
export const useScrollAnimation = (amount = 0.1, variants?: any) => {
  const ref = useRef<HTMLElement>(null)
  const [performance, setPerformance] = useState({
    fps: 60,
    memory: 0,
    renderTime: 0
  })
  
  const deviceCapabilities = useMemo(() => getDeviceCapabilities(), [])
  
  const isInView = useInView(ref, {
    amount,
    once: true, // Only animate once for performance
    margin: deviceCapabilities.isLowEnd ? '-50px' : '-100px' // Reduce margin for low-end devices
  })

  // Performance monitoring
  useEffect(() => {
    if (!isInView) return

    let frameCount = 0
    let lastTime = globalThis.performance.now()
    
    const measurePerformance = () => {
      frameCount++
      const currentTime = globalThis.performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        setPerformance(prev => ({ ...prev, fps: Math.min(fps, 60) }))
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(measurePerformance)
    }

    measurePerformance()
  }, [isInView])

  // Memory monitoring
  useEffect(() => {
    if ('memory' in globalThis.performance) {
      const memory = (globalThis.performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
      if (memory) {
        setPerformance(prev => ({
          ...prev,
          memory: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }))
      }
    }
  }, [])

  // Get optimized variants based on device capabilities
  const optimizedVariants = useMemo(() => {
    if (variants) {
      return getOptimizedVariants(variants)
    }
    return undefined
  }, [variants, deviceCapabilities])

  return { 
    ref, 
    isInView, 
    performance, 
    deviceCapabilities,
    variants: optimizedVariants
  }
}

// Staggered animation hook for lists
export const useStaggerAnimation = (items: any[], staggerDelay = 0.08) => {
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set())
  const deviceCapabilities = useMemo(() => getDeviceCapabilities(), [])
  
  // Adjust stagger delay based on device capabilities
  const optimizedStaggerDelay = useMemo(() => {
    if (deviceCapabilities.isLowEnd || deviceCapabilities.isMobile) {
      return staggerDelay * 0.5 // Faster for low-end devices
    }
    return staggerDelay
  }, [staggerDelay, deviceCapabilities])

  const triggerAnimation = useCallback((index: number) => {
    setAnimatedItems(prev => new Set([...prev, index]))
  }, [])

  const resetAnimations = useCallback(() => {
    setAnimatedItems(new Set())
  }, [])

  // Auto-trigger animations with performance optimization
  useEffect(() => {
    if (deviceCapabilities.isLowEnd) {
      // For low-end devices, trigger all animations at once
      const timer = setTimeout(() => {
        setAnimatedItems(new Set(items.map((_, index) => index)))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      // For high-end devices, use staggered approach
      const timers = items.map((_, index) => 
        setTimeout(() => triggerAnimation(index), index * optimizedStaggerDelay * 1000)
      )
      return () => timers.forEach(timer => clearTimeout(timer))
    }
  }, [items, optimizedStaggerDelay, deviceCapabilities, triggerAnimation])

  return {
    animatedItems,
    triggerAnimation,
    resetAnimations,
    isAnimated: (index: number) => animatedItems.has(index),
    staggerDelay: optimizedStaggerDelay
  }
}

// Performance monitoring hook
export const useAnimationPerformance = () => {
  const [metrics, setMetrics] = useState({
    fps: 60,
    memory: 0,
    renderTime: 0,
    animationCount: 0,
    deviceType: 'desktop'
  })

  const deviceCapabilities = useMemo(() => getDeviceCapabilities(), [])

  // FPS monitoring
  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationFrameId: number

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        setMetrics(prev => ({ 
          ...prev, 
          fps: Math.min(fps, 60),
          deviceType: deviceCapabilities.isMobile ? 'mobile' : 
                     deviceCapabilities.isLowEnd ? 'low-end' : 'desktop'
        }))
        frameCount = 0
        lastTime = currentTime
      }
      
      animationFrameId = requestAnimationFrame(measureFPS)
    }

    measureFPS()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [deviceCapabilities])

  // Memory monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
        if (memory) {
          setMetrics(prev => ({
            ...prev,
            memory: Math.round(memory.usedJSHeapSize / 1024 / 1024)
          }))
        }
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Performance recommendations
  const getRecommendations = useCallback(() => {
    const { fps, memory, deviceType } = metrics
    
    const recommendations = []
    
    if (fps < 30) {
      recommendations.push('Reduce animation complexity')
      recommendations.push('Use simpler transitions')
    }
    
    if (memory > 100) {
      recommendations.push('Optimize memory usage')
      recommendations.push('Reduce DOM elements')
    }
    
    if (deviceType === 'mobile' || deviceType === 'low-end') {
      recommendations.push('Use lightweight animations')
      recommendations.push('Reduce blur effects')
    }
    
    return recommendations
  }, [metrics])

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    const { fps, memory } = metrics
    
    let score = 100
    
    if (fps < 30) score -= 30
    else if (fps < 50) score -= 15
    
    if (memory > 100) score -= 20
    else if (memory > 50) score -= 10
    
    return Math.max(0, score)
  }, [metrics])

  return {
    metrics,
    deviceCapabilities,
    recommendations: getRecommendations(),
    performanceScore: getPerformanceScore(),
    isLowPerformance: getPerformanceScore() < 70
  }
}

// Intersection observer hook for better performance
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
      }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return { ref, isIntersecting, entry }
}

// Throttled scroll hook for performance
export const useThrottledScroll = (delay = 16) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const updateScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)
    setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up')
    lastScrollY.current = currentScrollY
    ticking.current = false
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScroll)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateScroll])

  return { scrollY, scrollDirection }
}

// Device-aware animation hook
export const useDeviceAwareAnimation = (variants: any) => {
  const deviceCapabilities = useMemo(() => getDeviceCapabilities(), [])
  
  const optimizedVariants = useMemo(() => {
    return getOptimizedVariants(variants)
  }, [variants, deviceCapabilities])

  const animationConfig = useMemo(() => {
    if (deviceCapabilities.hasReducedMotion) {
      return { duration: 0.1, ease: "easeOut" }
    }
    
    if (deviceCapabilities.isLowEnd || deviceCapabilities.isMobile) {
      return { duration: 0.3, ease: "easeOut" }
    }
    
    return { duration: 0.5, ease: "easeOut" }
  }, [deviceCapabilities])

  return {
    variants: optimizedVariants,
    config: animationConfig,
    deviceCapabilities,
    shouldAnimate: !deviceCapabilities.hasReducedMotion
  }
}

export default {
  useScrollAnimation,
  useStaggerAnimation,
  useAnimationPerformance,
  useIntersectionObserver,
  useThrottledScroll,
  useDeviceAwareAnimation
}

