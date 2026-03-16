"use client";

const PHONE = "+919372923132";
const WA = "919372923132";

export default function CTASection() {
  return (
    <section
      style={{
        background: "#FFD200",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-80px",
          top: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-60px",
          bottom: "-60px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.05)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-custom"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(0,0,0,0.08)",
            padding: "6px 16px",
            borderRadius: "99px",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "#0D0D0D",
            letterSpacing: "0.5px",
            marginBottom: "1.25rem",
            textTransform: "uppercase",
          }}
        >
                    Instant Booking Available
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "#0D0D0D",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Ready to Book Your Cab?
        </h2>
        <p
          style={{
            color: "#4a3500",
            fontSize: "1.05rem",
            marginBottom: "2.5rem",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          Get a confirmed cab in minutes. Call us directly or ping us on WhatsApp — we respond instantly, 24/7.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`tel:${PHONE}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#0D0D0D",
              color: "#FFD200",
              fontWeight: 800,
              fontSize: "1.05rem",
              padding: "16px 32px",
              borderRadius: "10px",
              transition: "background 0.2s, transform 0.1s",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#222";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0D0D0D";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now — +91 93729 23132
          </a>

          <a
            href={`https://wa.me/${WA}?text=Hi!%20I%20want%20to%20book%20a%20cab.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#25D366",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1.05rem",
              padding: "16px 32px",
              borderRadius: "10px",
              transition: "background 0.2s, transform 0.1s",
              boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1ebe5d";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#25D366";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L0 24l6.267-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.647-.487-5.183-1.341l-.371-.22-3.722.895.928-3.633-.242-.384A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <p style={{ marginTop: "1.5rem", color: "#5a3c00", fontSize: "0.85rem" }}>
          Avg. response time: <strong>under 2 minutes</strong> · Available in all Mumbai areas
        </p>
      </div>
    </section>
  );
}
