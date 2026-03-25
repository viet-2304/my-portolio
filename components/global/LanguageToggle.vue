<script setup lang="ts">
const { locale } = useLanguage()

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'vi' : 'en'
}
</script>

<template>
  <button
    aria-label="Toggle language"
    class="flex items-center gap-0.5 px-2 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
    @click="toggleLocale"
  >
    <span
      :class="locale === 'vi' ? 'text-cyan-600 dark:text-accent-cyan' : 'text-slate-400 dark:text-slate-500'"
    >
      VI
    </span>
    <span class="text-slate-300 dark:text-slate-600">/</span>
    <span
      :class="locale === 'en' ? 'text-cyan-600 dark:text-accent-cyan' : 'text-slate-400 dark:text-slate-500'"
    >
      EN
    </span>
  </button>
</template>
