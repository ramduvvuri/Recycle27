"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  CalendarDays, 
  MapPin, 
  ExternalLink, 
  Plane, 
  Train, 
  Car, 
  Map, 
  Compass,
  ArrowRight
} from "lucide-react";

import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { InteractiveMap } from "@/components/shared/InteractiveMap";

export default function VenueTravelPage() {
  return (
    <div className="pt-[76px] sm:pt-[84px] md:pt-[88px]">
      {/* ========================================================
          1. CONFERENCE VENUE & REAL IITG CONFERENCE CENTRE IMAGE + MAP
      ======================================================== */}
      <SectionWrapper theme="white" spacing="normal">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">
          {/* Left Column: Venue Narrative & Location */}
          <div className="flex flex-col">
            <EyebrowLabel label="CONFERENCE VENUE" />
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.05] tracking-[-0.02em] text-dark-text mt-4">
              Indian Institute of<br />Technology Guwahati
            </h1>

            <p className="mt-6 text-sm sm:text-base leading-7 text-secondary-text">
              RECYCLE 2027 will be held at the prestigious Conference Centre of the Indian Institute of Technology Guwahati (IITG), nestled on the scenic north bank of the Brahmaputra river and recognized for its vibrant academic research and lush green campus.
            </p>

            <div className="mt-8 flex items-start gap-3 text-sm text-secondary-text">
              <MapPin size={18} className="text-primary-emerald mt-1 shrink-0" />
              <div className="leading-relaxed">
                <strong className="block text-dark-text font-semibold">
                  Conference Centre, Indian Institute of Technology Guwahati
                </strong>
                <span>Guwahati, Assam 781039, India</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://maps.google.com/?q=Conference+Centre+Indian+Institute+of+Technology+Guwahati"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 rounded-md"
              >
                View on Google Maps →
              </a>
            </div>

            {/* Quote */}
            <div className="relative mt-12 pt-4">
              <blockquote className="font-display text-2xl sm:text-3xl italic leading-[1.15] text-dark-text/90 tracking-[-0.01em]">
                “A beautiful campus<br />for a brighter tomorrow.”
              </blockquote>
            </div>
          </div>

          {/* Right Column: Real IITG Conference Centre Image & Interactive Map */}
          <div className="space-y-6">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-light-border bg-gray-100 shadow-md group">
              <Image
                src="/images/conference/iitg-conference-centre.jpg"
                alt="Conference Centre, Indian Institute of Technology Guwahati"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 sm:p-5 text-white">
                <p className="font-display text-base sm:text-lg font-medium leading-snug">Conference Centre, IIT Guwahati</p>
                <p className="text-xs text-white/85 mt-0.5">Official In-Person Venue for RECYCLE 2027</p>
              </div>
            </div>

            <InteractiveMap />
          </div>
        </div>
      </SectionWrapper>

      {/* ========================================================
          2. HOW TO REACH
      ======================================================== */}
      <SectionWrapper theme="light" spacing="normal">
        <div>
          <EyebrowLabel label="HOW TO REACH" />
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight text-dark-text mt-3">
            Getting to IIT Guwahati
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Airport */}
          <article className="flex flex-col justify-between rounded-xl border border-light-border bg-white p-6 shadow-sm">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft-bg text-dark-text">
                <Plane size={24} className="stroke-[1.5]" />
              </div>
              <h3 className="mt-5 font-semibold text-base text-dark-text">
                From Guwahati Airport
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-secondary-text">
                Lokpriya Gopinath Bordoloi International Airport (GAU), Guwahati is approximately 22–25 km from the campus. Pre-paid taxis and app cabs are readily available.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-light-border/60">
              <span className="text-xs font-semibold text-primary-emerald">
                ~ 45–60 minutes
              </span>
            </div>
          </article>

          {/* Card 2: Railway Station */}
          <article className="flex flex-col justify-between rounded-xl border border-light-border bg-white p-6 shadow-sm">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft-bg text-dark-text">
                <Train size={24} className="stroke-[1.5]" />
              </div>
              <h3 className="mt-5 font-semibold text-base text-dark-text">
                From Guwahati Railway Station
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-secondary-text">
                Located in the heart of Guwahati city, approximately 18–20 km from IITG. City buses, app-based cabs, and institute feeder buses operate regularly.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-light-border/60">
              <span className="text-xs font-semibold text-primary-emerald">
                ~ 40–50 minutes
              </span>
            </div>
          </article>

          {/* Card 3: Kamakhya Junction */}
          <article className="flex flex-col justify-between rounded-xl border border-light-border bg-white p-6 shadow-sm">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft-bg text-dark-text">
                <Car size={24} className="stroke-[1.5]" />
              </div>
              <h3 className="mt-5 font-semibold text-base text-dark-text">
                From Kamakhya Junction
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-secondary-text">
                Kamakhya Junction (KYQ) is roughly 14–16 km from campus, offering a convenient transit alternative for trains stopping at Kamakhya.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-light-border/60">
              <span className="text-xs font-semibold text-primary-emerald">
                ~ 30–40 minutes
              </span>
            </div>
          </article>

          {/* Card 4: Local Transport */}
          <article className="flex flex-col justify-between rounded-xl border border-light-border bg-white p-6 shadow-sm">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft-bg text-dark-text">
                <Map size={24} className="stroke-[1.5]" />
              </div>
              <h3 className="mt-5 font-semibold text-base text-dark-text">
                Local Transportation
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-secondary-text">
                Uber, Ola, Rapido and local pre-paid taxis operate across Guwahati. Institute buses connect the city center (Panbazar) to campus at scheduled intervals.
              </p>
            </div>
            <div className="mt-6 pt-2">
              <a
                href="https://maps.google.com/?q=Indian+Institute+of+Technology+Guwahati"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#173d31] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-primary-emerald shadow-sm"
              >
                <span>Open Campus in Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </article>
        </div>
      </SectionWrapper>

      {/* ========================================================
          3. EXPLORE ASSAM (Kaziranga, Kamakhya, Dima Hasao, Umananda)
      ======================================================== */}
      <SectionWrapper theme="white" spacing="normal">
        <div>
          <EyebrowLabel label="EXPLORE ASSAM" />
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight text-dark-text mt-3">
            Explore Assam
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-secondary-text">
            Discover the rich biodiversity, sacred heritage, and captivating highland landscapes of Assam — from UNESCO wildlife sanctuaries to ancient island shrines on the Brahmaputra.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Destination 1: Kaziranga National Park */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/kaziranga.jpg"
                alt="Kaziranga National Park Assam"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~220 km · 4.5 hrs drive
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Kaziranga National Park
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  UNESCO World Heritage Site
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  World-renowned sanctuary hosting two-thirds of the planet&apos;s great Indian one-horned rhinoceroses, wild water buffaloes, Asian elephants, and diverse avian fauna across fertile riverine grasslands.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> Golaghat & Nagaon</span>
                <span className="font-medium text-dark-text">Wildlife & Safari</span>
              </div>
            </div>
          </article>

          {/* Destination 2: Kamakhya Temple */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/kamakhya.jpg"
                alt="Kamakhya Temple Nilachal Hill"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~20 km · 45 mins from IITG
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Kamakhya Temple
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  Sacred Shakti Peeth
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  One of the oldest and most venerated Shakti shrines in India, perched atop Nilachal Hill. Celebrated for its unique beehive-shaped shikhara architecture and breathtaking river vistas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> Nilachal Hill, Guwahati</span>
                <span className="font-medium text-dark-text">Heritage & Pilgrimage</span>
              </div>
            </div>
          </article>

          {/* Destination 3: Umananda Temple */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/umananda.jpg"
                alt="Umananda Temple Peacock Island"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~18 km · Ferry from Kachari Ghat
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Umananda Temple
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  Peacock Island on the Brahmaputra
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  A serene 17th-century Shiva shrine perched on Peacock Island — the world&apos;s smallest inhabited river island — reached by a delightful short ferry ride across the mighty Brahmaputra river.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> Peacock Island, Guwahati</span>
                <span className="font-medium text-dark-text">Island Shrine</span>
              </div>
            </div>
          </article>

          {/* Destination 4: Dima Hasao */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/dima_hasao.jpg"
                alt="Dima Hasao Haflong Lake"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~270 km · Scenic Train / Drive
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Dima Hasao
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  Haflong & Highland Vistas
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  Assam&apos;s sole hill station district, famous for Haflong Lake, misty mountain valleys, ethnic tribal culture, sparkling hill streams, and the breathtaking vistas of the Barail mountain range.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> Haflong, Dima Hasao</span>
                <span className="font-medium text-dark-text">Hill Station & Lakes</span>
              </div>
            </div>
          </article>
        </div>
      </SectionWrapper>

      {/* ========================================================
          4. DISCOVER SHILLONG & MEGHALAYA (TOUR DETAILS & HIGHLIGHT)
      ======================================================== */}
      <SectionWrapper theme="light" spacing="normal">
        {/* Highlight Callout Banner for 2-Day Tour - Prominently Visible to All */}
        <div className="mb-12 rounded-2xl border-2 border-primary-emerald/40 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-emerald text-white shadow-md">
              <Compass size={24} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block rounded-full bg-primary-emerald text-white text-[10.5px] font-bold tracking-wider uppercase px-3 py-0.5">
                  OFFICIAL POST-CONFERENCE TOUR
                </span>
                <span className="text-xs font-semibold text-primary-emerald">Shillong &amp; Cherrapunji</span>
              </div>
              <p className="font-display text-lg sm:text-xl text-dark-text font-medium leading-snug">
                “A two-day tour to Shillong and Cherrapunji will be organized for interested participants on a paid basis. Further details regarding the itinerary and registration will be shared soon.”
              </p>
            </div>
          </div>
        </div>

        <div>
          <EyebrowLabel label="TOUR DETAILS & EXCURSIONS" />
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight text-dark-text mt-3">
            Discover Shillong &amp; Meghalaya
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-secondary-text">
            Explore the pristine hills, crystal-clear rivers, and lush cloudscapes of Meghalaya — situated conveniently close to Guwahati for memorable post-conference excursions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Destination 1: Shillong */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/shillong.jpg"
                alt="Shillong, Scotland of the East"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~100 km · 3 hrs drive
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Shillong
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  The Scotland of the East
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  The scenic capital of Meghalaya, celebrated for its rolling pine hills, colonial heritage, vibrant music scene, pleasant climate, and bustling local markets.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> East Khasi Hills</span>
                <span className="font-medium text-dark-text">Capital City</span>
              </div>
            </div>
          </article>

          {/* Destination 2: Umiam Lake */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/umiam.jpg"
                alt="Umiam Lake Barapani"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~85 km · 2.5 hrs drive
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Umiam Lake
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  Barapani Reservoir
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  A breathtaking expanse of calm waters enveloped by lush coniferous slopes, offering picturesque panoramic viewpoints, kayaking, and serene sunsets.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> Ri-Bhoi District</span>
                <span className="font-medium text-dark-text">Lake &amp; Water Sports</span>
              </div>
            </div>
          </article>

          {/* Destination 3: Elephant Falls */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/elephant_falls.jpg"
                alt="Elephant Falls Meghalaya"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~112 km · 3.5 hrs drive
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Elephant Falls
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  Three-Tier Cascades
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  A scenic mountain waterfall cascading down three dramatic natural steps through dense ferns and forest paths, easily accessible from Upper Shillong.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> Upper Shillong</span>
                <span className="font-medium text-dark-text">Mountain Waterfall</span>
              </div>
            </div>
          </article>

          {/* Destination 4: Dawki / Umngot River */}
          <article className="group flex flex-col rounded-xl border border-light-border bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/destinations/dawki.jpg"
                alt="Dawki Umngot River"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#113224]/85 backdrop-blur-sm text-white text-[10.5px] font-semibold px-2.5 py-1 rounded">
                ~175 km · 5 hrs drive
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-dark-text font-medium leading-snug">
                  Dawki / Umngot River
                </h3>
                <p className="text-[11px] font-semibold text-primary-emerald mt-0.5">
                  Crystal Clear Waters
                </p>
                <p className="mt-2 text-xs leading-relaxed text-secondary-text">
                  World-renowned for its surreal emerald clarity where boats appear to float on air, flowing through dramatic gorges near the historic Dawki suspension bridge.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-light-border/60 flex items-center justify-between text-[11px] text-secondary-text">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-emerald" /> West Jaintia Hills</span>
                <span className="font-medium text-dark-text">River &amp; Gorges</span>
              </div>
            </div>
          </article>
        </div>
      </SectionWrapper>
    </div>
  );
}
