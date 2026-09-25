"use client";

import { useActionState, useState } from "react";
import type { Announcement, ActionResult } from "@/types/database";
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
import { upsertAnnouncement, deleteAnnouncement } from "@/lib/admin/actions";

export function AnnouncementsClient({
  announcements,
}: {
  announcements: Announcement[];
}) {
  const [editing, setEditing] = useState<Announcement | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [result, action, pending] = useActionState<ActionResult | undefined, FormData>(
    upsertAnnouncement,
    undefined
  );

  function openNew() {
    setEditing(null);
    setPanelOpen(true);
  }

  function openEdit(row: Record<string, unknown>) {
    setEditing(row as unknown as Announcement);
    setPanelOpen(true);
  }

  function closePanel() {
    setPanelOpen(false);
    setEditing(null);
  }

  const columns = [
    { key: "title", label: "Title" },
    {
      key: "body",
      label: "Message",
      render: (row: Record<string, unknown>) => (
        <span className="line-clamp-2 max-w-xs text-xs">{String(row.body)}</span>
      ),
    },
    {
      key: "is_featured",
      label: "Featured",
      render: (row: Record<string, unknown>) =>
        row.is_featured ? (
          <StatusBadge active label="Featured" />
        ) : (
          <span className="text-xs text-gray-400">—</span>
        ),
    },
    {
      key: "is_active",
      label: "Status",
      render: (row: Record<string, unknown>) => (
        <StatusBadge active={Boolean(row.is_active)} />
      ),
    },
    { key: "sort_order", label: "Sort" },
  ];

  return (
    <>
      <AdminSectionHeader
        title="Announcements"
        description="Publish time-sensitive updates shown across the conference website."
        onAdd={openNew}
      />

      {result?.success && !panelOpen && (
        <FormAlert result={{ success: true }} />
      )}

      <div className="mt-6">
        <AdminTable
          columns={columns}
          rows={announcements as unknown as Record<string, unknown>[]}
          onEdit={openEdit}
          onDelete={async (id) => { await deleteAnnouncement(id); }}
          itemLabel="announcement"
        />
      </div>

      <AdminFormPanel
        open={panelOpen}
        onClose={closePanel}
        title={editing ? "Edit Announcement" : "New Announcement"}
      >
        <form action={action} className="space-y-4">
          {editing && <input type="hidden" name="id" value={editing.id} />}
          <Field
            label="Title"
            name="title"
            required
            defaultValue={editing?.title}
            placeholder="e.g. Abstract submission deadline extended"
          />
          <Field
            label="Message"
            name="body"
            required
            rows={4}
            defaultValue={editing?.body}
            placeholder="Full announcement text…"
          />
          <Field
            label="Link URL"
            name="link_url"
            type="url"
            defaultValue={editing?.link_url}
            placeholder="https://…"
          />
          <Field
            label="Link Label"
            name="link_label"
            defaultValue={editing?.link_label}
            placeholder="e.g. Learn more"
          />
          <Field
            label="Sort Order"
            name="sort_order"
            type="number"
            defaultValue={editing?.sort_order ?? 0}
          />
          <ToggleField
            label="Is Featured (shown prominently)"
            name="is_featured"
            defaultValue={editing?.is_featured ?? false}
          />
          <ToggleField
            label="Active"
            name="is_active"
            defaultValue={editing?.is_active ?? true}
          />
          <FormAlert result={result} />
          <SubmitButton pending={pending} />
        </form>
      </AdminFormPanel>
    </>
  );
}
