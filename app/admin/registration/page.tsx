import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { RegistrationClient } from "@/components/admin/sections/RegistrationClient";
import type { RegistrationCategory } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const categories = await adminGetAll<RegistrationCategory>("registration_categories");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <RegistrationClient categories={categories} />
    </AdminShell>
  );
}
