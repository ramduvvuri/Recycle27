"use client";

import { useTransition, useState } from "react";
import type { AbstractSubmission } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel,
  StatusBadge, FormAlert, Field, SubmitButton,
} from "@/components/admin/AdminUI";
import { updateAbstractStatus, deleteAbstractSubmission } from "@/lib/admin/actions";
import { Download, ExternalLink } from "lucide-react";

const STATUS_OPTIONS = [
  { value: "submitted", label: "Submitted" },
  { value: "under_review", label: "Under Review" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
];

const STATUS_COLORS: Record<string, string> = {
  submitted: "bg-blue-50 text-blue-700",
  under_review: "bg-amber-50 text-amber-700",
  accepted: "bg-emerald-50 text-emerald-700",
  rejected: "bg-red-50 text-red-700",
};

function AbstractStatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${STATUS_COLORS[status] ?? "bg-gray-100 text-gray-600"}`}>
      {status.replace("_", " ")}
    </span>
  );
}

export function AbstractsClient({ abstracts }: { abstracts: AbstractSubmission[] }) {
  const [viewing, setViewing] = useState<AbstractSubmission | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [actionResult, setActionResult] = useState<{ error?: string; success?: boolean }>();

  function handleStatusUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const status = form.get("status") as string;
    const notes = form.get("review_notes") as string;
    if (!viewing) return;
    startTransition(async () => {
      const result = await updateAbstractStatus(viewing.id, status, notes);
      setActionResult(result);
    });
  }

  const columns = [
    { key: "abstract_title", label: "Title", render: (row: Record<string, unknown>) => <span className="line-clamp-2 max-w-xs text-xs font-medium">{String(row.abstract_title)}</span> },
    { key: "author_name", label: "Author" },
    { key: "affiliation", label: "Institution" },
    { key: "theme", label: "Theme" },
    {
      key: "status",
      label: "Status",
      render: (row: Record<string, unknown>) => <AbstractStatusBadge status={String(row.status)} />,
    },
    { key: "submitted_at", label: "Submitted", render: (row: Record<string, unknown>) => new Date(String(row.submitted_at)).toLocaleDateString() },
  ];

  return (
    <>
      <AdminSectionHeader
        title="Abstract Submissions"
        description="Review and manage conference abstract submissions from authors."
        showAdd={false}
      />
      <div className="mt-3 flex items-center gap-3">
        <a
          href="/api/admin/export/abstracts"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download size={15} />
          Export CSV
        </a>
        <span className="text-sm text-gray-500">{abstracts.length} submissions</span>
      </div>

      <div className="mt-4">
        <AdminTable
          columns={columns}
          rows={abstracts as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setViewing(row as unknown as AbstractSubmission); setActionResult(undefined); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteAbstractSubmission(id); }}
          itemLabel="submission"
        />
      </div>

      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setViewing(null); }} title="Abstract Review">
        {viewing && (
          <div className="space-y-5">
            {/* Submission details */}
            <div className="space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
              <p><span className="font-medium">Title:</span> {viewing.abstract_title}</p>
              <p><span className="font-medium">Author:</span> {viewing.author_name} &lt;{viewing.author_email}&gt;</p>
              <p><span className="font-medium">Affiliation:</span> {viewing.affiliation}</p>
              {viewing.co_authors && <p><span className="font-medium">Co-authors:</span> {viewing.co_authors}</p>}
              <p><span className="font-medium">Theme:</span> {viewing.theme}</p>
              <p><span className="font-medium">Submitted:</span> {new Date(viewing.submitted_at).toLocaleString()}</p>
              {viewing.abstract_text && (
                <div>
                  <p className="font-medium">Abstract Text:</p>
                  <p className="mt-1 text-gray-600 leading-relaxed">{viewing.abstract_text}</p>
                </div>
              )}
              {viewing.pdf_url && (
                <a
                  href={`/api/admin/abstracts/${viewing.id}/pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-emerald hover:underline"
                >
                  <ExternalLink size={14} />
                  Download PDF
                </a>
              )}
            </div>

            {/* Review form */}
            <form onSubmit={handleStatusUpdate} className="space-y-4">
              <Field
                label="Status"
                name="status"
                options={STATUS_OPTIONS}
                defaultValue={viewing.status}
              />
              <Field
                label="Review Notes (internal)"
                name="review_notes"
                rows={4}
                defaultValue={viewing.review_notes}
                placeholder="Notes for the reviewing committee…"
              />
              <FormAlert result={actionResult} />
              <SubmitButton pending={isPending} label="Update Status" />
            </form>
          </div>
        )}
      </AdminFormPanel>
    </>
  );
}
