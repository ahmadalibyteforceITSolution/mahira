<template>
  <section id="faq" class="py-20 md:py-28 bg-white border-t border-slate-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <div class="badge-cyan mb-3">
          <span>Frequently Asked Questions</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
          Everything You Need <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">To Know</span>
        </h2>
        <p class="text-[#566593] mt-2.5 text-base sm:text-lg">
          Have questions before booking? Here are straight answers about our non-restrictive coaching method.
        </p>

        <!-- Search FAQ input matching S&D style -->
        <div class="mt-6 max-w-md mx-auto relative">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Search questions (e.g. PCOS, vegetarian, WhatsApp)..."
            class="w-full px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-xs sm:text-sm text-[#031B4E] outline-none"
          />
          <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-3.5">
        <div 
          v-for="(faq, index) in filteredFaqs" 
          :key="index"
          class="border rounded-2xl overflow-hidden transition-all"
          :class="openIndex === index 
            ? 'bg-[#ecf5fb] border-[#00BDE0]/50 shadow-sm' 
            : 'bg-white border-slate-200/80 hover:border-slate-300'"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
          >
            <span class="font-extrabold text-sm sm:text-base text-[#031B4E] leading-snug">
              {{ faq.question }}
            </span>
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180 bg-[#00BDE0] text-[#031B4E]' : 'bg-slate-100 text-[#566593]'"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>

          <div 
            v-show="openIndex === index"
            class="px-6 pb-5 text-xs sm:text-sm text-[#566593] leading-relaxed border-t border-slate-200/60 pt-3"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- Still have questions footer card -->
      <div class="mt-12 p-6 rounded-2xl bg-[#ecf5fb] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 class="font-extrabold text-sm text-[#031B4E]">Have a specific medical condition or question?</h4>
          <p class="text-xs text-[#566593] mt-0.5">Send a quick DM on Instagram or WhatsApp to chat with Coach Mahira directly.</p>
        </div>

        <a 
          href="https://wa.me/923137095454?text=FIT"
          target="_blank"
          class="btn bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 shrink-0"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { faqs } from '../data/faqs'

const openIndex = ref(0)
const searchQuery = ref('')

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const filteredFaqs = computed(() => {
  if (!searchQuery.value.trim()) return faqs
  const q = searchQuery.value.toLowerCase()
  return faqs.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
})
</script>
