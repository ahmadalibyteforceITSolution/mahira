<template>
  <div>
    <!-- Top / Floating Install Banner for Mobile & Desktop -->
    <transition name="slide-up">
      <div 
        v-if="showBanner && !isInstalled"
        class="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-brand-950/95 backdrop-blur-md text-white p-4 rounded-3xl shadow-2xl border border-gold-400/40 animate-fade-in"
      >
        <div class="flex items-center gap-3.5">
          <img 
            src="/images/coach_mahira_avatar.jpg" 
            alt="Coach Mahira App Icon" 
            class="w-12 h-12 rounded-2xl object-cover border-2 border-gold-400 shadow-md shrink-0"
          />
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <h4 class="font-serif font-bold text-sm text-white truncate">Revitalize with Mahira</h4>
              <span class="px-1.5 py-0.2 rounded-full bg-gold-400 text-brand-950 text-[9px] font-bold">App</span>
            </div>
            <p class="text-xs text-neutral-300 truncate">
              Install app on phone for instant diet plans &amp; guides
            </p>
          </div>
          <button 
            @click="dismissBanner" 
            class="text-neutral-400 hover:text-white p-1 rounded-full text-xs"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>

        <div class="mt-3 pt-3 border-t border-brand-800/80 flex items-center gap-2">
          <!-- Android / Chrome / Edge Native 1-Tap Install -->
          <button 
            v-if="canInstallNative"
            @click="triggerNativeInstall"
            class="flex-1 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-brand-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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
            class="flex-1 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-brand-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>📱 How to Install on iPhone</span>
          </button>

          <!-- Generic Install Helper -->
          <button 
            v-else
            @click="showGenericModal = true"
            class="flex-1 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-brand-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Add to Home Screen</span>
          </button>

          <button 
            @click="dismissBanner"
            class="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-semibold transition-colors"
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
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        @click.self="showIosModal = false"
      >
        <div class="bg-cream max-w-sm w-full rounded-3xl p-6 shadow-2xl border border-brand-200 text-neutral-900 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <img src="/images/coach_mahira_avatar.jpg" alt="Coach Mahira" class="w-10 h-10 rounded-xl object-cover border border-gold-500" />
              <div>
                <h3 class="font-serif font-bold text-base text-neutral-900">Install on iPhone / iPad</h3>
                <p class="text-[11px] text-neutral-500">2 easy steps in Safari browser</p>
              </div>
            </div>
            <button @click="showIosModal = false" class="text-neutral-400 hover:text-neutral-700 text-lg">✕</button>
          </div>

          <div class="space-y-3 text-xs sm:text-sm text-neutral-700 pt-2">
            <div class="flex items-start gap-3 bg-white p-3 rounded-2xl border border-neutral-200 shadow-xs">
              <div class="w-7 h-7 rounded-full bg-brand-100 text-brand-900 font-bold flex items-center justify-center shrink-0">1</div>
              <div>
                <p class="font-semibold text-neutral-900">Tap the Share icon at the bottom of Safari:</p>
                <div class="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 font-mono text-xs">
                  <span>Share icon:</span>
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  <span>(Square with arrow up)</span>
                </div>
              </div>
            </div>

            <div class="flex items-start gap-3 bg-white p-3 rounded-2xl border border-neutral-200 shadow-xs">
              <div class="w-7 h-7 rounded-full bg-brand-100 text-brand-900 font-bold flex items-center justify-center shrink-0">2</div>
              <div>
                <p class="font-semibold text-neutral-900">Scroll down and tap:</p>
                <span class="inline-block mt-1 font-bold text-brand-800 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                  ➕ Add to Home Screen
                </span>
              </div>
            </div>
          </div>

          <button 
            @click="showIosModal = false"
            class="w-full py-2.5 rounded-xl bg-brand-800 text-white font-bold text-xs"
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
const canInstallNative = ref(false)
const isIos = ref(false)
const isInstalled = ref(false)
const showIosModal = ref(false)
const showGenericModal = ref(false)

onMounted(() => {
  // Check if running as standalone PWA
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    isInstalled.value = true
    return
  }

  // Detect iOS
  const userAgent = window.navigator.userAgent.toLowerCase()
  isIos.value = /iphone|ipad|ipod/.test(userAgent)

  // Check if native prompt is ready
  if (window.deferredPwaPrompt) {
    canInstallNative.value = true
  }

  window.addEventListener('pwa-installable', () => {
    canInstallNative.value = true
  })

  // Show banner if not dismissed in the last 24 hours
  const dismissedTime = localStorage.getItem('mahira_pwa_dismissed')
  if (!dismissedTime || (Date.now() - parseInt(dismissedTime, 10)) > 24 * 60 * 60 * 1000) {
    setTimeout(() => {
      showBanner.value = true
    }, 2000)
  }
})

function triggerNativeInstall() {
  const promptEvent = window.deferredPwaPrompt
  if (promptEvent) {
    promptEvent.prompt()
    promptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showBanner.value = false
        isInstalled.value = true
      }
      window.deferredPwaPrompt = null
      canInstallNative.value = false
    })
  }
}

function dismissBanner() {
  showBanner.value = false
  localStorage.setItem('mahira_pwa_dismissed', Date.now().toString())
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
