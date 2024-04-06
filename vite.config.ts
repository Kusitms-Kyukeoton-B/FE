import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FE",
  plugins: [react()],
  resolve: {
    alias: {
      // assets 경로에 대한 별칭 설정
      "@assets": "/src/assets",
    },
  },
});
