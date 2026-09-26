import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        weightLoss: resolve(__dirname, '30-day-weight-loss/index.html'),
        pcos: resolve(__dirname, 'pcos-diet-plan/index.html'),
        calculator: resolve(__dirname, 'macro-calculator/index.html'),
        transformations: resolve(__dirname, 'client-transformations/index.html'),
        recipes: resolve(__dirname, 'high-protein-recipes/index.html'),
        hours: resolve(__dirname, 'clinic-hours/index.html'),
        booking: resolve(__dirname, 'consultation-booking/index.html'),
        faq: resolve(__dirname, 'faq/index.html')
      }
    }
  }
})
