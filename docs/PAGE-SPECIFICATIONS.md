# PAGE-SPECIFICATIONS.md — Per-Page Mockup Breakdown

## Page Analysis Method

For each page, this document records:
- Navigation state
- Hero structure
- Breadcrumb
- Section order
- Layout grids
- Typography roles
- Card patterns
- CTA placements
- Background transitions
- Footer
- Interaction implications
- Responsive behavior

---

## PAGE: About (`/about`)

**Mockup file:** `Mockups/About us page.png`

### Navigation
- Shared `<Navbar />`
- Active link: "About" underlined

### Hero
- **Eyebrow (dots pattern):** "ABOUT THE CONFERENCE"
- **Title (DM Serif, ~56–64px):**
  ```
  Purpose
  Drives Progress
  ```
  Line 1 + Line 2, both DM Serif Display
- **Subtitle (Inter 16px):**
  ```
  RECYCLE27 is a global platform to exchange knowledge,
  ideas and solutions for a sustainable and circular future.
  ```
- **Background image:** Dramatic close-up macro leaf photograph with dark overlay
- **No CTAs** in this hero (information-only hero)
- **Side text (right):** "RETHINK / REUSE / RECYCLE / FOR A BETTER TOMORROW"

### Breadcrumb
`Home > About`

### Section 1: Conference Overview
**Background:** White
**Layout:** 2-column (55% text + 45% image)

**Left column:**
- Eyebrow: `—— CONFERENCE OVERVIEW`
- H2: "About RECYCLE27"
- Body (2 paragraphs, Inter 15px, secondary-text):
  - Para 1: What RECYCLE27 is and who it brings together
  - Para 2: Types of sessions and transition goals
- CTA: `[View Conference Themes →]` btn-secondary

**Right column:**
- Photograph: IIT Guwahati campus/building (~480×360, rounded-xl)
- Below image: Large DM Serif editorial quote:
  ```
  Ideas
  for a Cleaner,
  Healthier and
  More Circular
  World.
  ```
  Right-aligned, ~28–36px, dark-text
- Short green line divider

### Section 2: About IIT Guwahati
**Background:** `#071710` (primary-dark)
**Layout:** 2-column (55% text + 45% content)

**Left column:**
- Eyebrow: `—— INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI` (muted-green)
- H2: "About IIT Guwahati" (light-text, DM Serif ~40px)
- Body (Inter 15px, muted-green or lighter text):
  IIT Guwahati description — premier institution, Brahmaputra banks, interdisciplinary learning
- CTA: `[Visit IITG →]` btn-secondary-light (outlined light)

**Right column:**
- Left of right column: IIT Guwahati campus signboard photograph (~380×280, rounded-xl)
- Right of right column: stacked icon+text items:
  ```
  [institution icon] Excellence in Education
  [flask icon] Cutting-edge Research
  [people icon] Vibrant Academic Community
  [leaf icon] Commitment to a Sustainable Future
  ```
  Each item: icon (Lucide, 18px, muted-green) + 2-line text (Inter 13px, light-text)

### Section 3: About WMRG
**Background:** `#FAF9F5` (soft-bg)
**Layout:** 3-column (40% text + 35% icon grid + 25% image)

**Column 1 (text):**
- Eyebrow: `—— WASTE MANAGEMENT RESEARCH GROUP`
- H2: "About WMRG" (DM Serif ~40px)
- Body: WMRG description — research, industry collaboration, policy engagement
- CTA: `[Learn More About WMRG →]` btn-secondary

**Column 2 (2×2 icon grid):**
- `[document icon]` Research and Innovation
- `[people icon]` Industry Collaboration
- `[leaf icon]` Policy and Outreach
- `[globe icon]` Real-world Impact

Each icon card: bordered, centered icon + label, `rounded-xl`, white BG

**Column 3 (image):**
- Photograph: IIT building/research facility (~280×360, rounded-xl)

### Section 4: Closing Quote
**Component:** `<QuoteBlock />`
**Background:** Full-width dark nature photography (mountain/forest)
**Overlay:** `rgba(7,23,16,0.6)`

**Left 60%:**
```
"Sustainable solutions today
for a better tomorrow."
```
DM Serif Display, ~40–48px italic, light-text
Short green line beneath quote

