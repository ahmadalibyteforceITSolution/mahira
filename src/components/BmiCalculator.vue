<template>
  <section id="calculator" class="py-20 md:py-28 bg-sand/40 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-100/70 px-3.5 py-1.5 rounded-full">
          Interactive Health Assessment
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mt-3">
          Calculate Your Daily Macros & Calorie Target
        </h2>
        <p class="text-neutral-600 mt-3 text-base sm:text-lg">
          No guesswork. Discover your scientific Basal Metabolic Rate (BMR) and customized macro targets for healthy fat loss or muscle gain.
        </p>
      </div>

      <!-- Calculator Card Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Input Form (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-luxury border border-brand-100 space-y-6">
          
          <!-- Gender Selection -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">Gender</label>
            <div class="grid grid-cols-2 gap-3">
              <button 
                type="button"
                @click="gender = 'female'" 
                class="py-3 px-4 rounded-2xl border text-sm font-bold flex items-center justify-center gap-2 transition-all"
                :class="gender === 'female' ? 'bg-brand-800 text-white border-brand-800 shadow-sm' : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'"
              >
                <span>Female</span>
              </button>
              <button 
                type="button"
                @click="gender = 'male'" 
                class="py-3 px-4 rounded-2xl border text-sm font-bold flex items-center justify-center gap-2 transition-all"
                :class="gender === 'male' ? 'bg-brand-800 text-white border-brand-800 shadow-sm' : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'"
              >
                <span>Male</span>
              </button>
            </div>
          </div>

          <!-- Age & Unit Toggle -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Age</label>
              <div class="relative">
                <input 
                  type="number" 
                  v-model.number="age" 
                  min="16" 
                  max="90" 
                  class="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 text-neutral-900 font-bold"
                />
                <span class="absolute right-3 top-3 text-xs text-neutral-400 font-semibold">yrs</span>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Height</label>
              <div class="relative">
                <input 
                  type="number" 
                  v-model.number="heightCm" 
                  min="120" 
                  max="230" 
                  class="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 text-neutral-900 font-bold"
                />
                <span class="absolute right-3 top-3 text-xs text-neutral-400 font-semibold">cm</span>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Current Weight</label>
              <div class="relative">
                <input 
                  type="number" 
                  v-model.number="weightKg" 
                  min="35" 
                  max="200" 
                  class="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 text-neutral-900 font-bold"
                />
                <span class="absolute right-3 top-3 text-xs text-neutral-400 font-semibold">kg</span>
              </div>
            </div>
          </div>

          <!-- Activity Level -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Daily Activity Level</label>
            <select 
              v-model="activityMultiplier"
              class="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 text-neutral-900 font-semibold text-sm bg-white"
            >
              <option :value="1.2">Sedentary (Desk job, little or no exercise)</option>
              <option :value="1.375">Lightly Active (1-3 light workouts or 7k daily steps)</option>
              <option :value="1.55">Moderately Active (3-5 sessions / week or 10k steps)</option>
              <option :value="1.725">Very Active (6-7 intense training sessions / week)</option>
            </select>
          </div>

          <!-- Goal Selection -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">Primary Goal</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button 
                type="button"
                @click="goal = 'loss'" 
                class="p-3.5 rounded-2xl border text-left transition-all"
                :class="goal === 'loss' ? 'bg-brand-50 border-brand-700 text-brand-950 ring-2 ring-brand-700/20' : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'"
              >
                <div class="text-xs font-bold">Fat Loss (30-Day Reset)</div>
                <div class="text-[11px] text-neutral-500 mt-0.5">Shed fat without starving</div>
              </button>

              <button 
                type="button"
                @click="goal = 'maintain'" 
                class="p-3.5 rounded-2xl border text-left transition-all"
                :class="goal === 'maintain' ? 'bg-brand-50 border-brand-700 text-brand-950 ring-2 ring-brand-700/20' : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'"
              >
                <div class="text-xs font-bold">Maintain & Hormone Balance</div>
                <div class="text-[11px] text-neutral-500 mt-0.5">Tone up & metabolic health</div>
              </button>

              <button 
                type="button"
                @click="goal = 'gain'" 
                class="p-3.5 rounded-2xl border text-left transition-all"
                :class="goal === 'gain' ? 'bg-brand-50 border-brand-700 text-brand-950 ring-2 ring-brand-700/20' : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'"
              >
                <div class="text-xs font-bold">Healthy Weight Gain</div>
                <div class="text-[11px] text-neutral-500 mt-0.5">Build lean muscle & curves</div>
              </button>
            </div>
          </div>

        </div>

        <!-- Right: Real-time Results Dashboard (5 cols) -->
        <div class="lg:col-span-5 bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-800 space-y-6">
          
          <div class="flex items-center justify-between border-b border-brand-800 pb-4">
            <div>
              <span class="text-xs font-bold text-gold-400 uppercase tracking-widest">Calculated Targets</span>
              <h3 class="text-xl font-bold font-serif text-white">Your Metabolic Blueprint</h3>
            </div>
            <div class="px-3 py-1 rounded-full bg-brand-800 text-brand-200 text-xs font-bold">
              BMI: {{ bmi.toFixed(1) }} ({{ bmiCategory }})
            </div>
          </div>

          <!-- Calories Target Spotlight -->
          <div class="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span class="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Recommended Daily Energy Target</span>
            <div class="text-4xl sm:text-5xl font-serif font-extrabold text-gold-300 my-1">
              {{ dailyCalories.toLocaleString() }} <span class="text-xl font-sans font-normal text-white/80">kcal</span>
            </div>
            <p class="text-xs text-brand-200">
              {{ calorieDescription }}
            </p>
          </div>

          <!-- Daily Macro Breakdown Bars -->
          <div class="space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-neutral-300">Target Daily Macronutrients</h4>

            <!-- Protein -->
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-emerald-300 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Protein (Muscle & Satiety)
                </span>
                <span class="font-bold text-white">{{ macros.protein }}g ({{ macroPercent.protein }}%)</span>
              </div>
              <div class="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div class="bg-emerald-400 h-full rounded-full transition-all duration-500" :style="{ width: macroPercent.protein + '%' }"></div>
              </div>
            </div>

            <!-- Carbohydrates -->
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-amber-300 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                  Carbohydrates (Clean Fuel)
                </span>
                <span class="font-bold text-white">{{ macros.carbs }}g ({{ macroPercent.carbs }}%)</span>
              </div>
              <div class="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div class="bg-amber-400 h-full rounded-full transition-all duration-500" :style="{ width: macroPercent.carbs + '%' }"></div>
              </div>
            </div>

            <!-- Healthy Fats -->
            <div>
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-rose-300 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-rose-400"></span>
                  Healthy Fats (Hormone Health)
                </span>
                <span class="font-bold text-white">{{ macros.fat }}g ({{ macroPercent.fat }}%)</span>
              </div>
              <div class="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div class="bg-rose-400 h-full rounded-full transition-all duration-500" :style="{ width: macroPercent.fat + '%' }"></div>
              </div>
            </div>
          </div>

          <!-- Suggested Plan Callout -->
          <div class="pt-2">
            <div class="p-4 rounded-2xl bg-brand-800/80 border border-brand-700 text-xs space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-gold-300 font-bold uppercase text-[10px] tracking-wider">Suggested Program</span>
                <span class="text-white font-bold">{{ recommendedProgram.name }}</span>
              </div>
              <p class="text-neutral-300 text-[11px] leading-relaxed">
                {{ recommendedProgram.desc }}
              </p>
            </div>

            <a 
              href="#booking"
              class="mt-4 w-full py-3.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-brand-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Coach Mahira to Build Your Custom Plan</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    return Math.max(1300, Math.round(tdee.value - 450))
  } else if (goal.value === 'gain') {
    return Math.round(tdee.value + 350)
  } else {
    return tdee.value
  }
})

