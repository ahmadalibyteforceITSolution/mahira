<template>
  <div 
    v-if="isOpen && reel" 
    class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
    @click.self="close"
  >
    <!-- Modal Container -->
    <div class="relative w-full max-w-4xl max-h-[92vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col md:flex-row">
      
      <!-- Close Button (Always clearly visible & accessible) -->
      <button 
        @click="close"
        class="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/70 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors shadow-lg"
        aria-label="Close modal"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Left: Authentic 9:16 Smartphone Vertical Reel Frame -->
      <div class="md:w-1/2 bg-black relative flex items-center justify-center overflow-hidden min-h-[360px] md:min-h-[580px]">
        
        <!-- Vertical 9:16 Frame -->
        <div class="relative w-full h-full aspect-[9/16] max-h-[85vh] flex items-center justify-center bg-black">
          
          <!-- Native Video or Animated Reel Media -->
          <video 
            ref="videoElement"
            :src="reel.videoUrl"
            :poster="reel.posterUrl"
            playsinline
            loop
            muted
            autoplay
            class="w-full h-full object-cover cursor-pointer"
            @click="togglePlay"
            @timeupdate="onTimeUpdate"
            @error="onVideoError"
          ></video>

          <!-- Top Reel Instagram Header Bar Over Video -->
          <div class="absolute top-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none z-10">
            <div class="flex items-center gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
              <div class="w-6 h-6 rounded-full overflow-hidden border border-white/60 shrink-0">
                <img src="/images/coach_mahira_avatar.jpg" alt="Mahira" class="w-full h-full object-cover"/>
              </div>
              <span class="text-xs font-bold">@mahira_244</span>
              <span class="px-1.5 py-0.2 rounded bg-rose-600 text-[10px] font-extrabold">REEL</span>
            </div>
          </div>

          <!-- Play/Pause Indicator on center -->
          <div 
            v-if="!isPlaying" 
            @click="togglePlay"
            class="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
          >
            <div class="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/60 text-white flex items-center justify-center shadow-xl">
              <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          <!-- Right Floating Engagement Column on Video (Like Instagram App) -->
          <div class="absolute right-3 bottom-16 flex flex-col items-center gap-4 z-10 text-white">
            <button 
              @click.stop="toggleLike"
              class="flex flex-col items-center gap-1 group"
            >
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-125"
                :class="hasLiked ? 'bg-rose-600 text-white' : 'bg-black/50 hover:bg-black/70 text-white'"
              >
                <svg class="w-5 h-5" :fill="hasLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <span class="text-[11px] font-bold text-shadow">{{ currentLikes.toLocaleString() }}</span>
            </button>

            <div class="flex flex-col items-center gap-1">
              <div class="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white backdrop-blur-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <span class="text-[11px] font-bold text-shadow">{{ reel.comments }}</span>
            </div>

            <a 
              :href="'https://www.instagram.com/mahira_244/?hl=en'" 
              target="_blank"
              class="flex flex-col items-center gap-1 text-white hover:text-gold-300"
              title="Open Reel on Instagram"
            >
              <div class="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
              </div>
              <span class="text-[10px] font-bold text-shadow">Share</span>
            </a>
          </div>

          <!-- Bottom Scrubber & Sound Control on Video -->
          <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 space-y-1.5">
            <div class="w-full bg-white/20 h-1 rounded-full overflow-hidden">
              <div class="bg-gold-400 h-full rounded-full" :style="{ width: progressPercent + '%' }"></div>
            </div>

            <div class="flex items-center justify-between text-xs text-white">
              <button @click.stop="toggleMute" class="hover:text-gold-300 flex items-center gap-1.5">
                <svg v-if="isMuted" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <svg v-else class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span class="text-[10px] font-bold">{{ isMuted ? 'Tap for Sound' : 'Sound On' }}</span>
              </button>

              <span class="text-[11px] text-neutral-300 font-semibold">{{ reel.views }} views</span>
            </div>
          </div>

        </div>

      </div>

      <!-- Right: Detailed Coaching Notes & Direct Consultation CTA -->
      <div class="md:w-1/2 flex flex-col justify-between p-6 sm:p-7 bg-neutral-900 text-white overflow-y-auto max-h-[580px] border-t md:border-t-0 md:border-l border-neutral-800">
        
        <div class="space-y-4">
          <!-- Profile Badge -->
          <div class="flex items-center justify-between border-b border-neutral-800 pb-3">
            <div class="flex items-center gap-3">
              <img 
                src="/images/coach_mahira_avatar.jpg" 
                alt="Coach Mahira" 
                class="w-11 h-11 rounded-full object-cover border-2 border-brand-500 shrink-0"
              />
              <div>
                <div class="flex items-center gap-1.5">
                  <h4 class="font-bold text-sm text-white">Revitalize with Maira</h4>
                  <svg class="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div class="text-xs text-brand-400 font-medium">@mahira_244 • Weight Management Coach</div>
              </div>
            </div>

            <a 
              href="https://www.instagram.com/mahira_244/?hl=en" 
              target="_blank"
              class="px-3.5 py-1 rounded-full bg-rose-600 hover:bg-rose-700 text-xs font-bold text-white transition-colors"
            >
              Follow
            </a>
          </div>

          <!-- Reel Title & Category -->
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-brand-800 text-gold-300 border border-brand-700/60">
                {{ reel.category }}
              </span>
              <span class="text-xs text-neutral-400">{{ reel.postedAt }}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-white leading-snug">
              {{ reel.title }}
            </h3>
          </div>

          <!-- Scrollable Caption & Coaching Notes -->
          <div class="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 text-xs sm:text-sm text-neutral-200 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-line">
            {{ reel.caption }}
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <span 
              v-for="tag in reel.tags" 
              :key="tag"
              class="text-[11px] text-brand-400 font-medium hover:underline cursor-pointer"
            >
              {{ tag }}
            </span>
          </div>

        </div>

        <!-- Consultation Action Direct Hook ("DM FIT") -->
        <div class="pt-5 border-t border-neutral-800 mt-4 space-y-2.5">
          <a 
            :href="whatsappConsultationUrl"
            target="_blank"
            class="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>DM "FIT" For This Meal Plan & Consultation</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>

          <a 
            :href="'https://www.instagram.com/mahira_244/?hl=en'" 
            target="_blank"
            class="w-full py-2.5 rounded-xl border border-neutral-700 hover:bg-neutral-800 text-neutral-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Watch Original Reel on Instagram (@mahira_244)</span>
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
import { ref, watch, computed } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  reel: Object
})

