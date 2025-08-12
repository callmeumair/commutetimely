import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FAQSection from '@/components/FAQSection'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'
import StructuredData, { organizationSchema, websiteSchema, webpageSchema, mobileAppSchema } from '@/components/seo/StructuredData'

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData type="organization" data={organizationSchema} />
      <StructuredData type="website" data={websiteSchema} />
      <StructuredData type="webpage" data={webpageSchema} />
      <StructuredData type="mobileapp" data={mobileAppSchema} />
      
      <main className="min-h-screen bg-dark-950" id="main-content">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
        <DownloadSection />
        <Footer />
      </main>
    </>
  )
}
