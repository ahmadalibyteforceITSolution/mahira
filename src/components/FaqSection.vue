<template>
  <section class="py-20 md:py-28 bg-white border-t border-brand-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-100/80 px-3.5 py-1.5 rounded-full">
          Frequently Asked Questions
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mt-3 leading-tight">
          Everything You Need to Know
        </h2>
        <p class="text-neutral-600 mt-2 text-base sm:text-lg">
          Have questions before booking? Here are straight answers about our non-restrictive coaching method.
        </p>

        <!-- Search FAQ input -->
        <div class="mt-6 max-w-md mx-auto relative">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Search questions (e.g. PCOS, vegetarian, WhatsApp)..."
            class="w-full px-4 py-3 pl-10 rounded-2xl border border-neutral-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 text-xs sm:text-sm"
          />
          <svg class="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in filteredFaqs" 
          :key="index"
          class="border border-neutral-200/80 rounded-2xl overflow-hidden transition-colors"
          :class="openIndex === index ? 'bg-cream border-brand-300' : 'bg-white hover:border-neutral-300'"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
          >
            <span class="font-bold text-sm sm:text-base text-neutral-900 leading-snug">
              {{ faq.question }}
            </span>
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180 bg-brand-700 text-white' : 'bg-neutral-100 text-neutral-600'"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>

          <div 
            v-show="openIndex === index"
            class="px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-brand-100/60 pt-3"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- Still have questions footer card -->
      <div class="mt-12 p-6 rounded-2xl bg-brand-50 border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 class="font-bold text-sm text-neutral-900">Have a specific medical condition or question?</h4>
          <p class="text-xs text-neutral-500 mt-0.5">Send a quick DM on Instagram or WhatsApp to chat with Coach Mahira directly.</p>
        </div>

        <a 
          href="https://www.instagram.com/mahira_244/?hl=en"
          target="_blank"
          class="px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs shrink-0 shadow-sm transition-all"
        >
          DM "FIT" On Instagram
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
