import Link from "next/link";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FAQList } from "@/components/shared/FAQList";
import { faqs } from "@/data/faqs";

const categories = [
  "All Questions",
  "General",
  "Registration",
  "Abstract Submission",
  "Programme",
  "Travel & Accommodation",
  "Publications & Awards",
  "Sponsorship",
];

const faqGroups = [
  "General",
  "Registration",
  "Abstract Submission",
  "Programme",
  "Travel & Accommodation",
  "Publications & Awards",
];

export function FAQsSection() {
  return (
    <SectionWrapper theme="white" spacing="compact">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside>
          <div className="space-y-px border border-light-border">
            {categories.map((label, i) => (
              <button
                key={label}
                className={`block w-full px-4 py-3 text-left text-xs ${
                  i === 0 ? "bg-primary-dark text-light-text" : "bg-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-8 bg-warm-cream p-6">
            <p className="font-display text-3xl text-deep-emerald">
              &ldquo;Small questions lead to big solutions.&rdquo;
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Contact Us
            </Link>
          </div>
        </aside>

        {/* FAQ groups */}
        <div className="space-y-9">
          {faqGroups.map((group) => (
            <div key={group}>
              <h2 className="mb-3 font-display text-2xl">{group}</h2>
              <FAQList items={faqs.filter(f => f.category === group) || []} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
