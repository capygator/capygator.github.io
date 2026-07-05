import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://capygator.com",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  image: {
    // Sharp als Image-Service für optimierte Build-Zeit-Konvertierung (WebP/AVIF)
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
