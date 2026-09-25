"use client";

import { useTransition, useState } from "react";
import type { ContactInquiry } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field, SubmitButton, FormAlert,
} from "@/components/admin/AdminUI";
import { updateInquiryStatus, deleteContactInquiry } from "@/lib/admin/actions";
import { Download } from "lucide-react";

const STATUS_OPTIONS = [
  { value: "unread", label: "Unread" },
  { value: "read", label: "Read" },
  { value: "replied", label: "Replied" },
];

const STATUS_COLORS: Record<string, string> = {
  unread: "bg-blue-50 text-blue-700 font-semibold",
  read: "bg-gray-100 text-gray-600",
  replied: "bg-emerald-50 text-emerald-700",
};

function InquiryBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs capitalize ${STATUS_COLORS[status] ?? "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

export function InquiriesClient({ inquiries }: { inquiries: ContactInquiry[] }) {
  const [viewing, setViewing] = useState<ContactInquiry | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [actionResult, setActionResult] = useState<{ error?: string; success?: boolean }>();

  function handleStatusUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const status = form.get("status") as string;
    if (!viewing) return;
    startTransition(async () => {
      const result = await updateInquiryStatus(viewing.id, status);
      setActionResult(result);
    });
  }

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "subject", label: "Subject", render: (row: Record<string, unknown>) => <span className="line-clamp-1 max-w-xs text-xs">{String(row.subject)}</span> },
    { key: "status", label: "Status", render: (row: Record<string, unknown>) => <InquiryBadge status={String(row.status)} /> },
    { key: "submitted_at", label: "Received", render: (row: Record<string, unknown>) => new Date(String(row.submitted_at)).toLocaleDateString() },
  ];

  const unread = inquiries.filter((i) => i.status === "unread").length;

  return (
    <>
      <AdminSectionHeader
        title="Contact Inquiries"
        description={`Contact form submissions from visitors. ${unread > 0 ? `${unread} unread.` : ""}`}
        showAdd={false}
      />
      <div className="mt-3 flex items-center gap-3">
        <a
          href="/api/admin/export/inquiries"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download size={15} />
          Export CSV
        </a>
      </div>
      <div className="mt-4">
        <AdminTable
          columns={columns}
          rows={inquiries as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setViewing(row as unknown as ContactInquiry); setActionResult(undefined); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteContactInquiry(id); }}
          itemLabel="inquiry"
        />
      </div>

      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setViewing(null); }} title="Inquiry Detail">
        {viewing && (
          <div className="space-y-5">
            <div className="space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
              <p><span className="font-medium">From:</span> {viewing.name} &lt;{viewing.email}&gt;</p>
              <p><span className="font-medium">Subject:</span> {viewing.subject}</p>
              <p><span className="font-medium">Received:</span> {new Date(viewing.submitted_at).toLocaleString()}</p>
              <div>
                <p className="font-medium">Message:</p>
                <p className="mt-2 leading-relaxed text-gray-700 whitespace-pre-line">{viewing.message}</p>
              </div>
            </div>
            <form onSubmit={handleStatusUpdate} className="space-y-4">
              <Field label="Status" name="status" options={STATUS_OPTIONS} defaultValue={viewing.status} />
              <FormAlert result={actionResult} />
              <SubmitButton pending={isPending} label="Update Status" />
            </form>
          </div>
        )}
      </AdminFormPanel>
    </>
  );
}
