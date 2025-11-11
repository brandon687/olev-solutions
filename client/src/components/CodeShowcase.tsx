import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const codeExamples = [
  {
    title: "Global IoT Fleet Management",
    snippet: `pipeline
  .ingest(sources.iot.global)
    .partition('device_id', 'region')
    .validate(schemas.telemetry)
  .enrich(context.device_metadata)
  .route({
    anomalies: ml.models.anomaly_v3,
    metrics: timeseries.aggregate(1m),
    commands: orchestrator.prioritize()
  })
  .scale({ throughput: '5M events/sec' })`,
    metrics: ["5M events/sec", "99.99% uptime", "12 regions"],
    improvement: "Real-time processing at global scale"
  },
  {
    title: "Multi-Tenant Data Governance",
    snippet: `@governed({
  isolation: 'tenant',
  compliance: ['SOC2', 'GDPR', 'HIPAA'],
  encryption: { at_rest: 'AES-256', in_transit: 'TLS1.3' }
})
pipeline
  .stream(sources.customer_data)
  .classify(pii_detector)
  .mask(policies.regional)
  .audit(immutable_log)`,
    metrics: ["Zero data leaks", "Real-time PII masking", "Automated compliance"],
    improvement: "Enterprise-grade security by default"
  },
  {
    title: "Predictive Supply Chain Optimization",
    snippet: `orchestrator
  .sources([
    inventory.global,
    logistics.realtime,
    demand.forecast
  ])
  .analyze(ml.ensemble.predict_v2)
  .optimize({
    constraints: ['cost', 'speed', 'sustainability'],
    solver: 'mixed_integer_linear'
  })
  .execute(actions.rebalance)`,
    metrics: ["40% cost reduction", "2hr response time", "99.7% forecast accuracy"],
    improvement: "AI-driven decision making at scale"
  }
];

export default function CodeShowcase() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Mission-critical systems at scale
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Production architectures powering global operations
          </p>
        </motion.div>

        <div className="space-y-8">
          {codeExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-primary/20 bg-card" data-testid={`card-system-${index}`}>
                <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3">
                      <Zap className="h-6 w-6 text-primary" />
                      {example.title}
                    </h3>
                    <p className="text-muted-foreground">{example.improvement}</p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {example.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-md font-semibold border border-primary/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-6 border border-border">
                  <div className="text-xs text-muted-foreground font-medium mb-3 uppercase tracking-wide">
                    OLEV Architecture Pattern
                  </div>
                  <pre className="text-sm font-mono text-foreground/90 leading-relaxed overflow-x-auto">
                    <code>{example.snippet}</code>
                  </pre>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
