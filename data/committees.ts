// =============================================================================
// /data/committees.ts — Conference committee members
// =============================================================================

export interface CommitteeMember {
  id: string;
  name: string;
  role?: string;
  affiliation: string;
  image?: string;
}

export interface StudentMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  image: string;
}

export const advisoryCommittee = {
  patrons: [
    {
      id: "ac-1",
      name: "Prof. Devendra Jalihal",
      role: "Director",
      affiliation: "IIT Guwahati",
      image: "/images/committee/devendra-jalihal.jpg",
    }
  ],
  chairmen: [
    {
      id: "ac-2",
      name: "Prof. Rajib Bhattacharjya",
      role: "HOD, Department of Civil Engineering",
      affiliation: "IIT Guwahati",
      image: "/images/committee/rajib-bhattacharjya.jpg",
    },
    {
      id: "ac-3",
      name: "Prof. Sudip Mitra",
      role: "HOS, SART",
      affiliation: "IIT Guwahati",
      image: "/images/committee/sudip-mitra.jpg",
    }
  ],
  convenors: [
    {
      id: "ac-4",
      name: "Prof. Ajay Kalamdhad",
      role: "Department of Civil Engineering",
      affiliation: "IIT Guwahati",
      image: "/images/committee/ajay-kalamdhad.jpg",
    },
    {
      id: "ac-5",
      name: "Dr. Meena Khwairakpam",
      role: "SART",
      affiliation: "IIT Guwahati",
      image: "/images/committee/meena-khwairakpam.jpg",
    }
  ],
  internationalMembers: [
    { id: "intl-1", name: "Prof. Jonathan W C Wong", affiliation: "DUT, Guangdong, China" },
    { id: "intl-2", name: "Prof. John In Hong", affiliation: "SNU, South Korea" },
    { id: "intl-3", name: "Prof. Pascaline Pré", affiliation: "IMT Atlantique" },
    { id: "intl-4", name: "Prof. Agamutu Pariatamby", affiliation: "Sunway University, Malaysia" },
    { id: "intl-5", name: "Prof. C. Visvanathan", affiliation: "AIT, Thailand" },
    { id: "intl-6", name: "Prof. Muhammed Alamgir", affiliation: "KUET, Bangladesh" },
    { id: "intl-7", name: "Prof. R. Dissanayake", affiliation: "University of Peradeniya, Sri Lanka" },
    { id: "intl-8", name: "Dr. Yael Laor", affiliation: "Newe Ya'ar Research Centre, Israel" },
    { id: "intl-9", name: "Dr. Brandon Gilroyed", affiliation: "University of Guelph, Canada" },
    { id: "intl-10", name: "Prof. Ramesh Goel", affiliation: "University of Utah, USA" }
  ],
  nationalMembers: [
    { id: "nat-1", name: "Prof. A.A. Kazmi", affiliation: "IIT Roorkee" },
    { id: "nat-2", name: "Prof. B.J. Alappat", affiliation: "IIT Delhi" },
    { id: "nat-3", name: "Prof. A.K. Nema", affiliation: "IIT Delhi" },
    { id: "nat-4", name: "Prof. B.K. Dubey", affiliation: "IIT KGP" },
    { id: "nat-5", name: "Prof. A.K. Gupta", affiliation: "IIT KGP" },
    { id: "nat-6", name: "Prof. M.M. Ghangrekar", affiliation: "IIT KGP" },
    { id: "nat-7", name: "Prof. Anurag Garg", affiliation: "IIT Bombay" },
    { id: "nat-8", name: "Prof. P.K. Singh", affiliation: "IIT BHU" },
    { id: "nat-9", name: "Prof. A.B. Gupta", affiliation: "MNIT Jaipur" },
    { id: "nat-10", name: "Prof. K.D. Yadav", affiliation: "SVNIT Surat" },
    { id: "nat-11", name: "Dr. Maulin. P. Shah", affiliation: "Enviro Technology Limited, Gujarat" },
    { id: "nat-12", name: "Dr. Mayur Shirish Jain", affiliation: "IIT Indore" },
    { id: "nat-13", name: "Dr. Izharul Haq", affiliation: "Dr. B. Lal Institute of Biotechnology" }
  ]
};

