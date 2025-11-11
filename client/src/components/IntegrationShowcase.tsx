import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const integrations = [
  {
    category: "Enterprise Data Platforms",
    items: ["Kafka", "Kinesis", "Pulsar", "RabbitMQ", "Snowflake", "Databricks", "BigQuery"],
    code: `sources.multi_cloud({
  kafka: { throughput: '5M/s' },
  snowflake: { warehouse: 'XL' },
  databricks: { ml_runtime: true }
})`
  },
  {
    category: "ML & Analytics",
    items: ["SageMaker", "Vertex AI", "MLflow", "Kubeflow", "TensorFlow", "PyTorch"],
    code: `ml.orchestrate({
  training: gpu_clusters,
  serving: auto_scale,
  monitoring: drift_detection
})`
  },
  {
    category: "Security & Compliance",
    items: ["Vault", "KMS", "HSM", "Zero Trust", "SIEM", "DLP"],
    code: `@enterprise_security({
  encryption: 'FIPS-140-2',
  compliance: ['SOC2', 'ISO27001'],
  zero_trust: true
})`
  },
  {
    category: "Cloud Infrastructure",
    items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "ArgoCD"],
    code: `deploy.multi_region({
  regions: global_coverage,
  failover: automatic,
  cost_optimization: true
})`
  }
];

export default function IntegrationShowcase() {
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
            Enterprise ecosystem integration
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamlessly connects to your cloud infrastructure, data platforms, ML systems, and security tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full" data-testid={`card-integration-${index}`}>
                <h3 className="text-lg font-semibold mb-4">{integration.category}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {integration.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="bg-background/50 rounded-md p-4 border border-border">
                  <pre className="text-xs font-mono text-muted-foreground leading-relaxed overflow-x-auto">
                    <code>{integration.code}</code>
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
