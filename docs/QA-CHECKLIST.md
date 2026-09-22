# QA-CHECKLIST.md — Pre-Launch Quality Assurance

## How to Use This Checklist

Before deploying, go through every item in this list. Mark each `[x]` when verified. Do not skip items.

---

## Visual QA — Desktop (1280px+)

### Global
- [ ] Navbar renders correctly on all 16 pages
- [ ] Navbar scroll transition (transparent → white background) works
- [ ] Active page underline shown for current route
- [ ] Logo wordmark correct: "RECYCLE" + "27" (emerald)
- [ ] "Register Now" button in navbar links correctly
- [ ] Footer renders correctly on all 16 pages
- [ ] Footer social icons link to correct URLs
- [ ] Footer links: Contact, Privacy Policy, Sitemap
- [ ] No horizontal scroll on any page

### Home Page
- [ ] Hero: title, subtitle, date+venue, CTAs all visible
- [ ] Hero: background image with dark overlay (not gradient)
- [ ] Hero: side text (right) visible
- [ ] Hero: scroll indicator visible at top
- [ ] Announcement bar: shows latest announcement
- [ ] Announcement bar: "View All Announcements" link works
- [ ] Countdown: updates live
- [ ] Countdown section: leaf image visible in right column
- [ ] Quote: "Towards a Circular and Sustainable Future" visible
- [ ] About section: image + pillar texts visible
- [ ] Themes: 5 dark theme cards with Lucide icons
- [ ] Speakers: 4 compact speaker cards
- [ ] Important Dates: all dates visible in dark panel
- [ ] Quick Links: 3 cards (Submit Abstract, Register Now, Download Brochure)
- [ ] All additional home sections visible (Registration, Programme, Venue, etc.)
- [ ] Footer visible and correct

### About Page
- [ ] Hero: "Purpose Drives Progress" title
- [ ] Conference Overview section: 2-column (text + campus image)
- [ ] IIT Guwahati section: dark background, campus signboard image
- [ ] WMRG section: 3-column (text + icons + building image)
- [ ] Closing quote: dark photograph background

### Speakers & Committees Page
- [ ] Keynote Speakers: 4 cards with image, name, institution, topic
- [ ] Plenary Speakers: 4 compact horizontal cards
- [ ] Committees section: 2 panels (Organizing + Scientific)
- [ ] Closing quote visible

### Call for Abstracts Page
- [ ] Hero: "Call for Abstracts" with submit + download CTAs
- [ ] Submission Guidelines: 5 guideline cards with icons
- [ ] Important Dates timeline: dots + dates
- [ ] Stay Updated card visible
- [ ] Downloads section: 4 download rows
- [ ] Submit via Google Form CTA button
- [ ] Abstract Format table readable
- [ ] Presentation Types: 2 cards

### Registration Page
- [ ] Participant type tabs (4)
- [ ] Registration fees table correct
- [ ] Register Now + Download Brochure buttons
- [ ] What's Included: 4 items
- [ ] Important Note box visible

### Programme Page
- [ ] Day tabs (3 days)
- [ ] Programme table for Day 1 visible and correct
- [ ] Session types visually distinguished (breaks look different)
- [ ] View Full Programme + Add to Calendar buttons

### Venue & Travel Page
- [ ] Hero with date+venue row
- [ ] IIT Guwahati section: description + Google Maps embed
- [ ] Getting There: 4 transport cards
- [ ] Explore Assam: 3 attraction cards with photos
- [ ] Accommodation preview: 3 option cards
- [ ] Book Accommodation + Contact Desk CTAs

### Publications & Awards Page
- [ ] Publication Opportunities: 3 type cards
- [ ] Author Resources sidebar with download links
- [ ] Potential Publication Venues: 4 journal cards with logos
- [ ] Recognizing Excellence: 3 award cards with icons
- [ ] Info note: "details will be announced soon"
- [ ] Closing quote visible

