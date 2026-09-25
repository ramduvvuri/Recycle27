"use client";

import { Bell, ChevronRight, Download, FileText, Globe2, Landmark, Leaf, Recycle, Settings, UserRound, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Countdown } from "@/components/shared/Countdown";
import { FAQList } from "@/components/shared/FAQList";
import Link from "next/link";

const themeItems = ["Waste Management and Resource Recovery", "Circular Economy and Sustainable Systems", "Policy, Governance and Social Impact", "Innovation and Emerging Technologies", "Climate, Environment and Human Health"];
export default function Home() { return <>
  <PageHero
    eyebrow="People · Ideas · Solutions · A cleaner tomorrow"
    title="RECYCLE27"
    description={<>International Conference on Sustainable Waste<br />Management and Circular Economy</>}
    image="/images/heroes/hero-sunset.png"
    actions
    modalTrigger
  >
    <div className="relative z-10 w-full px-5 pb-5 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-md bg-[#245C45] px-5 py-3.5 text-sm text-light-text md:flex-row md:items-center md:justify-between md:px-6">
        <span className="flex flex-wrap items-center gap-3">
          <Bell size={17} />
          <strong>Latest Update</strong>
          <span className="hidden opacity-50 md:inline">|</span>
          Abstract submission deadline extended to 15 January 2027.
        </span>
        <Link href="/important-dates" className="inline-flex items-center gap-1 text-xs underline underline-offset-4">
          View All Announcements <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  </PageHero>
  <Countdown />
  {/* About Section */}
  <SectionWrapper theme="white" spacing="normal" className="relative isolate overflow-hidden">
    <div className="pointer-events-none absolute -right-20 -bottom-40 -z-10 hidden h-80 w-[36rem] overflow-hidden opacity-15 blur-2xl lg:block">
      <Image src="/images/forest.png" alt="" fill sizes="576px" className="object-cover scale-x-[-1]" />
    </div>
    <div className="grid gap-8 lg:gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
      <div>
        <EyebrowLabel label="About RECYCLE27" />
        <h2 className="max-w-md font-display text-3xl leading-[1.02] tracking-[-.03em] text-dark-text md:text-[42px]">
          A global dialogue for a sustainable tomorrow.
        </h2>
        <p className="mt-5 max-w-md text-xs leading-5 text-secondary-text md:text-[13px] md:leading-6">
          RECYCLE27 brings together researchers, industry experts, policymakers and students to discuss innovations and solutions for sustainable waste management and circular economy. The conference aims to foster collaboration, knowledge exchange and actionable outcomes for a cleaner and more resilient future.
        </p>
        <Button href="/about" variant="secondary" showArrow className="mt-6 rounded-sm px-4 py-2 text-xs">
          Learn more about the conference
        </Button>
      </div>
      <div className="relative aspect-[16/7] overflow-hidden">
        <Image src="/images/forest.png" fill sizes="(max-width: 1024px) 100vw, 55vw" alt="Aerial view of lush forest and a winding river" className="object-cover" />
        <div className="absolute inset-y-0 right-0 flex w-[33%] flex-col justify-center bg-primary-dark/85 px-5 text-light-text">
          <p className="font-display text-lg leading-tight md:text-xl">Cleaner<br />environments.</p>
          <span className="my-3 block h-px w-5 bg-muted-green" />
          <p className="font-display text-lg leading-tight md:text-xl">Healthier<br />communities.</p>
          <span className="my-3 block h-px w-5 bg-muted-green" />
          <p className="font-display text-sm leading-tight md:text-base">A more<br />sustainable future.</p>
        </div>
      </div>
    </div>
  </SectionWrapper>

  {/* Conference Themes */}
  <SectionWrapper theme="dark" spacing="normal">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <EyebrowLabel label="Conference themes" theme="dark" />
        <h2 className="font-display text-3xl text-light-text md:text-[42px]">Key areas of focus.</h2>
      </div>
      <Link href="/themes" className="text-xs text-light-text underline underline-offset-4">
        Explore all themes <span aria-hidden="true">→</span>
      </Link>
    </div>
    <div className="mt-8 md:mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {themeItems.map((item, index) => {
        const Icon = [Leaf, Recycle, Landmark, Settings, Globe2][index];
        return (
          <article key={item} className="flex min-h-32 flex-col items-center justify-center rounded-md border border-dark-border bg-secondary-dark px-4 py-5 text-center transition-colors hover:bg-deep-emerald/25">
            <Icon className="text-light-text" size={30} strokeWidth={1.5} />
            <span className="mt-3 font-display text-sm leading-5 text-light-text">{item}</span>
          </article>
        );
      })}
    </div>
  </SectionWrapper>

  {/* Keynote Speakers */}
  <SectionWrapper theme="light" spacing="normal">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <EyebrowLabel label="Keynote speakers" />
        <h2 className="font-display text-3xl tracking-[-.025em] md:text-[42px]">Eminent voices, global perspectives.</h2>
      </div>
      <Link href="/speakers" className="text-xs text-dark-text underline underline-offset-4">
        View all speakers <span aria-hidden="true">→</span>
      </Link>
    </div>
    <div className="mt-8 md:mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {[
        ["Prof. Maria Gonzalez", "University of Barcelona, Spain"],
        ["Prof. Kenji Tanaka", "University of Tokyo, Japan"],
        ["Prof. Sarah Mitchell", "University of Toronto, Canada"],
        ["Prof. Arvind Rao", "IIT Madras, India"],
      ].map(([name, institution], index) => (
        <article key={name} className="flex items-center gap-3 rounded-md border border-light-border bg-white p-2.5">
          <div className={`grid size-16 shrink-0 place-items-center rounded-sm bg-gradient-to-br ${["from-stone-300 to-stone-500", "from-slate-300 to-slate-600", "from-amber-100 to-amber-400", "from-zinc-300 to-zinc-600"][index]}`} aria-label="Speaker photo placeholder">
            <UserRound size={30} strokeWidth={1.25} className="text-white/90" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-xs font-semibold text-dark-text">{name}</h3>
            <p className="mt-1 truncate text-[10px] text-secondary-text">{institution}</p>
            <span className="mt-3 block h-px w-5 bg-primary-emerald" />
          </div>
        </article>
      ))}
    </div>
  </SectionWrapper>

  {/* Split Section: Important Dates & Quick Links */}
  <section className="grid md:grid-cols-2">
    <div className="bg-primary-dark px-6 py-20 text-light-text sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-32 xl:px-16">
      <EyebrowLabel label="Important dates" theme="dark" />
      <div className="mt-8 divide-y divide-dark-border">
        {[
          ["Abstract Submission Deadline", "15 January 2027"],
          ["Acceptance Notification", "15 February 2027"],
          ["Registration Deadline", "31 March 2027"],
          ["Conference Dates", "12 – 14 May 2027"],
        ].map(([a, b]) => (
          <div className="flex justify-between gap-5 py-3.5 text-xs md:text-sm" key={a}>
            <span>{a}</span>
            <strong className="text-right font-medium text-light-text">{b}</strong>
          </div>
        ))}
      </div>
      <Link href="/important-dates" className="mt-8 inline-flex items-center gap-1 text-xs text-light-text underline underline-offset-4">
        View all dates <span aria-hidden="true">→</span>
      </Link>
    </div>
    <div className="relative isolate overflow-hidden bg-warm-cream px-6 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-32 xl:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(143,166,154,.27),_transparent_58%)]" />
      <EyebrowLabel label="Quick links" />
      <div className="mt-8 grid grid-cols-3 gap-3">
        <Link href="/call-for-abstracts" className="flex min-h-28 flex-col items-center justify-center rounded-md bg-white/85 p-3 text-center shadow-sm transition-transform hover:-translate-y-0.5">
          <FileText size={28} strokeWidth={1.45} />
          <span className="mt-3 text-[11px] font-medium">Submit Abstract</span>
        </Link>
        <Button modalTrigger className="flex min-h-28 flex-col items-center justify-center rounded-md bg-white/85 p-3 text-center shadow-sm transition-transform hover:-translate-y-0.5">
          <UserRound size={28} strokeWidth={1.45} />
          <span className="mt-3 text-[11px] font-medium">Register Now</span>
        </Button>
        <Link href="/contact" className="flex min-h-28 flex-col items-center justify-center rounded-md bg-white/85 p-3 text-center shadow-sm transition-transform hover:-translate-y-0.5">
          <Download size={28} strokeWidth={1.45} />
          <span className="mt-3 text-[11px] font-medium">Download Brochure</span>
        </Link>
      </div>
    </div>
  </section>

  {/* Frequently Asked Questions */}
  <SectionWrapper theme="light" spacing="normal">
    <div className="grid gap-10 lg:gap-14 lg:grid-cols-[.8fr_1.2fr] items-start">
      <div>
        <EyebrowLabel label="Frequently asked questions" />
        <h2 className="font-display text-4xl md:text-5xl">Have questions?</h2>
        <Link href="/faqs" className="mt-7 inline-block text-sm text-primary-emerald underline underline-offset-4">
          View all FAQs
        </Link>
      </div>
      <FAQList items={[
        { question: "Who can participate in RECYCLE27?", answer: "Researchers, practitioners, policymakers and students working towards sustainable systems are welcome." },
        { question: "Where can I find abstract guidelines?", answer: "The official abstract template and submission link will be published on the Call for Abstracts page." },
        { question: "Where will the conference take place?", answer: "RECYCLE27 is planned at IIT Guwahati in Assam, India." },
      ]} />
    </div>
  </SectionWrapper>
</>; }
