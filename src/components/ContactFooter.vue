<template>
  <footer class="bg-brand-950 text-white border-t border-brand-800 pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-800/80">
        
        <!-- Brand Bio (4 cols) -->
        <div class="lg:col-span-4 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-brand-700 text-gold-300 flex items-center justify-center shadow-md">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <div>
              <span class="block font-serif text-xl font-bold tracking-tight text-white">
                Revitalize <span class="text-gold-400 font-sans font-medium text-base">with Mahira</span>
              </span>
              <span class="block text-[11px] uppercase tracking-widest text-brand-300 font-semibold">
                Weight Management Coach
              </span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
            Clinical nutrition protocols and non-restrictive fat loss coaching. Helping you drop healthy weight in 30 days while enjoying family meals and sustained energy.
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              href="https://www.instagram.com/mahira_244/?hl=en" 
              target="_blank" 
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center text-white transition-colors"
              title="Instagram @mahira_244"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a 
              href="https://wa.me/?text=FIT" 
              target="_blank" 
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
              title="WhatsApp Consultation"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Navigation Links (2 cols) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400">Navigation</h4>
          <ul class="space-y-2 text-xs text-neutral-300">
            <li><a href="#about" class="hover:text-gold-300 transition-colors">About Mahira</a></li>
            <li><a href="#programs" class="hover:text-gold-300 transition-colors">Nutrition Programs</a></li>
            <li><a href="#calculator" class="hover:text-gold-300 transition-colors">Macro Calculator</a></li>
            <li><a href="#reels" class="hover:text-gold-300 transition-colors">Reels & Videos</a></li>
            <li><a href="#transformations" class="hover:text-gold-300 transition-colors">Client Results</a></li>
            <li><a href="#recipes" class="hover:text-gold-300 transition-colors">High-Protein Meals</a></li>
          </ul>
        </div>

        <!-- Programs (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400">Protocols</h4>
          <ul class="space-y-2 text-xs text-neutral-300">
            <li><a href="#booking" class="hover:text-gold-300 transition-colors">30-Day Revitalize Reset</a></li>
            <li><a href="#booking" class="hover:text-gold-300 transition-colors">90-Day Metabolic Transformation</a></li>
            <li><a href="#booking" class="hover:text-gold-300 transition-colors">PCOS & Hormonal Protocol</a></li>
            <li><a href="#booking" class="hover:text-gold-300 transition-colors">Lean Bulk Weight Gain</a></li>
            <li><a href="#booking" class="hover:text-gold-300 transition-colors">Free 15-Min Discovery Call</a></li>
          </ul>
        </div>

        <!-- Working Hours & Direct Trigger (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400">Hours & Consultation</h4>
          <div class="text-xs text-neutral-300 space-y-1">
            <p><strong>Mon – Fri:</strong> 09:00 AM – 07:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM – 04:00 PM</p>
            <p><strong>Sunday:</strong> VIP Consultations Only</p>
          </div>

          <div class="pt-2">
            <a 
              href="https://wa.me/?text=FIT" 
              target="_blank"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>DM "FIT" on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
        <div>
          © {{ new Date().getFullYear() }} Revitalize with Mahira (@mahira_244). All rights reserved.
        </div>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <span>•</span>
          <a href="#" class="hover:underline">Terms of Service</a>
          <span>•</span>
          <span class="text-neutral-500">Designed for Clinical Excellence</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>
