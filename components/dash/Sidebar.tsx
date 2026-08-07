"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

interface SidebarProps {
  role: "owner" | "manager" | "staff" | "admin";
  userName?: string;
  userRole?: string;
  restaurantName?: string;
}

const icons = {
  overview: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  orders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  ),
  tables: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  reservations: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  staff: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  customers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  restaurants: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6" />
      <path d="M23 11h-6" />
    </svg>
  ),
  subscription: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
};

export default function Sidebar({ role, userName = "Marco", userRole = "Owner", restaurantName = "Trattoria Milano" }: SidebarProps) {
  const pathname = usePathname();

  const roleInitals: Record<string, string> = { admin: "A", owner: "O", manager: "M", staff: "S" };
  const roleColor: Record<string, string> = { admin: "#be5a2e", owner: "#e8993d", manager: "#8a9868", staff: "#8b6f47" };

  return (
    <aside className="dash-sidebar">
      <div className="sb-brand">
        <div className="logo" style={{ fontSize: 18 }}>
          <svg className="mark" style={{ width: 22, height: 22 }} viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="12" stroke="#D97A46" strokeWidth="2" />
            <path d="M13 6V13L17.5 15.5" stroke="#D97A46" strokeWidth="2" strokeLinecap="round" />
          </svg>
          DineFlow
        </div>
        {role !== "admin" && restaurantName && (
          <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 5, fontFamily: "var(--font-mono), monospace" }}>
            {restaurantName}
          </div>
        )}
      </div>

      <nav className="sb-nav">
        {role === "admin" ? (
          <>
            <div className="sb-section-label">PLATFORM</div>
            <SidebarLink href="/admin" icon={icons.overview} label="Overview" pathname={pathname} exact />
            <SidebarLink href="/admin/restaurants" icon={icons.restaurants} label="Restaurants" pathname={pathname} />
            <SidebarLink href="/admin/users" icon={icons.users} label="Users" pathname={pathname} />
            <SidebarLink href="/admin/subscriptions" icon={icons.subscription} label="Subscriptions" pathname={pathname} />
            <SidebarLink href="/admin/analytics" icon={icons.analytics} label="Platform Analytics" pathname={pathname} />
          </>
        ) : (
          <>
            <div className="sb-section-label">RESTAURANT</div>
            <SidebarLink href="/dashboard" icon={icons.overview} label="Overview" pathname={pathname} exact />
            <SidebarLink href="/dashboard/orders" icon={icons.orders} label="Orders" pathname={pathname} />
            <SidebarLink href="/dashboard/kitchen" icon={icons.kitchen} label="Kitchen" pathname={pathname} />
            <SidebarLink href="/dashboard/tables" icon={icons.tables} label="Tables" pathname={pathname} />
            <SidebarLink href="/dashboard/reservations" icon={icons.reservations} label="Reservations" pathname={pathname} />

            {(role === "owner" || role === "manager") && (
              <>
                <div className="sb-section-label">MANAGEMENT</div>
                <SidebarLink href="/dashboard/menu" icon={icons.menu} label="Menu" pathname={pathname} />
                <SidebarLink href="/dashboard/staff" icon={icons.staff} label="Staff" pathname={pathname} />
                <SidebarLink href="/dashboard/customers" icon={icons.customers} label="Customers" pathname={pathname} />
                <SidebarLink href="/dashboard/analytics" icon={icons.analytics} label="Analytics" pathname={pathname} />
                <SidebarLink href="/dashboard/settings" icon={icons.settings} label="Settings" pathname={pathname} />
              </>
            )}
          </>
        )}
      </nav>

      <div className="sb-footer">
        <div className="sb-user">
          <div className="sb-avatar" style={{ background: roleColor[role] || roleColor.owner }}>
            {roleInitals[role] || "O"}
          </div>
          <div className="sb-user-info">
            <div className="sb-user-name">{userName}</div>
            <div className="sb-user-role">{userRole}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ href, icon, label, pathname, exact }: { href: string; icon: React.ReactNode; label: string; pathname: string; exact?: boolean }) {
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link href={href} className={`sb-link${isActive ? " active" : ""}`}>
      {icon}
      {label}
    </Link>
  );
}
