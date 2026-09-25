"use client";

import { useActionState, useState } from "react";
import type { RegistrationCategory, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertRegistrationCategory, deleteRegistrationCategory } from "@/lib/admin/actions";

export function RegistrationClient({ categories }: { categories: RegistrationCategory[] }) {
  const [editing, setEditing] = useState<RegistrationCategory | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(
    upsertRegistrationCategory, undefined
  );

  const columns = [
    { key: "name", label: "Category" },
    { key: "description", label: "Subtitle" },
    { key: "early_bird_fee", label: "Early Bird", render: (row: Record<string, unknown>) => row.early_bird_fee ? `${row.currency ?? "INR"} ${Number(row.early_bird_fee).toLocaleString()}` : "—" },
    { key: "regular_fee", label: "Regular", render: (row: Record<string, unknown>) => row.regular_fee ? `${row.currency ?? "INR"} ${Number(row.regular_fee).toLocaleString()}` : "—" },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="Registration" description="Manage attendee categories, fees, and deadlines." onAdd={() => { setEditing(null); setPanelOpen(true); }} addLabel="Add Category" />
      <div className="mt-6">
        <AdminTable columns={columns} rows={categories as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as RegistrationCategory); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteRegistrationCategory(id); }} itemLabel="category" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit Category" : "Add Category"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Name" name="name" required defaultValue={editing?.name} placeholder="Student" />
          <Field label="Subtitle" name="description" defaultValue={editing?.description} placeholder="UG / PG / PhD" />
          <Field label="Currency" name="currency" defaultValue={editing?.currency ?? "INR"} />
          <Field label="Early Bird Fee" name="early_bird_fee" type="number" defaultValue={editing?.early_bird_fee} />
          <Field label="Regular Fee" name="regular_fee" type="number" defaultValue={editing?.regular_fee} />
          <Field label="On-site Fee" name="onsite_fee" type="number" defaultValue={editing?.onsite_fee} />
          <Field label="Early Bird Deadline" name="early_bird_deadline" type="date" defaultValue={editing?.early_bird_deadline} />
          <Field label="Regular Deadline" name="regular_deadline" type="date" defaultValue={editing?.regular_deadline} />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
