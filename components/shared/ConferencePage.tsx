import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { PageHero } from "./PageHero";
import { FinalCTA } from "./FinalCTA";
import { FAQList } from "./FAQList";
import { MockupPageSections } from "./MockupPageSections";
import { ThemesPage } from "./ThemesPage";
import { VenueTravelPage } from "./VenueTravelPage";
import { MapPin } from "lucide-react";

import { getHeroImage, PageHeroKey } from "@/lib/heroImages";

export type PageKind = "about" | "themes" | "speakers" | "committees" | "abstracts" | "dates" | "programme" | "venue" | "accommodation" | "publications" | "sponsors" | "gallery" | "faqs" | "contact";
const copy: Record<PageKind, { label: string; title: string; intro: string; eyebrow: string; heading: string }> = {
  about: { label: "About", title: "Purpose Drives Progress", intro: "RECYCLE27 is a global platform to exchange knowledge, ideas and solutions for a sustainable and circular future.", eyebrow: "Conference overview", heading: "About RECYCLE27" },
  themes: { label: "Themes", title: "Conference Themes", intro: "Five connected areas of focus for a more resourceful and resilient future.", eyebrow: "Conference themes", heading: "Key Areas of Focus" },
  speakers: { label: "Speakers", title: "Speakers", intro: "Eminent voices and dedicated teams driving a cleaner, more sustainable tomorrow.", eyebrow: "People · perspectives · partnerships", heading: "Speakers will be announced soon" },
  committees: { label: "Committees", title: "Committees", intro: "The conference is being shaped by an interdisciplinary committee of academic and professional leaders.", eyebrow: "Conference leadership", heading: "Organising committees" },
  abstracts: { label: "Call for Abstracts", title: "Call for Abstracts", intro: "We invite researchers, practitioners, industry experts and students to submit abstracts on innovative solutions for sustainable waste management and circular economy.", eyebrow: "Share ideas · spark solutions · shape a cleaner tomorrow", heading: "Submission guidelines" },
  dates: { label: "Important Dates", title: "Plan Your Participation", intro: "Key milestones for submission, registration and the conference will be updated here.", eyebrow: "Conference timeline", heading: "Important Dates" },
  programme: { label: "Programme", title: "Three Days of Ideas", intro: "A considered programme of keynotes, technical sessions, conversations and connection.", eyebrow: "Conference programme", heading: "Programme at a glance" },
  venue: { label: "Venue & Travel", title: "Venue & Travel", intro: "Join RECYCLE27 at the Indian Institute of Technology Guwahati for a meaningful exchange of ideas, research and collaboration.", eyebrow: "Welcome to IIT Guwahati", heading: "Plan your journey" },
  accommodation: { label: "Accommodation", title: "Stay with Comfort", intro: "Accommodation options and booking guidance will be shared here by the organizing committee.", eyebrow: "ACCOMMODATION", heading: "Accommodation Options" },
  publications: { label: "Publications & Awards", title: "Publications & Awards", intro: "High-quality research, real-world impact.", eyebrow: "Knowledge for a cleaner tomorrow", heading: "Recognition for meaningful work" },
  sponsors: { label: "Sponsors", title: "Our Sponsors", intro: "Collaborating for impact. Together for a cleaner future.", eyebrow: "Partnerships for a sustainable tomorrow", heading: "Partner with RECYCLE27" },
  contact: { label: "Contact", title: "Contact Us", intro: "We're here to help. Reach out to us for any queries related to RECYCLE27. We look forward to hearing from you.", eyebrow: "Let's connect", heading: "Get in Touch" },
  gallery: { label: "Gallery", title: "Gallery", intro: "A glimpse into the people, discussions and experiences that make RECYCLE27 a vibrant platform for collaboration and change.", eyebrow: "Moments · people · ideas · impact", heading: "Past editions" },
  faqs: { label: "FAQs", title: "Frequently Asked Questions", intro: "Find answers to common queries about RECYCLE27. Still have a question? Feel free to reach out to us.", eyebrow: "Questions · clarity · a cleaner tomorrow", heading: "How can we help?" },
};
const themes = ["Waste Management and Resource Recovery", "Circular Economy and Sustainable Systems", "Policy, Governance and Social Impact", "Innovation and Emerging Technologies", "Climate, Environment and Human Health"];
const faqItems = [
  { question: "What is RECYCLE27?", answer: "RECYCLE27 is an international conference on sustainable waste management and circular economy." },
  { question: "When and where will the conference be held?", answer: "The conference is planned for 12–14 May 2027 at IIT Guwahati." },
  { question: "Who can participate?", answer: "Researchers, practitioners, policy makers and students are welcome." },
];

