<template>
  <div 
    v-if="isOpen && reel" 
    class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#031B4E]/85 backdrop-blur-md animate-fade-in"
    @click.self="close"
  >
    <!-- Modal Container styled with S&D Marketing digital aesthetics -->
    <div class="relative w-full max-w-4xl max-h-[94vh] bg-[#031B4E] rounded-3xl overflow-hidden shadow-2xl border border-[#00BDE0]/30 flex flex-col md:flex-row text-white">
      
      <!-- Close Button -->
      <button 
        @click="close"
        class="absolute top-3.5 right-3.5 z-40 w-9 h-9 rounded-full bg-black/60 hover:bg-[#00BDE0] hover:text-[#031B4E] text-white flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer"
        aria-label="Close modal"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Left: 9:16 Smartphone Vertical Cinema Frame -->
      <div class="md:w-1/2 bg-black relative flex flex-col items-center justify-center overflow-hidden min-h-[420px] md:min-h-[620px] select-none">
        
        <!-- Player Mode Switcher Tabs (Cinema Video vs Official Instagram Embed) -->
        <div class="absolute top-3 left-3 right-12 z-30 flex items-center gap-2">
          <button 
            @click="playerMode = 'native'"
            class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all shadow-sm flex items-center gap-1.5"
            :class="playerMode === 'native' ? 'bg-[#00BDE0] text-[#031B4E]' : 'bg-black/60 text-white/80 hover:bg-black/80'"
          >
            <span class="w-2 h-2 rounded-full" :class="playerMode === 'native' ? 'bg-[#031B4E] animate-pulse' : 'bg-slate-400'"></span>
            <span>HD Cinema Player</span>
          </button>

          <button 
            @click="playerMode = 'instagram'"
            class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all shadow-sm flex items-center gap-1.5"
            :class="playerMode === 'instagram' ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white' : 'bg-black/60 text-white/80 hover:bg-black/80'"
          >
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram Live</span>
          </button>
        </div>

        <!-- MODE A: Native Cinema Video Player -->
        <div v-show="playerMode === 'native'" class="relative w-full h-full aspect-[9/16] max-h-[85vh] flex items-center justify-center bg-black">
          
          <!-- Native HTML5 Video Element -->
          <video 
            ref="videoElement"
            :src="currentVideoSource"
            :poster="reel.posterUrl"
            playsinline
            loop
            preload="auto"
            class="w-full h-full object-cover cursor-pointer"
            @click="togglePlay"
            @timeupdate="onTimeUpdate"
            @waiting="isBuffering = true"
            @playing="isBuffering = false; isPlaying = true"
            @ended="onEnded"
            @error="handleVideoError"
          ></video>

          <!-- Top Reel Header Over Video -->
          <div class="absolute top-12 left-3 right-3 flex items-center justify-between text-white pointer-events-none z-20">
            <div class="flex items-center gap-2 bg-[#031B4E]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-md">
              <div class="w-6 h-6 rounded-full overflow-hidden border border-[#00BDE0] shrink-0">
                <img src="/images/coach_mahira_avatar.jpg" alt="Coach Mahira" class="w-full h-full object-cover"/>
              </div>
              <span class="text-xs font-bold">@mahira_244</span>
              <span class="px-1.5 py-0.2 rounded-md bg-[#00BDE0] text-[#031B4E] text-[10px] font-extrabold uppercase">Verified</span>
            </div>

            <!-- Active Quality / Sound pill -->
            <button 
              @click.stop="toggleMute"
              class="pointer-events-auto px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white hover:text-[#00BDE0] flex items-center gap-1.5"
            >
              <span v-if="isMuted">🔇 Tap for Sound</span>
              <span v-else class="text-[#00BDE0]">🔊 Sound On</span>
            </button>
          </div>

          <!-- Buffering Spinner -->
          <div v-if="isBuffering" class="absolute inset-0 flex items-center justify-center bg-black/40 z-20 pointer-events-none">
            <div class="w-12 h-12 border-4 border-[#00BDE0]/30 border-t-[#00BDE0] rounded-full animate-spin"></div>
          </div>

          <!-- Large Play Button Overlay when paused -->
          <div 
            v-if="!isPlaying && !isBuffering" 
            @click="togglePlay"
            class="absolute inset-0 flex items-center justify-center bg-black/35 cursor-pointer z-20"
          >
            <div class="w-16 h-16 rounded-full bg-[#00BDE0] text-[#031B4E] flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
              <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          <!-- Right Floating Quick Engagement Column -->
          <div class="absolute right-3 bottom-24 flex flex-col items-center gap-3.5 z-20 text-white">
            <!-- Like Button -->
            <button 
              @click.stop="toggleLike"
              class="flex flex-col items-center gap-1 group cursor-pointer"
              title="Like this Reel"
            >
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-125 shadow-md"
                :class="hasLiked ? 'bg-rose-600 text-white' : 'bg-black/60 hover:bg-black/80 text-white'"
              >
                <svg class="w-5 h-5" :fill="hasLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <span class="text-[11px] font-bold text-shadow">{{ currentLikes.toLocaleString() }}</span>
            </button>

            <!-- Instagram Comments -->
            <div class="flex flex-col items-center gap-1">
              <div class="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white backdrop-blur-md shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <span class="text-[11px] font-bold text-shadow">{{ reel.comments }}</span>
            </div>

            <!-- Share Button -->
            <button 
              @click.stop="shareReel"
              class="flex flex-col items-center gap-1 text-white hover:text-[#00BDE0] cursor-pointer"
              title="Share Reel"
            >
              <div class="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-md shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
              </div>
              <span class="text-[10px] font-bold text-shadow">Share</span>
            </button>
          </div>

          <!-- Bottom Full Cinema Control Bar -->
          <div class="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-black via-black/70 to-transparent z-20 space-y-2">
            
            <!-- Interactive Scrubber Bar -->
            <div 
              class="relative w-full h-2 bg-white/25 rounded-full cursor-pointer overflow-hidden group"
              @click="seekVideo"
            >
              <div 
                class="h-full bg-gradient-to-r from-[#00BDE0] to-cyan-300 rounded-full transition-all duration-100" 
                :style="{ width: progressPercent + '%' }"
              ></div>
            </div>

            <!-- Controls row: Play/Pause, Rewind, Forward, Time, Sound, Fullscreen -->
            <div class="flex items-center justify-between text-xs text-white">
              <div class="flex items-center gap-2.5">
                <!-- Play / Pause -->
                <button @click.stop="togglePlay" class="p-1 rounded-full hover:bg-white/20 text-[#00BDE0]">
                  <svg v-if="isPlaying" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                  <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>

                <!-- Skip Back 5s -->
                <button @click.stop="skipTime(-5)" class="p-1 hover:text-[#00BDE0]" title="Rewind 5s">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"/>
                  </svg>
                </button>

                <!-- Skip Forward 5s -->
                <button @click.stop="skipTime(5)" class="p-1 hover:text-[#00BDE0]" title="Forward 5s">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4zM19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z"/>
                  </svg>
                </button>

                <!-- Time Display -->
                <span class="text-[11px] font-mono text-slate-300">
                  {{ formatTime(currentTime) }} / {{ formatTime(totalDuration) }}
                </span>
              </div>

              <!-- Right Tools: Playback Speed, Fullscreen -->
              <div class="flex items-center gap-2">
                <button 
                  @click.stop="cycleSpeed" 
                  class="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] font-bold text-[#00BDE0]"
                  title="Playback Speed"
                >
                  {{ playbackRate }}x
                </button>

                <button 
                  @click.stop="toggleFullscreen" 
                  class="p-1 hover:text-[#00BDE0]"
                  title="Fullscreen"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>

        <!-- MODE B: Official Instagram In-App Reel Embed -->
        <div v-show="playerMode === 'instagram'" class="relative w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-2 min-h-[500px]">
          <div class="w-full h-full max-h-[560px] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
            <iframe 
              :src="reel.instagramEmbedUrl || 'https://www.instagram.com/reel/C-xyz123/embed'" 
              class="w-full h-full min-h-[500px] border-0 rounded-2xl" 
              allowtransparency="true" 
              allowfullscreen="true" 
              frameborder="0" 
              scrolling="no"
              loading="lazy"
            ></iframe>
          </div>
          
          <div class="p-2 text-center text-xs text-slate-300">
            <span>Powered by official Instagram Embed API for @mahira_244</span>
          </div>
        </div>

      </div>

      <!-- Right: Nutritional Breakdown, Coaching Guidance & Instant WhatsApp Booking -->
      <div class="md:w-1/2 flex flex-col justify-between p-6 sm:p-7 bg-[#031B4E] text-white overflow-y-auto max-h-[620px] border-t md:border-t-0 md:border-l border-slate-700/60">
        
        <div class="space-y-4">
          <!-- Profile Header matching S&D Marketing style -->
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-3.5">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-slate-900 border border-[#00BDE0]/40 p-1 shrink-0 flex items-center justify-center">
                <img 
                  src="/images/coach_mahira_avatar.jpg" 
                  alt="Coach Mahira" 
                  class="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <h4 class="font-bold text-sm text-white">Revitalize with Mahira</h4>
                  <svg class="w-4 h-4 text-[#00BDE0]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="text-[11px] text-[#00BDE0] font-semibold">@mahira_244 • Clinical Nutrition &amp; Dietetics</div>
              </div>
            </div>

            <a 
              :href="reel.instagramPostUrl || 'https://www.instagram.com/mahira_244/?hl=en'"
              target="_blank"
              class="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#00BDE0] hover:text-[#031B4E] text-xs font-bold transition-all flex items-center gap-1"
            >
              <span>Follow</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <!-- Reel Category & Title -->
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#ccf2f9] text-[#0A3366]">
                {{ reel.badge || 'Verified Nutrition' }}
              </span>
              <span class="text-xs text-slate-400">• {{ reel.postedAt }}</span>
            </div>
            <h3 class="text-lg font-extrabold text-white leading-snug">
              {{ reel.title }}
            </h3>
          </div>

          <!-- Video Metrics Badge Row -->
          <div class="grid grid-cols-3 gap-2 bg-[#0A3366]/60 p-3 rounded-2xl border border-white/10 text-center">
            <div>
              <div class="text-xs text-slate-300 font-semibold">Views</div>
              <div class="text-sm font-extrabold text-[#00BDE0]">{{ reel.views }}</div>
            </div>
            <div>
              <div class="text-xs text-slate-300 font-semibold">Likes</div>
              <div class="text-sm font-extrabold text-white">{{ currentLikes.toLocaleString() }}</div>
            </div>
            <div>
              <div class="text-xs text-slate-300 font-semibold">Duration</div>
              <div class="text-sm font-extrabold text-white">{{ reel.duration }}</div>
            </div>
          </div>

          <!-- Clinical Caption & Recipe Details -->
          <div class="space-y-3 text-xs text-slate-200 leading-relaxed max-h-48 overflow-y-auto pr-1">
            <p class="whitespace-pre-line">{{ reel.caption }}</p>
          </div>

          <!-- Hashtags -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span 
              v-for="tag in reel.tags" 
              :key="tag"
              class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-[#00BDE0]"
            >
              {{ tag }}
            </span>
          </div>

        </div>

        <!-- Consultation Action Direct Hook ("DM FIT" on WhatsApp) -->
        <div class="pt-5 border-t border-slate-700/80 mt-4 space-y-2.5">
          <a 
            :href="whatsappConsultationUrl"
            target="_blank"
            class="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>DM "FIT" For This Plan & Consultation</span>
          </a>

          <a 
            :href="reel.instagramPostUrl || 'https://www.instagram.com/mahira_244/?hl=en'" 
            target="_blank"
            class="w-full py-2.5 rounded-xl border border-slate-600 hover:border-[#00BDE0] text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Open Original Reel on Instagram (@mahira_244)</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  reel: Object
})

