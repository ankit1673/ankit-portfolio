import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ankit-portfolio/', // Add this line - it MUST match your repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
})