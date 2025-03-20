import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api/formspree": {
        target: "https://formspree.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/formspree/, ""),
        secure: false,
      },
    },
  },
});
