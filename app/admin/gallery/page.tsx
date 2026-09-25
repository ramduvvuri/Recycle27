import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminGetAll } from "@/lib/supabase/queries";
import { GalleryClient } from "@/components/admin/sections/GalleryClient";
import type { GalleryItem } from "@/types/database";

export default async function Page() {
  const user = await requireAdmin();
  const items = await adminGetAll<GalleryItem>("gallery_items");
  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <GalleryClient items={items} />
    </AdminShell>
  );
}
