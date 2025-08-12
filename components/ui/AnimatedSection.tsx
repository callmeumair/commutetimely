'use client'

import { motion, HTMLMotionProps, Variants } from 'framer-motion'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { scrollReveal } from '@/lib/animations'

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode
  variants?: Variants
  className?: string
  amount?: number
}

export const AnimatedSection = ({ 
  children, 
  variants = scrollReveal,
  className = '',
  amount = 0.1,
  ...props 
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation(amount)

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
