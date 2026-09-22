# TECHNICAL-ARCHITECTURE.md — Recycle27 Technical Specification

## Technology Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14+ (App Router) | SSR/SSG, routing, image optimization |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS | Utility-first, consistent system |
| Database | Supabase (PostgreSQL) | Managed Postgres + auth + storage |
| Auth | Supabase Auth | Admin login; no public auth needed |
| Animations | Framer Motion | Editorial scroll animations |
| Icons | Lucide React | Consistent monochrome icon set |
| Fonts | Google Fonts (next/font) | DM Serif Display + Inter |
| Image Storage | Supabase Storage | Dynamic image uploads |
| Deployment | [IMPLEMENTATION DECISION REQUIRED] | Vercel recommended |

---

## Repository Structure

```
recycle27/
├── app/
│   ├── layout.tsx                    # Root layout (Navbar + Footer)
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── themes/
│   │   └── page.tsx
│   ├── speakers/
│   │   └── page.tsx
│   ├── committees/
│   │   └── page.tsx
│   ├── call-for-abstracts/
│   │   └── page.tsx
│   ├── important-dates/
│   │   └── page.tsx
│   ├── registration/
│   │   └── page.tsx
│   ├── programme/
│   │   └── page.tsx
│   ├── venue-travel/
│   │   └── page.tsx
│   ├── accommodation/
│   │   └── page.tsx
│   ├── publications-awards/
│   │   └── page.tsx
│   ├── sponsors/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── faqs/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── admin/
│   │   ├── layout.tsx                # Admin layout (sidebar)
│   │   ├── page.tsx                  # Dashboard
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── announcements/
│   │   │   └── page.tsx
│   │   ├── dates/
│   │   │   └── page.tsx
│   │   ├── speakers/
│   │   │   └── page.tsx
│   │   ├── committees/
│   │   │   └── page.tsx
│   │   ├── registration/
│   │   │   └── page.tsx
│   │   ├── programme/
│   │   │   └── page.tsx
│   │   ├── documents/
│   │   │   └── page.tsx
│   │   ├── accommodation/
│   │   │   └── page.tsx
│   │   ├── publications/
│   │   │   └── page.tsx
│   │   ├── sponsors/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── faqs/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts              # Contact form submission handler
│   │   └── admin/
│   │       └── upload/
│   │           └── route.ts          # Image upload to Supabase Storage
│   ├── sitemap.ts                    # Dynamic sitemap
│   ├── robots.ts                     # robots.txt
│   ├── not-found.tsx                 # 404 page
│   └── globals.css                   # Global CSS (tokens + resets + utilities)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── AnnouncementBar.tsx
│   │   └── Breadcrumb.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── EyebrowLabel.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── HeroSideText.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── Divider.tsx
│   │   ├── Badge.tsx
│   │   ├── InfoNote.tsx
│   │   └── QuoteBlock.tsx
│   ├── sections/
│   │   ├── PageHero.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── ClosingCTA.tsx
│   ├── speakers/
│   │   ├── SpeakerCard.tsx
│   │   ├── SpeakerCardCompact.tsx
│   │   └── SpeakerGrid.tsx
│   ├── programme/
│   │   ├── ProgrammeTabs.tsx
│   │   ├── ProgrammeRow.tsx
│   │   └── ProgrammeTable.tsx
│   ├── dates/
│   │   ├── ImportantDatesList.tsx
│   │   ├── DateRow.tsx
│   │   └── Countdown.tsx
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   ├── GalleryCard.tsx
│   │   ├── GalleryFilter.tsx
│   │   └── GalleryLightbox.tsx
│   ├── sponsors/
│   │   ├── SponsorTier.tsx
│   │   └── SponsorLogo.tsx
│   ├── faqs/
│   │   ├── FAQSidebar.tsx
│   │   ├── FAQSection.tsx
│   │   └── FAQAccordion.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── FormField.tsx
│   │   └── FormSelect.tsx
│   ├── cards/
│   │   ├── FeatureCard.tsx
│   │   ├── QuickLinkCard.tsx
│   │   ├── TransportCard.tsx
│   │   ├── AccommodationCard.tsx
│   │   └── ThemeCard.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ThemesPreview.tsx
│   │   ├── SpeakersPreview.tsx
│   │   ├── DatesPreview.tsx
│   │   ├── RegistrationPreview.tsx
│   │   ├── ProgrammePreview.tsx
│   │   ├── VenuePreview.tsx
│   │   ├── AccommodationPreview.tsx
│   │   ├── PublicationsPreview.tsx
│   │   ├── SponsorsPreview.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── FAQPreview.tsx
│   │   └── ContactCTA.tsx
│   └── admin/
│       ├── AdminLayout.tsx
│       ├── AdminSidebar.tsx
│       ├── AdminHeader.tsx
│       ├── AdminTable.tsx
│       ├── AdminForm.tsx
│       ├── AdminFormField.tsx
│       ├── ImageUpload.tsx
│       ├── StatusBadge.tsx
│       └── ConfirmDelete.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                 # Client-side Supabase client
│   │   ├── server.ts                 # Server-side Supabase client (SSR)
│   │   ├── middleware.ts             # Auth middleware helper
│   │   └── queries/
│   │       ├── announcements.ts
│   │       ├── speakers.ts
│   │       ├── dates.ts
│   │       ├── programme.ts
│   │       ├── sponsors.ts
│   │       ├── gallery.ts
│   │       ├── faqs.ts
│   │       ├── settings.ts
│   │       └── index.ts
│   ├── animation.ts                  # Framer Motion variants + tokens
│   ├── utils.ts                      # General utilities (cn, formatDate, etc.)
│   └── content/
│       ├── site.ts
│       ├── about.ts
│       ├── themes.ts
│       ├── submission.ts
│       ├── navigation.ts
│       ├── contact-static.ts
│       ├── venue-static.ts
│       └── registration-static.ts
│
├── types/
│   ├── database.ts                   # Supabase table types
│   └── index.ts                      # Re-exports
│
├── public/
│   ├── images/
│   │   ├── heroes/                   # Page hero photographs
│   │   ├── about/                    # About section images
│   │   └── site/                     # OG image, branding
│   ├── icons/                        # Custom SVG icons (if any)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   └── manifest.json
│
├── supabase/
│   ├── migrations/                   # SQL migration files
│   └── seed.sql                      # Development seed data
│
├── docs/                             # This documentation system
│
├── middleware.ts                     # Next.js middleware (admin auth guard)
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── .env.local                        # Environment variables (not committed)
├── .env.example                      # Example env file (committed)
└── package.json
```

