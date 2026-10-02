# ReCYCLE 2027

## Overview
ReCYCLE 2027 is the official website for the International Conference on Sustainable Waste Management and Circular Economy, hosted by the Waste Management Research Group (WMRG) at IIT Guwahati. 

## Conference
The conference focuses on sustainable environmental engineering, providing an academic and institutional platform for researchers, students, and industry experts.

## Website Purpose
This website serves as the primary informational portal for the event. It provides attendees, speakers, and organizers with details about the conference themes, important deadlines, registration steps, venue, and scheduling.

## Main Experience
- **Conference Information:** Context and background about the event and organizers.
- **Themes:** Call for abstracts and specific presentation topics.
- **Speakers:** Keynote, plenary, and invited speakers.
- **Programme:** The daily schedule and committee information.
- **Registration:** Pricing and submission flow instructions.
- **Venue/Travel & Accommodation:** Detailed information on IIT Guwahati, how to get there, and where to stay.
- **Gallery & Publications:** Visual highlights and associated conference proceedings.
- **Contact:** An integrated contact form and official communication details.

## Design Direction
The design language is strictly academic, institutional, and editorial, using a tailored environmental-engineering palette. The primary color scheme leverages deep greens (`#064B36`) and natural hues to reflect the circular economy theme, alongside high-end typography and generous white space.

## Technology
- **Next.js 16.3** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (for entrance and scroll animations)
- **Nodemailer** (for email dispatch)

## Architecture
- **App Router:** Fully static site. Each route (e.g. `/speakers`) is statically pre-rendered.
- **Components:** Modular structure (`ui`, `layout`, `sections`, `shared`, `motion`) for strong reusability.
- **Data:** All conference data is decoupled from JSX and resides statically in `data/`.
- **Motion:** Entrance animations are globally coordinated via `components/motion/`.

## Content Architecture
Conference content is stored in static TypeScript files located in the `data/` directory (e.g., `data/speakers.ts`, `data/themes.ts`). The components map over this data, ensuring a clean separation of concerns.

## Asset Architecture
Visual assets (images, SVGs, documents) are stored in `public/images/` and subdirectories (`heroes/`, `about/`, `sponsors/clean/`). `next/image` is used throughout the application to ensure optimized delivery.

## Dynamic Functionality
The application is almost entirely static, with one dynamic feature:
- **Contact Form:** Utilizes a Next.js Server Action to validate and securely send inquiries using Nodemailer.

## Deployment
The project is built natively for Node.js environments and edge networks. 
Run `npm run build` to output the highly optimized static build. Recommended host is Vercel for zero-config Server Actions support.

## Maintenance
- **Content Changes:** Edit the TypeScript objects in the `data/` folder.
- **Page Layout Changes:** Edit the `page.tsx` within the relevant `app/` route directory.
- **Images:** Add new images to `public/images/` and update references in `data/` or the relevant `page.tsx`.
- **Motion/Animations:** Modify values within `components/motion/`. Avoid inline Tailwind transitions for primary reveals.

## Project Status
**Feature Freeze / Production Ready.** The repository has undergone a final codebase cleanup, stripping all experimental/development-only logic and obsolete files to ensure it is immediately ready for long-term maintenance.
