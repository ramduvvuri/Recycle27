import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/shared/FinalCTA";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's connect"
        title="Contact Us"
        description="We're here to help. Reach out to us for any queries related to ReCYCLE 2027. We look forward to hearing from you."
        pageKey="contact"
        sideText={["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"]}
      />
      <Breadcrumb items={[{ label: "Contact" }]} />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
