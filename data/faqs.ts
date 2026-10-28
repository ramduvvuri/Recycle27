// =============================================================================
// /data/faqs.ts — Authoritative Frequently Asked Questions
// Comprehensive information across all official ReCYCLE 2027 conference topics.
// =============================================================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Registration" | "Abstract Submission" | "Programme" | "Travel & Accommodation" | "Publications & Awards" | "Sponsorship";
}

export const faqs: FAQ[] = [
  // ── General ─────────────────────────────────────────────────────────────
  {
    id: "gen-1",
    question: "What is ReCYCLE 2027?",
    answer:
      "ReCYCLE 2027 is the 6th International Conference on Waste Management, organized by the Waste Management Research Group (WMRG) and School of Agro and Rural Technology (SART) at IIT Guwahati in association with AWSAR Society. It serves as a premier international platform bringing together researchers, engineers, industry practitioners, and policymakers to discuss scientific innovations, technological solutions, and policy frameworks for sustainable waste management and circular economy.",
    category: "General",
  },
  {
    id: "gen-2",
    question: "When and where will the conference be held?",
    answer:
      "ReCYCLE 2027 will take place on 20 – 21 May 2027 at the Conference Centre, Indian Institute of Technology Guwahati, Guwahati, Assam, India (PIN: 781039).",
    category: "General",
  },
  {
    id: "gen-3",
    question: "What is the overarching theme of ReCYCLE 2027?",
    answer:
      "The official theme is 'Innovative Solutions for a Cleaner, Healthier and More Sustainable Future', covering eight interconnected domains spanning solid waste, agro-waste, wastewater, circular economy, digital technologies, climate resilience, and public health.",
    category: "General",
  },
  {
    id: "gen-4",
    question: "Who can attend and participate in the conference?",
    answer:
      "The conference welcomes faculty members, postdoctoral researchers, PhD and master's students, undergraduate scholars, municipal engineers, industry experts, environmental consultants, technology providers, and governmental representatives dedicated to environmental stewardship and waste valorization.",
    category: "General",
  },
  {
    id: "gen-5",
    question: "How do I contact the conference secretariat?",
    answer:
      "You can contact the Secretariat by email at recycle2k27@iitg.ac.in or recycle2k27@gmail.com, or by telephone at +91 9535533933 / +91 9083110128. The secretariat is based at the Department of Civil Engineering & School of Agro and Rural Technology, IIT Guwahati.",
    category: "General",
  },

  // ── Abstract Submission ──────────────────────────────────────────────────
  {
    id: "abs-1",
    question: "What is the deadline for abstract submission?",
    answer:
      "The last date for abstract submission is 31st January 2027. Acceptance notifications will be communicated to authors by 28th February 2027.",
    category: "Abstract Submission",
  },
  {
    id: "abs-2",
    question: "How should I format and prepare my abstract?",
    answer:
      "Abstracts must be drafted in English using the official template ('Abstract Format.docx'). The abstract should be concise and factual (maximum 250 words) set in Times New Roman (12-point, 1.5 line spacing), accompanied by a concise informative title, author affiliations, corresponding author email, and up to 6 keywords separated by semicolons.",
    category: "Abstract Submission",
  },
  {
    id: "abs-3",
    question: "Where do I submit my abstract?",
    answer:
      "Submissions are accepted exclusively through the official conference Google Form (https://forms.gle/4eU138P4ADZpaCva7), accessible directly via the Call for Abstracts page on this website. Email submissions are not accepted.",
    category: "Abstract Submission",
  },
  {
    id: "abs-4",
    question: "What are the official conference themes for submission?",
    answer:
      "Abstracts may be submitted under any of the eight official themes: (1) Waste and resource management; (2) Rural and urban environmental management; (3) Sustainable agriculture and agro-waste management; (4) Sustainable technologies and digital innovations; (5) Climate resilience and ecosystem management; (6) Air and noise pollution; (7) Environmental management, remediation, and public health; and (8) Circular economy, environmental policy, governance, and sustainability.",
    category: "Abstract Submission",
  },
  {
    id: "abs-5",
    question: "Can an author submit more than one abstract?",
    answer:
      "Yes, authors may submit multiple abstracts across different themes. However, each accepted paper to be included in the proceedings and presented during the technical tracks must have at least one registered presenting author.",
    category: "Abstract Submission",
  },

  // ── Registration ────────────────────────────────────────────────────────
  {
    id: "reg-1",
    question: "What are the registration fees for ReCYCLE 2027?",
    answer:
      "Registration fees for Indian Nationals: Faculty Members and Postdoctoral Fellows: INR 7,500/- + 18% GST (INR 8,850 total); Research Scholars (PhD / JRF / SRF): INR 5,500/- + 18% GST (INR 6,490 total); Students (MTech / BTech / MSc / BSc): INR 3,500/- + 18% GST (INR 4,130 total). Foreign Nationals: 150 USD (all-inclusive).",
    category: "Registration",
  },
  {
    id: "reg-2",
    question: "When does registration open and what is the deadline?",
    answer:
      "Early bird registration opens on 20th March 2027. The deadline for registration of accepted authors to confirm their presentation in the final schedule is 15th April 2027.",
    category: "Registration",
  },
  {
    id: "reg-3",
    question: "What is included with the conference registration fee?",
    answer:
      "Registration entitles delegates to full entry to all keynote lectures and technical sessions, the conference delegate kit, book of abstracts and proceedings, working lunches and refreshment breaks on 20 & 21 May 2027, the official conference networking dinner, and an accredited Certificate of Participation / Presentation.",
    category: "Registration",
  },
  {
    id: "reg-4",
    question: "Will I receive a formal tax invoice and receipt?",
    answer:
      "Yes, an official GST tax invoice and payment acknowledgement receipt will be issued to your registered email address upon successful completion of payment.",
    category: "Registration",
  },
  {
    id: "reg-5",
    question: "Is on-spot registration available?",
    answer:
      "Pre-registration online is strongly encouraged to ensure entry, kit allocation, and catering arrangements. On-spot registration will be subject to venue availability and will incur an additional on-site administrative surcharge.",
    category: "Registration",
  },

  // ── Programme ───────────────────────────────────────────────────────────
  {
    id: "prg-1",
    question: "What is the overall schedule structure for the two days?",
    answer:
      "Day 1 (20 May 2027) starts with Registration at 8:00 AM, Inauguration at 9:00 AM, Guest Talk, High Tea, Keynote Talks 1 & 2, Lunch, Parallel Technical Sessions 1 & 2 (2:00–5:30 PM), Cultural Evening (6:30–8:00 PM), and Dinner (8:00–10:00 PM). Day 2 (21 May 2027) features Keynote Talks 3 & 4 (9:00–11:00 AM), Parallel Technical Sessions 3 & 4 (11:15 AM–1:15 PM), Lunch, Industry Session (2:15–3:15 PM), Panel Discussion (3:15–4:45 PM), Valedictory Function & Awards (5:00–6:00 PM), and High Tea.",
    category: "Programme",
  },
  {
    id: "prg-2",
    question: "How much time is allocated for oral presentations?",
    answer:
      "Standard oral presentations in parallel technical sessions are allocated 15 minutes total: 12 minutes for presentation followed by 3 minutes for question and answer with session chairs and attendees.",
    category: "Programme",
  },
  {
    id: "prg-3",
    question: "What are the guidelines for poster presentations?",
    answer:
      "Poster boards will accommodate standard A0 portrait format (841 mm × 1189 mm). Presenters will be assigned designated poster display slots and must be present at their posters during the scheduled evaluation window.",
    category: "Programme",
  },
  {
    id: "prg-4",
    question: "Is online / virtual presentation supported?",
    answer:
      "ReCYCLE 2027 is structured as an in-person academic and industrial convention at the IIT Guwahati Conference Centre. Hybrid or virtual presentation slots may only be considered on a case-by-case basis under extraordinary circumstances with prior written approval from the Convenors.",
    category: "Programme",
  },

  // ── Travel & Accommodation ──────────────────────────────────────────────
  {
    id: "trv-1",
    question: "How do I reach the IIT Guwahati campus?",
    answer:
      "By Air: Lokpriya Gopinath Bordoloi International Airport (GAU) is ~20 km away (30–45 mins by prepaid taxi or rideshare). By Train: Guwahati Railway Station (GHY) is ~18 km away and Kamakhya Railway Station (KYQ) is ~12 km away. Both have readily available taxi and auto-rickshaw connections directly to the IITG North Guwahati campus via NH-31.",
    category: "Travel & Accommodation",
  },
  {
    id: "trv-2",
    question: "Is on-campus accommodation provided at IIT Guwahati?",
    answer:
      "Limited on-campus accommodation in the IIT Guwahati Institute Guest House and student hostels is available for registered delegates on a first-come, first-served basis. Booking requests can be submitted during registration.",
    category: "Travel & Accommodation",
  },
  {
    id: "trv-3",
    question: "What hotel options are available near the campus?",
    answer:
      "Delegates preferring hotel stays can choose from premium and business hotels in Guwahati city (e.g., Radisson Blu, Vivanta Guwahati, Novotel) as well as budget-friendly accommodations around Jalukbari and Panbazar. The organizing committee arranges morning and evening shuttle services between designated partner pickup points and the Conference Centre.",
    category: "Travel & Accommodation",
  },
  {
    id: "trv-4",
    question: "Do international delegates require a conference visa?",
    answer:
      "Yes. International attendees require a valid passport and an Indian Conference Visa. Once registered, the Secretariat issues official Invitation Letters and relevant nodal clearance documents (from the Ministry of External Affairs and Ministry of Home Affairs) to facilitate your visa application.",
    category: "Travel & Accommodation",
  },

  // ── Publications & Awards ────────────────────────────────────────────────
  {
    id: "pub-1",
    question: "Will presented papers be published in indexed journals or proceedings?",
    answer:
      "Yes. All accepted abstracts will be published in the official ReCYCLE 2027 Conference Proceedings with an assigned ISBN. Furthermore, selected high-impact full manuscripts will be invited for peer review and published in dedicated Special Issues of reputed Scopus/SCI-indexed environmental engineering journals and edited Springer/Elsevier book volumes.",
    category: "Publications & Awards",
  },
  {
    id: "pub-2",
    question: "What awards will be conferred at the conference?",
    answer:
      "To celebrate research excellence, the conference committee will present several prestigious honors during the Valedictory Function on 21 May 2027: Best Oral Presentation Awards across each technical track, Best Poster Presentation Awards (1st, 2nd, and 3rd place), and the Young Researcher Award for outstanding innovation by an early-career investigator.",
    category: "Publications & Awards",
  },
  {
    id: "pub-3",
    question: "When is the deadline for full paper submission for journal consideration?",
    answer:
      "Authors of accepted abstracts who wish to have their full manuscripts considered for special journal issues must submit their complete papers by 30th June 2027. Detailed author submission guidelines will be provided following abstract acceptance.",
    category: "Publications & Awards",
  },

  // ── Sponsorship ─────────────────────────────────────────────────────────
  {
    id: "spn-1",
    question: "What sponsorship packages are available for industry partners?",
    answer:
      "ReCYCLE 2027 offers multiple corporate partnership packages: Platinum Partner, Gold Partner, Silver Partner, Bronze Partner, and Session / Banquet Sponsorship. Entitlements include prominent logo branding across website and print materials, complimentary delegate passes, prime exhibition stall space at the Conference Centre, and presentation opportunities during the dedicated Industry Session.",
    category: "Sponsorship",
  },
  {
    id: "spn-2",
    question: "How can our organization secure an exhibition stall?",
    answer:
      "Exhibition space is allocated in the main foyer of the Conference Centre. Organizations interested in showcasing waste management machinery, sensing technologies, recycling systems, or consulting solutions should email recycle2k27@iitg.ac.in with the subject 'ReCYCLE 2027 Exhibition Stall Request'.",
    category: "Sponsorship",
  },
];
