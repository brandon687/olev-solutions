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
      name: "Real-Time Manufacturing",
      steps: [
        { id: "sensors", label: "200K Sensors", x: 50, y: 50, highlight: true },
        { id: "edge", label: "Edge Process", x: 180, y: 50 },
        { id: "stream", label: "Stream (5M/s)", x: 180, y: 120 },
        { id: "ml", label: "ML Predict", x: 310, y: 50 },
        { id: "optimize", label: "Optimize", x: 310, y: 120 },
        { id: "control", label: "Control", x: 440, y: 85 },
        { id: "monitor", label: "Monitor", x: 310, y: 190 },
      ],
      improvements: ["5M events/sec", "50ms latency", "Predictive maintenance", "Zero downtime"],
      scale: "Global manufacturing network"
    },
    {
      name: "Financial Trading",
      steps: [
        { id: "market", label: "Market Data", x: 50, y: 120, highlight: true },
        { id: "normalize", label: "Normalize", x: 160, y: 80 },
        { id: "enrich", label: "Enrich", x: 160, y: 160 },
        { id: "risk", label: "Risk Engine", x: 280, y: 80 },
        { id: "strategy", label: "Strategy", x: 280, y: 160 },
        { id: "execute", label: "Execute", x: 400, y: 120 },
        { id: "comply", label: "Compliance", x: 280, y: 230 },
      ],
      improvements: ["<10μs latency", "Real-time risk", "Automated compliance", "Multi-asset"],
      scale: "High-frequency trading systems"
    },
    {
      name: "Autonomous Fleet",
      steps: [
        { id: "vehicles", label: "10K Vehicles", x: 50, y: 85, highlight: true },
        { id: "telemetry", label: "Telemetry", x: 170, y: 50 },
        { id: "routing", label: "Route Plan", x: 170, y: 120 },
        { id: "predict", label: "Predict", x: 290, y: 50 },
        { id: "optimize", label: "Optimize", x: 290, y: 120 },
        { id: "dispatch", label: "Dispatch", x: 410, y: 85 },
        { id: "safety", label: "Safety Net", x: 290, y: 190 },
      ],
      improvements: ["Real-time routing", "99.99% safety", "Multi-region", "Predictive analytics"],
      scale: "Continental logistics network"
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
            Systems that power industry leaders
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise architectures handling millions of operations per second
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
          <div className="text-sm text-muted-foreground font-medium mb-6 uppercase tracking-wide text-center">
            {currentFlow.scale}
          </div>
          <motion.div
            key={activeFlow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-full h-72" viewBox="0 0 500 280">
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
                      strokeWidth="2.5"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    />
                  );
                }
                return null;
              })}

              {currentFlow.steps.map((step, idx) => (
                <g key={step.id}>
                  <motion.rect
                    x={step.x - 45}
                    y={step.y - 22}
                    width="90"
                    height="44"
                    rx="6"
                    fill={(step as any).highlight ? "hsl(var(--primary) / 0.15)" : "hsl(var(--card))"}
                    stroke={(step as any).highlight ? "hsl(var(--primary))" : "hsl(var(--border))"}
                    strokeWidth={(step as any).highlight ? "2.5" : "1.5"}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  />
                  <text
                    x={step.x}
                    y={step.y + 5}
                    textAnchor="middle"
                    className={`text-xs font-semibold font-mono ${(step as any).highlight ? 'fill-primary' : 'fill-foreground'}`}
                  >
                    {step.label}
                  </text>
                  {(step as any).highlight && (
                    <motion.circle
                      cx={step.x - 35}
                      cy={step.y - 12}
                      r="3"
                      fill="hsl(var(--primary))"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1 }}
                    />
                  )}
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
