import Link from "next/link";

export default function MarketingLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", color: "#1e293b" }}>

      {/* Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <nav
          style={{
            margin: "0 auto",
            maxWidth: "1280px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.5px" }}
          >
            <span style={{ color: "#2563eb" }}>My</span>
            <span style={{ color: "#0f172a" }}>Website</span>
          </Link>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              href="/"
              style={{
                borderRadius: "999px",
                padding: "10px 20px",
                fontWeight: 600,
                color: "#ffffff",
                background: "#f59e0b",
                boxShadow: "0 6px 16px rgba(245,158,11,0.3)",
              }}
            >
              Home
            </Link>

            <Link
              href="/about"
              style={{
                borderRadius: "999px",
                padding: "10px 20px",
                fontWeight: 600,
                color: "#ffffff",
                background: "#10b981",
                boxShadow: "0 6px 16px rgba(16,185,129,0.3)",
              }}
            >
              About
            </Link>

            <Link
              href="/service"
              style={{
                borderRadius: "999px",
                padding: "10px 20px",
                fontWeight: 600,
                color: "#ffffff",
                background: "#8b5cf6",
                boxShadow: "0 6px 16px rgba(139,92,246,0.3)",
              }}
            >
              Services
            </Link>

            <Link
              href="/contact"
              style={{
                borderRadius: "999px",
                padding: "12px 24px",
                fontWeight: 600,
                color: "#ffffff",
                background: "#2563eb",
                boxShadow: "0 10px 25px rgba(37,99,235,0.3)",
              }}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer style={{ background: "#020617", color: "#ffffff" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "1280px",
            display: "grid",
            gap: "40px",
            padding: "56px 24px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700 }}>
              <span style={{ color: "#3b82f6" }}>My</span>Website
            </h2>
            <p style={{ marginTop: "16px", maxWidth: "380px", lineHeight: 1.7, color: "#94a3b8" }}>
              We create modern digital experiences that help businesses grow and succeed.
            </p>
          </div>

          <div>
            <h3 style={{ fontWeight: 700 }}>Quick Links</h3>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px", color: "#94a3b8" }}>
              <Link href="/" style={{ display: "block" }}>Home</Link>
              <Link href="/about" style={{ display: "block" }}>About</Link>
              <Link href="/service" style={{ display: "block" }}>Services</Link>
              <Link href="/contact" style={{ display: "block" }}>Contact</Link>
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: 700 }}>Contact</h3>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px", color: "#94a3b8" }}>
              <p>📧 hello@mywebsite.com</p>
              <p>📞 +855 12 345 678</p>
              <p>📍 Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b" }}>
          <div
            style={{
              margin: "0 auto",
              maxWidth: "1280px",
              padding: "24px",
              textAlign: "center",
              fontSize: "14px",
              color: "#64748b",
            }}
          >
            © 2026 MyWebsite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}