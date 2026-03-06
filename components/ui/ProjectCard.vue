<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="card-hover group overflow-hidden">
    <!-- Thumbnail placeholder -->
    <div class="relative h-48 bg-gradient-to-br from-blue-600/10 to-blue-600/5 dark:from-blue-600/20 dark:to-blue-600/10 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
      <Icon name="mdi:code-braces" size="48" class="text-blue-600/30" />

      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-blue-600/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform"
          aria-label="View live demo"
        >
          <Icon name="mdi:open-in-new" size="20" />
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform"
          aria-label="View source code"
        >
          <Icon name="mdi:github" size="20" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">
      {{ project.title }}
    </h3>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
      {{ project.description }}
    </p>

    <!-- Tech tags -->
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in project.techStack"
        :key="tech"
        class="text-xs px-2 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded font-medium"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
