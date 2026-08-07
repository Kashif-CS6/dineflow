const stats = [
  { label: "TOTAL ORDERS (PLATFORM)", value: "5,468" },
  { label: "TOTAL SALES (PLATFORM)", value: "€224,180" },
  { label: "AVG ORDER VALUE", value: "€41.02" },
  { label: "ACTIVE RESTAURANTS", value: "18/24" },
];

const monthlyRevenue = [
  { month: "Jan", value: 28500 },
  { month: "Feb", value: 31200 },
  { month: "Mar", value: 35400 },
  { month: "Apr", value: 38100 },
  { month: "May", value: 40200 },
  { month: "Jun", value: 43800 },
  { month: "Jul", value: 42200 },
  { month: "Aug", value: 48250 },
];

const restaurantPerformance = [
  { name: "Trattoria Milano", orders: 1247, revenue: 51200, growth: 12.4 },
  { name: "El Fuego Cantina", orders: 1120, revenue: 46800, growth: 18.2 },
  { name: "Sakura House", orders: 892, revenue: 38400, growth: 8.7 },
  { name: "Mare Blu", orders: 780, revenue: 32900, growth: 15.1 },
  { name: "Le Bistro Parisien", orders: 654, revenue: 28100, growth: 6.3 },
  { name: "Spice Route", orders: 445, revenue: 18700, growth: 22.0 },
  { name: "Grill House", orders: 230, revenue: 9200, growth: -5.2 },
  { name: "Golden Dragon", orders: 98, revenue: 4100, growth: 0 },
];

const planDistribution = [
  { plan: "Pro", count: 4, pct: 50 },
  { plan: "Starter", count: 2, pct: 25 },
  { plan: "Enterprise", count: 1, pct: 12.5 },
  { plan: "Trial", count: 1, pct: 12.5 },
];

export default function AdminAnalyticsPage() {
  const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.value));
  const maxOrders = Math.max(...restaurantPerformance.map((r) => r.orders));

  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">PLATFORM</div>
        <div className="hdr-title">Platform Analytics</div>
        <div className="hdr-sub">Cross-restaurant performance &amp; growth</div>
      </div>

      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div className="card-header"><div className="card-title">Monthly Revenue (Platform)</div></div>
          <div className="card-body">
            {monthlyRevenue.map((m) => (
              <div className="bar-row" key={m.month}>
                <div className="bar-label">{m.month}</div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${(m.value / maxRevenue) * 100}%` }} />
                </div>
                <div className="bar-value">&euro;{m.value.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header"><div className="card-title">Plan Distribution</div></div>
          <div className="card-body">
            {planDistribution.map((p) => (
              <div key={p.plan} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                  <span style={{ color: "var(--text-hi)", fontWeight: 500 }}>{p.plan}</span>
                  <span style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}>{p.count} ({p.pct}%)</span>
                </div>
                <div style={{ height: 8, background: "var(--ink)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${p.pct}%`, background: p.plan === "Pro" ? "var(--sage)" : p.plan === "Enterprise" ? "var(--copper)" : "var(--text-dim)", borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header"><div className="card-title">Restaurant Performance</div></div>
        <div className="card-body no-pad">
          <table className="data-table">
            <thead>
              <tr>
                <th>RESTAURANT</th>
                <th>ORDERS</th>
                <th>REVENUE</th>
                <th>GROWTH</th>
                <th>PERFORMANCE</th>
              </tr>
            </thead>
            <tbody>
              {restaurantPerformance.map((r) => (
                <tr key={r.name}>
                  <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{r.name}</td>
                  <td style={{ fontFamily: "var(--font-mono), monospace" }}>{r.orders.toLocaleString()}</td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 600, color: "var(--copper-bright)" }}>&euro;{r.revenue.toLocaleString()}</td>
                  <td>
                    <span style={{ color: r.growth >= 0 ? "var(--sage)" : "#c44a4a", fontFamily: "var(--font-mono), monospace", fontSize: 13 }}>
                      {r.growth >= 0 ? "↑" : "↓"} {Math.abs(r.growth)}%
                    </span>
                  </td>
                  <td>
                    <div style={{ width: 120, height: 6, background: "var(--ink)", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{
                        height: "100%", width: `${(r.orders / maxOrders) * 100}%`,
                        background: r.growth >= 0 ? "var(--copper)" : "var(--text-dim)", borderRadius: 3,
                      }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
