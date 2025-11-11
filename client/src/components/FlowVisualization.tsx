import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FlowVisualization() {
  const [activeConnection, setActiveConnection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 'source', x: 50, y: 150, label: 'Your Stack' },
    { id: 'process1', x: 200, y: 80, label: 'Ingest' },
    { id: 'process2', x: 200, y: 150, label: 'Transform' },
    { id: 'process3', x: 200, y: 220, label: 'Validate' },
    { id: 'olev', x: 350, y: 150, label: 'OLEV Layer' },
    { id: 'output', x: 500, y: 150, label: 'Optimized Output' },
  ];

  const connections = [
    { from: 'source', to: 'process1', active: activeConnection === 0 },
    { from: 'source', to: 'process2', active: activeConnection === 0 },
    { from: 'source', to: 'process3', active: activeConnection === 0 },
    { from: 'process1', to: 'olev', active: activeConnection === 1 },
    { from: 'process2', to: 'olev', active: activeConnection === 1 },
    { from: 'process3', to: 'olev', active: activeConnection === 1 },
    { from: 'olev', to: 'output', active: activeConnection === 2 },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Complex flows, simplified
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We orchestrate your data pipeline end-to-end
          </p>
        </motion.div>

        <div className="relative bg-background/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 overflow-hidden">
          <svg className="w-full h-80" viewBox="0 0 550 300">
            {connections.map((conn, idx) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              return (
                <motion.line
                  key={idx}
                  x1={fromNode.x + 40}
                  y1={fromNode.y}
                  x2={toNode.x - 40}
                  y2={toNode.y}
                  stroke={conn.active ? "hsl(var(--primary))" : "hsl(var(--border))"}
                  strokeWidth={conn.active ? 3 : 1.5}
                  strokeDasharray={conn.active ? "0" : "5,5"}
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: conn.active ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}

            {nodes.map((node, idx) => (
              <g key={node.id}>
                <motion.rect
                  x={node.x - 40}
                  y={node.y - 20}
                  width="80"
                  height="40"
                  rx="6"
                  fill="hsl(var(--card))"
                  stroke={node.id === 'olev' ? "hsl(var(--primary))" : "hsl(var(--border))"}
                  strokeWidth={node.id === 'olev' ? 2 : 1.5}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />
                <text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  className="fill-foreground text-xs font-medium font-mono"
                >
                  {node.label}
                </text>
              </g>
            ))}

            <motion.circle
              cx={nodes[activeConnection + 1]?.x || 50}
              cy={nodes[activeConnection + 1]?.y || 150}
              r="4"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
