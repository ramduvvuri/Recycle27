"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Recycle, ArrowRight } from "lucide-react";
import { useRegistrationModal } from "@/contexts/RegistrationModalContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Themes", href: "/themes" },
  { label: "Speakers", href: "/speakers" },
  { label: "Committees", href: "/committees" },
  { label: "Programme", href: "/programme" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Contact", href: "/contact" },
];

const MORE_LINKS = [
  { label: "Call for Abstracts", href: "/call-for-abstracts" },
  { label: "Important Dates", href: "/important-dates" },
  { label: "Venue & Travel", href: "/venue-travel" },
  { label: "Publications & Awards", href: "/publications-awards" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openModal } = useRegistrationModal();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Subtle scroll elevation state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 border-b h-[72px] flex items-center transition-all duration-300",
          scrolled
            ? "bg-[#FAF9F2]/98 border-[#133C31]/18 shadow-[0_2px_16px_rgba(7,23,16,0.07)] backdrop-blur-[4px]"
            : "bg-[#FAF9F2] border-[#133C31]/10"
        )}
      >
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 xl:px-12 h-full flex items-center justify-between gap-4 xl:gap-6">
          
          {/* BRAND LOCKUP */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <Recycle className="text-[#0C7A52] group-hover:scale-105 transition-transform" size={28} strokeWidth={1.5} />
            <div className="flex items-center gap-1.5 border-r border-[#133C31]/15 pr-2.5 py-1">
              <div className="relative w-8 h-8">
                <Image 
                  src="/images/logo-iitg.png" 
                  alt="IIT Guwahati" 
                  fill 
                  className="object-contain transition-transform group-hover:scale-105" 
                  sizes="32px"
                />
              </div>
              <div className="relative w-8 h-8">
                <Image 
                  src="/images/logo-wmrg.jpg" 
                  alt="Waste Management Research Group" 
                  fill 
                  className="object-contain transition-transform group-hover:scale-105 mix-blend-multiply" 
                  sizes="32px"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center translate-y-[1px]">
              <span className="font-display text-[17px] font-semibold leading-[1.1] text-[#163D31] group-hover:text-[#0C7A52] transition-colors">
                ReCYCLE 2027
              </span>
              <span className="font-body text-[7.5px] font-medium leading-[1.2] text-[#163D31]/80 uppercase tracking-widest mt-[2px]">
                6th International Conference<br />on Waste Management
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex flex-1 items-center justify-end xl:justify-center h-full">
            <ul className="flex items-center gap-[18px] xl:gap-[24px] h-full">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="h-full flex items-center">
                  <Link
                    href={link.href}
                    className={cn(
                      "font-body text-[14px] font-medium transition-colors relative flex items-center h-full",
                      pathname === link.href
                        ? "text-[#0C7A52]"
                        : "text-[#163D31] hover:text-[#0C7A52]"
                    )}
                  >
                    {link.label}
                    {/* Active Route Indicator */}
                    {pathname === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0C7A52]" />
                    )}
                  </Link>
                </li>
              ))}

              <li className="h-full flex items-center relative group">
                <button
                  className={cn(
                    "flex items-center gap-1 font-body text-[14px] font-medium transition-colors cursor-pointer h-full",
                    MORE_LINKS.some((l) => pathname === l.href)
                      ? "text-[#0C7A52]"
                      : "text-[#163D31] hover:text-[#0C7A52]"
                  )}
                >
                  More
                  <ChevronDown className="w-3 h-3 opacity-70" />
                  {MORE_LINKS.some((l) => pathname === l.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0C7A52]" />
                  )}
                </button>

                {/* Dropdown */}
                <div className="absolute top-[71px] left-0 pt-1 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-white rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#133C31]/10 p-2 flex flex-col min-w-[200px]">
                    {MORE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "px-3 py-2 text-[13px] font-body font-medium rounded transition-colors",
                          pathname === link.href
                            ? "bg-[#0C7A52]/5 text-[#0C7A52]"
                            : "text-[#163D31] hover:bg-black/5 hover:text-[#0C7A52]"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT CTA & MOBILE MENU */}
          <div className="flex items-center gap-4 shrink-0 z-10">
            {/* REGISTER BUTTON */}
            <div className="hidden lg:flex shrink-0">
              <button
                onClick={openModal}
                className="flex items-center justify-center gap-1.5 bg-[#0b3d2c] hover:bg-[#072a1e] text-white font-body text-[13px] font-semibold h-[42px] w-[130px] rounded-[6px] transition-colors shadow-sm"
              >
                Register Now <ArrowRight size={14} strokeWidth={2} />
              </button>
            </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className={cn(
              "lg:hidden p-1 -mr-1 text-[#163D31] transition-colors hover:bg-black/5 rounded"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F2] pt-[72px] overflow-y-auto lg:hidden flex flex-col">
          <div className="p-5 flex flex-col h-full">
            <ul className="flex flex-col gap-1 mt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 text-[18px] font-body font-medium border-b border-[#133C31]/10 transition-colors",
                      pathname === link.href ? "text-[#0C7A52]" : "text-[#163D31]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="flex items-center justify-between w-full py-3 text-[18px] font-body font-medium text-[#163D31] border-b border-[#133C31]/10"
                >
                  More Links
                  <ChevronDown
                    className={cn("w-5 h-5 transition-transform opacity-70", isMoreOpen && "rotate-180")}
                  />
                </button>
                {isMoreOpen && (
                  <ul className="mt-1 flex flex-col bg-black/5 rounded-lg overflow-hidden">
                    {MORE_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                           "block px-4 py-3 text-[15px] font-body font-medium border-b border-[#133C31]/5 last:border-0",
                            pathname === link.href
                              ? "text-[#0C7A52] bg-white/50"
                              : "text-[#163D31]/80 hover:bg-white/50"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
            <div className="mt-8 mb-10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="flex items-center justify-center gap-2 w-full bg-[#0b3d2c] hover:bg-[#072a1e] text-white font-body text-[16px] font-semibold h-[48px] rounded-[8px] transition-colors"
              >
                Register Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
