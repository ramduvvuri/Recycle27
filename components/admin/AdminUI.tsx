"use client";

import React, { useActionState, useState, useTransition } from "react";
import { Pencil, Trash2, Search, Plus, X, Check, AlertCircle, Loader2 } from "lucide-react";
import type { ActionResult } from "@/types/database";

// ─── Status Badge ─────────────────────────────────────────────────────────────

export function StatusBadge({
  active,
  label,
}: {
  active: boolean;
  label?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        active
          ? "bg-emerald-50 text-emerald-700"
          : "bg-gray-100 text-gray-500"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${active ? "bg-emerald-500" : "bg-gray-400"}`}
      />
      {label ?? (active ? "Active" : "Inactive")}
    </span>
  );
}

// ─── Form Alert ───────────────────────────────────────────────────────────────

export function FormAlert({ result }: { result?: ActionResult }) {
  if (!result) return null;
  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-lg px-4 py-3 text-sm ${
        result.success
          ? "bg-emerald-50 text-emerald-800"
          : "bg-red-50 text-red-800"
      }`}
    >
      {result.success ? <Check size={16} className="mt-0.5 shrink-0" /> : <AlertCircle size={16} className="mt-0.5 shrink-0" />}
      {result.success ? "Saved successfully." : result.error}
    </div>
  );
}

// ─── Delete Button ────────────────────────────────────────────────────────────

export function DeleteButton({
  onDelete,
  label = "item",
}: {
  onDelete: () => void;
  label?: string;
}) {
  const [confirm, setConfirm] = useState(false);
  const [pending, startTransition] = useTransition();

  if (confirm) {
    return (
      <span className="flex items-center gap-2 text-xs">
        <span className="text-red-600">Delete {label}?</span>
        <button
          onClick={() => {
            setConfirm(false);
            startTransition(() => onDelete());
          }}
          disabled={pending}
          className="rounded bg-red-100 px-2 py-0.5 text-red-700 hover:bg-red-200 disabled:opacity-60"
        >
          {pending ? <Loader2 size={12} className="animate-spin" /> : "Yes"}
        </button>
        <button
          onClick={() => setConfirm(false)}
          className="rounded bg-gray-100 px-2 py-0.5 text-gray-600 hover:bg-gray-200"
        >
          No
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirm(true)}
      aria-label={`Delete ${label}`}
      className="text-gray-400 hover:text-red-600 transition-colors"
    >
      <Trash2 size={15} />
    </button>
  );
}

// ─── Collection Table ─────────────────────────────────────────────────────────

export interface AdminTableColumn {
  key: string;
  label: string;
  render?: (row: Record<string, unknown>) => React.ReactNode;
}

interface AdminTableProps {
  columns: AdminTableColumn[];
  rows: Record<string, unknown>[];
  onEdit?: (row: Record<string, unknown>) => void;
  onDelete?: (id: string) => void;
  itemLabel?: string;
}

export function AdminTable({
  columns,
  rows,
  onEdit,
  onDelete,
  itemLabel = "item",
}: AdminTableProps) {
  const [query, setQuery] = useState("");
  const filtered = rows.filter((row) =>
    Object.values(row).some((v) =>
      String(v ?? "").toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-4">
        <label className="relative block max-w-xs">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={15}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${itemLabel}s…`}
            className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm focus:border-primary-emerald focus:outline-none focus:ring-2 focus:ring-primary-emerald/20"
          />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wide text-gray-500">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-5 py-3">
                  {col.label}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-5 py-3">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-5 py-10 text-center text-sm text-gray-400"
                >
                  {rows.length === 0 ? "No entries yet. Add one above." : "No matching results."}
                </td>
              </tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={String(row.id ?? i)} className="hover:bg-gray-50">
                  {columns.map((col) => (
                    <td key={col.key} className="px-5 py-3.5 text-gray-600">
                      {col.render
                        ? col.render(row)
                        : String(row[col.key] ?? "—")}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {onEdit && (
                          <button
                            onClick={() => onEdit(row)}
                            aria-label="Edit"
                            className="text-gray-400 hover:text-primary-emerald transition-colors"
                          >
                            <Pencil size={15} />
                          </button>
                        )}
                        {onDelete && (
                          <DeleteButton
                            onDelete={() => onDelete(String(row.id))}
                            label={itemLabel}
                          />
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

export function AdminSectionHeader({
  title,
  description,
  onAdd,
  addLabel,
  showAdd = true,
}: {
  title: string;
  description: string;
  onAdd?: () => void;
  addLabel?: string;
  showAdd?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-emerald">
          Content
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
      {showAdd && onAdd && (
        <button
          onClick={onAdd}
          className="inline-flex items-center gap-2 rounded-lg bg-primary-emerald px-4 py-2.5 text-sm font-medium text-white hover:bg-deep-emerald transition-colors"
        >
          <Plus size={16} />
          {addLabel ?? `Add ${title.replace(/s$/, "")}`}
        </button>
      )}
    </div>
  );
}

// ─── Slide-over form panel ────────────────────────────────────────────────────

export function AdminFormPanel({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <aside className="relative ml-auto flex h-full w-full max-w-lg flex-col bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </aside>
    </div>
  );
}

// ─── Generic form field ───────────────────────────────────────────────────────

export function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  placeholder,
  rows,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string | number | boolean;
  placeholder?: string;
  rows?: number;
  options?: { value: string; label: string }[];
}) {
  const base =
    "mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary-emerald focus:outline-none focus:ring-2 focus:ring-primary-emerald/20";

  return (
    <label className="block">
      <span className="text-xs font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>
      {options ? (
        <select
          name={name}
          defaultValue={String(defaultValue ?? options[0]?.value ?? "")}
          className={base}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : rows ? (
        <textarea
          name={name}
          required={required}
          defaultValue={String(defaultValue ?? "")}
          placeholder={placeholder}
          rows={rows}
          className={base}
        />
      ) : type === "checkbox" ? (
        <input
          type="hidden"
          name={name}
          value={defaultValue ? "true" : "false"}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          defaultValue={String(defaultValue ?? "")}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

// ─── Toggle field ─────────────────────────────────────────────────────────────

export function ToggleField({
  label,
  name,
  defaultValue = true,
}: {
  label: string;
  name: string;
  defaultValue?: boolean;
}) {
  const [checked, setChecked] = useState(defaultValue);
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-gray-700">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
          checked ? "bg-primary-emerald" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
      <input type="hidden" name={name} value={checked ? "true" : "false"} />
    </div>
  );
}

// ─── Submit button ────────────────────────────────────────────────────────────

export function SubmitButton({
  pending,
  label = "Save",
}: {
  pending: boolean;
  label?: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-lg bg-primary-emerald px-5 py-2.5 text-sm font-medium text-white hover:bg-deep-emerald disabled:opacity-60 transition-colors"
    >
      {pending ? <Loader2 size={15} className="animate-spin" /> : <Check size={15} />}
      {pending ? "Saving…" : label}
    </button>
  );
}
