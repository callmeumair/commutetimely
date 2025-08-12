'use client'

import { motion } from 'framer-motion'
import { gridStagger, gridItem } from '@/lib/animations'

interface AnimatedGridProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export const AnimatedGrid = ({ 
  children, 
  className = '',
  staggerDelay = 0.08
}: AnimatedGridProps) => {
  const optimizedGridStagger = {
    ...gridStagger,
    visible: {
      ...gridStagger.visible,
      transition: {
        staggerChildren: staggerDelay,
      }
    }
  }

  return (
    <motion.div
      variants={optimizedGridStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedGridItemProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedGridItem = ({ 
  children, 
  className = '',
  delay = 0
}: AnimatedGridItemProps) => {
  return (
    <motion.div
      variants={gridItem}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedGrid
