// =============================================================================
// /data/faqs.ts — Frequently Asked Questions
// =============================================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is ReCYCLE 2027?",
    answer:
      "ReCYCLE 2027 is the 6th International Conference on Waste Management, organized by the Waste Management Research Group (WMRG) at IIT Guwahati in association with AWASR Society. It is a platform for researchers, practitioners, industry experts, and policymakers to exchange knowledge and innovative ideas on sustainable waste management.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "When and where will the conference be held?",
    answer:
      "ReCYCLE 2027 will be held on 20 – 21 May 2027 at the Conference Centre, Indian Institute of Technology Guwahati, Guwahati, Assam, India.",
    category: "general",
  },
  {
    id: "faq-3",
    question: "Who can participate?",
    answer:
      "The conference welcomes researchers, academicians, industry professionals, students, policymakers, and anyone working in or interested in the field of waste management and circular economy.",
    category: "general",
  },
  {
    id: "faq-4",
    question: "What is the deadline for abstract submission?",
    answer:
      "The last date for abstract submission is 1st February 2027. Please ensure your abstract is submitted before this deadline.",
    category: "submission",
  },
  {
    id: "faq-5",
    question: "What are the registration fees?",
    answer:
      "Registration fees for Indian nationals: Faculty Members and Post Doc — INR 7500/- + 18% GST; Research Scholars — INR 5500/- + 18% GST; MTech & BTech Students — INR 3500/- + 18% GST. Foreign Nationals — 150 USD.",
    category: "registration",
  },
  {
    id: "faq-6",
    question: "When does registration open?",
    answer:
      "Registration opens on 20th March 2027.",
    category: "registration",
  },
  {
    id: "faq-7",
    question: "How do I submit my abstract?",
    answer:
      "Details on abstract submission will be announced on the conference website. Please check the Call for Abstracts page for guidelines and the submission link when it becomes available.",
    category: "submission",
  },
  {
    id: "faq-8",
    question: "How do I contact the conference secretariat?",
    answer:
      "You can reach the conference secretariat by email at recycle2k27@iitg.ac.in or recycle2k27@gmail.com, or by phone at +91 9535533933 / +91 9083110128.",
    category: "contact",
  },
];
