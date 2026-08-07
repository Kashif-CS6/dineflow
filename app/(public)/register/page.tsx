import Link from "next/link";

export default function RegisterPage() {
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
        <h1>Create your restaurant</h1>
        <p className="auth-sub">Set up your restaurant in one shift</p>

        <form>
          <div className="form-group">
            <label className="form-label">Restaurant Name</label>
            <input type="text" className="form-input" placeholder="Your restaurant name" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="Full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="you@restaurant.com" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Minimum 8 characters" />
          </div>
          <div className="form-group">
            <label className="form-label">Restaurant Address</label>
            <input type="text" className="form-input" placeholder="Full address" />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 8 }}>Create restaurant</button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link href="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
