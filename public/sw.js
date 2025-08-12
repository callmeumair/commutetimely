const CACHE_NAME = 'commutetimely-v1.0.1';
const STATIC_CACHE = 'static-v1.0.1';
const DYNAMIC_CACHE = 'dynamic-v1.0.1';
const API_CACHE = 'api-v1.0.1';

// Cache strategies based on device capabilities
const getCacheStrategy = () => {
  if (typeof navigator !== 'undefined') {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
    
    if (connection && connection.effectiveType === 'slow-2g') {
      return 'minimal';
    } else if (isLowEnd || connection?.effectiveType === '2g') {
      return 'lightweight';
    }
  }
  return 'full';
};

// Static assets with device-specific optimization
const STATIC_ASSETS = {
  full: [
    '/',
    '/manifest.json',
    '/icon-192x192.png',
    '/icon-512x512.png',
    '/offline.html',
    '/favicon.ico',
    '/apple-touch-icon.png'
  ],
  lightweight: [
    '/',
    '/manifest.json',
    '/icon-192x192.png',
    '/offline.html'
  ],
  minimal: [
    '/',
    '/offline.html'
  ]
};

// Critical CSS and JS files
const CRITICAL_RESOURCES = [
  '/_next/static/css/',
  '/_next/static/chunks/main-',
  '/_next/static/chunks/framework-',
  '/_next/static/chunks/webpack-'
];

// Network-first resources (API calls, dynamic content)
const NETWORK_FIRST_RESOURCES = [
  '/api/',
  '/forms.gle/',
  'https://forms.gle/'
];

// Cache-first resources (static assets, images)
const CACHE_FIRST_RESOURCES = [
  '/_next/static/',
  '/images/',
  '/icons/',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.webp',
  '.woff',
  '.woff2',
  '.ttf'
];

// Stale-while-revalidate resources
const STALE_WHILE_REVALIDATE_RESOURCES = [
  '/_next/static/chunks/',
  '/_next/static/css/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      const strategy = getCacheStrategy();
      const assets = STATIC_ASSETS[strategy];
      console.log(`Caching ${strategy} strategy assets:`, assets);
      return cache.addAll(assets);
    }).then(() => {
      console.log('Service Worker installed successfully');
      return self.skipWaiting();
    }).catch((error) => {
      console.error('Service Worker installation failed:', error);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== API_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated successfully');
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Handle different resource types with appropriate strategies
  if (isNetworkFirstResource(request)) {
    event.respondWith(handleNetworkFirst(request));
  } else if (isCacheFirstResource(request)) {
    event.respondWith(handleCacheFirst(request));
  } else if (isStaleWhileRevalidateResource(request)) {
    event.respondWith(handleStaleWhileRevalidate(request));
  } else {
    event.respondWith(handleDefault(request));
  }
});

// Network-first strategy for dynamic content
async function handleNetworkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache the successful response
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', request.url);
    
    // Try to get from cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline.html');
    }
    
    throw error;
  }
}

// Cache-first strategy for static assets
async function handleCacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Cache and network failed:', request.url);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline.html');
    }
    
    throw error;
  }
}

// Stale-while-revalidate strategy for frequently changing resources
async function handleStaleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  // Return cached response immediately if available
  if (cachedResponse) {
    // Update cache in background
    fetch(request).then((response) => {
      if (response.ok) {
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, response);
        });
      }
    }).catch(() => {
      // Ignore background update errors
    });
    
    return cachedResponse;
  }
  
  // If no cache, fetch from network
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Stale-while-revalidate failed:', request.url);
    
    if (request.mode === 'navigate') {
      return caches.match('/offline.html');
    }
    
    throw error;
  }
}

// Default strategy
async function handleDefault(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    console.log('Default strategy failed, trying cache:', request.url);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    if (request.mode === 'navigate') {
      return caches.match('/offline.html');
    }
    
    throw error;
  }
}

// Helper functions to determine resource types
function isNetworkFirstResource(request) {
  return NETWORK_FIRST_RESOURCES.some(pattern => 
    request.url.includes(pattern) || 
    request.url.startsWith(pattern)
  );
}

function isCacheFirstResource(request) {
  return CACHE_FIRST_RESOURCES.some(pattern => 
    request.url.includes(pattern) || 
    request.url.endsWith(pattern)
  );
}

function isStaleWhileRevalidateResource(request) {
  return STALE_WHILE_REVALIDATE_RESOURCES.some(pattern => 
    request.url.includes(pattern)
  );
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Perform background sync tasks
    console.log('Performing background sync...');
    
    // Example: sync form submissions, analytics, etc.
    const clients = await self.clients.matchAll();
    clients.forEach((client) => {
      client.postMessage({
        type: 'BACKGROUND_SYNC_COMPLETE',
        timestamp: Date.now()
      });
    });
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event);
  
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body || 'New notification from CommuteTimely',
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View Details',
          icon: '/icon-192x192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-192x192.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification('CommuteTimely', options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      self.clients.openWindow('/')
    );
  }
});

// Message handling for client communication
self.addEventListener('message', (event) => {
  console.log('Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_INFO') {
    event.ports[0].postMessage({
      type: 'CACHE_INFO',
      caches: {
        static: STATIC_CACHE,
        dynamic: DYNAMIC_CACHE,
        api: API_CACHE
      },
      strategy: getCacheStrategy()
    });
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});

// Performance monitoring
let performanceMetrics = {
  cacheHits: 0,
  cacheMisses: 0,
  networkRequests: 0,
  errors: 0
};

// Update metrics
function updateMetrics(type) {
  performanceMetrics[type]++;
  
  // Send metrics to clients periodically
  if (performanceMetrics.cacheHits + performanceMetrics.cacheMisses > 10) {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'PERFORMANCE_METRICS',
          metrics: performanceMetrics
        });
      });
    });
    
    // Reset metrics
    performanceMetrics = {
      cacheHits: 0,
      cacheMisses: 0,
      networkRequests: 0,
      errors: 0
    };
  }
}

console.log('Service Worker loaded with enhanced performance optimizations');