**Right 40%:**
```
PEOPLE
IDEAS
SOLUTIONS
A CLEANER TOMORROW
```
Inter uppercase, 10px, letter-spacing heavy, muted-green

### Footer
`<Footer />` — dark

### Responsive
- Mobile: all 3 sections go single-column, image stacks below text
- Section 3: 3-column collapses to stacked single column

---

## PAGE: Speakers & Committees (`/speakers` and `/committees`)

**Mockup file:** `Mockups/Speakers and committes page.png`
**Note:** Single mockup shows both — in implementation, this is ONE URL: `/speakers` which contains both speakers AND committees sections, with a secondary page `/committees` showing the full committee member lists.

### Hero
- **Eyebrow dots:** "PEOPLE · PERSPECTIVES · PARTNERSHIPS"
- **Title (DM Serif):**
  ```
  Speakers &
  Committees
  ```
- **Subtitle:** "Eminent voices and dedicated teams driving a cleaner, more sustainable tomorrow."
- **Background:** Conference hall/auditorium photograph with dark overlay
- **Side text:** "A / CLEANER / TOMORROW / TOGETHER"
- **No CTAs in hero** (informational)
- **Date+venue row visible** with icons

### Section 1: Keynote Speakers
**Background:** White or soft-bg
**Eyebrow:** `—— KEYNOTE SPEAKERS`
**H2:** "Global Perspectives, Local Impact"
**Description (right of heading):** Short paragraph about keynote speaker quality
**View All Link:** "View All Speakers →" (right aligned to heading row)

**Speaker grid:** 4 columns (keynote), each `<SpeakerCard />`
- Image: ~200×240px (portrait ~4:5 ratio), `rounded-xl`
- Name: Inter 15px 600
- Institution + Country: Inter 13px secondary-text
- Short emerald line (24px)
- Topic text: Inter 13px secondary-text

[CONTENT PLACEHOLDER: Final speaker names, images, institutions, and topics]

### Section 2: Plenary Speakers
**Background:** `#FAF9F5`
**Eyebrow:** `—— PLENARY SPEAKERS`
**H2:** "Insightful Discussions, Deeper Understanding"
**Description + View All link** (same pattern as keynote)

**Speaker grid:** 4 speakers in horizontal compact layout
- Each speaker: ~80px image (rounded-xl) on left + Name/Institution stacked right
- Topic below
- Horizontal card, white BG, bordered

### Section 3: Committees
**Background:** `#FAF9F5` continuing or soft separator
**Eyebrow:** `—— COMMITTEES`
**H2:** "People Behind Recycle27"
**Description:** right-side paragraph (right column)

**Two committee panels (2-column, equal width):**

**Left: Organizing Committee**
- `[people icon]` 
- Title: "Organizing Committee" (Inter 16px 600)
- Description: "The organizing committee oversees the overall planning and execution..."
- CTA: `[View Organizing Committee →]` btn-secondary
- Background: white card with border

**Right: Scientific / Advisory Committee**
- `[document icon]`
- Title: "Scientific / Advisory Committee" (Inter 16px 600)
- Description: "The scientific committee provides strategic guidance..."
- CTA: `[View Scientific Committee →]` btn-secondary
- Background: white card with border

Center background: subtle leaf illustration or soft nature image between panels

### Section 4: Closing Quote
**Component:** `<QuoteBlock />`
```
"Diverse minds. A shared purpose."
```
Dark background with nature/mountain photograph
**Side text:** "RECYCLE / RETHINK / REBUILD"

---

## PAGE: Call for Abstracts (`/call-for-abstracts`)

**Mockup file:** `Mockups/Call for abstracts page.png`

### Hero
- **Eyebrow dots:** "SHARE IDEAS · SPARK SOLUTIONS · SHAPE A CLEANER TOMORROW"
- **Title (DM Serif ~56px):** "Call for Abstracts"
- **Subtitle:** Invitation text for researchers, practitioners, experts, students
- **CTAs:**
  - `[Submit Abstract →]` btn-primary
  - `[Download Brochure]` btn-dark (with document icon)
