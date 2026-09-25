/**
 * MockupPageSections
 *
 * Thin router that maps a page kind to the appropriate section component.
 * Each section lives in its own file under components/sections/.
 */
import { AboutSection } from "@/components/sections/AboutSection";
import { AbstractsSection } from "@/components/sections/AbstractsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FAQsSection } from "@/components/sections/FAQsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { VenueSection } from "@/components/sections/VenueSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { CommitteesSection } from "@/components/sections/CommitteesSection";
import { ProgrammeSection } from "@/components/sections/ProgrammeSection";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";

export function MockupPageSections({ kind }: { kind: string }) {
  switch (kind) {
    case "about":        return <AboutSection />;
    case "abstracts":    return <AbstractsSection />;
    case "gallery":      return <GallerySection />;
    case "faqs":         return <FAQsSection />;
    case "contact":      return <ContactSection />;
    case "sponsors":     return <SponsorsSection />;
    case "venue":        return <VenueSection />;
    case "speakers":     return <SpeakersSection />;
    case "committees":   return <CommitteesSection />;
    case "programme":    return <ProgrammeSection />;
    case "accommodation": return <AccommodationSection />;
    case "publications": return <PublicationsSection />;
    default:             return null;
  }
}