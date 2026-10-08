import Image from "next/image";
import { Bell, MapPin, Wifi, Utensils, Bus, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const introItems = [
  "Research-led exchange",
  "Practical perspectives",
  "Meaningful connections",
];

const stayOptions = [
  {
    title: "On-Campus Hostels",
    description: "Affordable and convenient accommodation within the IIT Guwahati campus.",
    image: "photo-1555854877-bab0e564b8d5",
  },
  {
    title: "Guest Houses",
    description: "Comfortable guest house facilities for guests and attendees.",
    image: "photo-1522771739844-6a9f6d5f14af",
  },
  {
    title: "Nearby Hotels",
    description: "Selected hotels in Guwahati offering special conference rates.",
    image: "photo-1566073771259-6a8506099945",
  },
];

const amenities = [
  { Icon: Wifi, title: "Wi-Fi Connectivity" },
  { Icon: Utensils, title: "Dining Facilities" },
  { Icon: Bus, title: "Campus Transport" },
  { Icon: Shield, title: "Safety & Security" },
  { Icon: MapPin, title: "Close to Conference Venue" },
];

export function AccommodationSection() {
  return (
    <>
      <SectionWrapper theme="white" spacing="compact">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <EyebrowLabel label="ACCOMMODATION OPTIONS" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-dark-text mt-4 mb-6">
              Accommodation
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-dark-text mb-2">On-Campus (IITG Guest House/ Hostels)</h3>
                <p className="text-secondary-text leading-relaxed">
                  Limited accommodation is available on campus on a first-come, first-served basis.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-dark-text mb-2">Off-Campus</h3>
                <p className="text-secondary-text leading-relaxed">
                  A range of hotels near the campus or in Guwahati city can be booked directly by delegates.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-soft-bg p-8 rounded-xl border border-light-border">
            <h3 className="font-display text-xl text-dark-text mb-6">Booking & Contact</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-dark-text text-sm">Booking Link</h4>
                <p className="text-secondary-text mt-1">Will be updated soon</p>
              </div>
              
              <div className="pt-6 border-t border-light-border">
                <h4 className="font-semibold text-dark-text text-sm mb-3">For queries or accommodation requests:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-primary-emerald" />
                    <span className="text-secondary-text text-sm">recycle2k27@iitg.ac.in / recycle2k27@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 flex items-center justify-center text-primary-emerald font-semibold text-xs">📞</span>
                    <span className="text-secondary-text text-sm">+91 9535533933</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
