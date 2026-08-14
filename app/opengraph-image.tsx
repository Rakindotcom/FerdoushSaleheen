import { ImageResponse } from "next/og";

export const alt = "Dr. Ferdoush Saleheen — Official Digital Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "radial-gradient(circle at 78% 28%, #3a2a0d 0%, #10100e 35%, #050505 72%)",
          color: "#f7f3e8",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "70px",
          width: "100%",
        }}
      >
        <div style={{ border: "1px solid rgba(214,166,66,.4)", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "56px", width: "100%" }}>
          <div style={{ color: "#d6a642", display: "flex", fontSize: 23, letterSpacing: 5 }}>OFFICIAL DIGITAL PLATFORM</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 76, fontWeight: 600, letterSpacing: -3 }}>Dr. Ferdoush Saleheen</div>
            <div style={{ color: "#aaa69c", display: "flex", fontSize: 28, marginTop: 22 }}>Academic · Supply Chain Leader · Researcher · Author</div>
          </div>
          <div style={{ color: "#e8c573", display: "flex", fontSize: 25 }}>Books · Audiobook · Podcasts · Research</div>
        </div>
      </div>
    ),
    size,
  );
}
