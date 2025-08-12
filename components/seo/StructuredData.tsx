'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'webpage' | 'mobileapp'
  data: any
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    // Add structured data to the document head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      // Clean up when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [data])

  return null
}

// Predefined structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CommuteTimely',
  url: 'https://commutetimely.com',
  logo: 'https://commutetimely.com/icon-512x512.png',
  description: 'Smart notifications that tell you exactly when to leave. Never be late again.',
  sameAs: [
    'https://twitter.com/commutetimely',
    'https://linkedin.com/company/commutetimely'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'support@commutetimely.com'
  },
  foundingDate: '2025',
  areaServed: 'Worldwide',
  serviceType: 'Mobile Application'
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CommuteTimely',
  url: 'https://commutetimely.com',
  description: 'Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling.',
  publisher: {
    '@type': 'Organization',
    name: 'CommuteTimely'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://commutetimely.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'CommuteTimely - Never Be Late Again',
  description: 'Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling.',
  url: 'https://commutetimely.com',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'CommuteTimely',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'iOS, Android',
    description: 'Smart commute planning app with intelligent notifications',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder'
    }
  }
}

export const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'CommuteTimely',
  description: 'Smart notifications that tell you exactly when to leave. Never be late again.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'iOS, Android',
  url: 'https://commutetimely.com',
  downloadUrl: 'https://commutetimely.com/download',
  softwareVersion: '1.0.0',
  releaseNotes: 'Initial release with smart commute notifications',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150',
    bestRating: '5',
    worstRating: '1'
  },
  featureList: [
    'Smart commute notifications',
    'Real-time traffic updates',
    'Multi-transport support',
    'Offline functionality',
    'Customizable alerts'
  ]
}

export default StructuredData
