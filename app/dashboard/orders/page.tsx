"use client";

import { useState } from "react";

const orders = [
  { id: "ORD-1042", table: "T04", items: ["Ribeye ×2", "Truffle Fries", "Old Fashioned"], notes: "No onion on the fries", subtotal: 84.00, tax: 8.40, total: 94.00, status: "Preparing", time: "19:42", payment: "Card" },
  { id: "ORD-1041", table: "T11", items: ["Branzino", "Side Salad"], notes: "VIP guest — priority", subtotal: 30.50, tax: 3.05, total: 34.50, status: "Ready", time: "19:38", payment: "Cash" },
  { id: "ORD-1040", table: "T02", items: ["Pappardelle ×3", "Bruschetta ×2"], notes: "1 gluten free pasta", subtotal: 69.50, tax: 6.95, total: 78.00, status: "Served", time: "19:28", payment: "Card" },
  { id: "ORD-1039", table: "T07", items: ["Risotto ai Funghi", "Aperol Spritz ×2"], notes: "", subtotal: 42.00, tax: 4.20, total: 47.00, status: "Completed", time: "19:05", payment: "Card" },
  { id: "ORD-1038", table: "T15", items: ["Carpaccio", "Negroni"], notes: "", subtotal: 25.00, tax: 2.50, total: 28.00, status: "Completed", time: "18:55", payment: "Digital" },
  { id: "ORD-1037", table: "T01", items: ["Ribeye alla Fiorentina", "Tiramisu", "Espresso ×2"], notes: "Anniversary — candle on dessert", subtotal: 56.00, tax: 5.60, total: 62.00, status: "Completed", time: "18:40", payment: "Card" },
  { id: "ORD-1043", table: "T09", items: ["Burrata", "Branzino", "Panna Cotta"], notes: "Dairy allergy confirmed — no burrata", subtotal: 46.00, tax: 4.60, total: 51.50, status: "New", time: "19:55", payment: "Pending" },
  { id: "ORD-1044", table: "B01", items: ["Old Fashioned ×3", "Negroni ×2"], notes: "Send with T04 mains", subtotal: 58.00, tax: 5.80, total: 65.00, status: "New", time: "19:58", payment: "Pending" },
];

const statusBadge: Record<string, string> = {
  New: "badge-new",
  Confirmed: "badge-confirmed",
  Preparing: "badge-preparing",
  Ready: "badge-ready",
  Served: "badge-served",
  Completed: "badge-completed",
  Cancelled: "badge-cancelled",
};

export default function OrdersPage() {
  const [filter, setFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const filtered = filter === "All" ? orders : orders.filter((o) => o.status === filter);
  const statuses = ["All", "New", "Preparing", "Ready", "Served", "Completed"];

  return (
    <div>
      <div className="page-hdr" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div className="hdr-eyebrow">SERVICE</div>
          <div className="hdr-title">Orders</div>
          <div className="hdr-sub">{orders.length} orders today</div>
        </div>
        <div className="hdr-actions">
          <button className="btn btn-primary">+ New Order</button>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ padding: "12px 22px" }}>
          <div className="tabs" style={{ marginBottom: 0, borderBottom: 0 }}>
            {statuses.map((s) => (
              <button key={s} className={`tab${filter === s ? " active" : ""}`} onClick={() => setFilter(s)}>
                {s === "All" ? "All" : s}
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
                <th>ORDER</th>
                <th>TABLE</th>
                <th>ITEMS</th>
                <th>NOTES</th>
                <th>TOTAL</th>
                <th>PAYMENT</th>
                <th>STATUS</th>
                <th>TIME</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id}>
                  <td style={{ color: "var(--text-hi)", fontWeight: 600, fontFamily: "var(--font-mono), monospace" }}>
                    {o.id}
                  </td>
                  <td style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 15 }}>{o.table}</td>
                  <td>
                    {o.items.map((item, i) => (
                      <div key={i} style={{ fontSize: 13 }}>{item}</div>
                    ))}
                  </td>
                  <td style={{ fontSize: 12, color: o.notes ? "var(--ember)" : "var(--text-dim)", fontStyle: o.notes ? "italic" : "normal", maxWidth: 160 }}>
                    {o.notes || "—"}
                  </td>
                  <td style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 600, color: "var(--text-hi)" }}>
                    &euro;{o.total.toFixed(2)}
                  </td>
                  <td><span style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}>{o.payment}</span></td>
                  <td><span className={`badge ${statusBadge[o.status] || "badge-new"}`}>{o.status}</span></td>
                  <td style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}>{o.time}</td>
                  <td>
                    <button
                      className="btn btn-ghost"
                      style={{ padding: "5px 12px", fontSize: 11 }}
                      onClick={() => setSelectedOrder(selectedOrder === o.id ? null : o.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (() => {
        const o = orders.find((x) => x.id === selectedOrder);
        if (!o) return null;
        return (
          <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title">{o.id} &mdash; {o.table}</div>
                <button className="modal-close" onClick={() => setSelectedOrder(null)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="modal-body">
                <div style={{ marginBottom: 16 }}>
                  <span className={`badge ${statusBadge[o.status] || "badge-new"}`} style={{ fontSize: 13, padding: "6px 14px" }}>{o.status}</span>
                  <span style={{ marginLeft: 12, fontSize: 13, color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}>{o.time} &middot; {o.payment}</span>
                </div>

                <div className="card" style={{ background: "var(--ink)", marginBottom: 16 }}>
                  <div className="card-body">
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginBottom: 10, fontFamily: "var(--font-mono), monospace" }}>ITEMS</div>
                    {o.items.map((item, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--line)", fontSize: 14, color: "var(--text-hi)" }}>
                        <span>{item}</span>
                      </div>
                    ))}
                    {o.notes && (
                      <div style={{ marginTop: 12, padding: "10px 12px", background: "rgba(232,153,61,0.08)", borderRadius: 4, fontSize: 13, color: "var(--ember)", fontStyle: "italic" }}>
                        Note: {o.notes}
                      </div>
                    )}
                  </div>
                </div>

                <div className="card" style={{ background: "var(--ink)" }}>
                  <div className="card-body">
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-mid)", marginBottom: 6 }}>
                      <span>Subtotal</span>
                      <span>&euro;{o.subtotal.toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-mid)", marginBottom: 6 }}>
                      <span>Tax (10%)</span>
                      <span>&euro;{o.tax.toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 700, color: "var(--text-hi)", paddingTop: 10, borderTop: "1px solid var(--line)", marginTop: 6 }}>
                      <span>Total</span>
                      <span style={{ fontFamily: "var(--font-mono), monospace", color: "var(--copper-bright)" }}>&euro;{o.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-ghost">Cancel Order</button>
                <button className="btn btn-primary">Update Status</button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
