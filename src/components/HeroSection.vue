<template>
  <section id="home" class="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white">
    <!-- Ambient cyan & navy glow gradients inspired by S&D Marketing -->
    <div class="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#00BDE0]/15 via-[#ecf5fb] to-[#0A3366]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Content (7 cols) -->
        <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          <!-- Viral S&D Style Pill Badge -->
          <div class="badge-cyan">
            <span class="flex h-2.5 w-2.5 rounded-full bg-[#00BDE0] live-pulse"></span>
            <span>Lose Healthy Weight in 30 Days Without Restrictive Diets 🥗</span>
          </div>

          <!-- Bold Authority Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#031B4E] tracking-tight leading-[1.15]">
            Eat Real Food. <br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">Heal Your Metabolism.</span> <br />
            Transform For Life.
          </h1>

          <!-- Subtitle / Bio summary -->
          <p class="text-base sm:text-lg text-[#566593] max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Welcome to <strong class="text-[#031B4E] font-bold">Revitalize with Mahira</strong>. Clinical nutrition protocols and personalized weight management coaching by <strong class="text-[#031B4E]">Coach Mahira</strong> (<a href="https://www.instagram.com/mahira_244/?hl=en" target="_blank" class="text-[#00BDE0] underline font-bold hover:text-[#00a1be]">@mahira_244</a>). No starving, no cutting carbs, and no boring boiled meals.
          </p>

          <!-- S&D Style 3-Pillar Checklist -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto lg:mx-0 pt-1">
            <div class="flex items-center gap-2 p-2.5 rounded-xl bg-[#ecf5fb] border border-slate-200/60">
              <div class="w-5 h-5 rounded-full bg-[#ccf2f9] text-[#00BDE0] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
              <span class="text-xs font-bold text-[#031B4E]">Zero Starvation</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 rounded-xl bg-[#ecf5fb] border border-slate-200/60">
              <div class="w-5 h-5 rounded-full bg-[#ccf2f9] text-[#00BDE0] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
              <span class="text-xs font-bold text-[#031B4E]">PCOS &amp; Thyroid Care</span>
            </div>
            <div class="flex items-center gap-2 p-2.5 rounded-xl bg-[#ecf5fb] border border-slate-200/60">
              <div class="w-5 h-5 rounded-full bg-[#ccf2f9] text-[#00BDE0] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
              <span class="text-xs font-bold text-[#031B4E]">1-on-1 WhatsApp</span>
            </div>
          </div>

          <!-- Real Instagram & Clinic Metrics Counter -->
          <div class="grid grid-cols-3 gap-4 pt-2 max-w-md mx-auto lg:mx-0 border-y border-slate-200/80 py-4">
            <div>
              <div class="text-2xl sm:text-3xl font-extrabold text-[#031B4E]">{{ formattedFollowers }}</div>
              <div class="text-[11px] font-bold text-[#566593] uppercase tracking-wider mt-0.5">IG Community</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-extrabold text-[#00BDE0]">{{ instagramProfile.postsCount }}+</div>
              <div class="text-[11px] font-bold text-[#566593] uppercase tracking-wider mt-0.5">Posts &amp; Recipes</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-extrabold text-[#031B4E]">30 Days</div>
              <div class="text-[11px] font-bold text-[#566593] uppercase tracking-wider mt-0.5">Proven Reset</div>
            </div>
          </div>

          <!-- Action Buttons in S&D Marketing digital style -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
            <a 
              href="#booking" 
              class="w-full sm:w-auto btn btn-primary px-7 py-3.5 text-sm font-bold shadow-lg shadow-[#00BDE0]/25 rounded-xl flex items-center justify-center gap-2 group"
            >
              <span>Schedule Consultation</span>
              <span class="px-2 py-0.5 rounded-md bg-[#031B4E] text-[#00BDE0] text-[11px] font-extrabold uppercase">DM "FIT"</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
              </svg>
            </a>

            <a 
              href="#calculator" 
              class="w-full sm:w-auto btn btn-secondary px-7 py-3.5 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4 text-[#00BDE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              <span>Calculate Daily Macros</span>
            </a>
          </div>

        </div>

        <!-- Right Visual Showcase (5 cols) - Styled with S&D Digital Card Aesthetics -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-md">
            
            <!-- Background Cyan Ambient Glow -->
            <div class="absolute inset-0 bg-gradient-to-tr from-[#00BDE0] to-[#0A3366] rounded-3xl transform rotate-2 scale-95 opacity-25 blur-xl"></div>

            <!-- Main High-Tech Coach Card -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#00BDE0]/40 bg-gradient-to-br from-[#0A3366] via-[#031B4E] to-[#0A3366] text-white">
              
              <div class="relative h-[450px] w-full overflow-hidden group">
                <img 
                  src="/images/coach_mahira.jpg" 
                  alt="Coach Mahira - Clinical Nutritionist & Weight Management Coach" 
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#031B4E] via-[#031B4E]/30 to-transparent"></div>

                <!-- Verified Coach Badge -->
                <div class="absolute top-4 left-4 bg-[#031B4E]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10 shadow-md">
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span class="text-xs font-bold text-white">Coach Mahira</span>
                  <span class="text-[10px] text-[#031B4E] bg-[#00BDE0] px-2 py-0.5 rounded-full font-extrabold uppercase">Verified</span>
                </div>

                <!-- Watch Video Reel Pill on Hero Card -->
                <a 
                  href="#reels" 
                  class="absolute top-4 right-4 bg-[#00BDE0] hover:bg-[#00a1be] text-[#031B4E] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Watch Reels</span>
                </a>

                <!-- Bio Overlay at Bottom -->
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="px-2.5 py-0.5 rounded-md bg-[#00BDE0] text-[#031B4E] text-[11px] font-extrabold uppercase tracking-wide">
                      Non-Restrictive Diet Method
                    </span>
                  </div>
                  <p class="text-sm font-medium text-slate-200 leading-snug">
                    "I help you lose fat &amp; heal metabolism while eating whole foods you truly enjoy."
                  </p>
                </div>
              </div>

              <!-- Real-time Synced Pill at base of card -->
              <div class="p-4 bg-[#031B4E] flex items-center justify-between border-t border-slate-700/80 text-xs">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span class="font-bold text-slate-200">Live Synced with Instagram</span>
                </div>
                <a 
                  href="https://www.instagram.com/mahira_244/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-[#00BDE0] font-bold hover:underline flex items-center gap-1"
                >
                  <span>@mahira_244</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

            </div>

            <!-- Floating Transformation Stat Card (Left Bottom) -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 animate-bounce-slow">
              <div class="w-12 h-12 rounded-xl bg-[#ccf2f9] text-[#0A3366] flex items-center justify-center font-extrabold text-lg">
                -8kg
              </div>
              <div>
                <div class="text-xs font-extrabold text-[#031B4E]">Average 30-Day Result</div>
                <div class="text-[11px] text-emerald-600 font-bold">Without Starving or Cutting Carbs</div>
              </div>
            </div>

            <!-- Floating Recipe Card (Right Top) -->
            <div class="absolute -top-6 -right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-[#00BDE0]/30 hidden sm:block">
              <div class="flex items-center gap-2 text-xs font-bold text-[#031B4E]">
                <span class="w-2 h-2 rounded-full bg-[#00BDE0]"></span>
                <span>Chicken &amp; Chickpea Salad</span>
              </div>
              <div class="flex items-center gap-2 mt-1 text-[11px] font-bold text-[#00BDE0]">
                <span>38g Protein</span> • <span>420 kcal</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { instagramProfile } from '../services/instagramService'

const formattedFollowers = computed(() => {
  return (instagramProfile.followers).toLocaleString()
})
</script>

<style scoped>
@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-bounce-slow {
  animation: bounceSlow 4s ease-in-out infinite;
}
</style>
