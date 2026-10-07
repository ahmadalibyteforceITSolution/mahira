import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'

function getRollupInputs() {
  const inputs = {
    main: resolve(__dirname, 'index.html'),
    about: resolve(__dirname, 'about/index.html'),
    weightLoss: resolve(__dirname, '30-day-weight-loss/index.html'),
    pcos: resolve(__dirname, 'pcos-diet-plan/index.html'),
    calculator: resolve(__dirname, 'macro-calculator/index.html'),
    transformations: resolve(__dirname, 'client-transformations/index.html'),
    recipes: resolve(__dirname, 'high-protein-recipes/index.html'),
    hours: resolve(__dirname, 'clinic-hours/index.html'),
    booking: resolve(__dirname, 'consultation-booking/index.html'),
    faq: resolve(__dirname, 'faq/index.html'),
    blog: resolve(__dirname, 'blog/index.html')
  }

  const blogDir = resolve(__dirname, 'blog')
  if (fs.existsSync(blogDir)) {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const postPath = resolve(blogDir, entry.name, 'index.html')
        if (fs.existsSync(postPath)) {
          // Sanitized entry key
          const key = `blog_${entry.name.replace(/[^a-zA-Z0-9_]/g, '_')}`
          inputs[key] = postPath
        }
      }
    }
  }

  return inputs
}

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
      input: getRollupInputs()
    }
  }
})
