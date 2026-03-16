import React from "react";

interface SeoContentProps {
  routeTitle: string;
  price: string;
  distance: string;
  duration: string;
  content: string[];
  keyword?: string;
  keywordList?: string[];
}

export default function SeoContent({
  routeTitle,
  price,
  distance,
  duration,
  content,
  keyword,
}: SeoContentProps) {
  return (
    <section style={{ padding: "4rem 0", background: "#f9f9f9" }}>
      <div className="container-custom">
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              marginBottom: "1.5rem",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            About Your <span style={{ color: "#FFD200" }}>{keyword || routeTitle}</span> Trip
          </h2>

          {price !== "On Call" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              {[
                { label: "Starting Price", value: price },
                { label: "Distance", value: distance },
                { label: "Est. Duration", value: duration },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#f0f0f0",
                    padding: "1rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "4px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0D0D0D" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {content.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  color: "#4a4a4a",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
