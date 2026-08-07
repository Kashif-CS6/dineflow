const plans = [
  { name: "Starter", price: 49, restaurants: 2, features: ["Up to 5 staff", "Menu management", "Table management", "Basic analytics", "Email support"] },
  { name: "Pro", price: 99, restaurants: 4, features: ["Unlimited staff", "All Starter features", "Advanced analytics", "Kitchen display", "Priority support", "Custom branding"] },
  { name: "Enterprise", price: 249, restaurants: 1, features: ["All Pro features", "Multi-location", "API access", "Dedicated support", "SLA guarantee", "Custom integrations"] },
];

const subscriptions = [
  { restaurant: "Trattoria Milano", plan: "Pro", status: "Active", nextBilling: "2026-09-01", amount: 99 },
  { restaurant: "Sakura House", plan: "Pro", status: "Active", nextBilling: "2026-09-01", amount: 99 },
  { restaurant: "Le Bistro Parisien", plan: "Enterprise", status: "Active", nextBilling: "2026-09-10", amount: 249 },
  { restaurant: "El Fuego Cantina", plan: "Pro", status: "Active", nextBilling: "2026-09-05", amount: 99 },
  { restaurant: "Golden Dragon", plan: "Trial", status: "Trial", nextBilling: "2026-08-15", amount: 0 },
  { restaurant: "Spice Route", plan: "Starter", status: "Active", nextBilling: "2026-09-12", amount: 49 },
  { restaurant: "Mare Blu", plan: "Pro", status: "Active", nextBilling: "2026-09-22", amount: 99 },
  { restaurant: "Grill House", plan: "Starter", status: "Suspended", nextBilling: "—", amount: 0 },
];

export default function SubscriptionsPage() {
  const mrr = subscriptions.filter((s) => s.status === "Active").reduce((a, s) => a + s.amount, 0);

  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">PLATFORM</div>
        <div className="hdr-title">Subscriptions</div>
        <div className="hdr-sub">MRR: &euro;{mrr}/month</div>
      </div>

      <div className="stat-grid">
        <div className="stat-card"><div className="stat-label">MONTHLY REVENUE</div><div className="stat-value">&euro;{mrr}</div></div>
        <div className="stat-card"><div className="stat-label">ACTIVE SUBS</div><div className="stat-value">{subscriptions.filter((s) => s.status === "Active").length}</div></div>
        <div className="stat-card"><div className="stat-label">TRIALS</div><div className="stat-value">{subscriptions.filter((s) => s.status === "Trial").length}</div></div>
        <div className="stat-card"><div className="stat-label">SUSPENDED</div><div className="stat-value">{subscriptions.filter((s) => s.status === "Suspended").length}</div></div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><div className="card-title">Subscription Plans</div></div>
          <div className="card-body">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {plans.map((p) => (
                <div key={p.name} style={{
                  background: "var(--ink)", border: "1px solid var(--line)", borderRadius: 8, padding: 20, textAlign: "center",
                  borderColor: p.name === "Pro" ? "var(--copper)" : "var(--line)",
                }}>
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono), monospace", color: "var(--text-dim)", letterSpacing: "0.1em" }}>{p.name.toUpperCase()}</div>
                  <div style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 30, color: "var(--text-hi)", marginTop: 8 }}>
                    &euro;{p.price}
                    <span style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "var(--text-dim)" }}>/mo</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>{p.restaurants} restaurant{p.restaurants > 1 ? "s" : ""}</div>
                  <ul style={{ listStyle: "none", marginTop: 14, textAlign: "left", fontSize: 12, color: "var(--text-mid)" }}>
                    {p.features.map((f) => (
                      <li key={f} style={{ padding: "4px 0", display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ color: "var(--sage)", fontWeight: 700 }}>&check;</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><div className="card-title">Active Subscriptions</div></div>
          <div className="card-body no-pad">
            <table className="data-table">
              <thead>
                <tr>
                  <th>RESTAURANT</th>
                  <th>PLAN</th>
                  <th>STATUS</th>
                  <th>NEXT BILLING</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((s) => (
                  <tr key={s.restaurant}>
                    <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{s.restaurant}</td>
                    <td><span style={{ fontSize: 11, fontFamily: "var(--font-mono), monospace", color: "var(--copper-bright)" }}>{s.plan.toUpperCase()}</span></td>
                    <td>
                      <span className={`badge ${s.status === "Active" ? "badge-confirmed" : s.status === "Trial" ? "badge-pending" : "badge-cancelled"}`}>
                        {s.status}
                      </span>
                    </td>
                    <td style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12 }}>{s.nextBilling}</td>
                    <td style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 600, color: s.amount > 0 ? "var(--text-hi)" : "var(--text-dim)" }}>
                      &euro;{s.amount}
                    </td>
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
