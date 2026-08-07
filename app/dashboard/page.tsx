const stats = [
  { label: "TODAY&apos;S SALES", value: "€2,847", change: "+12.4%", up: true },
  { label: "ORDERS TODAY", value: "43", change: "+8", up: true },
  { label: "TABLES OCCUPIED", value: "18/24", change: "75%", up: true },
  { label: "AVG ORDER VALUE", value: "€66.20", change: "+€3.40", up: true },
];

const recentOrders = [
  { id: "ORD-1042", table: "T04", items: "Ribeye ×2, Truffle Fries", total: "€94.00", status: "Preparing", time: "4 min ago" },
  { id: "ORD-1041", table: "T11", items: "Branzino, Side Salad", total: "€34.50", status: "Ready", time: "8 min ago" },
  { id: "ORD-1040", table: "T02", items: "Pasta ×3, Bruschetta ×2", total: "€78.00", status: "Served", time: "18 min ago" },
  { id: "ORD-1039", table: "T07", items: "Risotto, Aperol ×2", total: "€47.00", status: "Completed", time: "35 min ago" },
  { id: "ORD-1038", table: "T15", items: "Carpaccio, Negroni", total: "€28.00", status: "Completed", time: "42 min ago" },
];

const upcomingReservations = [
  { name: "Sophie Laurent", time: "19:30", guests: 4, table: "T11", status: "Confirmed" },
  { name: "Marco Bianchi", time: "20:00", guests: 2, table: "T08", status: "Confirmed" },
  { name: "James Wilson", time: "20:30", guests: 6, table: "T14", status: "Pending" },
  { name: "Anna Rossi", time: "21:00", guests: 3, table: "T05", status: "Confirmed" },
];

const statusBadge: Record<string, string> = {
  Preparing: "badge-preparing",
  Ready: "badge-ready",
  Served: "badge-served",
  Completed: "badge-completed",
  New: "badge-new",
  Confirmed: "badge-confirmed",
  Pending: "badge-pending",
};

export default function OverviewPage() {
  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">DASHBOARD</div>
        <div className="hdr-title">Overview</div>
        <div className="hdr-sub">Friday, August 8, 2026 &middot; Dinner service</div>
      </div>

      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className={`stat-change ${s.up ? "up" : "down"}`}>
              {s.up ? "↑" : "↓"} {s.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent Orders</div>
            <a href="/dashboard/orders" style={{ fontSize: 12, color: "var(--copper-bright)", fontFamily: "var(--font-mono), monospace" }}>View all →</a>
          </div>
          <div className="card-body no-pad">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ORDER</th>
                  <th>TABLE</th>
                  <th>ITEMS</th>
                  <th>TOTAL</th>
                  <th>STATUS</th>
                  <th>TIME</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o) => (
                  <tr key={o.id}>
                    <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{o.id}</td>
                    <td>{o.table}</td>
                    <td>{o.items}</td>
                    <td style={{ fontFamily: "var(--font-mono), monospace" }}>{o.total}</td>
                    <td><span className={`badge ${statusBadge[o.status] || "badge-new"}`}>{o.status}</span></td>
                    <td style={{ fontSize: 12, color: "var(--text-dim)" }}>{o.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Upcoming Reservations</div>
            <a href="/dashboard/reservations" style={{ fontSize: 12, color: "var(--copper-bright)", fontFamily: "var(--font-mono), monospace" }}>View all →</a>
          </div>
          <div className="card-body no-pad">
            <table className="data-table">
              <thead>
                <tr>
                  <th>GUEST</th>
                  <th>TIME</th>
                  <th>GUESTS</th>
                  <th>TABLE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {upcomingReservations.map((r) => (
                  <tr key={r.name}>
                    <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{r.name}</td>
                    <td>{r.time}</td>
                    <td>{r.guests}</td>
                    <td>{r.table}</td>
                    <td><span className={`badge ${statusBadge[r.status] || "badge-pending"}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
