import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { FAQsClient } from "@/components/admin/sections/FAQsClient";
import type { FAQ } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const faqs = await adminGetAll<FAQ>("faqs");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <FAQsClient faqs={faqs} />
    </AdminShell>
  );
}
