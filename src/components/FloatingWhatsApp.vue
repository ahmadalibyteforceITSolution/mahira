<template>
  <div>
    <!-- Desktop & Tablet Floating Action Stack (Bottom Right) -->
    <div class="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
      
      <!-- Treatment Urgency Banner (Dismissible) -->
      <transition name="fade">
        <div 
          v-if="showTooltip" 
          class="bg-brand-950 text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-gold-400/40 flex items-center gap-3 max-w-sm animate-bounce-subtle"
        >
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 live-pulse shrink-0"></div>
          <div>
            <p class="font-bold text-gold-300">Doctor &amp; Nutritionist Helpline Live</p>
            <p class="text-[11px] text-neutral-300">Call: <strong>0313-7095454</strong> for personalized diet treatment</p>
          </div>
          <button @click="showTooltip = false" class="text-neutral-400 hover:text-white ml-1 p-1" aria-label="Close tooltip">✕</button>
        </div>
      </transition>

      <!-- Buttons Row -->
      <div class="flex items-center gap-2.5">
        
        <!-- Treatment Selector Quick Modal Trigger -->
        <button 
          @click="showTreatmentModal = true"
          class="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-brand-900 hover:bg-brand-800 text-gold-300 border border-gold-400/40 text-xs font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
          title="Select Health Treatment"
        >
          <span>🩺</span>
          <span>Treatment Inquiries</span>
        </button>

        <!-- Direct Phone Call Button -->
        <a 
          href="tel:+923137095454"
          class="w-12 h-12 rounded-full bg-brand-800 hover:bg-brand-700 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
          title="Call Clinic Helpline: 0313-7095454"
        >
          <svg class="w-5 h-5 group-hover:animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </a>

        <!-- Instagram Button -->
        <a 
          href="https://www.instagram.com/mahira_244/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-12 h-12 rounded-full bg-linear-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
          title="Instagram @mahira_244"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <!-- WhatsApp Master Consultation Button -->
        <a 
          :href="defaultWhatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <svg class="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <div class="flex flex-col text-left">
            <span class="text-[10px] uppercase tracking-wider text-emerald-200 font-bold leading-none">WhatsApp Booking</span>
            <span class="text-xs font-bold text-white">0313-7095454</span>
          </div>
        </a>
      </div>

    </div>

    <!-- Mobile Sticky Call & WhatsApp Consultation Bar (Fixed at bottom on phones) -->
    <div class="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-950/95 backdrop-blur-md px-3 py-2.5 border-t border-brand-800 shadow-2xl flex items-center gap-2">
      <!-- 1-Tap Direct Call -->
      <a 
        href="tel:+923137095454"
        class="flex-1 py-2.5 rounded-xl bg-brand-800 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
      >
        <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        <span>Call 0313-7095454</span>
      </a>

      <!-- 1-Tap WhatsApp Consultation -->
      <a 
        :href="defaultWhatsappUrl"
        target="_blank"
        class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        <span>WhatsApp Diet Booking</span>
      </a>
    </div>

    <!-- Treatment Inquiry Selector Modal -->
    <Teleport to="body">
      <div 
        v-if="showTreatmentModal" 
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        @click.self="showTreatmentModal = false"
      >
        <div class="bg-cream max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-200 text-neutral-900 space-y-5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-brand-800 text-gold-300 flex items-center justify-center text-lg shadow-md">
                🩺
              </div>
              <div>
                <h3 class="font-serif font-bold text-lg text-neutral-900">Select Treatment Area</h3>
                <p class="text-xs text-neutral-600">Connect with Coach Mahira for your protocol</p>
              </div>
            </div>
            <button @click="showTreatmentModal = false" class="text-neutral-400 hover:text-neutral-700 text-lg">✕</button>
          </div>

          <!-- Treatment List -->
          <div class="space-y-2">
            <button 
              v-for="treatment in treatmentList" 
              :key="treatment.id"
              @click="selectTreatment(treatment)"
              class="w-full text-left p-3.5 rounded-2xl bg-white hover:bg-brand-50 border border-neutral-200 hover:border-brand-500 transition-all shadow-xs flex items-center justify-between group cursor-pointer"
            >
              <div class="flex items-center gap-3">
                <span class="text-xl">{{ treatment.icon }}</span>
                <div>
                  <h4 class="font-bold text-xs sm:text-sm text-neutral-900 group-hover:text-brand-900">{{ treatment.title }}</h4>
                  <p class="text-[11px] text-neutral-500">{{ treatment.subtitle }}</p>
                </div>
              </div>
              <span class="text-xs text-emerald-600 font-bold group-hover:translate-x-1 transition-transform">
                Book →
              </span>
            </button>
          </div>

          <!-- Direct Phone Call Support -->
          <div class="pt-3 border-t border-neutral-200 flex items-center justify-between">
            <div class="text-xs">
              <span class="text-neutral-500 block text-[10px]">Or speak directly:</span>
              <a href="tel:+923137095454" class="font-bold text-brand-900 hover:underline text-sm">
                📞 0313-7095454
              </a>
            </div>
            <a 
              href="tel:+923137095454"
              class="px-4 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-xs shadow-md"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showTooltip = ref(true)
const showTreatmentModal = ref(false)

const treatmentList = [
  {
    id: 'pcos',
    icon: '🌸',
    title: 'PCOS & Hormonal Irregularity',
    subtitle: 'Cycle regulation, hormonal acne & weight reset'
  },
  {
    id: 'fat-loss',
    icon: '🔥',
    title: '30-Day Metabolic Fat Loss',
    subtitle: 'Lose 4-7kg without starving or cutting carbs'
  },
  {
    id: 'fatty-liver',
    icon: '🫀',
    title: 'Fatty Liver & High Cholesterol',
    subtitle: 'Reversing NAFLD Grade 1/2 with clinical nutrition'
  },
  {
    id: 'thyroid',
    icon: '🦋',
    title: 'Hypothyroidism & Slow Metabolism',
    subtitle: 'T3/T4 thyroid hormone nutritional support'
  },
  {
    id: 'diabetes',
    icon: '🩸',
    title: 'Type 2 Diabetes & Insulin Resistance',
    subtitle: 'HbA1c lowering with Low-GI balanced meals'
  },
  {
    id: 'postpartum',
    icon: '👶',
    title: 'Postpartum & C-Section Recovery',
    subtitle: 'Safe baby weight loss while breastfeeding'
  }
]

const defaultWhatsappUrl = computed(() => {
  const text = `Hi Coach Mahira! I would like to DM "FIT" to book a 1-on-1 clinical diet consultation.`
  return `https://wa.me/923137095454?text=${encodeURIComponent(text)}`
})

function selectTreatment(treatment) {
  showTreatmentModal.value = false
  const text = `Hi Coach Mahira! I am inquiring about treatment and a personalized diet plan for ${treatment.title}. Please guide me with consultation details.`
  window.open(`https://wa.me/923137095454?text=${encodeURIComponent(text)}`, '_blank')
}
</script>

<style scoped>
@keyframes bounceSubtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-bounce-subtle {
  animation: bounceSubtle 3s ease-in-out infinite;
}
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}
.group-hover\:animate-wiggle:hover {
  animation: wiggle 0.5s ease-in-out infinite;
}
</style>
