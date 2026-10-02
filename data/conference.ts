// =============================================================================
// /data/conference.ts — Central conference configuration
// Source of truth for all core conference information.
// =============================================================================

export interface ConferenceInfo {
  shortName: string;
  fullName: string;
  conferenceTitle: string;
  edition: string;
  dates: string;
  datesShort: string;
  year: number;
  countdownTarget: string; // ISO 8601 with timezone
  venue: {
    name: string;
    institution: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    displayShort: string;
    displayFull: string;
  };
  tagline: string;
  organizers: {
    group: string;
    society: string;
    department: string;
    institution: string;
  };
}

export const conference: ConferenceInfo = {
  shortName: "ReCYCLE 2027",
  fullName: "ReCYCLE 2027 (6th International Conference)",
  conferenceTitle: "6th International Conference on Waste Management",
  edition: "6th",
  dates: "20 – 21 May 2027",
  datesShort: "20 – 21 May 2027",
  year: 2027,
  countdownTarget: "2027-05-20T00:00:00+05:30",
  venue: {
    name: "Conference Centre",
    institution: "Indian Institute of Technology Guwahati",
    city: "Guwahati",
    state: "Assam",
    country: "India",
    pincode: "781039",
    displayShort: "Conference Centre, IIT Guwahati",
    displayFull: "Conference Centre\nIndian Institute of Technology Guwahati\nGuwahati, Assam, India",
  },
  tagline: "Innovative Solutions for a Cleaner, Healthier and More Sustainable Future",
  organizers: {
    group: "Waste Management Research Group (WMRG)",
    society: "AWASR Society",
    department: "Department of Civil Engineering",
    institution: "Indian Institute of Technology Guwahati",
  },
};
