<script setup lang="ts">
const { about } = useProfile()
const { withBase } = useBaseUrl()
const { t, tm } = useLanguage()

const bioParagraphs = computed(() => tm('about.bio') as string[])

const statLabelKeys: Record<string, string> = {
  'Years Experience': 'about.stats.yearsExperience',
  'Projects': 'about.stats.projects',
}
</script>

<template>
  <section id="about" class="section-padding">
    <div class="container-content">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Profile Photo -->
        <div class="flex justify-center md:justify-start">
          <div class="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden glow-border bg-slate-200 dark:bg-dark-200">
            <img
              :src="withBase('/images/profile.jpg')"
              alt="Viet Pham"
              class="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <!-- Text content -->
        <div>
          <p class="section-label">{{ t('about.label') }}</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {{ t('about.heading') }}
          </h2>

          <!-- Bio paragraphs -->
          <div class="space-y-4">
            <p
              v-for="(paragraph, index) in bioParagraphs"
              :key="index"
              class="text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Stats -->
          <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="stat in about.stats"
              :key="stat.label"
              class="border border-slate-200 dark:border-slate-700/50 rounded-xl p-5"
            >
              <div class="text-3xl font-bold text-cyan-600 dark:text-accent-cyan">
                {{ stat.value }}{{ stat.suffix }}
              </div>
              <div class="mt-1 text-xs tracking-wider uppercase text-slate-500">
                {{ statLabelKeys[stat.label] ? t(statLabelKeys[stat.label]) : stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
