import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function AdvancedFlows() {
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const flows = [
    {
      name: "Data Ingestion",
      steps: [
        { id: "source1", label: "API", x: 50, y: 50 },
        { id: "source2", label: "DB", x: 50, y: 120 },
        { id: "source3", label: "Queue", x: 50, y: 190 },
        { id: "validate", label: "Validate", x: 200, y: 50 },
        { id: "transform", label: "Transform", x: 200, y: 120 },
        { id: "enrich", label: "Enrich", x: 200, y: 190 },
        { id: "route", label: "Route", x: 350, y: 120 },
        { id: "dest1", label: "Analytics", x: 500, y: 50 },
        { id: "dest2", label: "Storage", x: 500, y: 120 },
        { id: "dest3", label: "ML", x: 500, y: 190 },
      ],
      improvements: ["Schema validation", "Auto-retry logic", "Dead letter queue"]
    },
    {
      name: "Security Pipeline",
      steps: [
        { id: "request", label: "Request", x: 50, y: 120 },
        { id: "auth", label: "Auth", x: 180, y: 80 },
        { id: "rbac", label: "RBAC", x: 180, y: 160 },
        { id: "audit", label: "Audit", x: 310, y: 80 },
        { id: "encrypt", label: "Encrypt", x: 310, y: 160 },
        { id: "execute", label: "Execute", x: 440, y: 120 },
      ],
      improvements: ["SOC2 compliant", "Real-time audit", "Auto-encryption"]
    },
    {
      name: "Feature Deployment",
      steps: [
        { id: "code", label: "Code", x: 50, y: 120 },
        { id: "test", label: "Test", x: 150, y: 80 },
        { id: "validate", label: "Validate", x: 150, y: 160 },
        { id: "canary", label: "Canary", x: 260, y: 80 },
        { id: "monitor", label: "Monitor", x: 260, y: 160 },
        { id: "rollout", label: "Rollout", x: 370, y: 120 },
        { id: "observe", label: "Observe", x: 480, y: 120 },
      ],
      improvements: ["Auto-rollback", "A/B testing", "Real-time metrics"]
    }
  ];

  const currentFlow = flows[activeFlow];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Enterprise-grade orchestration
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready pipelines with built-in governance, security, and observability
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {flows.map((flow, index) => (
            <button
              key={flow.name}
              onClick={() => setActiveFlow(index)}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeFlow === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background/50 text-muted-foreground hover:text-foreground'
              }`}
              data-testid={`button-flow-${index}`}
            >
              {flow.name}
            </button>
          ))}
        </div>

        <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 mb-8">
          <motion.div
            key={activeFlow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-full h-64" viewBox="0 0 550 240">
              {currentFlow.steps.map((step, idx) => {
                const nextStep = currentFlow.steps[idx + 1];
                if (nextStep) {
                  return (
                    <motion.line
                      key={`line-${idx}`}
                      x1={step.x + 60}
                      y1={step.y + 15}
                      x2={nextStep.x - 10}
                      y2={nextStep.y + 15}
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    />
                  );
                }
                return null;
              })}

              {currentFlow.steps.map((step, idx) => (
                <g key={step.id}>
                  <motion.rect
                    x={step.x}
                    y={step.y}
                    width="70"
                    height="30"
                    rx="4"
                    fill="hsl(var(--card))"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  />
                  <text
                    x={step.x + 35}
                    y={step.y + 20}
                    textAnchor="middle"
                    className="fill-foreground text-xs font-medium font-mono"
                  >
                    {step.label}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>
        </div>

        <motion.div
          key={`improvements-${activeFlow}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          {currentFlow.improvements.map((improvement, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="px-4 py-2 text-sm"
              data-testid={`badge-improvement-${idx}`}
            >
              {improvement}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
