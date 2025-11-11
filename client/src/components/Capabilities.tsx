import { motion } from "framer-motion";
import { Zap, Shield, Workflow, Database, GitBranch, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";

const capabilities = [
  {
    icon: Zap,
    title: "Event streams to governed features",
    description: "From event streams to governed features in hours, not weeks. Real-time processing with compliance built in.",
  },
  {
    icon: Shield,
    title: "Security-first automations",
    description: "Enterprise-grade security automations and failsafes that protect your systems while accelerating deployment.",
  },
  {
    icon: Workflow,
    title: "Complex workflow orchestration",
    description: "Design and deploy multi-system workflows that integrate seamlessly with your existing tech stack.",
  },
  {
    icon: Database,
    title: "Data intelligence at scale",
    description: "Transform raw data into actionable insights that power strategic decisions across your organization.",
  },
  {
    icon: GitBranch,
    title: "Seamless integrations",
    description: "Connect to your tools—databases, APIs, cloud services—without disrupting existing operations.",
  },
  {
    icon: Gauge,
    title: "Performance optimization",
    description: "Reduce operational toil and accelerate delivery with AI-powered automation that scales with you.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Built for technical excellence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Outcome-driven solutions that integrate with your stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 md:p-8 h-full hover-elevate active-elevate-2 transition-transform duration-200" data-testid={`card-capability-${index}`}>
                <capability.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
