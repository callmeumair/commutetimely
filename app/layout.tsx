import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ResponsiveHeader from '@/components/ResponsiveHeader'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'CommuteTimely - Never Be Late Again',
    template: '%s | CommuteTimely'
  },
  description: 'Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling. Join the waitlist for early access.',
  keywords: ['commute', 'notifications', 'traffic', 'smart notifications', 'leave on time', 'commute app', 'traffic alerts', 'public transport', 'walking', 'cycling', 'car', 'bus', 'train'],
  authors: [{ name: 'CommuteTimely Team' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://commutetimely.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CommuteTimely - Never Be Late Again',
    description: 'Smart notifications that tell you exactly when to leave. Works with all transport modes.',
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart commute notifications app',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommuteTimely - Never Be Late Again',
    description: 'Smart notifications that tell you exactly when to leave. Works with all transport modes.',
    images: ['/og-image.jpg'],
    creator: '@commutetimely',
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'CommuteTimely',
    'application-name': 'CommuteTimely',
    'msapplication-TileColor': '#2EBFA5',
    'theme-color': '#2EBFA5',
    'color-scheme': 'dark',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Mobile Viewport Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        
        {/* Mobile Performance Optimizations */}
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CommuteTimely" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="CommuteTimely" />
        <meta name="msapplication-TileColor" content="#2EBFA5" />
        <meta name="theme-color" content="#2EBFA5" />
        <meta name="color-scheme" content="dark" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/lottie/phone-screen.json" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/lottie/step-animation.json" as="fetch" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Accessibility */}
        <meta name="accessibility" content="high" />
        <meta name="accessibility-feature" content="high-contrast, reduced-motion, large-text" />
        
        {/* Mobile App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/logo512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "CommuteTimely",
              "description": "Smart notifications that tell you exactly when to leave for your commute",
              "url": "https://commutetimely.com",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        {/* Header */}
        <ResponsiveHeader />
        
        {/* Main Content */}
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                      console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
                    }
                  }, 0);
                });
              }
              
              // Mobile detection
              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              if (isMobile) {
                document.documentElement.classList.add('mobile-device');
              }
              
              // Touch event optimization
              let touchStartY = 0;
              let touchEndY = 0;
              
              document.addEventListener('touchstart', (e) => {
                touchStartY = e.touches[0].clientY;
              }, { passive: true });
              
              document.addEventListener('touchend', (e) => {
                touchEndY = e.changedTouches[0].clientY;
                const touchDiff = touchStartY - touchEndY;
                
                // Prevent accidental navigation on small swipes
                if (Math.abs(touchDiff) < 50) {
                  e.preventDefault();
                }
              }, { passive: false });
              
              // Intersection Observer for performance
              if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                      }
                    }
                  });
                });
                
                document.querySelectorAll('img[data-src]').forEach(img => {
                  imageObserver.observe(img);
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
} 