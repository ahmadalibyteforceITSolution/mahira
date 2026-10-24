<template>
  <section id="programs" class="py-20 md:py-28 bg-[#ecf5fb]/40 border-t border-slate-100 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="badge-cyan mb-3">
          <span>Tailored Clinical Nutrition Protocols</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
          Evidence-Based Programs Designed <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">For Your Metabolism</span>
        </h2>
        <p class="text-[#566593] mt-3 text-base sm:text-lg">
          No boilerplate PDF printouts. Every protocol includes direct 1-on-1 coaching with Coach Mahira, grocery guides, and customized meal adaptations.
        </p>
      </div>

      <!-- Programs Grid (Matching S&D Service Showcase Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        <div 
          v-for="prog in programs" 
          :key="prog.id"
          class="relative bg-white rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(10,51,102,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(0,189,224,0.15)] border transition-all duration-300 hover:-translate-y-1.5"
          :class="prog.featured 
            ? 'border-t-4 border-t-[#00BDE0] border-slate-200/90 ring-2 ring-[#00BDE0]/20' 
            : 'border-t-4 border-t-[#0A3366] border-slate-200/80'"
        >
          <!-- Top Badge & Rating -->
          <div class="flex items-center justify-between mb-4">
            <span 
              class="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider"
              :class="prog.featured ? 'bg-[#ccf2f9] text-[#0A3366]' : 'bg-slate-100 text-[#566593]'"
            >
              {{ prog.badge }}
            </span>
            <div class="flex items-center gap-1 text-xs font-bold text-[#031B4E]">
              <svg class="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>{{ prog.rating }}</span>
              <span class="text-slate-400 font-normal">({{ prog.reviewsCount }})</span>
            </div>
          </div>

          <!-- Title & Tagline -->
          <div class="space-y-1.5 mb-5">
            <h3 class="text-xl font-extrabold text-[#031B4E] leading-snug">
              {{ prog.name }}
            </h3>
            <p class="text-xs font-bold text-[#00BDE0]">
              {{ prog.duration }} • {{ prog.tagline }}
            </p>
            <p class="text-xs text-[#566593] leading-relaxed pt-1">
              {{ prog.idealFor }}
            </p>
          </div>

          <!-- Deliverables list -->
          <div class="border-t border-slate-100 pt-4 mb-6 flex-1 space-y-2.5">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">What is Included:</span>
            <div 
              v-for="(item, idx) in prog.deliverables" 
              :key="idx" 
              class="flex items-start gap-2 text-xs text-[#566593] leading-relaxed"
            >
              <svg class="w-4 h-4 text-[#00BDE0] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <span>{{ item }}</span>
            </div>
          </div>

          <!-- Pricing & CTA matching S&D Button system -->
          <div class="border-t border-slate-100 pt-4 space-y-3">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-2xl font-extrabold text-[#031B4E]">{{ prog.price }}</span>
                <span class="text-xs text-slate-500 ml-1">/ {{ prog.period }}</span>
              </div>
            </div>

            <a 
              :href="'#booking'"
              @click="onSelectProgram(prog.name)"
              class="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer group"
              :class="prog.featured 
                ? 'btn btn-primary' 
                : 'bg-[#ecf5fb] hover:bg-[#00BDE0] text-[#0A3366] hover:text-white border border-slate-200'"
            >
              <span>Enroll In {{ prog.duration }}</span>
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
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
