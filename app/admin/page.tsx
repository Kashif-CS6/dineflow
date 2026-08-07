const stats = [
  { label: "TOTAL RESTAURANTS", value: "24", change: "+3 this month" },
  { label: "TOTAL USERS", value: "186", change: "+12 this month" },
  { label: "ACTIVE TODAY", value: "18/24", change: "75% active" },
  { label: "PLATFORM REVENUE", value: "€48,250", change: "+14.2% vs July" },
];

const recentRestaurants = [
  { name: "Trattoria Milano", owner: "Marco Bianchi", status: "Active", orders: 1247, joined: "2026-01-15" },
  { name: "Sakura House", owner: "Yuki Tanaka", status: "Active", orders: 892, joined: "2026-02-01" },
  { name: "Le Bistro Parisien", owner: "Pierre Dubois", status: "Active", orders: 654, joined: "2026-03-10" },
  { name: "El Fuego Cantina", owner: "Carlos Mendez", status: "Active", orders: 1120, joined: "2026-04-05" },
  { name: "Golden Dragon", owner: "Li Wei", status: "Trial", orders: 98, joined: "2026-08-01" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">PLATFORM</div>
        <div className="hdr-title">Dashboard</div>
        <div className="hdr-sub">Platform-wide overview &amp; statistics</div>
      </div>

      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-change up">{s.change}</div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent Restaurants</div>
            <a href="/admin/restaurants" style={{ fontSize: 12, color: "var(--copper-bright)", fontFamily: "var(--font-mono), monospace" }}>View all →</a>
          </div>
          <div className="card-body no-pad">
            <table className="data-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>OWNER</th>
                  <th>STATUS</th>
                  <th>ORDERS</th>
                  <th>JOINED</th>
                </tr>
              </thead>
              <tbody>
                {recentRestaurants.map((r) => (
                  <tr key={r.name}>
                    <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{r.name}</td>
                    <td>{r.owner}</td>
                    <td>
                      <span className={`badge ${r.status === "Active" ? "badge-confirmed" : "badge-pending"}`}>{r.status}</span>
                    </td>
                    <td style={{ fontFamily: "var(--font-mono), monospace" }}>{r.orders.toLocaleString()}</td>
                    <td style={{ fontSize: 12, color: "var(--text-dim)" }}>{r.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><div className="card-title">Platform Activity</div></div>
          <div className="card-body">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Orders today", value: "342", pct: 100 },
                { label: "New restaurants (Aug)", value: "5", pct: 72 },
                { label: "New users (Aug)", value: "34", pct: 88 },
                { label: "Support tickets", value: "3", pct: 15 },
                { label: "API calls today", value: "12.4k", pct: 65 },
              ].map((a) => (
                <div key={a.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                    <span style={{ color: "var(--text-mid)" }}>{a.label}</span>
                    <span style={{ color: "var(--text-hi)", fontFamily: "var(--font-mono), monospace", fontWeight: 600 }}>{a.value}</span>
                  </div>
                  <div style={{ height: 5, background: "var(--ink)", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${a.pct}%`, background: "var(--copper)", borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
