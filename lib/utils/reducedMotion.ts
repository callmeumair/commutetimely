// Utility for detecting reduced motion preferences
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Hook for getting reduced motion preference
export const useReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  
  // Return initial value
  return mediaQuery.matches
}

// Utility to conditionally apply animations
export const shouldAnimate = (): boolean => {
  return !prefersReducedMotion()
}

// Get animation variants based on user preference
export const getAnimationVariants = <T>(
  withAnimation: T,
  withoutAnimation: T
): T => {
  return shouldAnimate() ? withAnimation : withoutAnimation
}
