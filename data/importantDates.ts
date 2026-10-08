// =============================================================================
// /data/importantDates.ts — Conference key dates
// =============================================================================

import { Calendar, FileText, UserRound, type LucideIcon } from "lucide-react";

export interface ImportantDate {
  id: string;
  date: string;
  label: string;
  labelMultiline: string; // \n-separated for compact display
  icon: LucideIcon;
  isPassed: boolean; // set to true once the deadline has passed
}

export const importantDates: ImportantDate[] = [
  {
    id: "abstract-submission",
    date: "31st January 2027",
    label: "Last Date of Abstract Submission",
    labelMultiline: "Last date of\nAbstract Submission",
    icon: FileText,
    isPassed: false,
  },
  {
    id: "abstract-acceptance",
    date: "15th March 2027",
    label: "Acceptance Notification",
    labelMultiline: "Acceptance\nof Abstract",
    icon: Calendar,
    isPassed: false,
  },
  {
    id: "registration-opens",
    date: "31st March 2027",
    label: "Registration Deadline",
    labelMultiline: "Date of\nRegistration",
    icon: UserRound,
    isPassed: false,
  },
  {
    id: "full-paper",
    date: "31st March 2027",
    label: "Full Paper Submission",
    labelMultiline: "Full Paper\nSubmission",
    icon: FileText,
    isPassed: false,
  },
  {
    id: "conference",
    date: "20th and 21st May 2027",
    label: "Conference Dates",
    labelMultiline: "Conference\nDates",
    icon: Calendar,
    isPassed: false,
  },
];
