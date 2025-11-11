# OLEV — Landing Page

A modern, Stripe-inspired landing page for **OLEV**, an AI systems consulting & deployments company. Built with **Next.js 14 + Tailwind + Framer Motion** and ready for **Replit**.

## Quick start (Replit)
1. Create a new Repl using the **Next.js** or **Node.js** template.
2. Upload this project or import from zip.
3. Ensure `replit.nix` is detected; if not, add it.
4. Install deps and run:
   ```bash
   pnpm install
   pnpm dev
   ```
5. Open on port **3000**.

## Scripts
- `pnpm dev` — local dev server
- `pnpm build && pnpm start` — production build

## Environment
Create `.env` (or use `.env.example`):
```
NEXT_PUBLIC_ANALYTICS=
NEXT_PUBLIC_CALENDLY_URL=
```

## Brand tokens
- Primary `#4F46E5` · Dark `#312E81` · Accent `#06B6D4` · Ink `#0B1021`
- Background: radial gradient `#0A0B10` → `#0F1222`
- Type: Inter (via next/font)

## Notes
- Contact form posts to `/api/contact` and logs to server console (replace with email/webhook).
- Diagrams, logos, testimonials are placeholders. Replace with real content.
