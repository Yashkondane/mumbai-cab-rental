"use client";
import Hero from "@/components/Hero";
import { seoRoutes } from "@/lib/seoData";
import Link from "next/link";

export default function AnywhereToMumbai() {
  const routes = seoRoutes.filter((r) => r.slug.endsWith("-mumbai-cab"));

  return (
    <main>
      <Hero
        h1Title="Cabs "
        h1Highlight="to Mumbai"
        heroSubtitle="Reliable outstation cab services from various cities to Mumbai. Experience the comfort of our well-maintained fleet and professional drivers."
        seoMode={true}
      />

      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div className="container-custom">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem", textAlign: "center" }}>
              Routes to Mumbai
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {routes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/${route.slug}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.5rem",
                    background: "#f9f9f9",
                    borderRadius: "12px",
                    border: "1px solid #eee",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                    e.currentTarget.style.borderColor = "#FFD200";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#eee";
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0D0D0D", marginBottom: "4px" }}>
                      {route.routeTitle}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>
                      Distance: {route.distance} | Duration: {route.duration}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#0D0D0D" }}>{route.price}</div>
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>Starting from</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
