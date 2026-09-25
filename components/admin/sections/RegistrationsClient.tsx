"use client";

import { useTransition, useState } from "react";
import type { EventRegistration } from "@/types/database";
import {
  AdminTable, AdminSectionHeader, AdminFormPanel, Field, SubmitButton, FormAlert,
} from "@/components/admin/AdminUI";
import { updateRegistrationStatus, deleteEventRegistration } from "@/lib/admin/actions";
import { Download } from "lucide-react";

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "verified", label: "Payment Verified" },
  { value: "rejected", label: "Rejected" },
];

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700",
  verified: "bg-emerald-50 text-emerald-700",
  rejected: "bg-red-50 text-red-700",
};

function PaymentBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${STATUS_COLORS[status] ?? "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

export function RegistrationsClient({ registrations }: { registrations: EventRegistration[] }) {
  const [viewing, setViewing] = useState<EventRegistration | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [actionResult, setActionResult] = useState<{ error?: string; success?: boolean }>();

  function handleStatusUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const status = form.get("payment_status") as string;
    if (!viewing) return;
    startTransition(async () => {
      const result = await updateRegistrationStatus(viewing.id, status);
      setActionResult(result);
    });
  }

  const columns = [
    { key: "full_name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "institution", label: "Institution" },
    { key: "category", label: "Category" },
    { key: "payment_reference", label: "Reference", render: (row: Record<string, unknown>) => <span className="font-mono text-xs">{String(row.payment_reference || "—")}</span> },
    { key: "payment_status", label: "Payment", render: (row: Record<string, unknown>) => <PaymentBadge status={String(row.payment_status)} /> },
    { key: "registered_at", label: "Date", render: (row: Record<string, unknown>) => new Date(String(row.registered_at)).toLocaleDateString() },
  ];

  const stats = {
    total: registrations.length,
    verified: registrations.filter((r) => r.payment_status === "verified").length,
    pending: registrations.filter((r) => r.payment_status === "pending").length,
  };

  return (
    <>
      <AdminSectionHeader title="Registrations" description="Track attendee registrations and payment verification." showAdd={false} />

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {[
          { label: "Total", value: stats.total, color: "text-gray-900" },
          { label: "Verified", value: stats.verified, color: "text-emerald-700" },
          { label: "Pending", value: stats.pending, color: "text-amber-700" },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="mt-1 text-xs text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a
          href="/api/admin/export/registrations"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download size={15} />
          Export CSV
        </a>
      </div>

      <div className="mt-4">
        <AdminTable
          columns={columns}
          rows={registrations as unknown as Record<string, unknown>[]}
          onEdit={(row) => { setViewing(row as unknown as EventRegistration); setActionResult(undefined); setPanelOpen(true); }}
          onDelete={async (id) => { await deleteEventRegistration(id); }}
          itemLabel="registration"
        />
      </div>

      <AdminFormPanel open={panelOpen} onClose={() => { setPanelOpen(false); setViewing(null); }} title="Registration Detail">
        {viewing && (
          <div className="space-y-5">
            <div className="space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
              <p><span className="font-medium">Name:</span> {viewing.full_name}</p>
              <p><span className="font-medium">Email:</span> {viewing.email}</p>
              <p><span className="font-medium">Institution:</span> {viewing.institution}</p>
              {viewing.phone && <p><span className="font-medium">Phone:</span> {viewing.phone}</p>}
              <p><span className="font-medium">Category:</span> {viewing.category}</p>
              {viewing.payment_reference && <p><span className="font-medium">Payment Reference:</span> <span className="font-mono">{viewing.payment_reference}</span></p>}
              {viewing.amount_paid && <p><span className="font-medium">Amount Paid:</span> ₹{viewing.amount_paid.toLocaleString()}</p>}
              <p><span className="font-medium">Registered:</span> {new Date(viewing.registered_at).toLocaleString()}</p>
            </div>
            <form onSubmit={handleStatusUpdate} className="space-y-4">
              <Field label="Payment Status" name="payment_status" options={STATUS_OPTIONS} defaultValue={viewing.payment_status} />
              <FormAlert result={actionResult} />
              <SubmitButton pending={isPending} label="Update Status" />
            </form>
          </div>
        )}
      </AdminFormPanel>
    </>
  );
}
