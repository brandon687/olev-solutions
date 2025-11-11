import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onBookCall?: () => void;
}

export default function CTASection({ onBookCall }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Ready to accelerate your systems?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          We're selective. If you're building at scale, let's talk.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 min-h-14"
          onClick={onBookCall}
          data-testid="button-cta-book-call"
        >
          Book a discovery call
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  );
}
