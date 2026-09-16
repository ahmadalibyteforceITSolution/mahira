<template>
  <section id="recipes" class="py-20 md:py-28 bg-sand/30 border-t border-brand-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-100/80 px-3.5 py-1.5 rounded-full">
            From Coach Mahira's Kitchen
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mt-3 leading-tight">
            Featured High-Protein Recipes
          </h2>
          <p class="text-neutral-600 mt-2 max-w-2xl text-base sm:text-lg">
            Who said fat loss food has to taste bland? These are the exact high-protein, calorie-friendly meals Mahira's clients eat daily to stay full and lean.
          </p>
        </div>

        <a 
          href="#booking"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all self-start md:self-auto"
        >
          <span>Get 50+ Custom Meal Recipes</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>

      <!-- Recipes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="recipe in recipes" 
          :key="recipe.id"
          class="bg-white rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-hover border border-neutral-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <div>
            <!-- Image & Badges -->
            <div class="relative h-56 w-full overflow-hidden">
              <img 
                :src="recipe.image" 
                :alt="recipe.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div class="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                {{ recipe.category }}
              </div>
              <div class="absolute bottom-4 right-4 bg-brand-900/90 backdrop-blur-md px-3 py-1 rounded-full text-gold-300 text-xs font-bold">
                {{ recipe.calories }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 space-y-4">
              <div>
                <span class="text-[11px] font-bold text-brand-700 uppercase tracking-wider block">
                  {{ recipe.subtitle }}
                </span>
                <h3 class="font-serif text-xl font-bold text-neutral-900 mt-1 leading-snug">
                  {{ recipe.title }}
                </h3>
              </div>

              <!-- Macros Pill Strip -->
              <div class="grid grid-cols-4 gap-2 py-2.5 px-3 rounded-2xl bg-brand-50/70 border border-brand-100 text-center text-xs">
                <div>
                  <span class="text-[10px] text-neutral-500 block">Protein</span>
                  <span class="font-bold text-emerald-700">{{ recipe.macros.protein }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-neutral-500 block">Carbs</span>
                  <span class="font-bold text-amber-700">{{ recipe.macros.carbs }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-neutral-500 block">Fat</span>
                  <span class="font-bold text-rose-700">{{ recipe.macros.fat }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-neutral-500 block">Fiber</span>
                  <span class="font-bold text-brand-800">{{ recipe.macros.fiber }}</span>
                </div>
              </div>

              <!-- Ingredients Preview -->
              <div class="space-y-1.5 pt-1">
                <span class="text-xs font-bold text-neutral-700 block">Key Ingredients:</span>
                <ul class="text-xs text-neutral-600 space-y-1">
                  <li v-for="(ing, idx) in recipe.ingredients.slice(0, 4)" :key="idx" class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    <span class="truncate">{{ ing }}</span>
                  </li>
                  <li v-if="recipe.ingredients.length > 4" class="text-brand-700 font-semibold text-[11px]">
                    + {{ recipe.ingredients.length - 4 }} more healthy ingredients...
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="p-6 pt-0 border-t border-neutral-100 mt-4">
            <button 
              @click="openRecipeModal(recipe)"
              class="w-full py-2.5 rounded-xl border border-brand-200 hover:bg-brand-50 text-brand-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View Recipe & Fat-Loss Tips</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

    </div>

    <!-- Recipe Detail Modal -->
    <div 
      v-if="selectedRecipe"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      @click.self="selectedRecipe = null"
    >
      <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6">
        
        <div class="flex items-start justify-between border-b border-neutral-200 pb-4">
          <div>
            <span class="text-xs font-bold text-brand-700 uppercase tracking-widest">{{ selectedRecipe.category }}</span>
            <h3 class="font-serif text-2xl font-bold text-neutral-900 mt-1">{{ selectedRecipe.title }}</h3>
          </div>
          <button 
            @click="selectedRecipe = null"
            class="p-2 rounded-full hover:bg-neutral-100 text-neutral-500"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Recipe Macros Bar -->
        <div class="grid grid-cols-4 gap-3 p-4 rounded-2xl bg-brand-50 text-center text-sm">
          <div>
            <div class="text-xs text-neutral-500">Calories</div>
            <div class="font-bold text-brand-950">{{ selectedRecipe.calories }}</div>
          </div>
          <div>
            <div class="text-xs text-neutral-500">Protein</div>
            <div class="font-bold text-emerald-700">{{ selectedRecipe.macros.protein }}</div>
          </div>
          <div>
            <div class="text-xs text-neutral-500">Carbs</div>
            <div class="font-bold text-amber-700">{{ selectedRecipe.macros.carbs }}</div>
          </div>
          <div>
            <div class="text-xs text-neutral-500">Healthy Fats</div>
            <div class="font-bold text-rose-700">{{ selectedRecipe.macros.fat }}</div>
          </div>
        </div>

        <!-- Ingredients List -->
        <div>
          <h4 class="font-bold text-neutral-900 text-sm mb-3">Ingredients:</h4>
          <ul class="space-y-2 text-sm text-neutral-700">
            <li v-for="(ing, idx) in selectedRecipe.ingredients" :key="idx" class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-600"></span>
              <span>{{ ing }}</span>
            </li>
          </ul>
        </div>

        <!-- Preparation Steps -->
        <div>
          <h4 class="font-bold text-neutral-900 text-sm mb-3">Preparation Instructions:</h4>
          <ol class="space-y-2.5 text-sm text-neutral-700 list-decimal list-inside">
            <li v-for="(step, idx) in selectedRecipe.instructions" :key="idx" class="leading-relaxed">
              {{ step }}
            </li>
          </ol>
        </div>

        <!-- Coach Mahira's Tips for Fat Loss -->
        <div class="p-4 rounded-2xl bg-gold-50 border border-gold-200">
          <h4 class="font-bold text-gold-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14H8a4 4 0 01-.97-7.88 4 4 0 017.94 0A4 4 0 0112 14z"/>
            </svg>
            <span>Coach Mahira's Tips for Accelerated Results:</span>
          </h4>
          <ul class="text-xs text-gold-950 space-y-1.5 list-disc list-inside">
            <li v-for="(tip, idx) in selectedRecipe.tipsForFatLoss" :key="idx">
              {{ tip }}
            </li>
          </ul>
        </div>

        <div class="pt-2">
          <a 
            @click="selectedRecipe = null"
            href="#booking"
            class="w-full py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm flex items-center justify-center gap-2"
          >
            <span>Book Consultation For Complete Personalized Meal Plan</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { recipes } from '../data/recipes'

const selectedRecipe = ref(null)

const openRecipeModal = (recipe) => {
  selectedRecipe.value = recipe
}
</script>
