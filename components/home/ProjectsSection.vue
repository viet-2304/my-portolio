<script setup lang="ts">
import { projects } from '~/data/projects'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Fullstack' },
  { key: 'open-source', label: 'Open Source' },
]

const activeCategory = ref('all')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <section id="projects" class="section-padding bg-slate-50 dark:bg-slate-900/50">
    <div class="container-content">
      <SectionHeading
        title="Projects"
        subtitle="A selection of projects I've built and contributed to"
      />

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.key"
          class="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
          :class="activeCategory === cat.key
            ? 'bg-blue-600 text-white'
            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'"
          @click="activeCategory = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
