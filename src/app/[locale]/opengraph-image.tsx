import { ImageResponse } from "next/og";
import type { Locale } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide default OG image (Next.js file convention - applies to
// every route under [locale] that doesn't define its own). Per the
// launch rule in business-ideas/CLAUDE.md: "OG image designed like a
// YouTube thumbnail - it's seen more than the site." Colors/wordmark
// match DESIGN.md exactly (indigo #3f0ff2, lavender #eeecfe, electric
// yellow #edf656); no custom font loading here to keep this reliable
// at build time, so weight/shape (not the Poppins typeface) carries
// the brand feel.
const tagline: Record<Locale, string> = {
  de: "Du denkst schnell. Tippst du auch so?",
  en: "You type every day. Why not twice as fast?",
  fr: "Tu tapes tous les jours. Pourquoi pas deux fois plus vite ?",
};

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = (locale as Locale) in tagline ? (locale as Locale) : "en";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#eeecfe",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 48 }}>
          <span style={{ color: "#3f0ff2", fontSize: 56, fontWeight: 800 }}>&gt;&gt;</span>
          <span style={{ color: "#050111", fontSize: 56, fontWeight: 800, marginLeft: 8 }}>Typing</span>
        </div>
        <div
          style={{
            color: "#050111",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {tagline[l]}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            marginTop: 56,
            padding: "10px 24px",
            borderRadius: 999,
            backgroundColor: "rgba(237,246,86,0.6)",
            color: "#050111",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          fastforwardtyping.com
        </div>
      </div>
    ),
    { ...size }
  );
}
