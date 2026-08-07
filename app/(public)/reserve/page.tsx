"use client";

import { useState } from "react";

export default function ReservePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const times = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
  const guests = ["1", "2", "3", "4", "5", "6", "7", "8+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <section style={{ padding: "60px 32px", minHeight: "80vh" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div className="section-head" style={{ textAlign: "center", maxWidth: "none", marginBottom: 36 }}>
          <div className="section-eyebrow mono">RESERVATIONS</div>
          <h2 className="section-title display">Book a table.</h2>
          <p className="section-desc" style={{ marginInline: "auto" }}>Reserve in 60 seconds — we&apos;ll hold your table.</p>
        </div>

        {step === 3 ? (
          <div className="card" style={{ textAlign: "center", padding: 48 }}>
            <div style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 24, color: "var(--sage)", textTransform: "uppercase", marginBottom: 12 }}>
              Reservation Submitted
            </div>
            <p style={{ color: "var(--text-mid)", fontSize: 14, marginBottom: 6 }}>
              {form.date} at {form.time} for {form.guests} guest{parseInt(form.guests) > 1 ? "s" : ""}
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: 13 }}>
              You&apos;ll receive a confirmation at {form.email}
            </p>
            <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => setStep(1)}>
              Make Another Reservation
            </button>
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="form-group">
                      <label className="form-label">Date</label>
                      <input type="date" className="form-input" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Time</label>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                        {times.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({ ...form, time: t })}
                            style={{
                              padding: "10px 4px",
                              fontSize: 12,
                              fontFamily: "var(--font-mono), monospace",
                              background: form.time === t ? "var(--copper)" : "var(--ink)",
                              color: form.time === t ? "var(--paper)" : "var(--text-mid)",
                              border: `1px solid ${form.time === t ? "var(--copper-bright)" : "var(--line)"}`,
                              borderRadius: 4,
                              cursor: "pointer",
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Number of Guests</label>
                      <div style={{ display: "flex", gap: 8 }}>
                        {guests.map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setForm({ ...form, guests: g })}
                            style={{
                              padding: "10px 16px",
                              fontSize: 13,
                              fontFamily: "var(--font-mono), monospace",
                              background: form.guests === g ? "var(--copper)" : "var(--ink)",
                              color: form.guests === g ? "var(--paper)" : "var(--text-mid)",
                              border: `1px solid ${form.guests === g ? "var(--copper-bright)" : "var(--line)"}`,
                              borderRadius: 4,
                              cursor: "pointer",
                            }}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={() => setStep(2)} disabled={!form.date || !form.time}>
                      Continue
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input type="text" className="form-input" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-input" placeholder="+39..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Special Requests</label>
                      <textarea className="form-textarea" placeholder="Allergies, celebrations, seating preferences..." value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                    </div>
                    <div style={{ padding: "14px 16px", background: "var(--ink)", borderRadius: 6, marginBottom: 18, fontSize: 13, color: "var(--text-mid)" }}>
                      <strong style={{ color: "var(--text-hi)" }}>Reservation Summary</strong>
                      <div style={{ marginTop: 6 }}>{form.date || "—"} at {form.time || "—"} for {form.guests} guest{parseInt(form.guests) > 1 ? "s" : ""}</div>
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <button type="button" className="btn btn-ghost" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                      <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Confirm Reservation</button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
