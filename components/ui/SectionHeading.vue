<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  label?: string
  align?: 'center' | 'left'
}>()
</script>

<template>
  <div :class="align === 'left' ? 'text-left' : 'text-center'" class="mb-12">
    <p v-if="label" class="section-label">{{ label }}</p>
    <h2 class="text-3xl md:text-4xl font-bold text-white">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-lg text-slate-400 max-w-2xl" :class="align === 'left' ? '' : 'mx-auto'">
      {{ subtitle }}
    </p>
  </div>
</template>
