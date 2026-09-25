"use client";

import { useState, useEffect } from "react";
import { X, Check, Info, GraduationCap, Briefcase, Building2, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { cn } from "@/lib/utils";

const registrationTypes = [
  { id: "student", name: "Student", subtitle: "UG / PG / PhD", icon: <GraduationCap size={32} /> },
  { id: "academic", name: "Academic", subtitle: "Faculty / Researcher", icon: <Briefcase size={32} /> },
  { id: "industry", name: "Industry", subtitle: "Professional", icon: <Building2 size={32} /> },
  { id: "others", name: "Others", subtitle: "Government / NGO", icon: <Users size={32} /> }
];

const feeData = [
  { category: "Student", earlyBird: "₹ 2,000", regular: "₹ 2,500", onsite: "₹ 3,000" },
  { category: "Academic", earlyBird: "₹ 4,000", regular: "₹ 5,000", onsite: "₹ 6,000" },
  { category: "Industry", earlyBird: "₹ 8,000", regular: "₹ 10,000", onsite: "₹ 12,000" },
  { category: "Others", earlyBird: "₹ 3,000", regular: "₹ 3,500", onsite: "₹ 4,000" }
];

const includedItems = [
  "Access to all technical sessions",
  "Conference kit and meals",
  "Networking opportunities",
  "Participation certificate"
];

type RegistrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [selectedType, setSelectedType] = useState("student");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-soft-bg transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} className="text-secondary-text" />
        </button>

        <div className="p-6 md:p-8">
          <div className="text-center mb-8">
            <EyebrowLabel label="REGISTRATION" />
            <h2 className="font-display text-3xl md:text-4xl text-dark-text leading-tight mt-4">
              Register for RECYCLE27
            </h2>
            <p className="mt-4 text-sm leading-6 text-secondary-text max-w-xl mx-auto">
              Participants from academia, industry, government and civil society are
              invited to register for RECYCLE27. Join us to exchange ideas, build
              collaborations and contribute to a more sustainable and circular future.
            </p>
          </div>

          {/* Registration Type Cards */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {registrationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "border rounded-xl p-4 text-left transition-all hover:shadow-md",
                  selectedType === type.id
                    ? "bg-primary-emerald border-primary-emerald text-light-text"
                    : "bg-soft-bg border-light-border text-dark-text hover:border-primary-emerald/50"
                )}
              >
                <div className={cn(
                  "mb-3",
                  selectedType === type.id ? "text-light-text" : "text-primary-emerald"
                )}>
                  {type.icon}
                </div>
                <h3 className="font-display text-base font-semibold">{type.name}</h3>
                <p className={cn(
                  "text-xs mt-1",
                  selectedType === type.id ? "text-light-text/80" : "text-secondary-text"
                )}>
                  {type.subtitle}
                </p>
                {selectedType === type.id && (
                  <div className="w-8 h-px bg-light-text/40 mt-3" />
                )}
              </button>
            ))}
          </div>

          {/* Registration Fees Table */}
          <div className="mb-8">
            <h3 className="font-display text-xl text-dark-text mb-4">Registration Fees</h3>
            <div className="overflow-x-auto rounded-xl border border-light-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary-emerald text-light-text">
                    <th className="px-3 py-3 text-left font-medium">Category</th>
                    <th className="px-3 py-3 text-right font-medium">
                      Early Bird
                      <div className="text-[10px] font-normal opacity-80">Until 15 Feb 2027</div>
                    </th>
                    <th className="px-3 py-3 text-right font-medium">
                      Regular
                      <div className="text-[10px] font-normal opacity-80">Until 31 Mar 2027</div>
                    </th>
                    <th className="px-3 py-3 text-right font-medium">On-site</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border">
                  {feeData.map((row, index) => (
                    <tr key={index} className="bg-white">
                      <td className="px-3 py-3 font-medium text-dark-text">{row.category}</td>
                      <td className="px-3 py-3 text-right text-secondary-text">{row.earlyBird}</td>
                      <td className="px-3 py-3 text-right text-secondary-text">{row.regular}</td>
                      <td className="px-3 py-3 text-right text-secondary-text">{row.onsite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Registration CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button href="/registration" showArrow className="flex-1">
              Complete Registration
            </Button>
            <Button href="#" variant="secondary" icon={<Download size={16} />} className="flex-1">
              Download Brochure
            </Button>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <h3 className="font-display text-xl text-dark-text mb-4">What's Included</h3>
            <div className="grid grid-cols-2 gap-3">
              {includedItems.map((item, index) => (
                <div key={index} className="border border-light-border rounded-lg bg-soft-bg p-4">
                  <Check className="text-primary-emerald" size={18} />
                  <p className="mt-3 text-xs text-dark-text leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-warm-cream border border-light-border rounded-xl p-5">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary-emerald/10 flex items-center justify-center">
                  <Info className="text-primary-emerald" size={18} />
                </div>
              </div>
              <div>
                <h4 className="font-display text-base text-dark-text mb-2">Important Note</h4>
                <p className="text-xs leading-5 text-secondary-text">
                  Registration is mandatory for all participants, including presenters and
                  co-authors. Presenters must ensure at least one author is registered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}