### Sponsors Page
- [ ] Why Partner section with 4 benefit cards
- [ ] Platinum sponsors: 2 large logo cards
- [ ] Gold sponsors: 4 logos
- [ ] Silver sponsors: 6 logos
- [ ] Supporting organizations: 5 logos
- [ ] Sponsorship Brochure + Contact Sponsorship Team CTAs

### Gallery Page
- [ ] Filter tabs: All, Inauguration, Technical Sessions, etc.
- [ ] Gallery grid: 3-column masonry layout
- [ ] Image overlays with title/caption visible
- [ ] View as Slideshow button
- [ ] Gallery lightbox opens on image click
- [ ] Lightbox: prev/next navigation works

### FAQs Page
- [ ] Sidebar category list renders correctly
- [ ] "All Questions" selected by default
- [ ] Quote block visible below category list
- [ ] Contact Us button in sidebar
- [ ] FAQ sections organized by category
- [ ] Accordion opens/closes with animation
- [ ] Clicking category in sidebar scrolls/filters correctly

### Contact Page
- [ ] Get in Touch: all 4 contact info items with icons
- [ ] Contact form: all fields visible
- [ ] Contact form: validation works (try to submit empty)
- [ ] Contact form: submission works (real or test)
- [ ] 4 query type cards visible below form

---

## Visual QA — Mobile (375px)

- [ ] Navbar: hamburger menu appears
- [ ] Hamburger: opens mobile nav drawer
- [ ] All nav links accessible on mobile
- [ ] Home hero: readable on mobile (title not clipped)
- [ ] Announcement bar: wraps properly on mobile
- [ ] Countdown: 4 numbers fit on one row (or 2×2 on very small)
- [ ] About section: single column
- [ ] Theme cards: 2-column or 1-column
- [ ] Speaker cards: 1 or 2 per row
- [ ] Registration table: horizontally scrollable
- [ ] Programme table: horizontally scrollable
- [ ] Gallery grid: 1 or 2 column
- [ ] FAQ sidebar: hidden, accessible via filter dropdown or sheet
- [ ] Contact form: full width inputs
- [ ] Footer: stacked single column

---

## Visual QA — Tablet (768px)

- [ ] Navbar: desktop or hamburger (design decision)
- [ ] 2-column sections maintain readability
- [ ] Cards: 2-column grids
- [ ] Speaker cards: 2 per row
- [ ] Gallery: 2-column grid
- [ ] FAQ: sidebar collapses to top-bar filter

---

## Typography QA

- [ ] DM Serif Display renders for all hero titles and section headings
- [ ] Inter renders for all body text, buttons, labels
- [ ] No fallback font visible (font loading correct)
- [ ] Eyebrow labels: uppercase, correct letter-spacing
- [ ] Short green line visible before eyebrow labels
- [ ] No font-weight inconsistencies

---

## Color QA

