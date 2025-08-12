export const config = {
  // Waitlist form URL - update this with your actual Google Forms or other form URL
  WAITLIST_FORM_URL: process.env.NEXT_PUBLIC_WAITLIST_FORM_URL || 'https://forms.gle/your-waitlist-form-id',
  
  // App information
  APP_NAME: 'CommuteTimely',
  APP_DESCRIPTION: 'Smart notifications that tell you exactly when to leave',
  LAUNCH_DATE: 'September 2025',
  
  // Contact information
  WEBSITE_URL: 'https://commutetimely.com',
  SUPPORT_EMAIL: 'support@commutetimely.com',
  
  // Social media (update with actual URLs when available)
  TWITTER_HANDLE: '@commutetimely',
  LINKEDIN_URL: 'https://linkedin.com/company/commutetimely',
  
  // Features
  SUPPORTED_TRANSPORT_MODES: ['car', 'bus', 'train', 'biking', 'walking'],
  SUPPORTED_PLATFORMS: ['iOS', 'Android'],
  
  // Analytics (optional)
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GA_ID,
  MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
} as const
