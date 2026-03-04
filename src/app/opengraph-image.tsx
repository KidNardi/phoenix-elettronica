import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #111315 0%, #1b1d20 55%, #2a1e16 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "48px",
            right: "72px",
            width: "280px",
            height: "280px",
            borderRadius: "999px",
            background: "rgba(249,115,22,0.20)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "36px",
            padding: "48px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "24px",
                color: "#fdba74",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "18px",
                  background: "rgba(249,115,22,0.16)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span>P</span>
              </div>
              <span>{siteConfig.siteName}</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "66px",
                fontWeight: 700,
                maxWidth: "760px",
                lineHeight: 1.05,
              }}
            >
              <span>Impianti elettrici ed elettronici a Bari</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                color: "rgba(255,255,255,0.72)",
                maxWidth: "760px",
              }}
            >
              <span>
                Preventivi chiari, interventi rapidi e soluzioni su misura per condomini, aziende e
                privati.
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "24px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <div style={{ display: "flex" }}>
              <span>{siteConfig.nap.phone}</span>
            </div>
            <div style={{ display: "flex" }}>
              <span>{siteConfig.nap.city} - Italia</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
