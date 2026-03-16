"use client";

const REVIEWS = [
  {
    name: "Priya Sharma",
    trip: "Mumbai → Pune",
    rating: 5,
    text: "Absolutely brilliant service! The driver arrived 10 minutes early, the car was spotlessly clean, and we got to Pune faster than expected. Will definitely book again.",
    date: "2 weeks ago",
    avatar: "PS",
    avatarColor: "#e91e63",
  },
  {
    name: "Rahul Mehta",
    trip: "CSIA Airport Transfer",
    rating: 5,
    text: "Booked for my 5am flight and they were right on time. AC was perfect, driver was polite and helped with luggage. Great value for money!",
    date: "1 month ago",
    avatar: "RM",
    avatarColor: "#1976d2",
  },
  {
    name: "Anita Desai",
    trip: "Local 8-Hour Rental",
    rating: 5,
    text: "Used the 8-hour package for multiple errands across the city. The driver knew Mumbai's roads well and the price was exactly as quoted — no hidden charges!",
    date: "3 weeks ago",
    avatar: "AD",
    avatarColor: "#388e3c",
  },
  {
    name: "Vikram Nair",
    trip: "Mumbai → Shirdi",
    rating: 5,
    text: "Booked a Sedan for the Shirdi pilgrimage. Driver was professional, car was clean, and he even helped at the ghats. Highly recommend for long trips!",
    date: "1 week ago",
    avatar: "VN",
    avatarColor: "#f57c00",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#0D0D0D", padding: "5rem 0" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,210,0,0.12)",
              color: "#FFD200",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "99px",
              marginBottom: "0.75rem",
              border: "1px solid rgba(255,210,0,0.2)",
            }}
          >
            Customer Reviews
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.5px",
            }}
          >
            What Our Riders Say
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "0.75rem" }}>
            {[1,2,3,4,5].map((s) => (
              <span key={s} style={{ color: "#FFD200", fontSize: "1.2rem" }}>★</span>
            ))}
            <span style={{ color: "#999", fontSize: "0.9rem", marginLeft: "6px" }}>4.9/5 avg · 500+ reviews on Google</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              style={{
                background: "#161616",
                borderRadius: "16px",
                padding: "1.5rem",
                border: "1.5px solid #2a2a2a",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FFD200";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "2px", marginBottom: "0.875rem" }}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#FFD200", fontSize: "0.9rem" }}>★</span>
                ))}
              </div>

              {/* Google quote-mark */}
              <p
                style={{
                  color: "#ccc",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "1.25rem",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid #2a2a2a", paddingTop: "1rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: r.avatarColor,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {r.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem" }}>{r.name}</div>
                  <div style={{ color: "#FFD200", fontSize: "0.75rem" }}>{r.trip}</div>
                </div>
                <div style={{ color: "#555", fontSize: "0.7rem", flexShrink: 0 }}>{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
