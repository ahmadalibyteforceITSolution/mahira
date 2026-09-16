<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream/95 backdrop-blur-md shadow-xs border-b border-brand-100/70 py-3.5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4">
        
        <!-- Brand Logo (Single-line, pristine alignment, never wraps) -->
        <a href="#home" class="flex items-center gap-3 shrink-0 group">
          <div class="w-10 h-10 rounded-full bg-brand-800 text-gold-300 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
          </div>
          <div class="whitespace-nowrap">
            <div class="flex items-baseline gap-1.5">
              <span class="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-none">
                Revitalize
              </span>
              <span class="font-sans text-xs sm:text-sm font-semibold text-gold-600 uppercase tracking-wider">
                with Mahira
              </span>
            </div>
            <span class="block text-[10px] uppercase tracking-widest text-brand-700 font-bold mt-0.5">
              Weight Management Coach
            </span>
          </div>
        </a>

        <!-- Desktop Navigation (Strict whitespace-nowrap, never wraps onto 2 lines) -->
        <nav class="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
          <a href="#about" class="text-xs xl:text-sm font-semibold text-neutral-700 hover:text-brand-800 whitespace-nowrap transition-colors py-1">About</a>
          <a href="#programs" class="text-xs xl:text-sm font-semibold text-neutral-700 hover:text-brand-800 whitespace-nowrap transition-colors py-1">Programs</a>
          <a href="#calculator" class="text-xs xl:text-sm font-semibold text-neutral-700 hover:text-brand-800 whitespace-nowrap transition-colors py-1">Macro Calculator</a>
          <a href="#reels" class="text-xs xl:text-sm font-semibold text-neutral-700 hover:text-brand-800 whitespace-nowrap transition-colors py-1 flex items-center gap-1.5">
            <span>Instagram Feed</span>
            <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          </a>
          <a href="#transformations" class="text-xs xl:text-sm font-semibold text-neutral-700 hover:text-brand-800 whitespace-nowrap transition-colors py-1">Transformations</a>
          <a href="#hours" class="text-xs xl:text-sm font-semibold text-neutral-700 hover:text-brand-800 whitespace-nowrap transition-colors py-1">Working Hours</a>
          <a href="#recipes" class="text-xs xl:text-sm font-semibold text-neutral-700 hover:text-brand-800 whitespace-nowrap transition-colors py-1">Recipes</a>
        </nav>

        <!-- Right Action Items (Single row, never wraps) -->
        <div class="hidden sm:flex items-center gap-3 shrink-0">
          <a 
            href="https://www.instagram.com/mahira_244/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-brand-900 bg-white hover:bg-brand-50 border border-brand-200/80 shadow-xs transition-all hover:scale-105 whitespace-nowrap"
            title="Follow @mahira_244 on Instagram"
          >
            <svg class="w-3.5 h-3.5 text-pink-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@mahira_244</span>
          </a>

          <a 
            href="#booking" 
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-800 hover:bg-brand-900 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Book Consultation</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Hamburger Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-xl text-neutral-800 hover:bg-brand-100/60"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Drawer -->
      <div v-show="isMobileMenuOpen" class="lg:hidden mt-3 pb-6 pt-3 border-t border-brand-100 bg-cream/95 backdrop-blur-md rounded-2xl px-4 shadow-xl">
        <div class="flex flex-col gap-2.5">
          <a @click="isMobileMenuOpen = false" href="#about" class="px-3 py-2 rounded-lg text-neutral-800 font-semibold text-sm hover:bg-brand-50">About Coach Mahira</a>
          <a @click="isMobileMenuOpen = false" href="#programs" class="px-3 py-2 rounded-lg text-neutral-800 font-semibold text-sm hover:bg-brand-50">Nutrition Programs</a>
          <a @click="isMobileMenuOpen = false" href="#calculator" class="px-3 py-2 rounded-lg text-neutral-800 font-semibold text-sm hover:bg-brand-50">Macro & Calorie Calculator</a>
          <a @click="isMobileMenuOpen = false" href="#reels" class="px-3 py-2 rounded-lg text-neutral-800 font-semibold text-sm hover:bg-brand-50 flex items-center justify-between">
            <span>Live Instagram Reels & Posts</span>
            <span class="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">LIVE</span>
          </a>
          <a @click="isMobileMenuOpen = false" href="#transformations" class="px-3 py-2 rounded-lg text-neutral-800 font-semibold text-sm hover:bg-brand-50">Client Transformations</a>
          <a @click="isMobileMenuOpen = false" href="#hours" class="px-3 py-2 rounded-lg text-neutral-800 font-semibold text-sm hover:bg-brand-50">Working Hours & Availability</a>
          <a @click="isMobileMenuOpen = false" href="#recipes" class="px-3 py-2 rounded-lg text-neutral-800 font-semibold text-sm hover:bg-brand-50">High-Protein Recipes</a>
          
          <div class="pt-3 border-t border-brand-100 flex flex-col gap-2">
            <a 
              href="https://www.instagram.com/mahira_244/?hl=en"
              target="_blank"
              class="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-200 text-brand-900 font-bold text-xs bg-white"
            >
              Follow @mahira_244 on Instagram
            </a>
            <a 
              @click="isMobileMenuOpen = false"
              href="#booking" 
              class="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-800 text-white font-bold text-xs shadow-md"
            >
              Book Your Consultation Now
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
