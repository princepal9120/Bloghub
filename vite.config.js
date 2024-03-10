import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
export default defineConfig({
  plugins: [react()],
  
});
