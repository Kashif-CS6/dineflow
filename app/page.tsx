import { Anton, Space_Mono, Inter } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const tickets = [
  {
    num: "TABLE 04",
    title: "2× RIBEYE",
    item: "+ truffle fries, no onion",
    status: "PREPARING",
    time: "04:12",
    dot: "var(--sage)",
  },
  {
    num: "TABLE 11",
    title: "RESERVED",
    item: "Party of 6 · 8:30 PM",
    status: "CONFIRMED",
    time: "TONIGHT",
    dot: "var(--ember)",
  },
  {
    num: "TABLE 02",
    title: "PASTA×3",
    item: "1 gluten free, table asked for rush",
    status: "READY",
    time: "00:47",
    dot: "var(--copper-bright)",
  },
  {
    num: "TABLE 07",
    title: "CLEANING",
    item: "Check turned over, resetting",
    status: "STAFF",
    time: "NOW",
    dot: "#8a7f66",
  },
  {
    num: "TABLE 15",
    title: "1× BRANZINO",
    item: "Sub side salad, VIP guest",
    status: "SERVED",
    time: "02:03",
    dot: "var(--sage)",
  },
  {
    num: "BAR 01",
    title: "2× OLD FASHIONED",
    item: "Send with table 04's mains",
    status: "NEW",
    time: "00:12",
    dot: "var(--ember)",
  },
];

const features = [
  {
    n: "01 · FRONT OF HOUSE",
    title: "Menu management",
    desc: "Build categories, price and photograph dishes, mark items 86'd the moment the kitchen runs out.",
    tags: ["variants", "availability"],
  },
  {
    n: "02 · FLOOR",
    title: "Table management",
    desc: "A live layout of every table — available, reserved, occupied or being cleaned — visible to the whole floor.",
    tags: ["live layout", "capacity"],
  },
  {
    n: "03 · FRONT DESK",
    title: "Reservations",
    desc: "Guests book online, staff confirm or seat with one tap, no-shows and cancellations tracked automatically.",
    tags: ["booking", "arrivals"],
  },
  {
    n: "04 · SERVICE",
    title: "Order management",
    desc: "Fire an order to a table in seconds, edit quantities and notes, track it from new to completed.",
    tags: ["notes", "status"],
  },
  {
    n: "05 · KITCHEN",
    title: "Kitchen display",
    desc: "A dedicated screen for the pass — new, preparing and ready, with table numbers and special instructions.",
    tags: ["live queue", "timers"],
  },
  {
    n: "06 · OFFICE",
    title: "Analytics",
    desc: "Sales, popular dishes and reservation trends by day, category and month — in charts owners actually read.",
    tags: ["sales", "trends"],
  },
];

const roles = [
  {
    cls: "admin",
    badge: "PLATFORM",
    name: "Admin",
    items: ["Manage restaurants", "Platform statistics", "Manage subscriptions"],
  },
  {
    cls: "owner",
    badge: "RESTAURANT",
    name: "Owner",
    items: ["Manage restaurant & staff", "Manage menu & tables", "View analytics"],
  },
  {
    cls: "manager",
    badge: "FLOOR",
    name: "Manager",
    items: ["Manage orders", "Manage reservations", "View reports"],
  },
  {
    cls: "staff",
    badge: "SERVICE",
    name: "Staff",
    items: ["View orders", "Update order status", "Manage assigned tables"],
  },
];

