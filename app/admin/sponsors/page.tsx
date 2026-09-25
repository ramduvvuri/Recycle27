import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { SponsorsClient } from "@/components/admin/sections/SponsorsClient";
import type { Sponsor } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const sponsors = await adminGetAll<Sponsor>("sponsors");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <SponsorsClient sponsors={sponsors} />
    </AdminShell>
  );
}
