<template>
  <section id="hours" class="py-20 md:py-28 bg-white border-t border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Details & Live Status (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div>
            <div class="badge-cyan mb-3">
              <span class="w-2 h-2 rounded-full" :class="clinicStatus.isOpen ? 'bg-emerald-500 live-pulse' : 'bg-amber-500'"></span>
              <span>{{ clinicStatus.label }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] leading-tight">
              Clinic Working Hours &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">Availability</span>
            </h2>
          </div>

          <p class="text-[#566593] text-base leading-relaxed">
            Coach Mahira provides private clinical consultations globally. Whether you are in Dubai, London, New York, or Lahore, sessions are scheduled to accommodate your exact local timezone.
          </p>

          <!-- Contact & Global Highlights matching S&D Marketing style -->
          <div class="space-y-3 pt-1">
            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ecf5fb] border border-slate-200/80 text-xs sm:text-sm">
              <div class="w-9 h-9 rounded-xl bg-[#031B4E] text-[#00BDE0] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span class="font-bold text-[#031B4E] block">Global Video Consultations</span>
                <span class="text-[#566593] text-xs">Conducted via high-definition Zoom &amp; WhatsApp Video</span>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ecf5fb] border border-slate-200/80 text-xs sm:text-sm">
              <div class="w-9 h-9 rounded-xl bg-[#031B4E] text-[#00BDE0] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span class="font-bold text-[#031B4E] block">Rapid Client Response Guarantee</span>
                <span class="text-[#566593] text-xs">WhatsApp responses within 2 to 4 hours during desk hours</span>
              </div>
            </div>

            <div class="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <span class="font-bold text-[#031B4E] block">Direct Clinic Helpline</span>
                  <a href="tel:+923137095454" class="text-emerald-700 font-bold hover:underline">0313-7095454 (+92 313 7095454)</a>
                </div>
              </div>
              <a 
                href="https://wa.me/923137095454?text=FIT" 
                target="_blank"
                class="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shrink-0 shadow-xs"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div class="pt-2">
            <a 
              href="#booking"
              class="btn btn-primary px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md rounded-xl flex items-center gap-2 group cursor-pointer"
            >
              <span>Book An Open Slot Online</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Schedule Table (7 cols) -->
        <div class="lg:col-span-7 bg-[#ecf5fb]/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(10,51,102,0.06)]">
          <div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
            <div>
              <h3 class="text-lg font-extrabold text-[#031B4E]">Weekly Clinic Roster</h3>
              <p class="text-xs text-[#566593]">Pakistan Standard Time (PKT / GMT+5)</p>
            </div>
            <span class="text-xs font-bold text-[#00BDE0]">100% Online Working (Worldwide)</span>
          </div>

          <div class="divide-y divide-slate-200/80">
            <div 
              v-for="day in weeklySchedule" 
              :key="day.day"
              class="py-3.5 flex items-center justify-between text-xs sm:text-sm transition-colors rounded-xl px-2"
              :class="day.isToday ? 'bg-[#031B4E] text-white shadow-sm font-bold' : 'text-[#566593]'"
            >
              <div class="flex items-center gap-3">
                <span class="w-20 font-bold" :class="day.isToday ? 'text-[#00BDE0]' : 'text-[#031B4E]'">
                  {{ day.day }}
                </span>
                <span v-if="day.isToday" class="px-2 py-0.5 rounded-full bg-[#00BDE0] text-[#031B4E] text-[10px] font-extrabold uppercase">
                  Today
                </span>
              </div>

              <div class="flex items-center gap-4">
                <span :class="day.isOpen ? (day.isToday ? 'text-white' : 'text-[#031B4E] font-semibold') : 'text-slate-400 italic'">
                  {{ day.hours }}
                </span>
                <span 
                  class="w-2.5 h-2.5 rounded-full shrink-0" 
                  :class="day.isOpen ? 'bg-emerald-400' : 'bg-slate-300'"
                ></span>
              </div>
            </div>
          </div>

          <div class="mt-6 p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between text-xs text-[#566593]">
            <span>Need an urgent after-hours or weekend emergency slot?</span>
            <a href="https://wa.me/923137095454?text=EMERGENCY" target="_blank" class="text-[#00BDE0] font-bold hover:underline">
              Request VIP Slot →
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { clinicSchedule, isClinicCurrentlyOpen } from '../data/workingHours'

const clinicStatus = computed(() => {
  return isClinicCurrentlyOpen()
})

const weeklySchedule = computed(() => {
  const todayIndex = new Date().getDay()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const todayName = days[todayIndex]

  return clinicSchedule.map(item => ({
    ...item,
    isToday: item.day === todayName
  }))
})
</script>
