'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cardHover } from '@/lib/animations'

interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedCard = ({ 
  children, 
  className = '',
  delay = 0,
  ...props 
}: AnimatedCardProps) => {
  return (
    <motion.div
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      className={`card ${className}`}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
