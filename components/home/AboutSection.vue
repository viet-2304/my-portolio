<script setup lang="ts">
const { about } = useProfile()
</script>

<template>
  <section id="about" class="section-padding">
    <div class="container-content">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Photo placeholder -->
        <div class="flex justify-center md:justify-start">
          <div class="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden glow-border bg-slate-200 dark:bg-dark-200 flex items-center justify-center">
            <!-- Placeholder avatar -->
            <div class="text-center">
              <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-600/20 dark:from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-4">
                <span class="text-6xl font-bold text-cyan-600 dark:text-accent-cyan">{{ about.stats[0]?.value ? 'V' : '?' }}</span>
              </div>
              <p class="text-sm text-slate-500">Profile Photo</p>
            </div>
          </div>
        </div>

        <!-- Text content -->
        <div>
          <p class="section-label">About Me</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Bridging Logic &amp; Creativity
          </h2>

          <!-- Bio paragraphs -->
          <div class="space-y-4">
            <p
              v-for="(paragraph, index) in about.bio"
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
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
