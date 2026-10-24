<template>
  <section id="recipes" class="py-20 md:py-28 bg-[#ecf5fb]/50 border-t border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div class="badge-cyan mb-3">
            <span>From Coach Mahira's Clinical Kitchen</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
            High-Protein Meals &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">Fat Loss Recipes</span>
          </h2>
          <p class="text-[#566593] mt-2.5 max-w-2xl text-base sm:text-lg">
            Who said fat loss food has to taste bland? These are the exact high-protein, calorie-friendly meals Mahira's clients eat daily to stay full and lean.
          </p>
        </div>

        <a 
          href="#booking"
          class="btn btn-primary text-xs sm:text-sm px-6 py-3 shadow-md flex items-center gap-2 self-start md:self-auto cursor-pointer"
        >
          <span>Get 50+ Custom Meal Recipes</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>

      <!-- Recipes Grid matching S&D Marketing publication cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="recipe in recipes" 
          :key="recipe.id"
          class="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(10,51,102,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(0,189,224,0.15)] border border-slate-200/80 border-t-4 border-t-[#00BDE0] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <div>
            <!-- Image & Badges -->
            <div class="relative h-56 w-full overflow-hidden bg-slate-900">
              <img 
                :src="recipe.image" 
                :alt="recipe.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div class="absolute top-4 left-4 bg-[#031B4E]/85 backdrop-blur-md px-3 py-1 rounded-full text-[#00BDE0] text-xs font-bold border border-white/10">
                {{ recipe.category }}
              </div>
              <div class="absolute bottom-4 right-4 bg-[#00BDE0] text-[#031B4E] px-3 py-1 rounded-full text-xs font-extrabold shadow-sm">
                {{ recipe.calories }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 space-y-4">
              <div>
                <span class="text-[10px] font-extrabold text-[#00BDE0] uppercase tracking-wider block">
                  {{ recipe.subtitle }}
                </span>
                <h3 class="text-xl font-extrabold text-[#031B4E] mt-1 leading-snug">
                  {{ recipe.title }}
                </h3>
              </div>

              <!-- Macros Pill Strip -->
              <div class="grid grid-cols-4 gap-2 py-2.5 px-3 rounded-2xl bg-[#ecf5fb] border border-slate-200/80 text-center text-xs">
                <div>
                  <span class="text-[10px] text-slate-400 font-bold block">Protein</span>
                  <span class="font-extrabold text-[#00BDE0]">{{ recipe.macros.protein }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-slate-400 font-bold block">Carbs</span>
                  <span class="font-extrabold text-sky-600">{{ recipe.macros.carbs }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-slate-400 font-bold block">Fat</span>
                  <span class="font-extrabold text-rose-600">{{ recipe.macros.fat }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-slate-400 font-bold block">Fiber</span>
                  <span class="font-extrabold text-[#031B4E]">{{ recipe.macros.fiber }}</span>
                </div>
              </div>

              <!-- Ingredients Preview -->
              <div class="space-y-1.5 pt-1">
                <span class="text-xs font-bold text-[#031B4E] block">Key Ingredients:</span>
                <ul class="text-xs text-[#566593] space-y-1">
                  <li v-for="(ing, idx) in recipe.ingredients.slice(0, 4)" :key="idx" class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#00BDE0]"></span>
                    <span class="truncate">{{ ing }}</span>
                  </li>
                  <li v-if="recipe.ingredients.length > 4" class="text-[#00BDE0] font-bold text-[11px]">
                    + {{ recipe.ingredients.length - 4 }} more healthy ingredients...
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Bottom Action Button -->
          <div class="p-6 pt-0 border-t border-slate-100 mt-4">
            <button 
              @click="openRecipeModal(recipe)"
              class="w-full py-2.5 rounded-xl border border-slate-200 hover:border-[#00BDE0] bg-[#ecf5fb] hover:bg-[#00BDE0] text-[#0A3366] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>View Recipe &amp; Cooking Guide</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

    </div>

    <!-- Recipe Detail Modal -->
    <div 
      v-if="selectedRecipe"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031B4E]/80 backdrop-blur-md"
      @click.self="selectedRecipe = null"
    >
      <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-200">
        
        <div class="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <span class="text-xs font-extrabold text-[#00BDE0] uppercase tracking-widest">{{ selectedRecipe.category }}</span>
            <h3 class="text-2xl font-extrabold text-[#031B4E] mt-1">{{ selectedRecipe.title }}</h3>
          </div>
          <button 
            @click="selectedRecipe = null"
            class="p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Recipe Macros Bar -->
        <div class="grid grid-cols-4 gap-3 p-4 rounded-2xl bg-[#ecf5fb] text-center text-sm border border-slate-200/80">
          <div>
            <div class="text-xs text-slate-400 font-bold">Calories</div>
            <div class="font-extrabold text-[#031B4E]">{{ selectedRecipe.calories }}</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 font-bold">Protein</div>
            <div class="font-extrabold text-[#00BDE0]">{{ selectedRecipe.macros.protein }}</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 font-bold">Carbs</div>
            <div class="font-extrabold text-sky-600">{{ selectedRecipe.macros.carbs }}</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 font-bold">Healthy Fats</div>
            <div class="font-extrabold text-rose-600">{{ selectedRecipe.macros.fat }}</div>
          </div>
        </div>

        <!-- Ingredients List -->
        <div>
          <h4 class="font-bold text-[#031B4E] text-sm mb-3">Ingredients:</h4>
          <ul class="space-y-2 text-sm text-[#566593]">
            <li v-for="(ing, idx) in selectedRecipe.ingredients" :key="idx" class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#00BDE0]"></span>
              <span>{{ ing }}</span>
            </li>
          </ul>
        </div>

        <!-- Preparation Steps -->
        <div>
          <h4 class="font-bold text-[#031B4E] text-sm mb-3">Preparation Instructions:</h4>
          <ol class="space-y-2.5 text-sm text-[#566593] list-decimal list-inside">
            <li v-for="(step, idx) in selectedRecipe.instructions" :key="idx" class="leading-relaxed">
              {{ step }}
            </li>
          </ol>
        </div>

        <!-- Coach Mahira's Tips for Fat Loss -->
        <div class="p-4 rounded-2xl bg-[#ecf5fb] border border-[#00BDE0]/30">
          <h4 class="font-bold text-[#0A3366] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-[#00BDE0]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14H8a4 4 0 01-.97-7.88 4 4 0 017.94 0A4 4 0 0112 14z"/>
            </svg>
            <span>Coach Mahira's Tips for Accelerated Results:</span>
          </h4>
          <ul class="text-xs text-[#0A3366] space-y-1.5 list-disc list-inside">
            <li v-for="(tip, idx) in selectedRecipe.tipsForFatLoss" :key="idx">
              {{ tip }}
            </li>
          </ul>
        </div>

        <div class="pt-2">
          <a 
            @click="selectedRecipe = null"
            href="#booking"
            class="w-full btn btn-primary py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
