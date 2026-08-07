const restaurants = [
  {
    id: 1,
    name: "Trattoria Milano",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 342,
    address: "12 Via Roma, Milano",
    hours: "11:00 — 23:00",
    image: null,
  },
  {
    id: 2,
    name: "Sakura House",
    cuisine: "Japanese",
    rating: 4.7,
    reviews: 218,
    address: "45 Shibuya Lane, Tokyo",
    hours: "12:00 — 22:30",
    image: null,
  },
  {
    id: 3,
    name: "Le Bistro Parisien",
    cuisine: "French",
    rating: 4.6,
    reviews: 156,
    address: "8 Rue de Rivoli, Paris",
    hours: "10:00 — 23:00",
    image: null,
  },
  {
    id: 4,
    name: "El Fuego Cantina",
    cuisine: "Mexican",
    rating: 4.5,
    reviews: 289,
    address: "78 Avenida Reforma, CDMX",
    hours: "11:30 — 01:00",
    image: null,
  },
  {
    id: 5,
    name: "Golden Dragon",
    cuisine: "Chinese",
    rating: 4.9,
    reviews: 403,
    address: "22 Nanjing Road, Shanghai",
    hours: "11:00 — 22:00",
    image: null,
  },
  {
    id: 6,
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.4,
    reviews: 178,
    address: "5 MG Road, Mumbai",
    hours: "12:00 — 23:30",
    image: null,
  },
];

export default function RestaurantsPage() {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head" style={{ padding: 0 }}>
          <div className="section-eyebrow mono">DISCOVER</div>
          <h2 className="section-title display">Restaurants on DineFlow.</h2>
          <p className="section-desc">Browse restaurants, check their menus and book a table.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 20,
        }}>
          {restaurants.map((r) => (
            <a
              key={r.id}
              href={`/menu?id=${r.id}`}
              style={{
                background: "var(--ink-soft)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                overflow: "hidden",
                transition: "border-color 0.2s ease, transform 0.2s ease",
                display: "block",
              }}
              className="rest-card"
            >
              <div style={{
                height: 180,
                background: "var(--ink-softer)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                color: "var(--text-dim)",
              }}>
                {r.name} LOGO
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 20, textTransform: "uppercase", color: "var(--text-hi)" }}>
                      {r.name}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--copper-bright)", marginTop: 4, fontFamily: "var(--font-mono), monospace" }}>
                      {r.cuisine}
                    </div>
                  </div>
                  <div style={{
                    background: "rgba(232, 153, 61, 0.12)",
                    color: "var(--ember)",
                    padding: "4px 10px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontFamily: "var(--font-mono), monospace",
                  }}>
                    &starf; {r.rating} ({r.reviews})
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "var(--text-mid)", marginTop: 12 }}>
                  {r.address}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>
                  {r.hours}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
