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

  Bed, 

  Building2, 

  Building, 

  Mail, 

  Info,

  ArrowRight

} from "lucide-react";


import { Breadcrumb } from "@/components/layout/Breadcrumb";

import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

import { SectionWrapper } from "@/components/sections/SectionWrapper";

import { Button } from "@/components/ui/Button";

import { InteractiveMap } from "@/components/shared/InteractiveMap";



export default function VenueTravelPage() {

  return (

    <>

      {/* ========================================================

          1. HERO SECTION (Standardized layout + Dates & Location Pills)

      ======================================================== */}




      {/* ========================================================

          2. BREADCRUMB

      ======================================================== */}

      <Breadcrumb items={[{ label: "Venue & Travel" }]} />



      {/* ========================================================

          3. CONFERENCE VENUE & REAL INTERACTIVE GOOGLE MAP

      ======================================================== */}

      <SectionWrapper theme="white" spacing="normal">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">

          {/* Left Column: Venue Narrative & Location */}

          <div className="flex flex-col">

            <EyebrowLabel label="CONFERENCE VENUE" />

            

            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.05] tracking-[-0.02em] text-dark-text mt-4">

              Indian Institute of<br />Technology Guwahati

            </h2>



            <p className="mt-6 text-sm sm:text-base leading-7 text-secondary-text">

              RECYCLE27 will be held at the Indian Institute of Technology Guwahati (IITG), a premier institute nestled on the banks of the Brahmaputra, known for its vibrant academic environment and picturesque campus.

            </p>



            <div className="mt-8 flex items-start gap-3 text-sm text-secondary-text">

              <MapPin size={18} className="text-primary-emerald mt-1 shrink-0" />

              <div className="leading-relaxed">

                <strong className="block text-dark-text font-semibold">

                  Indian Institute of Technology Guwahati

                </strong>

                <span>Guwahati, Assam 781039, India</span>

              </div>

            </div>



            <div className="mt-8 flex flex-wrap items-center gap-4">

              <a

                href="https://maps.google.com/?q=Indian+Institute+of+Technology+Guwahati"

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



          {/* Right Column: Google Maps Platform Interactive Map */}

          <div>

            <InteractiveMap />

          </div>

        </div>

      </SectionWrapper>



      {/* ========================================================

          4. HOW TO REACH (4 Cards Matching Screenshot)

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

                Lokpriya Gopinath Bordoloi International Airport (GAU), Guwahati is 22-25 km from the campus.

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

                Guwahati Railway Station (GHY) and Kamakhya Railway Station (KYQ).

              </p>

            </div>

            <div className="mt-6 pt-3 border-t border-light-border/60">

              <span className="text-xs font-semibold text-primary-emerald">

                ~ 30–45 minutes

              </span>

            </div>

          </article>



          {/* Card 3: City */}

          <article className="flex flex-col justify-between rounded-xl border border-light-border bg-white p-6 shadow-sm">

            <div>

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft-bg text-dark-text">

                <Car size={24} className="stroke-[1.5]" />

              </div>

              <h3 className="mt-5 font-semibold text-base text-dark-text">

                From Guwahati City

              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-6 text-secondary-text">

                The IIT Guwahati campus is spread over the north bank of the Brahmaputra River, located around 20 km from the heart of Guwahati city.

              </p>

            </div>

            <div className="mt-6 pt-3 border-t border-light-border/60">

              <span className="text-xs font-semibold text-primary-emerald">

                ~ 30–45 minutes

              </span>

            </div>

          </article>



          {/* Card 4: Open in Google Maps (Strong Green Action Card) */}

          <article className="flex flex-col justify-between rounded-xl border border-light-border bg-white p-6 shadow-sm">

            <div>

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft-bg text-dark-text">

                <Map size={24} className="stroke-[1.5]" />

              </div>

              <h3 className="mt-5 font-semibold text-base text-dark-text">

                Open in Google Maps

              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-6 text-secondary-text">

                Get directions, view nearby places and plan your journey.

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

          5. DISCOVER SHILLONG & MEGHALAYA (TOUR DETAILS)

      ======================================================== */}

      <SectionWrapper theme="white" spacing="normal">

        <div>

          <EyebrowLabel label="TOUR DETAILS & EXCURSIONS" />

          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight text-dark-text mt-3">

            Discover Shillong & Meghalaya

          </h2>

          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-secondary-text">

            Explore the pristine hills, crystal-clear rivers, and lush cloudscapes of Meghalaya — situated conveniently close to Guwahati for memorable post-conference excursions.

          </p>

        </div>



        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Destination 1: Shillong */}

          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">

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

          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">

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

                <span className="font-medium text-dark-text">Lake & Water Sports</span>

              </div>

            </div>

          </article>



          {/* Destination 3: Elephant Falls */}

          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">

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

          <article className="group flex flex-col rounded-xl border border-light-border bg-soft-bg overflow-hidden hover:shadow-lg transition-all duration-300">

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

                <span className="font-medium text-dark-text">River & Gorges</span>

              </div>

            </div>

          </article>

        </div>

      </SectionWrapper>



      {/* ========================================================

          6. ACCOMMODATION (Stay with Comfort)

      ======================================================== */}

      <SectionWrapper theme="light" spacing="normal" className="relative">

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* Left Column: Heading & CTAs */}

          <div>

            <EyebrowLabel label="ACCOMMODATION" />

            <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight text-dark-text mt-3">

              Stay with Comfort

            </h2>

            <p className="mt-4 text-sm sm:text-base leading-7 text-secondary-text">

              We have arranged a range of accommodation options for participants, including on-campus and nearby hotels. Details, availability and booking procedures will be updated closer to the conference date.

            </p>



            {/* CTAs */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Button

                href="/accommodation"

                variant="primary"

                showArrow

                className="rounded-md"

              >

                Book Accommodation

              </Button>



              <div className="flex items-center gap-3 rounded-lg border border-light-border bg-white px-4 py-3 text-xs">

                <Mail size={18} className="text-primary-emerald shrink-0" />

                <div>

                  <strong className="block font-semibold text-dark-text">Contact Accommodation Desk</strong>

                  <span className="text-secondary-text">For any accommodation-related queries.</span>

                </div>

              </div>

            </div>





          </div>



          {/* Right Column: 3 Structured Cards */}

          <div className="grid gap-5 sm:grid-cols-3">

            {/* Card 1: IITG Guest House */}

            <article className="rounded-xl border border-light-border bg-white p-5 shadow-sm">

              <div className="flex items-center gap-2 text-dark-text">

                <Bed size={22} className="stroke-[1.5]" />

                <h3 className="font-semibold text-sm">IITG Guest House</h3>

              </div>

              <p className="mt-3 text-xs leading-5 text-secondary-text">

                Comfortable rooms within campus (subject to availability).

              </p>

              <ul className="mt-4 space-y-1.5 text-xs text-secondary-text">

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Limited rooms

                </li>

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Priority for invited speakers

                </li>

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Details will be updated soon

                </li>

              </ul>

            </article>



            {/* Card 2: On-campus Hostels */}

            <article className="rounded-xl border border-light-border bg-white p-5 shadow-sm">

              <div className="flex items-center gap-2 text-dark-text">

                <Building2 size={22} className="stroke-[1.5]" />

                <h3 className="font-semibold text-sm">On-campus Hostels</h3>

              </div>

              <p className="mt-3 text-xs leading-5 text-secondary-text">

                Budget-friendly accommodation within the campus.

              </p>

              <ul className="mt-4 space-y-1.5 text-xs text-secondary-text">

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Suitable for students

                </li>

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Basic amenities

                </li>

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Details will be updated soon

                </li>

              </ul>

            </article>



            {/* Card 3: Nearby Hotels */}

            <article className="rounded-xl border border-light-border bg-white p-5 shadow-sm">

              <div className="flex items-center gap-2 text-dark-text">

                <Building size={22} className="stroke-[1.5]" />

                <h3 className="font-semibold text-sm">Nearby Hotels</h3>

              </div>

              <p className="mt-3 text-xs leading-5 text-secondary-text">

                Several good hotels are available near the campus.

              </p>

              <ul className="mt-4 space-y-1.5 text-xs text-secondary-text">

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Various price ranges

                </li>

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Easy accessibility

                </li>

                <li className="flex items-center gap-1.5">

                  <span className="h-1 w-1 rounded-full bg-dark-text/40" />

                  Details will be updated soon

                </li>

              </ul>

            </article>

          </div>

        </div>



        {/* Note Callout (Bottom of section) */}

        <div className="mt-10 flex items-center gap-3 rounded-lg bg-soft-bg border border-light-border/80 px-4 py-3 text-xs text-secondary-text">

          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-emerald text-white">

            <Info size={13} />

          </div>

          <p>

            <strong className="text-dark-text font-semibold mr-1.5">Note:</strong>

            Accommodation is subject to availability and will be allocated on a first-come, first-served basis. Final details will be communicated by the organizers.

          </p>

        </div>

      </SectionWrapper>





    </>

  );

}

