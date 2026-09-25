"use client";

import { useActionState, useState } from "react";
import type { GalleryItem, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertGalleryItem, deleteGalleryItem } from "@/lib/admin/actions";

export function GalleryClient({ items }: { items: GalleryItem[] }) {
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(upsertGalleryItem, undefined);

  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "edition", label: "Edition" },
    { key: "is_featured", label: "Featured", render: (row: Record<string, unknown>) => row.is_featured ? <StatusBadge active label="Featured" /> : <span className="text-gray-400 text-xs">—</span> },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="Gallery" description="Manage conference photos. Add image URLs from Supabase Storage." onAdd={() => { setEditing(null); setPanelOpen(true); }} addLabel="Add Photo" />
      <div className="mt-6">
        <AdminTable columns={columns} rows={items as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as GalleryItem); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteGalleryItem(id); }} itemLabel="photo" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit Photo" : "Add Photo"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Title" name="title" required defaultValue={editing?.title} />
          <Field label="Caption" name="caption" defaultValue={editing?.caption} />
          <Field label="Image URL (from Supabase Storage)" name="image_url" required defaultValue={editing?.image_url} placeholder="https://…" />
          <Field label="Alt Text (accessibility)" name="alt_text" required defaultValue={editing?.alt_text} />
          <Field label="Category" name="category" defaultValue={editing?.category ?? "general"} placeholder="Inauguration / Technical Sessions" />
          <Field label="Edition" name="edition" defaultValue={editing?.edition} placeholder="RECYCLE26 / RECYCLE27" />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Featured" name="is_featured" defaultValue={editing?.is_featured ?? false} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
