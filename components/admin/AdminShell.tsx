import Link from "next/link";
import type React from "react";
import {
  ArrowLeft, Bell, CalendarDays, FileText, Hotel, Image,
  LayoutDashboard, Menu, Settings, Sparkles, Users,
  FileSearch, UserCheck, MessageSquare,
} from "lucide-react";
import { signOut } from "@/app/admin/actions";

const navigation = [
  // ── Dashboard ─────────────────────────────────────────
  { label: "Dashboard", href: "/admin", Icon: LayoutDashboard, section: null },
  // ── Content ───────────────────────────────────────────
  { label: "Announcements", href: "/admin/announcements", Icon: Bell, section: "Content" },
  { label: "Important Dates", href: "/admin/dates", Icon: CalendarDays, section: "Content" },
  { label: "Speakers", href: "/admin/speakers", Icon: Users, section: "Content" },
  { label: "Committees", href: "/admin/committees", Icon: Users, section: "Content" },
  { label: "Registration", href: "/admin/registration", Icon: FileText, section: "Content" },
  { label: "Programme", href: "/admin/programme", Icon: CalendarDays, section: "Content" },
  { label: "Documents", href: "/admin/documents", Icon: FileText, section: "Content" },
  // ── Assets ────────────────────────────────────────────
  { label: "Accommodation", href: "/admin/accommodation", Icon: Hotel, section: "Assets" },
  { label: "Publications", href: "/admin/publications", Icon: Sparkles, section: "Assets" },
  { label: "Sponsors", href: "/admin/sponsors", Icon: Sparkles, section: "Assets" },
  { label: "Gallery", href: "/admin/gallery", Icon: Image, section: "Assets" },
  // ── Support ───────────────────────────────────────────
  { label: "FAQs", href: "/admin/faqs", Icon: FileText, section: "Support" },
  // ── Event Operations ──────────────────────────────────
  { label: "Abstract Submissions", href: "/admin/abstracts", Icon: FileSearch, section: "Operations" },
  { label: "Registrations", href: "/admin/registrations", Icon: UserCheck, section: "Operations" },
  { label: "Contact Inquiries", href: "/admin/inquiries", Icon: MessageSquare, section: "Operations" },
  // ── System ────────────────────────────────────────────
  { label: "Site Settings", href: "/admin/settings", Icon: Settings, section: "System" },
] as const;

export function AdminShell({ children, email }: { children: React.ReactNode; email: string }) {
  const sections = Array.from(new Set(navigation.map((n) => n.section)));

  return (
    <div data-admin className="min-h-screen bg-[#f6f8f6] font-body text-dark-text">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 hidden w-64 overflow-y-auto bg-primary-dark px-5 py-7 text-light-text lg:block">
        <Link href="/admin" className="flex items-baseline gap-2">
          <span className="font-display text-2xl">RECYCLE</span>
          <span className="font-display text-2xl text-primary-emerald">27</span>
          <span className="ml-1 text-[10px] uppercase tracking-[.18em] text-muted-green">Admin</span>
        </Link>

        <nav className="mt-8 space-y-5">
          {sections.map((section) => (
            <div key={section}>
              {section && (
                <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[.14em] text-light-text/30">
                  {section}
                </p>
              )}
              <div className="space-y-0.5">
                {navigation
                  .filter((n) => n.section === section)
                  .map(({ label, href, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-light-text/70 transition hover:bg-white/10 hover:text-light-text"
                    >
                      <Icon size={15} />
                      {label}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-8 border-t border-dark-border pt-5">
          <p className="truncate px-3 text-xs text-light-text/40">{email}</p>
          <form action={signOut} className="mt-3">
            <button className="flex items-center gap-2 px-3 text-sm text-muted-green hover:text-light-text transition-colors">
              <ArrowLeft size={14} />
              Sign out
            </button>
          </form>
          <Link
            href="/"
            className="mt-4 flex items-center gap-2 px-3 text-sm text-light-text/60 hover:text-light-text transition-colors"
          >
            <ArrowLeft size={14} />
            Back to website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="min-h-screen lg:pl-64">
        <header className="flex h-16 items-center justify-between border-b border-light-border bg-white px-5 md:px-9">
          <span className="flex items-center gap-2 text-sm font-medium text-dark-text">
            <Menu className="lg:hidden" size={18} />
            Content manager
          </span>
          <span className="hidden text-xs text-secondary-text sm:block">
            RECYCLE27 administration
          </span>
        </header>
        <div className="p-5 md:p-9">{children}</div>
      </main>
    </div>
  );
}
