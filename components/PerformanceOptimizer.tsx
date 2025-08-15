'use client'

import { useEffect, useState } from 'react';

// Performance API types
interface LayoutShift extends PerformanceEntry {
  value: number;
  sources?: Array<{
    node?: Node;
    currentRect?: DOMRectReadOnly;
    previousRect?: DOMRectReadOnly;
  }>;
}

interface LargestContentfulPaint extends PerformanceEntry {
  value: number;
  size: number;
  id: string;
  url: string;
}

interface FirstInput extends PerformanceEntry {
  value: number;
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface PerformanceResourceTiming extends PerformanceEntry {
  name: string;
  duration: number;
}

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
          setTimeout(() => setShouldRender(true), 50);
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

  // Enhanced performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            // Send to analytics if needed
            if (entry.startTime < 2500) {
              console.log('✅ LCP is good (< 2.5s)');
            } else {
              console.log('⚠️ LCP needs improvement (> 2.5s)');
            }
          }
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming;
            if (firstInputEntry.processingStart) {
              const fid = firstInputEntry.processingStart - firstInputEntry.startTime;
              console.log('FID:', fid);
              if (fid < 100) {
                console.log('✅ FID is good (< 100ms)');
              } else {
                console.log('⚠️ FID needs improvement (> 100ms)');
              }
            }
          }
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as LayoutShift;
            if (layoutShiftEntry.value < 0.1) {
              console.log('✅ CLS is good (< 0.1)');
            } else {
              console.log('⚠️ CLS needs improvement (> 0.1)');
            }
          }
        }
      });

      try {
        observer.observe({ 
          entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
        });
      } catch (e) {
        // Fallback for older browsers
        console.log('PerformanceObserver not supported');
      }

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) {
              console.log('⚠️ Slow resource:', resourceEntry.name, resourceEntry.duration + 'ms');
            }
          }
        }
      });

      try {
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (e) {
        // Fallback for older browsers
      }

      return () => {
        observer.disconnect();
        resourceObserver.disconnect();
      };
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
      requestIdleCallback(() => setIsLoaded(true), { timeout: 2000 });
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

// New component for optimizing images
export function OptimizedImage({ 
  src, 
  alt, 
  priority = false,
  className = "",
  ...props 
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  [key: string]: any;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    </div>
  );
}
