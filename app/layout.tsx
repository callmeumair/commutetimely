import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import ServerHeader from '@/components/ServerHeader'
import { runAccessibilityTest } from '@/lib/accessibility'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CommuteTimely - Never Be Late Again',
  description: 'One smart notification that tells you exactly when to leave. Your commute, optimized.',
  keywords: ['commute', 'timing', 'notifications', 'traffic', 'app', 'productivity'],
  authors: [{ name: 'CommuteTimely' }],
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
    description: 'One smart notification that tells you exactly when to leave. Your commute, optimized.',
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart commute notifications',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommuteTimely - Never Be Late Again',
    description: 'One smart notification that tells you exactly when to leave.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CommuteTimely",
    "description": "Smart commute notifications to help you leave on time, beat traffic, and arrive stress-free.",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "iOS, Android",
    "url": "https://commutetimely.com",
    "downloadUrl": "https://commutetimely.com/download",
    "installUrl": "https://commutetimely.com/download",
    "softwareVersion": "1.0.0",
    "releaseNotes": "Initial release with smart commute notifications",
    "featureList": [
      "Smart traffic notifications",
      "Real-time departure time calculation",
      "Route optimization",
      "Offline functionality",
      "Privacy-first design"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "CommuteTimely"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2140",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Finally, an app that actually helps me be on time! The notifications are spot-on and I never miss my train anymore.",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Mike T."
        },
        "reviewBody": "Game changer for my daily commute. Highly recommend! The traffic predictions are incredibly accurate.",
        "datePublished": "2024-01-10"
      }
    ],
    "author": {
      "@type": "Organization",
      "name": "CommuteTimely",
      "url": "https://commutetimely.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CommuteTimely",
      "url": "https://commutetimely.com"
    },
    "screenshot": "https://commutetimely.com/screenshot-mobile.png",
    "softwareHelp": "https://commutetimely.com/support"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does CommuteTimely know when to notify me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CommuteTimely uses real-time traffic data, historical patterns, and your personal commute preferences to calculate the optimal departure time. The app continuously monitors traffic conditions and adjusts notifications accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "Does the app work in all cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CommuteTimely works in over 50 major cities worldwide and is constantly expanding. The app uses global traffic data sources to provide accurate predictions wherever you are."
        }
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">

      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Performance optimizations */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/lottie/phone-screen.json" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/lottie/step-animation.json" as="fetch" crossOrigin="anonymous" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.className}`}>
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        {/* Server header */}
        <ServerHeader />
        <main id="main-content" className="scroll-snap-container">
          {children}
        </main>
        <Analytics />
        
        {/* Accessibility testing in development */}
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window !== 'undefined') {
                  window.runAccessibilityTest = ${runAccessibilityTest.toString()};
                  console.log('Accessibility test available: window.runAccessibilityTest()');
                }
              `,
            }}
          />
        )}
      </body>
    </html>
  )
} 