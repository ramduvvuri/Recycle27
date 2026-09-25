import "server-only";
import { requireAdmin } from "@/lib/admin/auth";
import { NextResponse } from "next/server";

export function toCSV(rows: Record<string, unknown>[], columns: string[]): string {
  const escape = (v: unknown): string => {
    const str = String(v ?? "").replace(/"/g, '""');
    return str.includes(",") || str.includes('"') || str.includes("\n")
      ? `"${str}"`
      : str;
  };
  const header = columns.join(",");
  const body = rows
    .map((row) => columns.map((col) => escape(row[col])).join(","))
    .join("\n");
  return `${header}\n${body}`;
}

export async function guardedExport(
  fetchFn: () => Promise<Record<string, unknown>[]>,
  columns: string[],
  filename: string
) {
  try {
    await requireAdmin();
    const rows = await fetchFn();
    const csv = toCSV(rows, columns);
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
