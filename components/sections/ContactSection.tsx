"use client";

import { useActionState } from "react";
import { submitContactInquiry } from "@/lib/public/actions";
import { Mail, Phone, MapPin, CalendarDays, Users, FileText, Handshake, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import type { ActionResult } from "@/types";
import { contactInfo } from "@/data/contact";

// Transform centralized contact info into section format
const contactDetails = [
  { Icon: Mail, label: "Email", value: contactInfo.emails.join("\n") },
  {
    Icon: Phone,
    label: "Phone",
    value: contactInfo.phones.join("\n"),
  },
  {
    Icon: MapPin,
    label: "Address",
    value: `${contactInfo.address.line1}\n${contactInfo.address.line2}\n${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.pincode}, ${contactInfo.address.country}`,
  },
  {
    Icon: CalendarDays,
    label: "Conference Secretariat Hours",
    value: "Monday – Friday\n10:00 AM – 5:00 PM (IST)",
  },
];

const contactCategories = [
  { Icon: Users, title: "Registration Support", description: "Assistance with registration and payments." },
  { Icon: FileText, title: "Abstract Submission", description: "Queries related to abstract guidelines and submission." },
  { Icon: Handshake, title: "Sponsorship & Partnerships", description: "Explore collaboration opportunities." },
  { Icon: MessageSquare, title: "General Inquiries", description: "Any other questions about the conference." },
];

const inputBase =
  "w-full border border-light-border rounded-lg px-4 py-4 text-base text-dark-text bg-white focus:outline-none focus:border-primary-emerald focus:ring-3 focus:ring-primary-emerald/15 transition-colors";

export function ContactSection() {
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(
    submitContactInquiry,
    undefined
  );

  return (
    <>
      <SectionWrapper theme="white" spacing="compact">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-light-border -translate-x-1/2" />

          {/* Contact details */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">Get in Touch</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-secondary-text">
              For general inquiries, registration support, sponsorship opportunities or any other
              questions, please use the details below.
            </p>
            <div className="mt-10 space-y-8">
              {contactDetails.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-6">
                  <Icon size={32} className="text-primary-emerald shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl text-dark-text">{label}</h3>
                    <p className="mt-2 whitespace-pre-line text-base leading-6 text-secondary-text">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          {result?.success ? (
            <div className="flex flex-col items-center justify-center bg-soft-bg p-8 md:p-10 border border-light-border rounded-xl text-center">
              <CheckCircle size={48} className="text-primary-emerald" />
              <h2 className="mt-6 font-display text-4xl">Message Sent!</h2>
              <p className="mt-4 text-base leading-7 text-secondary-text max-w-sm">
                Thank you for reaching out. We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form action={action} className="bg-soft-bg p-8 md:p-10 border border-light-border rounded-xl">
              <h2 className="font-display text-4xl md:text-5xl">Send us a Message</h2>
              <p className="mt-3 text-base leading-7 text-secondary-text">
                Fill in the form below and we&apos;ll get back to you soon.
              </p>

              <label className="mt-6 block">
                <span className="block text-sm font-medium text-dark-text mb-2">Your Name *</span>
                <input name="name" required placeholder="Enter your name" className={inputBase} />
              </label>

              <label className="mt-6 block">
                <span className="block text-sm font-medium text-dark-text mb-2">Your Email *</span>
                <input name="email" type="email" required placeholder="Enter your email" className={inputBase} />
              </label>

              <label className="mt-6 block">
                <span className="block text-sm font-medium text-dark-text mb-2">Subject *</span>
                <input name="subject" required placeholder="Enter subject" className={inputBase} />
              </label>

              <label className="mt-6 block">
                <span className="block text-sm font-medium text-dark-text mb-2">Message *</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message here…"
                  className={inputBase}
                />
              </label>

              {result?.error && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertCircle size={16} />
                  {result.error}
                </div>
              )}

              <button
                type="submit"
                disabled={pending}
                className="mt-8 w-full rounded-full bg-primary-emerald px-8 py-4 text-base font-medium text-light-text hover:bg-deep-emerald transition-colors disabled:opacity-60"
              >
                {pending ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>

      {/* Category cards */}
      <SectionWrapper theme="white" spacing="compact">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactCategories.map(({ Icon, title, description }) => (
            <div key={title} className="bg-warm-cream border border-light-border p-8 rounded-xl">
              <Icon size={32} className="text-primary-emerald" />
              <h3 className="mt-8 font-display text-2xl text-dark-text">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary-text">{description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
