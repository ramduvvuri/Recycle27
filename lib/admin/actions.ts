"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import type { ActionResult } from "@/types/database";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function revalidateAll() {
  revalidatePath("/admin", "layout");
  revalidatePath("/", "layout");
}

async function guardedClient() {
  await requireAdmin();
  return createAdminClient();
}

// ─── Generic CRUD ─────────────────────────────────────────────────────────────

export async function adminCreate(
  table: string,
  data: Record<string, unknown>
): Promise<ActionResult> {
  try {
    const db = await guardedClient();
    const { error } = await db.from(table).insert(data);
    if (error) return { error: error.message };
    revalidateAll();
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Server error" };
  }
}

export async function adminUpdate(
  table: string,
  id: string,
  data: Record<string, unknown>
): Promise<ActionResult> {
  try {
    const db = await guardedClient();
    const { error } = await db.from(table).update(data).eq("id", id);
    if (error) return { error: error.message };
    revalidateAll();
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Server error" };
  }
}

export async function adminDelete(
  table: string,
  id: string
): Promise<ActionResult> {
  try {
    const db = await guardedClient();
    const { error } = await db.from(table).delete().eq("id", id);
    if (error) return { error: error.message };
    revalidateAll();
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Server error" };
  }
}

// ─── Announcements ────────────────────────────────────────────────────────────

export async function upsertAnnouncement(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    title: String(form.get("title") ?? "").trim(),
    body: String(form.get("body") ?? "").trim(),
    link_url: (form.get("link_url") as string) || null,
    link_label: (form.get("link_label") as string) || null,
    is_featured: form.get("is_featured") === "true",
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.title || !data.body) return { error: "Title and body are required." };
  return id ? adminUpdate("announcements", id, data) : adminCreate("announcements", data);
}

export async function deleteAnnouncement(id: string): Promise<ActionResult> {
  return adminDelete("announcements", id);
}

// ─── Important Dates ──────────────────────────────────────────────────────────

export async function upsertImportantDate(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    label: String(form.get("label") ?? "").trim(),
    date: String(form.get("date") ?? ""),
    description: (form.get("description") as string) || null,
    category: form.get("category") as string || "submission",
    is_countdown_target: form.get("is_countdown_target") === "true",
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.label || !data.date) return { error: "Label and date are required." };
  return id ? adminUpdate("important_dates", id, data) : adminCreate("important_dates", data);
}

export async function deleteImportantDate(id: string): Promise<ActionResult> {
  return adminDelete("important_dates", id);
}

// ─── Speakers ─────────────────────────────────────────────────────────────────

export async function upsertSpeaker(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    name: String(form.get("name") ?? "").trim(),
    designation: String(form.get("designation") ?? "").trim(),
    institution: String(form.get("institution") ?? "").trim(),
    country: String(form.get("country") ?? "").trim(),
    bio: (form.get("bio") as string) || null,
    topic: (form.get("topic") as string) || null,
    abstract: (form.get("abstract") as string) || null,
    speaker_type: (form.get("speaker_type") as string) || "keynote",
    image_url: (form.get("image_url") as string) || null,
    website: (form.get("website") as string) || null,
    email: (form.get("email") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.name || !data.institution)
    return { error: "Name and institution are required." };
  return id ? adminUpdate("speakers", id, data) : adminCreate("speakers", data);
}

export async function deleteSpeaker(id: string): Promise<ActionResult> {
  return adminDelete("speakers", id);
}

// ─── Committee Members ────────────────────────────────────────────────────────

export async function upsertCommitteeMember(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    name: String(form.get("name") ?? "").trim(),
    designation: (form.get("designation") as string) || null,
    institution: (form.get("institution") as string) || null,
    country: (form.get("country") as string) || null,
    committee_type: (form.get("committee_type") as string) || "organizing",
    role: (form.get("role") as string) || null,
    image_url: (form.get("image_url") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.name) return { error: "Name is required." };
  return id
    ? adminUpdate("committee_members", id, data)
    : adminCreate("committee_members", data);
}

export async function deleteCommitteeMember(id: string): Promise<ActionResult> {
  return adminDelete("committee_members", id);
}

// ─── Registration Categories ──────────────────────────────────────────────────

export async function upsertRegistrationCategory(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    name: String(form.get("name") ?? "").trim(),
    description: (form.get("description") as string) || null,
    icon_name: (form.get("icon_name") as string) || null,
    early_bird_fee: form.get("early_bird_fee") ? Number(form.get("early_bird_fee")) : null,
    regular_fee: form.get("regular_fee") ? Number(form.get("regular_fee")) : null,
    onsite_fee: form.get("onsite_fee") ? Number(form.get("onsite_fee")) : null,
    currency: (form.get("currency") as string) || "INR",
    early_bird_deadline: (form.get("early_bird_deadline") as string) || null,
    regular_deadline: (form.get("regular_deadline") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.name) return { error: "Name is required." };
  return id
    ? adminUpdate("registration_categories", id, data)
    : adminCreate("registration_categories", data);
}

export async function deleteRegistrationCategory(id: string): Promise<ActionResult> {
  return adminDelete("registration_categories", id);
}

// ─── Programme ────────────────────────────────────────────────────────────────

export async function upsertProgrammeDay(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    label: String(form.get("label") ?? "").trim(),
    date: String(form.get("date") ?? ""),
    theme: (form.get("theme") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.label || !data.date) return { error: "Label and date are required." };
  return id
    ? adminUpdate("programme_days", id, data)
    : adminCreate("programme_days", data);
}

export async function deleteProgrammeDay(id: string): Promise<ActionResult> {
  return adminDelete("programme_days", id);
}

export async function upsertProgrammeItem(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    day_id: String(form.get("day_id") ?? ""),
    time_start: String(form.get("time_start") ?? ""),
    time_end: String(form.get("time_end") ?? ""),
    title: String(form.get("title") ?? "").trim(),
    description: (form.get("description") as string) || null,
    location: (form.get("location") as string) || null,
    session_type: (form.get("session_type") as string) || "session",
    speaker_id: (form.get("speaker_id") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.day_id || !data.title) return { error: "Day and title are required." };
  return id
    ? adminUpdate("programme_items", id, data)
    : adminCreate("programme_items", data);
}

export async function deleteProgrammeItem(id: string): Promise<ActionResult> {
  return adminDelete("programme_items", id);
}

// ─── Documents ────────────────────────────────────────────────────────────────

export async function upsertDocument(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    title: String(form.get("title") ?? "").trim(),
    document_type: (form.get("document_type") as string) || "general",
    file_url: String(form.get("file_url") ?? "").trim(),
    file_format: (form.get("file_format") as string) || null,
    file_size: (form.get("file_size") as string) || null,
    label: (form.get("label") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.title || !data.file_url) return { error: "Title and file URL are required." };
  return id ? adminUpdate("documents", id, data) : adminCreate("documents", data);
}

export async function deleteDocument(id: string): Promise<ActionResult> {
  return adminDelete("documents", id);
}

// ─── Accommodation ────────────────────────────────────────────────────────────

export async function upsertAccommodation(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const featuresRaw = form.get("features") as string;
  const features = featuresRaw
    ? featuresRaw.split("\n").map((f) => f.trim()).filter(Boolean)
    : [];
  const data = {
    name: String(form.get("name") ?? "").trim(),
    description: (form.get("description") as string) || null,
    type: (form.get("type") as string) || "nearby_hotel",
    icon_name: (form.get("icon_name") as string) || null,
    features,
    price_range: (form.get("price_range") as string) || null,
    booking_url: (form.get("booking_url") as string) || null,
    contact_info: (form.get("contact_info") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.name) return { error: "Name is required." };
  return id
    ? adminUpdate("accommodation_options", id, data)
    : adminCreate("accommodation_options", data);
}

export async function deleteAccommodation(id: string): Promise<ActionResult> {
  return adminDelete("accommodation_options", id);
}

// ─── Publications ─────────────────────────────────────────────────────────────

export async function upsertPublication(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    name: String(form.get("name") ?? "").trim(),
    publisher: String(form.get("publisher") ?? "").trim(),
    description: (form.get("description") as string) || null,
    logo_url: (form.get("logo_url") as string) || null,
    website: (form.get("website") as string) || null,
    type: (form.get("type") as string) || "journal",
    is_indicative: form.get("is_indicative") === "true",
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.name || !data.publisher) return { error: "Name and publisher are required." };
  return id
    ? adminUpdate("publication_items", id, data)
    : adminCreate("publication_items", data);
}

export async function deletePublication(id: string): Promise<ActionResult> {
  return adminDelete("publication_items", id);
}

// ─── Sponsors ─────────────────────────────────────────────────────────────────

export async function upsertSponsor(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    name: String(form.get("name") ?? "").trim(),
    tier: (form.get("tier") as string) || "supporting",
    logo_url: (form.get("logo_url") as string) || "",
    website: (form.get("website") as string) || null,
    description: (form.get("description") as string) || null,
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.name) return { error: "Name is required." };
  return id ? adminUpdate("sponsors", id, data) : adminCreate("sponsors", data);
}

export async function deleteSponsor(id: string): Promise<ActionResult> {
  return adminDelete("sponsors", id);
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export async function upsertGalleryItem(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    title: String(form.get("title") ?? "").trim(),
    caption: (form.get("caption") as string) || null,
    image_url: String(form.get("image_url") ?? "").trim(),
    alt_text: String(form.get("alt_text") ?? "").trim() || String(form.get("title") ?? ""),
    category: (form.get("category") as string) || "general",
    edition: (form.get("edition") as string) || null,
    is_featured: form.get("is_featured") === "true",
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.title || !data.image_url) return { error: "Title and image URL are required." };
  return id
    ? adminUpdate("gallery_items", id, data)
    : adminCreate("gallery_items", data);
}

export async function deleteGalleryItem(id: string): Promise<ActionResult> {
  return adminDelete("gallery_items", id);
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export async function upsertFAQ(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const id = form.get("id") as string | null;
  const data = {
    question: String(form.get("question") ?? "").trim(),
    answer: String(form.get("answer") ?? "").trim(),
    category: (form.get("category") as string) || "general",
    is_featured: form.get("is_featured") === "true",
    is_active: form.get("is_active") !== "false",
    sort_order: Number(form.get("sort_order") ?? 0),
  };
  if (!data.question || !data.answer) return { error: "Question and answer are required." };
  return id ? adminUpdate("faqs", id, data) : adminCreate("faqs", data);
}

export async function deleteFAQ(id: string): Promise<ActionResult> {
  return adminDelete("faqs", id);
}

// ─── Site Settings ────────────────────────────────────────────────────────────

export async function updateSettings(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  try {
    await requireAdmin();
    const db = createAdminClient();
    const entries = Array.from(form.entries());
    const updates = entries
      .filter(([key]) => !key.startsWith("_"))
      .map(([key, value]) => ({ key, value: String(value) }));

    for (const { key, value } of updates) {
      await db
        .from("site_settings")
        .upsert({ key, value, label: key, type: "text" }, { onConflict: "key" });
    }
    revalidateAll();
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Server error" };
  }
}

// ─── Abstract submission status ───────────────────────────────────────────────

export async function updateAbstractStatus(
  id: string,
  status: string,
  notes?: string
): Promise<ActionResult> {
  return adminUpdate("abstract_submissions", id, {
    status,
    review_notes: notes ?? null,
  });
}

export async function deleteAbstractSubmission(id: string): Promise<ActionResult> {
  return adminDelete("abstract_submissions", id);
}

// ─── Registration status ──────────────────────────────────────────────────────

export async function updateRegistrationStatus(
  id: string,
  payment_status: string
): Promise<ActionResult> {
  return adminUpdate("event_registrations", id, { payment_status });
}

export async function deleteEventRegistration(id: string): Promise<ActionResult> {
  return adminDelete("event_registrations", id);
}

// ─── Contact inquiries ────────────────────────────────────────────────────────

export async function updateInquiryStatus(
  id: string,
  status: string
): Promise<ActionResult> {
  return adminUpdate("contact_inquiries", id, { status });
}

export async function deleteContactInquiry(id: string): Promise<ActionResult> {
  return adminDelete("contact_inquiries", id);
}
