<script setup lang="ts">
import type { Skill } from '~/data/skills'

defineProps<{
  skill: Skill
}>()
</script>

<template>
  <div class="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
    <Icon :name="skill.icon" size="18" />
    <span>{{ skill.name }}</span>
  </div>
</template>
