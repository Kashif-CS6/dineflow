"use client";

import { useState } from "react";

const tables = [
  { num: 1, cap: 2, status: "Available" },
  { num: 2, cap: 4, status: "Occupied" },
  { num: 3, cap: 2, status: "Available" },
  { num: 4, cap: 4, status: "Occupied" },
  { num: 5, cap: 6, status: "Available" },
  { num: 6, cap: 4, status: "Reserved" },
  { num: 7, cap: 2, status: "Cleaning" },
  { num: 8, cap: 4, status: "Available" },
  { num: 9, cap: 4, status: "Occupied" },
  { num: 10, cap: 2, status: "Available" },
  { num: 11, cap: 6, status: "Reserved" },
  { num: 12, cap: 4, status: "Available" },
  { num: 14, cap: 8, status: "Available" },
  { num: 15, cap: 4, status: "Occupied" },
  { num: 16, cap: 2, status: "Available" },
  { num: 17, cap: 4, status: "Cleaning" },
  { num: 18, cap: 6, status: "Available" },
  { num: 20, cap: 10, status: "Available" },
  { num: 21, cap: 4, status: "Occupied" },
  { num: 22, cap: 4, status: "Available" },
  { num: 24, cap: 6, status: "Reserved" },
];

const statusColors: Record<string, string> = {
  Available: "#8a9868",
  Occupied: "#d97a46",
  Reserved: "#e8993d",
  Cleaning: "#8c8171",
};

export default function TablesPage() {
  const [filter, setFilter] = useState("All");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  const filtered = filter === "All" ? tables : tables.filter((t) => t.status === filter);

  return (
    <div>
      <div className="page-hdr" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div className="hdr-eyebrow">FLOOR PLAN</div>
          <div className="hdr-title">Table Management</div>
          <div className="hdr-sub">{tables.length} tables &middot; {tables.filter((t) => t.status === "Occupied").length} occupied</div>
        </div>
        <div className="hdr-actions">
          <button className="btn btn-primary" onClick={() => setShowCreate(true)}>+ Add Table</button>
        </div>
      </div>

      <div className="stat-grid">
        {(["All", "Available", "Occupied", "Reserved", "Cleaning"] as const).map((s) => {
          const count = s === "All" ? tables.length : tables.filter((t) => t.status === s).length;
          return (
            <div
              key={s}
              className="stat-card"
              style={{ cursor: "pointer", borderColor: filter === s ? (statusColors[s] || "var(--line)") : "var(--line)" }}
              onClick={() => setFilter(s)}
            >
              <div className="stat-label">{s === "All" ? "ALL TABLES" : s.toUpperCase()}</div>
              <div className="stat-value">{count}</div>
            </div>
          );
        })}
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">Floor Layout</div>
          <div style={{ display: "flex", gap: 16, fontSize: 11, fontFamily: "var(--font-mono), monospace" }}>
            {Object.entries(statusColors).map(([status, color]) => (
              <div key={status} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                {status}
              </div>
            ))}
          </div>
        </div>
        <div className="card-body">
          <div className="table-grid">
            {filtered.map((t) => (
              <div
                key={t.num}
                className={`table-cell ${t.status.toLowerCase()}`}
                onClick={() => setSelectedTable(t.num)}
              >
                <div className="tbl-num">T{t.num.toString().padStart(2, "0")}</div>
                <div className="tbl-cap">Seats {t.cap}</div>
                <div className="tbl-status" style={{ color: statusColors[t.status] }}>
                  {t.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedTable && (() => {
        const t = tables.find((x) => x.num === selectedTable);
        if (!t) return null;
        return (
          <div className="modal-overlay" onClick={() => setSelectedTable(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title">Table T{t.num.toString().padStart(2, "0")}</div>
                <button className="modal-close" onClick={() => setSelectedTable(null)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="modal-body">
                <div style={{ marginBottom: 16, display: "flex", gap: 12 }}>
                  <span className={`badge badge-${t.status.toLowerCase()}`}>{t.status}</span>
                  <span style={{ fontSize: 13, color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}>Capacity: {t.cap}</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Update Status</label>
                  <select className="form-select" defaultValue={t.status}>
                    <option>Available</option>
                    <option>Occupied</option>
                    <option>Reserved</option>
                    <option>Cleaning</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Table Number</label>
                    <input className="form-input" type="number" defaultValue={t.num} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Capacity</label>
                    <input className="form-input" type="number" defaultValue={t.cap} />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-ghost" style={{ color: "#c44a4a", borderColor: "#c44a4a" }}>Delete Table</button>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        );
      })()}

      {showCreate && (
        <div className="modal-overlay" onClick={() => setShowCreate(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add New Table</div>
              <button className="modal-close" onClick={() => setShowCreate(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Table Number</label>
                  <input className="form-input" type="number" placeholder="e.g. 25" />
                </div>
                <div className="form-group">
                  <label className="form-label">Capacity</label>
                  <input className="form-input" type="number" placeholder="e.g. 4" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setShowCreate(false)}>Cancel</button>
              <button className="btn btn-primary">Create Table</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
