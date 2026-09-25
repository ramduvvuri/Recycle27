import { guardedExport } from "@/lib/admin/csv";
import { adminGetInquiries } from "@/lib/supabase/queries";

export async function GET() {
  return guardedExport(
    async () => (await adminGetInquiries()) as unknown as Record<string, unknown>[],
    ["id", "name", "email", "subject", "message", "status", "submitted_at"],
    `recycle27_inquiries_${new Date().toISOString().slice(0, 10)}.csv`
  );
}
