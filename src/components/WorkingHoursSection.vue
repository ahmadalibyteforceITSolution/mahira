<template>
  <section id="hours" class="py-20 md:py-28 bg-white border-t border-brand-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Details & Live Status (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-xs">
              <span class="w-2.5 h-2.5 rounded-full" :class="clinicStatus.isOpen ? 'bg-emerald-500 live-pulse' : 'bg-amber-500'"></span>
              <span>{{ clinicStatus.label }}</span>
            </div>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Working Hours & Availability
            </h2>
          </div>

          <p class="text-neutral-600 text-base leading-relaxed">
            Coach Mahira provides private clinical consultations globally. Whether you are in Dubai, London, New York, or Mumbai, sessions are scheduled to accommodate your exact local timezone.
          </p>

          <!-- Contact & Global Highlights -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100 text-xs sm:text-sm">
              <div class="w-9 h-9 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span class="font-bold text-neutral-900 block">Global Video Consultations</span>
                <span class="text-neutral-500 text-xs">Conducted via high-definition Zoom & Google Meet</span>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100 text-xs sm:text-sm">
              <div class="w-9 h-9 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span class="font-bold text-neutral-900 block">Rapid Client Response Guarantee</span>
                <span class="text-neutral-500 text-xs">WhatsApp responses within 2 to 4 hours during desk hours</span>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <a 
              href="#booking"
              class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Book An Open Slot Online</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Timetable Card (7 cols) -->
        <div class="lg:col-span-7 bg-cream rounded-3xl p-6 sm:p-8 border border-brand-200/80 shadow-luxury">
          <div class="flex items-center justify-between pb-4 border-b border-brand-100 mb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-neutral-500">Day of the Week</span>
            <span class="text-xs font-bold uppercase tracking-wider text-neutral-500">Consultation Desk Hours</span>
          </div>

          <div class="space-y-2.5">
            <div 
              v-for="item in clinicSchedule" 
              :key="item.day"
              class="flex items-center justify-between p-3.5 rounded-2xl transition-colors"
              :class="isToday(item.day) ? 'bg-brand-800 text-white shadow-md' : 'bg-white/80 hover:bg-white text-neutral-800 border border-brand-100/50'"
            >
              <div class="flex items-center gap-2.5">
                <span class="w-2 h-2 rounded-full" :class="isToday(item.day) ? 'bg-gold-400' : 'bg-brand-400'"></span>
                <span class="font-bold text-sm">{{ item.day }}</span>
                <span v-if="isToday(item.day)" class="px-2 py-0.5 rounded-full bg-gold-400 text-brand-950 text-[10px] font-bold uppercase">
                  Today
                </span>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-xs sm:text-sm font-semibold" :class="isToday(item.day) ? 'text-gold-200' : 'text-neutral-700'">
                  {{ item.hours }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6 p-4 rounded-2xl bg-white border border-brand-100 flex items-center justify-between text-xs text-neutral-600">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <span>Instant consultation confirmations delivered to your Email & WhatsApp</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { clinicSchedule, getClinicStatus } from '../data/workingHours'

const clinicStatus = computed(() => getClinicStatus())

const isToday = (dayName) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const todayIndex = new Date().getDay()
  return days[todayIndex] === dayName
}
</script>
