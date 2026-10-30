"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const galleryImages = [
  {
    src: "/images/gallery/gallery-01.jpeg",
    title: "Conference Plenary Hall & Delegates",
    category: "RECYCLE Proceedings",
  },
  {
    src: "/images/gallery/gallery-02.jpeg",
    title: "Keynote Lecture & Academic Exchange",
    category: "Plenary Track",
  },
  {
    src: "/images/gallery/gallery-03.jpeg",
    title: "Technical Paper Presentation",
    category: "Technical Session",
  },
  {
    src: "/images/gallery/gallery-04.jpeg",
    title: "Interactive Audience Q&A",
    category: "Technical Session",
  },
  {
    src: "/images/gallery/gallery-05.jpeg",
    title: "Research Scholars & Faculty Discussions",
    category: "Research Forum",
  },
  {
    src: "/images/gallery/gallery-06.jpeg",
    title: "Expert Panel on Waste Management",
    category: "Plenary Forum",
  },
  {
    src: "/images/gallery/gallery-07.jpeg",
    title: "Networking & Knowledge Sharing",
    category: "Networking",
  },
  {
    src: "/images/gallery/gallery-08.jpeg",
    title: "Audience Engagement & Symposium Closing",
    category: "Symposium Highlights",
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
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <EyebrowLabel label="CONFERENCE HIGHLIGHTS & MEMORIES" />
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-dark-text leading-tight mt-3 font-medium">
              Photo Gallery
            </h1>
            <p className="mt-2 text-sm sm:text-base text-secondary-text max-w-xl">
              Moments, keynotes, technical sessions, and collaborative exchanges from the conference.
            </p>
          </div>
          <button
            onClick={() => openSlideshow(0)}
            className="flex items-center gap-2 border border-light-border bg-white px-5 py-2.5 text-sm text-dark-text hover:bg-soft-bg rounded-md transition-colors whitespace-nowrap self-start md:self-auto shadow-sm cursor-pointer shrink-0"
          >
            <ImageIcon size={16} className="text-secondary-text" />
            View Slideshow ({galleryImages.length} Photos) &rarr;
          </button>
        </div>

        {/* Seamless 4-col x 2-row zero-gap grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden rounded-xl border border-light-border shadow-sm">
          {galleryImages.map((item, i) => (
            <article
              key={i}
              onClick={() => openSlideshow(i)}
              className="relative overflow-hidden h-[220px] sm:h-[260px] md:h-[280px] lg:h-[310px] w-full group cursor-pointer bg-soft-bg border-[0.5px] border-white/20"
            >
              <Image
                src={item.src}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 25vw"
                alt={item.title}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Permanent bottom gradient + enhanced on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/35" />
              
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white flex justify-between items-end transition-all duration-300">
                <div className="pr-2">
                  <span className="inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#9be3c6] bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm mb-1.5">
                    {item.category}
                  </span>
                  <strong className="block text-[13px] sm:text-[14px] lg:text-[15px] font-medium leading-snug tracking-tight text-white drop-shadow-sm line-clamp-2">
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
            className="absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
            aria-label="Close slideshow"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-50 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-50 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
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
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-display text-xl text-white md:text-2xl">{galleryImages[currentIndex].title}</h3>
              <p className="mt-1 text-sm text-white/70">{galleryImages[currentIndex].category}</p>
              <p className="mt-2 text-xs text-white/40 tracking-wider">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
