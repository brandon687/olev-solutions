"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "backdrop-blur bg-black/30 border-b border-white/10" : ""}`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-brand"></div>
          <span className="font-semibold">OLEV</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/case-studies" className="text-white/80 hover:text-white">Case Studies</Link>
          <Link href="/privacy" className="text-white/80 hover:text-white">Privacy</Link>
          <Link href="/terms" className="text-white/80 hover:text-white">Terms</Link>
          <a href={process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:hello@olev.systems"} className="btn btn-primary">Book a discovery call</a>
        </nav>
      </div>
    </header>
  );
}
