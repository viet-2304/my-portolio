<script setup lang="ts">
const { isDark, toggleTheme, themeIcon, themeLabel } = useTheme()
</script>

<template>
  <button
    :aria-label="themeLabel"
    class="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    @click="toggleTheme"
  >
    <Icon :name="themeIcon" size="20" />
  </button>
</template>
