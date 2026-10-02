# Asset Audit

This document outlines the visual assets used in the production repository. All unused, redundant, and experimental debug assets have been successfully deleted.

## Directory Structure
- `public/images/heroes/`: Contains primary banner images for the top of each page. (e.g., `sponsorship.jpg`, `programme.jpg`, `faq.jpg`).
- `public/images/sponsors/clean/`: Contains white/transparent logos for all official sponsors and partners (e.g., `tata.png`, `reliance.png`).
- `public/images/about/`, `public/images/conference/`, `public/images/research/`, `public/images/waste/`: Categorized thematic images used across various informational sections (e.g. `composting-01.jpg`, `sustainability_hands.jpg`).
- `public/images/`: Root images folder contains core branding like `logo-iitg.png` and `logo-wmrg.jpg`. Also contains decorative elements like `leaf.png` and `leaf-bg-new.png`.
- `public/`: Contains SVGs (`globe.svg`, `file.svg`, `window.svg`, `next.svg`, `vercel.svg`) and the official PDF brochure (`RECYCLE27_Brochure.pdf`).

## Status
- **Duplicate Images:** Removed (e.g., debug slices and alternate copies).
- **Unused Images:** Removed (e.g., obsolete Mockup files).
- **Broken References:** None. All images referenced in JSX have been verified to exist in `public/`.
