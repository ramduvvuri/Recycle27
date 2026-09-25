"use client";

import { useActionState, useState } from "react";
import type { CommitteeMember, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertCommitteeMember, deleteCommitteeMember } from "@/lib/admin/actions";

const TYPES = [
  { value: "organizing", label: "Organizing" },
  { value: "scientific", label: "Scientific" },
  { value: "advisory", label: "Advisory" },
  { value: "technical", label: "Technical" },
];

export function CommitteesClient({ members }: { members: CommitteeMember[] }) {
  const [editing, setEditing] = useState<CommitteeMember | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(
    upsertCommitteeMember, undefined
  );

  const columns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "institution", label: "Institution" },
    { key: "committee_type", label: "Committee" },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="Committees" description="Manage organizing, scientific, advisory, and technical committee members." onAdd={() => { setEditing(null); setPanelOpen(true); }} />
      <div className="mt-6">
        <AdminTable columns={columns} rows={members as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as CommitteeMember); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteCommitteeMember(id); }} itemLabel="member" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit Member" : "Add Member"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Name" name="name" required defaultValue={editing?.name} />
          <Field label="Designation" name="designation" defaultValue={editing?.designation} placeholder="Professor / Dr." />
          <Field label="Institution" name="institution" defaultValue={editing?.institution} />
          <Field label="Country" name="country" defaultValue={editing?.country} />
          <Field label="Committee Type" name="committee_type" options={TYPES} defaultValue={editing?.committee_type} />
          <Field label="Role" name="role" defaultValue={editing?.role} placeholder="Chair / Member / Co-Chair" />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
