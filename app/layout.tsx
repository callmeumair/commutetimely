import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://commutetimely.com'),
  title: 'CommuteTimely – Smarter Commutes, Less Stress',
  description: 'CommuteTimely: #1 traffic app with real-time commute planner & smart notifications. Never be late again with intelligent leave alerts.',
  keywords: ['CommuteTimely', 'traffic app', 'commute planner', 'real-time traffic alerts', 'reach on time', 'smart commute notifications', 'traffic notifications', 'smart commute', 'arrival time', 'commute app', 'best traffic app', 'commute timing app'],
  authors: [{ name: 'CommuteTimely Team' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    title: 'CommuteTimely – Smarter Commutes, Less Stress',
    description: 'CommuteTimely: #1 traffic app with real-time commute planner & smart notifications. Never be late again with intelligent leave alerts.',
    images: [
      {
        url: 'https://commutetimely.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely – Smarter Commutes, Less Stress',
        type: 'image/png',
      },
    ],
    // Enhanced OpenGraph properties for better link previews
    countryName: 'United States',
    emails: ['hello@commutetimely.com'],
    phoneNumbers: ['+1-555-COMMUTE'],
    // App-specific metadata
    determiner: 'the',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@commutetimely',
    creator: '@commutetimely',
    title: 'CommuteTimely – Smarter Commutes, Less Stress',
    description: 'CommuteTimely: #1 traffic app with real-time commute planner & smart notifications. Never be late again with intelligent leave alerts.',
    images: ['https://commutetimely.com/og-image.png'],
    // Enhanced Twitter metadata
    creatorId: '1234567890', // Replace with actual Twitter creator ID
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'productivity',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* DNS and connection preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Critical resources prefetch */}
        <link rel="prefetch" href="/images/IMG_750E9EF883FD-1.jpeg" as="image" type="image/jpeg" />
        
        {/* Defer video loading - only prefetch when needed */}
        <link rel="prefetch" href="/videos/ScreenRecording_08-13-2025 18-45-18_1.MP4" as="video" type="video/mp4" />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* PWA and mobile optimizations */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CommuteTimely" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Enhanced SEO meta tags for better link previews */}
        <meta name="application-name" content="CommuteTimely" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Social media optimization */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="CommuteTimely – Smarter Commutes, Less Stress" />
        
        {/* Additional social media tags */}
        <meta name="twitter:image:alt" content="CommuteTimely – Smarter Commutes, Less Stress" />
        <meta name="twitter:site" content="@commutetimely" />
        <meta name="twitter:creator" content="@commutetimely" />
        
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://commutetimely.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "CommuteTimely",
              "description": "CommuteTimely: #1 traffic app with real-time commute planner & smart notifications. Never be late again with intelligent leave alerts.",
              "url": "https://commutetimely.com",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": ["iOS", "Android"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1000+"
              },
              "publisher": {
                "@type": "Organization",
                "name": "CommuteTimely",
                "url": "https://commutetimely.com"
              }
            })
          }}
        />
        
        {/* Performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased bg-dark-950 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
