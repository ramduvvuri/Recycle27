import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { CommitteesClient } from "@/components/admin/sections/CommitteesClient";
import type { CommitteeMember } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const members = await adminGetAll<CommitteeMember>("committee_members");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <CommitteesClient members={members} />
    </AdminShell>
  );
}
