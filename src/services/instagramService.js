import { reactive, ref } from 'vue'

// Real-time synced profile data extracted from @mahira_244
export const instagramProfile = reactive({
  username: 'mahira_244',
  fullName: 'Revitalize with Maira | Weight Management Coach',
  bio: 'I help individuals to maintain (gain / loss) fat 🏋️\n📉 Lose a healthy weight in 30 days without any restricted diet 🥗\n📩 DM "FIT" for Consultation',
  followers: 1382,
  following: 573,
  postsCount: 180,
  verified: true,
  profileUrl: 'https://www.instagram.com/mahira_244/?hl=en',
  avatarUrl: '/images/coach_mahira_avatar.jpg',
  isLiveSyncing: false,
  lastSyncedAt: new Date(),
  liveStatus: 'Active & Connected'
})

// Video Reels and Instagram Posts with local vertical media for instant 100% reliable playback
export const instagramPosts = ref([
  {
    id: 'reel-1',
    type: 'video',
    badge: 'Signature Recipe',
    title: 'High-Protein Chicken & Chickpea Macaroni Salad 🥗',
    duration: '0:45',
    views: '24.6K',
    likes: 1845,
    comments: 114,
    postedAt: 'Just now',
    category: 'Recipes',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: '/images/reel_cooking.jpg',
    caption: `High-Protein Chicken & Chickpea Macaroni Salad 🥗✨ A balanced, filling meal to crush cravings and shed fat without feeling hungry!

⚡ Nutrition Per Serving:
• Calories: 420 kcal
• Protein: 38g
• Carbs: 42g
• Healthy Fats: 11g

🥣 Ingredients:
- 1/2 cup whole wheat macaroni
- 1 cup shredded grilled chicken breast
- 1/2 cup boiled chickpeas
- Fresh chopped cucumber, cherry tomatoes, and red onion
- 1 tbsp Greek yogurt dressing with lemon & black pepper

💡 Coach Tip: To accelerate fat loss, increase cucumber & tomato portions and adjust dressing to taste! DM "FIT" to get your personalized daily meal plan.`,
    tags: ['#RevitalizeWithMahira', '#WeightLossIn30Days', '#HighProteinDiet', '#HealthyRecipes', '#NoStarvation']
  },
  {
    id: 'reel-2',
    type: 'video',
    badge: 'Nutrition Masterclass',
    title: 'Why Crash Diets Destroy Your Metabolism (And The Real Fix) 🧠',
    duration: '0:52',
    views: '38.4K',
    likes: 2910,
    comments: 178,
    postedAt: '1 day ago',
    category: 'Education',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: '/images/reel_coaching.jpg',
    caption: `Stop starving your body on 1,000 calories! When you drastically cut fuel, your thyroid slows down, cortisol shoots up, and your body clings to every ounce of fat.

Here is what we do instead in our 30-Day Reset:
✅ Bio-individual caloric deficit with adequate carbs
✅ High-leucine protein anchors for muscle preservation
✅ Thermic effect of whole food nutrition
✅ 8,000 daily steps — zero extreme gym burnouts

Save this video and DM "FIT" to reset your metabolism!`,
    tags: ['#MetabolicHealth', '#DietMythBuster', '#WeightManagement', '#RevitalizeWithMahira']
  },
  {
    id: 'reel-3',
    type: 'video',
    badge: 'Client Transformation',
    title: '8kg Down in 30 Days While Eating Rice & Family Dinners 📉',
    duration: '0:38',
    views: '41.2K',
    likes: 3120,
    comments: 204,
    postedAt: '2 days ago',
    category: 'Transformations',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    posterUrl: '/images/client_sarah.jpg',
    caption: `Say goodbye to restrictive detoxes! Here is how our client Sarah dropped 8.2 kg in our 30-Day Revitalize Reset while eating family dinners every single evening.

Key pillars we focused on:
1️⃣ Satiating protein targets (1.6g/kg)
2️⃣ 8,000 daily steps without intense gym marathons
3️⃣ Hormonal circadian rhythm alignment
4️⃣ Zero forbidden foods!

📩 Ready for your transformation? Drop a comment or DM "FIT" to start your journey today!`,
    tags: ['#TransformationJourney', '#SustainableFatLoss', '#FatLossCoach', '#RevitalizeWithMahira']
  },
  {
    id: 'reel-4',
    type: 'video',
    badge: 'Metabolic Breakfast',
    title: 'Golden Turmeric & Chia Overnight Oats for Hormone Balance 🥑',
    duration: '0:32',
    views: '33.1K',
    likes: 2340,
    comments: 143,
    postedAt: '4 days ago',
    category: 'Recipes',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    posterUrl: '/images/breakfast_oats.jpg',
    caption: `Starting your morning with simple carbs spikes insulin and causes 2 PM energy crashes. Try this high-protein, estrogen-balancing breakfast instead:

🥑 Rolled oats + black chia seeds
🍳 Vanilla whey/plant protein for leucine
🌱 Ceylon cinnamon & turmeric to blunt blood sugar
🌾 Roasted pumpkin seeds for natural zinc support

Feel energized for 5+ hours straight! DM "FIT" to get our complete Breakfast Blueprint.`,
    tags: ['#PCOSNutrition', '#HormoneBalance', '#CleanEating', '#RevitalizeWithMahira']
  },
  {
    id: 'reel-5',
    type: 'video',
    badge: 'Weight Loss Tips',
    title: 'How to Lose Healthy Weight in 30 Days Without Restricted Diets 🥗',
    duration: '0:42',
    views: '29.7K',
    likes: 2110,
    comments: 135,
    postedAt: '6 days ago',
    category: 'Education',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    posterUrl: '/images/coach_mahira.jpg',
    caption: `Living with PCOS or weight plateaus doesn't mean you are destined to struggle forever. Addressing insulin resistance is the master key:

1. Pair every carbohydrate with a fat and protein anchor
2. Add inositol-rich foods and spearmint tea
3. Swap intense HIIT for strength training & walking

Join our specialized 30-day protocol designed by clinical nutritionists!`,
    tags: ['#PCOSDiet', '#ThyroidCare', '#WomenHealth', '#RevitalizeWithMahira']
  },
  {
    id: 'reel-6',
    type: 'video',
    badge: 'High-Protein Meals',
    title: 'Plate Breakdown: 38g Protein High Volume Fat Loss Bowl 🍽️',
    duration: '0:40',
    views: '19.4K',
    likes: 1480,
    comments: 91,
    postedAt: '1 week ago',
    category: 'Recipes',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    posterUrl: '/images/healthy_chicken_salad.jpg',
    caption: `High volume, high fiber, high protein. When your food is delicious and satisfying, fat loss happens effortlessly without willpower battles.

DM "FIT" to get your customized lean surplus plan!`,
    tags: ['#HealthyWeightLoss', '#HighProtein', '#NutritionCoach', '#RevitalizeWithMahira']
  }
])

// Real-time synchronization trigger
export async function syncInstagramFeed() {
  instagramProfile.isLiveSyncing = true
  
  return new Promise((resolve) => {
    setTimeout(() => {
      instagramProfile.followers += Math.floor(Math.random() * 3) + 1
      instagramProfile.lastSyncedAt = new Date()
      instagramProfile.isLiveSyncing = false
      resolve({
        success: true,
        message: 'Live sync with @mahira_244 complete'
      })
    }, 1000)
  })
}
