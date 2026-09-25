"use client";

import { useActionState, useState } from "react";
import type { ImportantDate, ActionResult } from "@/types/database";
import {
  AdminTable,
  AdminSectionHeader,
  AdminFormPanel,
  Field,
  ToggleField,
  SubmitButton,
  FormAlert,
  StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertImportantDate, deleteImportantDate } from "@/lib/admin/actions";

const CATEGORIES = [
  { value: "submission", label: "Submission" },
  { value: "notification", label: "Notification" },
  { value: "registration", label: "Registration" },
  { value: "conference", label: "Conference" },
];

export function ImportantDatesClient({ dates }: { dates: ImportantDate[] }) {
  const [editing, setEditing] = useState<ImportantDate | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(
    upsertImportantDate,
    undefined
  );

  const columns = [
    { key: "label", label: "Milestone" },
    { key: "date", label: "Date" },
    { key: "category", label: "Category" },
    {
      key: "is_countdown_target",
      label: "Countdown",
      render: (row: Record<string, unknown>) =>
        row.is_countdown_target ? <StatusBadge active label="Countdown" /> : <span className="text-gray-400 text-xs">—</span>,
    },
    {
      key: "is_active",
      label: "Status",
      render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} />,
    },
  ];

  return (
    <>
      <AdminSectionHeader
        title="Important Dates"
        description="Manage submission deadlines, notification dates, and conference dates."
        onAdd={() => { setEditing(null); setPanelOpen(true); }}
      />
      <div className="mt-6">
        <AdminTable
          columns={columns}
          rows={dates as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as ImportantDate); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteImportantDate(id); }}
          itemLabel="date"
        />
      </div>
      <AdminFormPanel
        open={panelOpen}
        onClose={() => { setPanelOpen(false); setEditing(null); }}
        title={editing ? "Edit Date" : "Add Date"}
      >
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Label" name="label" required defaultValue={editing?.label} placeholder="e.g. Abstract Submission Deadline" />
          <Field label="Date" name="date" type="date" required defaultValue={editing?.date} />
          <Field label="Description" name="description" rows={2} defaultValue={editing?.description} />
          <Field label="Category" name="category" options={CATEGORIES} defaultValue={editing?.category} />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Is Countdown Target" name="is_countdown_target" defaultValue={editing?.is_countdown_target ?? false} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
