import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQsSection } from "@/components/sections/FAQsSection";
import { FinalCTA } from "@/components/shared/FinalCTA";

export default function FAQsPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions · clarity · a cleaner tomorrow"
        title="Frequently Asked Questions"
        description="Find answers to common queries about ReCYCLE 2027. Still have a question? Feel free to reach out to us."
        pageKey="faqs"
      />
      <Breadcrumb items={[{ label: "FAQs" }]} />
      <FAQsSection />
      <FinalCTA />
    </>
  );
}
