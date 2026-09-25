import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { AccommodationClient } from "@/components/admin/sections/AccommodationClient";
import type { AccommodationOption } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const options = await adminGetAll<AccommodationOption>("accommodation_options");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <AccommodationClient options={options} />
    </AdminShell>
  );
}
