<template>
  <div class="min-h-screen flex flex-col bg-cream text-neutral-900 font-sans selection:bg-brand-600 selection:text-white">
    <!-- Sticky Luxury Navigation -->
    <Navbar />

    <!-- Main Content Area -->
    <main class="flex-grow">
      <!-- 1. Hero Section -->
      <HeroSection />

      <!-- 2. Real-Time Instagram Feed & Video Reels -->
      <InstagramReelsSection />

      <!-- 3. About Coach Mahira -->
      <AboutSection />

      <!-- 4. Interactive BMI, BMR & Macro Calculator -->
      <BmiCalculator />

      <!-- 5. Nutrition & Weight Management Programs -->
      <ProgramsSection />

      <!-- 6. Client Transformations & Case Studies -->
      <TransformationsSection />

      <!-- 7. High-Protein Recipes (Mahira's Kitchen) -->
      <RecipesSection />

      <!-- 8. Working Hours & Clinic Availability -->
      <WorkingHoursSection />

      <!-- 9. Interactive Appointment Booking Flow -->
      <AppointmentSchedule />

      <!-- 10. Frequently Asked Questions -->
      <FaqSection />

      <!-- 11. Clinical Knowledge & Blog Guides (50 Comprehensive Articles) -->
      <BlogSection />

      <!-- 12. SEO Keywords & Clinical Topics Hub (500+ Ranked Search Topics) -->
      <SeoKeywordsHub />
    </main>

    <!-- Luxury Brand Footer -->
    <ContactFooter />

    <!-- Floating WhatsApp & Instagram Action -->
    <FloatingWhatsApp />

    <!-- PWA Install App Prompt on Phone & Desktop -->
    <InstallAppBanner />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import InstagramReelsSection from './components/InstagramReelsSection.vue'
import AboutSection from './components/AboutSection.vue'
import BmiCalculator from './components/BmiCalculator.vue'
import ProgramsSection from './components/ProgramsSection.vue'
import TransformationsSection from './components/TransformationsSection.vue'
import RecipesSection from './components/RecipesSection.vue'
import WorkingHoursSection from './components/WorkingHoursSection.vue'
import AppointmentSchedule from './components/AppointmentSchedule.vue'
import FaqSection from './components/FaqSection.vue'
import BlogSection from './components/BlogSection.vue'
import SeoKeywordsHub from './components/SeoKeywordsHub.vue'
import ContactFooter from './components/ContactFooter.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'
import InstallAppBanner from './components/InstallAppBanner.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const path = window.location.pathname.replace(/\/$/, '')
  const pathToHash = {
    '/about': '#about',
    '/30-day-weight-loss': '#programs',
    '/pcos-diet-plan': '#programs',
    '/macro-calculator': '#calculator',
    '/client-transformations': '#transformations',
    '/high-protein-recipes': '#recipes',
    '/clinic-hours': '#hours',
    '/consultation-booking': '#booking',
    '/faq': '#faq',
    '/blog': '#blog'
  }

  const hash = pathToHash[path]
  if (hash) {
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 200)
  }
})
</script>
