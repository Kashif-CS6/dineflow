"use client";

const newOrders = [
  { id: "ORD-1044", table: "B01", items: ["Old Fashioned ×3", "Negroni ×2"], notes: "Send with T04 mains", time: "Just now" },
  { id: "ORD-1043", table: "T09", items: ["Burrata", "Branzino al Forno", "Panna Cotta"], notes: "Dairy allergy — no burrata", time: "3 min ago" },
];

const preparingOrders = [
  { id: "ORD-1042", table: "T04", items: ["Ribeye ×2 — Medium rare", "Truffle Fries", "Old Fashioned"], notes: "No onion on the fries", time: "6 min", urgency: "high" },
];

const readyOrders = [
  { id: "ORD-1041", table: "T11", items: ["Branzino al Forno", "Side Salad"], notes: "VIP guest — serve immediately", time: "8 min", urgency: "normal" },
];

export default function KitchenPage() {
  return (
    <div>
      <div className="page-hdr">
        <div className="hdr-eyebrow">KITCHEN</div>
        <div className="hdr-title">Kitchen Display</div>
        <div className="hdr-sub">{newOrders.length + preparingOrders.length + readyOrders.length} active tickets</div>
      </div>

      <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 12 }}>
        <KitchenColumn title="New" count={newOrders.length} orders={newOrders} statusColor="var(--ember)" />
        <KitchenColumn title="Preparing" count={preparingOrders.length} orders={preparingOrders} statusColor="var(--ember)" />
        <KitchenColumn title="Ready" count={readyOrders.length} orders={readyOrders} statusColor="var(--copper-bright)" />
      </div>
    </div>
  );
}

function KitchenColumn({ title, count, orders, statusColor }: {
  title: string;
  count: number;
  orders: { id: string; table: string; items: string[]; notes: string; time: string; urgency?: string }[];
  statusColor: string;
}) {
  return (
    <div className="kitchen-col">
      <div className="card">
        <div className="kitchen-col-header" style={{ borderBottomColor: statusColor }}>
          <span>{title}</span>
          <span className="count">{count}</span>
        </div>
        <div className="card-body no-pad" style={{ maxHeight: "calc(100vh - 260px)", overflowY: "auto" }}>
          {orders.map((o) => (
            <div className="kitchen-ticket" key={o.id} style={o.urgency === "high" ? { borderLeft: "3px solid var(--ember)" } : {}}>
              <div className="kt-head">
                <span className="kt-table">{o.table}</span>
                <span className="kt-time">{o.time}</span>
              </div>
              <div className="kt-items">
                {o.items.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
              {o.notes && <div className="kt-notes">{o.notes}</div>}
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                {title === "New" && (
                  <button className="btn btn-primary" style={{ padding: "5px 12px", fontSize: 11, flex: 1 }}>Start</button>
                )}
                {title === "Preparing" && (
                  <button className="btn btn-primary" style={{ padding: "5px 12px", fontSize: 11, flex: 1 }}>Mark Ready</button>
                )}
                {title === "Ready" && (
                  <button className="btn btn-primary" style={{ padding: "5px 12px", fontSize: 11, flex: 1 }}>Picked Up</button>
                )}
              </div>
            </div>
          ))}
          {orders.length === 0 && (
            <div style={{ padding: 32, textAlign: "center", color: "var(--text-dim)", fontSize: 13 }}>No orders</div>
          )}
        </div>
      </div>
    </div>
  );
}
