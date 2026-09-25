"use client";

import { useActionState, useState } from "react";
import type { ProgrammeDay, ProgrammeItem, ActionResult } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field,
  ToggleField, SubmitButton, FormAlert, StatusBadge,
} from "@/components/admin/AdminUI";
import { upsertProgrammeDay, deleteProgrammeDay, upsertProgrammeItem, deleteProgrammeItem } from "@/lib/admin/actions";

const SESSION_TYPES = [
  { value: "registration", label: "Registration" },
  { value: "keynote", label: "Keynote" },
  { value: "session", label: "Session" },
  { value: "panel", label: "Panel" },
  { value: "break", label: "Break" },
  { value: "social", label: "Social" },
  { value: "workshop", label: "Workshop" },
];

export function ProgrammeClient({ days }: { days: ProgrammeDay[] }) {
  const [activeTab, setActiveTab] = useState<"days" | "items">("days");
  const [editingDay, setEditingDay] = useState<ProgrammeDay | null>(null);
  const [editingItem, setEditingItem] = useState<ProgrammeItem | null>(null);
  const [dayPanelOpen, setDayPanelOpen] = useState(false);
  const [itemPanelOpen, setItemPanelOpen] = useState(false);
  const [dayResult, dayAction, dayPending] = useActionState<ActionResult | undefined, FormData>(upsertProgrammeDay, undefined);
  const [itemResult, itemAction, itemPending] = useActionState<ActionResult | undefined, FormData>(upsertProgrammeItem, undefined);

  const allItems = days.flatMap((d) => (d.items ?? []).map((item) => ({ ...item, day_label: d.label })));

  const dayColumns = [
    { key: "label", label: "Day" },
    { key: "date", label: "Date" },
    { key: "theme", label: "Theme" },
    { key: "is_active", label: "Status", render: (row: Record<string, unknown>) => <StatusBadge active={Boolean(row.is_active)} /> },
  ];

  const itemColumns = [
    { key: "day_label", label: "Day" },
    { key: "time_start", label: "Start" },
    { key: "time_end", label: "End" },
    { key: "title", label: "Session Title" },
    { key: "session_type", label: "Type" },
    { key: "location", label: "Location" },
  ];

  return (
    <>
      <AdminSectionHeader
        title="Programme"
        description="Build the conference schedule: manage days and individual sessions."
        onAdd={() => {
          if (activeTab === "days") { setEditingDay(null); setDayPanelOpen(true); }
          else { setEditingItem(null); setItemPanelOpen(true); }
        }}
        addLabel={activeTab === "days" ? "Add Day" : "Add Session"}
      />

      {/* Tabs */}
      <div className="mt-6 flex gap-2 border-b border-gray-200">
        {(["days", "items"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? "border-b-2 border-primary-emerald text-primary-emerald"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab === "days" ? `Conference Days (${days.length})` : `Sessions (${allItems.length})`}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "days" ? (
          <AdminTable
            columns={dayColumns}
            rows={days as unknown as Record<string, unknown>[]}
            onEdit={(row) => { setEditingDay(row as unknown as ProgrammeDay); setDayPanelOpen(true); }}
            onDelete={async (id) => { await deleteProgrammeDay(id); }}
            itemLabel="day"
          />
        ) : (
          <AdminTable
            columns={itemColumns}
            rows={allItems as unknown as Record<string, unknown>[]}
            onEdit={(row) => { setEditingItem(row as unknown as ProgrammeItem); setItemPanelOpen(true); }}
            onDelete={async (id) => { await deleteProgrammeItem(id); }}
            itemLabel="session"
          />
        )}
      </div>

      {/* Day Form */}
      <AdminFormPanel open={dayPanelOpen} onClose={() => { setDayPanelOpen(false); setEditingDay(null); }} title={editingDay ? "Edit Day" : "Add Day"}>
        <form action={dayAction} className="space-y-4">
          {editingDay && <input type="hidden" name="id" value={editingDay.id} />}
          <Field label="Label" name="label" required defaultValue={editingDay?.label} placeholder="Day 1" />
          <Field label="Date" name="date" type="date" required defaultValue={editingDay?.date} />
          <Field label="Theme / Title" name="theme" defaultValue={editingDay?.theme} placeholder="Circular Economy & Policy" />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editingDay?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editingDay?.is_active ?? true} />
          <FormAlert result={dayResult} />
          <SubmitButton pending={dayPending} />
        </form>
      </AdminFormPanel>

      {/* Item Form */}
      <AdminFormPanel open={itemPanelOpen} onClose={() => { setItemPanelOpen(false); setEditingItem(null); }} title={editingItem ? "Edit Session" : "Add Session"}>
        <form action={itemAction} className="space-y-4">
          {editingItem && <input type="hidden" name="id" value={editingItem.id} />}
          <Field
            label="Day"
            name="day_id"
            options={days.map((d) => ({ value: d.id, label: `${d.label} — ${d.date}` }))}
            defaultValue={editingItem?.day_id ?? days[0]?.id}
          />
          <Field label="Session Title" name="title" required defaultValue={editingItem?.title} placeholder="Keynote: Circular Economy" />
          <Field label="Start Time" name="time_start" type="time" required defaultValue={editingItem?.time_start} />
          <Field label="End Time" name="time_end" type="time" required defaultValue={editingItem?.time_end} />
          <Field label="Session Type" name="session_type" options={SESSION_TYPES} defaultValue={editingItem?.session_type} />
          <Field label="Location / Venue" name="location" defaultValue={editingItem?.location} placeholder="Auditorium / Hall A" />
          <Field label="Description" name="description" rows={3} defaultValue={editingItem?.description} />
          <Field label="Sort Order" name="sort_order" type="number" defaultValue={editingItem?.sort_order ?? 0} />
          <ToggleField label="Active" name="is_active" defaultValue={editingItem?.is_active ?? true} />
          <FormAlert result={itemResult} />
          <SubmitButton pending={itemPending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
