# ReCYCLE 2027 — Baseline Record

**Date:** 2026-10-02
**Phase:** 0 (Pre-Cleanup Freeze)

## Current Status
The project successfully builds without any errors (`next build`).
All static pages compile successfully. There are no TypeScript errors.

## Routes Available
- `/` (Home)
- `/about`
- `/accommodation`
- `/call-for-abstracts`
- `/committees`
- `/contact`
- `/faqs`
- `/gallery`
- `/important-dates`
- `/programme`
- `/publications-awards`
- `/registration`
- `/speakers`
- `/sponsors`
- `/themes`
- `/venue-travel`

## Tooling
- **Framework:** Next.js 16.3.6 (Turbopack)
- **Language:** TypeScript
- **Package Manager:** npm (based on `package-lock.json`)
- **Styling:** Tailwind CSS

## Major Functionality
- Static informational pages for the conference.
- Contact form utilizing server actions with Nodemailer.
- Interactive map (using Google Maps API fallback via iframe if no key).
- Modal registration flow context.
- Animated framer-motion reveals across components.
- Responsive design tailored to standard breakpoints.

## Known Intentional Limitations
- Real payment processing is currently stubbed/handled via Google Forms or static info, depending on future configuration.
- Google Maps API key should be provided for advanced maps; falls back to an embedded iframe.
