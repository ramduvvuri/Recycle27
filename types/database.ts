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
  category: 'submission' | 'notification' | 'registration' | 'conference';
  is_active: boolean;
  is_countdown_target: boolean;
  sort_order: number;
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
  speaker_type: 'keynote' | 'plenary' | 'invited' | 'other';
  image_url?: string;
  website?: string;
  sort_order: number;
  is_active: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation?: string;
  institution?: string;
  country?: string;
  committee_type: 'organizing' | 'scientific' | 'advisory' | 'technical';
  role?: string;
  image_url?: string;
  sort_order: number;
  is_active: boolean;
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
}

export interface ProgrammeDay {
  id: string;
  label: string;
  date: string;
  theme?: string;
  is_active: boolean;
  sort_order: number;
  items?: ProgrammeItem[];
}

export interface ProgrammeItem {
  id: string;
  day_id: string;
  time_start: string;
  time_end: string;
  title: string;
  description?: string;
  location?: string;
  session_type: 'registration' | 'keynote' | 'session' | 'panel' | 'break' | 'social' | 'workshop';
  speaker?: Speaker;
  sort_order: number;
  is_active: boolean;
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
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'supporting';
  logo_url: string;
  website?: string;
  description?: string;
  is_active: boolean;
  sort_order: number;
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
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string | null;
  label: string;
  description?: string;
  type: 'text' | 'url' | 'date' | 'boolean' | 'json';
}
