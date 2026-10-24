<template>
  <section id="booking" class="py-20 md:py-28 bg-[#ecf5fb]/50 border-t border-slate-100 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="badge-cyan mb-3">
          <span>Direct Online Booking</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
          Schedule Your 1-on-1 <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">Consultation</span>
        </h2>
        <p class="text-[#566593] mt-2.5 text-base sm:text-lg">
          Take the first step towards healthy, non-restrictive fat loss. Select your preferred consultation type and time slot below.
        </p>
      </div>

      <!-- Main Booking Card matching S&D Marketing digital UI -->
      <div class="bg-white rounded-3xl shadow-[0_4px_25px_-2px_rgba(10,51,102,0.08)] border border-slate-200/80 overflow-hidden">
        
        <!-- Stepper Header -->
        <div class="bg-[#031B4E] text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#00BDE0] text-[#031B4E] font-extrabold flex items-center justify-center text-sm shadow-sm">
              {{ currentStep }}
            </div>
            <div>
              <div class="text-xs text-[#00BDE0] uppercase font-bold tracking-wider">Step {{ currentStep }} of 3</div>
              <h3 class="text-base font-extrabold text-white">{{ stepTitles[currentStep - 1] }}</h3>
            </div>
          </div>

          <div class="hidden sm:flex items-center gap-2">
            <span 
              v-for="s in 3" 
              :key="s" 
              class="w-8 h-1.5 rounded-full transition-all"
              :class="s <= currentStep ? 'bg-[#00BDE0]' : 'bg-white/20'"
            ></span>
          </div>
        </div>

        <form @submit.prevent="handleNextStep" class="p-6 sm:p-8 space-y-6">
          
          <!-- ================= STEP 1: CONSULTATION TYPE ================= -->
          <div v-if="currentStep === 1" class="space-y-4">
            <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">
              Choose Your Session
            </label>

            <div class="space-y-3">
              <div 
                v-for="service in serviceTypes" 
                :key="service.id"
                @click="bookingData.service = service"
                class="p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-4"
                :class="bookingData.service.id === service.id 
                  ? 'border-[#00BDE0] bg-[#ccf2f9]/30 ring-2 ring-[#00BDE0]/20' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'"
              >
                <div class="flex items-start gap-3">
                  <div 
                    class="w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 transition-colors"
                    :class="bookingData.service.id === service.id ? 'border-[#00BDE0] bg-[#00BDE0]' : 'border-slate-300'"
                  >
                    <div v-if="bookingData.service.id === service.id" class="w-2 h-2 rounded-full bg-[#031B4E]"></div>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <h4 class="font-extrabold text-sm sm:text-base text-[#031B4E]">{{ service.name }}</h4>
                      <span v-if="service.badge" class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#ccf2f9] text-[#0A3366]">
                        {{ service.badge }}
                      </span>
                    </div>
                    <p class="text-xs text-[#566593] mt-1 leading-relaxed">{{ service.description }}</p>
                    <div class="flex items-center gap-3 mt-2 text-xs font-bold text-[#00BDE0]">
                      <span>⏱️ {{ service.duration }}</span>
                      <span>•</span>
                      <span>📍 {{ service.mode }}</span>
                    </div>
                  </div>
                </div>

                <div class="text-right shrink-0">
                  <span class="text-lg font-extrabold text-[#031B4E]">{{ service.price }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ================= STEP 2: DATE & TIME SLOT ================= -->
          <div v-if="currentStep === 2" class="space-y-6">
            
            <!-- Date Picker Buttons -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">
                Select Date
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  type="button"
                  v-for="d in availableDates"
                  :key="d.fullDate"
                  @click="bookingData.selectedDate = d"
                  class="p-3 rounded-2xl border text-center transition-all cursor-pointer"
                  :class="bookingData.selectedDate.fullDate === d.fullDate 
                    ? 'border-[#031B4E] bg-[#031B4E] text-[#00BDE0] shadow-md font-bold' 
                    : 'border-slate-200 hover:border-slate-300 bg-white text-[#566593]'"
                >
                  <div class="text-[11px] font-semibold uppercase opacity-80">{{ d.dayName }}</div>
                  <div class="text-base font-extrabold my-0.5">{{ d.dateString }}</div>
                  <div class="text-[10px] opacity-75">{{ d.slotsLeft }} slots left</div>
                </button>
              </div>
            </div>

            <!-- Time Slots -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">
                Available Time Slot (Based on Consultation Desk Hours)
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  v-for="slot in timeSlots"
                  :key="slot"
                  @click="bookingData.selectedTime = slot"
                  class="p-3.5 rounded-xl border text-left text-xs font-bold flex items-center justify-between transition-all cursor-pointer"
                  :class="bookingData.selectedTime === slot 
                    ? 'border-[#00BDE0] bg-[#ccf2f9]/50 text-[#0A3366] ring-2 ring-[#00BDE0]/20' 
                    : 'border-slate-200 hover:border-slate-300 bg-white text-[#566593]'"
                >
                  <span>{{ slot }}</span>
                  <span v-if="bookingData.selectedTime === slot" class="text-[#00BDE0] font-extrabold">✓ Selected</span>
                </button>
              </div>
            </div>

            <!-- Video Meeting Preference -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">
                Preferred Consultation Medium
              </label>
              <div class="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  @click="bookingData.platform = 'Zoom Meeting'"
                  class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer"
                  :class="bookingData.platform === 'Zoom Meeting' 
                    ? 'bg-[#031B4E] text-[#00BDE0] border-[#031B4E]' 
                    : 'bg-[#ecf5fb] border-slate-200 text-[#566593] hover:bg-slate-100'"
                >
                  Zoom Video
                </button>
                <button
                  type="button"
                  @click="bookingData.platform = 'WhatsApp Video'"
                  class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer"
                  :class="bookingData.platform === 'WhatsApp Video' 
                    ? 'bg-[#031B4E] text-[#00BDE0] border-[#031B4E]' 
                    : 'bg-[#ecf5fb] border-slate-200 text-[#566593] hover:bg-slate-100'"
                >
                  WhatsApp Video
                </button>
                <button
                  type="button"
                  @click="bookingData.platform = 'Google Meet'"
                  class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer"
                  :class="bookingData.platform === 'Google Meet' 
                    ? 'bg-[#031B4E] text-[#00BDE0] border-[#031B4E]' 
                    : 'bg-[#ecf5fb] border-slate-200 text-[#566593] hover:bg-slate-100'"
                >
                  Google Meet
                </button>
              </div>
            </div>

          </div>

          <!-- ================= STEP 3: CLIENT DETAILS & INTAKE ================= -->
          <div v-if="currentStep === 3" class="space-y-4">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1">Your Full Name *</label>
                <input 
                  type="text" 
                  required 
                  v-model="bookingData.name"
                  placeholder="e.g. Sarah Jenkins"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-sm font-semibold outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  v-model="bookingData.email"
                  placeholder="sarah@example.com"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-sm font-semibold outline-none"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1">WhatsApp / Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  v-model="bookingData.phone"
                  placeholder="+92 300 0000000"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-sm font-semibold outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1">Dietary Preference</label>
                <select 
                  v-model="bookingData.dietStyle"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-sm font-semibold bg-white outline-none"
                >
                  <option value="Non-Vegetarian">Non-Vegetarian (Chicken, Fish, Eggs)</option>
                  <option value="Vegetarian">Pure Vegetarian</option>
                  <option value="Halal">Halal Certified Only</option>
                  <option value="Vegan">Vegan (Plant-Based)</option>
                  <option value="Eggetarian">Eggetarian</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-1">Primary Health Goal or Concern</label>
              <textarea 
                rows="3" 
                v-model="bookingData.healthNotes"
                placeholder="Tell Coach Mahira about your target weight, any PCOS/thyroid history, or specific challenges..."
                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 text-sm font-semibold outline-none"
              ></textarea>
            </div>

            <!-- Booking Summary Review Card -->
            <div class="p-4 rounded-2xl bg-[#ecf5fb] border border-slate-200 text-xs space-y-1.5">
              <div class="font-bold text-[#031B4E]">Appointment Summary:</div>
              <div class="text-[#566593]">
                <span class="font-extrabold text-[#031B4E]">{{ bookingData.service.name }}</span> • 
                <span>{{ bookingData.selectedDate.dayName }}, {{ bookingData.selectedDate.dateString }}</span> at 
                <span class="font-extrabold text-[#00BDE0]">{{ bookingData.selectedTime }}</span> via 
                <span class="font-semibold">{{ bookingData.platform }}</span>
              </div>
            </div>

          </div>

          <!-- Stepper Buttons -->
          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <button 
              type="button" 
              v-if="currentStep > 1" 
              @click="currentStep--"
              class="px-5 py-2.5 rounded-xl border border-slate-200 text-[#566593] hover:text-[#031B4E] hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
            >
              Back
            </button>
            <div v-else></div>

            <button 
              type="submit" 
              class="btn btn-primary px-8 py-3 text-xs sm:text-sm font-bold shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <span>{{ currentStep === 3 ? 'Confirm & Book Appointment' : 'Continue' }}</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>

        </form>

      </div>

      <!-- ================= CONFIRMATION MODAL ================= -->
      <div 
        v-if="isConfirmed" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031B4E]/85 backdrop-blur-md"
      >
        <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-center space-y-6 border border-slate-200 animate-fade-in">
          
          <div class="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
            <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>

          <div>
            <span class="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-[#ccf2f9] text-[#0A3366]">
              Booking Confirmed • Ref: {{ bookingRef }}
            </span>
            <h3 class="text-2xl font-extrabold text-[#031B4E] mt-2">
              You're Booked with Coach Mahira!
            </h3>
            <p class="text-xs sm:text-sm text-[#566593] mt-1.5">
              A calendar invite and preparation checklist has been scheduled for <strong>{{ bookingData.email }}</strong>.
            </p>
          </div>

          <!-- Details Card -->
          <div class="p-4 rounded-2xl bg-[#ecf5fb] border border-slate-200 text-left text-xs space-y-2">
            <div class="flex justify-between">
              <span class="text-slate-400">Service:</span>
              <span class="font-bold text-[#031B4E]">{{ bookingData.service.name }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Scheduled Time:</span>
              <span class="font-extrabold text-[#00BDE0]">{{ bookingData.selectedDate.dayName }}, {{ bookingData.selectedTime }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Platform:</span>
              <span class="font-bold text-[#031B4E]">{{ bookingData.platform }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Client:</span>
              <span class="font-bold text-[#031B4E]">{{ bookingData.name }} ({{ bookingData.dietStyle }})</span>
            </div>
          </div>

          <!-- Actions: WhatsApp & Direct Email to mairasaleem475@gmail.com -->
          <div class="space-y-2.5">
            <a 
              :href="whatsappDirectConfirmationUrl"
              target="_blank"
              class="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
            >
              <span>Instant WhatsApp Slot Confirmation (DM "FIT")</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>

            <a 
              :href="emailDirectConfirmationUrl"
              class="w-full py-3 px-4 rounded-xl bg-[#031B4E] hover:bg-[#0A3366] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <svg class="w-4 h-4 text-[#00BDE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>Email Query to mairasaleem475@gmail.com</span>
            </a>

            <p class="text-[11px] text-slate-400">
              Helpline: <strong>0313-7095454</strong> • Direct Desk: <strong>mairasaleem475@gmail.com</strong>
            </p>

            <button 
              @click="resetBooking"
              class="w-full py-2.5 text-xs text-[#566593] hover:text-[#031B4E] font-bold cursor-pointer"
            >
              Done &amp; Return to Homepage
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { timeSlots } from '../data/workingHours'
import confetti from 'canvas-confetti'
import { trackMetaLead, trackMetaSchedule } from '../services/analyticsService'

const currentStep = ref(1)
const isConfirmed = ref(false)
const bookingRef = ref('MH-' + Math.floor(10000 + Math.random() * 90000))

const stepTitles = [
  'Select Consultation Program',
  'Choose Preferred Date & Time',
  'Client Details & Dietary Intake'
]

const serviceTypes = [
  {
    id: 'free-discovery',
    name: 'Free 15-Min Discovery & Goal Strategy Call',
    description: 'Quick evaluation of your current metabolic obstacles, target weight goals, and suitability for the 30-day reset.',
    duration: '15 Minutes',
    mode: 'Video / Call',
    price: 'Free',
    badge: 'Popular for New Clients'
  },
  {
    id: 'deep-assessment',
    name: 'Comprehensive 1-on-1 Clinical Assessment',
    description: 'In-depth nutritional analysis, blood panel review, gut health intake, and custom metabolic roadmap creation.',
    duration: '45 Minutes',
    mode: 'Zoom Consultation',
    price: '$65',
    badge: 'Detailed Intake'
  },
  {
    id: '30-day-onboarding',
    name: '30-Day Revitalize Reset (Direct Enrolment)',
    description: 'Instant enrollment in the 30-day non-restrictive fat loss program with full macro roadmap & daily WhatsApp accountability.',
    duration: '30 Days Complete Coaching',
    mode: 'Full Protocol',
    price: '$149',
    badge: 'Signature Program'
  }
]

// Generate upcoming 7 dates
const generateAvailableDates = () => {
  const dates = []
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  for (let i = 1; i <= 7; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    dates.push({
      fullDate: d.toISOString().split('T')[0],
      dayName: days[d.getDay()],
      dateString: `${months[d.getMonth()]} ${d.getDate()}`,
      slotsLeft: Math.floor(Math.random() * 4) + 2
    })
  }
  return dates
}

const availableDates = ref(generateAvailableDates())

const bookingData = reactive({
  service: serviceTypes[0],
  selectedDate: availableDates.value[0],
  selectedTime: timeSlots[0],
  platform: 'Zoom Meeting',
  name: '',
  email: '',
  phone: '',
  dietStyle: 'Non-Vegetarian',
  healthNotes: ''
})

const handleNextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  } else {
    isConfirmed.value = true

    trackMetaLead({
      service: bookingData.service.name,
      email: bookingData.email,
      phone: bookingData.phone
    })

    trackMetaSchedule({
      service: bookingData.service.name,
      date: `${bookingData.selectedDate.dayName}, ${bookingData.selectedDate.dateString}`,
      time: bookingData.selectedTime
    })

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }
}

const resetBooking = () => {
  isConfirmed.value = false
  currentStep.value = 1
  bookingRef.value = 'MH-' + Math.floor(10000 + Math.random() * 90000)
}

const whatsappDirectConfirmationUrl = computed(() => {
  const text = `Hi Coach Mahira! I just booked my appointment (Ref: ${bookingRef.value}) for ${bookingData.selectedDate.dayName}, ${bookingData.selectedDate.dateString} at ${bookingData.selectedTime}. My goal is: FIT! Please confirm my slot.`
  return `https://wa.me/923137095454?text=${encodeURIComponent(text)}`
})

const emailDirectConfirmationUrl = computed(() => {
  const subject = encodeURIComponent(`[New Consultation Request] Ref: ${bookingRef.value} - ${bookingData.name}`)
  const body = encodeURIComponent(`Dear Coach Mahira,

I have scheduled a consultation on your website. Here are my details:

Reference Code: ${bookingRef.value}
Client Name: ${bookingData.name}
Email: ${bookingData.email}
WhatsApp/Phone: ${bookingData.phone}
Program: ${bookingData.service.name}
Scheduled Date & Time: ${bookingData.selectedDate.dayName}, ${bookingData.selectedDate.dateString} at ${bookingData.selectedTime}
Platform: ${bookingData.platform}
Dietary Style: ${bookingData.dietStyle}
Health Notes/Goal: ${bookingData.healthNotes || 'N/A'}

Please confirm my appointment.
Best regards,
${bookingData.name}`)
  return `mailto:mairasaleem475@gmail.com?subject=${subject}&body=${body}`
})

onMounted(() => {
  window.addEventListener('selected-program-event', (e) => {
    const progName = e.detail
    const found = serviceTypes.find(s => s.name.includes(progName) || progName.includes(s.name))
    if (found) {
      bookingData.service = found
    }
    const el = document.getElementById('booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  })
})
</script>
