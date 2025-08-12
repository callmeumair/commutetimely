'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import motion to prevent SSR
const MotionDiv = dynamic(() => import('motion/react').then(mod => ({ default: mod.motion.div })), {
  ssr: false,
  loading: () => null
});

export function ClientOnlyParticles() {
  const [mounted, setMounted] = useState(false);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    // Set particle count only after mounting
    const count = window.innerWidth < 768 ? 8 : 20;
    setParticleCount(count);
    setMounted(true);
  }, []);

  // Don't render anything during SSR or initial hydration
  if (!mounted || particleCount === 0) {
    return null;
  }

  if (!MotionDiv) {
    return null;
  }

  return (
    <div suppressHydrationWarning>
      {Array.from({ length: particleCount }).map((_, i) => {
        // Calculate positions only on client side
        const left = `${(i * 5.5) % 100}%`;
        const top = `${(i * 7.3) % 100}%`;
        
        return (
          <MotionDiv
            key={`particle-${i}-${left}-${top}`}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full opacity-60 sm:opacity-100"
            style={{
              left,
              top,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}
