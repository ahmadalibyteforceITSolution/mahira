<template>
  <section id="programs" class="py-20 md:py-28 bg-cream/70 border-t border-brand-100 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-100/80 px-3.5 py-1.5 rounded-full">
          Tailored Nutrition Protocols
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mt-3 leading-tight">
          Find The Program Designed For Your Body
        </h2>
        <p class="text-neutral-600 mt-3 text-base sm:text-lg">
          No boilerplate PDF printouts. Every protocol includes direct 1-on-1 coaching with Coach Mahira, grocery guides, and customized meal adaptations.
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
        <div 
          v-for="prog in programs" 
          :key="prog.id"
          class="relative bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-luxury hover:shadow-luxury-hover border transition-all duration-300 hover:-translate-y-1.5"
          :class="prog.featured ? 'border-2 border-gold-400 ring-2 ring-gold-400/20' : 'border-neutral-200/80'"
        >
          <!-- Top Badge -->
          <div class="flex items-center justify-between mb-4">
            <span 
              class="px-3 py-1 rounded-full text-[11px] font-bold uppercase"
              :class="prog.featured ? 'bg-gold-100 text-gold-800' : 'bg-brand-50 text-brand-800'"
            >
              {{ prog.badge }}
            </span>
            <div class="flex items-center gap-1 text-xs font-bold text-neutral-700">
              <svg class="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>{{ prog.rating }}</span>
              <span class="text-neutral-400 font-normal">({{ prog.reviewsCount }})</span>
            </div>
          </div>

          <!-- Title & Tagline -->
          <div class="space-y-2 mb-6">
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
              {{ prog.name }}
            </h3>
            <p class="text-xs font-semibold text-brand-700">
              {{ prog.duration }} • {{ prog.tagline }}
            </p>
            <p class="text-xs text-neutral-500 leading-relaxed pt-1">
              {{ prog.idealFor }}
            </p>
          </div>

          <!-- Deliverables list -->
          <div class="border-t border-neutral-100 pt-4 mb-6 flex-1 space-y-2.5">
            <span class="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">What is Included:</span>
            <div 
              v-for="(item, idx) in prog.deliverables" 
              :key="idx" 
              class="flex items-start gap-2 text-xs text-neutral-700 leading-relaxed"
            >
              <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <span>{{ item }}</span>
            </div>
          </div>

          <!-- Pricing & CTA -->
          <div class="border-t border-neutral-100 pt-4 space-y-3">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-2xl sm:text-3xl font-serif font-extrabold text-neutral-900">{{ prog.price }}</span>
                <span class="text-xs text-neutral-500 ml-1">/ {{ prog.period }}</span>
              </div>
            </div>

            <a 
              :href="'#booking'"
              @click="onSelectProgram(prog.name)"
              class="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              :class="prog.featured 
                ? 'bg-brand-700 hover:bg-brand-800 text-white shadow-md' 
                : 'bg-neutral-100 hover:bg-brand-50 text-neutral-800 hover:text-brand-900 border border-neutral-200'"
            >
              <span>Enroll In {{ prog.duration }}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { programs } from '../data/programs'

const emit = defineEmits(['select-program'])

const onSelectProgram = (programName) => {
  window.dispatchEvent(new CustomEvent('selected-program-event', { detail: programName }))
}
</script>
