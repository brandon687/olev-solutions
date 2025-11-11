import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const codeExamples = [
  {
    title: "Event Stream Processing",
    before: `// Manual implementation
const events = await fetchEvents();
for (const event of events) {
  await validate(event);
  await transform(event);
  await store(event);
}`,
    after: `// OLEV automated pipeline
pipeline.stream('events')
  .validate()
  .transform()
  .store()
  .monitor();`,
    improvement: "80% reduction in deployment time"
  },
  {
    title: "Security & Compliance",
    before: `// Ad-hoc security checks
if (user.role === 'admin') {
  // Manual audit logging
  logAction(user, action);
  executeAction(action);
}`,
    after: `// OLEV governed execution
@secured()
@audited()
@compliant('SOC2')
async executeAction(action) {
  return pipeline.execute(action);
}`,
    improvement: "100% audit coverage"
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
            From complexity to clarity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how OLEV transforms manual workflows into governed, scalable systems
          </p>
        </motion.div>

        <div className="space-y-12">
          {codeExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                {example.title}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm" data-testid={`code-before-${index}`}>
                  <div className="text-sm text-muted-foreground font-medium mb-3 uppercase tracking-wide">
                    Before
                  </div>
                  <pre className="text-sm font-mono text-muted-foreground leading-relaxed overflow-x-auto">
                    <code>{example.before}</code>
                  </pre>
                </Card>

                <Card className="p-6 border-primary/30 bg-card" data-testid={`code-after-${index}`}>
                  <div className="text-sm text-primary font-medium mb-3 uppercase tracking-wide">
                    After — OLEV
                  </div>
                  <pre className="text-sm font-mono text-foreground leading-relaxed overflow-x-auto">
                    <code>{example.after}</code>
                  </pre>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-primary">{example.improvement}</p>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
