// ─── Core CMS types ──────────────────────────────────────────────────────────

export interface Announcement {
  id: string;
  title: string;
  body: string;
  link_url?: string;
  link_label?: string;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ImportantDate {
  id: string;
  label: string;
  date: string;
  description?: string;
  category: "submission" | "notification" | "registration" | "conference";
  is_active: boolean;
  is_countdown_target: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  country: string;
  bio?: string;
  topic?: string;
  abstract?: string;
  speaker_type: "keynote" | "plenary" | "invited" | "other";
  image_url?: string;
  website?: string;
  email?: string;
  sort_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation?: string;
  institution?: string;
  country?: string;
  committee_type: "organizing" | "scientific" | "advisory" | "technical";
  role?: string;
  image_url?: string;
  sort_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface RegistrationCategory {
  id: string;
  name: string;
  description?: string;
  icon_name?: string;
  early_bird_fee?: number;
  regular_fee?: number;
  onsite_fee?: number;
  currency: string;
  early_bird_deadline?: string;
  regular_deadline?: string;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface ProgrammeDay {
  id: string;
  label: string;
  date: string;
  theme?: string;
  is_active: boolean;
  sort_order: number;
  items?: ProgrammeItem[];
  created_at?: string;
  updated_at?: string;
}

export interface ProgrammeItem {
  id: string;
  day_id: string;
  time_start: string;
  time_end: string;
  title: string;
  description?: string;
  location?: string;
  session_type:
    | "registration"
    | "keynote"
    | "session"
    | "panel"
    | "break"
    | "social"
    | "workshop";
  speaker?: Speaker;
  speaker_id?: string;
  sort_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Document {
  id: string;
  title: string;
  document_type: string;
  file_url: string;
  file_format?: string;
  file_size?: string;
  label?: string;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface AccommodationOption {
  id: string;
  name: string;
  description?: string;
  type: "campus_guesthouse" | "campus_hostel" | "nearby_hotel";
  icon_name?: string;
  features?: string[];
  price_range?: string;
  booking_url?: string;
  contact_info?: string;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface PublicationItem {
  id: string;
  name: string;
  publisher: string;
  description?: string;
  logo_url?: string;
  website?: string;
  type: "proceedings" | "journal" | "partner";
  is_indicative: boolean;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  eligibility?: string;
  selection_process?: string;
  icon_name?: string;
  is_announced: boolean;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver" | "supporting";
  logo_url: string;
  website?: string;
  description?: string;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption?: string;
  image_url: string;
  alt_text: string;
  category: string;
  edition?: string;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string | null;
  label: string;
  description?: string;
  type: "text" | "url" | "date" | "boolean" | "json";
  created_at?: string;
  updated_at?: string;
}

// ─── Workflow / Event operations ──────────────────────────────────────────────

export interface AbstractSubmission {
  id: string;
  author_name: string;
  author_email: string;
  affiliation: string;
  co_authors?: string;
  abstract_title: string;
  theme: string;
  abstract_text?: string;
  pdf_url?: string;
  status: "submitted" | "under_review" | "accepted" | "rejected";
  review_notes?: string;
  submitted_at: string;
  updated_at: string;
}

export interface EventRegistration {
  id: string;
  full_name: string;
  email: string;
  institution: string;
  phone?: string;
  category: "student" | "academic" | "industry" | "others";
  payment_reference?: string;
  payment_status: "pending" | "verified" | "rejected";
  amount_paid?: number;
  notes?: string;
  registered_at: string;
  updated_at: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied";
  submitted_at: string;
  updated_at: string;
}

// ─── Action result shape ──────────────────────────────────────────────────────

export interface ActionResult {
  success?: boolean;
  error?: string;
}
