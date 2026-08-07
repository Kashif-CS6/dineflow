"use client";

import { useState } from "react";

const reservations = [
  { id: "RES-201", name: "Sophie Laurent", email: "sophie@email.com", phone: "+39 345 678 901", date: "2026-08-08", time: "19:30", guests: 4, table: "T11", status: "Confirmed", notes: "Window table requested" },
  { id: "RES-202", name: "Marco Bianchi", email: "marco@email.com", phone: "+39 333 111 222", date: "2026-08-08", time: "20:00", guests: 2, table: "T08", status: "Seated", notes: "" },
  { id: "RES-203", name: "James Wilson", email: "james@email.com", phone: "+39 320 444 555", date: "2026-08-08", time: "20:30", guests: 6, table: "T14", status: "Pending", notes: "Birthday celebration" },
  { id: "RES-204", name: "Anna Rossi", email: "anna@email.com", phone: "+39 329 666 777", date: "2026-08-08", time: "21:00", guests: 3, table: "T05", status: "Confirmed", notes: "" },
  { id: "RES-205", name: "Luca Ferrari", email: "luca@email.com", phone: "+39 331 888 999", date: "2026-08-09", time: "18:30", guests: 2, table: "T03", status: "Confirmed", notes: "" },
  { id: "RES-206", name: "Emma Johansson", email: "emma@email.com", phone: "+39 345 000 111", date: "2026-08-09", time: "19:00", guests: 5, table: "T18", status: "Pending", notes: "Vegan menu requested" },
  { id: "RES-207", name: "David Chen", email: "david@email.com", phone: "+39 333 222 333", date: "2026-08-08", time: "20:00", guests: 4, table: "T12", status: "Cancelled", notes: "Cancelled by guest" },
  { id: "RES-208", name: "Maria Garcia", email: "maria@email.com", phone: "+39 340 444 555", date: "2026-08-08", time: "19:30", guests: 2, table: "T10", status: "No-show", notes: "Did not arrive" },
  { id: "RES-209", name: "Thomas Mueller", email: "thomas@email.com", phone: "+39 350 666 777", date: "2026-08-09", time: "20:30", guests: 8, table: "T20", status: "Confirmed", notes: "Corporate dinner" },
  { id: "RES-210", name: "Yuki Tanaka", email: "yuki@email.com", phone: "+39 360 888 999", date: "2026-08-09", time: "19:00", guests: 2, table: "T04", status: "Confirmed", notes: "" },
];

const statusBadge: Record<string, string> = {
  Confirmed: "badge-confirmed",
  Pending: "badge-pending",
  Seated: "badge-seated",
  Completed: "badge-completed",
  Cancelled: "badge-cancelled",
  "No-show": "badge-noshow",
};

