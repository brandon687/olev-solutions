import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Events Processed", value: 2847392, suffix: "/sec", animate: true },
  { label: "Global Uptime", value: 99.997, suffix: "%", decimals: 3 },
  { label: "Active Regions", value: 18, suffix: "" },
  { label: "Avg Latency", value: 47, suffix: "ms" },
];

export default function MetricsBar() {
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const intervals = metrics.map((metric, index) => {
      if (!metric.animate) {
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = metric.value;
          return newCounts;
        });
        return null;
      }

      const duration = 2000;
      const steps = 60;
      const increment = metric.value / steps;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        if (step <= steps) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(increment * step, metric.value);
            return newCounts;
          });
        } else {
          clearInterval(interval);
        }
      }, duration / steps);

      return interval;
    });

    return () => {
      intervals.forEach(interval => interval && clearInterval(interval));
    };
  }, []);

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
              data-testid={`metric-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-mono">
                {metric.decimals
                  ? counts[index].toFixed(metric.decimals)
                  : Math.floor(counts[index]).toLocaleString()}
                <span className="text-xl text-muted-foreground">{metric.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
