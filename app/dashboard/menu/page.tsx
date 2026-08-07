"use client";

import { useState } from "react";

const categories = [
  { id: 1, name: "Starters", count: 4 },
  { id: 2, name: "Main Course", count: 4 },
  { id: 3, name: "Desserts", count: 3 },
  { id: 4, name: "Drinks", count: 4 },
];

const items = [
  { id: 1, name: "Bruschetta al Pomodoro", category: "Starters", price: 9.50, available: true },
  { id: 2, name: "Carpaccio di Manzo", category: "Starters", price: 14.00, available: true },
  { id: 3, name: "Arancini", category: "Starters", price: 10.00, available: true },
  { id: 4, name: "Burrata", category: "Starters", price: 13.50, available: false },
  { id: 5, name: "Ribeye alla Fiorentina", category: "Main Course", price: 42.00, available: true },
  { id: 6, name: "Risotto ai Funghi", category: "Main Course", price: 19.00, available: true },
  { id: 7, name: "Branzino al Forno", category: "Main Course", price: 28.00, available: true },
  { id: 8, name: "Pappardelle al Ragu", category: "Main Course", price: 18.50, available: true },
  { id: 9, name: "Tiramisu", category: "Desserts", price: 10.00, available: true },
  { id: 10, name: "Panna Cotta", category: "Desserts", price: 9.00, available: true },
  { id: 11, name: "Cannoli Siciliani", category: "Desserts", price: 11.00, available: true },
  { id: 12, name: "Aperol Spritz", category: "Drinks", price: 12.00, available: true },
  { id: 13, name: "Negroni", category: "Drinks", price: 14.00, available: true },
  { id: 14, name: "Espresso", category: "Drinks", price: 3.50, available: true },
  { id: 15, name: "San Pellegrino", category: "Drinks", price: 5.00, available: true },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showItem, setShowItem] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const filtered = activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory);

  return (
    <div>
      <div className="page-hdr" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div className="hdr-eyebrow">MANAGEMENT</div>
          <div className="hdr-title">Menu</div>
          <div className="hdr-sub">{categories.length} categories &middot; {items.length} items</div>
        </div>
        <div className="hdr-actions" style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-ghost" onClick={() => setShowCategory(true)}>+ Category</button>
          <button className="btn btn-primary" onClick={() => setShowItem(true)}>+ Add Item</button>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Categories</div>
          </div>
          <div className="card-body no-pad">
            {categories.map((c) => (
              <div key={c.id} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 22px", borderBottom: "1px solid var(--line)",
                cursor: "pointer", background: activeCategory === c.name ? "rgba(190,90,46,0.06)" : "transparent",
                transition: "background 0.15s ease",
              }} onClick={() => setActiveCategory(activeCategory === c.name ? "All" : c.name)}>
                <span style={{ fontSize: 14, color: "var(--text-hi)", fontWeight: activeCategory === c.name ? 600 : 400 }}>{c.name}</span>
                <span style={{ fontSize: 12, fontFamily: "var(--font-mono), monospace", color: "var(--text-dim)" }}>{c.count} items</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">{activeCategory === "All" ? "All Items" : activeCategory}</div>
          </div>
          <div className="card-body no-pad">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>CATEGORY</th>
                  <th>PRICE</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td style={{ color: "var(--text-hi)", fontWeight: 500 }}>{item.name}</td>
                    <td style={{ fontSize: 12, fontFamily: "var(--font-mono), monospace" }}>{item.category}</td>
                    <td style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 600, color: "var(--copper-bright)" }}>&euro;{item.price.toFixed(2)}</td>
                    <td>
                      <span className={`badge ${item.available ? "badge-confirmed" : "badge-cancelled"}`}>
                        {item.available ? "Available" : "86'd"}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button className="btn btn-ghost" style={{ padding: "4px 10px", fontSize: 11 }}>Edit</button>
                        <button className="btn btn-ghost" style={{ padding: "4px 10px", fontSize: 11, color: "#c44a4a", borderColor: "#c44a4a" }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showItem && (
        <div className="modal-overlay" onClick={() => setShowItem(false)}>
          <div className="modal modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add Menu Item</div>
              <button className="modal-close" onClick={() => setShowItem(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Item Name</label>
                <input className="form-input" placeholder="Dish name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select className="form-select">
                    {categories.map((c) => <option key={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Price (EUR)</label>
                  <input className="form-input" type="number" step="0.01" placeholder="0.00" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Describe the dish..." />
              </div>
              <div className="form-group">
                <label className="form-label">Image</label>
                <input className="form-input" type="file" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Ingredients</label>
                  <input className="form-input" placeholder="Comma-separated" />
                </div>
                <div className="form-group">
                  <label className="form-label">Variants (optional)</label>
                  <input className="form-input" placeholder="e.g. Small, Large" />
                </div>
              </div>
              <label className="form-check">
                <input type="checkbox" defaultChecked />
                Available immediately
              </label>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setShowItem(false)}>Cancel</button>
              <button className="btn btn-primary">Add Item</button>
            </div>
          </div>
        </div>
      )}

      {showCategory && (
        <div className="modal-overlay" onClick={() => setShowCategory(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add Category</div>
              <button className="modal-close" onClick={() => setShowCategory(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Category Name</label>
                <input className="form-input" placeholder="e.g. Antipasti" />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Brief category description..." />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setShowCategory(false)}>Cancel</button>
              <button className="btn btn-primary">Create Category</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
