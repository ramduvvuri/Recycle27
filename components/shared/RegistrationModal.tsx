"use client";

import { useState, useEffect } from "react";
import { X, Check, Info, Download, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { registrationFees, registrationIncludes } from "@/data/registration";

type RegistrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  // Derive locally to be safe against any HMR module-eval edge case
  const allFees = registrationFees ?? [];
  const indianFees = allFees.filter((f) => f.nationality === "indian");
  const foreignFees = allFees.filter((f) => f.nationality === "foreign");
  const includes = registrationIncludes ?? [];
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
              Register for ReCYCLE 2027
            </h2>
            <p className="mt-4 text-sm leading-6 text-secondary-text max-w-xl mx-auto">
              Participants from academia, industry, government and civil society are
              invited to register. Join us to exchange ideas and contribute to a
              sustainable future.
            </p>
          </div>

          {/* Indian Nationals */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Users size={16} className="text-primary-emerald" />
              <h3 className="font-display text-lg text-dark-text">Indian Nationals</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-light-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary-emerald text-light-text">
                    <th className="px-3 py-3 text-left font-medium">Category</th>
                    <th className="px-3 py-3 text-right font-medium">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border">
                  {indianFees.map((fee) => (
                    <tr key={fee.id} className="bg-white">
                      <td className="px-3 py-3 font-medium text-dark-text">{fee.category}</td>
                      <td className="px-3 py-3 text-right font-semibold text-primary-emerald">{fee.display}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Foreign Nationals */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="text-primary-emerald" />
              <h3 className="font-display text-lg text-dark-text">Foreign Nationals</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-light-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary-emerald text-light-text">
                    <th className="px-3 py-3 text-left font-medium">Category</th>
                    <th className="px-3 py-3 text-right font-medium">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border">
                  {foreignFees.map((fee) => (
                    <tr key={fee.id} className="bg-white">
                      <td className="px-3 py-3 font-medium text-dark-text">{fee.category}</td>
                      <td className="px-3 py-3 text-right font-semibold text-primary-emerald">{fee.display}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button href="/registration" showArrow className="flex-1">
              View Full Details
            </Button>
            <Button href="#" variant="secondary" icon={<Download size={16} />} className="flex-1">
              Download Brochure
            </Button>
          </div>

          {/* What's Included */}
          <div className="mb-6">
            <h3 className="font-display text-lg text-dark-text mb-3">What&apos;s Included</h3>
            <div className="grid grid-cols-2 gap-2">
              {includes.map((item, index) => (
                <div key={index} className="border border-light-border rounded-lg bg-soft-bg p-3 flex items-start gap-2">
                  <Check className="text-primary-emerald mt-0.5 shrink-0" size={14} />
                  <p className="text-xs text-dark-text leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-warm-cream border border-light-border rounded-xl p-5">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary-emerald/10 flex items-center justify-center">
                  <Info className="text-primary-emerald" size={16} />
                </div>
              </div>
              <div>
                <h4 className="font-display text-base text-dark-text mb-1">Important Note</h4>
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