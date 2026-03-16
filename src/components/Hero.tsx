"use client";
import BookingForm from "./BookingForm";

interface HeroProps {
  h1Title?: string;
  h1Highlight?: string;
  heroSubtitle?: string;
  seoMode?: boolean;
}

export default function Hero({ h1Title, h1Highlight, heroSubtitle, seoMode }: HeroProps) {
  const displayTitle = h1Title || "Mumbai's Most ";
  const displayHighlight = h1Highlight || "Trusted";
  const displaySubtitle = heroSubtitle || (
    <>
      Airport transfers, local city rides & outstation trips — all with{" "}
      <strong style={{ color: "#fff" }}>AC cabs</strong>,{" "}
      <strong style={{ color: "#fff" }}>verified drivers</strong>, and{" "}
      <strong style={{ color: "#fff" }}>upfront pricing</strong>. No surprises.
    </>
  );

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 50%, #0D0D0D 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,210,0,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,210,0,0.06) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,210,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,210,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        className={`container-custom ${seoMode ? "" : "hero-grid"}`}
        style={{
          position: "relative",
          zIndex: 1,
          display: seoMode ? "flex" : "grid",
          flexDirection: seoMode ? "column" : "row",
          gridTemplateColumns: seoMode ? "none" : "1fr",
          justifyContent: seoMode ? "center" : "flex-start",
          textAlign: seoMode ? "center" : "left",
          gap: "3rem",
          alignItems: "center",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Left — Content */}
        <div style={{ maxWidth: seoMode ? "800px" : "620px", width: "100%", display: "flex", flexDirection: "column", alignItems: seoMode ? "center" : "flex-start" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,210,0,0.12)",
              border: "1px solid rgba(255,210,0,0.3)",
              borderRadius: "999px",
              padding: "6px 14px",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#FFD200",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ color: "#FFD200", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.5px" }}>
              24/7 AVAILABLE · INSTANT BOOKING
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              marginBottom: "1.25rem",
            }}
          >
            {displayTitle}
            {!h1Title && <br />}
            <span
              style={{
                background: "linear-gradient(135deg, #FFD200, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {displayHighlight}
            </span>{" "}
            {!h1Title && <br />}
            {!h1Title && "Cab Service"}
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: seoMode ? "700px" : "500px",
            }}
          >
            {displaySubtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "2.5rem", justifyContent: seoMode ? "center" : "flex-start" }}>
            <a
              href="tel:+919372923132"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#FFD200",
                color: "#0D0D0D",
                fontWeight: 800,
                fontSize: "1rem",
                padding: "14px 24px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.1s",
                boxShadow: "0 4px 20px rgba(255,210,0,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e6bd00";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFD200";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Now
            </a>

            <a
              href="https://wa.me/919372923132?text=Hi!%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#25D366",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "14px 24px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.1s",
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L0 24l6.267-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.647-.487-5.183-1.341l-.371-.22-3.722.895.928-3.633-.242-.384A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              WhatsApp
            </a>

            {!seoMode && (
              <a
                href="#fleet"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "14px 20px",
                  borderRadius: "8px",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FFD200";
                  e.currentTarget.style.color = "#FFD200";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                View Fleet →
              </a>
            )}
          </div>

          {!seoMode && (
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex" }}>
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} style={{ color: "#FFD200", fontSize: "1rem" }}>★</span>
                  ))}
                </div>
                <span style={{ color: "#999", fontSize: "0.85rem" }}>4.9/5 on Google</span>
              </div>
              <div style={{ color: "#666", fontSize: "0.85rem" }}>|</div>
              <span style={{ color: "#999", fontSize: "0.85rem" }}>10,000+ Happy Customers</span>
            </div>
          )}
        </div>

        {/* Right — Booking Form */}
        {!seoMode && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BookingForm />
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
