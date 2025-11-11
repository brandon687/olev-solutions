"use client";
import { useEffect, useState } from "react";

const items = [
  { quote: "OLEV delivered a resilient automation backbone we trust.", name: "CTO, B2B SaaS (redacted)" },
  { quote: "From chaos to clear, governed flows—faster than expected.", name: "Head of Data, Enterprise (redacted)" },
  { quote: "They ship. They care about outcomes. We'd hire them again.", name: "VP Eng, Fintech (redacted)" }
];

export default function TestimonialCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(prev => (prev + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, []);
  const current = items[i];

  return (
    <div className="card p-8 text-center">
      <p className="text-xl leading-relaxed">“{current.quote}”</p>
      <p className="mt-4 text-white/60">{current.name}</p>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Go to ${idx+1}`}
            className={`h-2 w-2 rounded-full ${i===idx ? "bg-white" : "bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
}
