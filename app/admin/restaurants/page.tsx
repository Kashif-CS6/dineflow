"use client";

import { useState } from "react";

const restaurants = [
  { id: 1, name: "Trattoria Milano", owner: "Marco Bianchi", email: "marco@trattoriamilano.it", status: "Active", plan: "Pro", orders: 1247, users: 7, joined: "2026-01-15" },
  { id: 2, name: "Sakura House", owner: "Yuki Tanaka", email: "yuki@sakurahouse.jp", status: "Active", plan: "Pro", orders: 892, users: 5, joined: "2026-02-01" },
  { id: 3, name: "Le Bistro Parisien", owner: "Pierre Dubois", email: "pierre@bistro.fr", status: "Active", plan: "Enterprise", orders: 654, users: 9, joined: "2026-03-10" },
  { id: 4, name: "El Fuego Cantina", owner: "Carlos Mendez", email: "carlos@elfuego.mx", status: "Active", plan: "Pro", orders: 1120, users: 6, joined: "2026-04-05" },
  { id: 5, name: "Golden Dragon", owner: "Li Wei", email: "liwei@goldendragon.cn", status: "Trial", plan: "Trial", orders: 98, users: 3, joined: "2026-08-01" },
  { id: 6, name: "Spice Route", owner: "Raj Patel", email: "raj@spiceroute.in", status: "Active", plan: "Starter", orders: 445, users: 4, joined: "2026-05-12" },
  { id: 7, name: "Mare Blu", owner: "Giuseppe Conti", email: "giuseppe@mareblu.it", status: "Active", plan: "Pro", orders: 780, users: 6, joined: "2026-03-22" },
  { id: 8, name: "Grill House", owner: "Robert Smith", email: "robert@grillhouse.com", status: "Suspended", plan: "Starter", orders: 230, users: 3, joined: "2026-06-10" },
];

export default function AdminRestaurantsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = filter === "All" ? restaurants : restaurants.filter((r) => r.status === filter);
  const statuses = ["All", "Active", "Trial", "Suspended"];

  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">PLATFORM</div>
        <div className="hdr-title">Restaurants</div>
        <div className="hdr-sub">{restaurants.length} restaurants on the platform</div>
      </div>

      <div className="stat-grid">
        <div className="stat-card"><div className="stat-label">TOTAL</div><div className="stat-value">{restaurants.length}</div></div>
        <div className="stat-card"><div className="stat-label">ACTIVE</div><div className="stat-value" style={{ color: "var(--sage)" }}>{restaurants.filter((r) => r.status === "Active").length}</div></div>
        <div className="stat-card"><div className="stat-label">TRIAL</div><div className="stat-value" style={{ color: "var(--ember)" }}>{restaurants.filter((r) => r.status === "Trial").length}</div></div>
        <div className="stat-card"><div className="stat-label">SUSPENDED</div><div className="stat-value" style={{ color: "#c44a4a" }}>{restaurants.filter((r) => r.status === "Suspended").length}</div></div>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ padding: "12px 22px" }}>
          <div className="tabs" style={{ marginBottom: 0, borderBottom: 0 }}>
            {statuses.map((s) => (
              <button key={s} className={`tab${filter === s ? " active" : ""}`} onClick={() => setFilter(s)}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body no-pad">
          <table className="data-table">
            <thead>
              <tr>
                <th>RESTAURANT</th>
                <th>OWNER</th>
                <th>PLAN</th>
                <th>STATUS</th>
                <th>ORDERS</th>
                <th>USERS</th>
                <th>JOINED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id}>
                  <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{r.name}</td>
                  <td>
                    <div style={{ fontSize: 13, color: "var(--text-hi)" }}>{r.owner}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}>{r.email}</div>
                  </td>
                  <td>
                    <span style={{
                      fontSize: 11, fontFamily: "var(--font-mono), monospace", fontWeight: 600,
                      color: r.plan === "Enterprise" ? "var(--copper-bright)" : r.plan === "Pro" ? "var(--sage)" : "var(--text-dim)",
                      background: `rgba(${r.plan === "Enterprise" ? "217,122,70" : r.plan === "Pro" ? "138,152,104" : "140,129,113"}, 0.12)`,
                      padding: "4px 10px", borderRadius: 20,
                    }}>
                      {r.plan.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${r.status === "Active" ? "badge-confirmed" : r.status === "Trial" ? "badge-pending" : "badge-cancelled"}`}>
                      {r.status}
                    </span>
                  </td>
                  <td style={{ fontFamily: "var(--font-mono), monospace" }}>{r.orders.toLocaleString()}</td>
                  <td style={{ fontFamily: "var(--font-mono), monospace" }}>{r.users}</td>
                  <td style={{ fontSize: 12, color: "var(--text-dim)" }}>{r.joined}</td>
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

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Manage Restaurant</div>
              <button className="modal-close" onClick={() => setSelected(null)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select className="form-select" defaultValue="Active">
                    <option>Active</option><option>Trial</option><option>Suspended</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Subscription Plan</label>
                  <select className="form-select" defaultValue="Pro">
                    <option>Starter</option><option>Pro</option><option>Enterprise</option><option>Trial</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" style={{ color: "#c44a4a", borderColor: "#c44a4a" }}>Delete</button>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
