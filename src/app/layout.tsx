import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.commutetimely.com"),
  title: {
    default: "CommuteTimely — Know Exactly When to Leave",
    template: "%s | CommuteTimely",
  },
  description:
    "CommuteTimely predicts the perfect departure time using real-time traffic data, weather signals, and machine learning so you arrive exactly when you need to.",
  keywords: [
    "commute tracker",
    "departure time",
    "traffic prediction",
    "commute time",
    "travel time calculator",
    "arrival intelligence",
  ],
  authors: [{ name: "CommuteTimely" }],
  creator: "CommuteTimely",
  publisher: "CommuteTimely",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "CommuteTimely — Arrival Intelligence",
    description:
      "Never be late again. The intelligent commute timing platform that tells you exactly when to leave.",
    url: "https://www.commutetimely.com",
    siteName: "CommuteTimely",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "CommuteTimely - Arrival Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CommuteTimely — Know Exactly When to Leave",
    description:
      "Never be late again. The intelligent commute timing platform that tells you exactly when to leave.",
    creator: "@commutetimely",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-[#E2E8F0]`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
