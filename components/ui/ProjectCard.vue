<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="card-hover group overflow-hidden">
    <!-- Thumbnail -->
    <div class="relative aspect-video bg-dark-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
      <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5" />
      <Icon name="mdi:image-outline" size="48" class="text-slate-700" />
    </div>

    <!-- Tech tags -->
    <div class="flex flex-wrap gap-2 mb-3">
      <span
        v-for="tech in project.techStack.slice(0, 3)"
        :key="tech"
        class="text-xs px-2.5 py-1 bg-accent-cyan/10 text-accent-cyan rounded font-medium tracking-wide uppercase"
      >
        {{ tech }}
      </span>
    </div>

    <!-- Content -->
    <h3 class="text-lg font-semibold text-white mb-2">
      {{ project.title }}
    </h3>
    <p class="text-sm text-slate-400 mb-4 line-clamp-2">
      {{ project.description }}
    </p>

    <!-- Links -->
    <div class="flex items-center gap-4">
      <a
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
      >
        <Icon name="mdi:open-in-new" size="16" />
        Live Demo
      </a>
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
      >
        <Icon name="mdi:code-tags" size="16" />
        Source
      </a>
    </div>
  </div>
</template>
