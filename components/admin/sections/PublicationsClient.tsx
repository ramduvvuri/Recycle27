"use client";

import { useActionState, useState } from "react";
import type { PublicationItem, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertPublication, deletePublication } from "@/lib/admin/actions";

const PUB_TYPES = [
  { value: "journal", label: "Journal" },
  { value: "proceedings", label: "Proceedings" },
  { value: "partner", label: "Partner Publisher" },
];

export function PublicationsClient({ publications }: { publications: PublicationItem[] }) {
  const [editing, setEditing] = useState<PublicationItem | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(upsertPublication, undefined);

  const columns = [
    { key: "name", label: "Publication" },
    { key: "publisher", label: "Publisher" },
    { key: "type", label: "Type" },
    { key: "is_indicative", label: "Indicative", render: (row: Record<string, unknown>) => row.is_indicative ? <StatusBadge active label="Indicative" /> : <span className="text-gray-400 text-xs">—</span> },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="Publications" description="Manage publication opportunities and journal partners." onAdd={() => { setEditing(null); setPanelOpen(true); }} />
      <div className="mt-6">
        <AdminTable columns={columns} rows={publications as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as PublicationItem); setPanelOpen(true); }}
          onDelete={async (id) => { await deletePublication(id); }} itemLabel="publication" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit Publication" : "Add Publication"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Publication Name" name="name" required defaultValue={editing?.name} />
          <Field label="Publisher" name="publisher" required defaultValue={editing?.publisher} />
          <Field label="Description" name="description" rows={3} defaultValue={editing?.description} />
          <Field label="Type" name="type" options={PUB_TYPES} defaultValue={editing?.type} />
          <Field label="Logo URL" name="logo_url" defaultValue={editing?.logo_url} />
          <Field label="Website" name="website" type="url" defaultValue={editing?.website} />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Is Indicative (subject to confirmation)" name="is_indicative" defaultValue={editing?.is_indicative ?? true} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
