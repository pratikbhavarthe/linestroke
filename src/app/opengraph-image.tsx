import { ImageResponse } from "next/og"

export const alt = "Linestroke — Industrial Design Studio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#2b438d", color: "#c9e4ff", padding: "68px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#f3f7fc", fontWeight: 700 }}><div style={{ display: "flex", width: 18, height: 18, borderRadius: 9, background: "#ffbcf9" }} />LINESTROKE</div>
      <div style={{ display: "flex", maxWidth: 990, fontSize: 92, lineHeight: 0.95, letterSpacing: "-5px" }}>Ideas resolved for production.</div>
      <div style={{ display: "flex", color: "#f3f7fc", fontSize: 24 }}>Industrial design · Engineering · Gurugram</div>
    </div>,
    size,
  )
}
