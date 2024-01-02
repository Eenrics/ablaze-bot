import { defineConfig } from "vite";
import mkcert from 'vite-plugin-mkcert'
import react from "@vitejs/plugin-react";
import path from "path";
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const isDev = process.env.VITE_NODE_ENV === 'development'

const settings = isDev ? {} : {
  https: {
    key: fs.readFileSync('/etc/letsencrypt/live/bets.et/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/bets.et/fullchain.pem'),
  }
}

console.log({ settings, NODE_ENV: process.env.VITE_NODE_ENV })

export default defineConfig({
  server: settings,
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react(),],
});