const emit = defineEmits(['close'])

const videoElement = ref(null)
const playerMode = ref('native') // 'native' | 'instagram'
const isPlaying = ref(false)
const isMuted = ref(true)
const isBuffering = ref(false)
const currentTime = ref(0)
const totalDuration = ref(45)
const progressPercent = ref(0)
const hasLiked = ref(false)
const currentLikes = ref(0)
const playbackRate = ref(1)
const currentVideoSourceIndex = ref(0)

// Resolved video source with fallback chain
const currentVideoSource = computed(() => {
  if (!props.reel) return ''
  const sources = [props.reel.videoUrl, ...(props.reel.fallbackVideoUrls || [])].filter(Boolean)
  return sources[currentVideoSourceIndex.value] || props.reel.videoUrl
})

watch(() => props.reel, (newVal) => {
  if (newVal) {
    currentLikes.value = newVal.likes
    hasLiked.value = false
    currentTime.value = 0
    progressPercent.value = 0
    currentVideoSourceIndex.value = 0
    playerMode.value = 'native'
    playbackRate.value = 1
    
    // Smoothly initialize video playback
    setTimeout(() => {
      startPlayback()
    }, 150)
  }
})

const startPlayback = () => {
  if (!videoElement.value) return
  videoElement.value.muted = isMuted.value
  videoElement.value.playbackRate = playbackRate.value
  
  const playPromise = videoElement.value.play()
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying.value = true
        isBuffering.value = false
      })
      .catch(() => {
        // Autoplay policy prevented playback, keep paused
        isPlaying.value = false
        isBuffering.value = false
      })
  }
}

