"use client";

import { useActionState, useState } from "react";
import type { Document, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertDocument, deleteDocument } from "@/lib/admin/actions";

const DOC_TYPES = [
  { value: "brochure", label: "Brochure" },
  { value: "template", label: "Abstract Template" },
  { value: "programme", label: "Programme Schedule" },
  { value: "circular", label: "Conference Circular" },
  { value: "general", label: "General" },
];

export function DocumentsClient({ documents }: { documents: Document[] }) {
  const [editing, setEditing] = useState<Document | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(upsertDocument, undefined);

  const columns = [
    { key: "title", label: "Title" },
    { key: "document_type", label: "Type" },
    { key: "file_format", label: "Format" },
    { key: "file_url", label: "URL", render: (row: Record<string, unknown>) => <a href={String(row.file_url)} target="_blank" rel="noopener noreferrer" className="text-primary-emerald hover:underline text-xs">View →</a> },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="Documents" description="Manage downloadable files: brochures, templates, and programme PDFs." onAdd={() => { setEditing(null); setPanelOpen(true); }} addLabel="Add Document" />
      <div className="mt-6">
        <AdminTable columns={columns} rows={documents as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as Document); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteDocument(id); }} itemLabel="document" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit Document" : "Add Document"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Title" name="title" required defaultValue={editing?.title} />
          <Field label="Document Type" name="document_type" options={DOC_TYPES} defaultValue={editing?.document_type} />
          <Field label="File URL (from Supabase Storage or external)" name="file_url" required defaultValue={editing?.file_url} placeholder="https://…" />
          <Field label="File Format" name="file_format" defaultValue={editing?.file_format ?? "PDF"} placeholder="PDF / DOCX / ZIP" />
          <Field label="Button Label" name="label" defaultValue={editing?.label} placeholder="Download Brochure" />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
