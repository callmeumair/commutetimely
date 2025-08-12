import { Variants, Spring } from 'framer-motion'

// Device detection utility
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') return { isLowEnd: false, isMobile: false, hasReducedMotion: false }
  
  const userAgent = navigator.userAgent.toLowerCase()
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent)
  const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  return { isLowEnd, isMobile, hasReducedMotion }
}

// Performance-optimized spring configurations
export const springConfig: Spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
}

export const lightSpringConfig: Spring = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 0.6,
}

export const mobileSpringConfig: Spring = {
  type: "spring",
  stiffness: 150,
  damping: 20,
  mass: 0.5,
}

// Base animation variants with device optimization
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: springConfig
  }
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: springConfig
  }
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springConfig
  }
}

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springConfig
  }
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: springConfig
  }
}

// Device-optimized stagger animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      ...(() => {
        const { isLowEnd, isMobile } = getDeviceCapabilities()
        if (isLowEnd || isMobile) {
          return { staggerChildren: 0.05, delayChildren: 0.05 }
        }
        return {}
      })()
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) {
        return lightSpringConfig
      }
      return springConfig
    })()
  }
}

// Performance-aware button animations
export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) return 1.02
      return 1.05
    })(),
    transition: lightSpringConfig
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
}

// Optimized card hover effects
export const cardHover: Variants = {
  initial: { 
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: {
    y: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) return -2
      return -8
    })(),
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: lightSpringConfig
  }
}

// Device-aware floating animation
export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) return [-2, 2, -2]
      return [-8, 8, -8]
    })(),
    transition: {
      duration: (() => {
        const { isLowEnd, isMobile } = getDeviceCapabilities()
        if (isLowEnd || isMobile) return 3
        return 4
      })(),
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

// Optimized page transitions
export const pageTransition: Variants = {
  initial: { 
    opacity: 0,
    y: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) return 10
      return 20
    })()
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) {
        return { duration: 0.3, ease: "easeOut" }
      }
      return { duration: 0.5, ease: "easeOut" }
    })()
  },
  exit: { 
    opacity: 0,
    y: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) return -10
      return -20
    })(),
    transition: { duration: 0.2, ease: "easeIn" }
  }
}

// Performance-optimized scroll reveal
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) return 15
      return 30
    })(),
    filter: "blur(2px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) {
        return { duration: 0.4, ease: "easeOut" }
      }
      return { duration: 0.6, ease: "easeOut" }
    })()
  }
}

// Grid animations with device optimization
export const gridStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: (() => {
        const { isLowEnd, isMobile } = getDeviceCapabilities()
        if (isLowEnd || isMobile) return 0.05
        return 0.08
      })(),
      delayChildren: 0.1
    }
  }
}

export const gridItem: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) return 10
      return 20
    })()
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) {
        return { duration: 0.3, ease: "easeOut" }
      }
      return { duration: 0.5, ease: "easeOut" }
    })()
  }
}

// Reduced motion variants for accessibility
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

// Get optimized variants based on device capabilities
export const getOptimizedVariants = (baseVariants: Variants) => {
  const { hasReducedMotion, isLowEnd, isMobile } = getDeviceCapabilities()
  
  if (hasReducedMotion) {
    return reducedMotionVariants
  }
  
  if (isLowEnd || isMobile) {
    // Simplify animations for low-end devices
    return {
      ...baseVariants,
      visible: {
        ...baseVariants.visible,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    }
  }
  
  return baseVariants
}

// Performance monitoring variants
export const performanceMonitor: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.2, ease: "easeIn" }
  }
}

// Loading states with device optimization
export const loadingStates: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  loading: { 
    opacity: 1, 
    scale: 1,
    transition: (() => {
      const { isLowEnd, isMobile } = getDeviceCapabilities()
      if (isLowEnd || isMobile) {
        return { duration: 0.2, ease: "easeOut" }
      }
      return { duration: 0.3, ease: "easeOut" }
    })()
  },
  loaded: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

// Error states
export const errorStates: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

// Success states
export const successStates: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

// Micro-interactions for better UX
export const microInteractions = {
  tap: { scale: 0.95, transition: { duration: 0.1 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  focus: { 
    scale: 1.01, 
    boxShadow: "0 0 0 3px rgba(14, 165, 233, 0.3)",
    transition: { duration: 0.2 }
  }
}

// Export all variants
export default {
  springConfig,
  lightSpringConfig,
  mobileSpringConfig,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  buttonHover,
  cardHover,
  float,
  pageTransition,
  scrollReveal,
  gridStagger,
  gridItem,
  reducedMotionVariants,
  getOptimizedVariants,
  performanceMonitor,
  loadingStates,
  errorStates,
  successStates,
  microInteractions
}
