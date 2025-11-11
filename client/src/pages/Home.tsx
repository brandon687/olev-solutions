import { useState } from "react";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import CodeShowcase from "@/components/CodeShowcase";
import AdvancedFlows from "@/components/AdvancedFlows";
import IntegrationShowcase from "@/components/IntegrationShowcase";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactFormDialog from "@/components/ContactFormDialog";

export default function Home() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const handleBookCall = () => {
    setContactDialogOpen(true);
  };

  const handleSeeCapabilities = () => {
    const element = document.getElementById('capabilities');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onBookCall={handleBookCall} onSeeCapabilities={handleSeeCapabilities} />
      <Capabilities />
      <CodeShowcase />
      <AdvancedFlows />
      <IntegrationShowcase />
      <SocialProof />
      <CTASection onBookCall={handleBookCall} />
      <Footer />
      <ContactFormDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </div>
  );
}
