"use client";

import { useActionState, useState } from "react";
import type { Speaker, ActionResult } from "@/types/database";
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
import { upsertSpeaker, deleteSpeaker } from "@/lib/admin/actions";

const TYPES = [
  { value: "keynote", label: "Keynote" },
  { value: "plenary", label: "Plenary" },
  { value: "invited", label: "Invited" },
  { value: "other", label: "Other" },
];

export function SpeakersClient({ speakers }: { speakers: Speaker[] }) {
  const [editing, setEditing] = useState<Speaker | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(
    upsertSpeaker,
    undefined
  );

  const columns = [
    { key: "name", label: "Name" },
    { key: "institution", label: "Institution" },
    { key: "country", label: "Country" },
    { key: "speaker_type", label: "Type" },
    {
      key: "is_active",
      label: "Status",
      render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} />,
    },
  ];

  return (
    <>
      <AdminSectionHeader
        title="Speakers"
        description="Manage speaker profiles, types, affiliations, and session topics."
        onAdd={() => { setEditing(null); setPanelOpen(true); }}
      />
      <div className="mt-6">
        <AdminTable
          columns={columns}
          rows={speakers as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as Speaker); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteSpeaker(id); }}
          itemLabel="speaker"
        />
      </div>
      <AdminFormPanel
        open={panelOpen}
        onClose={() => { setPanelOpen(false); setEditing(null); }}
        title={editing ? "Edit Speaker" : "Add Speaker"}
      >
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Full Name" name="name" required defaultValue={editing?.name} placeholder="Prof. Jane Smith" />
          <Field label="Designation" name="designation" required defaultValue={editing?.designation} placeholder="Professor, Department of…" />
          <Field label="Institution" name="institution" required defaultValue={editing?.institution} placeholder="University of…" />
          <Field label="Country" name="country" required defaultValue={editing?.country} placeholder="India" />
          <Field label="Speaker Type" name="speaker_type" options={TYPES} defaultValue={editing?.speaker_type} />
          <Field label="Session Topic" name="topic" defaultValue={editing?.topic} placeholder="Circular Economy in Urban Planning" />
          <Field label="Abstract (of talk)" name="abstract" rows={3} defaultValue={editing?.abstract} />
          <Field label="Bio" name="bio" rows={4} defaultValue={editing?.bio} />
          <Field label="Image URL (from Supabase Storage)" name="image_url" defaultValue={editing?.image_url} placeholder="https://…" />
          <Field label="Website" name="website" type="url" defaultValue={editing?.website} placeholder="https://…" />
          <Field label="Email (internal only)" name="email" type="email" defaultValue={editing?.email} />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
