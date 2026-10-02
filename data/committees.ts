// =============================================================================
// /data/committees.ts — Conference committee members
// =============================================================

export interface CommitteeMember {
  id: string;
  name: string;
  role?: string;
  affiliation: string;
  image?: string;
}

export const advisoryCommittee = {
  patrons: [
    {
      id: "ac-1",
      name: "Prof. Devendra Jalihal",
      role: "Director",
      affiliation: "IIT Guwahati",
    }
  ],
  chairmen: [
    {
      id: "ac-2",
      name: "Prof. Rajib Bhattacharjya",
      role: "HOD, Department of Civil Engineering",
      affiliation: "IIT Guwahati",
    },
    {
      id: "ac-3",
      name: "Prof. Sudip Mitra",
      role: "HOS, SART",
      affiliation: "IIT Guwahati",
    }
  ],
  convenors: [
    {
      id: "ac-4",
      name: "Prof. Ajay Kalamdhad",
      role: "Department of Civil Engineering",
      affiliation: "IIT Guwahati",
    },
    {
      id: "ac-5",
      name: "Dr. Meena Khwairakpam",
      role: "SART",
      affiliation: "IIT Guwahati",
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
    { id: "nat-13", name: "Dr. Izharul Haq", affiliation: "Manipal University" }
  ]
};

// For homepage rendering (flat array of key members)
export const advisoryCommitteeFlat: CommitteeMember[] = [
  ...advisoryCommittee.patrons,
  ...advisoryCommittee.chairmen,
  ...advisoryCommittee.convenors,
].map(member => ({ ...member, role: member.role || "Member" }));

