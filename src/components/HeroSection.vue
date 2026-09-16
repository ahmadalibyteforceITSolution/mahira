<template>
  <section id="home" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/70 via-cream to-white">
    <!-- Ambient Background Blobs -->
    <div class="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-200/40 via-gold-100/30 to-emerald-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Content -->
        <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          <!-- Viral Bio Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-100/80 border border-brand-200/80 shadow-sm">
            <span class="flex h-2.5 w-2.5 rounded-full bg-emerald-500 live-pulse"></span>
            <span class="text-xs sm:text-sm font-semibold text-brand-900 tracking-wide">
              Lose Healthy Weight in 30 Days Without Any Restricted Diet 🥗
            </span>
          </div>

          <!-- Headline -->
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
            Eat Real Food. <br class="hidden sm:inline" />
            <span class="italic font-normal text-brand-700">Heal Your Metabolism.</span> <br />
            Transform For Life.
          </h1>

          <!-- Subtitle / Bio summary -->
          <p class="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Welcome to <strong class="text-brand-900 font-semibold">Revitalize with Mahira</strong>. Clinical nutrition and personalized weight management coaching by <strong class="text-brand-900">Coach Mahira</strong> (<a href="https://www.instagram.com/mahira_244/?hl=en" target="_blank" class="text-brand-700 underline font-medium hover:text-brand-900">@mahira_244</a>). No starving, no cutting carbs, and no boring boiled meals.
          </p>

          <!-- Real Instagram Metrics Counter -->
          <div class="grid grid-cols-3 gap-4 pt-2 max-w-md mx-auto lg:mx-0 border-y border-brand-100 py-4">
            <div>
              <div class="text-2xl sm:text-3xl font-serif font-bold text-brand-900">{{ formattedFollowers }}</div>
              <div class="text-xs font-medium text-neutral-500 uppercase tracking-wider">IG Community</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif font-bold text-brand-900">{{ instagramProfile.postsCount }}+</div>
              <div class="text-xs font-medium text-neutral-500 uppercase tracking-wider">Posts & Recipes</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif font-bold text-gold-600">30 Days</div>
              <div class="text-xs font-medium text-neutral-500 uppercase tracking-wider">Proven Reset</div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a 
              href="#booking" 
              class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Schedule Consultation</span>
              <span class="px-2 py-0.5 rounded-full bg-gold-400 text-brand-950 text-xs font-bold uppercase">DM "FIT"</span>
            </a>

            <a 
              href="#calculator" 
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-brand-50 border border-brand-200 text-brand-900 font-semibold text-base shadow-sm hover:shadow transition-all duration-200"
            >
              <svg class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              <span>Calculate My Macros</span>
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="flex items-center justify-center lg:justify-start gap-6 text-xs text-neutral-500 pt-1">
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Zero Starvation Guarantee</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>1-on-1 WhatsApp Coaching</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Global Online Care</span>
            </div>
          </div>

        </div>

        <!-- Right Visual Showcase -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <!-- Decorative Frame -->
          <div class="relative w-full max-w-md">
            
            <!-- Background Glow Card -->
            <div class="absolute inset-0 bg-gradient-to-tr from-brand-600 to-gold-400 rounded-3xl transform rotate-2 scale-95 opacity-20 blur-lg"></div>

            <!-- Main Coach Visual Card -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              
              <div class="relative h-[440px] w-full overflow-hidden group">
                <img 
                  src="/images/coach_mahira.jpg" 
                  alt="Coach Mahira - Weight Management Coach" 
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <!-- Verified Coach Badge -->
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span class="text-xs font-bold text-neutral-900">Coach Mahira</span>
                  <span class="text-[10px] text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full font-semibold">Clinical Pro</span>
                </div>

                <!-- Bio Overlay at Bottom -->
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2 py-0.5 rounded-md bg-gold-500/90 text-brand-950 text-[11px] font-bold uppercase">
                      Non-Restrictive Diet Method
                    </span>
                  </div>
                  <p class="text-sm font-medium text-white/90 italic">
                    "I help you lose fat & build lasting energy while eating what you love."
                  </p>
                </div>
              </div>

              <!-- Real-time Synced Pill at base of card -->
              <div class="p-4 bg-cream/90 flex items-center justify-between border-t border-brand-100 text-xs">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
                  <span class="font-semibold text-neutral-800">Connected to Instagram</span>
                </div>
                <a 
                  href="https://www.instagram.com/mahira_244/?hl=en" 
                  target="_blank" 
                  class="text-brand-700 font-bold hover:underline flex items-center gap-1"
                >
                  <span>@mahira_244</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

            </div>

            <!-- Floating Transformation Card (Left Bottom) -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-brand-100 hidden sm:flex items-center gap-3 animate-bounce-slow">
              <div class="w-12 h-12 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-lg">
                -8kg
              </div>
              <div>
                <div class="text-xs font-bold text-neutral-900">Average 30-Day Result</div>
                <div class="text-[11px] text-emerald-600 font-semibold">Without Cutting Carbs</div>
              </div>
            </div>

            <!-- Floating Recipe Macro Card (Right Top) -->
            <div class="absolute -top-6 -right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-gold-200 hidden sm:block">
              <div class="flex items-center gap-2 text-xs font-bold text-neutral-800">
                <span class="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>Chicken & Chickpea Salad</span>
              </div>
              <div class="flex items-center gap-2 mt-1 text-[11px] font-semibold text-brand-700">
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
