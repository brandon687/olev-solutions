export default function IntegrationsGrid() {
  const items = [
    { title: "Data Pipelines", blurb: "From event streams to governed features in hours, not weeks.", tools: ["Snowflake","Databricks","Postgres","Kafka","dbt"] },
    { title: "RAG & Search", blurb: "Secure retrieval and semantic search over your private corp data.", tools: ["OpenAI","Anthropic","Vertex AI","Pinecone","Weaviate"] },
    { title: "Workflow Orchestration", blurb: "Deterministic, observable, human-in-the-loop flows.", tools: ["Airflow","Temporal","Argo","Dagster","Prefect"] },
    { title: "Quality & Governance", blurb: "Guardrails, policy gates, and review workflows.", tools: ["Great Expectations","Monte Carlo","OPA","Cloud IAM"] },
    { title: "LLM App UX", blurb: "Delightful surfaces your users actually trust.", tools: ["Next.js","Vercel","React","Radix","shadcn/ui"] },
    { title: "Observability", blurb: "Understand cost, latency, drift, and impact.", tools: ["OpenTelemetry","Grafana","Prometheus","Sentry"] }
  ];
  return (
    <div id="capabilities">
      <h2 className="text-3xl font-semibold mb-6">Integrations & Capabilities</h2>
      <p className="text-white/70 max-w-2xl mb-8">Outcome-focused solutions. We integrate with your stack while keeping proprietary methods confidential.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="text-white/70 mt-2">{it.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {it.tools.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
