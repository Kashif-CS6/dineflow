import Sidebar from "@/components/dash/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash-layout">
      <Sidebar role="admin" userName="Elena" userRole="Platform Admin" />
      <main className="dash-main">
        <div className="dash-topbar">
          <div className="breadcrumb">
            Platform &nbsp;/&nbsp; <span>Dashboard</span>
          </div>
          <div className="tb-actions">
            <button className="btn btn-ghost" style={{ padding: "7px 14px", fontSize: 12 }}>Sign out</button>
          </div>
        </div>
        <div className="dash-content">{children}</div>
      </main>
    </div>
  );
}
