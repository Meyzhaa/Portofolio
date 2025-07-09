// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist' // Folder output hasil build
  },
  server: {
    port: 3000,     // Port saat `npm run dev`
    open: true      // Otomatis buka browser
  }
})
