"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, Phone } from "lucide-react";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FAQList } from "@/components/shared/FAQList";
import { faqs, FAQ } from "@/data/faqs";

const categories = [
  "All Questions",
  "General",
  "Abstract Submission",
  "Registration",
  "Programme",
  "Travel & Accommodation",
  "Publications & Awards",
  "Sponsorship",
];

const faqGroups = [
  "General",
  "Abstract Submission",
  "Registration",
  "Programme",
  "Travel & Accommodation",
  "Publications & Awards",
  "Sponsorship",
];

export function FAQsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Questions");

  const displayedGroups =
    selectedCategory === "All Questions"
      ? faqGroups
      : faqGroups.filter((g) => g === selectedCategory);

  const getCount = (cat: string) => {
    if (cat === "All Questions") return faqs.length;
    return faqs.filter((f) => f.category === cat).length;
  };

  return (
    <SectionWrapper theme="white" spacing="compact">
      {/* Mobile horizontal category filter chips */}
      <div className="lg:hidden mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary-text mb-3 flex items-center gap-1.5">
          <HelpCircle size={14} className="text-primary-emerald" />
          Filter by Topic:
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((label) => {
            const count = getCount(label);
            const isSelected = selectedCategory === label;
            return (
              <button
                key={label}
                onClick={() => setSelectedCategory(label)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#0C5A3D] text-white shadow-sm"
                    : "bg-soft-bg text-dark-text/80 hover:bg-black/5 border border-light-border"
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <div className="rounded-lg border border-light-border overflow-hidden shadow-sm bg-white">
              <div className="px-4 py-3 bg-[#0C5A3D]/5 border-b border-light-border">
                <span className="font-body text-[11px] font-bold uppercase tracking-wider text-[#0C5A3D]">
                  Topics ({faqs.length} FAQs)
                </span>
              </div>
              <div className="divide-y divide-light-border/60">
                {categories.map((label) => {
                  const count = getCount(label);
                  const isSelected = selectedCategory === label;
                  return (
                    <button
                      key={label}
                      onClick={() => setSelectedCategory(label)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-xs font-medium transition-colors ${
                        isSelected
                          ? "bg-[#0C5A3D] text-white font-semibold"
                          : "bg-white text-dark-text/85 hover:bg-soft-bg"
                      }`}
                    >
                      <span>{label}</span>
                      <span
                        className={`text-[11px] rounded-full px-1.5 py-0.5 ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-black/5 text-secondary-text"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="rounded-lg bg-[#FAF7EE] border border-[#0C5A3D]/15 p-6 shadow-sm">
              <h4 className="font-display text-lg text-[#113224] font-medium leading-tight mb-2">
                Need more information?
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed mb-4">
                Our conference secretariat is available to assist with submissions, registration, or travel queries.
              </p>
              <div className="space-y-2 mb-5 text-[11.5px] text-dark-text/80">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-[#0C5A3D] shrink-0" />
                  <a
                    href="mailto:recycle2k27@iitg.ac.in"
                    className="hover:text-[#0C5A3D] hover:underline transition-colors truncate"
                  >
                    recycle2k27@iitg.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-[#0C5A3D] shrink-0" />
                  <a
                    href="tel:+919535533933"
                    className="hover:text-[#0C5A3D] hover:underline transition-colors"
                  >
                    +91 9535533933
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C5A3D] hover:underline"
              >
                Go to Contact Page <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </aside>

        {/* FAQ groups */}
        <div className="space-y-10 min-w-0">
          {displayedGroups.map((group) => {
            const groupItems = faqs.filter((f) => f.category === group);
            if (groupItems.length === 0) return null;

            return (
              <section key={group} className="scroll-mt-32">
                <div className="flex items-center justify-between border-b border-light-border pb-3 mb-4">
                  <h2 className="font-display text-2xl text-[#113224] tracking-tight">
                    {group}
                  </h2>
                  <span className="text-xs font-medium text-secondary-text bg-soft-bg px-2.5 py-1 rounded-full border border-light-border/60">
                    {groupItems.length} {groupItems.length === 1 ? "Question" : "Questions"}
                  </span>
                </div>
                <FAQList items={groupItems} />
              </section>
            );
          })}

          {selectedCategory !== "All Questions" && (
            <div className="pt-4 text-center sm:text-left">
              <button
                onClick={() => setSelectedCategory("All Questions")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C5A3D] hover:underline"
              >
                &larr; View all {faqs.length} questions across all topics
              </button>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
