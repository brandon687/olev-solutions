export default function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold">Ready to explore an AI system roadmap?</h2>
          <p className="text-white/70 mt-2">Let’s map outcomes, constraints, and a safe path to production.</p>
          <div className="mt-6">
            <a className="btn btn-primary" href={process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:hello@olev.systems"}>Book a discovery call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
