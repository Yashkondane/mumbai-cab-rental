"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How do I book a cab in Mumbai?",
    a: "Simply call us at +91 93729 23132 or send us a WhatsApp message. You can also fill out the booking form on this page and we'll confirm your cab within minutes.",
  },
  {
    q: "Do you provide airport transfer service to CSIA and NMIA?",
    a: "Yes! We serve both Chhatrapati Shivaji Maharaj International Airport (T1 & T2) and the new Navi Mumbai International Airport. We track your flight to ensure on-time pickup.",
  },
  {
    q: "Are your cab fares fixed or metered?",
    a: "All our fares are fixed and agreed upfront before the trip. There are absolutely no hidden charges, toll or parking surcharges may apply on outstation trips and are communicated in advance.",
  },
  {
    q: "What areas in Mumbai do you cover?",
    a: "We cover all of Mumbai including Andheri, Bandra, Juhu, Borivali, Thane, Navi Mumbai, Kurla, Dadar, Colaba, and all surrounding areas. We also do outstation trips across Maharashtra.",
  },
  {
    q: "Can I hire a cab for a full day?",
    a: "Absolutely. We offer 4-hour (40 km limit) and 8-hour (80 km limit) local rental packages. Perfect for shopping trips, hospital visits, meetings, or city tours.",
  },
  {
    q: "Are your drivers background-verified?",
    a: "Yes, all our drivers undergo thorough background checks, police verification, and training before joining our fleet. Their details are shared with you before the trip.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "#f5f5f5", padding: "5rem 0" }}>
      <div className="container-custom" style={{ maxWidth: "800px" }}>
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
            FAQ
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#0D0D0D",
              letterSpacing: "-0.5px",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                border: `1.5px solid ${openIndex === i ? "#FFD200" : "#e8e8e8"}`,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.125rem 1.25rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
                aria-expanded={openIndex === i}
                id={`faq-btn-${i}`}
                aria-controls={`faq-panel-${i}`}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#0D0D0D",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#FFD200",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    padding: "0 1.25rem 1.25rem",
                    color: "#555",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "1rem",
                    marginTop: "0",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
