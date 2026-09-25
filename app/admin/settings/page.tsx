import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { getSiteSettings } from "@/lib/supabase/queries";
import { SettingsClient } from "@/components/admin/sections/SettingsClient";

export default async function Page() {
  const user = await requireAdmin();
  const settings = await getSiteSettings();
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <SettingsClient settings={settings} />
    </AdminShell>
  );
}
