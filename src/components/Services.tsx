"use client";
import Link from "next/link";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  cta: string;
  link: string;
}

const SERVICES: Service[] = [
  {
    id: "airport",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D0D0D">
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    title: "Airport Transfer",
    desc: "On-time pickups and drops to CSIA T1/T2 and NMIA airports. Flight tracking included.",
    features: ["Flight tracking", "Meet & greet", "24/7 pickup"],
    cta: "Book Airport Cab",
    link: "/mumbai-airport-cab",
  },
  {
    id: "local",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D0D0D">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
      </svg>
    ),
    title: "Local City Rental",
    desc: "Perfect for flexible city travel—shopping, weddings, corporate meetings, or day-long sightseeing across the city.",
    features: ["Hourly & Day packages", "AC cabs", "Multiple stops included"],
    cta: "Book Local Cab",
    link: "/cab-service-mumbai",
  },
  {
    id: "outstation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D0D0D">
        <path d="M1.5 4v14h21V4h-21zm19.5 12.5H3v-11h18v11zM7 13.5H5.5V15H7v-1.5zm1.5 0V15H10v-1.5H8.5zm3 0V15H13v-1.5h-1.5zm3 0V15H16v-1.5h-1.5zm3 0V15h1.5v-1.5H17.5z"/>
        <path d="M12 7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
    ),
    title: "Outstation Trips",
    desc: "One-way or round trips to Pune, Lonavala, Shirdi, Nashik, Mahabaleshwar & more.",
    features: ["One-way available", "Overnight trips", "Experienced drivers"],
    cta: "Book Outstation",
    link: "/outstation-cabs",
  },
];

const WA = "919372923132";

export default function Services() {
  return (
    <section id="services" style={{ background: "#fff", padding: "5rem 0" }}>
      <div className="container-custom">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "#fff7cc",
              color: "#856000",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "99px",
              marginBottom: "0.75rem",
            }}
          >
            Our Services
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#0D0D0D",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            Every Trip, Covered
          </h2>
          <p style={{ color: "#666", marginTop: "0.75rem", maxWidth: "480px", margin: "0.75rem auto 0" }}>
            From a quick airport dash to a weekend outstation getaway — we've got the right cab for every journey.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.id}
              style={{
                background: "#fafafa",
                borderRadius: "16px",
                padding: "1.75rem",
                border: "1.5px solid #e8e8e8",
                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FFD200";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,210,0,0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e8e8e8";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "#FFD200",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {s.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0D0D0D", marginBottom: "0.4rem" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {s.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", color: "#444" }}>
                    <span style={{ color: "#FFD200", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem" }}>
                <a
                  href={`https://wa.me/${WA}?text=Hi!%20I%20want%20to%20book%20a%20${encodeURIComponent(s.title)}%20cab.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background: "#0D0D0D",
                    color: "#FFD200",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    padding: "11px 0",
                    borderRadius: "8px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FFD200";
                    e.currentTarget.style.color = "#0D0D0D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0D0D0D";
                    e.currentTarget.style.color = "#FFD200";
                  }}
                >
                  {s.cta} →
                </a>
                
                {s.link && (
                  <Link
                    href={s.link}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      background: "transparent",
                      color: "#0D0D0D",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      padding: "11px 0",
                      borderRadius: "8px",
                      border: "1.5px solid #0D0D0D",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#0D0D0D";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#0D0D0D";
                    }}
                  >
                    Know More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
