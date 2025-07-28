import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A linha abaixo foi corrigida para garantir que o site funciona online
  base: "/",
  build: {
    chunkSizeWarningLimit: 900,
  },
});
