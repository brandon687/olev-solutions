import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60">© OLEV — Systems that ship.</p>
        <nav className="flex gap-6 text-white/70">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/case-studies">Case Studies</Link>
        </nav>
      </div>
    </footer>
  );
}
