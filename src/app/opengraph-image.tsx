import { ImageResponse } from "next/og"

export const alt = "Linestroke — Industrial Design Studio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#080808", color: "#c6f200", padding: "68px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", fontSize: 30, color: "#f5f5f2", fontWeight: 700 }}>LINESTROKE</div>
      <div style={{ display: "flex", maxWidth: 990, fontSize: 92, lineHeight: 0.95, letterSpacing: "-5px" }}>Ideas resolved for production.</div>
      <div style={{ display: "flex", color: "#f5f5f2", fontSize: 24 }}>Industrial design · Engineering · Gurugram</div>
    </div>,
    size,
  )
}
