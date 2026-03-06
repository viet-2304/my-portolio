<script setup lang="ts">
const props = defineProps<{
  value: number
  label: string
  suffix?: string
}>()

const displayValue = ref(0)

onMounted(() => {
  const duration = 1500
  const steps = 40
  const increment = props.value / steps
  let current = 0
  const interval = setInterval(() => {
    current += increment
    if (current >= props.value) {
      displayValue.value = props.value
      clearInterval(interval)
    }
    else {
      displayValue.value = Math.floor(current)
    }
  }, duration / steps)
})
</script>

<template>
  <div class="text-center">
    <div class="text-3xl md:text-4xl font-bold text-blue-600">
      {{ displayValue }}{{ suffix }}
    </div>
    <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">
      {{ label }}
    </div>
  </div>
</template>
