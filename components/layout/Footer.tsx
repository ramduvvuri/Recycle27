import Link from "next/link";
import { CircleUserRound, MapPin, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-primary-dark py-8 text-light-text md:py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[1.5fr_1fr_1fr_.5fr] md:items-start md:px-8 lg:px-12">
        <div>
          <Link href="/" className="inline-flex items-baseline font-display text-3xl tracking-wide md:text-4xl">
            <span className="text-light-text">RECYCLE</span>
            <span className="text-primary-emerald">27</span>
          </Link>
          <p className="mt-2 text-sm leading-5 text-light-text/80">
            International Conference on Sustainable<br />
            Waste Management and Circular Economy
          </p>
        </div>
        <div className="flex items-start gap-3 text-light-text/80">
          <MapPin size={20} className="mt-0.5 shrink-0 text-primary-emerald" />
          <p className="text-sm leading-6">
            IIT Guwahati<br />
            Guwahati, Assam 781039, India
          </p>
        </div>
        <div className="text-sm text-light-text/80">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-primary-emerald transition-colors">
              <CircleUserRound size={20} />
            </a>
            <a href="#" aria-label="X" className="text-sm font-medium hover:text-primary-emerald transition-colors">
              𝕏
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-primary-emerald transition-colors">
              <Video size={21} />
            </a>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/contact" className="hover:text-primary-emerald transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-primary-emerald transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-emerald transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
        <div className="border-l border-light-text/30 pl-6 text-[11px] uppercase leading-[1.7] tracking-[0.2em] text-light-text/50 md:justify-self-end">
          PEOPLE<br />
          IDEAS<br />
          SOLUTIONS<br />
          A CLEANER<br />
          TOMORROW
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl px-5 text-center text-[11px] text-light-text/40 md:px-8 lg:px-12">
        © 2027 RECYCLE27. All rights reserved.
      </div>
    </footer>
  );
}
