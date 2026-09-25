"use client";

import { useActionState } from "react";
import type { ActionResult } from "@/types/database";
import { updateSettings } from "@/lib/admin/actions";
import { AdminSectionHeader, FormAlert, SubmitButton } from "@/components/admin/AdminUI";

const SETTING_GROUPS = [
  {
    heading: "Conference Information",
    fields: [
      { key: "conference_name", label: "Short Name", placeholder: "RECYCLE27" },
      { key: "conference_full_name", label: "Full Name", placeholder: "27th Recycling & Circular Economy Conference" },
      { key: "conference_dates_display", label: "Dates (display text)", placeholder: "12–14 May 2027" },
      { key: "conference_start_date", label: "Start Date", type: "date" },
      { key: "conference_end_date", label: "End Date", type: "date" },
      { key: "conference_venue", label: "Venue", placeholder: "IIT Guwahati" },
      { key: "conference_address", label: "Address", placeholder: "Guwahati, Assam 781039, India" },
    ],
  },
  {
    heading: "Contact",
    fields: [
      { key: "contact_email", label: "Email", type: "email", placeholder: "recycle27@iitg.ac.in" },
      { key: "contact_phone", label: "Phone", placeholder: "+91 361 258 3000" },
    ],
  },
  {
    heading: "External Links",
    fields: [
      { key: "registration_url", label: "Registration URL", type: "url" },
      { key: "abstract_submission_url", label: "Abstract Submission URL", type: "url" },
      { key: "sponsorship_brochure_url", label: "Sponsorship Brochure URL", type: "url" },
      { key: "iitg_url", label: "IIT Guwahati URL", type: "url", placeholder: "https://www.iitg.ac.in" },
      { key: "wmrg_url", label: "WMRG URL", type: "url" },
    ],
  },
  {
    heading: "Maps",
    fields: [
      { key: "google_maps_embed_url", label: "Google Maps Embed URL", placeholder: "https://www.google.com/maps/embed?…" },
      { key: "google_maps_link", label: "Google Maps Link", type: "url" },
    ],
  },
  {
    heading: "Social Media",
    fields: [
      { key: "linkedin_url", label: "LinkedIn URL", type: "url" },
      { key: "twitter_url", label: "Twitter / X URL", type: "url" },
      { key: "youtube_url", label: "YouTube URL", type: "url" },
    ],
  },
];

const base =
  "mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary-emerald focus:outline-none focus:ring-2 focus:ring-primary-emerald/20";

export function SettingsClient({ settings }: { settings: Record<string, string> }) {
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(
    updateSettings,
    undefined
  );

  return (
    <>
      <AdminSectionHeader
        title="Site Settings"
        description="Configure conference identity, contact details, and external links. Changes reflect across the public website."
        showAdd={false}
      />

      <form action={action} className="mt-6 space-y-8">
        {SETTING_GROUPS.map((group) => (
          <section key={group.heading} className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-5 text-sm font-semibold text-gray-800">{group.heading}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {group.fields.map((field) => (
                <label key={field.key} className="block">
                  <span className="text-xs font-medium text-gray-700">{field.label}</span>
                  <input
                    type={field.type ?? "text"}
                    name={field.key}
                    defaultValue={settings[field.key] ?? ""}
                    placeholder={field.placeholder}
                    className={base}
                  />
                </label>
              ))}
            </div>
          </section>
        ))}

        <div className="flex items-center gap-4">
          <SubmitButton pending={pending} label="Save All Settings" />
          <FormAlert result={result} />
        </div>
      </form>
    </>
  );
}
