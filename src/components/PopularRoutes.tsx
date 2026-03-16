"use client";

const ROUTES = [
  {
    from: "Mumbai",
    to: "Pune",
    distance: "150 km",
    time: "~3 hrs",
    price: "₹2,800",
  },
  {
    from: "Mumbai",
    to: "Nashik",
    distance: "165 km",
    time: "~3.5 hrs",
    price: "₹3,000",
  },
  {
    from: "Mumbai",
    to: "Lonavala",
    distance: "85 km",
    time: "~2 hrs",
    price: "₹2,700",
  },
  {
    from: "Mumbai",
    to: "Shirdi",
    distance: "240 km",
    time: "~4.5 hrs",
    price: "₹4,500",
  },
  {
    from: "Mumbai",
    to: "Mahabaleshwar",
    distance: "260 km",
    time: "~5.5 hrs",
    price: "₹4,500",
  },
  {
    from: "Mumbai",
    to: "Goa",
    distance: "590 km",
    time: "~11 hrs",
    price: "₹9,999",
  },
];

const WA = "919372923132";

export default function PopularRoutes() {
  return (
    <section id="routes" style={{ background: "#f5f5f5", padding: "5rem 0" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "#fff7cc",
              color: "#b8860b",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "99px",
              marginBottom: "0.75rem",
            }}
          >
            Popular Routes
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#0D0D0D",
              letterSpacing: "-0.5px",
            }}
          >
            Top Outstation Trips
          </h2>
          <p style={{ color: "#666", marginTop: "0.75rem", maxWidth: "440px", margin: "0.75rem auto 0" }}>
            Fixed, transparent fares — no hidden charges. One-way & round-trip options available.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {ROUTES.map((r) => (
            <div
              key={r.to}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "1.5rem",
                border: "1.5px solid #e8e8e8",
                transition: "all 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FFD200";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e8e8e8";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Destination accent bar */}
              <div
                style={{
                  width: "32px",
                  height: "3px",
                  background: "#FFD200",
                  borderRadius: "2px",
                  marginBottom: "0.875rem",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0D0D0D" }}>{r.from}</span>
                <span style={{ color: "#FFD200", fontWeight: 900 }}>→</span>
                <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0D0D0D" }}>{r.to}</span>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.8rem", color: "#888" }}>{r.distance}</span>
                <span style={{ fontSize: "0.8rem", color: "#888" }}>{r.time}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: "0.875rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#999", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Starting from
                  </div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0D0D0D" }}>{r.price}</div>
                </div>
                <a
                  href={`https://wa.me/${WA}?text=Hi!%20I%20want%20to%20book%20a%20cab%20from%20${r.from}%20to%20${r.to}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#FFD200",
                    color: "#0D0D0D",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e6bd00")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#FFD200")}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/mumbai-to-anywhere"
            style={{
              background: "#0D0D0D",
              color: "#FFD200",
              fontWeight: 800,
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              border: "2px solid #0D0D0D",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#0D0D0D";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0D0D0D";
              e.currentTarget.style.color = "#FFD200";
            }}
          >
            Mumbai to Anywhere →
          </a>
          <a
            href="/to-mumbai-cabs"
            style={{
              background: "transparent",
              color: "#0D0D0D",
              fontWeight: 800,
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              border: "2px solid #0D0D0D",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0D0D0D";
              e.currentTarget.style.color = "#FFD200";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#0D0D0D";
            }}
          >
            Anywhere to Mumbai →
          </a>
        </div>

        <p style={{ textAlign: "center", marginTop: "2rem", color: "#888", fontSize: "0.85rem" }}>
          Need a different route?{" "}
          <a
            href={`https://wa.me/${WA}?text=Hi!%20I%20need%20a%20custom%20route%20cab.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFD200", fontWeight: 700, textDecoration: "underline" }}
          >
            Chat with us on WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
