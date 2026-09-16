<template>
  <section id="about" class="py-20 md:py-28 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left: Image Composition with Credentials (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md">
            
            <!-- Background luxury frame -->
            <div class="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-gold-300 transform -rotate-2 -z-10"></div>
            
            <!-- Main Photo -->
            <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-50">
              <img 
                src="/images/coach_mahira.jpg" 
                alt="Coach Mahira - Clinical Nutritionist" 
                class="w-full h-[480px] object-cover object-top"
              />
            </div>

            <!-- Floating Badge Card: 100% Non-Restrictive -->
            <div class="absolute -bottom-6 -right-6 bg-cream p-5 rounded-2xl shadow-xl border border-brand-200/80 max-w-xs">
              <div class="flex items-center gap-2 text-brand-800 font-bold text-sm mb-1">
                <svg class="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>The Mahira Principle</span>
              </div>
              <p class="text-xs text-neutral-600 leading-relaxed">
                "If you can't see yourself eating this way 5 years from now, it is not the right diet for you."
              </p>
            </div>

          </div>
        </div>

        <!-- Right: Narrative & Core Pillars (7 cols) -->
        <div class="lg:col-span-7 space-y-7">
          
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-100/80 px-3.5 py-1.5 rounded-full">
              Meet Your Coach
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mt-3 leading-tight">
              Hi, I'm Mahira. <br />
              <span class="text-brand-700 font-normal italic">I help you build a body you love without giving up the foods you adore.</span>
            </h2>
          </div>

          <p class="text-neutral-600 text-base sm:text-lg leading-relaxed">
            As a clinical nutritionist and weight management coach behind <strong class="text-brand-900">@mahira_244</strong>, I watched too many women and men destroy their metabolisms with 800-calorie soups, juice cleanses, and zero-carb torture. You lose weight temporarily, only to gain back double when reality sets in.
          </p>

          <p class="text-neutral-600 text-base leading-relaxed">
            Through <strong class="text-brand-900">Revitalize with Mahira</strong>, we use evidence-based metabolic pacing. We prioritize satisfying, high-protein whole foods—from chicken and chickpea power bowls to home-cooked lentils and rice—so you effortlessly maintain a caloric deficit while feeling energetic and nourished.
          </p>

          <!-- 3 Pillars Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div class="p-4 rounded-2xl bg-brand-50/60 border border-brand-100">
              <div class="w-8 h-8 rounded-xl bg-brand-700 text-gold-300 flex items-center justify-center font-bold text-sm mb-2.5">
                01
              </div>
              <h4 class="font-bold text-sm text-neutral-900 mb-1">Zero Food Guilt</h4>
              <p class="text-xs text-neutral-600 leading-relaxed">
                No good or bad foods. We show you how to enjoy celebrations, social dining, and comfort meals with macro awareness.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-brand-50/60 border border-brand-100">
              <div class="w-8 h-8 rounded-xl bg-brand-700 text-gold-300 flex items-center justify-center font-bold text-sm mb-2.5">
                02
              </div>
              <h4 class="font-bold text-sm text-neutral-900 mb-1">Hormone Health</h4>
              <p class="text-xs text-neutral-600 leading-relaxed">
                Targeted protocols for PCOS, insulin resistance, cortisol balance, and sluggish thyroid recovery.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-brand-50/60 border border-brand-100">
              <div class="w-8 h-8 rounded-xl bg-brand-700 text-gold-300 flex items-center justify-center font-bold text-sm mb-2.5">
                03
              </div>
              <h4 class="font-bold text-sm text-neutral-900 mb-1">Daily WhatsApp</h4>
              <p class="text-xs text-neutral-600 leading-relaxed">
                You never do this alone. Direct 1-on-1 WhatsApp guidance, plate reviews, and weekly metric assessments.
              </p>
            </div>
          </div>

          <!-- Action & CTA -->
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-neutral-100">
            <a 
              href="#booking"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Schedule 1-on-1 Assessment</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/mahira_244/?hl=en" 
              target="_blank"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-sm transition-all"
            >
              <span>Follow Journey on IG</span>
              <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>
