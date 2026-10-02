"use client";

import { useState } from "react";
import { Calendar, Lightbulb, MapPin, Leaf, ArrowRight, FileText, User, Download, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Countdown } from "@/components/shared/Countdown";
import { FAQList } from "@/components/shared/FAQList";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ScrollParallax } from "@/components/motion/ScrollParallax";
import { ScrollRail } from "@/components/motion/ScrollRail";
import { ease, duration as dur } from "@/lib/motion";
import { useRegistrationModal } from "@/contexts/RegistrationModalContext";
import { themes } from "@/data/themes";
import { keynoteSpeakers } from "@/data/speakers";
import { importantDates } from "@/data/importantDates";
import { advisoryCommitteeFlat } from "@/data/committees";
import { Users, Settings } from "lucide-react";

export default function Home() {
  const { openModal } = useRegistrationModal();
  const [showNotification, setShowNotification] = useState(true);

  return (
    <>
      <ScrollRail />
      
      {/* 02. HERO */}
      <section id="hero" className="relative w-full border-b-[2px] border-white overflow-hidden">
        
        {/* NOTIFICATION */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-24 right-4 md:top-28 md:right-8 lg:top-[120px] lg:right-10 z-[100] bg-white border border-recycle-green/20 shadow-xl py-3 px-4 pr-10 rounded-[8px] max-w-[400px] flex items-center"
            >
              <button 
                onClick={() => setShowNotification(false)}
                className="absolute top-1.5 right-1.5 p-1 text-recycle-text/40 hover:text-recycle-text transition-colors"
                aria-label="Close notification"
              >
                <X size={16} />
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-recycle-green/10 p-2 rounded-full text-recycle-green shrink-0">
                  <Calendar size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display text-[13px] font-semibold text-recycle-text mb-0.5">Registration Opens Soon!</h4>
                  <p className="text-[11.5px] text-recycle-text/70 leading-snug">Early bird registration begins on 20th March 2027.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* DESKTOP BACKGROUND IMAGE */}
        <ScrollParallax speed={1} max={12} className="hidden lg:block w-full h-[700px] z-0 origin-center scale-[1.02]">
          <Image
            src="/images/heroes/hero_anime_final.png"
            alt=""
            aria-hidden="true"
            fill
            className="object-cover object-center"
          />
        </ScrollParallax>
        
        {/* MOBILE BACKGROUND */}
        <ScrollParallax speed={0.03} max={8} className="lg:hidden absolute inset-0 pointer-events-none z-0">
          <Image 
            src="/images/heroes/hero-combined-bg.png" 
            alt="ReCYCLE 2027" 
            fill 
            className="w-full h-full object-cover object-right" 
            sizes="100vw"
            priority 
          />
        </ScrollParallax>
        <div className="absolute inset-0 bg-[#F8F7F0]/85 lg:hidden pointer-events-none z-0" />

      {/* Hero entrance sequence */}
      <motion.div
        className="relative lg:absolute lg:inset-0 z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 flex items-center min-h-[594px] md:min-h-[660px] lg:min-h-0 pt-[110px] lg:pt-[2%] xl:pt-[2.5%] pb-16 lg:pb-0"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      >
          
          <div className="w-full lg:w-[48%] xl:w-[46%]">
            {/* EYEBROW */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: dur.standard, ease: ease.out } } }}
              className="flex items-center gap-3.5 mb-2.5 md:mb-3.5"
            >
              <div className="h-px w-9 bg-[#113224]/30" />
              <p className="font-body text-[10px] md:text-[11px] font-semibold tracking-[0.15em] text-[#0C7A52] uppercase">
                Indian Institute of Technology Guwahati
              </p>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: dur.slow, ease: ease.out } } }}
              className="font-display text-[#113224] leading-[1.02] tracking-[-.01em]"
            >
              <span className="block text-[42px] min-[375px]:text-[48px] sm:text-[55px] md:text-[73px] lg:text-[80px] xl:text-[92px] mb-0 font-medium whitespace-nowrap tracking-tight">
                ReCYCLE 2027
              </span>
              <span className="block text-[22px] min-[375px]:text-[24px] sm:text-[26px] md:text-[33px] lg:text-[37px] xl:text-[42px] text-[#2C4D41] font-normal mt-1.5 leading-[1.15]">
                <span className="block whitespace-nowrap min-[320px]:whitespace-normal sm:whitespace-nowrap">6<sup className="text-[0.6em]">th</sup> International Conference</span>
                <span className="block whitespace-nowrap">on Waste Management</span>
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: dur.reveal, ease: ease.out } } }}
              className="mt-4.5 md:mt-6 text-[15.5px] md:text-[17.5px] lg:text-[19px] font-body text-[#113224]/80 font-medium leading-[1.5]"
            >
              <span className="block">Innovative Solutions for a Cleaner,</span>
              <span className="block">Healthier and More Sustainable Future</span>
            </motion.p>

            {/* METADATA (DATES & VENUE) */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: dur.reveal, ease: ease.out } } }}
              className="mt-7 md:mt-8 flex flex-col md:flex-row items-start gap-5 md:gap-8"
            >
              <div className="flex items-start gap-3.5">
                <Calendar className="text-[#0a3826] mt-0.5" size={24} strokeWidth={2} />
                <div>
                  <p className="font-body text-[14.5px] font-bold text-[#113224]">20 – 21 May 2027</p>
                  <p className="font-body text-[12px] text-[#113224]/60 mt-0.5">Conference Dates</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-10 bg-[#113224]/15" />
              <div className="flex items-start gap-3.5">
                <MapPin className="text-[#0a3826] mt-0.5" size={24} strokeWidth={2} />
                <div>
                  <p className="font-body text-[14.5px] font-bold text-[#113224]">Conference Centre</p>
                  <p className="font-body text-[12px] text-[#113224]/60 mt-0.5">Indian Institute of Technology Guwahati<br />Guwahati, Assam, India</p>
                </div>
              </div>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: dur.reveal, ease: ease.out } } }}
              className="mt-7 md:mt-8 flex flex-wrap items-center gap-4.5"
            >
              <button 
                onClick={openModal}
                className="flex items-center justify-center gap-2 bg-[#0b3d2c] hover:bg-[#072a1e] text-white font-body text-[14px] font-semibold h-[44px] px-7 rounded-[4px] transition-colors shadow-sm active:scale-[0.98]"
              >
                Register Now <ArrowRight size={16} strokeWidth={2} />
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#F8F7F0]/80 border border-[#0b3d2c]/30 hover:border-[#0b3d2c]/60 text-[#0b3d2c] font-body text-[14px] font-semibold h-[44px] px-7 rounded-[4px] transition-colors shadow-sm backdrop-blur-sm">
                <FileText size={16} strokeWidth={1.5} /> View Brochure
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE VERTICAL MESSAGE */}
          <div className="hidden lg:flex absolute right-5 lg:right-10 xl:right-12 top-[5%] flex-col items-center gap-2.5 opacity-90">
            <div className="h-[52px] w-px bg-[#113224]/20 my-2" />
            <div className="flex flex-col items-start gap-1.5 font-body text-[10px] uppercase tracking-[0.2em] text-[#113224] font-bold">
              <span>People</span>
              <span>Ideas</span>
              <span>Solutions</span>
              <span>A Cleaner</span>
              <span>Tomorrow</span>
            </div>
          </div>

        </motion.div>
      </section>

      {/* 03. COUNTDOWN */}
      <Countdown />

      {/* 04. CONFERENCE HIGHLIGHTS */}
      <section className="w-full bg-recycle-cream border-t border-b border-recycle-green/8">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 py-5 lg:h-[110px] flex items-center">
          <Stagger
            staggerDelay={0.07}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0C5A3D]/12"
          >
            {[
              { Icon: Users, title: "Global Participation", desc: "Researchers, industry experts, policymakers and students" },
              { Icon: Lightbulb, title: "Knowledge Exchange", desc: "Latest innovations and practical solutions" },
              { Icon: Settings, title: "Technology and Practice", desc: "Bridging research gaps with real-world implementation" },
              { Icon: Leaf, title: "Circular Economy", desc: "Towards a sustainable and resource-efficient future" },
            ].map(({ Icon, title, desc }) => (
              <StaggerItem key={title} className="flex items-center text-left py-3 md:py-0 md:px-5 lg:px-7">
                <Icon className="text-recycle-green shrink-0" size={28} strokeWidth={1.5} />
                <div className="ml-3 flex flex-col justify-center">
                  <h3 className="font-display text-[15px] text-recycle-text font-medium leading-tight">{title}</h3>
                  <p className="mt-0.5 text-[12px] text-recycle-text/70 leading-[1.35]">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 05. ABOUT THE CONFERENCE */}
      <section id="about" className="relative w-full overflow-hidden bg-recycle-cream py-10 lg:py-12">
        {/* Leaf background — left edge, large, very subtle */}
        <ScrollParallax speed={0.06} max={15} className="absolute top-0 left-0 w-[380px] h-[480px] opacity-[0.06] pointer-events-none -translate-x-[38%] translate-y-[10%]">
          <Image src="/images/leaf-bg-new.png" alt="" fill className="object-contain" sizes="380px" />
        </ScrollParallax>
        {/* Leaf background — bottom-right, subtle */}
        <ScrollParallax speed={-0.08} max={15} className="absolute bottom-0 right-0 w-[260px] h-[260px] opacity-[0.05] pointer-events-none translate-x-1/3 translate-y-1/4 rotate-[160deg]">
          <Image src="/images/leaf-bg-new.png" alt="" fill className="object-contain" sizes="260px" />
        </ScrollParallax>

        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-[46%_54%] gap-6 lg:gap-8 xl:gap-10 items-start">

            {/* Left Side: Text */}
            <Reveal variant="fadeUp" threshold={0.08}>
            <div className="z-10 relative">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-[22px] bg-recycle-green/50" />
                <p className="font-body text-[10px] font-bold tracking-[0.18em] text-recycle-green uppercase">
                  ABOUT THE CONFERENCE
                </p>
              </div>
              {/* Heading */}
              <h2 className="font-display text-[32px] md:text-[38px] lg:text-[42px] leading-[1.06] tracking-[-.02em] text-recycle-text font-medium max-w-[480px]">
                Collaborating for<br />a Cleaner Tomorrow
              </h2>
              {/* Body copy */}
              <div className="mt-4 space-y-2.5 text-[12.5px] md:text-[13px] text-recycle-text/78 leading-[1.58] max-w-[400px]">
                <p>
                  After five successful international conferences, ReCYCLE 2027 (6th International Conference on Waste Management) brings together national and international researchers, scientists, academicians, industry professionals and policymakers to discuss and learn about the latest innovative ideas and technologies for waste management.
                </p>
                <p>
                  ReCYCLE 2027 aims to inculcate awareness about safe practices and the latest technologies for managing and treating solid and liquid waste. With a focus on inclusivity, the conference provides an excellent platform for sharing ideas, methods and approaches for effective waste management, emphasizing the core issues of solid waste management, water and wastewater, and circular economy.
                </p>
              </div>
              {/* Button */}
              <Link href="/about" className="inline-flex items-center gap-2 mt-5 bg-recycle-green hover:bg-[#073d28] text-white font-body text-[11.5px] font-medium h-[34px] px-4 rounded-[3px] transition-colors">
                Know More <ArrowRight size={12} strokeWidth={2.2} />
              </Link>
            </div>
            </Reveal>

            {/* Right Side: 4-image mosaic collage — animates as one block from right */}
            <Reveal variant="fadeRight" delay={0.12} threshold={0.06}>
            <ScrollParallax speed={-0.08} max={16} className="relative z-10">
              {/* Pale green framing blocks */}
              {/* Top-right accent */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#DDE8DC] -z-10 rounded-[1px]" />
              {/* Left-center accent */}
              <div className="absolute top-[42%] -left-4 w-16 h-24 bg-[#DDE8DC] -z-10 rounded-[1px] -translate-y-1/2" />
              {/* Bottom accent */}
              <div className="absolute -bottom-3 right-[18%] w-24 h-10 bg-[#DDE8DC] -z-10 rounded-[1px]" />

              {/* 2-sub-column mosaic */}
              <div className="flex gap-1.5">
                {/* Left sub-column: waste_sorting (tall) + wastewater (landscape) */}
                <div className="flex flex-col gap-1.5 w-[55%]">
                  {/* Image 1: waste sorting — landscape */}
                  <div className="relative w-full aspect-[16/10] rounded-[2px] overflow-hidden">
                    <Image
                      src="/images/about/waste_sorting_v2.jpg"
                      alt="Workers sorting recyclable materials on a conveyor belt"
                      fill
                      className="object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  {/* Image 3: wastewater — landscape */}
                  <div className="relative w-full aspect-[16/9] rounded-[2px] overflow-hidden">
                    <Image
                      src="/images/about/wastewater_v2.jpg"
                      alt="Wastewater treatment plant circular clarifier"
                      fill
                      className="object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                </div>

                {/* Right sub-column: biogas (taller portrait) + bales (landscape) */}
                <div className="flex flex-col gap-1.5 w-[45%]">
                  {/* Image 2: biogas — landscape */}
                  <div className="relative w-full aspect-[16/10] rounded-[2px] overflow-hidden">
                    <Image
                      src="/images/about/biogas_v2.jpg"
                      alt="Anaerobic digester biogas plant"
                      fill
                      className="object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  {/* Image 4: bales — landscape */}
                  <div className="relative w-full aspect-[16/10] rounded-[2px] overflow-hidden">
                    <Image
                      src="/images/about/bales_v2.jpg"
                      alt="Compressed recyclable material bales"
                      fill
                      className="object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollParallax>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 06. CONFERENCE THEMES */}
      <section id="themes" className="relative w-full overflow-hidden bg-recycle-sage pt-16 pb-20 lg:pt-20 lg:pb-24">
        {/* Full-width leaf background watermark */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.25] mix-blend-multiply">
          <Image src="/images/leaf-bg-new.png" alt="" fill className="object-cover md:object-contain object-center scale-110 md:scale-125" sizes="100vw" priority />
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 relative z-10">

          {/* Header row: eyebrow + heading + thin divider line + explore link */}
          <div className="flex flex-row items-end justify-between mb-8 md:mb-10 lg:mb-12">
            {/* Left: eyebrow + heading */}
            <div className="flex flex-col shrink-0 mr-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-px w-[20px] bg-recycle-green/50" />
                <p className="font-body text-[9px] font-bold tracking-[0.18em] text-recycle-green uppercase">
                  CONFERENCE THEMES
                </p>
              </div>
              <h2 className="font-display text-[24px] md:text-[28px] tracking-[-.02em] text-recycle-text leading-[1] font-medium">
                Key Areas of Focus
              </h2>
            </div>

            {/* Center: thin horizontal line extending from after heading to right of explore link */}
            <div className="hidden lg:block flex-1 h-px bg-recycle-green/18 mx-4 self-center mb-[3px]" />

            {/* Right: explore link */}
            <Link href="/themes" className="font-body text-[11px] font-medium text-recycle-text hover:text-recycle-green transition-colors whitespace-nowrap shrink-0 mb-[3px]">
              Explore All Themes <span aria-hidden="true" className="text-recycle-green ml-0.5">→</span>
            </Link>
          </div>

          {/* Theme grid: 5 columns × 2 rows */}
          <ScrollParallax speed={-0.03} max={8}>
          <Stagger staggerDelay={0.04} delayChildren={0.1} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {themes.map((theme) => {
              const Icon = theme.icon;
              return (
              <StaggerItem
                key={theme.id}
                className="group relative flex flex-col items-center justify-center text-center px-3 py-4 lg:py-[21px] bg-white/70 border border-recycle-green/10 hover:border-recycle-green/25 rounded-[16px] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(12,90,61,0.08)] min-h-[117px] lg:min-h-[123px] overflow-hidden"
              >
                {/* Background fill element */}
                <div className="absolute inset-0 bg-recycle-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0" />
                
                <Icon
                  className="text-recycle-green mb-[8px] shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:text-white relative z-10"
                  size={30}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <h3 className="font-body text-[11.5px] lg:text-[12px] font-medium leading-[1.22] text-recycle-text whitespace-pre-line relative z-10 transition-colors duration-500 group-hover:text-white">
                  {theme.titleMultiline}
                </h3>
              </StaggerItem>
            );
            })}
          </Stagger>
          </ScrollParallax>
          {/* Separator Line */}
          <div className="w-full h-px bg-recycle-green/10 my-16 lg:my-20" />

          {/* Anchor for dates navigation */}
          <div id="dates" className="absolute -top-24" aria-hidden="true" />

          {/* Header */}
          <Reveal variant="fadeUp">
          <div className="flex flex-row items-end justify-between mb-10 lg:mb-12">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-px w-[20px] bg-recycle-green/50" />
                <p className="font-body text-[9px] font-bold tracking-[0.18em] text-recycle-green uppercase">IMPORTANT DATES</p>
              </div>
              <h2 className="font-display text-[28px] md:text-[34px] tracking-[-.02em] text-recycle-text leading-[1] font-medium">Mark Your Calendar</h2>
            </div>
            <Link href="/important-dates" className="font-body text-[11px] font-medium text-recycle-text hover:text-recycle-green transition-colors whitespace-nowrap mb-[3px]">
              View Detailed Timeline <span aria-hidden="true" className="text-recycle-green ml-0.5">→</span>
            </Link>
          </div>
          </Reveal>

          {/* Timeline */}
          <ScrollParallax speed={-0.04} max={8} className="relative pb-4 mt-8">
            {/* Connecting line — animates in */}
            <Reveal variant="fadeIn" threshold={0.1}>
              {/* Horizontal line for desktop */}
              <div className="hidden md:block absolute top-[25px] left-[calc(10%+25px)] right-[calc(10%+25px)] h-px bg-recycle-green/15 z-0" />
              {/* Vertical line for mobile */}
              <div className="block md:hidden absolute left-1/2 top-[25px] bottom-[25px] w-px bg-recycle-green/15 z-0 -translate-x-1/2" />
            </Reveal>

            <Stagger staggerDelay={0.09} delayChildren={0.1} className="grid md:grid-cols-5 gap-6 md:gap-4 relative z-10">
              {importantDates.map((item) => (
                <StaggerItem key={item.id} className="flex flex-col items-center text-center group cursor-default">
                  {/* Marker */}
                  <div className="w-[50px] h-[50px] rounded-full bg-recycle-green border border-white flex items-center justify-center mb-[14px] shrink-0 relative z-10 mx-auto transition-all duration-300 group-hover:bg-white group-hover:border-recycle-green/20 group-hover:shadow-[0_8px_20px_rgba(12,90,61,0.12)] group-hover:-translate-y-1">
                    <item.icon className="text-white group-hover:text-recycle-green transition-colors duration-300" size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display font-semibold text-recycle-text text-[15.5px] mb-[4px] tracking-tight transition-colors duration-300 group-hover:text-recycle-green">{item.date}</h4>
                  <p className="text-[13px] text-recycle-text/70 whitespace-pre-line leading-[1.3] transition-colors duration-300 group-hover:text-recycle-text/90">{item.labelMultiline}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </ScrollParallax>

        </div>
      </section>

      {/* 06b. QUICK LINKS */}
      <section id="quick-links" className="relative w-full overflow-hidden bg-recycle-cream/40 py-16 lg:py-20 border-b border-recycle-green/10">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 relative z-10">
          
          <Reveal variant="fadeUp">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-[20px] bg-recycle-green/50" />
              <p className="font-body text-[9px] font-bold tracking-[0.18em] text-recycle-green uppercase">QUICK LINKS</p>
            </div>
          </Reveal>

          <Stagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Submit Abstract */}
            <StaggerItem>
              <Link href="/abstracts" className="group flex flex-col items-center justify-center py-10 bg-white border border-recycle-green/10 rounded-[8px] hover:border-recycle-green/30 hover:shadow-[0_12px_30px_rgba(12,90,61,0.08)] transition-all duration-300 ease-out hover:-translate-y-1">
                <FileText className="text-recycle-text mb-4 group-hover:text-recycle-green transition-colors" size={28} strokeWidth={1.5} />
                <span className="font-body text-[14px] font-medium text-recycle-text group-hover:text-recycle-green transition-colors">Submit Abstract</span>
              </Link>
            </StaggerItem>

            {/* Register Now */}
            <StaggerItem>
              <button onClick={openModal} className="w-full group flex flex-col items-center justify-center py-10 bg-white/50 border border-recycle-green/10 rounded-[8px] hover:bg-white hover:border-recycle-green/30 hover:shadow-[0_12px_30px_rgba(12,90,61,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 opacity-70 hover:opacity-100">
                <User className="text-recycle-text mb-4 group-hover:text-recycle-green transition-colors" size={28} strokeWidth={1.5} />
                <span className="font-body text-[14px] font-medium text-recycle-text group-hover:text-recycle-green transition-colors">Register Now</span>
              </button>
            </StaggerItem>

            {/* Download Brochure */}
            <StaggerItem>
              <a href="/RECYCLE27_Brochure.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center py-10 bg-white border border-recycle-green/10 rounded-[8px] hover:border-recycle-green/30 hover:shadow-[0_12px_30px_rgba(12,90,61,0.08)] transition-all duration-300 ease-out hover:-translate-y-1">
                <Download className="text-recycle-text mb-4 group-hover:text-recycle-green transition-colors" size={28} strokeWidth={1.5} />
                <span className="font-body text-[14px] font-medium text-recycle-text group-hover:text-recycle-green transition-colors">Download Brochure</span>
              </a>
            </StaggerItem>

          </Stagger>
        </div>
      </section>


      {/* 08. KEYNOTE SPEAKERS */}
      <section id="speakers" className="relative w-full overflow-hidden bg-recycle-cream pt-16 pb-20 lg:pt-20 lg:pb-24">
        {/* Leaf — lower-left */}
        <ScrollParallax speed={-0.08} max={14} className="absolute bottom-0 left-0 w-[280px] h-[340px] opacity-[0.065] pointer-events-none -translate-x-[38%] translate-y-[15%]">
          <Image src="/images/leaf-bg-new.png" alt="" fill className="object-contain" sizes="280px" />
        </ScrollParallax>

        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 relative z-10">

          {/* Header */}
          <div className="flex flex-row items-end justify-between mb-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-px w-[20px] bg-recycle-green/50" />
                <p className="font-body text-[9px] font-bold tracking-[0.18em] text-recycle-green uppercase">DISTINGUISHED SPEAKERS</p>
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] tracking-[-.02em] text-recycle-text leading-[1] font-medium">Our Keynote Speakers</h2>
            </div>
            <Link href="/speakers" className="font-body text-[11px] font-medium text-recycle-green hover:text-[#073d28] transition-colors whitespace-nowrap mb-[3px]">
              View All Speakers <span aria-hidden="true" className="ml-0.5">→</span>
            </Link>
          </div>

          {/* Speaker cards */}
          <div className="relative flex items-center mt-10">
            {/* Left Arrow */}
            <button
              className="absolute -left-4 md:-left-12 w-[42px] h-[42px] rounded-full border border-recycle-green/35 flex items-center justify-center text-recycle-green hover:bg-recycle-green hover:text-white transition-colors z-20 bg-recycle-cream shrink-0 hover:shadow-lg"
              aria-label="Previous speakers"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            <ScrollParallax speed={0.03} max={6} className="w-full">
            <Stagger staggerDelay={0.07} delayChildren={0.05} className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-5 md:px-4">
              {keynoteSpeakers.map((speaker) => (
                <StaggerItem key={speaker.id}>
                  <div className="group relative bg-white rounded-[12px] border border-[#113224]/10 hover:border-recycle-green/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(12,90,61,0.12)] flex flex-col items-center pt-6 pb-5 px-3 overflow-hidden">
                    <div className="w-[96px] h-[108px] rounded-[6px] overflow-hidden relative mb-4 shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {speaker.image ? (
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover object-top group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full bg-recycle-sage flex items-center justify-center">
                          <Users size={32} className="text-recycle-green/30" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-body font-semibold text-recycle-text text-[12.5px] leading-[1.3] mb-[3px] text-center transition-colors duration-300 group-hover:text-recycle-green">{speaker.name}</h3>
                    <p className="text-[11px] text-recycle-text/65 leading-[1.35] text-center">{speaker.affiliation}{speaker.country ? `, ${speaker.country}` : ""}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            </ScrollParallax>

            {/* Right Arrow */}
            <button
              className="absolute -right-4 md:-right-12 w-[42px] h-[42px] rounded-full border border-recycle-green/35 flex items-center justify-center text-recycle-green hover:bg-recycle-green hover:text-white transition-colors z-20 bg-recycle-cream shrink-0 hover:shadow-lg"
              aria-label="Next speakers"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

        </div>
      </section>

      {/* 08b. ADVISORY COMMITTEE */}
      <section id="committee" className="relative w-full overflow-hidden bg-recycle-cream pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 relative z-10">
          
          {/* Thin breaker line */}
          <div className="w-full h-px bg-recycle-green/10 mb-16 lg:mb-20" />

          {/* Header */}
          <div className="flex flex-row items-end justify-between mb-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-px w-[20px] bg-recycle-green/50" />
                <p className="font-body text-[9px] font-bold tracking-[0.18em] text-recycle-green uppercase">ADVISORY COMMITTEE</p>
              </div>
              <h2 className="font-display text-[28px] md:text-[32px] tracking-[-.02em] text-recycle-text leading-[1] font-medium">Our Advisory Committee</h2>
            </div>
            <Link href="/committees" className="font-body text-[11px] font-medium text-recycle-green hover:text-[#073d28] transition-colors whitespace-nowrap mb-[3px]">
              View Full Committee <span aria-hidden="true" className="ml-0.5">→</span>
            </Link>
          </div>

          {/* Committee cards */}
          <div className="relative flex items-center mt-10">
            {/* Left Arrow */}
            <button
              className="absolute -left-4 md:-left-12 w-[42px] h-[42px] rounded-full border border-recycle-green/35 flex items-center justify-center text-recycle-green hover:bg-recycle-green hover:text-white transition-colors z-20 bg-recycle-cream shrink-0 hover:shadow-lg"
              aria-label="Previous members"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            <ScrollParallax speed={0.03} max={6} className="w-full">
            <Stagger staggerDelay={0.07} delayChildren={0.05} className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-5 md:px-4">
              {advisoryCommitteeFlat.map((member) => (
                <StaggerItem key={member.id}>
                  <div className="group relative bg-white rounded-[12px] border border-[#113224]/10 hover:border-recycle-green/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(12,90,61,0.12)] flex flex-col items-center pt-6 pb-5 px-3 overflow-hidden h-full">
                    <div className="w-[96px] h-[108px] rounded-[6px] overflow-hidden relative mb-4 shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                          sizes="96px"
                        />
                      ) : (
                        <div className="w-full h-full bg-recycle-sage flex items-center justify-center">
                          <Users size={32} className="text-recycle-green/30" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-body font-semibold text-recycle-text text-[12.5px] leading-[1.3] mb-[3px] text-center transition-colors duration-300 group-hover:text-recycle-green">{member.name}</h3>
                    <p className="text-[11px] text-recycle-text/65 leading-[1.35] text-center">{member.role}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            </ScrollParallax>

            {/* Right Arrow */}
            <button
              className="absolute -right-4 md:-right-12 w-[42px] h-[42px] rounded-full border border-recycle-green/35 flex items-center justify-center text-recycle-green hover:bg-recycle-green hover:text-white transition-colors z-20 bg-recycle-cream shrink-0 hover:shadow-lg"
              aria-label="Next members"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

        </div>
      </section>

      {/* 08c. FAQ */}
      <section id="faq" className="relative w-full overflow-hidden bg-recycle-cream py-16 lg:py-24 border-t border-recycle-green/10">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            
            <Reveal variant="fadeRight" className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-[20px] bg-recycle-green/50" />
                <p className="font-body text-[9px] font-bold tracking-[0.18em] text-recycle-green uppercase">FREQUENTLY ASKED QUESTIONS</p>
              </div>
              <h2 className="font-display text-[32px] md:text-[38px] lg:text-[44px] leading-[1.06] tracking-[-.02em] text-recycle-text font-medium mb-8">
                Have questions?
              </h2>
              <Link href="/faqs" className="font-body text-[13px] font-medium text-recycle-green hover:text-[#073d28] underline underline-offset-4 decoration-recycle-green/30 hover:decoration-recycle-green transition-all self-start">
                View all FAQs
              </Link>
            </Reveal>

            <Reveal variant="fadeUpSm">
              <FAQList items={[
                { question: "Who can participate in RECYCLE27?", answer: "Researchers, practitioners, policymakers and students working towards sustainable systems are welcome." },
                { question: "Where can I find abstract guidelines?", answer: "Abstract guidelines and submission details will be announced soon. Please check the Call for Abstracts page." },
                { question: "Where will the conference take place?", answer: "ReCYCLE 2027 will be held on 20 – 21 May 2027 at the Conference Centre, Indian Institute of Technology Guwahati, Assam, India." },
              ]} />
            </Reveal>

          </div>
        </div>
      </section>

      {/* 09. FINAL CTA */}
      <FinalCTA />
    </>
  );
}
