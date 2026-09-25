import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, FileText, FlaskConical, Globe2, Landmark, Sprout, UsersRound } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/shared/FinalCTA";

const campus = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85";
const iitg = "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=85";

const ButtonLink = ({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) => <Link href={href} className={`mt-7 inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-xs font-medium ${dark ? "border-light-text text-light-text hover:bg-white/10" : "border-dark-text text-dark-text hover:bg-dark-text hover:text-light-text"}`}>{children}<ArrowRight size={14} /></Link>;

export default function AboutPage() {
  return <>
    <PageHero
      eyebrow="ABOUT THE CONFERENCE"
      title="Purpose Drives Progress"
      description="RECYCLE27 is a global platform to exchange knowledge, ideas and solutions for a sustainable and circular future."
      pageKey="about"
      sideText={["RETHINK", "REUSE", "RECYCLE", "A CLEANER", "TOMORROW"]}
    />
    <Breadcrumb items={[{ label: "About" }]} />

    <section className="bg-soft-bg py-16 md:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.95fr_1.05fr] lg:px-12"><div><EyebrowLabel label="Conference overview" /><h2 className="font-display text-4xl leading-tight md:text-5xl">About RECYCLE27</h2><p className="mt-5 max-w-md text-sm leading-6 text-secondary-text">RECYCLE27 is an international conference on sustainable waste management and circular economy, bringing together researchers, industry experts, policymakers and students from across the globe. The conference aims to foster collaboration, knowledge exchange and actionable outcomes to address pressing challenges of waste management and to build a cleaner, more resilient future.</p><p className="mt-4 max-w-md text-sm leading-6 text-secondary-text">Through technical sessions, keynote talks, panel discussions and networking opportunities, RECYCLE27 explores innovative solutions, policies and practices that accelerate the transition toward a circular and sustainable society.</p><ButtonLink href="/themes">View Conference Themes</ButtonLink></div><div className="relative"><div className="relative aspect-[4/3] overflow-hidden"><Image src={campus} alt="IIT Guwahati campus" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" /></div><div className="ml-auto -mt-16 max-w-[210px] bg-warm-cream p-5 text-dark-text md:-mt-24"><p className="font-display text-2xl leading-[1.08]">Ideas for a Cleaner, Healthier and More Circular World.</p><span className="mt-5 block h-px w-7 bg-primary-emerald" /></div></div></div></section>

    <section className="bg-primary-dark py-16 text-light-text md:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_.8fr_.55fr] lg:px-12"><div><EyebrowLabel theme="dark" label="Indian Institute of Technology Guwahati" /><h2 className="font-display text-4xl">About IIT Guwahati</h2><p className="mt-5 text-sm leading-6 text-light-text/75">Indian Institute of Technology Guwahati (IITG) is one of the premier institutions of national importance in India, known for its excellence in education, research and innovation. Set in a serene campus along the banks of the Brahmaputra, IITG provides a unique environment for interdisciplinary learning and research.</p><ButtonLink href="https://www.iitg.ac.in" dark>Visit IITG</ButtonLink></div><div className="relative min-h-72 overflow-hidden"><Image src={iitg} alt="IIT Guwahati campus" fill sizes="(max-width: 1024px) 100vw, 32vw" className="object-cover" /></div><div className="divide-y divide-dark-border">{[[Landmark,"Excellence in Education"],[FlaskConical,"Cutting-edge Research"],[UsersRound,"Vibrant Academic Community"],[Sprout,"Commitment to a Sustainable Future"]].map(([Icon, text]) => { const C = Icon as typeof Landmark; return <div key={text as string} className="flex items-center gap-4 py-4"><C size={23} strokeWidth={1.35} className="text-light-text" /><span className="font-display text-base leading-5">{text as string}</span></div>; })}</div></div></section>

    <section className="bg-soft-bg py-16 md:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_.8fr_.55fr] lg:px-12"><div><EyebrowLabel label="Waste Management Research Group" /><h2 className="font-display text-4xl">About WMRG</h2><p className="mt-5 text-sm leading-6 text-secondary-text">The Waste Management Research Group (WMRG) at IIT Guwahati works towards advancing research and practice in sustainable waste management, resource recovery and circular economy solutions. Through interdisciplinary research, industry collaboration and policy engagement, WMRG strives to create a meaningful impact on environmental sustainability and public health.</p><ButtonLink href="/contact">Learn More About WMRG</ButtonLink></div><div className="grid grid-cols-2 gap-5 bg-white/55 p-6">{[[FileText,"Research and Innovation"],[UsersRound,"Industry Collaboration"],[Sprout,"Policy and Outreach"],[Globe2,"Real-world Impact"]].map(([Icon, text]) => { const C = Icon as typeof FileText; return <div key={text as string} className="flex flex-col items-center justify-center text-center"><C size={25} strokeWidth={1.35} /><span className="mt-3 text-xs leading-4">{text as string}</span></div>; })}</div><div className="relative min-h-64 overflow-hidden"><Image src={campus} alt="IIT Guwahati building" fill sizes="(max-width: 1024px) 100vw, 22vw" className="object-cover" /></div></div></section>

    <FinalCTA />
  </>;
}
