import Link from "next/link";
import { MapPin, Send, Video, CircleUserRound } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-light-text py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-baseline">
              <span className="font-display text-[28px] md:text-[32px] tracking-wide">
                RECYCLE
              </span>
              <span className="font-display text-[28px] md:text-[32px] text-primary-emerald">
                27
              </span>
            </Link>
            <p className="font-body text-[14px] text-light-text/80 leading-[1.6]">
              International Conference on Sustainable<br />
              Waste Management and Circular Economy
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 lg:pt-2">
            <div className="flex items-start gap-3 text-light-text/80">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="font-body text-[14px] leading-[1.6]">
                IIT Guwahati<br />
                Guwahati, Assam 781039, India
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:pt-2">
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <CircleUserRound className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Twitter">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="YouTube">
                <Video className="w-5 h-5" />
              </a>
            </div>
            <div className="w-12 h-[1px] bg-dark-border" />
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="font-body text-[14px] text-light-text/80 hover:text-primary-emerald transition-colors w-fit">
                Contact
              </Link>
              <Link href="#" className="font-body text-[14px] text-light-text/80 hover:text-primary-emerald transition-colors w-fit">
                Privacy Policy
              </Link>
              <Link href="#" className="font-body text-[14px] text-light-text/80 hover:text-primary-emerald transition-colors w-fit">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-start lg:items-end lg:pt-2">
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-light-text/40 text-left lg:text-right leading-[1.8]">
              A CLEANER<br />
              TOMORROW<br />
              TOGETHER
            </p>
          </div>
        </div>

        <div className="divider-dark mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[13px] text-light-text/60">
            © 2027 RECYCLE27. All rights reserved.
          </p>
          <p className="font-body text-[13px] text-light-text/40">
            Hosted by IIT Guwahati
          </p>
        </div>
      </div>
    </footer>
  );
}
