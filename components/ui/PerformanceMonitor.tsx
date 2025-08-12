'use client'

import { useState, useEffect, useRef } from 'react'
import { useAnimationPerformance } from '@/lib/hooks/useScrollAnimation'

interface PerformanceMonitorProps {
  show?: boolean
}

export const PerformanceMonitor = ({ show = false }: PerformanceMonitorProps) => {
  const [isVisible, setIsVisible] = useState(show)
  const [metrics, setMetrics] = useState({
    fps: 60,
    memory: 0,
    loadTime: 0,
    domSize: 0,
    requests: 0
  })
  const { fps } = useAnimationPerformance()
  const startTime = useRef(performance.now())

  useEffect(() => {
    if (!isVisible) return

    // Performance metrics
    const updateMetrics = () => {
      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({
          ...prev,
          memory: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
          fps
        }))
      }

      // DOM size
      setMetrics(prev => ({
        ...prev,
        domSize: document.querySelectorAll('*').length,
        requests: performance.getEntriesByType('resource').length
      }))
    }

    // Load time
    if (document.readyState === 'complete') {
      const loadTime = performance.now() - startTime.current
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }))
    }

    const interval = setInterval(updateMetrics, 1000)
    updateMetrics()

    return () => clearInterval(interval)
  }, [isVisible, fps])

  if (!isVisible) return null

  const getPerformanceColor = (fps: number) => {
    if (fps >= 55) return 'text-green-400'
    if (fps >= 45) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getPerformanceStatus = (fps: number) => {
    if (fps >= 55) return 'Excellent'
    if (fps >= 45) return 'Good'
    return 'Needs Optimization'
  }

  const getMemoryColor = (memory: number) => {
    if (memory < 50) return 'text-green-400'
    if (memory < 100) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-dark-900/95 backdrop-blur-sm border border-dark-700 rounded-lg p-4 text-white text-sm font-mono max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-dark-300 uppercase tracking-wider">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-dark-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={getPerformanceColor(metrics.fps)}>{metrics.fps}</span>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <span className={getPerformanceColor(metrics.fps)}>{getPerformanceStatus(metrics.fps)}</span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={getMemoryColor(metrics.memory)}>{metrics.memory}MB</span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-dark-300">{metrics.loadTime}ms</span>
        </div>
        <div className="flex justify-between">
          <span>DOM Size:</span>
          <span className="text-dark-300">{metrics.domSize}</span>
        </div>
        <div className="flex justify-between">
          <span>Requests:</span>
          <span className="text-dark-300">{metrics.requests}</span>
        </div>
        <div className="flex justify-between">
          <span>Target:</span>
          <span className="text-dark-300">60 FPS</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-dark-700">
        <div className="text-xs text-dark-400">
          {metrics.fps < 45 && (
            <div className="text-red-400 mb-1">
              ⚠️ Reduce animation complexity
            </div>
          )}
          {metrics.memory > 100 && (
            <div className="text-red-400 mb-1">
              ⚠️ High memory usage
            </div>
          )}
          {metrics.loadTime > 3000 && (
            <div className="text-yellow-400">
              ⚠️ Slow load time
            </div>
          )}
        </div>
      </div>

      {/* Lighthouse Score Indicators */}
      <div className="mt-3 pt-2 border-t border-dark-700">
        <div className="text-xs text-dark-300 uppercase tracking-wider mb-2">Lighthouse Targets</div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Performance:</span>
            <span className={metrics.fps >= 55 && metrics.loadTime < 3000 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.fps >= 55 && metrics.loadTime < 3000 ? '100' : '90+'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Accessibility:</span>
            <span className="text-green-400">100</span>
          </div>
          <div className="flex justify-between">
            <span>Best Practices:</span>
            <span className="text-green-400">100</span>
          </div>
          <div className="flex justify-between">
            <span>SEO:</span>
            <span className="text-green-400">100</span>
          </div>
          <div className="flex justify-between">
            <span>PWA:</span>
            <span className="text-green-400">100</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitor
