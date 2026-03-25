<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
}>()

const { t } = useLanguage()
const { withBase } = useBaseUrl()

const projectKeyMap: Record<string, string> = {
  'proj-1': 'proj1',
  'proj-2': 'proj2',
  'proj-3': 'proj3',
  'proj-4': 'proj4',
}

const i18nKey = computed(() => projectKeyMap[props.project.id])
</script>

<template>
  <div class="card group overflow-hidden">
    <!-- Thumbnail -->
    <div class="relative aspect-video bg-slate-200 dark:bg-dark-200 rounded-lg mb-4 overflow-hidden">
      <img
        :src="withBase(project.thumbnail)"
        :alt="i18nKey ? t(`projects.${i18nKey}.title`) : project.title"
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
      {{ i18nKey ? t(`projects.${i18nKey}.title`) : project.title }}
    </h3>
    <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
      {{ i18nKey ? t(`projects.${i18nKey}.description`) : project.description }}
    </p>

    <!-- Live Demo link -->
    <a
      v-if="project.liveUrl"
      :href="project.liveUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm font-medium text-cyan-600 dark:text-accent-cyan hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
    >
      {{ t('projects.liveDemo') }}
      <Icon name="mdi:open-in-new" size="14" />
    </a>
  </div>
</template>
