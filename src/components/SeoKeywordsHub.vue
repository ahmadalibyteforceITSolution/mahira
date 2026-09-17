<template>
  <section id="seo-directory" class="py-16 bg-brand-950/90 text-neutral-200 border-t border-brand-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
          <span>⚡</span>
          <span>Google Top-Rank SEO Knowledge Index</span>
        </div>
        <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
          Top Searched Nutrition, Weight Loss &amp; Clinical Topics
        </h2>
        <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed">
          Explore over 500+ clinical protocols, dietary guides, and regional weight management topics coached by 
          <span class="text-gold-300 font-semibold">Coach Mahira (@mahira_244)</span> across Lahore, Pakistan, and worldwide.
        </p>
      </div>

      <!-- Quick Category Navigation Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          v-for="(cat, idx) in clusters"
          :key="idx"
          @click="activeCluster = idx"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer',
            activeCluster === idx
              ? 'bg-gold-400 text-brand-950 shadow-lg shadow-gold-400/20 scale-105'
              : 'bg-brand-900/60 text-neutral-300 hover:bg-brand-800/80 hover:text-white border border-brand-800/50'
          ]"
        >
          <span class="mr-1.5">{{ cat.icon }}</span>
          {{ cat.title }}
          <span class="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full" :class="activeCluster === idx ? 'bg-brand-950/20 text-brand-950 font-bold' : 'bg-brand-800 text-gold-300'">
            {{ cat.keywords.length }}
          </span>
        </button>
      </div>

      <!-- Active Cluster Content Display -->
      <div class="bg-brand-900/40 border border-brand-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm mb-8 shadow-xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-800/60 mb-6">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">{{ clusters[activeCluster].icon }}</span>
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-white">
                {{ clusters[activeCluster].title }}
              </h3>
            </div>
            <p class="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
              {{ clusters[activeCluster].description }}
            </p>
          </div>
          <div class="flex items-center gap-3">
            <a 
              href="#booking"
              class="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-brand-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
            >
              Book Consultation
            </a>
            <a 
              href="#calculator"
              class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all whitespace-nowrap"
            >
              Calculate Macros
            </a>
          </div>
        </div>

        <!-- Search / Filter within keywords -->
        <div class="mb-5">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search keywords (e.g. belly fat, PCOS, roti, protein, Lahore)..."
            class="w-full sm:max-w-md px-4 py-2 text-xs rounded-xl bg-brand-950/80 border border-brand-700 text-white placeholder-neutral-400 focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>

        <!-- Keyword Pills Grid -->
        <div class="flex flex-wrap gap-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
          <span
            v-for="(kw, kIdx) in filteredKeywords"
            :key="kIdx"
            class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs bg-brand-950/70 border border-brand-800 hover:border-gold-400/50 hover:bg-brand-900 text-neutral-200 hover:text-white transition-all cursor-default"
          >
            <span class="text-gold-400 text-[10px] mr-1.5">#</span>
            {{ kw }}
          </span>
        </div>
      </div>

      <!-- SEO Semantic Entity Index (Fully Crawlable for Search Engines) -->
      <div class="mt-8 pt-8 border-t border-brand-900/80">
        <details class="group cursor-pointer">
          <summary class="flex items-center justify-between text-xs text-neutral-400 hover:text-gold-300 font-semibold transition-colors list-none py-2">
            <span class="flex items-center gap-2">
              <span>📚</span>
              <span>View Full 500+ Top Ranked Clinical &amp; Nutrition Keyword Directory (Google Index)</span>
            </span>
            <span class="text-gold-400 transition-transform group-open:rotate-180">▼</span>
          </summary>
          
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div 
              v-for="(cluster, cIdx) in clusters" 
              :key="cIdx" 
              class="bg-brand-900/30 border border-brand-800/40 rounded-xl p-4 space-y-2"
            >
              <h4 class="font-bold text-gold-400 text-sm flex items-center gap-1.5">
                <span>{{ cluster.icon }}</span>
                <span>{{ cluster.title }}</span>
              </h4>
              <p class="text-[11px] text-neutral-400 leading-relaxed">{{ cluster.summary }}</p>
              <ul class="space-y-1 text-[11px] text-neutral-300 max-h-48 overflow-y-auto pr-1">
                <li v-for="(k, i) in cluster.keywords" :key="i" class="flex items-start gap-1">
                  <span class="text-gold-400/70">•</span>
                  <span>{{ k }}</span>
                </li>
              </ul>
            </div>
          </div>
        </details>
      </div>

      <!-- Quick Action Helpline Banner -->
      <div class="mt-10 rounded-2xl bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 border border-gold-400/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div class="space-y-1 text-center sm:text-left">
          <h4 class="text-white font-serif text-lg sm:text-xl font-bold">
            Ready for a Personalized 30-Day Nutrition Protocol?
          </h4>
          <p class="text-xs sm:text-sm text-neutral-300">
            Direct 1-on-1 consultations with Coach Mahira. WhatsApp <strong class="text-gold-300">0313-7095454</strong> or email <strong class="text-gold-300">mairasaleem475@gmail.com</strong>.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <a
            href="https://wa.me/923137095454?text=FIT"
            target="_blank"
            class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2"
          >
            <span>💬</span>
            <span>WhatsApp "FIT"</span>
          </a>
          <a
            href="#booking"
            class="px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-brand-950 font-bold text-xs shadow-lg transition-all"
          >
            Book Online
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCluster = ref(0)
const searchTerm = ref('')

