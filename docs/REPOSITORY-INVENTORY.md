# Repository Inventory

## Application Code (`app/`)
- Contains Next.js App Router definitions.
- Every directory corresponds to a conference page.
- Clean and matches the navigation structure.
- **Status**: Production code. Keep.

## Components (`components/`)
- Contains UI elements and page sections.
- Organized into:
  - `layout/`: Navbar, Footer, Breadcrumb
  - `motion/`: ScrollParallax, Reveal, etc.
  - `sections/`: Section-level components used across pages (About, Themes, etc.)
  - `shared/`: Page headers, modals, map, CTA components.
  - `ui/`: Primitives and small elements (Button, QuoteBlock, etc.)
- **Status**: Production code. Empty folders (e.g., `cards`, `home`) have been removed. Keep.

## Contexts (`contexts/`)
- Contains React Contexts, currently `RegistrationModalContext`.
- **Status**: Production code. Keep.

## Data (`data/`)
- Holds local/static conference information since Supabase was removed.
- **Status**: Production code. Centralized content source. Keep.

## Libraries (`lib/`)
- Utility functions (e.g., `utils.ts`, `animation.ts`, `public/actions.ts`).
- Supabase folder and admin logic have been completely deleted.
- **Status**: Production code. Keep.

## Public Assets (`public/`)
- Static assets like images, SVGs, and PDFs.
- Redundant and debug images have been deleted.
- Need to organize image folders.
- **Status**: Production assets. Keep.

## Types (`types/`)
- Contains TypeScript interfaces, particularly `database.ts`.
- **Status**: Review (need to ensure it's not holding obsolete Supabase types).

## Configuration (`package.json`, `next.config.ts`, etc.)
- Required Next.js, PostCSS, ESLint, Tailwind configuration files.
- **Status**: Tooling/Build code. Keep.

## Docs (`docs/`)
- Contains development history, architecture plans, and now production handover documentation.
- **Status**: Documentation. Keep/Consolidate.
