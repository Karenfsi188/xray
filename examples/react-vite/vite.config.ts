import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { xrayPlugin } from '@stinsky/xray/plugin'

export default defineConfig({
  plugins: [
    react(),
    xrayPlugin({ bundler: 'vite' }),
  ],
})
