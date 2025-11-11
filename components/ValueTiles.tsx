export default function ValueTiles() {
  const tiles = [
    { title: "Reduce time-to-insight", desc: "Turn raw signals into governed features and decisions." },
    { title: "Lower ops toil", desc: "Automate reviews, escalations, and safe rollouts." },
    { title: "Governance by default", desc: "Policy gates and observability at every hop." },
    { title: "Ship faster", desc: "Blueprints that cut delivery time from months to weeks." }
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiles.map(t => (
        <div key={t.title} className="card p-6">
          <h3 className="font-semibold">{t.title}</h3>
          <p className="text-white/70 mt-2">{t.desc}</p>
        </div>
      ))}
    </div>
  );
}
