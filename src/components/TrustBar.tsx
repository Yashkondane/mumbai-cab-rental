"use client";

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD200">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    label: "10,000+ Trips",
    sub: "Successfully completed",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD200">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 5h1.5v5.25l4.5 2.67-.75 1.23L11.5 13V7z"/>
      </svg>
    ),
    label: "24/7 Available",
    sub: "Book anytime, day or night",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD200">
        <path d="M11 3h2v3.25l2.7-1.56 1 1.73L14 7.87l2.7 1.56-1 1.73L13 9.6V11h-2V9.6l-2.7 1.56-1-1.73L10 7.87 7.3 6.42l1-1.73L11 6.25V3zm5.9 9.6l1 1.73-2.7 1.56 2.7 1.55-1 1.73L14 17.61V21h-2v-3.39l-2.7 1.56-1-1.73 2.7-1.55-2.7-1.56 1-1.73L12 14.13l2.7-1.56 1.2.06-.8.97z"/>
      </svg>
    ),
    label: "100% AC Cabs",
    sub: "Comfortable every ride",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD200">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    ),
    label: "Verified Drivers",
    sub: "Background-checked & trained",
  },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        padding: "2.5rem 0",
      }}
    >
      <div className="container-custom">
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "1.5rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,210,0,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,210,0,0.2)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(255,210,0,0.15)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {item.icon}
              </span>
              <div>
                <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                  {item.label}
                </div>
                <div style={{ color: "#999999", fontSize: "0.85rem", fontWeight: 500 }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
