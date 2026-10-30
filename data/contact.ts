// =============================================================================
// /data/contact.ts — Centralized contact information
// =============================================================================

export interface CoordinatorContact {
  name: string;
  phone: string;
}

export interface ContactInfo {
  coordinators: CoordinatorContact[];
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
  coordinators: [
    { name: "Kiran", phone: "+91 9535533933" },
    { name: "Sagar", phone: "+91 90831 10128" },
    { name: "Sayan", phone: "+91 86703 88688" },
  ],
  phones: [
    "+91 9535533933",
    "+91 90831 10128",
    "+91 86703 88688",
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
