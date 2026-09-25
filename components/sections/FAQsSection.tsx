import Link from "next/link";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FAQList } from "@/components/shared/FAQList";

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

const faqItems = [
  {
    question: "What is RECYCLE27?",
    answer: "RECYCLE27 is an international conference on sustainable waste management and circular economy.",
  },
  {
    question: "When and where will the conference be held?",
    answer: "The conference is planned for 12–14 May 2027 at IIT Guwahati.",
  },
  {
    question: "Who can participate?",
    answer: "Researchers, practitioners, policy makers and students are welcome.",
  },
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
              <FAQList items={faqItems} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
