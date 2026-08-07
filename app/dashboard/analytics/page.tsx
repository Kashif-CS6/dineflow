const popularItems = [
  { name: "Ribeye alla Fiorentina", orders: 48, revenue: 2016 },
  { name: "Pappardelle al Ragu", orders: 42, revenue: 777 },
  { name: "Branzino al Forno", orders: 38, revenue: 1064 },
  { name: "Aperol Spritz", orders: 56, revenue: 672 },
  { name: "Tiramisu", orders: 35, revenue: 350 },
  { name: "Risotto ai Funghi", orders: 32, revenue: 608 },
  { name: "Negroni", orders: 44, revenue: 616 },
  { name: "Carpaccio di Manzo", orders: 29, revenue: 406 },
];

const salesByDay = [
  { day: "Mon", value: 1850 },
  { day: "Tue", value: 2100 },
  { day: "Wed", value: 1950 },
  { day: "Thu", value: 2400 },
  { day: "Fri", value: 3100 },
  { day: "Sat", value: 2850 },
  { day: "Sun", value: 1600 },
];

const categorySales = [
  { name: "Main Course", value: 4870 },
  { name: "Starters", value: 2150 },
  { name: "Drinks", value: 1980 },
  { name: "Desserts", value: 1240 },
];

const reservationStats = [
  { label: "Total", value: 312 },
  { label: "Completed", value: 245 },
  { label: "No-shows", value: 18 },
  { label: "Cancelled", value: 32 },
  { label: "Avg Guests", value: "3.2" },
];

export default function AnalyticsPage() {
  const maxBar = Math.max(...popularItems.map((i) => i.orders));
  const maxDay = Math.max(...salesByDay.map((d) => d.value));
  const maxCat = Math.max(...categorySales.map((c) => c.value));

  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">OFFICE</div>
        <div className="hdr-title">Analytics</div>
        <div className="hdr-sub">Restaurant performance at a glance</div>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="stat-label">TOTAL SALES (AUG)</div>
          <div className="stat-value">&euro;10,350</div>
          <div className="stat-change up">&uarr; 12.4% vs July</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div className="stat-label">TOTAL ORDERS (AUG)</div>
          <div className="stat-value">1,247</div>
          <div className="stat-change up">&uarr; 8.2% vs July</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            </svg>
          </div>
          <div className="stat-label">RESERVATIONS</div>
          <div className="stat-value">312</div>
          <div className="stat-change up">&uarr; 5.1% vs July</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
            </svg>
          </div>
          <div className="stat-label">AVG ORDER VALUE</div>
          <div className="stat-value">&euro;8.30</div>
          <div className="stat-change up">&uarr; 2.3% vs July</div>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div className="card-header"><div className="card-title">Sales by Day (Week)</div></div>
          <div className="card-body">
            {salesByDay.map((d) => (
              <div className="bar-row" key={d.day}>
                <div className="bar-label">{d.day}</div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${(d.value / maxDay) * 100}%` }} />
                </div>
                <div className="bar-value">&euro;{d.value.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header"><div className="card-title">Sales by Category</div></div>
          <div className="card-body">
            {categorySales.map((c) => (
              <div className="bar-row" key={c.name}>
                <div className="bar-label">{c.name}</div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${(c.value / maxCat) * 100}%` }} />
                </div>
                <div className="bar-value">&euro;{c.value.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><div className="card-title">Popular Dishes</div></div>
          <div className="card-body">
            {popularItems.map((item) => (
              <div className="bar-row" key={item.name}>
                <div className="bar-label" style={{ width: 160 }}>{item.name}</div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${(item.orders / maxBar) * 100}%` }} />
                </div>
                <div className="bar-value">{item.orders} orders</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header"><div className="card-title">Reservation Stats</div></div>
          <div className="card-body">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {reservationStats.map((s) => (
                <div key={s.label} style={{ padding: "16px", background: "var(--ink)", borderRadius: 6, textAlign: "center" }}>
                  <div style={{ fontSize: 10, fontFamily: "var(--font-mono), monospace", color: "var(--text-dim)", letterSpacing: "0.1em" }}>{s.label.toUpperCase()}</div>
                  <div style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 28, color: "var(--text-hi)", marginTop: 4 }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
