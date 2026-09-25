import "server-only";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/admin/auth";
import type {
  Announcement,
  ImportantDate,
  Speaker,
  CommitteeMember,
  RegistrationCategory,
  ProgrammeDay,
  Document,
  AccommodationOption,
  PublicationItem,
  Award,
  Sponsor,
  GalleryItem,
  FAQ,
  SiteSetting,
  AbstractSubmission,
  EventRegistration,
  ContactInquiry,
} from "@/types/database";

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function client() {
  return createClient();
}

async function fetchList<T>(
  table: string,
  options?: {
    filter?: Record<string, unknown>;
    order?: string;
    ascending?: boolean;
    limit?: number;
  }
): Promise<T[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const supabase = await client();
    let q = supabase.from(table).select("*");
    if (options?.filter) {
      for (const [k, v] of Object.entries(options.filter)) {
        q = q.eq(k, v);
      }
    }
    q = q.order(options?.order ?? "sort_order", {
      ascending: options?.ascending ?? true,
    });
    if (options?.limit) q = q.limit(options.limit);
    const { data, error } = await q;
    if (error) return [];
    return (data ?? []) as T[];
  } catch {
    return [];
  }
}

// ─── Public queries ──────────────────────────────────────────────────────────

export async function getAnnouncements() {
  return fetchList<Announcement>("announcements", { filter: { is_active: true } });
}

export async function getFeaturedAnnouncement(): Promise<Announcement | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const supabase = await client();
    const { data } = await supabase
      .from("announcements")
      .select("*")
      .eq("is_active", true)
      .eq("is_featured", true)
      .order("sort_order")
      .limit(1)
      .maybeSingle();
    return data ?? null;
  } catch {
    return null;
  }
}

export async function getImportantDates() {
  return fetchList<ImportantDate>("important_dates", { filter: { is_active: true } });
}

export async function getCountdownDate(): Promise<ImportantDate | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const supabase = await client();
    const { data } = await supabase
      .from("important_dates")
      .select("*")
      .eq("is_countdown_target", true)
      .maybeSingle();
    return data ?? null;
  } catch {
    return null;
  }
}

export async function getSpeakers(type?: string) {
  const filter: Record<string, unknown> = { is_active: true };
  if (type) filter.speaker_type = type;
  return fetchList<Speaker>("speakers", { filter });
}

export async function getCommitteeMembers(type?: string) {
  const filter: Record<string, unknown> = { is_active: true };
  if (type) filter.committee_type = type;
  return fetchList<CommitteeMember>("committee_members", { filter });
}

export async function getRegistrationCategories() {
  return fetchList<RegistrationCategory>("registration_categories", {
    filter: { is_active: true },
  });
}

export async function getProgramme(): Promise<ProgrammeDay[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const supabase = await client();
    const { data: days } = await supabase
      .from("programme_days")
      .select("*")
      .eq("is_active", true)
      .order("sort_order");
    if (!days?.length) return [];

    const { data: items } = await supabase
      .from("programme_items")
      .select("*, speaker:speakers(name, institution)")
      .eq("is_active", true)
      .order("sort_order");

    return days.map((day) => ({
      ...day,
      items: (items ?? []).filter((item) => item.day_id === day.id),
    }));
  } catch {
    return [];
  }
}

export async function getDocuments() {
  return fetchList<Document>("documents", { filter: { is_active: true } });
}

export async function getAccommodationOptions() {
  return fetchList<AccommodationOption>("accommodation_options", {
    filter: { is_active: true },
  });
}

export async function getPublications() {
  return fetchList<PublicationItem>("publication_items", { filter: { is_active: true } });
}

export async function getAwards() {
  return fetchList<Award>("awards", { filter: { is_active: true } });
}

export async function getSponsors() {
  return fetchList<Sponsor>("sponsors", { filter: { is_active: true } });
}

export async function getGalleryItems(featured?: boolean) {
  const filter: Record<string, unknown> = { is_active: true };
  if (featured) filter.is_featured = true;
  return fetchList<GalleryItem>("gallery_items", { filter });
}

export async function getFAQs(category?: string) {
  const filter: Record<string, unknown> = { is_active: true };
  if (category) filter.category = category;
  return fetchList<FAQ>("faqs", { filter });
}

export async function getSiteSettings(): Promise<Record<string, string>> {
  if (!isSupabaseConfigured) return {};
  try {
    const supabase = await client();
    const { data } = await supabase.from("site_settings").select("key,value");
    if (!data) return {};
    return Object.fromEntries(
      data.map((row) => [row.key, row.value ?? ""])
    );
  } catch {
    return {};
  }
}

// ─── Admin-only queries ───────────────────────────────────────────────────────

import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/admin/auth";

async function adminClient() {
  await requireAdmin();
  return createAdminClient();
}

export async function adminGetAll<T>(table: string): Promise<T[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const db = await adminClient();
    const { data } = await db.from(table).select("*").order("sort_order", { ascending: true });
    return (data ?? []) as T[];
  } catch {
    return [];
  }
}

export async function adminGetAbstracts(): Promise<AbstractSubmission[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const db = await adminClient();
    const { data } = await db
      .from("abstract_submissions")
      .select("*")
      .order("submitted_at", { ascending: false });
    return (data ?? []) as AbstractSubmission[];
  } catch {
    return [];
  }
}

export async function adminGetRegistrations(): Promise<EventRegistration[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const db = await adminClient();
    const { data } = await db
      .from("event_registrations")
      .select("*")
      .order("registered_at", { ascending: false });
    return (data ?? []) as EventRegistration[];
  } catch {
    return [];
  }
}

export async function adminGetInquiries(): Promise<ContactInquiry[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const db = await adminClient();
    const { data } = await db
      .from("contact_inquiries")
      .select("*")
      .order("submitted_at", { ascending: false });
    return (data ?? []) as ContactInquiry[];
  } catch {
    return [];
  }
}
