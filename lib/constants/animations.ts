/**
 * Animation constants for CommuteTimely
 * Consistent animation timing and easing across the application
 */

export const ANIMATIONS = {
  // Duration constants
  duration: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.8s',
    slowest: '1.2s',
  },
  
  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Common animation configurations
  fadeIn: {
    duration: '0.3s',
    easing: 'ease-out',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  slideUp: {
    duration: '0.5s',
    easing: 'ease-out',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  
  slideInLeft: {
    duration: '0.5s',
    easing: 'ease-out',
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  
  slideInRight: {
    duration: '0.5s',
    easing: 'ease-out',
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  
  scaleIn: {
    duration: '0.3s',
    easing: 'ease-out',
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  
  // Hover animations
  hover: {
    scale: {
      small: { scale: 1.05 },
      medium: { scale: 1.1 },
      large: { scale: 1.15 },
    },
    lift: {
      small: { y: -2 },
      medium: { y: -4 },
      large: { y: -8 },
    },
  },
  
  // Page transitions
  pageTransition: {
    duration: '0.5s',
    easing: 'ease-in-out',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  
  // Stagger animations
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'ease-out' },
    },
  },
} as const;

export type AnimationKey = keyof typeof ANIMATIONS;
export type AnimationValue = typeof ANIMATIONS[AnimationKey];
