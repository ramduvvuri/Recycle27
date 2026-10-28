"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const items = [
  {
    title: "Inaugural Ceremony",
    category: "RECYCLE 2026",
    id: "photo-1540575467063-178a50c2df87",
    span: "col-span-1 sm:col-span-2 lg:col-span-2",
  },
  {
    title: "Keynote Research Address",
    category: "Plenary Track",
    id: "photo-1503428593586-e225b39bddfe",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "IIT Guwahati Academic Complex",
    category: "Conference Venue",
    id: "photo-1562774053-701939374585",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Poster Presentation & Discussion",
    category: "Young Researchers",
    id: "photo-1551836022-d5d88e9218df",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Engaged Audience & Interactive Q&A",
    category: "Technical Sessions",
    id: "photo-1524178232363-1fb2b075b655",
    span: "col-span-1 sm:col-span-2 lg:col-span-2",
  },
  {
    title: "Plenary Lecture Hall",
    category: "Special Session",
    id: "photo-1544531585-9847b68c8c86",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Environmental Research & Analysis",
    category: "IITG Laboratories",
    id: "photo-1577962917302-cd874c4e31d2",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Global Policy & Panel Discussion",
    category: "Industry & Governance",
    id: "photo-1475721027785-f74eccf877e2",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Conference Gala & Networking",
    category: "Cultural Evening",
    id: "photo-1511578314322-379afb476865",
    span: "col-span-1 sm:col-span-2 lg:col-span-2",
  },
  {
    title: "Serene Campus Trails",
    category: "IIT Guwahati",
    id: "photo-1441974231531-c6227db76b6e",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Circular Economy Industry Forum",
    category: "Sustainable Tech",
    id: "photo-1531482615713-2afd69097998",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Collaborative Workshop Session",
    category: "Action Plan",
    id: "photo-1515187029135-18ee286d815b",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Valedictory & Awards Banquet",
    category: "Excellence in Waste Research",
    id: "photo-1528605248644-14dd04022da1",
    span: "col-span-1 sm:col-span-1 lg:col-span-1",
  },
];

export function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlideshow = (index: number = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeSlideshow = () => setIsOpen(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") closeSlideshow();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, prevSlide, nextSlide]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <>
      <SectionWrapper theme="white" spacing="compact">
        {/* Filter bar (reduced to just slideshow toggle) */}
        <div className="flex flex-col md:flex-row md:justify-end mb-6">
          <button
            onClick={() => openSlideshow(0)}
            className="flex items-center gap-2 border border-light-border bg-white px-5 py-2.5 text-sm text-dark-text hover:bg-soft-bg rounded-sm transition-colors whitespace-nowrap self-start md:self-auto shadow-sm"
          >
            <ImageIcon size={16} className="text-secondary-text" />
            View Slideshow ({items.length} Photos) &rarr;
          </button>
        </div>

        {/* Balanced gapless grid: uniform row height so all slots align perfectly without gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <article
              key={i}
              onClick={() => openSlideshow(i)}
              className={`relative overflow-hidden rounded-xl ${item.span} h-[240px] sm:h-[280px] lg:h-[300px] w-full group cursor-pointer bg-soft-bg shadow-sm border border-light-border/40`}
            >
              <Image
                src={photo(item.id)}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                alt={item.title}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle permanent bottom gradient for readability + enhanced dark on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/30" />
              
              <div className="absolute inset-x-0 bottom-0 p-5 text-white flex justify-between items-end transition-all duration-300">
                <div className="pr-3">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#9be3c6] bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm mb-1.5">
                    {item.category}
                  </span>
                  <strong className="block text-[15px] font-medium leading-snug tracking-tight text-white drop-shadow-sm">
                    {item.title}
                  </strong>
                </div>
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-md shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <ImageIcon size={14} className="text-white" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox / Slideshow */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111816]/95 backdrop-blur-md">
          <button
            onClick={closeSlideshow}
            className="absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close slideshow"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-50 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-50 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative h-full w-full max-w-6xl px-4 py-20 md:p-20 flex flex-col items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={photo(items[currentIndex].id)}
                alt={items[currentIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-display text-xl text-white md:text-2xl">{items[currentIndex].title}</h3>
              <p className="mt-1 text-sm text-white/70">{items[currentIndex].category}</p>
              <p className="mt-2 text-xs text-white/40 tracking-wider">
                {currentIndex + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
