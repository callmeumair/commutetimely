'use client'

import { LazyMotion, domAnimation, domMax } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationProviderProps {
  children: ReactNode
  features?: 'domAnimation' | 'domMax'
}

export const AnimationProvider = ({ 
  children, 
  features = 'domAnimation' 
}: AnimationProviderProps) => {
  // Use domAnimation for smaller bundle size (domMax includes more features)
  const motionFeatures = features === 'domMax' ? domMax : domAnimation

  return (
    <LazyMotion features={motionFeatures} strict>
      {children}
    </LazyMotion>
  )
}

export default AnimationProvider
