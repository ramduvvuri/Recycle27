import { Bell, ChevronRight, Leaf, Recycle, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { Countdown } from "@/components/shared/Countdown";
import { FAQList } from "@/components/shared/FAQList";
import { ClosingCTA } from "@/components/shared/ClosingCTA";
import Link from "next/link";

const themeItems = ["Waste Management and Resource Recovery", "Circular Economy and Sustainable Systems", "Policy, Governance and Social Impact", "Innovation and Emerging Technologies", "Climate, Environment and Human Health"];
export default function Home() { return <>
  <PageHero
    eyebrow="People · Ideas · Solutions · A cleaner tomorrow"
    title="RECYCLE27"
    description={<>International Conference on Sustainable Waste<br />Management and Circular Economy</>}
    image="/images/heroes/hero-sunset.png"
    actions
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
  <SectionWrapper theme="light"><div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="mb-6 text-sm font-semibold">Conference begins in</p><Countdown /></div><blockquote className="border-l border-primary-emerald pl-8 font-display text-3xl italic leading-tight text-dark-text md:text-5xl">“Towards a circular and sustainable future.”</blockquote></div></SectionWrapper>
  <SectionWrapper theme="white"><div className="grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><EyebrowLabel label="About RECYCLE27" /><h2 className="font-display text-4xl leading-tight text-dark-text md:text-6xl">A global dialogue for a sustainable tomorrow.</h2><p className="mt-6 max-w-xl leading-7 text-secondary-text">RECYCLE27 brings together researchers, industry experts, policymakers and students to discuss innovations and solutions for sustainable waste management and circular economy.</p><Button href="/about" variant="secondary" showArrow className="mt-8">Learn more about the conference</Button></div><div className="border-l border-light-border pl-8"><p className="font-display text-3xl text-dark-text">Cleaner environments.</p><p className="mt-6 font-display text-3xl text-dark-text">Healthier communities.</p><p className="mt-6 font-display text-3xl text-dark-text">A sustainable future.</p></div></div></SectionWrapper>
  <SectionWrapper theme="dark"><div className="flex flex-wrap items-end justify-between gap-6"><div><EyebrowLabel label="Conference themes" theme="dark" /><h2 className="font-display text-4xl text-light-text md:text-5xl">Key areas of focus.</h2></div><Link href="/themes" className="text-sm text-muted-green underline underline-offset-4">Explore all themes</Link></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{themeItems.map((item, index) => <article key={item} className="flex min-h-52 flex-col border border-dark-border bg-secondary-dark p-5"><Recycle className="text-muted-green" size={25} /><span className="mt-auto text-sm leading-6 text-light-text">{item}</span><span className="mt-4 text-xs text-muted-green">0{index + 1}</span></article>)}</div></SectionWrapper>
  <SectionWrapper theme="light"><div className="flex flex-wrap items-end justify-between gap-6"><div><EyebrowLabel label="Keynote speakers" /><h2 className="font-display text-4xl md:text-5xl">Eminent voices, global perspectives.</h2></div><Link href="/speakers" className="text-sm text-primary-emerald underline underline-offset-4">View all speakers</Link></div><div className="mt-10 grid gap-px border border-light-border bg-light-border md:grid-cols-4">{["Keynote speakers", "Plenary sessions", "Invited experts", "Committee voices"].map((name) => <div key={name} className="bg-soft-bg p-6"><Users className="text-primary-emerald" size={22} /><p className="mt-12 font-semibold">{name}</p><p className="mt-1 text-sm text-secondary-text">Announcement forthcoming</p><span className="mt-5 block h-px w-7 bg-primary-emerald" /></div>)}</div></SectionWrapper>
  <section className="grid md:grid-cols-[1.1fr_.9fr]"><div className="bg-primary-dark px-5 py-20 text-light-text md:px-8 lg:px-12"><EyebrowLabel label="Important dates" theme="dark" /><div className="mt-8 divide-y divide-dark-border">{[["Abstract submission deadline","To be announced"],["Acceptance notification","To be announced"],["Registration deadline","To be announced"],["Conference dates","12–14 May 2027"]].map(([a,b]) => <div className="flex justify-between gap-6 py-4 text-sm" key={a}><span>{a}</span><span className="text-right text-muted-green">{b}</span></div>)}</div><Link href="/important-dates" className="mt-7 inline-block text-sm text-muted-green underline underline-offset-4">View all dates</Link></div><div className="bg-warm-cream px-5 py-20 md:px-8 lg:px-12"><EyebrowLabel label="Quick links" /><div className="mt-8 grid gap-3"><Link href="/call-for-abstracts" className="flex items-center justify-between border border-light-border bg-white p-5 text-sm font-medium">Submit abstract <ChevronRight size={18} /></Link><Link href="/registration" className="flex items-center justify-between border border-light-border bg-white p-5 text-sm font-medium">Register now <ChevronRight size={18} /></Link><Link href="/venue-travel" className="flex items-center justify-between border border-light-border bg-white p-5 text-sm font-medium">Plan your visit <ChevronRight size={18} /></Link></div></div></section>
  <SectionWrapper theme="white"><div className="grid gap-12 lg:grid-cols-2"><div><EyebrowLabel label="Programme & participation" /><h2 className="font-display text-4xl md:text-5xl">Three days of ideas, exchange and action.</h2><p className="mt-5 leading-7 text-secondary-text">Discover sessions, travel information, accommodation guidance and participation updates as the conference takes shape.</p></div><div className="grid gap-3 sm:grid-cols-2">{[["Programme","/programme"],["Venue & travel","/venue-travel"],["Accommodation","/accommodation"],["Publications & awards","/publications-awards"]].map(([a,b]) => <Link className="border border-light-border p-5 transition-colors hover:bg-soft-bg" href={b} key={a}><Leaf className="text-primary-emerald" size={20}/><span className="mt-10 block text-sm font-medium">{a}</span></Link>)}</div></div></SectionWrapper>
  <SectionWrapper theme="light"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><EyebrowLabel label="Frequently asked questions" /><h2 className="font-display text-4xl md:text-5xl">Have questions?</h2><Link href="/faqs" className="mt-7 inline-block text-sm text-primary-emerald underline underline-offset-4">View all FAQs</Link></div><FAQList items={[{question:"Who can participate in RECYCLE27?",answer:"Researchers, practitioners, policymakers and students working towards sustainable systems are welcome."},{question:"Where can I find abstract guidelines?",answer:"The official abstract template and submission link will be published on the Call for Abstracts page."},{question:"Where will the conference take place?",answer:"RECYCLE27 is planned at IIT Guwahati in Assam, India."}]} /></div></SectionWrapper>
  <ClosingCTA />
</>; }
