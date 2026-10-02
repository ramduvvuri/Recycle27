# Maintenance Guide

This document explains how to safely update content for ReCYCLE 2027 without modifying code or breaking the layout. 

## Updating Conference Details
All data lives inside the `data/` directory.

### Speakers (`data/speakers.ts`)
To add or modify a speaker, edit the `speakers` array in `data/speakers.ts`.
- Ensure `image_url` points to a valid image in `public/images/speakers/`.
- Ensure `is_active` is true.

### Important Dates (`data/importantDates.ts`)
Edit `importantDates.ts` to update the conference timeline.
- The `is_countdown_target` boolean is currently unused by the static Countdown (which uses a hardcoded timestamp for maximum reliability), but it can be toggled if needed later. (Note: Do not edit `Countdown.tsx` unless you know what you are doing.)

### Themes (`data/themes.ts`)
Modify `themes.ts` to add or rename conference themes and sub-themes.

### Registration Fees (`data/registration.ts`)
Update `registrationCategories` in `registration.ts` to adjust pricing or early-bird deadlines.

### Sponsors (`data/sponsors.ts` if created, or hardcoded in `SponsorsSection.tsx`)
Currently, sponsors are a static "Coming Soon" block in `components/sections/SponsorsSection.tsx`. To add real sponsors, update the JSX in that file directly.

### Contact Information (`data/contact.ts`)
Modify `contactInfo` to change phone numbers, emails, and the physical address listed in the footer and Contact page.

### Gallery Images (`data/gallery.ts` if created, or hardcoded in `GallerySection.tsx`)
The gallery uses a hardcoded array in `components/sections/GallerySection.tsx`. Add new image objects to the `galleryItems` array. Place the actual images in `public/images/gallery/` (create if missing, or place in a safe images folder).

## What NOT to Edit
- Do NOT edit `app/globals.css` or Tailwind classes to "tweak" the design without full testing.
- Do NOT remove `hidden` utility classes on mobile wrappers, as it will break the mobile experience.
- Do NOT edit the `components/motion/` files. The timing is globally synced.
- Do NOT switch to a dynamic database (like Supabase) for static informational text; the static JSON approach is intentional.
