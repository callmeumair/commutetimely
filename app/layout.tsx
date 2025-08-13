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
  title: 'CommuteTimely - Smart Commute Alerts',
  description: 'Intelligent leave alerts using real-time traffic data to help you arrive on time, every time. Launching September 2025 on iOS and Android.',
  keywords: ['commute timing', 'traffic notifications', 'smart commute', 'arrival time', 'traffic alerts', 'traffic app', 'commute app'],
  authors: [{ name: 'CommuteTimely Team' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://commutetimely.vercel.app',
    siteName: 'CommuteTimely',
    title: 'CommuteTimely - Smart Commute Alerts',
    description: 'Intelligent leave alerts using real-time traffic data to help you arrive on time, every time.',
    images: [
      {
        url: '/images/IMG_750E9EF883FD-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart Commute Alerts',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@commutetimely',
    creator: '@commutetimely',
    title: 'CommuteTimely - Smart Commute Alerts',
    description: 'Intelligent leave alerts using real-time traffic data to help you arrive on time, every time.',
    images: ['/images/IMG_750E9EF883FD-1.jpeg'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/IMG_750E9EF883FD-1.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/videos/ScreenRecording_08-13-2025 18-45-18_1.MP4" as="video" type="video/mp4" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CommuteTimely" />
        <link rel="apple-touch-icon" href="/images/IMG_750E9EF883FD-1.jpeg" />
      </head>
      <body className={`${inter.className} antialiased bg-dark-950 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
