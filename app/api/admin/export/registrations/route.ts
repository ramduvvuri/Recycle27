import { guardedExport } from "@/lib/admin/csv";
import { adminGetRegistrations } from "@/lib/supabase/queries";

export async function GET() {
  return guardedExport(
    async () => (await adminGetRegistrations()) as unknown as Record<string, unknown>[],
    [
      "id", "full_name", "email", "institution", "phone",
      "category", "payment_reference", "payment_status",
      "amount_paid", "notes", "registered_at",
    ],
    `recycle27_registrations_${new Date().toISOString().slice(0, 10)}.csv`
  );
}
