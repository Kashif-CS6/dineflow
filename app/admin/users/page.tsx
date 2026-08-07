"use client";

import { useState } from "react";

const users = [
  { id: 1, name: "Elena Conti", email: "elena@dineflow.com", role: "Platform Admin", restaurant: "—", status: "Active", joined: "2025-10-01" },
  { id: 2, name: "Marco Bianchi", email: "marco@trattoriamilano.it", role: "Owner", restaurant: "Trattoria Milano", status: "Active", joined: "2026-01-15" },
  { id: 3, name: "Lucia Romano", email: "lucia@trattoriamilano.it", role: "Manager", restaurant: "Trattoria Milano", status: "Active", joined: "2026-02-01" },
  { id: 4, name: "Yuki Tanaka", email: "yuki@sakurahouse.jp", role: "Owner", restaurant: "Sakura House", status: "Active", joined: "2026-02-01" },
  { id: 5, name: "Pierre Dubois", email: "pierre@bistro.fr", role: "Owner", restaurant: "Le Bistro Parisien", status: "Active", joined: "2026-03-10" },
  { id: 6, name: "Carlos Mendez", email: "carlos@elfuego.mx", role: "Owner", restaurant: "El Fuego Cantina", status: "Active", joined: "2026-04-05" },
  { id: 7, name: "Li Wei", email: "liwei@goldendragon.cn", role: "Owner", restaurant: "Golden Dragon", status: "Trial", joined: "2026-08-01" },
  { id: 8, name: "Raj Patel", email: "raj@spiceroute.in", role: "Owner", restaurant: "Spice Route", status: "Active", joined: "2026-05-12" },
  { id: 9, name: "Robert Smith", email: "robert@grillhouse.com", role: "Owner", restaurant: "Grill House", status: "Suspended", joined: "2026-06-10" },
];

const roleColors: Record<string, string> = {
  "Platform Admin": "#be5a2e",
  Owner: "#e8993d",
  Manager: "#8a9868",
  Staff: "#8b6f47",
};

export default function AdminUsersPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? users : users.filter((u) => u.status === filter);

  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">PLATFORM</div>
        <div className="hdr-title">Users</div>
        <div className="hdr-sub">{users.length} users across all restaurants</div>
      </div>

      <div className="stat-grid">
        <div className="stat-card"><div className="stat-label">TOTAL USERS</div><div className="stat-value">{users.length}</div></div>
        <div className="stat-card"><div className="stat-label">OWNERS</div><div className="stat-value">{users.filter((u) => u.role === "Owner").length}</div></div>
        <div className="stat-card"><div className="stat-label">ACTIVE</div><div className="stat-value" style={{ color: "var(--sage)" }}>{users.filter((u) => u.status === "Active").length}</div></div>
        <div className="stat-card"><div className="stat-label">SUSPENDED</div><div className="stat-value" style={{ color: "#c44a4a" }}>{users.filter((u) => u.status === "Suspended").length}</div></div>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ padding: "12px 22px" }}>
          <div className="tabs" style={{ marginBottom: 0, borderBottom: 0 }}>
            {["All", "Active", "Trial", "Suspended"].map((s) => (
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
                <th>USER</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>RESTAURANT</th>
                <th>STATUS</th>
                <th>JOINED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: "50%", background: roleColors[u.role] || "#8b6f47",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-anton), sans-serif", fontSize: 13, color: "var(--paper)",
                      }}>
                        {u.name.charAt(0)}
                      </div>
                      <span style={{ color: "var(--text-hi)", fontWeight: 500 }}>{u.name}</span>
                    </div>
                  </td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12 }}>{u.email}</td>
                  <td>
                    <span style={{
                      fontSize: 10, fontFamily: "var(--font-mono), monospace", color: roleColors[u.role],
                      background: `${roleColors[u.role]}15`, padding: "4px 10px", borderRadius: 20,
                    }}>
                      {u.role.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ fontSize: 13 }}>{u.restaurant}</td>
                  <td>
                    <span className={`badge ${u.status === "Active" ? "badge-confirmed" : u.status === "Trial" ? "badge-pending" : "badge-cancelled"}`}>
                      {u.status}
                    </span>
                  </td>
                  <td style={{ fontSize: 12, color: "var(--text-dim)" }}>{u.joined}</td>
                  <td>
                    <button className="btn btn-ghost" style={{ padding: "5px 12px", fontSize: 11 }}>
                      {u.status === "Active" ? "Suspend" : "Activate"}
                    </button>
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
