<template>
  <section id="transformations" class="py-20 md:py-28 bg-white border-t border-brand-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-100/80 px-3.5 py-1.5 rounded-full">
          Real People • Real Results
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mt-3 leading-tight">
          Client Transformations & Stories
        </h2>
        <p class="text-neutral-600 mt-3 text-base sm:text-lg">
          No magic pills. Just consistent, customized food planning and daily accountability. Here is what 30 to 90 days with Coach Mahira achieves.
        </p>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all"
            :class="selectedCategory === cat ? 'bg-brand-800 text-white shadow-sm' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Transformations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="item in filteredList" 
          :key="item.id"
          class="bg-cream/60 rounded-3xl p-6 sm:p-8 border border-brand-200/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Client Header -->
            <div class="flex items-start justify-between mb-5">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-400">
                  <img :src="item.imageAfter" :alt="item.name" class="w-full h-full object-cover"/>
                </div>
                <div>
                  <div class="flex items-center gap-1.5">
                    <h3 class="font-bold text-base text-neutral-900">{{ item.name }}</h3>
                    <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="text-xs text-neutral-500 font-medium">{{ item.location }} • {{ item.program }}</div>
                </div>
              </div>

              <!-- Result Highlight Pill -->
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                {{ item.result }}
              </span>
            </div>

            <!-- Before / After Metrics Row -->
            <div class="grid grid-cols-3 gap-2.5 py-3 px-4 rounded-2xl bg-white border border-brand-100 mb-5 text-center">
              <div>
                <span class="text-[10px] text-neutral-400 font-semibold uppercase block">Timeline</span>
                <span class="text-xs font-bold text-neutral-800">{{ item.metrics.timeline }}</span>
              </div>
              <div>
                <span class="text-[10px] text-neutral-400 font-semibold uppercase block">Net Impact</span>
                <span class="text-xs font-bold text-emerald-700">{{ item.metrics.weightLoss || item.metrics.weightGain }}</span>
              </div>
              <div>
                <span class="text-[10px] text-neutral-400 font-semibold uppercase block">Key Change</span>
                <span class="text-xs font-bold text-neutral-800">{{ item.metrics.waistReduction || item.metrics.pcosRelief || item.metrics.bicepGain }}</span>
              </div>
            </div>

            <!-- Client Quote -->
            <p class="text-sm text-neutral-700 leading-relaxed italic">
              "{{ item.quote }}"
            </p>
          </div>

          <!-- Star Rating -->
          <div class="flex items-center justify-between border-t border-brand-100/80 pt-4 mt-6">
            <div class="flex items-center gap-1">
              <svg v-for="i in item.rating" :key="i" class="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span class="text-xs font-semibold text-brand-700">Verified Client Story</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { transformations } from '../data/transformations'

const selectedCategory = ref('All')
const categories = ['All', 'Fat Loss', 'PCOS / Hormones', 'Weight Gain']

const filteredList = computed(() => {
  if (selectedCategory.value === 'All') return transformations
  return transformations.filter(t => t.category === selectedCategory.value)
})
</script>