const emit = defineEmits(['close'])

const videoElement = ref(null)
const isPlaying = ref(true)
const isMuted = ref(true)
const currentTime = ref(0)
const progressPercent = ref(0)
const hasLiked = ref(false)
const currentLikes = ref(0)

watch(() => props.reel, (newVal) => {
  if (newVal) {
    currentLikes.value = newVal.likes
    hasLiked.value = false
    currentTime.value = 0
    progressPercent.value = 0
    isPlaying.value = true
    setTimeout(() => {
      if (videoElement.value) {
        videoElement.value.play().catch(() => {
          isPlaying.value = false
        })
      }
    }, 200)
  }
})

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
  videoElement.value.muted = !videoElement.value.muted
  isMuted.value = videoElement.value.muted
}

const onTimeUpdate = () => {
  if (!videoElement.value) return
  currentTime.value = videoElement.value.currentTime
  if (videoElement.value.duration > 0) {
    progressPercent.value = (currentTime.value / videoElement.value.duration) * 100
  }
}

const onVideoError = () => {
  isPlaying.value = false
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

const whatsappConsultationUrl = computed(() => {
  const message = encodeURIComponent(`Hi Coach Mahira! I watched your Reel "${props.reel?.title}" and want to DM "FIT" for a consultation.`)
  return `https://wa.me/?text=${message}`
})

const close = () => {
  if (videoElement.value) {
    videoElement.value.pause()
  }
  emit('close')
}
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
