import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Ferdoush Saleheen — Official Digital Platform",
    short_name: "Ferdoush Saleheen",
    description: "Books, audiobook, podcasts, research, and professional profile of Dr. Ferdoush Saleheen.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "bn-BD",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
