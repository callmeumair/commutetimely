import { Variants, Spring } from 'framer-motion'

// Optimized spring configurations for smooth 60fps animations
export const springConfig: Spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
}

export const gentleSpring: Spring = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 1,
}

export const quickSpring: Spring = {
  type: "spring",
  stiffness: 400,
  damping: 35,
  mass: 0.6,
}

// Reusable animation variants for consistent patterns
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

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: gentleSpring
  }
}

// Button hover animations
export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: quickSpring
  },
  tap: { 
    scale: 0.98,
    transition: quickSpring
  }
}

// Card hover animations
export const cardHover: Variants = {
  initial: { 
    y: 0,
    scale: 1,
    filter: "brightness(1)"
  },
  hover: { 
    y: -8,
    scale: 1.02,
    filter: "brightness(1.1)",
    transition: gentleSpring
  }
}

// Floating animation for background elements
export const float: Variants = {
  initial: { y: 0 },
  animate: { 
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Page transition animations
export const pageTransition: Variants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: springConfig
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
}

// Intersection Observer variants for scroll-triggered animations
export const scrollReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...springConfig,
      duration: 0.8
    }
  }
}

// Optimized stagger for grid layouts
export const gridStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
}

export const gridItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: gentleSpring
  }
}
