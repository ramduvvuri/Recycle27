import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <ContactSection />
    </>
  );
}
