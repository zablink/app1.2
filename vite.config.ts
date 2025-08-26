import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import reactRouter from "@react-router/dev/vite";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    tailwindcss()
  ]
});
