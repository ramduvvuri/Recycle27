"use client";

import { useActionState, useState } from "react";
import type { AccommodationOption, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertAccommodation, deleteAccommodation } from "@/lib/admin/actions";

const ACCOM_TYPES = [
  { value: "campus_guesthouse", label: "Campus Guest House" },
  { value: "campus_hostel", label: "Campus Hostel" },
  { value: "nearby_hotel", label: "Nearby Hotel" },
];

export function AccommodationClient({ options }: { options: AccommodationOption[] }) {
  const [editing, setEditing] = useState<AccommodationOption | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(upsertAccommodation, undefined);

  const columns = [
    { key: "name", label: "Name" },
    { key: "type", label: "Type" },
    { key: "price_range", label: "Price Range" },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  return (
    <>
      <AdminSectionHeader title="Accommodation" description="Manage campus and nearby hotel options for conference participants." onAdd={() => { setEditing(null); setPanelOpen(true); }} addLabel="Add Option" />
      <div className="mt-6">
        <AdminTable columns={columns} rows={options as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setEditing(row as unknown as AccommodationOption); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteAccommodation(id); }} itemLabel="option" />
      </div>
      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setEditing(null); }} title={editing ? "Edit Option" : "Add Option"}>
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field label="Name" name="name" required defaultValue={editing?.name} placeholder="IITG Guest House" />
          <Field label="Description" name="description" rows={2} defaultValue={editing?.description} />
          <Field label="Type" name="type" options={ACCOM_TYPES} defaultValue={editing?.type} />
          <Field label="Price Range" name="price_range" defaultValue={editing?.price_range} placeholder="₹1,500 – ₹2,500 / night" />
          <Field label="Features (one per line)" name="features" rows={4} defaultValue={editing?.features?.join("\n")} placeholder={"Wi-Fi\nAC Rooms\nDining"} />
          <Field label="Booking URL" name="booking_url" type="url" defaultValue={editing?.booking_url} />
          <Field label="Contact Info" name="contact_info" defaultValue={editing?.contact_info} placeholder="+91 361 258 xxxx" />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editing?.is_active ?? true} />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
