'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PerformanceMetrics {
  fps: number
  memory: number
  loadTime: number
  domSize: number
  requests: number
  lighthouse: {
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
    pwa: number
  }
  deviceInfo: {
    type: 'mobile' | 'tablet' | 'desktop'
    connection: 'slow-2g' | '2g' | '3g' | '4g' | '5g' | 'wifi' | 'ethernet'
    memory: number
    cores: number
  }
}

const PerformanceMonitor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    loadTime: 0,
    domSize: 0,
    requests: 0,
    lighthouse: { performance: 0, accessibility: 0, bestPractices: 0, seo: 0, pwa: 0 },
    deviceInfo: { type: 'desktop', connection: 'wifi', memory: 0, cores: 0 }
  })

  // Device detection and optimization
  const deviceInfo = useMemo(() => {
    if (typeof window === 'undefined') return { type: 'desktop', connection: 'wifi', memory: 0, cores: 0 }
    
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent)
    const isTablet = /tablet|ipad/i.test(userAgent)
    
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop'
    if (isMobile) type = 'mobile'
    else if (isTablet) type = 'tablet'
    
    // Connection detection
    let connection: 'slow-2g' | '2g' | '3g' | '4g' | '5g' | 'wifi' | 'ethernet' = 'wifi'
    if ('connection' in navigator) {
      const conn = (navigator as any).connection
      if (conn.effectiveType) {
        connection = conn.effectiveType as any
      }
    }
    
    // Memory and cores
    const memory = navigator.hardwareConcurrency || 0
    const cores = navigator.hardwareConcurrency || 0
    
    return { type, connection, memory, cores }
  }, [])

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return

    // FPS calculation
    let frameCount = 0
    let lastTime = performance.now()
    
    const countFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        setMetrics(prev => ({ ...prev, fps: Math.min(fps, 60) }))
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(countFPS)
    }

          // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
        if (memory) {
          setMetrics(prev => ({
            ...prev,
            memory: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
            deviceInfo: {
              type: deviceInfo.type as 'mobile' | 'tablet' | 'desktop',
              connection: deviceInfo.connection as 'slow-2g' | '2g' | '3g' | '4g' | '5g' | 'wifi' | 'ethernet',
              memory: deviceInfo.memory,
              cores: deviceInfo.cores
            }
          }))
        }
      }

    // DOM size
    const domSize = document.querySelectorAll('*').length
    setMetrics(prev => ({ ...prev, domSize }))

    // Load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }))
    }

    // Start FPS monitoring
    countFPS()
  }, [deviceInfo])

  // Network monitoring
  const monitorNetwork = useCallback(() => {
    if ('connection' in navigator) {
      const conn = (navigator as any).connection
      conn.addEventListener('change', () => {
        const connection = conn.effectiveType || 'wifi'
        setMetrics(prev => ({
          ...prev,
          deviceInfo: { ...prev.deviceInfo, connection }
        }))
      })
    }
  }, [])

  // Lighthouse score estimation
  const estimateLighthouseScore = useCallback(() => {
    const { fps, memory, loadTime, domSize } = metrics
    
    let performance = 100
    if (fps < 30) performance -= 30
    else if (fps < 50) performance -= 15
    if (memory > 100) performance -= 20
    if (loadTime > 3000) performance -= 25
    if (domSize > 1000) performance -= 15
    
    let accessibility = 100
    if (domSize > 1500) accessibility -= 10
    
    let bestPractices = 100
    if (memory > 150) bestPractices -= 20
    if (fps < 30) bestPractices -= 15
    
    let seo = 100
    if (loadTime > 5000) seo -= 20
    
    let pwa = 100
    if (!('serviceWorker' in navigator)) pwa -= 30
    
    setMetrics(prev => ({
      ...prev,
      lighthouse: { performance, accessibility, bestPractices, seo, pwa }
    }))
  }, [metrics.fps, metrics.memory, metrics.loadTime, metrics.domSize])

  useEffect(() => {
    measurePerformance()
    monitorNetwork()
    
    const interval = setInterval(() => {
      estimateLighthouseScore()
    }, 2000)
    
    return () => clearInterval(interval)
  }, [measurePerformance, monitorNetwork, estimateLighthouseScore])

  // Performance color coding
  const getPerformanceColor = (value: number, threshold: number) => {
    if (value >= threshold * 0.9) return 'text-green-400'
    if (value >= threshold * 0.7) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getMemoryColor = (value: number) => {
    if (value < 50) return 'text-green-400'
    if (value < 100) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getLighthouseColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  // Device-specific optimizations
  const getDeviceOptimizations = () => {
    const { type, connection, memory, cores } = deviceInfo
    
    if (type === 'mobile' && connection === 'slow-2g') {
      return '🚀 Mobile Slow Network: Reduced animations, minimal JS'
    }
    if (type === 'mobile' && memory < 4) {
      return '📱 Low Memory Device: Optimized rendering, reduced DOM'
    }
    if (cores < 4) {
      return '⚡ Low Core Count: Simplified animations, efficient JS'
    }
    return '💻 Optimal Performance: Full features enabled'
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-primary-600 text-white p-2 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        title="Show Performance Monitor"
      >
        📊
      </button>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 left-4 z-50 bg-dark-800 text-white p-4 rounded-lg shadow-lg max-w-sm border border-dark-700"
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-sm">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Device Info */}
        <div className="mb-3 p-2 bg-dark-700 rounded text-xs">
          <div className="flex justify-between mb-1">
            <span>Device:</span>
            <span className="capitalize">{deviceInfo.type}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Connection:</span>
            <span className="capitalize">{deviceInfo.connection}</span>
          </div>
          <div className="flex justify-between">
            <span>Cores:</span>
            <span>{deviceInfo.cores}</span>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>FPS:</span>
            <span className={getPerformanceColor(metrics.fps, 60)}>{metrics.fps}</span>
          </div>
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={getMemoryColor(metrics.memory)}>{metrics.memory}MB</span>
          </div>
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span>{metrics.loadTime}ms</span>
          </div>
          <div className="flex justify-between">
            <span>DOM Size:</span>
            <span>{metrics.domSize}</span>
          </div>
        </div>

        {/* Lighthouse Scores */}
        <div className="mt-3 pt-3 border-t border-dark-700">
          <h4 className="text-xs font-medium mb-2">Lighthouse Scores:</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex justify-between">
              <span>Performance:</span>
              <span className={getLighthouseColor(metrics.lighthouse.performance)}>
                {metrics.lighthouse.performance}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Accessibility:</span>
              <span className={getLighthouseColor(metrics.lighthouse.accessibility)}>
                {metrics.lighthouse.accessibility}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Best Practices:</span>
              <span className={getLighthouseColor(metrics.lighthouse.bestPractices)}>
                {metrics.lighthouse.bestPractices}
              </span>
            </div>
            <div className="flex justify-between">
              <span>SEO:</span>
              <span className={getLighthouseColor(metrics.lighthouse.seo)}>
                {metrics.lighthouse.seo}
              </span>
            </div>
            <div className="flex justify-between">
              <span>PWA:</span>
              <span className={getLighthouseColor(metrics.lighthouse.pwa)}>
                {metrics.lighthouse.pwa}
              </span>
            </div>
          </div>
        </div>

        {/* Device Optimizations */}
        <div className="mt-3 pt-3 border-t border-dark-700">
          <div className="text-xs text-gray-300">
            {getDeviceOptimizations()}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PerformanceMonitor