// ─── Student Organizing Team (from Students_comm.docx) ─────────────────────────
export const studentCommittee = {
  coreMembers: [
    {
      id: "sc-kiran",
      name: "Mr. Kiran V Kottur",
      role: "Core Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-kiran-v-kottur.jpeg",
    },
    {
      id: "sc-sagar",
      name: "Mr. Sagar Aditya",
      role: "Core Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-sagar-aditya.jpeg",
    },
    {
      id: "sc-sayan",
      name: "Mr. Sayan Saha",
      role: "Core Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-sayan-saha.jpeg",
    },
  ] as StudentMember[],

  otherMembers: [
    {
      id: "sc-zamminsion",
      name: "Mr. K Zamminsion",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-k-zamminsion.jpeg",
    },
    {
      id: "sc-lamyanbi",
      name: "Ms. Lamyanbi Naorem",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-lamyanbi-naorem.jpeg",
    },
    {
      id: "sc-monish",
      name: "Mr. Monish Goswami",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-monish-goswami.jpeg",
    },
    {
      id: "sc-sanjana",
      name: "Ms. Sanjana Sinha",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-sanjana-sinha.jpeg",
    },
    {
      id: "sc-shahnawaz",
      name: "Mr. Shahnawaz Ahmed",
      role: "Organizing Member",
      affiliation: "PhD Scholar, Gauhati University",
      image: "/images/student-committee/mr-shahnawaz-ahmed.jpeg",
    },
    {
      id: "sc-sweta",
      name: "Ms. Sweta Waikhom",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-sweta-waikhom.jpeg",
    },
    {
      id: "sc-bwenyele",
      name: "Ms. Bwenyele Tep",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-bwenyele-tep.jpeg",
    },
    {
      id: "sc-chandan",
      name: "Mr. Chandan Prajapati",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-chandan-prajapati.jpeg",
    },
    {
      id: "sc-garima",
      name: "Ms. Garima Singh",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-garima-singh.jpeg",
    },
    {
      id: "sc-susmita",
      name: "Ms. Susmita Marandi",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-susmita-marandi.jpeg",
    },
    {
      id: "sc-vartika",
      name: "Ms. Vartika Anand",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-vartika-anand.jpeg",
    },
    {
      id: "sc-aminul",
      name: "Mr. Aminul Islam Choudhary",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-aminul-islam-choudhary.jpeg",
    },
    {
      id: "sc-debanga",
      name: "Mr. Debanga Raj Gogoi",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-debanga-raj-gogoi.jpeg",
    },
    {
      id: "sc-archana",
      name: "Ms. Archana Kashyap",
      role: "Organizing Member",
      affiliation: "PhD Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-archana-kashyap.jpeg",
    },
    {
      id: "sc-akash",
      name: "Mr. Akash Soni",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-akash-soni.jpeg",
    },
    {
      id: "sc-aman",
      name: "Mr. Aman Kumar",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-aman-kumar.jpeg",
    },
    {
      id: "sc-anshuman",
      name: "Mr. Anshuman Ghosh",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-anshuman-ghosh.jpeg",
    },
    {
      id: "sc-gundu",
      name: "Mr. Gundu Shashi Kiran",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-gundu-shashi-kiran.jpeg",
    },
    {
      id: "sc-jyotishman",
      name: "Mr. Jyotishman Deka",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-jyotishman-deka.jpeg",
    },
    {
      id: "sc-male",
      name: "Ms. Male Manogna",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/ms-male-manogna.jpeg",
    },
    {
      id: "sc-parijaat",
      name: "Mr. Parijaat Sinha",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-parijaat-sinha.jpeg",
    },
    {
      id: "sc-saikat",
      name: "Mr. Saikat Saha",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-saikat-saha.jpeg",
    },
    {
      id: "sc-shaik",
      name: "Mr. Shaik Anwar Baba",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-shaik-anwar-baba.jpeg",
    },
    {
      id: "sc-vena",
      name: "Mr. Vena Harsha Vardhan",
      role: "Organizing Member",
      affiliation: "M.Tech Scholar, IIT Guwahati",
      image: "/images/student-committee/mr-vena-harsha-vardhan.jpeg",
    },
  ] as StudentMember[],
};

export const advisoryCommitteeFlat: CommitteeMember[] = [
  ...advisoryCommittee.patrons,
  ...advisoryCommittee.chairmen,
  ...advisoryCommittee.convenors,
].map(member => ({ ...member, role: member.role || "Member" }));
