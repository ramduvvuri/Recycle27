import { guardedExport } from "@/lib/admin/csv";
import { adminGetAbstracts } from "@/lib/supabase/queries";

export async function GET() {
  return guardedExport(
    async () => (await adminGetAbstracts()) as unknown as Record<string, unknown>[],
    [
      "id", "abstract_title", "author_name", "author_email",
      "affiliation", "co_authors", "theme", "status",
      "review_notes", "submitted_at",
    ],
    `recycle27_abstracts_${new Date().toISOString().slice(0, 10)}.csv`
  );
}
