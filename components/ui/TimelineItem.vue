<script setup lang="ts">
import type { Experience } from '~/data/experience'

defineProps<{
  experience: Experience
  isFirst?: boolean
}>()
</script>

<template>
  <div class="relative pl-8 pb-10 last:pb-0 border-l-2 border-slate-200 dark:border-slate-700/50">
    <!-- Timeline dot -->
    <div
      class="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-dark"
      :class="isFirst ? 'bg-cyan-500 dark:bg-accent-cyan' : 'bg-slate-300 dark:bg-slate-600'"
    />

    <!-- Date -->
    <p class="text-sm text-slate-500 uppercase tracking-wider mb-1">
      {{ experience.startDate }} — {{ experience.endDate }}
    </p>

    <!-- Role -->
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white">
      {{ experience.role }}
    </h3>

    <!-- Company -->
    <a
      v-if="experience.companyUrl"
      :href="experience.companyUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-cyan-600 dark:text-accent-cyan hover:text-cyan-700 dark:hover:text-accent-cyan/80 font-medium transition-colors"
    >
      {{ experience.company }}
    </a>
    <span v-else class="text-cyan-600 dark:text-accent-cyan font-medium">{{ experience.company }}</span>

    <!-- Highlights -->
    <ul class="mt-3 space-y-2">
      <li
        v-for="(highlight, index) in experience.highlights"
        :key="index"
        class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
      >
        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
        <span>{{ highlight }}</span>
      </li>
    </ul>
  </div>
</template>
