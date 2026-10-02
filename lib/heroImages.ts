/**
 * Curated hero and banner imagery for all RECYCLE27 internal pages.
 *
 * IMAGE FAMILIES:
 *   WASTE PROCESSING  — sorting, baling, conveyor, MRF
 *   TREATMENT/RECOVERY — wastewater, composting, anaerobic digestion, WtE
 *   RESEARCH/LAB      — environmental lab, water analysis, microplastics
 *   CONFERENCE/PEOPLE — keynote, audience, poster session, academic hall
 *   IITG/CAMPUS       — IIT Guwahati architecture, campus, accommodation
 *
 * Rules:
 *   - Local assets preferred; Unsplash for pages where local asset is
 *     not yet available and the subject is appropriate.
 *   - Home page hero is NOT part of this config (managed in page.tsx).
 *   - All images are used behind a white/dark overlay in PageHero.
 */

export type PageHeroKey =
  | "about"
  | "themes"
  | "speakers"
  | "committees"
  | "programme"
  | "registration"
  | "abstracts"
  | "dates"
  | "venue"
  | "accommodation"
  | "publications"
  | "sponsors"
  | "gallery"
  | "faqs"
  | "contact";

export const HERO_IMAGES: Record<PageHeroKey, string> = {
  // About: Waste sorting at a material recovery facility — communicates the
  // conference subject immediately.
  about: "/images/waste/mrf-sorting-01.jpg",

  // Themes: Wastewater treatment clarifier basins — engineering infrastructure
  // representing the breadth of RECYCLE themes.
  themes: "/images/waste/wastewater-clarifier-01.jpg",

  // Speakers: Academic conference hall with keynote presenter and full audience.
  speakers: "/images/conference/conference-hall-01.jpg",

  // Committees: Researchers collaborating at an academic symposium/workshop.
  committees: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=2000&q=85",

  // Programme: Conference auditorium with attentive delegates.
  programme: "/images/heroes/programme.jpg",

  // Registration: Delegates gathering at conference venue entrance/foyer.
  registration: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85",

  // Call for Abstracts: Environmental research laboratory — researcher
  // examining water samples, analytical instruments.
  abstracts: "/images/research/env-lab-01.jpg",

  // Important Dates: Resource recovery / recycling facility — bales of
  // recovered materials communicate circular economy context.
  dates: "/images/heroes/imp-dates.jpg",

  // Venue & Travel: IIT Guwahati campus building and greenery.
  venue: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",

  // Accommodation: Calm university guesthouse / campus residence.
  accommodation: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",

  // Publications & Awards: Scientific papers and academic research material.
  publications: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=2000&q=85",

  // Sponsors: Industrial waste-processing / recycling facility showing
  // industrial partnership context.
  sponsors: "/images/heroes/sponsorship.jpg",

  // Gallery: Active academic conference — audience, networking, poster session.
  gallery: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85",

  // FAQs: Environmental lab — subdued, credible academic context.
  faqs: "/images/heroes/faq.jpg",

  // Contact: IIT Guwahati campus architecture — institutional and welcoming.
  contact: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=2000&q=85",
};

export function getHeroImage(key: PageHeroKey): string {
  return HERO_IMAGES[key] ?? HERO_IMAGES.about;
}
