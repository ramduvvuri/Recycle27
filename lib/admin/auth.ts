import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const _url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const _key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
// Only treat as configured when real (non-placeholder) credentials are provided
export const isSupabaseConfigured =
  Boolean(_url && _key) &&
  !_url.includes("mock") &&
  !_key.startsWith("mock") &&
  _key.length > 20;

export async function requireAdmin() {
  if (!isSupabaseConfigured) redirect("/admin/login?error=configuration");
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const approvedEmails = (process.env.ADMIN_EMAILS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
  const hasRole = user?.app_metadata?.role === "admin" || user?.user_metadata?.role === "admin";
  if (!user || (!hasRole && !approvedEmails.includes(user.email?.toLowerCase() ?? ""))) redirect("/admin/login?error=unauthorized");
  return user;
}
