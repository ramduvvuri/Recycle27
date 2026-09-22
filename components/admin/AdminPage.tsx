import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "./AdminShell";
import { AdminCollection } from "./AdminCollection";

const defaults = ["Content item", "Not yet configured", "Active"];
export async function AdminPage({ title, description, columns, rows = [defaults] }: { title: string; description: string; columns: string[]; rows?: string[][] }) {
  const user = await requireAdmin();
  return <AdminShell email={user.email ?? "Administrator"}><AdminCollection title={title} description={description} columns={columns} rows={rows} /></AdminShell>;
}