const clusters = ref([
  {
    title: 'Weight Loss & Fat Reduction',
    icon: '🔥',
    description: 'Evidence-based fat loss protocols, non-restrictive meal planning, calorie deficit without starvation, and metabolic rebooting.',
    summary: 'Customized caloric deficit plans, visceral fat reduction, post-pregnancy weight loss, and permanent lifestyle habits.',
    keywords: [
      'best nutritionist for weight loss',
      'weight management coach',
      'lose weight in 30 days',
      'lose weight without diet',
      'lose weight without starving',
      'fast fat loss coach',
      'lose belly fat in 30 days',
      'lower belly fat diet',
      'visceral fat reduction diet',
      'safe calorie deficit meal plan',
      'sustainable fat loss guide',
      'how to lose 5kg in a month',
      'lose 10kg in 3 months',
      'non restrictive weight loss plan',
      'postpartum weight loss diet',
      'post pregnancy belly fat reduction',
      'belly fat burning foods',
      'fat loss coach Lahore',
      'natural metabolism booster',
      'reset metabolism diet',
      'stop yo yo dieting',
      'emotional eating recovery',
      'binge eating coach',
      'healthy portion control guide',
      'scientific weight loss program',
      'clinical weight loss protocol',
      'lose love handles diet',
      'face fat reduction diet',
      'arm fat reduction meal plan',
      'holistic weight loss coach',
      'permanent weight loss program',
      'weight loss without gym',
      'weight loss without supplements',
      'healthy fat loss for women',
      'fat loss coaching for men',
      'stubborn fat loss specialist',
      'body fat percentage reduction',
      'calorie deficit without hunger',
      'eat roti and lose weight',
      'eat rice and lose weight',
      'healthy weight loss transformation',
      'lose weight after 30',
      'weight loss for 40 plus women',
      'metabolic damage recovery',
      'diet plan to lose weight fast',
      'best diet for weight loss Pakistan',
      '30 day fat loss challenge',
      'easy meal plan for weight loss',
      'customized fat loss diet',
      'guaranteed weight loss guidance',
      'healthy lifestyle transformation',
      'rapid healthy fat reduction',
      'natural appetite control foods',
      'belly fat reduction drink',
      'how to shed water weight safely',
      'thigh fat reduction diet',
      'hip fat burning meal plan',
      'metabolic rate acceleration',
      'body recomposition meal plan',
      'healthy breakfast for fat loss',
      'low calorie filling foods',
      'night cravings prevention diet',
      'sugar detox for weight loss',
      'refined carb elimination guide',
      'healthy swap guide for weight loss',
      'meal prep for weight loss',
      'weight loss coach for busy professionals',
      'anti bloat weight loss meals',
      'intermittent fasting weight loss plan',
      '16 8 fasting meal schedule',
      'sustainable weight management',
      'fat loss coach reviews',
      '30 day body reset program',
      'inch loss diet plan',
      'waist circumference reduction',
      'fat loss consultation online',
      'personalized nutrition roadmap',
      'daily calorie target calculator',
      'fat loss without loose skin',
      'healthy weight loss for brides',
      'pre wedding weight loss diet',
      'weight loss accountability partner',
      'weight loss mindset coaching',
      'habit based nutrition coaching',
      'weight loss for bridal makeover',
      'how to lose love handles permanently',
      'non surgical fat loss guidance',
      'metabolism reset protocol',
      'calories in roti vs rice',
      'fasting blood sugar weight loss'
    ]
  },
  {
    title: 'Women Hormonal Health & PCOS',
    icon: '🌸',
    description: 'Specialized clinical protocols for PCOS/PCOD reversal, thyroid management, cycle regulation, and hormonal weight loss.',
    summary: 'Clinical dietary protocols to regulate cycles, reduce insulin resistance, cure hormonal acne, and treat thyroid imbalances.',
    keywords: [
      'PCOS diet plan',
      'PCOD weight loss diet',
      'PCOS nutritionist Lahore',
      'best dietitian for PCOS in Pakistan',
      'reverse PCOS naturally with diet',
      'PCOS insulin resistance diet plan',
      'PCOS belly fat diet',
      'hormonal imbalance diet',
      'hormone balance coach',
      'irregular periods diet plan',
      'normalize periods naturally',
      'thyroid diet plan for weight loss',
      'hypothyroidism weight loss diet',
      'Hashimotos disease meal plan',
      'hyperthyroidism diet chart',
      'slow thyroid metabolism booster',
      'hormonal acne diet plan',
      'clear skin nutrition protocol',
      'hirsutism diet plan',
      'reduce high androgens naturally',
      'anti inflammatory diet for PCOS',
      'fertility boosting diet plan',
      'improve egg quality nutrition',
      'pre pregnancy diet chart',
      'pregnancy trimester meal plan',
      'gestational diabetes diet plan',
      'breastfeeding mother diet plan',
      'post c section weight loss diet',
      'lactation boosting foods',
      'menopause weight loss diet',
      'perimenopause hormonal balance',
      'estrogen dominance diet foods',
      'low progesterone natural diet',
      'seed cycling for hormonal balance',
      'PCOS high protein breakfast',
      'PCOS friendly snacks',
      'female hormone specialist nutritionist',
      'gut health for PCOS',
      'cortisol lowering diet',
      'adrenal fatigue meal plan',
      'endometriosis diet plan',
      'adenomyosis nutrition',
      'PCOS hair fall control diet',
      'bloating before period diet',
      'painful periods nutrition',
      'cysts on ovaries natural diet',
      'PCOS certified nutritionist',
      'natural hormone regulation',
      'women wellness nutrition coach',
      'PCOS telehealth consultation',
      'PCOS meal prep recipes',
      'low carb for PCOS Pakistan',
      'PCOS dairy free alternatives',
      'gluten free PCOS diet plan',
      'spearmint tea for PCOS',
      'inositol friendly foods',
      'insulin sensitizing diet',
      'PCOS facial hair reduction',
      'hormone balancing smoothies',
      'ovulation boosting foods',
      'natural conception diet',
      'IVF preparation nutrition plan',
      'morning sickness relief foods',
      'fourth trimester healing diet',
      'postpartum hormone reset',
      'hot flashes natural diet',
      'metabolism for women over 35',
      'acne breakout diet triggers',
      'gut flora and female hormones',
      'stress hormone cortisol reset',
      'PCOS meal plan download',
      'hormonal weight gain causes',
      'PCOS coaching WhatsApp',
      'women clinical nutritionist',
      'PCOS friendly desserts',
      'ovarian health nutrition',
      'hormonal belly fat reduction',
      'prolactin balancing diet',
      'FSH LH ratio balance diet',
      'post pill amenorrhea nutrition',
      'female metabolic wellness',
      'natural cycle regulation',
      'PCOS diet tips in Urdu',
      'PCOS friendly desi breakfast',
      'anti androgen foods list',
      'hypothyroid meal plan Pakistan'
    ]
  },
  {
    title: 'Clinical Nutrition & Medical Care',
    icon: '🩺',
    description: 'Medical Nutrition Therapy (MNT) for diabetes, fatty liver, hypertension, cholesterol, gastrointestinal health, and chronic inflammation.',
    summary: 'Evidence-based therapeutic meal plans for type 2 diabetes, high cholesterol, liver health, gut microbiome, and hypertension.',
    keywords: [
      'clinical nutritionist',
      'certified clinical dietitian',
      'medical nutrition therapy',
      'insulin resistance diet plan',
      'reverse insulin resistance naturally',
      'prediabetes meal plan',
      'type 2 diabetes diet chart',
      'diabetic friendly recipes',
      'blood sugar regulation foods',
      'low glycemic index diet',
      'cholesterol lowering diet plan',
      'lower LDL cholesterol naturally',
      'high triglycerides diet',
      'fatty liver grade 1 diet plan',
      'reverse fatty liver naturally',
      'cardiovascular health diet',
      'hypertension DASH diet',
      'blood pressure lowering foods',
      'high uric acid diet chart',
      'gout prevention meal plan',
      'kidney stone prevention diet',
      'renal nutrition therapy',
      'IBS low FODMAP diet',
      'gut health and microbiome diet',
      'chronic bloating relief foods',
      'acid reflux GERD diet plan',
      'constipation natural remedies diet',
      'leaky gut repair protocol',
      'anti inflammatory meal plan',
      'autoimmune protocol diet',
      'rheumatoid arthritis inflammation diet',
      'anemia iron rich diet plan',
      'vitamin D deficiency foods',
      'calcium rich meal plan',
      'natural liver detox foods',
      'immune boosting nutrition',
      'thyroid clinical nutrition',
      'digestive enzyme diet',
      'gastritis meal plan',
      'celiac disease gluten free diet',
      'senior wellness nutrition',
      'adult disease prevention diet',
      'clinical dietitian consultation online',
      'medical meal planning specialist',
      'evidence based clinical nutrition',
      'fasting blood sugar control',
      'HbA1c reduction diet plan',
      'heart healthy Pakistani recipes',
      'low sodium diet chart',
      'gallbladder friendly diet',
      'purine free foods for uric acid',
      'stomach ulcer diet plan',
      'gut inflammation remedies',
      'prebiotic and probiotic foods',
      'healthy digestion lifestyle',
      'food intolerance testing advice',
      'hypoallergenic meal plan',
      'metabolic syndrome reversal',
      'preventative healthcare nutrition',
      'nutritional deficiency assessment',
      'medical diet consultation WhatsApp',
      'dietitian for chronic illness',
      'evidence based therapeutic diets',
      'glycemic load guide',
      'healthy liver enzymes diet',
      'anti plaque cardiovascular diet',
      'kidney health lifestyle tips',
      'digestive health consultation',
      'low purine Pakistani foods',
      'electrolyte balance nutrition',
      'clinical nutritionist credentials',
      'medical nutrition therapy Pakistan',
      'holistic clinical dietetics',
      'chronic fatigue syndrome diet',
      'migraine prevention foods',
      'diabetic diet plan in Urdu',
      'cholesterol control diet Pakistan',
      'fatty liver diet chart in Urdu',
      'uric acid patient diet plan',
      'thyroid patient diet chart'
    ]
  },
  {
    title: 'Macro Coaching & High-Protein Diet',
    icon: '🥗',
    description: 'Precision macronutrient calculation, lean muscle synthesis, skinny-fat recomposition, and tasty high-protein meal planning.',
    summary: 'Protein targets, calorie tracking, flexible IIFYM dieting, high-protein Pakistani meals, and muscle retention during fat loss.',
    keywords: [
      'high protein meal plan',
      'macro calculator',
      'daily calorie calculator',
      'protein intake calculator',
      'macronutrient coach',
      'flexible dieting IIFYM coach',
      'high protein Pakistani recipes',
      'high protein vegetarian diet',
      'chicken breast meal prep',
      'healthy breakfast oats bowl',
      'greek yogurt protein recipes',
      'muscle building diet plan',
      'lean bulking meal plan',
      'body recomposition coach',
      'lose fat gain muscle diet',
      'skinny fat transformation diet',
      'healthy weight gain diet plan',
      'weight gain for underweight girls',
      'high calorie clean foods',
      'post workout nutrition guide',
      'pre workout meal ideas',
      'whole foods nutrition plan',
      'clean eating meal plan',
      'fiber rich diet plan',
      'healthy fats sources list',
      'intermittent fasting 16 8 plan',
      'intuitive eating coach',
      'portion size guide for fat loss',
      'nutrition for gym beginners',
      'sports nutrition specialist',
      'meal prep for busy working women',
      'weekly healthy grocery list',
      'guilt free dessert recipes',
      'low calorie sweet cravings',
      'healthy smoothies for weight loss',
      'protein shake alternatives',
      'zero refined sugar diet',
      'sugar addiction recovery',
      'natural energy boosting diet',
      'metabolism boosting spices',
      'healthy meal replacement ideas',
      'high protein lunch box ideas',
      'macro friendly Pakistani food',
      'tracking macros in desi food',
      'carbs cycling meal plan',
      'how many grams of protein daily',
      'egg white recipes for fat loss',
      'dal and lentils protein content',
      'paneer protein meal plan',
      'tofu recipes for weight loss',
      'chana chaat high protein recipe',
      'quinoa bowl recipes',
      'chia seeds pudding for breakfast',
      'flaxseeds benefits for hormones',
      'healthy fats for brain health',
      'avocado toast healthy swaps',
      'low carb roti recipe',
      'besan roti for weight loss',
      'multigrain flour benefits',
      'brown rice vs white rice',
      'olive oil cooking tips',
      'macro breakdown for weight loss',
      'macro breakdown for muscle gain',
      'how to count calories correctly',
      'food weighing scale guide',
      'healthy takeout options',
      'eating out on a diet plan',
      'travel friendly healthy snacks',
      'energy bars without added sugar',
      'collagen rich foods',
      'glutamine and gut repair',
      'hydration guidelines for fat loss',
      'green tea weight loss facts',
      'black coffee metabolism boost',
      'apple cider vinegar truth',
      'healthy sweet snacks',
      'dark chocolate health benefits',
      'mindful eating principles',
      'hunger scale nutrition guide',
      'sustainable nutrition habits',
      'desi high protein breakfast ideas',
      'high protein daal recipes',
      'boiled egg diet plan',
      'muscle toning for females',
      'how to calculate maintenance calories'
    ]
  },
  {
    title: 'Lahore, Pakistan & Global Telehealth',
    icon: '🌍',
    description: 'Direct consultations in Lahore and online telehealth coaching for overseas clients in the UK, USA, UAE, Canada, and Australia.',
    summary: 'Local clinic access in Lahore and remote 1-on-1 virtual dietary consultations for international clients across time zones.',
    keywords: [
      'best nutritionist in Lahore',
      'top dietitian Lahore',
      'clinical nutritionist Lahore',
      'weight loss coach Lahore',
      'nutrition clinic Lahore DHA',
      'nutritionist in Gulberg Lahore',
      'online nutritionist Pakistan',
      'best dietitian in Pakistan',
      'clinical dietitian Karachi',
      'top nutritionist Islamabad',
      'nutritionist Rawalpindi',
      'dietitian Faisalabad',
      'dietitian Multan',
      'dietitian Peshawar',
      'Pakistani diet plan for weight loss',
      'desi diet chart for weight loss',
      'weight loss with Pakistani food',
      'healthy roti for weight loss',
      'desi recipes for fat loss',
      'Pakistani weight loss expert',
      'Coach Mahira',
      'Revitalize with Mahira',
      'mahira_244',
      'Maira Saleem nutritionist',
      'WhatsApp nutritionist consultation',
      '0313 7095454 nutritionist',
      'DM FIT on WhatsApp',
      'online dietitian consultation',
      'virtual nutrition coaching',
      'international online nutritionist',
      'dietitian for overseas Pakistanis',
      'Pakistani nutritionist in UK London',
      'Pakistani dietitian in USA',
      'online nutritionist UAE Dubai',
      'nutrition consultation Canada Toronto',
      'online dietitian Australia Sydney',
      'remote weight loss coach',
      '1 on 1 private nutrition coaching',
      'personalized diet plan on WhatsApp',
      '30 day diet consultation Pakistan',
      'private dietary counseling',
      'virtual telehealth nutritionist',
      'affordable nutritionist consultation',
      'certified nutritionist online',
      'mairasaleem475@gmail.com consultation',
      'nutrition clinic Lahore Model Town',
      'nutritionist near me Lahore',
      'female nutritionist in Lahore',
      'best female dietitian in Pakistan',
      'Lahore weight management specialist',
      'dietitian Johar Town Lahore',
      'online diet plan fee in Pakistan',
      'experienced clinical dietitian',
      'dietitian video consultation Zoom',
      'custom diet plan PDF download',
      'weekly progress tracking coach',
      'weight loss success stories Pakistan',
      'desi household healthy cooking',
      'diet plan with home cooked food',
      'no special cooking diet plan',
      'budget friendly weight loss diet',
      'student weight loss meal plan',
      'working woman diet plan Pakistan',
      'overseas Pakistani healthy diet',
      'halal nutrition coach worldwide',
      'British Pakistani nutritionist',
      'Pakistani American diet coach',
      'Dubai NRI dietitian consultation',
      'Saudi Arabia Pakistani nutritionist',
      'Qatar Doha Pakistani dietitian',
      'telehealth nutrition appointment',
      'same day nutrition consultation',
      'urgent dietitian advice WhatsApp',
      'Sunday nutrition consultation',
      'weekend diet clinic appointment',
      'top rated nutritionist reviews',
      'dietitian consultation via phone call',
      'dietitian consultation in Urdu Punjabi',
      'custom diet plan for wedding in Pakistan',
      'nutritionist clinic near me DHA Lahore',
      'best female nutritionist in Gulberg Lahore'
    ]
  },
  {
    title: 'Top Ranked Search Queries & FAQs',
    icon: '🔍',
    description: 'High-intent search queries and practical nutritional solutions searched daily on Google.',
    summary: 'Direct answers to top search questions regarding calorie deficits, belly fat, breakfast ideas, and PCOS.',
    keywords: [
      'how to lose weight in 30 days without diet',
      'how to lose belly fat without starving',
      'can I eat roti and lose weight',
      'is rice bad for weight loss',
      'best breakfast for weight loss in Pakistan',
      'high protein Pakistani lunch recipes',
      'how to cure PCOS with diet and lifestyle',
      'foods to avoid in PCOS',
      'best tea for bloating and flat stomach',
      'how to lose weight with slow thyroid',
      'how many grams of protein should I eat',
      'how to maintain calorie deficit without hunger',
      'what to eat before workout for fat loss',
      'how to stop evening sugar cravings',
      'how to reduce bloating fast naturally',
      'how to tone body without gym',
      'diet plan for working women in Pakistan',
      'healthy Pakistani dinner for weight loss',
      'best healthy snacks to buy in Pakistan',
      'how to speed up slow metabolism',
      'hormonal belly fat vs normal fat',
      'how to fix insulin resistance with food',
      'cholesterol lowering Pakistani diet',
      'fatty liver recovery time with diet',
      'personalized nutrition consultation Lahore',
      'book online diet consultation with Coach Mahira',
      'lose 5kg healthy weight reset',
      'sustainable fat loss for busy moms',
      'evidence based weight loss coach',
      'can you lose weight eating daal chawal',
      'how many rotis per day for fat loss',
      'best cooking oil for weight loss in Pakistan',
      'is chai bad for weight loss',
      'how to make healthy milk tea',
      'sugar free desserts in Pakistan',
      'is intermittent fasting safe for women',
      'how to break a weight loss plateau',
      'scale weight not moving but clothes looser',
      'difference between fat loss and weight loss',
      'how to gain weight fast for skinny girls',
      'healthy smoothie for weight gain',
      'how to cure constipation on a diet',
      'what causes sudden stomach bloating',
      'best fruits for diabetic patients in Pakistan',
      'can thyroid patient eat cauliflower and cabbage',
      'is gluten free necessary for PCOS',
      'dairy free milk options in Pakistan',
      'how to stay consistent on a diet plan',
      'how to avoid loose skin after weight loss',
      'vitamins to take during weight loss',
      'collagen vs protein powder difference',
      'what to eat when dining out in Pakistan',
      'healthy fast food swaps Pakistan',
      'how to restart diet after cheat day',
      'how to measure waistline properly',
      'ideal body fat percentage for women',
      'how to control portion sizes effortlessly',
      'drinking water before meals weight loss',
      'lemon water in morning benefits truth',
      'cinnamon water for blood sugar',
      'fenugreek seeds methi dana for PCOS',
      'apple cider vinegar before meals timing',
      'how to cure hormonal acne from inside',
      'best foods for hair growth and thickness',
      'iron rich foods for low hemoglobin',
      'anti aging nutrition guidelines',
      'healthy late night snacks under 100 calories',
      'how to eat healthy on a tight budget',
      'diet consultation fee in Pakistan',
      'contact Coach Mahira 0313 7095454',
      'email Coach Mahira mairasaleem475@gmail.com',
      'top rated female nutritionist online',
      'clinical dietitian verified credentials',
      'revitalize with mahira reviews and results',
      '30 day transformation before and after',
      'how to lose weight while eating out',
      'is Pakistani diet healthy for weight loss',
      'best time to drink water for fat loss',
      'morning drink to reduce belly fat',
      'easy diet plan for college students'
    ]
  }
])

const filteredKeywords = computed(() => {
  const list = clusters.value[activeCluster.value].keywords
  if (!searchTerm.value.trim()) return list
  const q = searchTerm.value.toLowerCase().trim()
  return list.filter(k => k.toLowerCase().includes(q))
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.6);
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(202, 138, 4, 0.4);
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(202, 138, 4, 0.8);
}
</style>
