# Developer Guide — ReCYCLE 2027

## Technical Stack
- **Framework:** Next.js 16.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 
- **Animations:** Framer Motion

## Folder Structure
- `app/` - Next.js pages and routing. Each directory is a distinct page (e.g., `app/about/page.tsx`).
- `components/` 
  - `layout/` - Standard wrappers (Navbar, Footer, Breadcrumbs).
  - `sections/` - Reusable page sections (AboutSection, ContactSection).
  - `shared/` - Smaller reusable blocks (PageHero, FinalCTA, InteractiveMap, Countdown).
  - `ui/` - Primitives (Button).
  - `motion/` - Animation utilities (Reveal, ScrollParallax).
- `data/` - Static JSON-like configuration for conference data (speakers, dates, themes).
- `lib/` - Utilities and Server Actions (e.g., `lib/public/actions.ts` for nodemailer).
- `public/images/` - Static assets for pages.
- `docs/` - System architecture and documentation.

## Routing Architecture
This is a fully static content site using standard App Router structure. There are no dynamic routes (`[id]`). Every page maps exactly to a folder in `app/`.

## Data Layer
Data is fully centralized in `data/` via static TypeScript objects. There is no database or Supabase configuration. This reduces complexity and ensures fast static generation. If you need to edit speakers, edit `data/speakers.ts`.

## Image Layer
Images are handled with `next/image`. Always ensure images are properly optimized. Static imports or absolute paths in `public/` are used. Ensure you check `public/images/` for correct paths.

## Motion System
The project uses `framer-motion` heavily. Use standard wrappers in `components/motion/` (e.g. `<Reveal>`) rather than defining new motion components from scratch. This guarantees uniform timing.

## Responsive Strategy
- The site follows standard Tailwind breakpoints (`md`, `lg`, `xl`).
- Mobile-first approach. 
- Some visual decorations (like parallax background elements) are hidden on mobile using `hidden md:flex` to prevent layout breaking or scrolling issues.

## Contact Form & Email Flow
- Powered by standard Next.js Server Actions (`lib/public/actions.ts`).
- Uses `nodemailer` to dispatch emails. 
- Requires `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` environment variables in production.

## Deployment Architecture
- Deployable natively on Vercel or Node.js runtime.
- Since the data is static, `next build` pre-renders all HTML.
- Vercel is the recommended host for edge-optimized server actions.
