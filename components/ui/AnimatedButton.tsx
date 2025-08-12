'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { buttonHover } from '@/lib/animations'

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const AnimatedButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: AnimatedButtonProps) => {
  const baseClasses = 'font-semibold rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 focus:ring-offset-dark-950',
    secondary: 'bg-dark-700 hover:bg-dark-600 text-white border border-dark-600 focus:ring-dark-500 focus:ring-offset-dark-950',
    ghost: 'bg-transparent hover:bg-dark-700 text-white focus:ring-dark-500 focus:ring-offset-dark-950'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      variants={buttonHover}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
