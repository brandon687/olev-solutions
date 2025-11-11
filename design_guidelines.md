# OLEV Solutions Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Premium SaaS/Developer Tools aesthetic
- Primary inspiration: Stripe (refined minimalism), Vercel (bold typography, technical precision), Linear (focused hierarchy)
- Dark-only theme with exceptional contrast ratios for credibility and sophistication
- Technical elegance: Clean, modern, professional without being sterile

## Typography System
**Font Stack**:
- Primary: Inter (via Google Fonts) - weights 400, 500, 600, 700
- Monospace: JetBrains Mono for technical elements, code snippets

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold, tight leading (leading-tight)
- H2 (Sections): text-3xl md:text-4xl lg:text-5xl, font-semibold
- H3 (Subsections): text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed for readability
- Micro-copy/Labels: text-sm, font-medium, tracking-wide uppercase for technical precision

## Layout & Spacing System
**Tailwind Units**: Consistent use of 4, 8, 12, 16, 20, 24, 32 for harmonious rhythm
- Section padding: py-20 md:py-32 for breathing room
- Component spacing: space-y-8 md:space-y-12 between major elements
- Container: max-w-7xl mx-auto px-6 md:px-8

## Core Sections & Components

### 1. Hero Section
- Full-width dark gradient background (subtle, not distracting)
- Centered content with max-w-4xl
- Animated OLEV logo mark above headline (subtle fade-in + scale)
- H1: "AI systems that work with your data, not against it."
- Subheadline: text-xl with muted styling
- Dual CTAs: Primary "Book a discovery call" + Secondary "See capabilities" (smooth scroll)
- Minimal height: h-screen but allow natural flow, not forced

### 2. Capabilities Section
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Outcome-driven cards with:
  - Icon/visual indicator (from Heroicons - simple, technical)
  - Bold benefit headline
  - Supporting description
  - Hover state: subtle lift and border glow
- Example: "Event streams to governed features in hours, not weeks"

### 3. Integration Flow Visualization
- Full-width dark panel with contained content (max-w-6xl)
- Animated flow diagram showing data movement through systems
- Use SVG with subtle animations: data flowing through nodes, connections lighting up sequentially
- Abstract representation (boxes, arrows, nodes) - technical but not revealing proprietary methods
- Labels: "Your Stack" → "OLEV Layer" → "Optimized Output"

### 4. Social Proof
- Two-column grid: testimonials on left, partner/client logos on right
- Testimonial cards: quote, name, company, role
- Clean borders, generous padding (p-8)
- Partner logos: grayscale with slight opacity, brightens on hover

### 5. Final CTA Section
- Centered, focused design
- Dark gradient background different from hero for distinction
- H2: "Ready to accelerate your systems?"
- Single primary CTA: "Book a discovery call"
- Supporting text: "We're selective. If you're building at scale, let's talk."

### 6. Footer
- Three-column layout on desktop, stacked on mobile
- Column 1: OLEV logo + tagline "Systems that ship."
- Column 2: Quick links (Capabilities, Case Studies, Contact)
- Column 3: Contact info placeholder
- Bottom bar: Copyright "© OLEV — Systems that ship."

## Component Library

**Buttons**:
- Primary: Bold background, high contrast text, generous padding (px-8 py-4), rounded-lg
- Secondary: Border-only with hover fill transition
- All buttons: Smooth transitions, subtle shadow on hover

**Cards**:
- Dark background with subtle border
- Rounded corners (rounded-xl)
- Padding: p-6 md:p-8
- Hover: Translate-y lift + border color change

**Form Elements** (Discovery Call):
- Input fields: Dark background, light border, focus ring with brand accent
- Labels: Above inputs, font-medium, text-sm
- Full-width inputs with consistent height (h-12)

## Visual Effects & Animation
**Minimal, Purposeful Animations**:
- Logo: Fade + scale on page load (0.5s)
- Flow diagram: Sequential connection lighting (2-3s loop, subtle)
- Scroll-triggered fades: Sections fade in as they enter viewport (intersection observer)
- Button hovers: Scale 1.02, shadow increase
- Card hovers: translateY(-4px)

**No Animations**: 
- No parallax
- No excessive scroll effects
- No distracting particles or background animations

## Images
**Hero Section**: Abstract technical visualization as background
- Description: Dark gradient with subtle geometric patterns or abstract data visualization overlay
- Treatment: Low opacity (20-30%), blur effect for depth
- Purpose: Adds sophistication without competing with text

**Flow Visualization**: Custom SVG diagrams (not photography)
- Wireframe-style node graphs showing data flow
- Animated connection lines between components

## Accessibility
- Maintain WCAG AAA contrast ratios throughout
- Focus indicators on all interactive elements
- Semantic HTML structure
- Keyboard navigation support

## Brand Personality Through Design
- **Precise**: Clean alignment, consistent spacing, technical typography
- **Premium**: Generous whitespace, high-quality visual elements, refined interactions
- **Confident**: Bold typography, clear CTAs, direct messaging
- **Selective**: Focused content, no bloat, purposeful sections