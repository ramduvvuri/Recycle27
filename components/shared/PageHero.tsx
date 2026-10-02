"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { PageHeroKey, getHeroImage } from "@/lib/heroImages";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ease, duration } from "@/lib/motion";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image?: string;
  pageKey?: PageHeroKey;
  children?: ReactNode;
  breadcrumbs?: { label: string; href: string }[];
  sideText?: string[];
};

// Staggered entrance for hero content elements
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.15,
    },
  },
};

const heroImage = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.cinematic, ease: ease.out },
  },
};

const heroEyebrow = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.standard, ease: ease.out },
  },
};

const heroTitle = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

const heroDesc = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: ease.out },
  },
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  pageKey,
  children,
  breadcrumbs,
  sideText,
}: PageHeroProps) {
  const resolvedImage = image || (pageKey ? getHeroImage(pageKey) : getHeroImage("about"));

  return (
    <section className="relative flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">

      {/* Background Image — full visual strength */}
      <motion.div
        className="absolute inset-0"
        variants={heroImage}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={resolvedImage}
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Tonal veil — deep green 18% */}
      <div className="absolute inset-0 bg-[#042D22]/18" />

      {/* Narrow left-side gradient — only behind text column */}
      <div className="absolute inset-y-0 left-0 w-[90%] md:w-[75%] lg:w-[55%] bg-gradient-to-r from-[#042D22]/80 md:from-[#042D22]/60 via-[#042D22]/40 md:via-[#042D22]/20 to-transparent" />

      {/* Content — sequenced entrance */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 xl:px-12"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            variants={heroEyebrow}
            className="mb-6 flex items-center gap-2 text-xs font-medium text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <ChevronRight size={14} className="opacity-60" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white/90">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="max-w-3xl">
          <motion.div variants={heroEyebrow}>
            <EyebrowLabel label={eyebrow} className="ml-0" theme="hero" />
          </motion.div>

          <motion.h1
            variants={heroTitle}
            className="mt-4 font-display text-4xl leading-[1.05] tracking-[-.02em] text-white sm:text-5xl md:text-6xl drop-shadow-sm"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={heroDesc}
            className="mt-5 max-w-2xl text-[15px] md:text-[17px] text-white/80 font-medium leading-relaxed"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div variants={heroDesc} className="mt-8">
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
