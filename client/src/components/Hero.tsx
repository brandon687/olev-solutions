import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OLEVLogo from "./OLEVLogo";
import heroBackground from "@assets/generated_images/Dark_tech_hero_background_5379c6b6.png";

interface HeroProps {
  onBookCall?: () => void;
  onSeeCapabilities?: () => void;
}

export default function Hero({ onBookCall, onSeeCapabilities }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <OLEVLogo className="w-64 h-20 mx-auto mb-16" animated={true} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-foreground"
        >
          AI systems that work with your data,{" "}
          <span className="text-primary">not against it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          OLEV designs and deploys secure, scalable automation for modern tech teams—integrating with your stack to reduce toil and accelerate delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 min-h-14"
            onClick={onBookCall}
            data-testid="button-book-call"
          >
            Book a discovery call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 min-h-14 backdrop-blur-sm bg-background/20"
            onClick={onSeeCapabilities}
            data-testid="button-see-capabilities"
          >
            See capabilities
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
