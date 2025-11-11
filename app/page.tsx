import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import AbstractFlowDiagram from "@/components/AbstractFlowDiagram";
import ValueTiles from "@/components/ValueTiles";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="section container">
        <IntegrationsGrid />
      </section>
      <section className="section container">
        <AbstractFlowDiagram />
      </section>
      <section className="section container">
        <ValueTiles />
      </section>
      <section className="section container">
        <TestimonialCarousel />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
