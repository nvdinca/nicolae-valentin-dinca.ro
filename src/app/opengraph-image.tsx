import { ImageResponse } from "next/og";
import { SITE_JOB_TITLE, SITE_SHORT_TAGLINE } from "@/lib/brand";

export const alt = `Nicolae-Valentin Dincă — ${SITE_JOB_TITLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f5f0",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#0c0c0c",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Nicolae-Valentin Dincă
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#0c0c0c",
            opacity: 0.8,
          }}
        >
          {SITE_SHORT_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
