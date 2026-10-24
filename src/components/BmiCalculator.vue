<template>
  <section id="calculator" class="py-20 md:py-28 bg-[#ecf5fb]/40 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="badge-cyan mb-3">
          <span>Interactive Health Assessment</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
          Calculate Your Daily Macros &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">Calorie Target</span>
        </h2>
        <p class="text-[#566593] mt-3 text-base sm:text-lg">
          No guesswork. Discover your scientific Basal Metabolic Rate (BMR) and customized macro targets for healthy fat loss or muscle gain.
        </p>
      </div>

      <!-- Calculator Card Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Input Form (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(10,51,102,0.06)] border border-slate-200/80 space-y-6">
          
          <!-- Gender Selection -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">Gender</label>
            <div class="grid grid-cols-2 gap-3">
              <button 
                type="button"
                @click="gender = 'female'" 
                class="py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                :class="gender === 'female' ? 'bg-[#031B4E] text-[#00BDE0] border-[#031B4E] shadow-sm' : 'bg-[#ecf5fb] text-[#566593] border-slate-200 hover:bg-slate-100'"
              >
                <span>Female</span>
              </button>
              <button 
                type="button"
                @click="gender = 'male'" 
                class="py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                :class="gender === 'male' ? 'bg-[#031B4E] text-[#00BDE0] border-[#031B4E] shadow-sm' : 'bg-[#ecf5fb] text-[#566593] border-slate-200 hover:bg-slate-100'"
              >
                <span>Male</span>
              </button>
            </div>
          </div>

          <!-- Age, Height & Weight -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1.5">Age</label>
              <div class="relative">
                <input 
                  type="number" 
                  v-model.number="age" 
                  min="16" 
                  max="90" 
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-[#031B4E] font-bold outline-none"
                />
                <span class="absolute right-3 top-3 text-xs text-slate-400 font-semibold">yrs</span>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1.5">Height</label>
              <div class="relative">
                <input 
                  type="number" 
                  v-model.number="heightCm" 
                  min="120" 
                  max="230" 
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-[#031B4E] font-bold outline-none"
                />
                <span class="absolute right-3 top-3 text-xs text-slate-400 font-semibold">cm</span>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1.5">Weight</label>
              <div class="relative">
                <input 
                  type="number" 
                  v-model.number="weightKg" 
                  min="35" 
                  max="200" 
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-[#031B4E] font-bold outline-none"
                />
                <span class="absolute right-3 top-3 text-xs text-slate-400 font-semibold">kg</span>
              </div>
            </div>
          </div>

          <!-- Activity Level -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1.5">Daily Activity Level</label>
            <select 
              v-model="activityMultiplier"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-[#031B4E] font-semibold text-xs sm:text-sm bg-white outline-none"
            >
              <option :value="1.2">Sedentary (Desk job, little or no exercise)</option>
              <option :value="1.375">Lightly Active (1-3 light workouts or 7k daily steps)</option>
              <option :value="1.55">Moderately Active (3-5 sessions / week or 10k steps)</option>
              <option :value="1.725">Very Active (6-7 intense training sessions / week)</option>
            </select>
          </div>

          <!-- Goal Selection -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">Primary Goal</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button 
                type="button"
                @click="goal = 'loss'" 
                class="p-3.5 rounded-xl border text-left transition-all cursor-pointer"
                :class="goal === 'loss' ? 'bg-[#ccf2f9]/70 border-[#00BDE0] text-[#0A3366] ring-2 ring-[#00BDE0]/30' : 'bg-slate-50 border-slate-200 text-[#566593] hover:bg-slate-100'"
              >
                <div class="text-xs font-bold text-[#031B4E]">Fat Loss (30-Day Reset)</div>
                <div class="text-[11px] text-[#566593] mt-0.5">Shed fat without starving</div>
              </button>

              <button 
                type="button"
                @click="goal = 'maintain'" 
                class="p-3.5 rounded-xl border text-left transition-all cursor-pointer"
                :class="goal === 'maintain' ? 'bg-[#ccf2f9]/70 border-[#00BDE0] text-[#0A3366] ring-2 ring-[#00BDE0]/30' : 'bg-slate-50 border-slate-200 text-[#566593] hover:bg-slate-100'"
              >
                <div class="text-xs font-bold text-[#031B4E]">Hormone &amp; Maintain</div>
                <div class="text-[11px] text-[#566593] mt-0.5">PCOS &amp; metabolic health</div>
              </button>

              <button 
                type="button"
                @click="goal = 'gain'" 
                class="p-3.5 rounded-xl border text-left transition-all cursor-pointer"
                :class="goal === 'gain' ? 'bg-[#ccf2f9]/70 border-[#00BDE0] text-[#0A3366] ring-2 ring-[#00BDE0]/30' : 'bg-slate-50 border-slate-200 text-[#566593] hover:bg-slate-100'"
              >
                <div class="text-xs font-bold text-[#031B4E]">Lean Weight Gain</div>
                <div class="text-[11px] text-[#566593] mt-0.5">Build muscle &amp; curves</div>
              </button>
            </div>
          </div>

        </div>

        <!-- Right: Real-time Results Dashboard (5 cols) styled with S&D Dark Card Aesthetics -->
        <div class="lg:col-span-5 bg-gradient-to-br from-[#0A3366] via-[#031B4E] to-[#0A3366] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#00BDE0]/30 space-y-6">
          
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span class="text-xs font-extrabold text-[#00BDE0] uppercase tracking-widest">Calculated Targets</span>
              <h3 class="text-xl font-extrabold text-white">Your Metabolic Blueprint</h3>
            </div>
            <div class="px-3 py-1 rounded-full bg-[#00BDE0] text-[#031B4E] text-xs font-extrabold">
              BMI: {{ bmi.toFixed(1) }} ({{ bmiCategory }})
            </div>
          </div>

          <!-- Calories Target Spotlight -->
          <div class="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Recommended Daily Energy Target</span>
            <div class="text-4xl sm:text-5xl font-extrabold text-[#00BDE0] my-1">
              {{ dailyCalories.toLocaleString() }} <span class="text-xl font-normal text-white/80">kcal</span>
            </div>
            <p class="text-xs text-slate-200">
              {{ calorieDescription }}
            </p>
          </div>

          <!-- Daily Macro Breakdown Bars -->
          <div class="space-y-4">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-300">Target Daily Macronutrients</h4>

            <!-- Protein -->
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-[#00BDE0] flex items-center gap-1.5 font-bold">
                  <span class="w-2 h-2 rounded-full bg-[#00BDE0]"></span>
                  Protein (Muscle &amp; Satiety)
                </span>
                <span class="font-extrabold text-white">{{ macros.protein }}g ({{ macroPercent.protein }}%)</span>
              </div>
              <div class="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div class="bg-[#00BDE0] h-full rounded-full transition-all duration-500" :style="{ width: macroPercent.protein + '%' }"></div>
              </div>
            </div>

            <!-- Carbohydrates -->
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-sky-300 flex items-center gap-1.5 font-bold">
                  <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                  Carbohydrates (Clean Fuel)
                </span>
                <span class="font-extrabold text-white">{{ macros.carbs }}g ({{ macroPercent.carbs }}%)</span>
              </div>
              <div class="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div class="bg-sky-400 h-full rounded-full transition-all duration-500" :style="{ width: macroPercent.carbs + '%' }"></div>
              </div>
            </div>

            <!-- Healthy Fats -->
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-emerald-300 flex items-center gap-1.5 font-bold">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Healthy Fats (Hormone Health)
                </span>
                <span class="font-extrabold text-white">{{ macros.fat }}g ({{ macroPercent.fat }}%)</span>
              </div>
              <div class="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div class="bg-emerald-400 h-full rounded-full transition-all duration-500" :style="{ width: macroPercent.fat + '%' }"></div>
              </div>
            </div>
          </div>

          <!-- Suggested Plan Callout -->
          <div class="pt-2">
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-[#00BDE0] font-extrabold uppercase text-[10px] tracking-wider">Suggested Program</span>
                <span class="text-white font-extrabold">{{ recommendedProgram.name }}</span>
              </div>
              <p class="text-slate-300 text-[11px] leading-relaxed">
                {{ recommendedProgram.desc }}
              </p>
            </div>

            <a 
              href="#booking"
              class="mt-4 w-full btn btn-primary py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Coach Mahira to Build Your Custom Plan</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
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
import { ref, computed } from 'vue'

const gender = ref('female')
const age = ref(28)
const heightCm = ref(165)
const weightKg = ref(68)
const activityMultiplier = ref(1.375)
const goal = ref('loss')

// Mifflin-St Jeor Formula
const bmr = computed(() => {
  if (gender.value === 'male') {
    return 10 * weightKg.value + 6.25 * heightCm.value - 5 * age.value + 5
  } else {
    return 10 * weightKg.value + 6.25 * heightCm.value - 5 * age.value - 161
  }
})

const tdee = computed(() => {
  return Math.round(bmr.value * activityMultiplier.value)
})

const dailyCalories = computed(() => {
  if (goal.value === 'loss') {
    return Math.max(1250, tdee.value - 450)
  } else if (goal.value === 'gain') {
    return tdee.value + 350
  }
  return tdee.value
})

const calorieDescription = computed(() => {
  if (goal.value === 'loss') {
    return 'Caloric deficit of -450 kcal for steady fat loss (~0.5 - 0.9kg / week) without metabolic slowdown.'
  } else if (goal.value === 'gain') {
    return 'Lean surplus of +350 kcal paired with strength training to promote lean tissue synthesis.'
  }
  return 'Maintenance calories to balance hormonal bio-markers and optimize energy levels.'
})

const bmi = computed(() => {
  const hMeters = heightCm.value / 100
  return weightKg.value / (hMeters * hMeters)
})

const bmiCategory = computed(() => {
  if (bmi.value < 18.5) return 'Underweight'
  if (bmi.value < 25) return 'Healthy Weight'
  if (bmi.value < 30) return 'Overweight'
  return 'Obese'
})

const macros = computed(() => {
  const cals = dailyCalories.value
  let pGrams, fGrams, cGrams
  if (goal.value === 'loss') {
    pGrams = Math.round(weightKg.value * 1.8)
    fGrams = Math.round((cals * 0.28) / 9)
    const remainingCals = cals - (pGrams * 4 + fGrams * 9)
    cGrams = Math.max(80, Math.round(remainingCals / 4))
  } else if (goal.value === 'gain') {
    pGrams = Math.round(weightKg.value * 2.0)
    fGrams = Math.round((cals * 0.25) / 9)
    const remainingCals = cals - (pGrams * 4 + fGrams * 9)
    cGrams = Math.round(remainingCals / 4)
  } else {
    pGrams = Math.round(weightKg.value * 1.6)
    fGrams = Math.round((cals * 0.30) / 9)
    const remainingCals = cals - (pGrams * 4 + fGrams * 9)
    cGrams = Math.round(remainingCals / 4)
  }
  return { protein: pGrams, carbs: cGrams, fat: fGrams }
})

const macroPercent = computed(() => {
  const totalCals = macros.value.protein * 4 + macros.value.carbs * 4 + macros.value.fat * 9
  return {
    protein: Math.round((macros.value.protein * 4 / totalCals) * 100) || 30,
    carbs: Math.round((macros.value.carbs * 4 / totalCals) * 100) || 45,
    fat: Math.round((macros.value.fat * 9 / totalCals) * 100) || 25,
  }
})

const recommendedProgram = computed(() => {
  if (goal.value === 'loss') {
    return {
      name: '30-Day Metabolic Fat Loss Reset',
      desc: 'Personalized high-protein whole-food meal blueprints to drop healthy fat without hunger.'
    }
  } else if (goal.value === 'maintain') {
    return {
      name: 'Hormonal Balance & PCOS Protocol',
      desc: 'Blood sugar stability, insulin regulation, and cycle normalization via targeted clinical foods.'
    }
  }
  return {
    name: 'Lean Muscle & Metabolic Surge',
    desc: 'High-leucine nutrition plan to sculpt lean curves while keeping body fat minimal.'
  }
})
</script>