- [ ] No purple, blue, pink, orange, red, cyan in UI
- [ ] Emerald (#1E8A5A) used only for: buttons, eyebrow lines, accent colors
- [ ] Dark sections use #071710 or #0D241B
- [ ] Light sections use #FAF9F5 or white
- [ ] Text on dark sections: #F5F3ED
- [ ] Text on light sections: #111715
- [ ] Secondary text: #56615D
- [ ] No gradient backgrounds (except image overlays)

---

## Animation QA

- [ ] Hero entrance: elements appear in correct staggered sequence
- [ ] Sections reveal on scroll (not all at once)
- [ ] Speaker cards: lift on hover
- [ ] Gallery cards: slight zoom on hover
- [ ] Buttons: subtle lift + arrow movement on hover
- [ ] FAQ accordion: smooth height animation
- [ ] Countdown: numbers update without harsh jump
- [ ] Scroll indicator: fades out after scrolling
- [ ] Navbar: smooth transition on scroll
- [ ] `prefers-reduced-motion`: animations disabled when active (test with OS setting)

---

## Data QA

- [ ] Speakers loaded from database
- [ ] Important dates loaded from database
- [ ] Countdown target date from `site_settings`
- [ ] Announcement bar shows latest featured announcement
- [ ] Programme loads from database
- [ ] Gallery loads from database
- [ ] FAQs load from database
- [ ] Sponsors load from database
- [ ] Documents download links work
- [ ] Registration fee table pulls from `registration_categories`

---

## Admin Panel QA

- [ ] `/admin/login` — login form works
- [ ] Invalid credentials: error message shown
- [ ] Valid credentials: redirects to dashboard
- [ ] Dashboard: widgets show correct counts
- [ ] `/admin/announcements` — list shows, add/edit/delete work
- [ ] `/admin/dates` — list shows, add/edit/delete work
- [ ] `/admin/speakers` — list shows, image upload works
- [ ] `/admin/committees` — list shows
- [ ] `/admin/registration` — fee table editable
- [ ] `/admin/programme` — day tabs + session management works
- [ ] `/admin/documents` — file upload and management works
- [ ] `/admin/gallery` — image upload + category + featured flag works
- [ ] `/admin/faqs` — accordion management works
- [ ] `/admin/settings` — all settings save correctly
- [ ] Changes in admin reflect on public site (with appropriate revalidation delay)
- [ ] Unauthorized access to `/admin/*` redirects to login

---

## Links & Routes QA

- [ ] All nav links go to correct routes
- [ ] All "View All..." links go to correct pages
- [ ] "Register Now" buttons link to correct external URL
- [ ] "Submit Abstract" links to correct external URL
- [ ] "Download Brochure" links download correct file
- [ ] Contact form submission endpoint works
- [ ] "View on Google Maps" links open Google Maps
- [ ] Social media links (LinkedIn, Twitter, YouTube) open correct pages
- [ ] "Visit IITG →" links to iitg.ac.in
- [ ] No 404 errors on any internal links
- [ ] No broken images

---

## SEO QA

- [ ] Every page has unique `<title>` tag
- [ ] Every page has `<meta name="description">`
- [ ] Every page has Open Graph meta tags
- [ ] OG image renders correctly (1200×630)
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `canonical` URLs correct
- [ ] No duplicate H1 tags on any page
- [ ] One H1 per page
- [ ] H2/H3 hierarchy correct
- [ ] Alt text on all non-decorative images
- [ ] Decorative images: `alt=""`

---

## Accessibility QA

- [ ] All interactive elements reachable by keyboard (Tab key)
- [ ] Visible focus rings on all interactive elements
- [ ] Color contrast: text on light bg ≥ 4.5:1
- [ ] Color contrast: text on dark bg ≥ 4.5:1
- [ ] FAQ accordion: `aria-expanded` attribute toggles correctly
- [ ] Gallery lightbox: focus trap within lightbox when open
- [ ] Modal/lightbox: Escape key closes it
- [ ] Form labels: associated with inputs (`htmlFor`)
- [ ] Required fields: marked with `aria-required`
- [ ] Error messages: linked to fields with `aria-describedby`
- [ ] Navigation: `<nav>` with `aria-label`
- [ ] Skip to main content link (hidden, visible on focus)
- [ ] Image alt text accurate and descriptive
- [ ] Icon-only buttons have `aria-label`

---

## Performance QA

- [ ] Lighthouse Performance score ≥ 85 (homepage)
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] Lighthouse SEO score ≥ 95
- [ ] No render-blocking resources
- [ ] All images use Next.js `<Image>` component
- [ ] Hero image: `priority` prop set
- [ ] No images loading larger than displayed size
- [ ] Total JavaScript < 400KB parsed
- [ ] No console errors in production build
- [ ] `next build` completes without errors
- [ ] No TypeScript errors (`tsc --noEmit` passes)

---

## Cross-Browser QA

- [ ] Chrome (latest): visual parity with design
- [ ] Safari (latest, macOS): visual parity
- [ ] Firefox (latest): visual parity
- [ ] Mobile Safari (iOS): layout correct
- [ ] Chrome Android: layout correct
