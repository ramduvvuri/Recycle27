import { requireAdmin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import { isSupabaseConfigured } from "@/lib/admin/auth";
import { adminGetAll, adminGetAbstracts, adminGetRegistrations, adminGetInquiries } from "@/lib/supabase/queries";
import Link from "next/link";
import { Bell, CalendarDays, Users, Image, FileSearch, UserCheck, MessageSquare, AlertCircle } from "lucide-react";

export default async function Page() {
  const user = await requireAdmin();

  // Fetch counts in parallel
  const [announcements, speakers, abstracts, registrations, inquiries] = await Promise.all([
    adminGetAll("announcements"),
    adminGetAll("speakers"),
    adminGetAbstracts(),
    adminGetRegistrations(),
    adminGetInquiries(),
  ]);

  const unreadInquiries = inquiries.filter((i) => i.status === "unread").length;
  const pendingAbstracts = abstracts.filter((a) => a.status === "submitted").length;
  const pendingRegistrations = registrations.filter((r) => r.payment_status === "pending").length;
  const verifiedRegistrations = registrations.filter((r) => r.payment_status === "verified").length;

  const contentCards = [
    { title: "Announcements", count: announcements.length, href: "/admin/announcements", Icon: Bell, color: "text-emerald-600" },
    { title: "Speakers", count: speakers.length, href: "/admin/speakers", Icon: Users, color: "text-blue-600" },
    { title: "Dates Added", count: 0, href: "/admin/dates", Icon: CalendarDays, color: "text-purple-600" },
  ];

  const operationsCards = [
    { title: "Abstract Submissions", count: abstracts.length, badge: pendingAbstracts > 0 ? `${pendingAbstracts} new` : null, href: "/admin/abstracts", Icon: FileSearch },
    { title: "Registrations", count: registrations.length, badge: pendingRegistrations > 0 ? `${pendingRegistrations} pending` : `${verifiedRegistrations} verified`, href: "/admin/registrations", Icon: UserCheck },
    { title: "Contact Inquiries", count: inquiries.length, badge: unreadInquiries > 0 ? `${unreadInquiries} unread` : null, href: "/admin/inquiries", Icon: MessageSquare },
  ];

  return (
    <AdminShell email={user.email ?? "Administrator"}>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-emerald">Dashboard</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">Conference content at a glance</h1>
      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-secondary-text">
        Manage all RECYCLE27 content from this panel. Connect Supabase to activate live data.
      </p>

      {!isSupabaseConfigured && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Supabase is not connected</p>
            <p className="mt-1 text-amber-700">
              Set <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">NEXT_PUBLIC_SUPABASE_URL</code>,{" "}
              <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and{" "}
              <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs">SUPABASE_SERVICE_ROLE_KEY</code> in{" "}
              <code className="font-mono text-xs">.env.local</code> to activate live CRUD.
            </p>
          </div>
        </div>
      )}

      {/* Content stats */}
      <h2 className="mt-8 text-xs font-semibold uppercase tracking-widest text-secondary-text">Content</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        {contentCards.map(({ title, count, href, Icon, color }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 rounded-xl border border-light-border bg-white p-5 hover:border-primary-emerald/50 transition-colors"
          >
            <Icon size={22} className={color} />
            <div>
              <p className="text-2xl font-bold text-dark-text">{count}</p>
              <p className="text-xs text-secondary-text">{title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Operations stats */}
      <h2 className="mt-7 text-xs font-semibold uppercase tracking-widest text-secondary-text">Event Operations</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        {operationsCards.map(({ title, count, badge, href, Icon }) => (
          <Link
            key={href}
            href={href}
            className="relative flex items-center gap-4 rounded-xl border border-light-border bg-white p-5 hover:border-primary-emerald/50 transition-colors"
          >
            <Icon size={22} className="text-primary-emerald" />
            <div>
              <p className="text-2xl font-bold text-dark-text">{count}</p>
              <p className="text-xs text-secondary-text">{title}</p>
            </div>
            {badge && (
              <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                {badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <h2 className="mt-7 text-xs font-semibold uppercase tracking-widest text-secondary-text">Quick Links</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {[
          ["/admin/announcements", "Add Announcement"],
          ["/admin/speakers", "Add Speaker"],
          ["/admin/dates", "Add Important Date"],
          ["/admin/gallery", "Upload Gallery Photo"],
          ["/admin/programme", "Add Programme Session"],
          ["/admin/settings", "Edit Site Settings"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-light-border bg-white px-4 py-3 text-sm font-medium text-dark-text hover:border-primary-emerald/50 transition-colors"
          >
            {label} →
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
