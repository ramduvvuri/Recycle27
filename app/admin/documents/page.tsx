import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { DocumentsClient } from "@/components/admin/sections/DocumentsClient";
import type { Document } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const documents = await adminGetAll<Document>("documents");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <DocumentsClient documents={documents} />
    </AdminShell>
  );
}
