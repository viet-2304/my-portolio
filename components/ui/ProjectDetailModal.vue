<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project | null
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

watch(() => props.open, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open && project"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click="handleBackdropClick"
      >
        <!-- Modal content -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="open"
            class="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-dark-100 border border-slate-700/50 rounded-2xl p-6 sm:p-8"
          >
            <!-- Close button -->
            <button
              class="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
              @click="emit('close')"
            >
              <Icon name="mdi:close" size="20" />
            </button>

            <!-- Project thumbnail -->
            <div class="aspect-video bg-dark-200 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
              <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5" />
              <Icon name="mdi:image-outline" size="64" class="text-slate-700" />
            </div>

            <!-- Tech tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-xs px-2.5 py-1 bg-accent-cyan/10 text-accent-cyan rounded font-medium tracking-wide uppercase"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">
              {{ project.title }}
            </h2>

            <!-- Description -->
            <p class="text-slate-400 leading-relaxed mb-6">
              {{ project.longDescription || project.description }}
            </p>

            <!-- Responsibilities -->
            <div v-if="project.responsibilities?.length">
              <h3 class="text-sm tracking-wider uppercase text-slate-500 mb-3">
                Key Responsibilities
              </h3>
              <ul class="space-y-2 mb-6">
                <li
                  v-for="(item, index) in project.responsibilities"
                  :key="index"
                  class="flex items-start gap-2 text-sm text-slate-400"
                >
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/60 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Links -->
            <div class="flex items-center gap-4 pt-4 border-t border-slate-700/50">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-outline text-sm py-2 px-4"
              >
                <Icon name="mdi:github" size="16" />
                Source Code
              </a>
              <span class="text-xs text-slate-600">{{ project.date }}</span>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
