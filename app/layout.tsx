import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "CommuteTimely - Smart Traffic App & Commute Planner | Never Be Late Again",
    template: "%s | CommuteTimely"
  },
  description: "CommuteTimely is the #1 intelligent traffic app that sends smart leave alerts using real-time traffic data. AI-powered commute planning for iOS & Android. Get early access now!",
  keywords: [
    "traffic app",
    "commute planner", 
    "traffic alerts",
    "real-time traffic",
    "smart commute",
    "traffic prediction",
    "route optimization",
    "iOS traffic app",
    "Android traffic app",
    "commute notifications"
  ],
  authors: [{ name: "CommuteTimely Team" }],
  creator: "CommuteTimely",
  publisher: "CommuteTimely",
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
    title: "CommuteTimely - Smart Traffic App & Commute Planner",
    description: "The #1 intelligent traffic app that sends smart leave alerts using real-time traffic data. Never be late again with AI-powered commute planning.",
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart Traffic App Interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommuteTimely - Smart Traffic App & Commute Planner',
    description: 'The #1 intelligent traffic app that sends smart leave alerts using real-time traffic data. Never be late again!',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Performance hints */}
        <link rel="preload" href="/images/IMG_750E9EF883FD-1.jpeg" as="image" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
