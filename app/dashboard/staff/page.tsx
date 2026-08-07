"use client";

import { useState } from "react";

const staff = [
  { id: 1, name: "Marco Bianchi", email: "marco@trattoriamilano.it", role: "Owner", status: "Active", joined: "2026-01-15" },
  { id: 2, name: "Lucia Romano", email: "lucia@trattoriamilano.it", role: "Manager", status: "Active", joined: "2026-02-01" },
  { id: 3, name: "Paolo Verdi", email: "paolo@trattoriamilano.it", role: "Staff", status: "Active", joined: "2026-03-10" },
  { id: 4, name: "Giulia Neri", email: "giulia@trattoriamilano.it", role: "Staff", status: "Active", joined: "2026-04-05" },
  { id: 5, name: "Francesco Russo", email: "francesco@trattoriamilano.it", role: "Staff", status: "Inactive", joined: "2026-05-20" },
  { id: 6, name: "Elena Ferrari", email: "elena@trattoriamilano.it", role: "Staff", status: "Active", joined: "2026-06-15" },
  { id: 7, name: "Antonio Colombo", email: "antonio@trattoriamilano.it", role: "Staff", status: "Active", joined: "2026-07-01" },
];

const roleColors: Record<string, string> = {
  Owner: "#e8993d",
  Manager: "#8a9868",
  Staff: "#8b6f47",
};

export default function StaffPage() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div className="page-hdr" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div className="hdr-eyebrow">MANAGEMENT</div>
          <div className="hdr-title">Staff</div>
          <div className="hdr-sub">{staff.length} team members &middot; {staff.filter((s) => s.status === "Active").length} active</div>
        </div>
        <div className="hdr-actions">
          <button className="btn btn-primary" onClick={() => setShowAdd(true)}>+ Add Staff</button>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-card"><div className="stat-label">TOTAL STAFF</div><div className="stat-value">{staff.length}</div></div>
        <div className="stat-card"><div className="stat-label">ACTIVE</div><div className="stat-value">{staff.filter((s) => s.status === "Active").length}</div></div>
        <div className="stat-card"><div className="stat-label">MANAGERS</div><div className="stat-value">{staff.filter((s) => s.role === "Manager").length}</div></div>
        <div className="stat-card"><div className="stat-label">SERVICE STAFF</div><div className="stat-value">{staff.filter((s) => s.role === "Staff").length}</div></div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">Team Members</div>
        </div>
        <div className="card-body no-pad">
          <table className="data-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>STATUS</th>
                <th>JOINED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s) => (
                <tr key={s.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: "50%",
                        background: roleColors[s.role] || "#8b6f47",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-anton), sans-serif", fontSize: 13, color: "var(--paper)",
                      }}>
                        {s.name.charAt(0)}
                      </div>
                      <span style={{ color: "var(--text-hi)", fontWeight: 500 }}>{s.name}</span>
                    </div>
                  </td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12 }}>{s.email}</td>
                  <td>
                    <span style={{
                      fontSize: 11, fontFamily: "var(--font-mono), monospace",
                      color: roleColors[s.role], background: `${roleColors[s.role]}15`,
                      padding: "4px 10px", borderRadius: 20,
                    }}>
                      {s.role.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${s.status === "Active" ? "badge-confirmed" : "badge-cancelled"}`}>
                      {s.status}
                    </span>
                  </td>
                  <td style={{ fontSize: 12, color: "var(--text-dim)" }}>{s.joined}</td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button className="btn btn-ghost" style={{ padding: "4px 10px", fontSize: 11 }}>Edit</button>
                      <button className="btn btn-ghost" style={{ padding: "4px 10px", fontSize: 11 }}>
                        {s.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAdd && (
        <div className="modal-overlay" onClick={() => setShowAdd(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add Staff Member</div>
              <button className="modal-close" onClick={() => setShowAdd(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input className="form-input" placeholder="Staff name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="staff@restaurant.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Role</label>
                  <select className="form-select">
                    <option>Manager</option>
                    <option>Staff</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input className="form-input" type="password" placeholder="Temporary password" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="btn btn-primary">Add Member</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
