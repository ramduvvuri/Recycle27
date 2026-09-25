import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetInquiries } from "@/lib/supabase/queries";
import { InquiriesClient } from "@/components/admin/sections/InquiriesClient";

export default async function Page() {
  const user = await requireAdmin();
  const inquiries = await adminGetInquiries();
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <InquiriesClient inquiries={inquiries} />
    </AdminShell>
  );
}
