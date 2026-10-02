"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const MARKERS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "themes", label: "THEMES" },
  { id: "dates", label: "DATES" },
  { id: "quick-links", label: "LINKS" },
  { id: "speakers", label: "SPEAKERS" },
  { id: "committee", label: "COMMITTEE" },
  { id: "faq", label: "FAQ" }
];

export function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string>("hero");

  // Smooth, subtle spring for the progress bar
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -30% 0px" }
    );
    
    MARKERS.forEach(m => {
      const el = document.getElementById(m.id);
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed top-[15vh] bottom-[15vh] right-3 md:right-5 w-[2px] z-[60] hidden md:flex flex-col items-center pointer-events-none">
      {/* Background track */}
      <div className="absolute inset-0 bg-[#0C5A3D]/10 rounded-full" />
      
      {/* Active progress */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-[#0C5A3D] origin-top rounded-full shadow-[0_0_8px_rgba(12,90,61,0.25)]"
        style={{ scaleY, bottom: 0 }}
      />
      
      {/* Markers */}
      <div className="absolute inset-0 flex flex-col justify-between py-6">
        {MARKERS.map((marker) => {
          const isActive = activeId === marker.id;
          return (
            <div key={marker.id} className="relative w-full flex justify-center">
              {/* Dot */}
              <div
                className={`w-[4px] h-[4px] rounded-full transition-colors duration-500 z-10 ${
                  isActive ? "bg-[#0C5A3D]" : "bg-[#0C5A3D]/30"
                }`}
              />
              {/* Label */}
              <div
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-body tracking-[0.15em] font-semibold transition-all duration-500 uppercase whitespace-nowrap ${
                  isActive
                    ? "opacity-100 text-[#0C5A3D] translate-x-0"
                    : "opacity-0 text-[#113224]/30 translate-x-2"
                }`}
              >
                {marker.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