const togglePlay = () => {
  if (!videoElement.value) return
  if (videoElement.value.paused) {
    videoElement.value.play()
    isPlaying.value = true
  } else {
    videoElement.value.pause()
    isPlaying.value = false
  }
}

const toggleMute = () => {
  if (!videoElement.value) return
  isMuted.value = !isMuted.value
  videoElement.value.muted = isMuted.value
}

const onTimeUpdate = () => {
  if (!videoElement.value) return
  currentTime.value = videoElement.value.currentTime
  if (videoElement.value.duration && !isNaN(videoElement.value.duration)) {
    totalDuration.value = videoElement.value.duration
    progressPercent.value = (currentTime.value / totalDuration.value) * 100
  }
}

const onEnded = () => {
  if (videoElement.value) {
    videoElement.value.currentTime = 0
    videoElement.value.play()
  }
}

const skipTime = (seconds) => {
  if (!videoElement.value) return
  videoElement.value.currentTime = Math.max(0, Math.min(totalDuration.value, videoElement.value.currentTime + seconds))
}

const seekVideo = (e) => {
  if (!videoElement.value || totalDuration.value <= 0) return
  const rect = e.currentTarget.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const ratio = Math.max(0, Math.min(1, clickX / rect.width))
  videoElement.value.currentTime = ratio * totalDuration.value
  progressPercent.value = ratio * 100
}

