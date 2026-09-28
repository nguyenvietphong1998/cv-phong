import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Cấu hình Vite: plugin React + Tailwind CSS v4 (không cần tailwind.config riêng)
export default defineConfig({
  // Duong dan tuong doi de chay dung tren subpath cua GitHub Pages (/<repo>/)
  base: './',
  plugins: [react(), tailwindcss()],
})
