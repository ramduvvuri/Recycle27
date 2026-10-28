// =============================================================================
// /data/speakers.ts — Conference speakers (local static data)
// Source: recycle speakers.docx (Tentative List of Speakers for the Conference)
// =============================================================================

export interface Speaker {
  id: string;
  name: string;
  title?: string;
  department?: string;
  affiliation: string;
  country?: string;
  image?: string;
  topic?: string;
  bio?: string;
  role?: string;
  category?: string;
}

/**
 * Tentative list of speakers for RECYCLE 2027 from `recycle speakers.docx`.
 * 
 * REVIEW FLAG: The source document provides a "Tentative List of Speakers for the Conference"
 * without specifying sub-classifications (e.g. keynote vs. plenary vs. invited).
 * Specific keynote/plenary designations are pending official classification by conference organizers.
 * Verified portrait images are extracted directly from the source document media.
 */
export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Prof. A.A. Kazmi",
    department: "Civil Engineering Department",
    affiliation: "Indian Institute of Technology Roorkee",
    country: "India",
    image: "/images/speakers/prof-a-a-kazmi.jpeg",
  },
  {
    id: "speaker-2",
    name: "Prof. B.J. Alappat",
    department: "Department of Civil Engineering",
    affiliation: "Indian Institute of Technology Delhi",
    country: "India",
    image: "/images/speakers/prof-b-j-alappat.jpeg",
  },
  {
    id: "speaker-3",
    name: "Dr. S Venkata Mohan",
    title: "Director",
    department: "CSIR National Environmental Engineering Research Institute, Nagpur",
    affiliation: "Indian Institute of Chemical Technology",
    country: "India",
    image: "/images/speakers/dr-s-venkata-mohan.jpeg",
  },
  {
    id: "speaker-4",
    name: "Prof. Aki Sebastian Ruhl",
    title: "Professor for Water Treatment",
    affiliation: "Technische Universität Berlin",
    country: "Germany",
    image: "/images/speakers/prof-aki-sebastian-ruhl.jpeg",
  },
  {
    id: "speaker-5",
    name: "Prof. Fumitake Nishimura",
    department: "Department of Environmental Engineering",
    affiliation: "Kyoto University",
    country: "Japan",
    image: "/images/speakers/prof-fumitake-nishimura.jpeg",
  },
  {
    id: "speaker-6",
    name: "Prof. Makarand Madhao Ghangrekar",
    department: "Civil Engineering Department",
    affiliation: "Indian Institute of Technology Kharagpur",
    country: "India",
    image: "/images/speakers/prof-makarand-madhao-ghangrekar.jpeg",
  },
  {
    id: "speaker-7",
    name: "Prof. B.K. Dubey",
    department: "Civil Engineering Department",
    affiliation: "Indian Institute of Technology Kharagpur",
    country: "India",
    image: "/images/speakers/prof-b-k-dubey.jpeg",
  },
  {
    id: "speaker-8",
    name: "Prof. R.R. Dash",
    department: "School of Infrastructure",
    affiliation: "Indian Institute of Technology Bhubaneswar",
    country: "India",
    image: "/images/speakers/prof-r-r-dash.png",
  },
  {
    id: "speaker-9",
    name: "Prof. Anurag Garg",
    department: "Environmental Science and Engineering Department",
    affiliation: "Indian Institute of Technology Bombay",
    country: "India",
    image: "/images/speakers/prof-anurag-garg.jpeg",
  },
  {
    id: "speaker-10",
    name: "Dr. Sonil Nanda",
    title: "Assistant Professor",
    department: "Department of Engineering, Faculty of Agriculture",
    affiliation: "Dalhousie University",
    country: "Canada",
    image: "/images/speakers/dr-sonil-nanda.jpeg",
  },
  {
    id: "speaker-11",
    name: "Dr. Mayur Shirish Jain",
    title: "Associate Professor",
    department: "Department of Civil Engineering",
    affiliation: "Indian Institute of Technology Indore",
    country: "India",
    image: "/images/speakers/dr-mayur-shirish-jain.jpeg",
  },
  {
    id: "speaker-12",
    name: "Dr. Daya Pandey",
    title: "Assistant Professor",
    department: "School of Mechanical Engineering",
    affiliation: "University of Leeds",
    country: "United Kingdom",
    image: "/images/speakers/dr-daya-pandey.jpeg",
  },
];

/**
 * Backwards-compatible aliases for existing components.
 * Both homepage and speakers page share this exact centralized dataset.
 */
export const keynoteSpeakers: Speaker[] = speakers;
export const allSpeakers: Speaker[] = speakers;
