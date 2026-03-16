"use client";
import { useState } from "react";

const PHONE = "+919372923132";
const WA_NUMBER = "919372923132";

export default function BookingForm() {
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I want to book a cab.\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate & Time: ${form.date}\nMy number: ${form.phone || "Same as WhatsApp"}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1.5px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    color: "#0D0D0D",
    background: "#fafafa",
    transition: "border-color 0.2s",
    outline: "none",
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "1.75rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        width: "100%",
        maxWidth: "460px",
      }}
    >
      <div style={{ marginBottom: "1.25rem" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0D0D0D", marginBottom: "4px" }}>
          Get Instant Quote
        </h3>
        <p style={{ fontSize: "0.8rem", color: "#666" }}>Fill in your details — we'll reply on WhatsApp!</p>
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            required
            value={form.pickup}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#FFD200")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            required
            value={form.drop}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#FFD200")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>
        <input
          type="datetime-local"
          name="date"
          required
          value={form.date}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#FFD200")}
          onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#FFD200")}
          onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
        />
        <button
          type="submit"
          style={{
            background: "#FFD200",
            color: "#0D0D0D",
            fontWeight: 800,
            fontSize: "1rem",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "background 0.2s, transform 0.1s",
            marginTop: "0.25rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e6bd00";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#FFD200";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L0 24l6.267-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.647-.487-5.183-1.341l-.371-.22-3.722.895.928-3.633-.242-.384A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          Book on WhatsApp
        </button>
        <a
          href={`tel:${PHONE}`}
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "0.8rem",
            display: "block",
          }}
        >
          Or call directly: <strong style={{ color: "#0D0D0D" }}>+91 93729 23132</strong>
        </a>
      </form>
    </div>
  );
}