export default function ReservationsPage() {
  const [filter, setFilter] = useState("Today");
  const [showCreate, setShowCreate] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === "All"
    ? reservations
    : filter === "Today"
      ? reservations.filter((r) => r.date === "2026-08-08")
      : reservations.filter((r) => r.date === "2026-08-09");

  const stats = [
    { label: "TODAY", value: reservations.filter((r) => r.date === "2026-08-08").length },
    { label: "CONFIRMED", value: reservations.filter((r) => r.status === "Confirmed").length },
    { label: "SEATED", value: reservations.filter((r) => r.status === "Seated").length },
    { label: "NO-SHOWS", value: reservations.filter((r) => r.status === "No-show").length },
  ];

  return (
    <div>
      <div className="page-hdr" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div className="hdr-eyebrow">FRONT DESK</div>
          <div className="hdr-title">Reservations</div>
          <div className="hdr-sub">{reservations.length} total reservations</div>
        </div>
        <div className="hdr-actions">
          <button className="btn btn-primary" onClick={() => setShowCreate(true)}>+ New Reservation</button>
        </div>
      </div>

      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ padding: "12px 22px" }}>
          <div className="tabs" style={{ marginBottom: 0, borderBottom: 0 }}>
            {["Today", "Tomorrow", "All"].map((t) => (
              <button key={t} className={`tab${filter === t ? " active" : ""}`} onClick={() => setFilter(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body no-pad">
          <table className="data-table">
            <thead>
              <tr>
                <th>GUEST</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>GUESTS</th>
                <th>TABLE</th>
                <th>NOTES</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id}>
                  <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{r.name}</td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12 }}>{r.date}</td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 600, color: "var(--text-hi)" }}>{r.time}</td>
                  <td>{r.guests}</td>
                  <td style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 14 }}>{r.table}</td>
                  <td style={{ fontSize: 12, color: r.notes ? "var(--ember)" : "var(--text-dim)", fontStyle: r.notes ? "italic" : "normal", maxWidth: 180 }}>
                    {r.notes || "—"}
                  </td>
                  <td><span className={`badge ${statusBadge[r.status] || "badge-pending"}`}>{r.status}</span></td>
                  <td>
                    <button className="btn btn-ghost" style={{ padding: "5px 12px", fontSize: 11 }} onClick={() => setSelected(selected === r.id ? null : r.id)}>
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (() => {
        const r = reservations.find((x) => x.id === selected);
        if (!r) return null;
        return (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title">{r.name}</div>
                <button className="modal-close" onClick={() => setSelected(null)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="modal-body">
                <div style={{ marginBottom: 16 }}>
                  <span className={`badge ${statusBadge[r.status] || "badge-pending"}`}>{r.status}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16, fontSize: 13 }}>
                  <div><span style={{ color: "var(--text-dim)" }}>Date:</span> <span style={{ color: "var(--text-hi)" }}>{r.date}</span></div>
                  <div><span style={{ color: "var(--text-dim)" }}>Time:</span> <span style={{ color: "var(--text-hi)" }}>{r.time}</span></div>
                  <div><span style={{ color: "var(--text-dim)" }}>Guests:</span> <span style={{ color: "var(--text-hi)" }}>{r.guests}</span></div>
                  <div><span style={{ color: "var(--text-dim)" }}>Table:</span> <span style={{ color: "var(--text-hi)" }}>{r.table}</span></div>
                  <div><span style={{ color: "var(--text-dim)" }}>Email:</span> <span style={{ color: "var(--text-hi)" }}>{r.email}</span></div>
                  <div><span style={{ color: "var(--text-dim)" }}>Phone:</span> <span style={{ color: "var(--text-hi)" }}>{r.phone}</span></div>
                </div>
                {r.notes && (
                  <div style={{ padding: "10px 12px", background: "rgba(232,153,61,0.08)", borderRadius: 4, fontSize: 13, color: "var(--ember)", fontStyle: "italic", marginBottom: 12 }}>
                    {r.notes}
                  </div>
                )}
              </div>
              <div className="modal-footer" style={{ flexWrap: "wrap" }}>
                <button className="btn btn-ghost" style={{ color: "#c44a4a", borderColor: "#c44a4a" }}>Cancel</button>
                <button className="btn btn-ghost">Reject</button>
                <button className="btn btn-primary">Confirm</button>
              </div>
            </div>
          </div>
        );
      })()}

      {showCreate && (
        <div className="modal-overlay" onClick={() => setShowCreate(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">New Reservation</div>
              <button className="modal-close" onClick={() => setShowCreate(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Guest Name</label>
                  <input className="form-input" placeholder="Full name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="guest@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input className="form-input" type="date" />
                </div>
                <div className="form-group">
                  <label className="form-label">Time</label>
                  <input className="form-input" type="time" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Guests</label>
                  <select className="form-select">
                    {[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Table</label>
                  <select className="form-select">
                    {tables.filter((t) => t.status === "Available").map((t) => (
                      <option key={t.num}>T{t.num.toString().padStart(2, "0")}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Notes</label>
                <textarea className="form-textarea" placeholder="Special requests..." />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setShowCreate(false)}>Cancel</button>
              <button className="btn btn-primary">Create Reservation</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const tables = [
  { num: 1, status: "Available" }, { num: 3, status: "Available" }, { num: 5, status: "Available" },
  { num: 8, status: "Available" }, { num: 10, status: "Available" }, { num: 12, status: "Available" },
  { num: 14, status: "Available" }, { num: 16, status: "Available" }, { num: 18, status: "Available" },
  { num: 20, status: "Available" }, { num: 22, status: "Available" },
];
