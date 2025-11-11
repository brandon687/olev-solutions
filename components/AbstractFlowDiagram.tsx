"use client";
import { motion } from "framer-motion";

const flows = [
  {
    title: "Event → Feature → Model → Action",
    steps: ["User Event","Ingest","Validate","Transform","Feature Store","Model","Action"]
  },
  {
    title: "Document → Reason → Route → Deliver",
    steps: ["Document","Chunk/Index","Policy Gate","Query","Reason","Route","Deliver"]
  },
  {
    title: "ETL → Semantic → Agent → HIL",
    steps: ["ETL","Semantic Layer","AI Agent","Ticket/Alert","Human-in-the-loop"]
  }
];

export default function AbstractFlowDiagram() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Solution Flows (Abstracted)</h2>
      <p className="text-white/70 max-w-2xl mb-8">High-level architectures that hint at complexity without exposing proprietary internals.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {flows.map((f) => (
          <div key={f.title} className="card p-6">
            <h3 className="font-semibold">{f.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {f.steps.map((s, i) => (
                <motion.span
                  key={s}
                  className="badge"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
