<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
    
    <!-- Tooltip Bubble (Dismissible or hover) -->
    <transition name="fade">
      <div 
        v-if="showTooltip" 
        class="bg-brand-950 text-white text-xs px-4 py-2.5 rounded-2xl shadow-xl border border-brand-800 flex items-center gap-2 max-w-xs animate-bounce-subtle"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
        <span class="font-medium">Direct WhatsApp: <strong>0313-7095454</strong> • DM "FIT"</span>
        <button @click="showTooltip = false" class="text-neutral-400 hover:text-white ml-1">✕</button>
      </div>
    </transition>

    <!-- Floating Buttons Container -->
    <div class="flex items-center gap-2">
      <!-- Phone Call Quick Button -->
      <a 
        href="tel:+923137095454"
        class="w-11 h-11 rounded-full bg-brand-800 hover:bg-brand-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Call 0313-7095454"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      </a>

      <!-- Instagram Quick Button -->
      <a 
        href="https://www.instagram.com/mahira_244/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-11 h-11 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Open @mahira_244 on Instagram"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      <!-- WhatsApp Button -->
      <a 
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
      >
        <svg class="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        <div class="flex flex-col text-left">
          <span class="text-[10px] uppercase tracking-wider text-emerald-200 leading-none">WhatsApp Helpline</span>
          <span class="text-xs font-bold text-white">0313-7095454</span>
        </div>
      </a>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showTooltip = ref(true)

const whatsappUrl = computed(() => {
  const text = `Hi Coach Mahira! I would like to DM "FIT" for a consultation on your 30-day nutrition reset.`
  return `https://wa.me/923137095454?text=${encodeURIComponent(text)}`
})
</script>

<style scoped>
@keyframes bounceSubtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-bounce-subtle {
  animation: bounceSubtle 3s ease-in-out infinite;
}
</style>
