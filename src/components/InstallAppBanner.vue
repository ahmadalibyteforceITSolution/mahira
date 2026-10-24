<template>
  <div>
    <!-- Floating Install Banner for Mobile & Desktop styled with S&D Marketing digital aesthetics -->
    <transition name="slide-up">
      <div 
        v-if="showBanner && !isInstalled"
        class="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#031B4E]/95 backdrop-blur-md text-white p-4 rounded-3xl shadow-2xl border border-[#00BDE0]/40 animate-fade-in"
      >
        <div class="flex items-center gap-3.5">
          <img 
            src="/images/coach_mahira_avatar.jpg" 
            alt="Coach Mahira App Icon" 
            class="w-12 h-12 rounded-2xl object-cover border-2 border-[#00BDE0] shadow-md shrink-0"
          />
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <h4 class="font-extrabold text-sm text-white truncate">Revitalize with Mahira</h4>
              <span class="px-1.5 py-0.2 rounded-full bg-[#00BDE0] text-[#031B4E] text-[9px] font-bold">App</span>
            </div>
            <p class="text-xs text-slate-300 truncate">
              Install app on phone for instant diet plans &amp; guides
            </p>
          </div>
          <button 
            @click="dismissBanner" 
            class="text-slate-400 hover:text-white p-1 rounded-full text-xs cursor-pointer"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>

        <div class="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
          <!-- Android / Chrome / Edge Native 1-Tap Install -->
          <button 
            v-if="canInstallNative"
            @click="triggerNativeInstall"
            class="flex-1 py-2 rounded-xl bg-[#00BDE0] hover:bg-[#00a1be] text-[#031B4E] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            <span>Install App on Phone</span>
          </button>

          <!-- iOS Safari Instructions Trigger -->
          <button 
            v-else-if="isIos"
            @click="showIosModal = true"
            class="flex-1 py-2 rounded-xl bg-[#00BDE0] hover:bg-[#00a1be] text-[#031B4E] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>📱 How to Install on iPhone</span>
          </button>

          <!-- Generic Install Helper -->
          <button 
            v-else
            @click="showGenericModal = true"
            class="flex-1 py-2 rounded-xl bg-[#00BDE0] hover:bg-[#00a1be] text-[#031B4E] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Add to Home Screen</span>
          </button>

          <button 
            @click="dismissBanner"
            class="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </transition>

    <!-- iOS Safari Walkthrough Modal -->
    <Teleport to="body">
      <div 
        v-if="showIosModal" 
        class="fixed inset-0 z-50 bg-[#031B4E]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        @click.self="showIosModal = false"
      >
        <div class="bg-white max-w-sm w-full rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-[#031B4E] space-y-4">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 class="font-extrabold text-base text-[#031B4E]">Install App on iPhone / iPad</h3>
            <button @click="showIosModal = false" class="text-slate-400 hover:text-slate-700">✕</button>
          </div>

          <div class="space-y-3 text-xs sm:text-sm text-[#566593]">
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-[#ccf2f9] text-[#0A3366] font-bold flex items-center justify-center text-xs shrink-0">1</span>
              <p>In Safari, tap the <strong>Share</strong> icon (the square with an arrow pointing up at the bottom).</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-[#ccf2f9] text-[#0A3366] font-bold flex items-center justify-center text-xs shrink-0">2</span>
              <p>Scroll down and select <strong>"Add to Home Screen"</strong>.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-[#ccf2f9] text-[#0A3366] font-bold flex items-center justify-center text-xs shrink-0">3</span>
              <p>Tap <strong>"Add"</strong> in the top-right corner to finish installing.</p>
            </div>
          </div>

          <button 
            @click="showIosModal = false"
            class="w-full btn btn-primary py-2.5 rounded-xl font-bold text-xs"
          >
            Got It!
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const isInstalled = ref(false)
const canInstallNative = ref(false)
const isIos = ref(false)
const showIosModal = ref(false)
const showGenericModal = ref(false)
let deferredPrompt = null

onMounted(() => {
  // Check if iOS
  const userAgent = window.navigator.userAgent.toLowerCase()
  isIos.value = /iphone|ipad|ipod/.test(userAgent)

  // Check if already in standalone display mode
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    isInstalled.value = true
    return
  }

  // Listen for native install prompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    canInstallNative.value = true
    showBanner.value = true
  })

  // Show banner after 3 seconds if not dismissed previously
  const dismissed = sessionStorage.getItem('pwa_banner_dismissed')
  if (!dismissed) {
    setTimeout(() => {
      showBanner.value = true
    }, 3000)
  }
})

const triggerNativeInstall = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      isInstalled.value = true
      showBanner.value = false
    }
    deferredPrompt = null
  }
}

const dismissBanner = () => {
  showBanner.value = false
  sessionStorage.setItem('pwa_banner_dismissed', 'true')
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
