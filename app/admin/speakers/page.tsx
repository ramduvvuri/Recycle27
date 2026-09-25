import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { SpeakersClient } from "@/components/admin/sections/SpeakersClient";
import type { Speaker } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const speakers = await adminGetAll<Speaker>("speakers");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <SpeakersClient speakers={speakers} />
    </AdminShell>
  );
}