const cycleSpeed = () => {
  const speeds = [1, 1.25, 1.5, 2]
  const currentIndex = speeds.indexOf(playbackRate.value)
  const nextSpeed = speeds[(currentIndex + 1) % speeds.length]
  playbackRate.value = nextSpeed
  if (videoElement.value) {
    videoElement.value.playbackRate = nextSpeed
  }
}

const toggleFullscreen = () => {
  if (!videoElement.value) return
  if (!document.fullscreenElement) {
    if (videoElement.value.requestFullscreen) {
      videoElement.value.requestFullscreen()
    } else if (videoElement.value.webkitRequestFullscreen) {
      videoElement.value.webkitRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

// Auto fallback when a stream throws an error
const handleVideoError = () => {
  const sources = [props.reel?.videoUrl, ...(props.reel?.fallbackVideoUrls || [])].filter(Boolean)
  if (currentVideoSourceIndex.value < sources.length - 1) {
    currentVideoSourceIndex.value++
    setTimeout(() => {
      startPlayback()
    }, 200)
  } else {
    // If all native sources fail, switch smoothly to the official Instagram embed mode
    playerMode.value = 'instagram'
  }
}

const toggleLike = () => {
  if (hasLiked.value) {
    currentLikes.value -= 1
    hasLiked.value = false
  } else {
    currentLikes.value += 1
    hasLiked.value = true
  }
}

const shareReel = () => {
  const url = props.reel?.instagramPostUrl || window.location.href
  if (navigator.share) {
    navigator.share({
      title: props.reel?.title,
      text: `Check out this Reel by Coach Mahira (@mahira_244): ${props.reel?.title}`,
      url: url
    }).catch(() => {})
  } else {
    navigator.clipboard.writeText(url)
    alert('Reel link copied to clipboard!')
  }
}

const formatTime = (sec) => {
  if (!sec || isNaN(sec)) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

const whatsappConsultationUrl = computed(() => {
  const message = encodeURIComponent(`Hi Coach Mahira! I watched your video "${props.reel?.title}" and want to DM "FIT" to start my 30-day nutrition coaching program.`)
  return `https://wa.me/923137095454?text=${message}`
})

const close = () => {
  if (videoElement.value) {
    videoElement.value.pause()
  }
  emit('close')
}

// Keyboard shortcuts for video controls
const handleKeyDown = (e) => {
  if (!props.isOpen) return
  if (e.key === 'Escape') {
    close()
  } else if (e.key === ' ' || e.key === 'k') {
    e.preventDefault()
    togglePlay()
  } else if (e.key === 'm' || e.key === 'M') {
    toggleMute()
  } else if (e.key === 'f' || e.key === 'F') {
    toggleFullscreen()
  } else if (e.key === 'ArrowRight') {
    skipTime(5)
  } else if (e.key === 'ArrowLeft') {
    skipTime(-5)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.text-shadow {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.85);
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
