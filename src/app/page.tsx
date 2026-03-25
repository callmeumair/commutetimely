import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BentoGridSection from "@/components/sections/BentoGridSection";
import ExecutiveDashboardSection from "@/components/sections/ExecutiveDashboardSection";
import NeuralInfraSection from "@/components/sections/NeuralInfraSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import { faqs } from "@/lib/faq-data";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import KineticGrid from "@/components/KineticGrid";
import { Toaster } from "sonner";
import { generateFAQSchema } from "@/lib/seo";

export default function Home() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })));

  return (
    <div className="min-h-screen relative" style={{ background: "#020617" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <KineticGrid />
      <Navbar />
      <main>
        <HeroSection />
        <BentoGridSection />
        <ExecutiveDashboardSection />
        <NeuralInfraSection />
        <ComparisonSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <Toaster position="bottom-center" theme="dark" richColors />
    </div>
  );
}

