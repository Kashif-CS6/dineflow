import Sidebar from "@/components/dash/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash-layout">
      <Sidebar role="owner" userName="Marco" userRole="Owner" restaurantName="Trattoria Milano" />
      <main className="dash-main">
        <div className="dash-topbar">
          <div className="breadcrumb">
            Trattoria Milano &nbsp;/&nbsp; <span>Overview</span>
          </div>
          <div className="tb-actions">
            <button className="btn btn-ghost" style={{ padding: "7px 14px", fontSize: 12 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16, marginRight: 6 }}>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
              </svg>
              Sign out
            </button>
          </div>
        </div>
        <div className="dash-content">{children}</div>
      </main>
    </div>
  );
}
