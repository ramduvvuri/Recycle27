export interface Sponsor {
  name: string;
  logo: string;
}

export interface SponsorTier {
  title: string;
  sponsors: Sponsor[];
  cols: string;
}

export const sponsorTiers: SponsorTier[] = [
  {
    title: "Platinum Sponsors",
    sponsors: [
      { name: "Tata", logo: "/images/sponsors/clean/tata.png" },
      { name: "Reliance", logo: "/images/sponsors/clean/reliance.png" },
    ],
    cols: "lg:grid-cols-2",
  },
  {
    title: "Gold Sponsors",
    sponsors: [
      { name: "Adani", logo: "/images/sponsors/clean/adani.png" },
      { name: "Larsen & Toubro", logo: "/images/sponsors/clean/larsen-toubro.png" },
      { name: "Indian Oil", logo: "/images/sponsors/clean/indianoil.png" },
      { name: "Wipro", logo: "/images/sponsors/clean/wipro.png" },
    ],
    cols: "md:grid-cols-2 lg:grid-cols-4",
  },
  {
    title: "Silver Sponsors",
    sponsors: [
      { name: "Hitachi", logo: "/images/sponsors/clean/hitachi.png" },
      { name: "NEC", logo: "/images/sponsors/clean/nec.png" },
      { name: "Suzuki", logo: "/images/sponsors/clean/suzuki.png" },
      { name: "Thermo Fisher", logo: "/images/sponsors/clean/thermo-fisher.png" },
      { name: "Vedanta", logo: "/images/sponsors/clean/vedanta.png" },
      { name: "Coca Cola", logo: "/images/sponsors/clean/coca-cola.png" },
    ],
    cols: "md:grid-cols-2 lg:grid-cols-3",
  },
  {
    title: "Supporting Organizations",
    sponsors: [
      { name: "NITI Aayog", logo: "/images/sponsors/clean/niti-aayog.png" },
      { name: "MOEF", logo: "/images/sponsors/clean/moef.png" },
      { name: "CPCB", logo: "/images/sponsors/clean/cpcb.png" },
      { name: "FICCI", logo: "/images/sponsors/clean/ficci.png" },
      { name: "TERI", logo: "/images/sponsors/clean/teri.png" },
    ],
    cols: "md:grid-cols-2 lg:grid-cols-5",
  },
];
