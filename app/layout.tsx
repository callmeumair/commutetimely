import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ServiceWorkerProvider from '@/components/providers/ServiceWorkerProvider'

// Optimize font loading with display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://commutetimely.com'),
  title: {
    default: 'CommuteTimely - Never Be Late Again',
    template: '%s | CommuteTimely'
  },
  description: 'Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling. Join the waitlist for early access.',
  keywords: [
    'commute',
    'notifications', 
    'traffic',
    'smart notifications',
    'leave on time',
    'commute app',
    'traffic alerts',
    'public transport',
    'walking',
    'cycling',
    'car',
    'bus',
    'train',
    'commute planning',
    'time management'
  ],
  authors: [{ name: 'CommuteTimely Team' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  category: 'Productivity',
  classification: 'Mobile Application',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
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
        type: 'image/jpeg',
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
    site: '@commutetimely',
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
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'CommuteTimely',
    'application-name': 'CommuteTimely',
    'msapplication-TileColor': '#0ea5e9',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://forms.gle" />
        <link rel="preconnect" href="https://forms.gle" />
        
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="CommuteTimely" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CommuteTimely" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon-152x152.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="mask-icon" href="/icon-192x192.png" color="#0ea5e9" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/icon-192x192.png" as="image" />
        <link rel="preload" href="/icon-512x512.png" as="image" />
      </head>
      <body className={`${inter.className} antialiased bg-dark-950 text-white overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <ServiceWorkerProvider>
          {children}
        </ServiceWorkerProvider>
        <div id="main-content" />
      </body>
    </html>
  )
}
