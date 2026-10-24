<template>
  <section id="about" class="py-20 md:py-28 bg-white relative overflow-hidden">
    <!-- Subtle cyan background accent -->
    <div class="absolute top-1/2 left-0 w-72 h-72 bg-[#00BDE0]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left: Image Composition with Credentials (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md">
            
            <!-- Background modern cyan frame -->
            <div class="absolute -top-3 -left-3 w-full h-full rounded-3xl border-2 border-[#00BDE0] transform -rotate-1 -z-10"></div>
            
            <!-- Main Photo Card -->
            <div class="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
              <img 
                src="/images/coach_mahira.jpg" 
                alt="Coach Mahira - Clinical Nutritionist & Weight Management Coach" 
                class="w-full h-[490px] object-cover object-top"
              />
            </div>

            <!-- Floating Badge Card: 100% Non-Restrictive (S&D Card style) -->
            <div class="absolute -bottom-6 -right-4 sm:-right-6 bg-[#031B4E] text-white p-5 rounded-2xl shadow-2xl border border-[#00BDE0]/30 max-w-xs">
              <div class="flex items-center gap-2 text-[#00BDE0] font-extrabold text-sm mb-1.5">
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>The Mahira Principle</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed font-normal">
                "If you can't see yourself eating this way 5 years from now, it is not the right diet for your metabolism."
              </p>
            </div>

          </div>
        </div>

        <!-- Right: Narrative & Core Pillars (7 cols) -->
        <div class="lg:col-span-7 space-y-7">
          
          <div>
            <div class="badge-cyan mb-3">
              <span>Meet Your Clinical Dietitian</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
              Hi, I'm Mahira. <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">I help you build a body you love without giving up the foods you adore.</span>
            </h2>
          </div>

          <p class="text-[#566593] text-base sm:text-lg leading-relaxed">
            As a clinical nutritionist and weight management coach behind <strong class="text-[#031B4E]">@mahira_244</strong>, I watched too many women and men destroy their metabolisms with 800-calorie soups, juice cleanses, and zero-carb torture. You lose weight temporarily, only to gain back double when reality sets in.
          </p>

          <p class="text-[#566593] text-base leading-relaxed">
            Through <strong class="text-[#031B4E]">Revitalize with Mahira</strong>, we use evidence-based metabolic pacing. We prioritize satisfying, high-protein whole foods—from chicken and chickpea power bowls to home-cooked lentils and rice—so you effortlessly maintain a caloric deficit while feeling energetic and nourished.
          </p>

          <!-- 3 Pillars Grid with S&D Card Styling (Top Cyan Accent Stripe) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div class="p-4 rounded-2xl bg-[#ecf5fb] border border-slate-200/80 border-t-4 border-t-[#00BDE0] shadow-xs">
              <div class="w-8 h-8 rounded-xl bg-[#031B4E] text-[#00BDE0] flex items-center justify-center font-extrabold text-xs mb-2.5">
                01
              </div>
              <h4 class="font-extrabold text-sm text-[#031B4E] mb-1">Zero Food Guilt</h4>
              <p class="text-xs text-[#566593] leading-relaxed">
                No forbidden foods. We guide you how to enjoy family dinners, weddings, and comfort meals with macro control.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-[#ecf5fb] border border-slate-200/80 border-t-4 border-t-[#00BDE0] shadow-xs">
              <div class="w-8 h-8 rounded-xl bg-[#031B4E] text-[#00BDE0] flex items-center justify-center font-extrabold text-xs mb-2.5">
                02
              </div>
              <h4 class="font-extrabold text-sm text-[#031B4E] mb-1">Hormone Health</h4>
              <p class="text-xs text-[#566593] leading-relaxed">
                Endocrine-supportive protocols for PCOS, insulin resistance, cortisol balance, and sluggish thyroid recovery.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-[#ecf5fb] border border-slate-200/80 border-t-4 border-t-[#00BDE0] shadow-xs">
              <div class="w-8 h-8 rounded-xl bg-[#031B4E] text-[#00BDE0] flex items-center justify-center font-extrabold text-xs mb-2.5">
                03
              </div>
              <h4 class="font-extrabold text-sm text-[#031B4E] mb-1">Daily WhatsApp</h4>
              <p class="text-xs text-[#566593] leading-relaxed">
                Direct 1-on-1 WhatsApp guidance, plate reviews, weekly progress check-ins, and continuous motivation.
              </p>
            </div>
          </div>

          <!-- Action & CTA -->
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
            <a 
              href="#booking"
              class="w-full sm:w-auto btn btn-primary px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md rounded-xl flex items-center justify-center gap-2 group"
            >
              <span>Schedule 1-on-1 Assessment</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/mahira_244/?hl=en" 
              target="_blank"
              class="w-full sm:w-auto btn btn-secondary px-6 py-3.5 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <span>Follow @mahira_244 on Instagram</span>
              <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
