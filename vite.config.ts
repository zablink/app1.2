import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import reactRouter from "@react-router/dev/vite"; // 👈 default import

export default defineConfig({
  plugins: [
    reactRouter(),   // 👈 ต้องเป็น function
    tsconfigPaths(),
    tailwindcss()
  ]
});
