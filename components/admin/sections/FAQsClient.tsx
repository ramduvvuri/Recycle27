"use client";

import { useActionState, useState } from "react";
import type { FAQ, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertFAQ, deleteFAQ } from "@/lib/admin/actions";

const FAQ_CATEGORIES = [
  { value: "general", label: "General" },
  { value: "registration", label: "Registration" },
  { value: "abstract", label: "Abstract Submission" },
  { value: "programme", label: "Programme" },
  { value: "travel", label: "Travel & Accommodation" },
  { value: "publications", label: "Publications & Awards" },
  { value: "sponsorship", label: "Sponsorship" },
];

export function FAQsClient({ faqs }: { faqs: FAQ[] }) {
  const [editing, setEditing] = useState<FAQ | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(upsertFAQ, undefined);

  const columns = [
    { key: "question", label: "Question", render: (row: Record<string, unknown>) => <span className="line-clamp-2 max-w-sm text-xs">{String(row.question)}</span> },
    { key: "category", label: "Category" },
    { key: "is_featured", label: "Featured", render: (row: Record<string, unknown>) => row.is_featured ? <StatusBadge active label="Featured" /> : <span className="text-gray-400 text-xs">—</span> },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="FAQs" description="Manage frequently asked questions shown on the FAQ page." onAdd={() => { setEditing(null); setPanelOpen(true); }} addLabel="Add FAQ" />
      <div className="mt-6">
        <AdminTable columns={columns} rows={faqs as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as FAQ); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteFAQ(id); }} itemLabel="FAQ" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit FAQ" : "Add FAQ"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Question" name="question" required defaultValue={editing?.question} placeholder="What is RECYCLE27?" />
          <Field label="Answer" name="answer" required rows={5} defaultValue={editing?.answer} />
          <Field label="Category" name="category" options={FAQ_CATEGORIES} defaultValue={editing?.category} />
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
