// =============================================================================
// /data/registration.ts — Registration fees (source of truth)
// Values supplied directly from the official conference fee schedule.
// DO NOT modify fee amounts without official authorization.
// =============================================================

export interface RegistrationFee {
  id: string;
  category: string;
  amount: string;
  gst?: string;
  /** Exact display string as supplied by conference organizers */
  display: string;
  nationality: "indian" | "foreign";
}

/**
 * Registration fees for ReCYCLE 2027.
 * Source: Official conference fee schedule supplied by organizers.
 *
 * IMPORTANT: GST amounts must NOT be calculated and merged into the base fee.
 * The official wording e.g. "INR 7500/- + 18% GST" must be preserved exactly.
 */
export const registrationFees: RegistrationFee[] = [
  // ── Indian Nationals ──────────────────────────────────────────────────────
  {
    id: "indian-faculty",
    category: "Faculty Members",
    amount: "INR 7500/-",
    gst: "18% GST",
    display: "INR 7500/- + 18% GST",
    nationality: "indian",
  },
  {
    id: "indian-postdoc",
    category: "Post Doc",
    amount: "INR 7500/-",
    gst: "18% GST",
    display: "INR 7500/- + 18% GST",
    nationality: "indian",
  },
  {
    id: "indian-research-scholar",
    category: "Research Scholars",
    amount: "INR 5500/-",
    gst: "18% GST",
    display: "INR 5500/- + 18% GST",
    nationality: "indian",
  },
  {
    id: "indian-student",
    category: "MTech & BTech Students",
    amount: "INR 3500/-",
    gst: "18% GST",
    display: "INR 3500/- + 18% GST",
    nationality: "indian",
  },
  // ── Foreign Nationals ─────────────────────────────────────────────────────
  {
    id: "foreign",
    category: "Foreign Nationals",
    amount: "150 USD",
    display: "150 USD",
    nationality: "foreign",
  },
];

export const indianFees = registrationFees.filter(
  (f) => f.nationality === "indian"
);
export const foreignFees = registrationFees.filter(
  (f) => f.nationality === "foreign"
);

/**
 * What is included in the registration fee.
 */
export const registrationIncludes: string[] = [
  "Access to all technical sessions",
  "Conference kit and meals",
  "Networking opportunities",
  "Participation certificate",
];
