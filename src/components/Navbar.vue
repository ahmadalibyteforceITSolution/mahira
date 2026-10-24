<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    
    <!-- 1. Top Announcement, Contact & Marquee Bar (Exact recreation from socialanddigitalmarketing.com) -->
    <div class="bg-[#031B4E] text-white text-[11px] border-b border-white/10 hidden md:block">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 overflow-hidden">
        
        <!-- Left: Email & Address -->
        <div class="flex items-center gap-4 flex-shrink-0 text-slate-200">
          <a href="mailto:mairasaleem475@gmail.com" class="flex items-center gap-1.5 hover:text-[#00BDE0] transition-colors">
            <svg class="w-3.5 h-3.5 text-[#00BDE0] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Email: mairasaleem475@gmail.com</span>
          </a>
          <span class="text-white/20">•</span>
          <div class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#00BDE0] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>100% Online Working • Worldwide Consultations</span>
          </div>
          <span class="text-white/20">•</span>
          <div class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#00BDE0] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span>Hours: Mon - Sat: 09:00 AM - 07:00 PM</span>
          </div>
        </div>

        <!-- Center Ticker / Marquee Highlight -->
        <div class="hidden xl:flex items-center gap-2 overflow-hidden max-w-sm whitespace-nowrap text-slate-300">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span class="text-[11px] truncate">
            Revitalize with Mahira: Clinical Nutrition, PCOS Care &amp; 30-Day Reset
          </span>
        </div>

        <!-- Right: WhatsApp Direct Button -->
        <div class="flex items-center gap-3 flex-shrink-0">
          <a 
            href="https://wa.me/923137095454?text=FIT" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm flex-shrink-0"
          >
            <svg class="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp: 0313-7095454</span>
          </a>
        </div>

      </div>
    </div>

    <!-- 2. Main Sticky Navigation (Clean white glassmorphism from socialanddigitalmarketing.com) -->
    <div class="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-2.5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-4">
          
          <!-- Brand Logo matching S&D Marketing Solution layout -->
          <a href="#home" class="flex items-center gap-2.5 flex-shrink-0 group">
            <div class="w-10 h-10 rounded-xl bg-[#031B4E] border border-slate-200/60 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform shadow-sm flex-shrink-0">
              <svg class="w-6 h-6 text-[#00BDE0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <div class="flex flex-col whitespace-nowrap">
              <span class="text-sm sm:text-base font-extrabold text-[#031B4E] tracking-wider uppercase leading-none">
                REVITALIZE WITH MAHIRA
              </span>
              <span class="text-[9px] text-[#00BDE0] font-extrabold tracking-widest uppercase mt-1">
                CLINICAL NUTRITION &amp; WEIGHT MANAGEMENT
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Items -->
          <nav class="hidden lg:flex items-center gap-3 xl:gap-5 flex-shrink-0">
            <a href="#home" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">Home</a>
            <a href="#about" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">About</a>
            <a href="#programs" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">Programs</a>
            <a href="#calculator" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">Macro Calculator</a>
            
            <!-- Video Reels Nav Link with live pulse -->
            <a href="#reels" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1 flex items-center gap-1.5">
              <span>Watch Reels</span>
              <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            </a>

            <a href="#transformations" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">Transformations</a>
            <a href="#recipes" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">Recipes</a>
            <a href="#hours" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">Clinic Hours</a>
            
            <!-- Blog link with badge -->
            <a href="#blog" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1 flex items-center gap-1.5">
              <span>Articles</span>
              <span class="px-1.5 py-0.2 rounded-full bg-[#ccf2f9] text-[#0A3366] text-[10px] font-extrabold">50 Guides</span>
            </a>

            <a href="#faq" class="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-xs xl:text-sm transition-colors whitespace-nowrap py-1">FAQ</a>
          </nav>

          <!-- Desktop Right CTAs: Instagram Pill + Primary Button -->
          <div class="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a 
              href="https://www.instagram.com/mahira_244/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#00BDE0] hover:bg-[#ccf2f9]/50 transition-colors flex-shrink-0"
              title="Instagram @mahira_244"
            >
              <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <!-- Primary Action Button with cyan gradient & arrow icon from S&D Marketing -->
            <a 
              href="#booking" 
              class="btn btn-primary text-xs px-4 py-2 flex items-center gap-1.5 shadow-md whitespace-nowrap flex-shrink-0 group"
            >
              <span class="whitespace-nowrap font-bold">Book Consultation</span>
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="lg:hidden flex items-center gap-2">
            <button 
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="p-2 rounded-xl bg-slate-100 text-[#031B4E] hover:bg-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>

        <!-- Mobile Drawer Menu -->
        <div v-show="isMobileMenuOpen" class="lg:hidden mt-3 pb-6 pt-3 border-t border-slate-100 bg-white rounded-2xl px-3 shadow-xl space-y-1">
          <a @click="isMobileMenuOpen = false" href="#home" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">Home</a>
          <a @click="isMobileMenuOpen = false" href="#about" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">About Coach Mahira</a>
          <a @click="isMobileMenuOpen = false" href="#programs" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">Nutrition Programs</a>
          <a @click="isMobileMenuOpen = false" href="#calculator" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">Macro &amp; BMI Calculator</a>
          
          <a @click="isMobileMenuOpen = false" href="#reels" class="px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb] flex items-center justify-between">
            <span>Watch Instagram Reels</span>
            <span class="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">LIVE</span>
          </a>

          <a @click="isMobileMenuOpen = false" href="#transformations" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">Transformations</a>
          <a @click="isMobileMenuOpen = false" href="#recipes" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">High-Protein Recipes</a>
          <a @click="isMobileMenuOpen = false" href="#hours" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">Clinic Hours</a>
          
          <a @click="isMobileMenuOpen = false" href="#blog" class="px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb] flex items-center justify-between">
            <span>Clinical Knowledge Articles</span>
            <span class="px-2 py-0.5 rounded-full bg-[#ccf2f9] text-[#0A3366] text-xs font-bold">50 Guides</span>
          </a>

          <a @click="isMobileMenuOpen = false" href="#faq" class="block px-3 py-2 rounded-xl text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm hover:bg-[#ecf5fb]">FAQ</a>

          <div class="pt-3 border-t border-slate-100 space-y-2">
            <a 
              href="https://wa.me/923137095454?text=FIT"
              target="_blank"
              class="w-full bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Chat on WhatsApp (0313-7095454)</span>
            </a>
            
            <a 
              @click="isMobileMenuOpen = false"
              href="#booking"
              class="w-full btn btn-primary py-2.5 px-4 text-xs font-bold shadow-md"
            >
              <span>Book Your Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </div>

  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
