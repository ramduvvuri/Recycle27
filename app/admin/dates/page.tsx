import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { ImportantDatesClient } from "@/components/admin/sections/ImportantDatesClient";
import type { ImportantDate } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const dates = await adminGetAll<ImportantDate>("important_dates");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <ImportantDatesClient dates={dates} />
    </AdminShell>
  );
}
