import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OLEV — AI systems that work with your data",
  description: "OLEV designs and deploys secure, scalable automation and data systems.",
  openGraph: { title: "OLEV", description: "AI systems that work with your data." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