- **Background:** IIT building with "RESEARCH FOR A CLEANER TOMORROW" text visible
- **Side text:** "PEOPLE / IDEAS / SOLUTIONS / A CLEANER TOMORROW"

### Content Grid (2 columns below breadcrumb)

**Left column (~55%):**

#### Submission Guidelines
- Eyebrow: `—— SUBMISSION GUIDELINES`
- H2: "Submission Guidelines"
- Body: Intro paragraph
- **5 guideline items** (icon + title + description):
  1. `[document icon]` **Originality** — "Abstracts must be original..."
  2. `[people icon]` **Author Information** — "Include title, authors..."
  3. `[list icon]` **Content** — "Clearly mention objectives..."
  4. `[globe icon]` **Relevance** — "The abstract should align..."
  5. `[calendar icon]` **Submission Mode** — "All abstracts must be submitted through the Google Form."

Each item: horizontal card (icon 20px left + text right), white BG, subtle border, `rounded-xl`, p-4

#### Abstract Format
- Eyebrow: `—— ABSTRACT FORMAT`
- H2: "Abstract Format"
- Body: format description
- **Format table** (2-column, label-value):
  ```
  Length    Maximum 300 words
  Font      Times New Roman, 12 pt
  Spacing   1.5 line spacing
  Margins   1 inch on all sides
  File Format  PDF (max 2 MB)
  ```
  Styled as definition list or simple table. Labels: Inter 13px 600, Values: Inter 13px

#### Presentation Types
- Eyebrow: `—— PRESENTATION TYPES`
- H2: "Presentation Types"
- Body: "Accepted abstracts will be considered for:"
- **2 type cards:**
  - `[A icon]` **Oral Presentation** — description
  - `[list icon]` **Poster Presentation** — description
  Each: horizontal card with border

**Right column (~45%):**

#### Important Dates (sidebar)
- Eyebrow: `—— IMPORTANT DATES`
- H2: "Important Dates"
- **Timeline list:**
  - Filled dot (active/next deadline) → line → empty dot → etc.
  - Each item: Date (Inter 16px 600) + Label below (Inter 14px secondary-text)
  ```
  ● 15 January 2027 — Abstract Submission Deadline
  ○ 15 February 2027 — Acceptance Notification
  ○ 31 March 2027 — Registration Deadline
  ○ 12 – 14 May 2027 — Conference Dates
  ```
- Leaf photograph as subtle right-side decoration (muted, partial bleed)
- Quote text overlaid: `"Ideas today, impact tomorrow."` (DM Serif italic, ~24px)

#### Stay Updated card
- Background: bordered card, soft-bg
- Bell icon (24px)
- Title: "Stay Updated" (Inter 16px 600)
- Body: "Get the latest notifications..."
- CTA: `[View All Announcements →]` btn-secondary

#### Downloads & Links (sidebar)
- Eyebrow: `—— TEMPLATES & LINKS`
- H2: "Downloads & Links"
- **4 download rows:**
  - `[doc icon]` Abstract Template (DOCX) `[↓]`
  - `[doc icon]` Abstract Template (PDF) `[↓]`
  - `[doc icon]` PPT Template `[↓]`
  - `[doc icon]` Poster Template `[↓]`
  Each row: thin border-bottom, document icon left, label, download icon right
- Final CTA (full-width dark btn): `[Submit Abstract via Google Form ↗]`

Data sources:
- Important dates: `important_dates` table
- Documents/downloads: `documents` table filtered by `document_type = 'abstract_template' | 'presentation_template'`
- Submit link: `site_settings.abstract_submission_url`

### Closing Quote
```
CONTRIBUTE · COLLABORATE · CREATE CHANGE
"Be a part of the solution."
```
DM Serif italic, ~40px, on dark nature background (fern/forest close-up)
Right side: "RECYCLE / RETHINK / REBUILD"

---

## PAGE: Registration (`/registration`)

**Mockup file:** `Mockups/Reg and programme page.png` (left column)

