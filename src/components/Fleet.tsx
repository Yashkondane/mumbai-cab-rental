"use client";
import Image from "next/image";

const VEHICLES = [
  {
    type: "Hyundai Xcent",
    example: "Sedan (Compact)",
    capacity: 4,
    luggage: "2 bags",
    ac: true,
    bestFor: "Budget city rides",
    priceTag: "Most Affordable",
    color: "#ffffff",
    accent: "#FFD200",
    image: "/3e749adc-c6c0-4b25-b723-8007671280a2.png"
  },
  {
    type: "Toyota Innova",
    example: "SUV",
    capacity: 6,
    luggage: "3–4 bags",
    ac: true,
    bestFor: "Groups & families",
    priceTag: "Most Popular",
    color: "#ffffff",
    accent: "#FFD200",
    badge: "Best Seller",
    image: "/5973ef0a-0888-4f6d-ad97-f83f1fddcf9b.png"
  },
  {
    type: "Toyota Etios",
    example: "Sedan",
    capacity: 4,
    luggage: "2-3 bags",
    ac: true,
    bestFor: "Airport & outstation",
    priceTag: "Comfort Sedan",
    color: "#ffffff",
    accent: "#FFD200",
    image: "/34fcdd4e-1ced-45a9-a292-6dc41dfd39a9.png"
  },
  {
    type: "Maruti Suzuki Ertiga",
    example: "MUV",
    capacity: 6,
    luggage: "2–3 bags",
    ac: true,
    bestFor: "Value groups",
    priceTag: "Value Space",
    color: "#ffffff",
    accent: "#FFD200",
    image: "/8374d571-edbc-4bfa-b952-85b84460753b.png"
  },
  {
    type: "Toyota Innova Crysta",
    example: "Premium SUV",
    capacity: 6,
    luggage: "3–4 bags",
    ac: true,
    bestFor: "Extra legroom & long trips",
    priceTag: "Extra Comfort",
    color: "#ffffff",
    accent: "#FFD200",
    image: "/be435271-d29b-4219-80c1-7c3d04dc30cf.png"
  },
  {
    type: "Tempo Traveller",
    example: "13 to 17 Seater Mini-Bus",
    capacity: 12,
    luggage: "Large cargo",
    ac: true,
    bestFor: "Large groups / tours",
    priceTag: "Group Travel",
    color: "#ffffff",
    accent: "#FFD200",
    image: "/4ce5517c-09a6-4e88-97e3-11d07b7a6692.png"
  },
];

const WA = "919372923132";

export default function Fleet() {
  return (
    <section id="fleet" style={{ background: "#fff", padding: "5rem 0" }}>
      <div className="container-custom">
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
            Our Fleet
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#0D0D0D",
              letterSpacing: "-0.5px",
            }}
          >
            Pick Your Ride
          </h2>
          <p style={{ color: "#666", marginTop: "0.75rem", maxWidth: "440px", margin: "0.75rem auto 0" }}>
            Well-maintained, air-conditioned vehicles for every group size and budget.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {VEHICLES.map((v) => (
            <div
              key={v.type}
              style={{
                background: v.color,
                borderRadius: "16px",
                padding: "1.5rem",
                border: `1.5px solid ${v.accent}33`,
                transition: "all 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 12px 36px ${v.accent}22`;
                e.currentTarget.style.borderColor = v.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = `${v.accent}33`;
              }}
            >
              {v.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "0.875rem",
                    right: "0.875rem",
                    background: "#FFD200",
                    color: "#0D0D0D",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "999px",
                    letterSpacing: "0.3px",
                  }}
                >
                  {v.badge}
                </div>
              )}

              <div
                style={{
                  width: "100%",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  marginTop: "0.5rem"
                }}
              >
                <Image
                  src={v.image}
                  alt={v.type}
                  width={200}
                  height={120}
                  style={{
                    maxWidth: "90%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.1))"
                  }}
                />
              </div>

              <div
                style={{
                  width: "32px",
                  height: "3px",
                  background: v.accent,
                  borderRadius: "2px",
                  marginBottom: "1rem",
                }}
              />

              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0D0D0D", marginBottom: "2px" }}>
                {v.type}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: "1rem" }}>{v.example}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "#666" }}>Capacity</span>
                  <span style={{ fontWeight: 700, color: "#0D0D0D" }}>{v.capacity} passengers</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "#666" }}>Luggage</span>
                  <span style={{ fontWeight: 700, color: "#0D0D0D" }}>{v.luggage}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "#666" }}>AC</span>
                  <span style={{ fontWeight: 700, color: "#22c55e" }}>Yes</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <span style={{ color: "#666" }}>Best For</span>
                  <span style={{ fontWeight: 700, color: "#0D0D0D" }}>{v.bestFor}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA}?text=Hi!%20I%20want%20to%20book%20a%20${encodeURIComponent(v.type)}%20cab.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: v.accent === "#FFD200" ? "#FFD200" : "#0D0D0D",
                  color: v.accent === "#FFD200" ? "#0D0D0D" : "#FFD200",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  padding: "10px 0",
                  borderRadius: "8px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Book {v.type} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
