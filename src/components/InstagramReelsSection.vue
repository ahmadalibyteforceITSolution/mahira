<template>
  <section id="reels" class="py-20 md:py-28 bg-[#ecf5fb]/50 border-y border-slate-100 relative overflow-hidden">
    <!-- Ambient cyan glow effects -->
    <div class="absolute top-1/4 -right-40 w-96 h-96 bg-[#00BDE0]/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 -left-40 w-96 h-96 bg-[#0A3366]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <!-- Viral S&D Pill Badge -->
          <div class="badge-cyan mb-3">
            <span class="flex h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
            <span>Real-Time Instagram Video Stream • @mahira_244</span>
          </div>
          
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
            Watch Coaching Videos &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">Recipe Reels</span>
          </h2>
          
          <p class="text-[#566593] mt-2.5 max-w-2xl text-base sm:text-lg">
            High-protein cooking tutorials, fat loss science, and client milestones fetched live from Coach Mahira's verified feed. Click any video for instant cinema playback with sound.
          </p>
        </div>

        <!-- Instagram Fetcher & Live Sync Actions -->
        <div class="flex flex-wrap items-center gap-3">
          <!-- Follower Counter Pill -->
          <div class="px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-semibold text-[#031B4E]">
            <svg class="w-4 h-4 text-pink-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span><strong class="text-[#00BDE0]">{{ instagramProfile.followers.toLocaleString() }}</strong> Followers</span>
          </div>

          <!-- Live Fetch Button -->
          <button 
            @click="handleSyncInstagram"
            :disabled="instagramProfile.isLiveSyncing"
            class="btn bg-[#00BDE0] hover:bg-[#00a1be] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-[#00BDE0]/25 flex items-center gap-2 cursor-pointer transition-all"
            title="Fetch Latest Reels from Instagram"
          >
            <svg 
              class="w-3.5 h-3.5 flex-shrink-0" 
              :class="{ 'animate-spin': instagramProfile.isLiveSyncing }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span>{{ instagramProfile.isLiveSyncing ? 'Fetching Live...' : 'Fetch from Instagram' }}</span>
          </button>

          <!-- Follow on Instagram Link -->
          <a 
            href="https://www.instagram.com/mahira_244/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn bg-white hover:bg-slate-50 text-[#031B4E] border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5"
          >
            <span>@mahira_244</span>
            <svg class="w-3.5 h-3.5 text-[#00BDE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Sync Notification Banner -->
      <div 
        v-if="syncNotification" 
        class="mb-8 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-bold flex items-center justify-between animate-fade-in"
      >
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
          <span>{{ syncNotification }}</span>
        </div>
        <button @click="syncNotification = ''" class="text-slate-400 hover:text-slate-700">✕</button>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap items-center gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none"
          :class="selectedCategory === cat 
            ? 'bg-[#031B4E] text-[#00BDE0] shadow-sm' 
            : 'bg-white text-[#566593] hover:text-[#031B4E] hover:bg-slate-100 border border-slate-200/80'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Video Reels Grid (9:16 Vertical Video Cards with Live Playable Previews) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="group relative bg-[#031B4E] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#00BDE0]/60 shadow-[0_4px_20px_-2px_rgba(10,51,102,0.08)] hover:shadow-[0_20px_35px_-5px_rgba(0,189,224,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer"
          @mouseenter="hoverCard(post.id)"
          @mouseleave="leaveCard(post.id)"
        >
          <!-- Video Container (9:16 vertical smartphone ratio) -->
          <div class="relative w-full aspect-[9/16] max-h-[480px] overflow-hidden bg-black">
            
            <!-- Working HTML5 Video Preview on Card -->
            <video
              :ref="el => setVideoCardRef(el, post.id)"
              :src="post.videoUrl"
              :poster="post.posterUrl"
              playsinline
              muted
              loop
              preload="metadata"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              @click="openReel(post)"
            ></video>

            <!-- Video Dark Gradient Overlay -->
            <div 
              class="absolute inset-0 bg-gradient-to-t from-[#031B4E] via-black/25 to-black/30 pointer-events-none"
              @click="openReel(post)"
            ></div>

            <!-- Top Pill Badges on Card -->
            <div class="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              <span class="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-[#00BDE0] text-[#031B4E] shadow-sm">
                {{ post.badge }}
              </span>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                <svg class="w-3.5 h-3.5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
                <span>Reel</span>
              </div>
            </div>

            <!-- Center Play Pulse Button overlay -->
            <div 
              class="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
              @click="openReel(post)"
            >
              <div class="w-14 h-14 rounded-full bg-[#00BDE0] text-[#031B4E] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <svg class="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <!-- Card Bottom Info Overlay -->
            <div 
              class="absolute bottom-0 left-0 right-0 p-5 text-white space-y-2 z-10 pointer-events-none"
            >
              <div class="flex items-center gap-3 text-xs text-slate-300">
                <span class="flex items-center gap-1 font-bold text-[#00BDE0]">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  {{ post.views }}
                </span>
                <span>•</span>
                <span class="flex items-center gap-1 font-semibold text-rose-300">
                  <svg class="w-3.5 h-3.5 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {{ post.likes.toLocaleString() }}
                </span>
                <span>•</span>
                <span class="text-slate-400 font-mono">{{ post.duration }}</span>
              </div>

              <h3 class="font-extrabold text-base text-white group-hover:text-[#00BDE0] transition-colors line-clamp-2 leading-snug">
                {{ post.title }}
              </h3>

              <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">
                {{ post.caption }}
              </p>
            </div>

          </div>

          <!-- Bottom Action Bar on Card -->
          <div class="p-3.5 bg-[#031B4E] flex items-center justify-between text-xs text-slate-300 border-t border-slate-700/80">
            <span class="font-bold text-[#00BDE0] flex items-center gap-1.5" @click="openReel(post)">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Watch Full Video</span>
            </span>

            <a 
              :href="post.instagramPostUrl || 'https://www.instagram.com/mahira_244/?hl=en'" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              @click.stop
            >
              <span>Open on Instagram</span>
              <svg class="w-3.5 h-3.5 text-[#00BDE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

    </div>

    <!-- Cinema Video Player Modal -->
    <VideoPlayerModal 
      :is-open="isModalOpen" 
      :reel="selectedReel" 
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { instagramProfile, instagramPosts, syncInstagramFeed } from '../services/instagramService'
import VideoPlayerModal from './VideoPlayerModal.vue'

const categories = ['All Videos', 'Recipes', 'Education', 'Transformations']
const selectedCategory = ref('All Videos')
const isModalOpen = ref(false)
const selectedReel = ref(null)
const syncNotification = ref('')
const videoRefs = {}

const setVideoCardRef = (el, id) => {
  if (el) {
    videoRefs[id] = el
  }
}

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All Videos') return instagramPosts.value
  return instagramPosts.value.filter(p => p.category === selectedCategory.value)
})

const hoverCard = (id) => {
  const vid = videoRefs[id]
  if (vid && vid.paused) {
    vid.play().catch(() => {})
  }
}

const leaveCard = (id) => {
  const vid = videoRefs[id]
  if (vid && !vid.paused) {
    vid.pause()
    vid.currentTime = 0
  }
}

const openReel = (reel) => {
  selectedReel.value = reel
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedReel.value = null
}

const handleSyncInstagram = async () => {
  syncNotification.value = 'Connecting to Instagram @mahira_244 API...'
  const result = await syncInstagramFeed()
  syncNotification.value = result.message
  setTimeout(() => {
    syncNotification.value = ''
  }, 5000)
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}
</style>
