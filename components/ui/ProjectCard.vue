<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="card group overflow-hidden">
    <!-- Thumbnail -->
    <div class="relative aspect-video bg-slate-200 dark:bg-dark-200 rounded-lg mb-4 overflow-hidden">
      <img
        :src="project.thumbnail"
        :alt="project.title"
        class="w-full h-full object-cover object-top"
      />
    </div>

    <!-- Tech tags -->
    <div class="flex flex-wrap gap-2 mb-3">
      <span
        v-for="tech in project.techStack.slice(0, 3)"
        :key="tech"
        class="text-xs px-2.5 py-1 bg-cyan-100 dark:bg-accent-cyan/10 text-cyan-600 dark:text-accent-cyan rounded font-medium tracking-wide uppercase"
      >
        {{ tech }}
      </span>
    </div>

    <!-- Content -->
    <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">
      {{ project.title }}
    </h3>
    <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
      {{ project.description }}
    </p>

    <!-- Live Demo link -->
    <a
      v-if="project.liveUrl"
      :href="project.liveUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm font-medium text-cyan-600 dark:text-accent-cyan hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
    >
      Live Demo
      <Icon name="mdi:open-in-new" size="14" />
    </a>
  </div>
</template>
