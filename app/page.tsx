import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FAQSection from '@/components/FAQSection'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
