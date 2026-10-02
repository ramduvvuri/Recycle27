# Technical Architecture

## 1. Application Routes
- Built using **Next.js 16 (App Router)**.
- Every major page is a directory inside `app/` (e.g., `app/about/page.tsx`).
- There are no dynamic routes (`[id]`); the site is fully static.
- Uses a unified `<SectionWrapper>` to maintain consistent vertical and horizontal padding across routes.

## 2. Shared Components
- Component architecture is atomic and structured in `components/`.
- `components/ui/` for primitives.
- `components/shared/` for recurring complex blocks (PageHero, InteractiveMap).
- `components/sections/` for distinct content sections that might be reused (e.g. `AboutSection` on the homepage and the about page).

## 3. Static Data
- Data layer is decoupled from the UI.
- Arrays and objects live in `data/` (e.g., `themes.ts`, `speakers.ts`).
- Pages map over these data objects.
- **No Database:** Supabase and all related administrative/database logic have been permanently removed.

## 4. Asset System
- All images, SVGs, and documents live in `public/`.
- Next.js `next/image` is used for automatic WebP conversion and optimization.

## 5. Motion System
- Powered by `framer-motion`.
- Encapsulated within `components/motion/` to prevent polluting JSX with animation variants.
- Example: `<Reveal>` wraps content to fade and slide up automatically when in view.

## 6. Responsive Strategy
- Relies exclusively on Tailwind CSS breakpoints (`md`, `lg`, `xl`).
- Elements that are visually complex (like parallax backgrounds or split sections) are sometimes gracefully hidden on smaller screens (`hidden md:flex`) to preserve readability and scroll performance.

## 7. Contact/Email Flow
- Form submission triggers a Next.js Server Action in `lib/public/actions.ts`.
- `nodemailer` sends the email via standard SMTP.
- Client receives a success/error boolean without exposing email credentials.

## 8. Deployment Boundary
- The application boundaries stop at the static site generation.
- There is no admin panel, no authentication, and no user sessions.
- Vercel or any standard Node.js server can host the output of `npm run build`.
