"use client";
import Link from "next/link";
import Image from "next/image";

const PHONE = "+919372923132";
const PHONE_DISPLAY = "+91 93729 23132";
const WA = "919372923132";

const AREAS = [
  "Andheri", "Bandra", "Juhu", "Borivali", "Malad",
  "Thane", "Navi Mumbai", "Kurla", "Dadar", "Colaba",
  "Worli", "Powai", "Vikhroli", "Vile Parle"
];

const LINKS = [
  { label: "Airport Transfer", href: "#services" },
  { label: "Local Rental", href: "#services" },
  { label: "Outstation Trips", href: "#services" },
  { label: "Popular Routes", href: "#routes" },
  { label: "Mumbai to Anywhere", href: "/mumbai-to-anywhere" },
  { label: "Cabs to Mumbai", href: "/to-mumbai-cabs" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0D0D0D", color: "#aaa", borderTop: "3px solid #FFD200" }}>
      <div className="container-custom" style={{ padding: "3.5rem 1rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <Image
                src="/Mumbai-cabs-logo.png"
                alt="Mumbai Cabs Rental Logo"
                width={180}
                height={44}
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain"
                }}
              />
            </Link>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Reliable, affordable cab service in Mumbai. Airport transfers, local rentals & outstation trips — 24/7.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexDirection: "column" }}>
              <a
                href={`tel:${PHONE}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#FFD200",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#25D366",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L0 24l6.267-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.647-.487-5.183-1.341l-.371-.22-3.722.895.928-3.633-.242-.384A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Services
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ fontSize: "0.85rem", color: "#888", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD200")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Service Areas
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {AREAS.map((a) => (
                <span
                  key={a}
                  style={{
                    background: "#1a1a1a",
                    color: "#888",
                    fontSize: "0.75rem",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    border: "1px solid #2a2a2a",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #222",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "#555" }}>
            © {new Date().getFullYear()} Mumbai Cabs Rental. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "#555" }}>Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
