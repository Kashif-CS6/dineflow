import Link from "next/link";

export default function PublicNav() {
  return (
    <div className="nav-inner">
      <Link href="/" className="logo">
        <svg className="mark" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="12" stroke="#D97A46" strokeWidth="2" />
          <path d="M13 6V13L17.5 15.5" stroke="#D97A46" strokeWidth="2" strokeLinecap="round" />
        </svg>
        DineFlow
      </Link>
      <nav className="nav-links">
        <Link href="/restaurants">Restaurants</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/reserve">Reserve</Link>
      </nav>
      <div className="nav-cta">
        <Link href="/login" className="btn btn-ghost">Sign in</Link>
        <Link href="/register" className="btn btn-primary">Get started</Link>
      </div>
    </div>
  );
}
