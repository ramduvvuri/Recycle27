/**
 * Curated hero and banner imagery for all RECYCLE27 internal pages.
 * 
 * Rules:
 * - Each image combines the specific PAGE TOPIC with the RECYCLE27 environmental / sustainable context.
 * - Realistic, editorial, high-resolution Unsplash photography suitable with the dark-green overlay.
 * - Home page is NOT part of this configuration.
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
  // About: Prestigious academic campus architecture and lush green surroundings (IIT Guwahati context)
  about: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",

  // Themes: Renewable energy, wind turbines across rolling green hills — sustainable circular future
  themes: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=85",

  // Speakers: Keynote speaker presenting on stage at a darkened academic conference hall
  speakers: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=85",

  // Committees: Interdisciplinary researchers and faculty collaborating at a symposium table
  committees: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85",

  // Programme: Conference auditorium filled with attentive delegates during technical sessions
  programme: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=85",

  // Registration: Delegates gathering and arriving at the conference venue
  registration: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85",

  // Call for Abstracts: Scholarly research papers, academic manuscripts, and scientific study desk
  abstracts: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=2000&q=85",

  // Publications & Awards: Prestigious academic library with scholarly journals, volumes, and awards
  publications: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2000&q=85",

  // Venue & Travel: Serene campus lake and landscape of IIT Guwahati along the Brahmaputra
  venue: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=2000&q=85",

  // Accommodation: Peaceful, welcoming hotel / university guest residence with natural calm ambience
  accommodation: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",

  // Sponsors: Clean modern sustainable architecture representing industry partnership and green infrastructure
  sponsors: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",

  // Gallery: Active conference engagement, attendees and vibrant event moments
  gallery: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85",

  // FAQs: Conference inquiry, knowledge exchange and guidance in a university setting
  faqs: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=85",

  // Contact: Professional dialogue, inquiry communication and conference secretariat consultation
  contact: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85",

  // Important Dates: Planning calendar and schedule notebook surrounded by natural greenery
  dates: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=2000&q=85",
};

export function getHeroImage(key: PageHeroKey): string {
  return HERO_IMAGES[key] ?? HERO_IMAGES.about;
}
