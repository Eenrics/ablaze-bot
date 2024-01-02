import { defineConfig } from "vite";
import mkcert from 'vite-plugin-mkcert'
import react from "@vitejs/plugin-react";
import path from "path";
import fs from 'fs'
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/bets.et/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/bets.et/fullchain.pem'),
    }
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react(),],
});
