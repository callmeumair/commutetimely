import axe from 'axe-core'

// Accessibility testing utility
export const runAccessibilityTest = async () => {
  if (typeof window !== 'undefined') {
    try {
      const results = await axe.run()
      console.log('Accessibility violations:', results.violations)
      return results
    } catch (error) {
      console.error('Accessibility test failed:', error)
    }
  }
}

// Motion-safe utilities
export const getMotionSafeValue = (value: string, fallback: string) => {
  if (typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return prefersReducedMotion ? fallback : value
  }
  return value
}

// Keyboard navigation utilities
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  onEnter?: () => void,
  onEscape?: () => void,
  onArrowUp?: () => void,
  onArrowDown?: () => void
) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      onEnter?.()
      break
    case 'Escape':
      event.preventDefault()
      onEscape?.()
      break
    case 'ArrowUp':
      event.preventDefault()
      onArrowUp?.()
      break
    case 'ArrowDown':
      event.preventDefault()
      onArrowDown?.()
      break
  }
}

// Focus management
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  }

  element.addEventListener('keydown', handleTabKey)
  return () => element.removeEventListener('keydown', handleTabKey)
} 