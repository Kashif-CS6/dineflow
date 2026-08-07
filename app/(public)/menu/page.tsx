const menuData = {
  name: "Trattoria Milano",
  cuisine: "Italian",
  categories: [
    {
      name: "Starters",
      items: [
        { id: 1, name: "Bruschetta al Pomodoro", desc: "Toasted ciabatta, vine tomatoes, basil, garlic, extra virgin olive oil", price: 9.50, available: true },
        { id: 2, name: "Carpaccio di Manzo", desc: "Thinly sliced beef, arugula, parmesan shavings, lemon dressing", price: 14.00, available: true },
        { id: 3, name: "Arancini", desc: "Crispy saffron risotto balls, mozzarella center, marinara dip", price: 10.00, available: true },
        { id: 4, name: "Burrata", desc: "Creamy burrata, heirloom tomatoes, basil pesto, aged balsamic", price: 13.50, available: false },
      ],
    },
    {
      name: "Main Course",
      items: [
        { id: 5, name: "Ribeye alla Fiorentina", desc: "36oz bone-in ribeye, rosemary, garlic butter, roasted potatoes", price: 42.00, available: true },
        { id: 6, name: "Risotto ai Funghi", desc: "Arborio rice, wild mushroom medley, parmesan, truffle oil", price: 19.00, available: true },
        { id: 7, name: "Branzino al Forno", desc: "Whole roasted seabass, lemon, capers, sautéed spinach", price: 28.00, available: true },
        { id: 8, name: "Pappardelle al Ragu", desc: "House-made pasta, slow-braised beef ragu, pecorino", price: 18.50, available: true },
      ],
    },
    {
      name: "Desserts",
      items: [
        { id: 9, name: "Tiramisu", desc: "Classic espresso-soaked ladyfingers, mascarpone cream, cocoa", price: 10.00, available: true },
        { id: 10, name: "Panna Cotta", desc: "Vanilla bean panna cotta, berry compote, mint", price: 9.00, available: true },
        { id: 11, name: "Cannoli Siciliani", desc: "Crispy pastry shells, sweet ricotta filling, pistachio dust", price: 11.00, available: true },
      ],
    },
    {
      name: "Drinks",
      items: [
        { id: 12, name: "Aperol Spritz", desc: "Aperol, prosecco, soda, orange slice", price: 12.00, available: true },
        { id: 13, name: "Negroni", desc: "Gin, Campari, sweet vermouth, orange peel", price: 14.00, available: true },
        { id: 14, name: "Espresso", desc: "Double shot Italian roast", price: 3.50, available: true },
        { id: 15, name: "San Pellegrino", desc: "Sparkling mineral water 750ml", price: 5.00, available: true },
      ],
    },
  ],
};

export default function MenuPage() {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="section-head" style={{ padding: 0, textAlign: "center", maxWidth: "none" }}>
          <div className="section-eyebrow mono">MENU</div>
          <h2 className="section-title display">{menuData.name}</h2>
          <p className="section-desc" style={{ marginInline: "auto" }}>{menuData.cuisine}</p>
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {menuData.categories.map((cat) => (
            <a key={cat.name} href={`#cat-${cat.name}`} style={{
              padding: "8px 18px",
              fontSize: 12,
              fontFamily: "var(--font-mono), monospace",
              color: "var(--text-mid)",
              border: "1px solid var(--line)",
              borderRadius: 20,
              transition: "border-color 0.15s ease, color 0.15s ease",
            }}>
              {cat.name}
            </a>
          ))}
        </div>

        {menuData.categories.map((cat) => (
          <div key={cat.name} id={`cat-${cat.name}`} style={{ marginBottom: 48 }}>
            <div style={{
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: 20,
              textTransform: "uppercase",
              color: "var(--copper-bright)",
              marginBottom: 16,
              paddingBottom: 10,
              borderBottom: "1px solid var(--line)",
            }}>
              {cat.name}
            </div>
            <div className="menu-grid">
              {cat.items.map((item) => (
                <div key={item.id} className="menu-item-card" style={{ opacity: item.available ? 1 : 0.5 }}>
                  <div className="mic-img">
                    IMAGE PLACEHOLDER
                  </div>
                  <div className="mic-body">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div className="mic-name">{item.name}</div>
                      {!item.available && (
                        <span style={{ fontSize: 10, fontFamily: "var(--font-mono), monospace", color: "#c44a4a", background: "rgba(196,74,74,0.12)", padding: "2px 8px", borderRadius: 20 }}>86&apos;D</span>
                      )}
                    </div>
                    <div className="mic-desc">{item.desc}</div>
                    <div className="mic-footer">
                      <div className="mic-price">&euro;{item.price.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
