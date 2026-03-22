<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <div
    class="card-hover group overflow-hidden cursor-pointer"
    @click="emit('click')"
  >
    <!-- Thumbnail -->
    <div class="relative aspect-video bg-slate-200 dark:bg-dark-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
      <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5" />
      <Icon name="mdi:image-outline" size="48" class="text-slate-300 dark:text-slate-700" />
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
    <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-accent-cyan transition-colors">
      {{ project.title }}
    </h3>
    <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
      {{ project.description }}
    </p>
  </div>
</template>
