<template>
  <section id="reels" class="py-20 md:py-28 bg-white border-y border-brand-100/60 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header with Live Instagram Badge -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3 shadow-xs">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500 live-pulse"></span>
            <span>REAL-TIME INSTAGRAM FEED</span>
            <span class="text-rose-400">•</span>
            <span>@mahira_244</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Latest Reels, Recipes & Coaching Videos
          </h2>
          <p class="text-neutral-600 mt-2 max-w-2xl text-base sm:text-lg">
            Watch Coach Mahira's real-time nutrition masterclasses, 15-minute fat loss meal preps, and verified client case studies.
          </p>
        </div>

        <!-- Live Sync Status & Refresh Button -->
        <div class="flex items-center gap-3 bg-brand-50/80 p-3 rounded-2xl border border-brand-200/60 shadow-sm self-start md:self-auto">
          <div class="w-10 h-10 rounded-full overflow-hidden border border-brand-300 shrink-0 bg-brand-200">
            <img 
              src="/images/coach_mahira_avatar.jpg" 
              alt="Mahira" 
              class="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div class="flex items-center gap-1.5 text-xs font-bold text-brand-950">
              <span>{{ instagramProfile.fullName }}</span>
              <svg class="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div class="text-[11px] text-brand-700 font-medium flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Synced {{ formattedSyncTime }}</span>
            </div>
          </div>

          <button 
            @click="handleSync"
            :disabled="instagramProfile.isLiveSyncing"
            class="ml-2 px-3 py-1.5 rounded-xl bg-white hover:bg-brand-100 text-brand-900 border border-brand-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            title="Fetch latest updates from Instagram"
          >
            <svg 
              class="w-3.5 h-3.5 text-brand-700" 
              :class="{ 'animate-spin': instagramProfile.isLiveSyncing }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{{ instagramProfile.isLiveSyncing ? 'Syncing...' : 'Sync Live' }}</span>
          </button>
        </div>
      </div>

      <!-- Categories Filter Tabs -->
      <div class="flex flex-wrap items-center gap-2 mb-8 pb-2 border-b border-neutral-200/70">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200"
          :class="activeCategory === cat 
            ? 'bg-brand-800 text-white shadow-md' 
            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Video Reels Grid (9:16 Vertical Aspect Ratio Cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          @click="openReel(post)"
          class="group relative bg-neutral-900 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
        >
          <!-- Video Thumbnail & Overlay Container (9:16 aspect ratio) -->
          <div class="relative w-full aspect-[9/16] max-h-[480px] overflow-hidden bg-neutral-950">
            <img 
              :src="post.posterUrl" 
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/10 transition-colors"></div>

            <!-- Top Badges -->
            <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-brand-800/90 text-gold-300 backdrop-blur-md border border-brand-600/50">
                {{ post.badge }}
              </span>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                <svg class="w-3.5 h-3.5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
                <span>Reel</span>
              </div>
            </div>

            <!-- Center Play Pulse Button -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/60 text-white flex items-center justify-center transform group-hover:scale-115 transition-transform duration-300 shadow-xl">
                <svg class="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <!-- Bottom Content Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-5 text-white space-y-2">
              <div class="flex items-center gap-3 text-xs text-neutral-300">
                <span class="flex items-center gap-1 font-semibold">
                  <svg class="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  {{ post.views }}
                </span>
                <span>•</span>
                <span class="flex items-center gap-1 font-semibold">
                  <svg class="w-3.5 h-3.5 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {{ post.likes.toLocaleString() }}
                </span>
                <span>•</span>
                <span class="text-neutral-400">{{ post.duration }}</span>
              </div>

              <h3 class="font-bold text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors line-clamp-2 leading-snug">
                {{ post.title }}
              </h3>

              <p class="text-xs text-neutral-300 line-clamp-2 leading-relaxed opacity-90">
                {{ post.caption }}
              </p>
            </div>

          </div>

          <!-- Bottom Action Bar on Card -->
          <div class="p-3 bg-neutral-950 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800">
            <span class="font-semibold text-brand-400">Click to Play Reel</span>
            <span class="flex items-center gap-1 text-gold-400 hover:text-gold-300">
              <span>View Recipe & Macros</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </div>

        </div>
      </div>

      <!-- Instagram Callout Banner -->
      <div class="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-brand-700/40">
        <div class="flex items-center gap-4 text-center sm:text-left">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 p-0.5 shadow-lg">
            <div class="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold font-serif text-white">Join 1,380+ Followers on Instagram</h3>
            <p class="text-sm text-neutral-300 mt-0.5">
              Daily weight loss tips, calorie myth-busting, and high-protein recipe inspirations.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/mahira_244/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 rounded-full bg-white text-brand-950 hover:bg-gold-100 font-bold text-sm shadow-md transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <span>Follow @mahira_244</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>

    </div>

    <!-- Video Player Modal Component -->
    <VideoPlayerModal 
      :isOpen="isModalOpen" 
      :reel="selectedReel" 
      @close="isModalOpen = false" 
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { instagramProfile, instagramPosts, syncInstagramFeed } from '../services/instagramService'
import VideoPlayerModal from './VideoPlayerModal.vue'

const activeCategory = ref('All Posts')
const categories = ['All Posts', 'Recipes', 'Transformations', 'Education', 'Weight Gain']

const isModalOpen = ref(false)
const selectedReel = ref(null)

const filteredPosts = computed(() => {
  if (activeCategory.value === 'All Posts') {
    return instagramPosts.value
  }
  return instagramPosts.value.filter(p => p.category === activeCategory.value)
})

const formattedSyncTime = computed(() => {
  const d = instagramProfile.lastSyncedAt
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})

const handleSync = async () => {
  await syncInstagramFeed()
}

const openReel = (reel) => {
  selectedReel.value = reel
  isModalOpen.value = true
}
</script>
