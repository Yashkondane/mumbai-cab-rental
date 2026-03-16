"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PHONE = "+919372923132";
const PHONE_DISPLAY = "+91 93729 23132";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#0D0D0D",
        borderBottom: "3px solid #FFD200",
        boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          <Image
            src="/Mumbai-cabs-logo.png"
            alt="Mumbai Cabs Rental Logo"
            width={180}
            height={44}
            style={{
              height: "44px",
              width: "auto",
              objectFit: "contain"
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center" }} className="hidden-mobile">
          {["Services", "Routes", "Fleet", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#ccc",
                fontWeight: 500,
                fontSize: "0.875rem",
                transition: "color 0.2s",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD200")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          <a
            href={`tel:${PHONE}`}
            style={{ color: "#FFD200", fontWeight: 700, fontSize: "0.875rem", display: "none" }}
            className="show-tablet"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`tel:${PHONE}`}
            style={{
              background: "#FFD200",
              color: "#0D0D0D",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "8px 16px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "background 0.2s, transform 0.1s",
              whiteSpace: "nowrap",
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#fff",
              padding: "4px",
            }}
            className="show-mobile-flex"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "#161616",
            borderTop: "1px solid #333",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {["Services", "Routes", "Fleet", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                color: "#fff",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "0.5rem 0",
                borderBottom: "1px solid #333",
              }}
            >
              {item}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            style={{
              background: "#FFD200",
              color: "#0D0D0D",
              fontWeight: 700,
              textAlign: "center",
              padding: "0.75rem",
              borderRadius: "6px",
              marginTop: "0.5rem",
            }}
          >
                        Call — {PHONE_DISPLAY}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile-flex { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile-flex { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (min-width: 600px) {
          .show-tablet { display: block !important; }
        }
      `}</style>
    </header>
  );
}
