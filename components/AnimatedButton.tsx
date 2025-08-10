'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  withSparkle?: boolean
  withRipple?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const AnimatedButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  withSparkle = false,
  withRipple = true,
  type = 'button',
  'aria-label': ariaLabel
}: AnimatedButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black touch-target'
  
  const variantClasses = {
    primary: 'bg-[#2EBFA5] text-white shadow-lg hover:shadow-xl hover:shadow-[#2EBFA5]/25 focus:ring-[#2EBFA5] hover:bg-[#1E8372]',
    secondary: 'bg-transparent border-2 border-[#2EBFA5] text-[#2EBFA5] hover:bg-[#2EBFA5] hover:text-white focus:ring-[#2EBFA5]',
    outline: 'border-2 border-[#2EBFA5] text-[#2EBFA5] hover:bg-[#2EBFA5] hover:text-white focus:ring-[#2EBFA5]'
  }
  
  // Add inline style for gradient and glow
  const gradientStyle = variant === 'primary' ? {
    background: 'linear-gradient(90deg, #2EBFA5 0%, #1E8372 100%)',
    boxShadow: withSparkle ? '0 0 10px rgba(46,191,165,0.3)' : undefined
  } : {}
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]'
  }
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${withSparkle ? 'sparkle' : ''} ${withRipple ? 'ripple-button' : ''}`
  
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return
    
    if (withRipple) {
      const button = e.currentTarget
      const ripple = document.createElement('span')
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      
      ripple.style.width = ripple.style.height = size + 'px'
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.classList.add('ripple')
      
      button.appendChild(ripple)
      
      setTimeout(() => {
        ripple.remove()
      }, 600)
    }
    
    onClick?.()
  }
  
  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      whileHover={{ 
        scale: disabled ? 1 : 1.02,
        y: disabled ? 0 : -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98,
        y: 0,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        ...gradientStyle,
        // Use CSS variables for consistent spacing
        '--button-padding-x': size === 'sm' ? 'var(--space-md)' : size === 'md' ? 'var(--space-lg)' : 'var(--space-xl)',
        '--button-padding-y': size === 'sm' ? 'var(--space-sm)' : size === 'md' ? 'var(--space-md)' : 'var(--space-lg)',
        '--button-font-size': size === 'sm' ? 'var(--font-size-sm)' : size === 'md' ? 'var(--font-size-base)' : 'var(--font-size-lg)',
        '--button-min-height': size === 'sm' ? '44px' : size === 'md' ? '48px' : '56px'
      } as React.CSSProperties & { [key: string]: string }}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton 