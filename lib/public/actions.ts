"use server";

import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/admin/auth";
import type { ActionResult } from "@/types/database";

// ─── Contact form ─────────────────────────────────────────────────────────────

export async function submitContactInquiry(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !subject || !message)
    return { error: "All fields are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Please enter a valid email address." };
  if (message.length < 10)
    return { error: "Message must be at least 10 characters." };

  if (!isSupabaseConfigured) {
    // Graceful degradation when Supabase is not yet configured
    return { success: true };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("contact_inquiries").insert({
      name,
      email,
      subject,
      message,
      status: "unread",
    });
    if (error) return { error: "Failed to send message. Please try again." };
    return { success: true };
  } catch {
    return { error: "Failed to send message. Please try again later." };
  }
}

// ─── Abstract submission ──────────────────────────────────────────────────────

export async function submitAbstract(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const author_name = String(form.get("author_name") ?? "").trim();
  const author_email = String(form.get("author_email") ?? "").trim();
  const affiliation = String(form.get("affiliation") ?? "").trim();
  const abstract_title = String(form.get("abstract_title") ?? "").trim();
  const theme = String(form.get("theme") ?? "").trim();
  const co_authors = (form.get("co_authors") as string) || null;
  const abstract_text = (form.get("abstract_text") as string) || null;

  if (!author_name || !author_email || !affiliation || !abstract_title || !theme)
    return { error: "All required fields must be filled." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(author_email))
    return { error: "Please enter a valid email address." };

  if (!isSupabaseConfigured) return { success: true };

  try {
    const supabase = await createClient();

    // Handle PDF upload if provided
    let pdf_url: string | null = null;
    const pdfFile = form.get("pdf") as File | null;
    if (pdfFile && pdfFile.size > 0) {
      if (pdfFile.size > 10 * 1024 * 1024)
        return { error: "PDF file must be under 10MB." };
      if (pdfFile.type !== "application/pdf")
        return { error: "Only PDF files are accepted." };

      const filename = `${Date.now()}-${pdfFile.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("abstracts")
        .upload(filename, pdfFile, { contentType: "application/pdf" });
      if (uploadError) return { error: "Failed to upload PDF. Please try again." };
      pdf_url = uploadData.path;
    }

    const { error } = await supabase.from("abstract_submissions").insert({
      author_name,
      author_email,
      affiliation,
      co_authors,
      abstract_title,
      theme,
      abstract_text,
      pdf_url,
      status: "submitted",
    });
    if (error) return { error: "Failed to submit abstract. Please try again." };
    return { success: true };
  } catch {
    return { error: "Submission failed. Please try again later." };
  }
}

// ─── Event registration ───────────────────────────────────────────────────────

export async function submitRegistration(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const full_name = String(form.get("full_name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const institution = String(form.get("institution") ?? "").trim();
  const phone = (form.get("phone") as string) || null;
  const category = String(form.get("category") ?? "").trim();
  const payment_reference = (form.get("payment_reference") as string) || null;

  if (!full_name || !email || !institution || !category)
    return { error: "All required fields must be filled." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Please enter a valid email address." };

  if (!isSupabaseConfigured) return { success: true };

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("event_registrations").insert({
      full_name,
      email,
      institution,
      phone,
      category,
      payment_reference,
      payment_status: "pending",
    });
    if (error) return { error: "Registration failed. Please try again." };
    return { success: true };
  } catch {
    return { error: "Registration failed. Please try again later." };
  }
}
