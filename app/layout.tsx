import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://commutetimely.vercel.app'),
  title: 'CommuteTimely – Smarter Commutes, Less Stress',
  description: 'Real-time commute tracking and smart notifications so you always leave at the perfect time.',
  keywords: ['commute timing', 'traffic notifications', 'smart commute', 'arrival time', 'traffic alerts', 'traffic app', 'commute app'],
  authors: [{ name: 'CommuteTimely Team' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://commutetimely.vercel.app',
    siteName: 'CommuteTimely',
    title: 'CommuteTimely – Smarter Commutes, Less Stress',
    description: 'Real-time commute tracking and smart notifications so you always leave at the perfect time.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely – Smarter Commutes, Less Stress',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@commutetimely',
    creator: '@commutetimely',
    title: 'CommuteTimely – Smarter Commutes, Less Stress',
    description: 'Real-time commute tracking and smart notifications so you always leave at the perfect time.',
    images: ['/og-image.png'],
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
        
        {/* Critical resources preload */}
        <link rel="preload" href="/images/IMG_750E9EF883FD-1.jpeg" as="image" type="image/jpeg" />
        
        {/* Defer video loading - only preload when needed */}
        <link rel="prefetch" href="/videos/ScreenRecording_mobile.mp4" as="video" type="video/mp4" />
        <link rel="prefetch" href="/videos/ScreenRecording_08-13-2025 18-45-18_1.MP4" as="video" type="video/mp4" />
        
        {/* PWA and mobile optimizations */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CommuteTimely" />
        <link rel="apple-touch-icon" href="/images/IMG_750E9EF883FD-1.jpeg" />
        
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
