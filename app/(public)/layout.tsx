import PublicNav from "@/components/dash/PublicNav";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <header className="public-header">
        <PublicNav />
      </header>
      {children}
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
            <a href="/restaurants">Restaurants</a>
            <a href="/menu">Menu</a>
            <a href="/reserve">Reserve</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-copy">&copy; 2026 DINEFLOW &middot; BUILT FOR THE HOUSE</div>
        </div>
      </footer>
    </div>
  );
}
