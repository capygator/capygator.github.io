import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://capygator.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes("/impressum") && !page.includes("/datenschutz"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === "https://capygator.com/") {
          return { ...item, priority: 1.0, changefreq: "weekly" };
        }
        if (
          item.url.includes("/fabric") ||
          item.url.includes("/power-bi") ||
          item.url.includes("/agentic-engineering")
        ) {
          return { ...item, priority: 0.9, changefreq: "monthly" };
        }
        if (item.url.includes("/preise") || item.url.includes("/kontakt")) {
          return { ...item, priority: 0.8, changefreq: "monthly" };
        }
        return item;
      },
    }),
  ],
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
