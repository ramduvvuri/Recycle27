// =============================================================================
// /data/contact.ts — Centralized contact information
// =============================================================

export interface ContactInfo {
  phones: string[];
  emails: string[];
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  primaryEmail: string;
}

export const contactInfo: ContactInfo = {
  phones: [
    "+91 9535533933",
  ],
  emails: [
    "recycle2k27@iitg.ac.in",
    "recycle2k27@gmail.com",
  ],
  primaryEmail: "recycle2k27@iitg.ac.in",
  address: {
    line1: "Conference Centre",
    line2: "Indian Institute of Technology Guwahati",
    city: "Guwahati",
    state: "Assam",
    pincode: "781039",
    country: "India",
  },
};
