// =============================================================================
// /data/speakers.ts — Conference speakers (local static data)
// Replaces Supabase speaker fetching for the public website.
// =============================================================

export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  country: string;
  image?: string;
  topic?: string;
  bio?: string;
  role?: "keynote" | "plenary" | "invited";
}

/**
 * Approved keynote speakers for ReCYCLE 2027.
 * Images use Unsplash placeholders until official portraits are supplied.
 * TO UPDATE: Replace the image URL with the official portrait when available.
 */
export const keynoteSpeakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Prof. Jonathan W C Wong",
    affiliation: "DUT, Guangdong",
    country: "China",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    role: "keynote",
  },
  {
    id: "speaker-2",
    name: "Prof. John In Hong",
    affiliation: "SNU",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
    role: "keynote",
  },
  {
    id: "speaker-3",
    name: "Prof. Pascaline Pré",
    affiliation: "IMT Atlantique",
    country: "France",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    role: "keynote",
  },
  {
    id: "speaker-4",
    name: "Prof. Agamutu Pariatamby",
    affiliation: "Sunway University",
    country: "Malaysia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    role: "keynote",
  },
  {
    id: "speaker-5",
    name: "Prof. C. Visvanathan",
    affiliation: "AIT",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    role: "keynote",
  },
];

/**
 * All speakers combined.
 * Extend with plenary/invited speakers as they are confirmed.
 */
export const allSpeakers: Speaker[] = [...keynoteSpeakers];
