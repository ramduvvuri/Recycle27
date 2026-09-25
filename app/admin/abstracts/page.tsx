import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAbstracts } from "@/lib/supabase/queries";
import { AbstractsClient } from "@/components/admin/sections/AbstractsClient";

export default async function Page() {
  const user = await requireAdmin();
  const abstracts = await adminGetAbstracts();
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <AbstractsClient abstracts={abstracts} />
    </AdminShell>
  );
}
