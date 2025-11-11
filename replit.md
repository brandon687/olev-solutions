# OLEV Solutions Landing Page

## Overview

OLEV Solutions is a marketing landing page for an AI systems consulting firm that specializes in deploying secure, scalable automation for tech teams. The application is a single-page marketing site built with React, featuring a dark theme, premium SaaS aesthetic, and animated components to showcase the company's capabilities in AI deployment, workflow orchestration, and data pipeline automation.

**Technology Stack:**
- Frontend: React 18 with TypeScript, Vite build system
- Backend: Express.js server with in-memory storage
- Styling: Tailwind CSS with shadcn/ui component library
- Animations: Framer Motion
- Database: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
- Routing: Wouter (lightweight client-side routing)

**Primary Purpose:** Generate leads through contact form submissions and showcase technical capabilities to selective tech firms looking for AI deployment solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component-Based Structure:**
- Single-page application with modular, reusable React components
- Component library based on shadcn/ui (Radix UI primitives with Tailwind styling)
- Path aliases configured for clean imports (`@/` for client code, `@shared/` for shared types)

**Key Architectural Decisions:**
1. **Dark-First Design System**: Exclusively dark theme following Stripe/Vercel/Linear aesthetic with exceptional contrast ratios for credibility
2. **Animation Strategy**: Framer Motion for sophisticated animations (logo animations, scroll-triggered reveals, data flow visualizations)
3. **Typography**: Inter for UI, JetBrains Mono for code snippets and technical elements
4. **Component Organization**: Separate directories for UI primitives (`components/ui/`) and feature components (`components/`)

**Design Guidelines:**
- Reference-based approach inspired by premium SaaS tools (Stripe, Vercel, Linear)
- Consistent spacing system using Tailwind units (4, 8, 12, 16, 20, 24, 32)
- Section-based layout with full-width hero and contained content sections
- Outcome-driven capability cards with hover states and visual indicators

### Backend Architecture

**Server Implementation:**
- Express.js with TypeScript for type safety
- Middleware: JSON body parsing, URL-encoded forms, request logging
- Custom request timing and response logging for API endpoints

**Storage Strategy:**
- **Current**: In-memory storage (`MemStorage` class) for development/demo purposes
- **Planned**: PostgreSQL database with Drizzle ORM (schema defined, migrations configured)
- Interface-based design (`IStorage`) allows swapping storage implementations without code changes

**API Design:**
- RESTful endpoints under `/api` prefix
- Contact form submission: `POST /api/contact`
- Contact retrieval: `GET /api/contact-submissions`
- Zod validation for incoming data against shared schema

### Data Storage Solutions

**Database Configuration:**
- Drizzle ORM with PostgreSQL dialect
- Connection via `@neondatabase/serverless` for serverless Postgres compatibility
- Migration files in `/migrations` directory
- Schema definition in `shared/schema.ts` for type sharing between frontend and backend

**Schema Design:**
```
users table: id, username, password
contact_submissions table: id, name, email, company, message, submittedAt
```

**Type Safety:**
- Drizzle-zod integration for automatic validation schema generation
- Shared TypeScript types exported from schema file
- Insert schemas separate from select schemas (omit auto-generated fields)

### Authentication and Authorization

**Current Implementation:**
- No authentication required (public marketing site)
- User table exists in schema but not currently used
- Designed for future expansion if admin panel or user accounts needed

**Session Management:**
- `connect-pg-simple` included for PostgreSQL session storage when needed
- Currently no session handling as all content is public

### Build and Development

**Development Mode:**
- Vite dev server with HMR (Hot Module Replacement)
- Express server runs Vite middleware in development
- Custom error overlay via Replit plugin
- TypeScript checking with incremental builds

**Production Build:**
- Vite builds client to `dist/public`
- esbuild bundles server to `dist/index.js`
- Static file serving from build output
- ESM module format throughout

**Configuration Files:**
- `tsconfig.json`: Strict TypeScript with path aliases
- `vite.config.ts`: React plugin, path resolution, build output configuration
- `tailwind.config.ts`: Extended theme with custom colors and utilities
- `drizzle.config.ts`: Database connection and migration settings

## External Dependencies

### Third-Party UI Components
- **Radix UI**: Accessible, unstyled component primitives (dialogs, popovers, accordions, navigation, forms)
- **shadcn/ui**: Pre-styled Radix components with Tailwind CSS
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for sophisticated UI transitions

### Data Management
- **TanStack React Query**: Server state management, caching, and data fetching
- **Drizzle ORM**: Type-safe database queries and schema management
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Form state management with `@hookform/resolvers` for Zod integration

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL provider (`@neondatabase/serverless`)
- **PostgreSQL**: Primary database (configured for future use)

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **class-variance-authority**: Type-safe variant styling
- **clsx** / **tailwind-merge**: Conditional class name utilities

### Development Tools
- **Vite**: Build tool and dev server
- **esbuild**: Fast JavaScript bundler for production
- **TypeScript**: Static type checking
- **Wouter**: Lightweight routing library
- **Replit Plugins**: Development banner, runtime error overlay, cartographer

### Fonts
- **Google Fonts**: Inter (primary UI font), JetBrains Mono (code font), DM Sans, Fira Code, Geist Mono, Architects Daughter

### Assets
- Generated images for hero background, testimonials stored in `attached_assets/generated_images/`

### Key Integration Points
1. **Form Submission Flow**: React Hook Form → Zod validation → API request → Express endpoint → Storage layer
2. **Data Fetching**: TanStack Query → API routes → Express handlers → Storage interface
3. **Styling Pipeline**: Tailwind classes → PostCSS → Vite build → Optimized CSS
4. **Type Safety**: Drizzle schema → Zod schema → TypeScript types → Shared across client/server