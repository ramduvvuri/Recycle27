import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { getProgramme } from "@/lib/supabase/queries";
import { ProgrammeClient } from "@/components/admin/sections/ProgrammeClient";

export default async function Page() {
  const user = await requireAdmin();
  const days = await getProgramme();
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <ProgrammeClient days={days} />
    </AdminShell>
  );
}
