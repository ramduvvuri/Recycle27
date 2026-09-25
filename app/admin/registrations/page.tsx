import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetRegistrations } from "@/lib/supabase/queries";
import { RegistrationsClient } from "@/components/admin/sections/RegistrationsClient";

export default async function Page() {
  const user = await requireAdmin();
  const registrations = await adminGetRegistrations();
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <RegistrationsClient registrations={registrations} />
    </AdminShell>
  );
}
