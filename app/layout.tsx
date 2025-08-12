import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ServiceWorkerProvider from '@/components/providers/ServiceWorkerProvider'
import { config } from '@/lib/config'

// Optimized font loading with fallbacks
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0ea5e9' }
  ],
  colorScheme: 'dark light'
}

export const metadata: Metadata = {
  title: {
    default: 'CommuteTimely - Know exactly when to leave',
    template: '%s | CommuteTimely'
  },
  description: 'Get real-time notifications so you leave right on time for your commute.',
  keywords: [
    'commute timing',
    'traffic notifications',
    'smart commute',
    'arrival time',
    'traffic alerts',
    'commute optimization',
    'smart notifications',
    'traffic prediction',
    'commute planning',
    'arrival prediction',
    'traffic monitoring',
    'commute efficiency',
    'smart travel',
    'traffic intelligence',
    'commute automation'
  ],
  authors: [{ name: 'CommuteTimely Team' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : config.WEBSITE_URL),
  alternates: {
    canonical: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : config.WEBSITE_URL,
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : config.WEBSITE_URL,
    siteName: 'CommuteTimely',
    title: 'CommuteTimely - Know exactly when to leave',
    description: 'Get real-time notifications so you leave right on time for your commute.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Know exactly when to leave',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@commutetimely',
    creator: '@commutetimely',
    title: 'CommuteTimely - Know exactly when to leave',
    description: 'Get real-time notifications so you leave right on time for your commute.',
    images: ['/og-image.svg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'CommuteTimely',
    'application-name': 'CommuteTimely',
    'msapplication-TileColor': '#0ea5e9',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#0ea5e9',
    'color-scheme': 'dark light',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://forms.gle" />
        <link rel="preconnect" href="https://forms.gle" />
        
        {/* Critical resource preloading */}
        <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        <link rel="preload" href="/_next/static/chunks/webpack.js" as="script" />
        
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9" />
        
        {/* Favicon preloading */}
        <link rel="preload" href="/icon-192x192.png" as="image" />
        <link rel="preload" href="/icon-512x512.png" as="image" />
        
        {/* Critical CSS inline for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for above-the-fold content */
              body { 
                margin: 0; 
                font-family: system-ui, -apple-system, sans-serif;
                background-color: #0f172a;
                color: #ffffff;
              }
              .loading { 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
              }
              .spinner {
                width: 40px;
                height: 40px;
                border: 3px solid #0ea5e9;
                border-top: 3px solid transparent;
                border-radius: 50%;
                animation: spin 1s linear infinite;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `,
          }}
        />
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              (function() {
                'use strict';
                
                // Early performance metrics
                window.performance.mark('app-start');
                
                // Device capability detection
                window.deviceCapabilities = {
                  isLowEnd: navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false,
                  isMobile: /mobile|android|iphone|ipad|phone/i.test(navigator.userAgent.toLowerCase()),
                  hasReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
                  connection: navigator.connection ? navigator.connection.effectiveType : 'unknown'
                };
                
                // Performance budget monitoring
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'navigation') {
                      const navEntry = entry;
                      if (navEntry.loadEventEnd - navEntry.loadEventStart > 3000) {
                        console.warn('⚠️ Load time exceeded 3s budget');
                      }
                    }
                  }
                });
                
                try {
                  observer.observe({ entryTypes: ['navigation'] });
                } catch (e) {
                  // Fallback for older browsers
                }
                
                // Resource hints for better performance
                if (window.deviceCapabilities.isMobile) {
                  const link = document.createElement('link');
                  link.rel = 'preload';
                  link.as = 'style';
                  link.href = '/_next/static/css/app/globals.css';
                  document.head.appendChild(link);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-dark-950 text-white overflow-x-hidden`}>
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Skip to main content
        </a>
        
        {/* Service Worker Provider for PWA functionality */}
        <ServiceWorkerProvider>
          {children}
        </ServiceWorkerProvider>
        
        {/* Main content anchor */}
        <div id="main-content" />
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Post-load performance monitoring
              window.addEventListener('load', function() {
                window.performance.mark('app-loaded');
                window.performance.measure('app-load-time', 'app-start', 'app-loaded');
                
                const loadTime = performance.getEntriesByName('app-load-time')[0];
                if (loadTime && loadTime.duration > 5000) {
                  console.warn('⚠️ App load time exceeded 5s budget:', Math.round(loadTime.duration), 'ms');
                }
                
                // Report performance metrics
                if ('sendBeacon' in navigator) {
                  const metrics = {
                    loadTime: Math.round(loadTime?.duration || 0),
                    deviceType: window.deviceCapabilities?.isMobile ? 'mobile' : 'desktop',
                    connection: window.deviceCapabilities?.connection || 'unknown',
                    timestamp: Date.now()
                  };
                  
                  navigator.sendBeacon('/api/metrics', JSON.stringify(metrics));
                }
              });
              
              // Intersection Observer for lazy loading
              if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      img.src = img.dataset.src;
                      img.classList.remove('lazy');
                      imageObserver.unobserve(img);
                    }
                  });
                });
                
                document.querySelectorAll('img[data-src]').forEach(img => {
                  imageObserver.observe(img);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
