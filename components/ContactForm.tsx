"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
      const data = await res.json();
      setOk(data.ok);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input name="name" required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white" />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" name="email" required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white" />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea name="message" rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white" />
      </div>
      <button disabled={loading} className="btn btn-primary">{loading ? "Sending..." : "Send"}</button>
      {ok === true && <p className="text-emerald-400 text-sm">Thanks — we'll be in touch.</p>}
      {ok === false && <p className="text-rose-400 text-sm">Something went wrong. Try again.</p>}
    </form>
  );
}
