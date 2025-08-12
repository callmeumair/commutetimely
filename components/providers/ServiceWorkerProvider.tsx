'use client'

import { useEffect, useState } from 'react'

interface ServiceWorkerProviderProps {
  children: React.ReactNode
}

export const ServiceWorkerProvider = ({ children }: ServiceWorkerProviderProps) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false)
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    // Check if service worker is supported
    if ('serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration)

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setIsUpdateAvailable(true)
                }
              })
            }
          })

          // Handle service worker updates
          let refreshing = false
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
              refreshing = true
              window.location.reload()
            }
          })
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })

      // Listen for online/offline status
      const handleOnline = () => setIsOffline(false)
      const handleOffline = () => setIsOffline(true)

      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)

      // Set initial offline status
      setIsOffline(!navigator.onLine)

      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    }
  }, [])

  // Update service worker
  const updateServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.update()
      })
    }
  }

  return (
    <>
      {children}
      
      {/* Update notification */}
      {isUpdateAvailable && (
        <div className="fixed bottom-4 right-4 z-50 bg-primary-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Update Available</h4>
              <p className="text-sm opacity-90">A new version is ready</p>
            </div>
            <button
              onClick={updateServiceWorker}
              className="bg-white text-primary-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      )}

      {/* Offline indicator */}
      {isOffline && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">You're offline</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ServiceWorkerProvider
