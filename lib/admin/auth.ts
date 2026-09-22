import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const isSupabaseConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function requireAdmin() {
  if (!isSupabaseConfigured) redirect("/admin/login?error=configuration");
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const approvedEmails = (process.env.ADMIN_EMAILS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
  const hasRole = user?.app_metadata?.role === "admin" || user?.user_metadata?.role === "admin";
  if (!user || (!hasRole && !approvedEmails.includes(user.email?.toLowerCase() ?? ""))) redirect("/admin/login?error=unauthorized");
  return user;
}
