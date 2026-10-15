import { ImageResponse } from "next/og";

import { profile } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — Full-Stack Developer & AI/ML Enthusiast`;

/**
 * Social share card. Uses only flexbox and system fonts, which is all
 * `ImageResponse` (Satori) reliably supports.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #101318 0%, #08090b 55%, #07080a 100%)",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* accent glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "rgba(255,176,32,0.13)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />

        {/* top row: monogram + identity */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: 18,
              border: "1px solid rgba(255,176,32,0.4)",
              background: "#0e1013",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "#ffb020",
            }}
          >
            OM
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 5,
              color: "#6d747d",
            }}
          >
            OM / CODE / AI
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#ffb020",
              letterSpacing: 3,
              marginBottom: 20,
            }}
          >
            {profile.name.toUpperCase()}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              color: "#eef0f2",
              lineHeight: 1.12,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Building Digital Products with Code &amp; Intelligence.
          </div>
        </div>

        {/* bottom row: roles */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            borderTop: "1px solid #23272c",
            paddingTop: 30,
          }}
        >
          {profile.roles.map((role) => (
            <div
              key={role}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#a0a7b0",
                border: "1px solid #23272c",
                borderRadius: 10,
                padding: "10px 20px",
                background: "rgba(20,23,25,0.7)",
              }}
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
