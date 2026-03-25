import { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import KineticGrid from "@/components/KineticGrid";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | CommuteTimely",
  description: "Get in touch with the CommuteTimely team for support, feedback, or business inquiries.",
  alternates: { canonical: "https://commutetimely.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen relative bg-[#020617]">
      <KineticGrid />
      <Navbar />
      <main className="pt-32 pb-16 relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="flex-1 pt-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-white/60 font-light mb-12 leading-relaxed">
              Have questions about CommuteTimely? Found a bug? Want to partner? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-white font-medium mb-3 tracking-wide">Direct Channels</h3>
                <p className="text-[#3A7BFF] font-mono text-sm mb-2 hover:underline cursor-pointer">hello@commutetimely.com</p>
                <p className="text-[#3A7BFF] font-mono text-sm hover:underline cursor-pointer">@CommuteTimely</p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3 tracking-wide">Office</h3>
                <address className="text-white/60 font-mono text-sm not-italic leading-relaxed">
                  CommuteTimely, Inc.<br />
                  San Francisco, CA
                </address>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