export default function Home() {
  const rail = [...tickets, ...tickets];

  return (
    <div className={`${anton.variable} ${spaceMono.variable} ${inter.variable} page`}>
      <header>
        <div className="nav-inner">
          <div className="logo">
            <svg className="mark" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="12" stroke="#D97A46" strokeWidth="2" />
              <path d="M13 6V13L17.5 15.5" stroke="#D97A46" strokeWidth="2" strokeLinecap="round" />
            </svg>
            DineFlow
          </div>
          <nav className="nav-links">
            <a href="#features">Product</a>
            <a href="#roles">Roles</a>
            <a href="#security">Security</a>
            <a href="#">Pricing</a>
          </nav>
          <div className="nav-cta">
            <a href="#" className="btn btn-ghost">Sign in</a>
            <a href="#" className="btn btn-primary">Start free</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow mono">RESTAURANT MANAGEMENT, ONE SYSTEM</div>
          <h1 className="hero-title display">
            Run the whole house <span>from one rail.</span>
          </h1>
          <p className="hero-sub">
            Menus, tables, reservations, orders and the pass — DineFlow keeps every station reading
            off the same ticket, so nothing gets lost between the floor and the kitchen.
          </p>
          <div className="hero-cta">
            <a href="#" className="btn btn-primary btn-lg">Start free</a>
            <a href="#features" className="btn btn-ghost btn-lg">See how it runs</a>
          </div>
          <div className="hero-meta mono">NO CARD REQUIRED · LIVE IN ONE SHIFT</div>
        </div>

        <div className="rail-section">
          <div className="wrap" style={{ position: "relative" }}>
            <div className="rail-rod" />
          </div>
          <div className="rail-track">
            <div className="rail-scroll">
              {rail.map((t, i) => (
                <div className="ticket" key={i}>
                  <span className="clip" />
                  <div className="t-num">{t.num}</div>
                  <div className="t-table">{t.title}</div>
                  <div className="t-item">{t.item}</div>
                  <div className="t-time">
                    <span>
                      <span className="t-dot" style={{ background: t.dot }} />
                      {t.status}
                    </span>
                    <span>{t.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="status-strip">
        <div className="status-grid">
          <div className="status-cell">
            <div className="status-label mono">FLOOR</div>
            <div className="status-value">24<span>tables live</span></div>
            <div className="status-desc">Real-time status across every table</div>
          </div>
          <div className="status-cell">
            <div className="status-label mono">PASS</div>
            <div className="status-value">6<span>min avg</span></div>
            <div className="status-desc">From fired to ready at the kitchen</div>
          </div>
          <div className="status-cell">
            <div className="status-label mono">BAR &amp; FLOOR</div>
            <div className="status-value">312<span>orders/day</span></div>
            <div className="status-desc">Handled without a dropped ticket</div>
          </div>
          <div className="status-cell">
            <div className="status-label mono">OFFICE</div>
            <div className="status-value">1<span>dashboard</span></div>
            <div className="status-desc">Menu, staff and reports in one place</div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-head wrap" style={{ padding: 0 }}>
          <div className="section-eyebrow mono">THE SYSTEM</div>
          <h2 className="section-title display">Every station, one system.</h2>
          <p className="section-desc">
            Each part of the restaurant gets its own tool — connected to the same order, the same
            table, the same guest.
          </p>
        </div>
        <div className="feat-grid">
          {features.map((f) => (
            <div className="feat-card" key={f.title}>
              <div className="feat-num mono">{f.n}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
              <div className="feat-tags">
                {f.tags.map((tag) => (
                  <span className="feat-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="roles">
        <div className="section-head wrap" style={{ padding: 0 }}>
          <div className="section-eyebrow mono">ACCESS</div>
          <h2 className="section-title display">Built for every role on the floor.</h2>
          <p className="section-desc">Each person sees exactly what their job needs — nothing they don&apos;t.</p>
        </div>
        <div className="roles-wrap">
          {roles.map((r) => (
            <div className={`role-card ${r.cls}`} key={r.name}>
              <div className="role-badge">{r.badge}</div>
              <div className="role-name">{r.name}</div>
              <ul className="role-list">
                {r.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="security" id="security">
        <div className="security-inner">
          <div>
            <div className="section-eyebrow mono">MULTI-TENANT ARCHITECTURE</div>
            <h2 className="security-title display">
              Your tables. Your data. <span className="hl">No cross-contamination.</span>
            </h2>
            <p className="security-desc">
              Every restaurant on DineFlow is a separate tenant. One kitchen never sees another&apos;s
              orders, guests, menu or staff — enforced the same way you&apos;d never let two stations&apos;
              ingredients touch.
            </p>
            <div className="security-list">
              <div className="sec-item">
                <span className="sec-dot" />
                <p><strong>Tenant-scoped records.</strong> Every order, table and reservation is tagged and checked against the restaurant it belongs to.</p>
              </div>
              <div className="sec-item">
                <span className="sec-dot" />
                <p><strong>Role-based access.</strong> What a login can see is decided by role, not by trust.</p>
              </div>
              <div className="sec-item">
                <span className="sec-dot" />
                <p><strong>Hashed passwords, signed sessions.</strong> Standard, boring, and correct.</p>
              </div>
            </div>
          </div>
          <div className="divider-diagram">
            <div className="tenant-row">
              <div className="tenant-name"><span className="tenant-sw" />Trattoria Rossi</div>
              <div className="tenant-status">42 orders today</div>
            </div>
            <div className="tenant-row">
              <div className="tenant-name"><span className="tenant-sw" />Sakura House</div>
              <div className="tenant-status">27 orders today</div>
            </div>
            <div className="tenant-row blocked">
              <div className="tenant-name"><span className="tenant-sw" />Trattoria Rossi → Sakura House data</div>
              <div className="tenant-status">access denied</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final-inner">
          <h2 className="cta-title display">
            Ready to <span className="hl">fire the first order?</span>
          </h2>
          <p className="cta-desc">
            Set up your restaurant, add your menu, and have staff running orders from DineFlow
            before the next shift.
          </p>
          <div className="cta-btns">
            <a href="#" className="btn btn-primary btn-lg">Create your restaurant</a>
            <a href="#" className="btn btn-ghost btn-lg">Talk to us</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="logo" style={{ fontSize: 16 }}>
            <svg className="mark" style={{ width: 18, height: 18 }} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="12" stroke="#8C8171" strokeWidth="2" />
              <path d="M13 6V13L17.5 15.5" stroke="#8C8171" strokeWidth="2" strokeLinecap="round" />
            </svg>
            DineFlow
          </div>
          <div className="footer-links">
            <a href="#features">Product</a>
            <a href="#roles">Roles</a>
            <a href="#security">Security</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-copy">© 2026 DINEFLOW · BUILT FOR THE HOUSE</div>
        </div>
      </footer>
    </div>
  );
}