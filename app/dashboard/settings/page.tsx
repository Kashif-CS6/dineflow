"use client";

export default function SettingsPage() {
  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">MANAGEMENT</div>
        <div className="hdr-title">Settings</div>
        <div className="hdr-sub">Configure your restaurant profile and preferences</div>
      </div>

      <div style={{ display: "grid", gap: 24, maxWidth: 800 }}>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Restaurant Profile</div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label className="form-label">Restaurant Name</label>
              <input className="form-input" defaultValue="Trattoria Milano" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Cuisine Type</label>
                <select className="form-select" defaultValue="Italian">
                  <option>Italian</option><option>Japanese</option><option>French</option><option>Mexican</option><option>Chinese</option><option>Indian</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input className="form-input" defaultValue="+39 02 1234 5678" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <input className="form-input" defaultValue="12 Via Roma, Milano, 20121" />
            </div>
            <div className="form-group">
              <label className="form-label">Logo</label>
              <div style={{
                width: 120, height: 120, background: "var(--ink-softer)", borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontFamily: "var(--font-mono), monospace", color: "var(--text-dim)",
                marginBottom: 8,
              }}>
                LOGO
              </div>
              <input className="form-input" type="file" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Opening Hours</div>
          </div>
          <div className="card-body">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} style={{
                display: "flex", alignItems: "center", gap: 12, marginBottom: 12,
                padding: "10px 0", borderBottom: "1px solid var(--line)",
              }}>
                <span style={{ width: 100, fontSize: 13, color: "var(--text-hi)", fontWeight: 500 }}>{day}</span>
                <input className="form-input" type="time" defaultValue="11:00" style={{ width: 140 }} />
                <span style={{ color: "var(--text-dim)", fontSize: 13 }}>to</span>
                <input className="form-input" type="time" defaultValue="23:00" style={{ width: 140 }} />
                {day === "Sunday" && (
                  <span style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}>(shorter Sun)</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Tax &amp; Billing</div>
          </div>
          <div className="card-body">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Tax Rate (%)</label>
                <input className="form-input" type="number" defaultValue="10" />
              </div>
              <div className="form-group">
                <label className="form-label">Service Charge (%)</label>
                <input className="form-input" type="number" defaultValue="0" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Currency</label>
              <select className="form-select" defaultValue="EUR">
                <option>EUR (&euro;)</option><option>USD ($)</option><option>GBP (&pound;)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Default Discount (%)</label>
              <input className="form-input" type="number" defaultValue="0" placeholder="0" />
              <div className="form-hint">Applied to all orders unless overridden</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Notifications</div>
          </div>
          <div className="card-body">
            {[
              { label: "New order alerts", checked: true },
              { label: "Reservation notifications", checked: true },
              { label: "Kitchen timer alerts", checked: true },
              { label: "Daily summary email", checked: false },
              { label: "Weekly analytics report", checked: true },
            ].map((n) => (
              <label className="form-check" key={n.label} style={{ marginBottom: 12 }}>
                <input type="checkbox" defaultChecked={n.checked} />
                {n.label}
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button className="btn btn-ghost">Reset</button>
          <button className="btn btn-primary btn-lg">Save Settings</button>
        </div>
      </div>
    </div>
  );
}
