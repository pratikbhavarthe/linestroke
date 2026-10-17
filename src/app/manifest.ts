import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Linestroke Industrial Design Studio",
    short_name: "Linestroke",
    description: "Industrial design and engineering for production-ready physical products.",
    start_url: "/",
    display: "standalone",
    background_color: "#222222",
    theme_color: "#222222",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  }
}
