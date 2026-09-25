"use client";

import { useActionState, useState } from "react";
import type { Sponsor, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertSponsor, deleteSponsor } from "@/lib/admin/actions";

const TIERS = [
  { value: "platinum", label: "Platinum" },
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
  { value: "supporting", label: "Supporting" },
];

export function SponsorsClient({ sponsors }: { sponsors: Sponsor[] }) {
  const [editing, setEditing] = useState<Sponsor | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(upsertSponsor, undefined);

  const columns = [
    { key: "name", label: "Organization" },
    { key: "tier", label: "Tier" },
    { key: "website", label: "Website", render: (row: Record<string, unknown>) => row.website ? <a href={String(row.website)} target="_blank" rel="noopener noreferrer" className="text-primary-emerald hover:underline text-xs">{String(row.website)}</a> : <span className="text-gray-400">—</span> },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="Sponsors" description="Manage sponsors grouped by tier. Add logo URL from Supabase Storage." onAdd={() => { setEditing(null); setPanelOpen(true); }} />
      <div className="mt-6">
        <AdminTable columns={columns} rows={sponsors as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as Sponsor); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteSponsor(id); }} itemLabel="sponsor" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit Sponsor" : "Add Sponsor"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Organization Name" name="name" required defaultValue={editing?.name} />
          <Field label="Tier" name="tier" options={TIERS} defaultValue={editing?.tier} />
          <Field label="Logo URL (from Supabase Storage)" name="logo_url" required defaultValue={editing?.logo_url} placeholder="https://…" />
          <Field label="Website" name="website" type="url" defaultValue={editing?.website} />
          <Field label="Description" name="description" rows={2} defaultValue={editing?.description} />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
