import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { PublicationsClient } from "@/components/admin/sections/PublicationsClient";
import type { PublicationItem } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const publications = await adminGetAll<PublicationItem>("publication_items");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <PublicationsClient publications={publications} />
    </AdminShell>
  );
}
