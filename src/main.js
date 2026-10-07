import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Service Worker Registration for PWA
if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.warn('PWA SW registration failed:', err)
    })
  })
}

// Global PWA BeforeInstallPrompt Handler
window.deferredPwaPrompt = null
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  window.deferredPwaPrompt = e
  window.dispatchEvent(new CustomEvent('pwa-installable'))
})

createApp(App).mount('#app')
