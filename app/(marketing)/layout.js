import Link from "next/link";

export default function MarketingLayout({ children }) {
  return (
    <div>
      <header
        style={{
          height: "70px",
          background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "35px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          href="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          About
        </Link>

        <Link
          href="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Contact
        </Link>

        <Link
          href="/service"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Services
        </Link>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}