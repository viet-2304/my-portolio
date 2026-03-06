<script setup lang="ts">
import type { Experience } from '~/data/experience'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <div class="relative pl-8 pb-10 last:pb-0 border-l-2 border-slate-200 dark:border-slate-700">
    <!-- Timeline dot -->
    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-slate-950" />

    <div class="card">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
        <div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
            {{ experience.role }}
          </h3>
          <a
            v-if="experience.companyUrl"
            :href="experience.companyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-700 font-medium"
          >
            {{ experience.company }}
          </a>
          <span v-else class="text-blue-600 font-medium">{{ experience.company }}</span>
        </div>
        <div class="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
          {{ experience.startDate }} — {{ experience.endDate }}
        </div>
      </div>

      <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">
        <Icon name="mdi:map-marker-outline" size="14" class="inline" />
        {{ experience.location }}
      </p>

      <ul class="space-y-2">
        <li
          v-for="(highlight, index) in experience.highlights"
          :key="index"
          class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
        >
          <Icon name="mdi:check-circle" size="16" class="text-blue-600 mt-0.5 shrink-0" />
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
