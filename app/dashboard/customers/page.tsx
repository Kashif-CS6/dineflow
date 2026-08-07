const customers = [
  { id: 1, name: "Sophie Laurent", email: "sophie@email.com", phone: "+39 345 678 901", visits: 12, totalSpent: 587.50, lastVisit: "2026-08-08", tags: ["VIP", "Regular"] },
  { id: 2, name: "James Wilson", email: "james@email.com", phone: "+39 320 444 555", visits: 5, totalSpent: 234.00, lastVisit: "2026-08-08", tags: ["Birthday"] },
  { id: 3, name: "Anna Rossi", email: "anna@email.com", phone: "+39 329 666 777", visits: 8, totalSpent: 412.00, lastVisit: "2026-08-07", tags: ["Regular"] },
  { id: 4, name: "Thomas Mueller", email: "thomas@email.com", phone: "+39 350 666 777", visits: 3, totalSpent: 890.00, lastVisit: "2026-08-05", tags: ["Corporate"] },
  { id: 5, name: "Yuki Tanaka", email: "yuki@email.com", phone: "+39 360 888 999", visits: 15, totalSpent: 1120.00, lastVisit: "2026-08-04", tags: ["VIP", "Regular"] },
  { id: 6, name: "Emma Johansson", email: "emma@email.com", phone: "+39 345 000 111", visits: 2, totalSpent: 98.00, lastVisit: "2026-08-02", tags: ["New"] },
  { id: 7, name: "Luca Ferrari", email: "luca@email.com", phone: "+39 331 888 999", visits: 9, totalSpent: 456.00, lastVisit: "2026-08-06", tags: ["Regular"] },
  { id: 8, name: "Maria Garcia", email: "maria@email.com", phone: "+39 340 444 555", visits: 20, totalSpent: 1620.00, lastVisit: "2026-08-07", tags: ["VIP"] },
];

const tagColors: Record<string, string> = {
  VIP: "var(--ember)",
  Regular: "var(--sage)",
  New: "var(--copper-bright)",
  Birthday: "var(--copper-bright)",
  Corporate: "#8b6f47",
};

export default function CustomersPage() {
  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">MANAGEMENT</div>
        <div className="hdr-title">Customers</div>
        <div className="hdr-sub">{customers.length} customers &middot; {customers.reduce((a, c) => a + c.visits, 0)} total visits</div>
      </div>

      <div className="stat-grid">
        <div className="stat-card"><div className="stat-label">TOTAL CUSTOMERS</div><div className="stat-value">{customers.length}</div></div>
        <div className="stat-card"><div className="stat-label">TOTAL VISITS</div><div className="stat-value">{customers.reduce((a, c) => a + c.visits, 0)}</div></div>
        <div className="stat-card"><div className="stat-label">VIP CUSTOMERS</div><div className="stat-value">{customers.filter((c) => c.tags.includes("VIP")).length}</div></div>
        <div className="stat-card"><div className="stat-label">TOTAL REVENUE</div><div className="stat-value" style={{ fontSize: 26 }}>&euro;{customers.reduce((a, c) => a + c.totalSpent, 0).toLocaleString()}</div></div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">Customer List</div>
        </div>
        <div className="card-body no-pad">
          <table className="data-table">
            <thead>
              <tr>
                <th>CUSTOMER</th>
                <th>CONTACT</th>
                <th>VISITS</th>
                <th>TOTAL SPENT</th>
                <th>LAST VISIT</th>
                <th>TAGS</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: "50%", background: "var(--copper)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-anton), sans-serif", fontSize: 13, color: "var(--paper)",
                      }}>
                        {c.name.charAt(0)}
                      </div>
                      <span style={{ color: "var(--text-hi)", fontWeight: 500 }}>{c.name}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: 12, fontFamily: "var(--font-mono), monospace", color: "var(--text-dim)" }}>{c.email}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 2 }}>{c.phone}</div>
                  </td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 600 }}>{c.visits}</td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 600, color: "var(--copper-bright)" }}>&euro;{c.totalSpent.toFixed(2)}</td>
                  <td style={{ fontSize: 12, color: "var(--text-dim)" }}>{c.lastVisit}</td>
                  <td>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {c.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: 10, fontFamily: "var(--font-mono), monospace", color: tagColors[tag] || "var(--text-dim)",
                          background: `${tagColors[tag] || "var(--text-dim)"}15`, padding: "2px 8px", borderRadius: 20,
                        }}>
                          {tag}
                        </span>
                      ))}
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
