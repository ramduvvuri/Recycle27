import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { AnnouncementsClient } from "@/components/admin/sections/AnnouncementsClient";
import type { Announcement } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const announcements = await adminGetAll<Announcement>("announcements");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <AnnouncementsClient announcements={announcements} />
    </AdminShell>
  );
}
