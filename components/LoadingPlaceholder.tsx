'use client'

import { motion } from 'framer-motion'

interface LoadingPlaceholderProps {
  className?: string
  height?: string
  width?: string
  rounded?: boolean
}

const LoadingPlaceholder = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full',
  rounded = true 
}: LoadingPlaceholderProps) => {
  return (
    <motion.div
      className={`${width} ${height} ${rounded ? 'rounded' : ''} bg-gray-700 ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

export default LoadingPlaceholder 