const calorieDescription = computed(() => {
  if (goal.value === 'loss') {
    return 'Comfortable 450 kcal deficit for steady 0.5kg - 1.0kg fat loss/week without fatigue.'
  } else if (goal.value === 'gain') {
    return 'Clean 350 kcal surplus tailored to pack on lean muscle and healthy tissue.'
  } else {
    return 'Maintenance energy to balance hormones, stabilize blood sugar, and tone body.'
  }
})

const bmi = computed(() => {
  const hMeter = heightCm.value / 100
  return weightKg.value / (hMeter * hMeter)
})

const bmiCategory = computed(() => {
  const val = bmi.value
  if (val < 18.5) return 'Underweight'
  if (val < 25) return 'Normal Weight'
  if (val < 30) return 'Overweight'
  return 'Obese'
})

// Macro calculation based on weight and goal
const macros = computed(() => {
  let proteinGrams = 0
  let fatGrams = 0
  let carbGrams = 0
  const cals = dailyCalories.value

  if (goal.value === 'loss') {
    // 1.8g per kg for satiety and muscle retention
    proteinGrams = Math.round(weightKg.value * 1.8)
    // 25% of calories from healthy fats
    fatGrams = Math.round((cals * 0.25) / 9)
    // remaining from carbs
    carbGrams = Math.round((cals - (proteinGrams * 4 + fatGrams * 9)) / 4)
  } else if (goal.value === 'gain') {
    proteinGrams = Math.round(weightKg.value * 2.0)
    fatGrams = Math.round((cals * 0.28) / 9)
    carbGrams = Math.round((cals - (proteinGrams * 4 + fatGrams * 9)) / 4)
  } else {
    proteinGrams = Math.round(weightKg.value * 1.6)
    fatGrams = Math.round((cals * 0.27) / 9)
    carbGrams = Math.round((cals - (proteinGrams * 4 + fatGrams * 9)) / 4)
  }

  return {
    protein: Math.max(70, proteinGrams),
    fat: Math.max(40, fatGrams),
    carbs: Math.max(100, carbGrams)
  }
})

const macroPercent = computed(() => {
  const cals = dailyCalories.value
  const pCal = macros.value.protein * 4
  const cCal = macros.value.carbs * 4
  const fCal = macros.value.fat * 9
  const total = pCal + cCal + fCal
  return {
    protein: Math.round((pCal / total) * 100),
    carbs: Math.round((cCal / total) * 100),
    fat: Math.round((fCal / total) * 100)
  }
})

const recommendedProgram = computed(() => {
  if (goal.value === 'loss') {
    return {
      name: '30-Day Revitalize Reset',
      desc: 'Our signature protocol to melt stubborn fat without cutting cultural foods or carbs.'
    }
  } else if (goal.value === 'gain') {
    return {
      name: 'Lean Bulk & Healthy Weight Gain',
      desc: 'High-density wholesome meals and appetite coaching to build curves cleanly.'
    }
  } else {
    return {
      name: 'Hormonal Harmony & PCOS Protocol',
      desc: 'Nutrient-dense balancing to optimize cycles, gut flora, and daily vitality.'
    }
  }
})
</script>
