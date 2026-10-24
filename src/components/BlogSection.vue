<template>
  <section id="blog" class="py-20 md:py-28 bg-[#ecf5fb]/40 border-t border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <div class="badge-cyan mb-3">
            <span>Clinical Knowledge &amp; Fat Loss Guides</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031B4E] tracking-tight leading-tight">
            Nutrition &amp; Weight Loss <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDE0] to-[#0A3366]">Articles</span>
          </h2>
          <p class="text-[#566593] mt-2.5 max-w-2xl text-base sm:text-lg">
            Explore 50+ evidence-based clinical guides on sustainable fat loss, PCOS reversal, desi meal planning with roti &amp; rice, and hormonal metabolism.
          </p>
        </div>

        <!-- Quick Stats & Direct Consultation -->
        <div class="flex flex-wrap items-center gap-3">
          <div class="px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-[#031B4E]">
            <span class="text-[#00BDE0] font-extrabold text-sm">{{ blogs.length }}</span> Verified Articles
          </div>
          <a 
            href="#booking"
            class="btn btn-primary text-xs sm:text-sm px-5 py-2.5 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Get Personalized Diet Plan</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Featured Highlight Blog (Sticky Top Editorial styled like S&D Marketing) -->
      <div 
        v-if="featuredBlog" 
        class="mb-12 text-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative border border-[#00BDE0]/30"
        style="background: linear-gradient(135deg, #0A3366 0%, #031B4E 50%, #0A3366 100%); color: #ffffff;"
      >
        <div class="absolute -right-16 -top-16 w-80 h-80 bg-[#00BDE0]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div class="lg:col-span-7 space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-[#00BDE0] text-[#031B4E] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                ⭐ Featured Masterclass
              </span>
              <span class="px-3 py-1 rounded-full bg-white/10 text-[#00BDE0] text-xs font-bold border border-white/20">
                {{ featuredBlog.category }}
              </span>
              <span class="text-xs text-slate-300 flex items-center gap-1 font-medium">
                <svg class="w-3.5 h-3.5 text-[#00BDE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke-width="2"/>
                  <polyline points="12 6 12 12 16 14" stroke-width="2"/>
                </svg>
                {{ featuredBlog.readTime }}
              </span>
            </div>

            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight">
              {{ featuredBlog.title }}
            </h3>

            <p class="text-slate-200 text-sm sm:text-base leading-relaxed line-clamp-3">
              {{ featuredBlog.excerpt }}
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-4">
              <button 
                @click="openBlogModal(featuredBlog)"
                class="btn btn-primary px-6 py-3 text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Masterclass Guide</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
              <a 
                :href="`/blog/${featuredBlog.slug}/`" 
                class="text-xs text-[#00BDE0] hover:text-white underline underline-offset-4 transition-colors font-bold"
              >
                Open static page ↗
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-16/10">
              <img 
                :src="featuredBlog.image" 
                :alt="featuredBlog.title" 
                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                <span class="flex items-center gap-1.5 font-bold">
                  <img src="/images/coach_mahira_avatar.jpg" alt="Coach Mahira" class="w-6 h-6 rounded-full border border-[#00BDE0] object-cover" />
                  Coach Mahira
                </span>
                <span class="text-[#00BDE0] font-bold">{{ featuredBlog.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search & Category Filters -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(10,51,102,0.06)] border border-slate-200/80 mb-10">
        <!-- Search Input -->
        <div class="relative mb-6">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search all 50 guides by keyword (e.g. belly fat, PCOS, roti, protein, sleep, diabetes, insulin)..." 
            class="w-full pl-12 pr-10 py-3.5 rounded-xl bg-[#ecf5fb]/50 border border-slate-200 text-[#031B4E] placeholder-slate-400 focus:outline-none focus:border-[#00BDE0] focus:ring-2 focus:ring-[#00BDE0]/20 transition-all text-xs sm:text-sm font-semibold"
          />
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''"
            class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer"
            aria-label="Clear search"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Category Tabs -->
        <div class="flex flex-wrap gap-2 items-center">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat; currentPage = 1"
            :class="[
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer',
              selectedCategory === cat 
                ? 'bg-[#031B4E] text-[#00BDE0] shadow-sm' 
                : 'bg-[#ecf5fb] text-[#566593] hover:bg-slate-100 hover:text-[#031B4E] border border-slate-200/80'
            ]"
          >
            {{ cat }}
            <span 
              class="ml-1 px-1.5 py-0.5 rounded-full text-[10px]" 
              :class="selectedCategory === cat ? 'bg-[#00BDE0] text-[#031B4E]' : 'bg-slate-200 text-[#566593]'"
            >
              {{ getCategoryCount(cat) }}
            </span>
          </button>
        </div>
      </div>

      <!-- Articles Grid (Paged) matching S&D Marketing publication cards -->
      <div v-if="paginatedBlogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="blog in paginatedBlogs" 
          :key="blog.id"
          class="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(10,51,102,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(0,189,224,0.15)] border border-slate-200/80 border-t-4 border-t-[#00BDE0] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
        >
          <div>
            <!-- Card Image -->
            <div class="relative h-52 w-full overflow-hidden bg-slate-900">
              <img 
                :src="blog.image" 
                :alt="blog.title"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute top-3.5 left-3.5 bg-[#031B4E]/85 backdrop-blur-md px-3 py-1 rounded-full text-[#00BDE0] text-[11px] font-bold border border-white/10">
                {{ blog.category }}
              </div>
              <div class="absolute bottom-3 right-3 bg-[#031B4E]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[11px] font-bold flex items-center gap-1 border border-white/10">
                <svg class="w-3 h-3 text-[#00BDE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke-width="2"/>
                  <polyline points="12 6 12 12 16 14" stroke-width="2"/>
                </svg>
                {{ blog.readTime }}
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <div class="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                <span class="flex items-center gap-1.5 font-bold text-[#031B4E]">
                  <img src="/images/coach_mahira_avatar.jpg" alt="Coach Mahira" class="w-5 h-5 rounded-full object-cover border border-[#00BDE0]" />
                  Coach Mahira
                </span>
                <span>{{ blog.date }}</span>
              </div>

              <h3 class="text-lg sm:text-xl font-extrabold text-[#031B4E] leading-snug group-hover:text-[#00BDE0] transition-colors">
                {{ blog.title }}
              </h3>

              <p class="text-[#566593] text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
                {{ blog.excerpt }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 mt-4">
                <span 
                  v-for="tag in blog.tags.slice(0, 3)" 
                  :key="tag"
                  class="px-2 py-0.5 rounded-md bg-[#ecf5fb] text-[#0A3366] text-[10px] font-bold"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Card Footer Actions -->
          <div class="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
            <button 
              @click="openBlogModal(blog)"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-[#031B4E] hover:text-[#00BDE0] group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              <span>Read Full Guide</span>
              <svg class="w-4 h-4 text-[#00BDE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <a 
              :href="`/blog/${blog.slug}/`" 
              class="text-[11px] text-slate-400 hover:text-[#00BDE0] underline underline-offset-2"
              title="Open full page"
            >
              Direct Link ↗
            </a>
          </div>
        </article>
      </div>

      <!-- No Results Found -->
      <div v-else class="text-center py-16 bg-white rounded-3xl border border-slate-200">
        <div class="text-4xl mb-3">🔍</div>
        <h3 class="text-xl font-bold text-[#031B4E] mb-1">No articles found</h3>
        <p class="text-[#566593] text-sm max-w-md mx-auto mb-4">
          We couldn't find any guides matching "{{ searchQuery }}". Try searching for "fat loss", "PCOS", "roti", or "protein".
        </p>
        <button 
          @click="searchQuery = ''; selectedCategory = 'All Articles'"
          class="btn btn-primary px-4 py-2 text-xs font-bold"
        >
          View All 50 Articles
        </button>
      </div>

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-12">
        <button 
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#566593] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#ecf5fb] cursor-pointer"
        >
          ← Previous
        </button>

        <div class="flex items-center gap-1">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="changePage(page)"
            :class="[
              'w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer',
              currentPage === page 
                ? 'bg-[#031B4E] text-[#00BDE0] shadow-sm' 
                : 'bg-white border border-slate-200 text-[#566593] hover:bg-[#ecf5fb]'
            ]"
          >
            {{ page }}
          </button>
        </div>

        <button 
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#566593] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#ecf5fb] cursor-pointer"
        >
          Next →
        </button>
      </div>

    </div>

    <!-- Interactive In-Depth Article Reader Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedBlog" 
        class="fixed inset-0 z-50 overflow-y-auto bg-[#031B4E]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
        @click.self="closeBlogModal"
      >
        <div class="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 relative my-auto">
          
          <!-- Modal Top Bar matching S&D Header -->
          <div class="sticky top-0 z-20 bg-[#031B4E] text-white px-6 py-4 flex items-center justify-between border-b border-white/10 shadow-md">
            <div class="flex items-center gap-3">
              <span class="px-2.5 py-1 rounded-full bg-[#00BDE0] text-[#031B4E] text-[10px] font-extrabold uppercase tracking-wider">
                {{ selectedBlog.category }}
              </span>
              <span class="text-xs text-slate-300 font-semibold">
                {{ selectedBlog.readTime }}
              </span>
            </div>

            <div class="flex items-center gap-2">
              <!-- Share via WhatsApp -->
              <a 
                :href="`https://wa.me/?text=${encodeURIComponent('Check out this clinical nutrition guide by Coach Mahira: ' + selectedBlog.title + ' https://mahira-nutritionists.vercel.app/blog/' + selectedBlog.slug + '/')}`"
                target="_blank"
                class="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                title="Share on WhatsApp"
              >
                <span>WhatsApp</span>
              </a>

              <!-- Copy Link -->
              <button 
                @click="copyBlogLink(selectedBlog)"
                class="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                title="Copy Link"
              >
                <span>{{ copiedText ? '✓ Copied!' : 'Copy Link' }}</span>
              </button>

              <!-- Close Button -->
              <button 
                @click="closeBlogModal"
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Scrollable Body -->
          <div class="overflow-y-auto p-6 sm:p-10 space-y-8 custom-scrollbar">
            
            <!-- Article Header -->
            <div>
              <div class="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span class="font-extrabold text-[#00BDE0]">Published {{ selectedBlog.date }}</span>
                <span>•</span>
                <span>By Coach Mahira (Maira Saleem)</span>
              </div>
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#031B4E] leading-tight">
                {{ selectedBlog.title }}
              </h1>
              <p class="text-[#566593] text-base sm:text-lg mt-3 leading-relaxed">
                {{ selectedBlog.excerpt }}
              </p>
            </div>

            <!-- Author Bio Card -->
            <div class="bg-[#ecf5fb] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
              <img 
                src="/images/coach_mahira_avatar.jpg" 
                alt="Coach Mahira" 
                class="w-14 h-14 rounded-xl object-cover border-2 border-[#00BDE0] shadow-md shrink-0"
              />
              <div class="text-center sm:text-left">
                <div class="flex items-center justify-center sm:justify-start gap-2">
                  <span class="font-bold text-[#031B4E] text-base">Coach Mahira (Maira Saleem)</span>
                  <span class="px-2 py-0.5 rounded-full bg-[#031B4E] text-[#00BDE0] text-[10px] font-bold">Clinical Dietitian</span>
                </div>
                <p class="text-xs text-[#566593] mt-1">
                  Certified Clinical Nutritionist specializing in non-restrictive fat loss, PCOS hormonal reversal, and bio-individual meal planning across Pakistan &amp; globally.
                </p>
              </div>
            </div>

            <!-- Key Takeaways Box (S&D Deep Navy Background with Electric Cyan Text) -->
            <div 
              class="text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-[#00BDE0]/30"
              style="background: linear-gradient(135deg, #0A3366 0%, #031B4E 100%); color: #ffffff;"
            >
              <div class="flex items-center gap-2 text-[#00BDE0] font-extrabold text-sm uppercase tracking-wider mb-3.5">
                <span class="text-base">⚡</span>
                <span class="tracking-wide">Key Clinical Takeaways</span>
              </div>
              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                <li v-for="(k, i) in selectedBlog.keyTakeaways" :key="i" class="flex items-start gap-2.5">
                  <span class="text-[#00BDE0] font-bold text-sm shrink-0">✓</span>
                  <span>{{ k }}</span>
                </li>
              </ul>
            </div>

            <!-- Main Article Sections -->
            <div class="space-y-6 text-[#031B4E] text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6">
              <div 
                v-for="(sec, sIdx) in selectedBlog.sections" 
                :key="sIdx"
                class="space-y-3"
              >
                <h2 class="text-xl sm:text-2xl font-extrabold text-[#031B4E]">
                  {{ sec.heading }}
                </h2>
                <div class="text-[#566593] leading-relaxed space-y-3" v-html="sec.content"></div>
              </div>
            </div>

            <!-- FAQs Section if available -->
            <div v-if="selectedBlog.faqs && selectedBlog.faqs.length > 0" class="border-t border-slate-100 pt-6 space-y-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#031B4E]">
                Frequently Asked Questions
              </h2>
              <div class="space-y-3">
                <div 
                  v-for="(faq, fIdx) in selectedBlog.faqs" 
                  :key="fIdx"
                  class="bg-[#ecf5fb] rounded-xl p-4 border border-slate-200"
                >
                  <h3 class="font-extrabold text-[#031B4E] text-sm sm:text-base flex items-center gap-2">
                    <span class="text-[#00BDE0]">Q:</span>
                    <span>{{ faq.q }}</span>
                  </h3>
                  <p class="text-[#566593] text-xs sm:text-sm mt-1.5 pl-5 leading-relaxed">
                    {{ faq.a }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Consultation Booking Call-to-Action Banner -->
            <div 
              class="text-white border border-[#00BDE0]/30 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-lg"
              style="background: linear-gradient(135deg, #0A3366 0%, #031B4E 50%, #0A3366 100%); color: #ffffff;"
            >
              <span class="text-3xl inline-block">🥗</span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready for a Customized Nutrition Plan?
              </h3>
              <p class="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Stop guessing with generic internet diets. Get a 100% bio-individual meal plan designed for your lifestyle, metabolic rate, and taste preferences.
              </p>
              <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a 
                  href="tel:+923137095454"
                  class="btn bg-white hover:bg-[#ecf5fb] text-[#031B4E] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md flex items-center gap-2"
                >
                  <span>📞 Call: 0313-7095454</span>
                </a>
                <a 
                  href="https://wa.me/923137095454?text=Hi%20Coach%20Mahira,%20I%20read%20your%20blog%20and%20want%20to%20book%20a%20consultation!"
                  target="_blank"
                  class="btn bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md flex items-center gap-2"
                >
                  <span>WhatsApp Coach Mahira</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <!-- Modal Bottom Footer -->
          <div class="bg-[#ecf5fb] px-6 py-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-[#566593]">
            <span>Revitalize with Mahira &copy; 2026</span>
            <button 
              @click="closeBlogModal"
              class="font-bold text-[#031B4E] hover:text-[#00BDE0] cursor-pointer"
            >
              Close Guide ✕
            </button>
          </div>

        </div>
      </div>
    </Teleport>

  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { blogs, blogCategories } from '../data/blogs.js'

const categories = blogCategories
const selectedCategory = ref('All Articles')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 9
const selectedBlog = ref(null)
const copiedText = ref(false)

const featuredBlog = computed(() => blogs[0])

const filteredBlogs = computed(() => {
  return blogs.filter(blog => {
    const matchesCategory = selectedCategory.value === 'All Articles' || blog.category === selectedCategory.value
    const query = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !query || 
      blog.title.toLowerCase().includes(query) ||
      blog.excerpt.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query) ||
      blog.tags.some(t => t.toLowerCase().includes(query))
    
    return matchesCategory && matchesSearch
  })
})

const totalPages = computed(() => Math.ceil(filteredBlogs.value.length / itemsPerPage))

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredBlogs.value.slice(start, start + itemsPerPage)
})

function getCategoryCount(cat) {
  if (cat === 'All Articles') return blogs.length
  return blogs.filter(b => b.category === cat).length
}

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    const el = document.getElementById('blog')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

function openBlogModal(blog) {
  selectedBlog.value = blog
  document.body.style.overflow = 'hidden'
  history.pushState(null, '', `?article=${blog.slug}`)
}

function closeBlogModal() {
  selectedBlog.value = null
  document.body.style.overflow = 'auto'
  if (window.location.search.includes('article=')) {
    history.pushState(null, '', window.location.pathname)
  }
}

function copyBlogLink(blog) {
  const url = `https://mahira-nutritionists.vercel.app/blog/${blog.slug}/`
  navigator.clipboard.writeText(url).then(() => {
    copiedText.value = true
    setTimeout(() => {
      copiedText.value = false
    }, 2500)
  })
}

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const articleSlug = urlParams.get('article')
  if (articleSlug) {
    const found = blogs.find(b => b.slug === articleSlug)
    if (found) {
      openBlogModal(found)
    }
  }

  const path = window.location.pathname
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '').replace(/\/$/, '')
    if (slug) {
      const found = blogs.find(b => b.slug === slug)
      if (found) {
        openBlogModal(found)
      }
    }
  }
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #ecf5fb;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #00BDE0;
  border-radius: 4px;
}
</style>
