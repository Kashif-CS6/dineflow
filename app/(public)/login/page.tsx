import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo" style={{ justifyContent: "center", fontSize: 22 }}>
            <svg className="mark" style={{ width: 26, height: 26 }} viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="12" stroke="#D97A46" strokeWidth="2" />
              <path d="M13 6V13L17.5 15.5" stroke="#D97A46" strokeWidth="2" strokeLinecap="round" />
            </svg>
            DineFlow
          </div>
        </div>
        <h1>Sign in to your account</h1>
        <p className="auth-sub">Welcome back to the pass</p>

        <form>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="you@restaurant.com" defaultValue="marco@trattoriamilano.it" />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" defaultValue="password" />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 8 }}>Sign in</button>
        </form>

        <div className="auth-footer">
          Don&apos;t have an account? <Link href="/register">Create one</Link>
        </div>
      </div>
    </div>
  );
}
