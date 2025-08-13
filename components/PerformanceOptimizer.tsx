'use client'

import { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
}

export function PerformanceOptimizer({ children, threshold = 0.1 }: PerformanceOptimizerProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Delay rendering slightly for better performance
          setTimeout(() => setShouldRender(true), 100);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const element = document.body;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming;
            if (firstInputEntry.processingStart) {
              console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Fallback for older browsers
      }

      return () => observer.disconnect();
    }
  }, []);

  if (!shouldRender) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <div className="text-gray-500 text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// Lazy loading wrapper for heavy components
export function LazyLoad({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setIsLoaded(true));
    } else {
      // Fallback for older browsers
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, []);

  if (!isLoaded) {
    return fallback || (
      <div className="animate-pulse">
        <div className="w-full h-32 bg-gray-800 rounded-lg"></div>
      </div>
    );
  }

  return <>{children}</>;
}
