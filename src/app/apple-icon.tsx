import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen icon for iOS/Android (file convention). Same mark as the
// favicon: the ">>" wordmark on brand indigo.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3f0ff2",
          color: "#edf656",
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: -8,
        }}
      >
        &gt;&gt;
      </div>
    ),
    { ...size }
  );
}