---

## Next.js Configuration

```ts
// next.config.ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  experimental: {
    // Enable if needed
  },
}

export default config
```

---

## Tailwind Configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark':    '#071710',
        'secondary-dark':  '#0D241B',
        'deep-emerald':    '#145C3C',
        'primary-emerald': '#1E8A5A',
        'muted-green':     '#8FA69A',
        'warm-cream':      '#F2EFE6',
        'soft-bg':         '#FAF9F5',
        'dark-text':       '#111715',
        'secondary-text':  '#56615D',
        'light-text':      '#F5F3ED',
        'light-border':    '#D9DED8',
        'dark-border':     '#294137',
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Fonts Setup

```tsx
// app/layout.tsx
import { DM_Serif_Display, Inter } from 'next/font/google'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body className="font-sans bg-soft-bg text-dark-text">
        {children}
      </body>
    </html>
  )
}
```

---

## Supabase Client Setup

```ts
// lib/supabase/client.ts (browser)
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

```ts
// lib/supabase/server.ts (server components + actions)
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {}
        },
      },
    }
  )
}
```

---

## Middleware (Admin Auth Guard)

```ts
// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Protect all /admin/* routes except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check Supabase session
    // If no session, redirect to /admin/login
    const response = NextResponse.next()
    // ... Supabase session check
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
```

---

## Query Pattern (Supabase)

```ts
// lib/supabase/queries/speakers.ts

import { createClient } from '@/lib/supabase/server'
import type { Speaker } from '@/types/database'

export async function getActiveSpeakers(type?: Speaker['speaker_type']) {
  const supabase = await createClient()
  
  let query = supabase
    .from('speakers')
    .select('*')
    .eq('is_active', true)
    .order('sort_order')
  
  if (type) {
    query = query.eq('speaker_type', type)
  }
  
  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching speakers:', error)
    return []
  }
  
  return data as Speaker[]
}
```

---

## Utility Functions

```ts
// lib/utils.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind class merger
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date for display
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Format fee in INR
export function formatFee(amount: number): string {
  return `₹ ${amount.toLocaleString('en-IN')}`
}

// Time from ISO/time string
export function formatTime(time: string): string {
  // "09:00" → "09:00 AM"
  const [h, m] = time.split(':').map(Number)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 || 12
  return `${hour}:${m.toString().padStart(2, '0')} ${ampm}`
}
```

---

## SEO Pattern

```ts
// Every page uses Next.js metadata API

// Static page
export const metadata: Metadata = {
  title: 'About — RECYCLE27',
  description: 'Learn about RECYCLE27...',
  openGraph: {
    title: 'About RECYCLE27',
    description: '...',
    images: ['/og-image.jpg'],
  }
}

// Dynamic page (generates metadata from data)
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Speakers — RECYCLE27',
    // ...
  }
}
```

---

## Contact Form API Route

```ts
// app/api/contact/route.ts

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message } = body
  
  // Validate fields
  // Send email (e.g., via Resend or NodeMailer)
  // Return success/error response
  
  return Response.json({ success: true })
}
```

[IMPLEMENTATION DECISION REQUIRED: Email service — Resend, SendGrid, or nodemailer with SMTP]

---

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP (hero image) | < 2.5s |
| FCP | < 1.5s |
| CLS | < 0.1 |
| Total JS bundle | < 300KB first load |
| Time to Interactive | < 3.5s |

### Strategies
- All public pages: Server Components by default
- Client Components only for: Countdown, Gallery filter, FAQ accordion, Programme tabs, Navbar scroll, Gallery lightbox
- Hero images: `priority` prop
- Gallery images: lazy load + blur placeholder
- Fonts: `next/font` (no FOUT)
- No autoplay video
- Minimal third-party scripts

---

## Dependencies (Estimated `package.json`)

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "typescript": "^5.x",
    "@supabase/supabase-js": "^2.x",
    "@supabase/ssr": "^0.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "@types/react": "^18.x",
    "@types/node": "^20.x",
    "eslint": "^8.x",
    "eslint-config-next": "^14.x"
  }
}
```