export function ConferencePage({ kind }: { kind: PageKind }) {
  const c = copy[kind]; const special = kind === "faqs" || kind === "contact";
  const hasMockupLayout = ["about", "gallery", "faqs", "contact", "sponsors", "venue", "speakers", "committees", "programme", "accommodation"].includes(kind);
  const sideText = kind === "venue" || kind === "gallery" || kind === "contact" || kind === "accommodation" ? ["PEOPLE", "IDEAS", "SOLUTIONS", "A CLEANER", "TOMORROW"] : kind === "sponsors" ? ["PARTNERS", "IMPACT", "SUSTAINABLE", "FUTURE"] : undefined;
  const heroImage = getHeroImage(kind as PageHeroKey);
  if (kind === "themes") return <ThemesPage />;
  if (kind === "venue") return <VenueTravelPage />;
  if (kind === "publications") return <><PageHero eyebrow={c.eyebrow} title={c.title} description={c.intro} image={heroImage} sideText={["CIRCULAR", "SOLUTIONS", "FOR A", "BETTER", "TOMORROW"]} /><Breadcrumb items={[{ label: c.label }]} /><MockupPageSections kind={kind} /><FinalCTA /></>;
  if (hasMockupLayout) return <><PageHero eyebrow={c.eyebrow} title={c.title} description={c.intro} image={heroImage} sideText={sideText} /><Breadcrumb items={[{ label: c.label }]} /><MockupPageSections kind={kind} /><FinalCTA /></>;
  return <><PageHero eyebrow={c.eyebrow} title={c.title} description={c.intro} image={heroImage} /><Breadcrumb items={[{ label: c.label }]} />
    <SectionWrapper theme="white" spacing="compact"><div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]"><div><EyebrowLabel label={c.eyebrow} /><h2 className="font-display text-4xl leading-tight text-dark-text md:text-5xl">{c.heading}</h2><p className="mt-5 max-w-md leading-7 text-secondary-text">{c.intro} Official information is currently being prepared. This page has been designed to make updates clear and easy to find once details are confirmed.</p>{kind === "abstracts" && <Button href="/contact" variant="secondary" showArrow className="mt-8">Submission link coming soon</Button>}</div>
      {special ? <div>{kind === "faqs" ? <FAQList items={faqItems} /> : <ContactPanel />}</div> : <FeaturePanel kind={kind} />}</div></SectionWrapper>
    {kind === "dates" && <DatesSection />}{kind === "programme" && <ProgrammeSection />}{kind === "gallery" && <GallerySection />}
    <FinalCTA /></>;
}
function FeaturePanel({ kind }: { kind: PageKind }) { const labels = kind === "sponsors" ? ["Platinum partnership", "Gold partnership", "Supporting partnership"] : kind === "speakers" ? ["Keynote speakers", "Plenary sessions", "Invited experts"] : ["Research-led exchange", "Practical perspectives", "Meaningful connections"]; return <div className="grid gap-3 sm:grid-cols-3">{labels.map((x, i) => <article key={x} className="flex min-h-44 flex-col justify-between border border-light-border bg-soft-bg p-5"><span className="text-sm text-primary-emerald">0{i + 1}</span><h3 className="text-base font-semibold text-dark-text">{x}</h3><p className="text-sm leading-6 text-secondary-text">Details will be announced by the conference team.</p></article>)}</div>; }
function ThemeSection() { return <SectionWrapper theme="dark" spacing="compact"><EyebrowLabel theme="dark" label="Conference themes" /><h2 className="mb-6 font-display text-4xl text-light-text md:text-5xl">A shared agenda for change.</h2><div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">{themes.map((theme, i) => <div key={theme} className="border border-dark-border bg-secondary-dark p-5"><span className="text-muted-green">0{i + 1}</span><p className="mt-12 text-sm leading-6 text-light-text">{theme}</p></div>)}</div></SectionWrapper>; }
function DatesSection() { const rows = [["Abstract submission deadline", "To be announced"], ["Acceptance notification", "To be announced"], ["Registration deadline", "To be announced"], ["Conference dates", "12–14 May 2027"]]; return <SectionWrapper theme="dark" spacing="compact"><EyebrowLabel label="Important dates" theme="dark" /><div className="max-w-4xl divide-y divide-dark-border">{rows.map(([a,b]) => <div key={a} className="flex flex-col gap-2 py-5 text-sm sm:flex-row sm:justify-between"><span>{a}</span><strong className="font-medium text-muted-green">{b}</strong></div>)}</div></SectionWrapper>; }
function ProgrammeSection() { return <SectionWrapper theme="dark-secondary" spacing="compact"><EyebrowLabel label="Programme" theme="dark" /><div className="divide-y divide-dark-border">{["Opening and welcome", "Keynote conversations", "Technical sessions", "Networking and reflection"].map((title, i) => <div key={title} className="grid gap-3 py-5 md:grid-cols-[150px_1fr_auto]"><span className="text-muted-green">Day {Math.min(i + 1, 3)}</span><strong className="font-medium">{title}</strong><span className="text-sm text-light-text/60">Schedule forthcoming</span></div>)}</div></SectionWrapper>; }
function TravelSection() { return <SectionWrapper theme="light" spacing="compact"><EyebrowLabel label="Getting here" /><div className="grid gap-4 md:grid-cols-3">{[["Airport", "Lokpriya Gopinath Bordoloi International Airport"],["Rail", "Guwahati Railway Station"],["Road", "Local transport and taxis"]].map(([x,y]) => <div key={x} className="border border-light-border bg-white p-6"><MapPin className="text-primary-emerald" /><h3 className="mt-7 font-semibold">{x}</h3><p className="mt-2 text-sm leading-6 text-secondary-text">{y}. Final travel guidance will be published closer to the event.</p></div>)}</div></SectionWrapper>; }
function GallerySection() { return <SectionWrapper theme="dark" spacing="compact"><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{[1,2,3,4,5,6,7,8].map(n => <div key={n} className={`bg-secondary-dark ${n % 3 === 0 ? "aspect-square" : "aspect-[4/3]"} border border-dark-border p-4 text-xs text-muted-green`}>RECYCLE / ARCHIVE {n}</div>)}</div></SectionWrapper>; }
function ContactPanel() { return <div className="border border-light-border bg-soft-bg p-6 md:p-8"><div className="space-y-5 text-sm"><p><strong className="block text-dark-text">Email</strong><span className="text-secondary-text">recycle27@iitg.ac.in</span></p><p><strong className="block text-dark-text">Phone</strong><span className="text-secondary-text">+91 361 258 3000</span></p><p><strong className="block text-dark-text">Address</strong><span className="text-secondary-text">IIT Guwahati, Assam 781039, India</span></p></div><a href="mailto:recycle27@iitg.ac.in" className="btn-primary mt-7">Email the Secretariat</a></div>; }
