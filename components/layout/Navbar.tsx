"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRegistrationModal } from "@/contexts/RegistrationModalContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Themes", href: "/themes" },
  { label: "Speakers", href: "/speakers" },
  { label: "Committees", href: "/committees" },
  { label: "Programme", href: "/programme" },
  { label: "Registration", href: "/registration" },
];

const MORE_LINKS = [
  { label: "Call for Abstracts", href: "/call-for-abstracts" },
  { label: "Important Dates", href: "/important-dates" },
  { label: "Venue & Travel", href: "/venue-travel" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Publications & Awards", href: "/publications-awards" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useRegistrationModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-250 ease-out",
          isScrolled
            ? "bg-primary-dark/95 backdrop-blur-[8px] shadow-[0_1px_0_rgba(0,0,0,0.12)] py-5"
            : "bg-primary-dark/95 py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-baseline">
            <span className="font-display text-[24px] md:text-[26px] tracking-wide text-light-text">
              RECYCLE
            </span>
            <span className="font-display text-[24px] md:text-[26px] tracking-wide text-primary-emerald">
              27
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-body text-[15px] font-medium transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-primary-emerald after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left",
                      pathname === link.href
                        ? "text-primary-emerald after:scale-x-100 after:origin-left"
                        : "text-light-text hover:text-primary-emerald"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="relative group">
                <button
                  className={cn(
                    "flex items-center gap-1 font-body text-[15px] font-medium transition-colors cursor-pointer",
                    MORE_LINKS.some((l) => pathname === l.href)
                      ? "text-primary-emerald"
                      : "text-light-text hover:text-primary-emerald"
                  )}
                >
                  More
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown */}
                <div className="absolute top-full right-0 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-lg border border-light-border p-3 flex flex-col gap-1 min-w-[220px]">
                    {MORE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "px-4 py-2 text-[14px] font-body rounded-lg transition-colors",
                          pathname === link.href
                            ? "bg-primary-emerald/10 text-primary-emerald font-medium"
                            : "text-secondary-text hover:bg-soft-bg hover:text-primary-emerald"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
            <Button modalTrigger showArrow className="px-7 py-3.5 text-[15px]">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 -mr-2 relative z-10 transition-colors",
              isMobileMenuOpen ? "text-primary-dark" : "text-light-text"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-5 overflow-y-auto lg:hidden flex flex-col">
          <ul className="flex flex-col gap-6 mt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[22px] font-display",
                    pathname === link.href ? "text-primary-emerald" : "text-primary-dark"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center justify-between w-full text-[22px] font-display text-primary-dark"
              >
                More Links
                <ChevronDown
                  className={cn("w-6 h-6 transition-transform", isMoreOpen && "rotate-180")}
                />
              </button>
              {isMoreOpen && (
                <ul className="mt-4 flex flex-col gap-4 pl-4 border-l border-light-border">
                  {MORE_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-[16px] font-body",
                          pathname === link.href
                            ? "text-primary-emerald font-medium"
                            : "text-secondary-text"
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
          <div className="mt-12">
            <Button modalTrigger className="w-full" showArrow>
              Register Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
