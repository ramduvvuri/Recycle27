// =============================================================================
// /data/programme.ts — Official Two-Day Tentative Schedule for ReCYCLE 2027
// Source of Truth: Themes and Tentative Schedule.docx
// Conference Dates: 20–21 May 2027
// =============================================================================

export interface ScheduleItem {
  time: string;
  session: string;
  category: "ceremony" | "keynote" | "technical" | "break" | "special";
}

export interface ProgrammeDay {
  id: number;
  label: string;
  date: string;
  fullDate: string;
  schedule: ScheduleItem[];
}

export const tentativeSchedule: ProgrammeDay[] = [
  {
    id: 1,
    label: "Day 1",
    date: "20 May 2027",
    fullDate: "Thursday, 20 May 2027",
    schedule: [
      { time: "8:00–9:00", session: "Registration", category: "ceremony" },
      { time: "9:00–9:30", session: "Inauguration Ceremony", category: "ceremony" },
      { time: "9:30–10:30", session: "Guest Talk", category: "special" },
      { time: "10:30–10:45", session: "High Tea", category: "break" },
      { time: "10:45–13:00", session: "Technical Session 1", category: "technical" },
      { time: "13:00–14:30", session: "Lunch + Poster", category: "break" },
      { time: "14:30–15:15", session: "Keynote 1", category: "keynote" },
      { time: "15:15–16:00", session: "Keynote 2", category: "keynote" },
      { time: "16:00–16:15", session: "High Tea", category: "break" },
      { time: "16:15–18:00", session: "Technical Session 2", category: "technical" },
      { time: "19:00–22:00", session: "Cultural and Dinner", category: "special" },
    ],
  },
  {
    id: 2,
    label: "Day 2",
    date: "21 May 2027",
    fullDate: "Friday, 21 May 2027",
    schedule: [
      { time: "9:00–9:45", session: "Keynote 3", category: "keynote" },
      { time: "9:45–10:30", session: "Keynote 4", category: "keynote" },
      { time: "10:30–10:45", session: "High Tea", category: "break" },
      { time: "10:45–12:45", session: "Technical Session 3", category: "technical" },
      { time: "12:45–14:15", session: "Lunch + Poster", category: "break" },
      { time: "14:15–15:45", session: "Technical Session 4", category: "technical" },
      { time: "16:00–17:30", session: "Expert Panel Discussion", category: "special" },
      { time: "17:30–18:00", session: "Valedictory", category: "ceremony" },
      { time: "18:00–18:30", session: "High Tea", category: "break" },
    ],
  },
];
