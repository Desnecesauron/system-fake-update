import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path para GitHub Pages (project pages: /<repo>/).
// Em dev/preview local usa '/'.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/system-fake-update/' : '/',
  plugins: [react()],
})
