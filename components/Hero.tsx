"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32">
      <div className="container text-center">
        <div className="relative mx-auto max-w-3xl">
          <motion.div
            className="absolute -inset-20 -z-10 rounded-full blur-3xl bg-brand/20"
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            AI systems that work with your data, not against it.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            OLEV designs and deploys secure, scalable automation for modern tech teams—integrating with your stack to reduce toil and accelerate delivery.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a className="btn btn-primary" href={process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:hello@olev.systems"}>Book a discovery call</a>
            <a className="btn btn-ghost" href="#capabilities">See capabilities</a>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <NetworkBackdrop />
      </div>
    </section>
  );
}

function NetworkBackdrop() {
  // subtle animated dots/lines
  const rows = 12, cols = 24;
  const dots = Array.from({ length: rows * cols }).map((_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none mx-auto max-w-5xl grid grid-cols-24 gap-1 opacity-40">
      {dots.map((i) => (
        <motion.div
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white/30"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: (i % 24) * 0.05 }}
        />
      ))}
    </div>
  );
}
