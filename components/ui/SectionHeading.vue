<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
    <div class="mt-4 w-16 h-1 bg-blue-600 rounded-full mx-auto" />
  </div>
</template>