### Hero
- **Eyebrow dots:** "LEARN · ENGAGE · COLLABORATE · CREATE CHANGE"
- **Title (DM Serif ~56px):** "Join the Conversation"
- **Subtitle:** "Be a part of RECYCLE27 — where ideas, research and real-world solutions come together..."
- **Date + Venue row** (with icons)
- **No CTA buttons in hero** (CTAs appear in content below)
- **Background:** IIT campus aerial/lakeside photograph with overlay
- **Side text:** "PEOPLE / IDEAS / SOLUTIONS / A CLEANER TOMORROW"

### Content

#### Registration Section
- Eyebrow: `—— REGISTRATION`
- H2: "Registration"
- Body: Who can participate (academia, industry, government, civil society)

**Participant Type Tabs (4 tabs):**
```
[Student ✓ selected]  [Academic]  [Industry]  [Others]
UG / PG / PhD        Faculty/Researcher  Professional  Government/NGO
```
Active tab: filled dark card. Others: outlined/lighter.
Each tab has icon (Lucide person variant) + label + sublabel.

**Registration Fees Table:**
```
Category      | Early Bird           | Regular             | On-site
              | on or before 15 Feb  | 16 Feb–31 Mar 2027  | After 31 Mar 2027
─────────────────────────────────────────────────────────────────────────────
Student       | ₹ 2,000              | ₹ 2,500             | ₹ 3,000
Academic      | ₹ 4,000              | ₹ 4,500             | ₹ 5,000
Industry      | ₹ 6,000              | ₹ 7,000             | ₹ 8,000
Others        | ₹ 4,000              | ₹ 5,000             | ₹ 6,000
```
Header row: dark background (#071710), white text
Body rows: alternating white / soft-bg
All text: Inter, fees in Inter 14px

**CTAs:**
- `[Register Now →]` btn-primary
- `[Download Registration Brochure]` btn-secondary with document icon

**What's Included (2×2 grid of feature items):**
- `[badge icon]` Access to all technical sessions
- `[utensils icon]` Conference kit and meals
- `[people icon]` Networking opportunities
- `[certificate icon]` Participation certificate

**Important Note box:**
`<InfoNote />` — "Registration is mandatory for all participants, including presenters and co-authors..."

Data sources: `registration_categories` table, `site_settings.registration_url`

---

## PAGE: Programme (`/programme`)

**Mockup file:** `Mockups/Reg and programme page.png` (right column)

### Full Programme Page

Building on the registration mockup's programme section as a standalone page:

**Eyebrow:** `—— CONFERENCE PROGRAMME`
**H2:** "Programme"
**Description:** "A three-day programme featuring keynote talks, technical sessions, panel discussions, workshops and networking opportunities."

**Day tabs:**
```
[Day 1 — 12 May 2027]  [Day 2 — 13 May 2027]  [Day 3 — 14 May 2027]
```

**Programme table for Day 1 (from mockup):**
```
09:00–10:00  Registration & Welcome Tea           Main Foyer
10:00–11:00  Inaugural Session                    Auditorium
             Welcome Address, Conference Overview
11:00–12:00  Keynote Talk 1                       Auditorium
             Prof. Maria Gonzalez
12:00–13:00  Keynote Talk 2                       Auditorium
             Prof. Kenji Tanaka
13:00–14:00  Lunch Break                          Dining Hall
14:00–15:30  Technical Session 1                  Hall A
             Waste Management and Resource Recovery
15:30–16:00  Tea Break                            Main Foyer
16:00–17:30  Panel Discussion                     Auditorium
             Policy, Governance and Social Impact
18:00–19:30  Welcome Reception                    IITG Guest House
```

Each row: time | title+description | location
Breaks styled differently (lighter, muted)
Keynotes styled with bold title

**Bottom CTAs:**
- `[View Full Programme →]` btn-primary
- `[Add to Calendar]` btn-secondary (calendar icon)

Data source: `programme_days` + `programme_items` tables

---

## PAGE: Venue & Travel (`/venue-travel`)

**Mockup file:** `Mockups/Venue and Travel page.png`

### Hero
- **Eyebrow:** "WELCOME TO IIT GUWAHATI"
- **Title:** "Venue & Travel"
- **Subtitle:** "Join RECYCLE27 at the Indian Institute of Technology Guwahati for a meaningful exchange of ideas, research and collaboration."
- **Date + Venue row:** calendar + map pin icons
- **Background:** Aerial IIT campus with lake/Brahmaputra
- **Side text:** "PEOPLE / IDEAS / SOLUTIONS / A CLEANER TOMORROW"

### Section 1: Conference Venue
**Layout:** 2-column (40% text + 60% map)

**Left column:**
- Eyebrow: `—— CONFERENCE VENUE`
- H2: "Indian Institute of Technology Guwahati"
- Body: campus description
- Address block: `[MapPin icon]` Indian Institute of Technology Guwahati, Guwahati, Assam 781039, India
- CTA: `[View on Google Maps →]` with external link icon
- Quote: `"A beautiful campus for a brighter tomorrow."` — DM Serif italic, small

**Right column:**
- **Embedded Google Maps** showing IIT Guwahati campus
- Map should show campus locations labeled: Conference Venue, Guest House, Academic Complex, etc.
- Map card overlay (top right): small thumbnail + "Conference Venue" label + "Get Directions →" button

### Section 2: Getting to IIT Guwahati
**Eyebrow:** `—— HOW TO REACH`
**H2:** "Getting to IIT Guwahati"
**Layout:** 4 cards (3 transport + 1 maps link)

**Transport cards:**
1. `[plane icon]` **From Guwahati Airport** — "The Lokpriya Gopinath Bordoloi International Airport (GAU) is about 30 km from campus..." — `~ 45–60 minutes`
2. `[train icon]` **From Guwahati Railway Station** — "approximately 20 km from IITG..." — `~ 30–45 minutes`
3. `[car icon]` **From Guwahati City** — "well connected by road from all parts of the city..." — `~ 30–45 minutes`
4. `[map icon]` **Open in Google Maps** — "Get directions, view nearby places..." — `[Open Campus in Maps →]` btn-dark

### Section 3: Explore Assam
**Eyebrow:** `—— TOUR DETAILS`
**H2:** "Explore Assam"
**Body:** Optional tours for interested participants

**Attraction cards (3 cards with photographs):**
1. Kaziranga National Park — "Wildlife · Nature"
2. Umananda Temple — "Heritage · Culture"
3. Kamakhya Temple — "Spiritual · Heritage"
Each: small rectangular photo + name + category + "Details will be updated soon"

### Section 4: Accommodation Preview
**Eyebrow:** `—— ACCOMMODATION`
**H2:** "Stay with Comfort"
**Body:** Accommodation arrangements description

**3 accommodation option cards:**
1. `[bed icon]` **IITG Guest House** — Limited rooms, Priority for invited speakers
2. `[building icon]` **On-campus Hostels** — Suitable for students, Basic amenities
3. `[hotel icon]` **Nearby Hotels** — Various price ranges, Easy accessibility

Each card: bulleted list of features, "Details will be updated soon" note

**CTAs:**
- `[Book Accommodation →]` btn-primary (external link to booking)
- `[Contact Accommodation Desk]` btn-secondary with mail icon

**Info note:** "Accommodation is subject to availability..."

### Closing Quote
`"Different places. A shared purpose."`
DM Serif italic, dark background
**Side text:** "RECYCLE / RETHINK / TOGETHER"

---

## PAGE: Publications & Awards (`/publications-awards`)

**Mockup file:** `Mockups/Publications and Awards page.png`

### Hero
- **Eyebrow:** "KNOWLEDGE FOR A CLEANER TOMORROW"
- **Title:** "Publications & Awards"
- **Subtitle:** "High-quality research, real-world impact."
- **Background:** Books/research photographs with dark overlay
- **Side text:** "CIRCULAR / SOLUTIONS / FOR A / BETTER / TOMORROW"

### Section 1: Publication Opportunities
**Layout:** 2-column (left text + right sidebar)

**Left:**
- Eyebrow: `—— PUBLICATIONS`
- H2: "Publication Opportunities"
- Body: publications description paragraph
- **3 publication type cards (horizontal, 3-column):**
  1. `[document icon]` **Conference Proceedings** — "All accepted abstracts and presentations..."
  2. `[document icon]` **Selected Journal Publications** — "Extended versions of selected papers..."
  3. `[link icon]` **Publication Partners** — "We are collaborating with esteemed publishers..."

**Right sidebar:**
- H3: "Author Resources"
- Download list (4 items with download icon):
  - Paper Template (LaTeX) `[↓]`
  - Paper Template (Word) `[↓]`
  - Formatting Guidelines `[↓]`
  - Submission Checklist `[↓]`
- CTA: `[View All Resources →]` btn-primary

### Section 2: Potential Publication Venues
**Eyebrow:** `—— JOURNALS (INDICATIVE)`
**H2:** "Potential Publication Venues"
**Body:** "Selected papers may be considered for publication in the following journals (subject to approval)."

**4 journal cards:**
1. Journal of Cleaner Production (Elsevier) + Elsevier logo
2. Waste Management (Elsevier) + Elsevier logo
3. Resources, Conservation & Recycling (Elsevier) + Elsevier logo
4. Environmental Science & Technology (ACS) + ACS Publications logo

Each card: title + publisher + publisher logo, white card, border

### Section 3: Recognizing Excellence (Awards)
**Background:** Soft-bg
**Eyebrow:** `—— AWARDS`
**H2:** "Recognizing Excellence"
**Body:** awards description

**3 award categories (3-column):**
1. `[trophy icon]` **Best Paper Award** — "For the most outstanding research contribution."
2. `[medal icon]` **Best Student Paper Award** — "For exceptional research by a student author."
3. `[podium icon]` **Best Poster Award** — "For innovative and impactful poster presentations."

Each: centered icon (28px), bold title, description text

**Info note:** `[i icon]` "Award details, eligibility criteria and selection process will be announced soon."

### Closing Quote
`"Research for a more sustainable world."`
Dark nature background
**Eyebrow:** "IDEAS TODAY. A CLEANER TOMORROW."
**Side text:** "PEOPLE / IDEAS / SOLUTIONS / IMPACT"

---

## PAGE: Sponsors (`/sponsors`)

**Mockup file:** `Mockups/Our sponsors page.png`

### Hero
- **Eyebrow:** "PARTNERSHIPS FOR A SUSTAINABLE TOMORROW"
- **Title:** "Our Sponsors"
- **Subtitle:** "Collaborating for impact. Together for a cleaner future."
- **Background:** IIT building facade with "PEOPLE / PARTNERSHIPS / PROGRESS" text etched/visible
- **Side text:** "STRONGER / TOGETHER / FOR A / CLEANER / TOMORROW"

### Section 1: Why Partner with RECYCLE27
**Layout:** 2-column (left text + right CTA panel)

**Left:**
- Eyebrow: `—— PARTNER WITH US`
- H2: "Why Partner with RECYCLE27"
- Body: partnership value proposition

**Right:**
- Button: `[Sponsorship Brochure →]` btn-primary (document icon)
- Button: `[Contact Sponsorship Team]` btn-secondary (mail icon)

**Benefits grid (4 cards, 2×2):**
1. `[graph icon]` **Brand Visibility** — "Showcase your organization to a global audience."
2. `[people icon]` **Engagement** — "Connect with researchers, industry experts..."
3. `[leaf icon]` **Social Impact** — "Support solutions for a cleaner, more sustainable future."
4. `[handshake icon]` **Long-term Partnerships** — "Build collaborations for future opportunities."

### Section 2: Our Valued Partners
**Eyebrow:** `—— OUR SPONSORS`
**H2:** "Our Valued Partners"
**Body:** gratitude statement

**Sponsor tiers (from mockup — showing placeholder logos):**

**Platinum Sponsors (2 large logos, ~240×100px white cards):**
- TATA logo
- Reliance Industries Limited logo

**Gold Sponsors (4 medium logos):**
- Adani
- Larsen & Toubro
- IndianOil
- Vedanta

**Silver Sponsors (6 smaller logos):**
- NEC, ThermoFisher Scientific, HITACHI, SUZUKI, Coca-Cola, Wipro

**Supporting Organizations (5 logos):**
- Ministry of Environment, NITI Aayog, TERI, CPCB, FICCI

> [CONTENT PLACEHOLDER: These are placeholder logos for design purposes. Actual sponsors will be provided and managed via admin panel.]

Each tier: tier heading (Inter 16px 600) + horizontal logo grid with white card backgrounds

Data source: `sponsors` table, grouped by `tier`, ordered by `sort_order`

### Closing Quote
`"Partnerships create possibility."`
Dark mountain/forest photograph

---

## PAGE: Gallery (`/gallery`)

**Mockup file:** `Mockups/Gallery page.png`

### Hero
- **Eyebrow dots:** "MOMENTS · PEOPLE · IDEAS · IMPACT"
- **Title:** "Gallery"
- **Subtitle:** "A glimpse into the people, discussions and experiences that make RECYCLE27 a vibrant platform..."
- **Background:** IIT campus building photograph with dark overlay
- **Side text:** "PEOPLE / IDEAS / SOLUTIONS / A CLEANER TOMORROW"

### Filter Bar
- Row of filter tabs: `[All]` `[Inauguration]` `[Technical Sessions]` `[Workshops]` `[Cultural Events]` `[Campus]` `[People]` `[Previous Editions]`
- Active tab: filled dark button
- Others: outlined/light border tabs
- Right side: `[▶ View as Slideshow →]` secondary button

### Gallery Grid (Masonry-style, 3-column)

**Row 1 (3 items, varied proportions):**
- Large landscape: Inaugural Session — "RECYCLE26" caption, `[image icon]`
- Medium portrait: Keynote Talk — "RECYCLE26" caption
- Small landscape: IIT Guwahati Campus — "A Sustainable Tomorrow" caption

**Row 2 (3 items):**
- Poster Presentation, RECYCLE26
- Engaged Audience, RECYCLE26
- Panel Discussion, RECYCLE26

**Row 3 (4 items):**
- Cultural Evening, RECYCLE26
- Serene Evenings, IIT Guwahati
- Conference Merchandise, RECYCLE26
- Campus Moments, RECYCLE26

**Each gallery card:**
- Full-bleed image
- Dark overlay (always-on subtle overlay, not just on hover)
- Bottom-left: title (Inter 13px white) + caption (Inter 11px muted-white)
- Bottom-right: image icon (Lucide `Image`, 16px, white)
- Hover: overlay darkens slightly, subtle scale

**Lightbox:** Click opens full-screen image viewer with prev/next navigation

Data source: `gallery_items` table, filtered by `category` if filter active

### Closing CTA
**Background:** Soft-bg with leaf decoration
**Eyebrow:** "BE A PART OF THE NEXT CHAPTER"
**H2:** "Create Memories at RECYCLE27"
**Body:** Invitation text
**CTA:** `[Register Now →]` btn-primary
Leaf illustration (right side, `<LeafDecoration />` SVG or illustration)

---

## PAGE: FAQs (`/faqs`)

**Mockup file:** `Mockups/FAQs page.png`

### Hero
- **Eyebrow dots:** "QUESTIONS · CLARITY · A CLEANER TOMORROW"
- **Title (DM Serif, multi-line):**
  ```
  Frequently
  Asked Questions
  ```
- **Subtitle:** "Find answers to common queries about RECYCLE27. Still have a question? Feel free to reach out to us."
- **Background:** IIT building + tree canopy, dark overlay
- **Side text:** "PEOPLE / IDEAS / SOLUTIONS / A CLEANER TOMORROW"

### FAQ Layout (2-column sidebar + content)

**Left sidebar (~220px):**
- Category list (all bold when active, filled dark):
  - All Questions (default selected, filled dark)
  - General
  - Registration
  - Abstract Submission
  - Programme
  - Travel & Accommodation
  - Publications & Awards
  - Sponsorship
  - On-site
  - Others
- **Quote card** (below category list):
  - Leaf photograph background (subtle)
  - Quote: `"Small questions lead to big solutions."` (DM Serif italic ~18px)
  - Short green line
- **Contact CTA:**
  - "Still can't find what you're looking for? Contact us and we'll be happy to help."
  - `[Contact Us →]` btn-primary (small)

**Right content (main area):**

Organized by category sections (scroll-based active highlighting of sidebar):

**General**
- What is RECYCLE27?
- When and where will the conference be held?
- Who can participate?
- Is there a theme for this year's conference?

**Registration**
- How can I register for RECYCLE27?
- What are the registration fees?
- Does the registration fee include accommodation?
- Can I get a refund if I am unable to attend?

**Abstract Submission**
- What topics are eligible for abstract submission?
- What is the format for abstract submission?
- How many abstracts can one author submit?
- Will I be notified about the acceptance of my abstract?

**Programme**
- What does the conference programme include?
- Will the detailed schedule be shared in advance?
- Are there any workshops or panel discussions?

**Travel & Accommodation**
- How do I reach IIT Guwahati?
- Are accommodation facilities available on campus?
- Will local transport be provided?
- Can you recommend nearby hotels?

**Publications & Awards**
- Will selected papers be published?
- Are there any awards for best papers or posters?
- How will the awardees be notified?

Each FAQ item:
- `<FAQAccordion />` component
- Question: Inter 14px 500 + chevron icon right
- Answer: Inter 14px secondary-text, revealed on toggle
- Border-bottom between items
- Smooth max-height animation

Data source: `faqs` table, filtered by `category`, ordered by `sort_order`

---

## PAGE: Contact (`/contact`)

**Mockup file:** `Mockups/Contact us page.png`

### Hero
- **Eyebrow:** "LET'S CONNECT"
- **Title:** "Contact Us"
- **Subtitle:** "We're here to help. Reach out to us for any queries related to RECYCLE27. We look forward to hearing from you."
- **Background:** IIT campus/aerial with dark overlay
- **Side text:** "PEOPLE / IDEAS / SOLUTIONS / A CLEANER TOMORROW"

### Contact Layout (2-column)

**Left column (~45%):**
- H2: "Get in Touch"
- Body: instructions text

**Contact info items (with Lucide icons):**
1. `[Mail icon]` **Email:** recycle27@iitg.ac.in
2. `[Phone icon]` **Phone:** +91 361 258 3000 / "(Extension will be updated soon)"
3. `[MapPin icon]` **Address:** Indian Institute of Technology Guwahati, Guwahati, Assam 781039, India
4. `[Clock icon]` **Conference Secretariat Hours:** Monday – Friday, 10:00 AM – 5:00 PM (IST)

**Right column (~55%):**
- H2: "Send us a Message"
- Subtext: "Fill in the form below and we'll get back to you soon."
- `<ContactForm />`

### Query Type Cards (4-column)
Below the main 2-column layout:
1. `[calendar icon]` **Registration Support** — "Assistance with registration and payments."
2. `[document icon]` **Abstract Submission** — "Queries related to abstract guidelines..."
3. `[handshake icon]` **Sponsorship & Partnerships** — "Explore collaboration opportunities."
4. `[chat icon]` **General Inquiries** — "Any other questions about the conference."

### Closing CTA
**Component:** `<ClosingCTA />`
**Eyebrow:** "TOGETHER FOR A CLEANER TOMORROW"
**H2:** "Let's Create a Sustainable Future"
**Body:** Invitation text
**CTA:** `[Register Now →]` btn-primary
**Right decoration:** Leaf photograph / botanical illustration

---

## PAGES NOT YET IN MOCKUPS

The following pages have **no mockup provided** and should be designed to match the established visual language:

### `/themes` — Themes Page
[IMPLEMENTATION DECISION REQUIRED: No mockup. Design to match system.]
- Hero with "Conference Themes" title
- 5 theme sections, each with: heading, description, sub-topics, related resources
- Same dark/light alternating sections

### `/important-dates` — Important Dates Page
[IMPLEMENTATION DECISION REQUIRED: No mockup.]
- Hero with "Important Dates" title
- Full timeline view of all dates
- Countdown integrated
- Categories: Submission | Acceptance | Registration | Conference

### `/accommodation` — Accommodation Page
[IMPLEMENTATION DECISION REQUIRED: No mockup.]
- Hero
- 3+ accommodation option detailed cards
- Booking instructions
- Map/location

---

## Shared Page Patterns

Every page follows this structure:
```
<Navbar />
<PageHero />       ← dark, full-width, with eyebrow + title + subtitle + optional CTAs
<Breadcrumb />     ← white strip, "Home > Page Name"
[content sections] ← alternating light/dark sections
<ClosingCTA />     ← before footer (most pages)
<Footer />
```
