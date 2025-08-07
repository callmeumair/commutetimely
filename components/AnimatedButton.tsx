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
}

const AnimatedButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  withSparkle = false,
  withRipple = true
}: AnimatedButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-[#2EBFA5] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-[#2EBFA5] text-[#2EBFA5] hover:bg-[#2EBFA5] hover:text-white',
    outline: 'border-2 border-[#2EBFA5] text-[#2EBFA5] hover:bg-[#2EBFA5] hover:text-white'
  }
  // Add inline style for gradient and glow
  const gradientStyle = variant === 'primary' ? {
    background: 'linear-gradient(90deg, #2EBFA5 0%, #1E8372 100%)',
    boxShadow: withSparkle ? '0 0 10px rgba(46,191,165,0.3)' : undefined
  } : {}
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${withSparkle ? 'sparkle' : ''} ${withRipple ? 'ripple-button' : ''}`
  
  const handleClick = (e: React.MouseEvent) => {
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
      className={buttonClasses}
      style={gradientStyle}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton 