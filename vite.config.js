import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8081",
      "/pdf": "http://localhost:8081"
    }
  }
});

// https://vite.dev/config/
/*
export default defineConfig({
  plugins: [react()],
})
*/
