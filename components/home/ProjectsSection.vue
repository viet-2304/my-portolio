<script setup lang="ts">
import { projects } from '~/data/projects'

const { t } = useLanguage()

const featuredProjects = computed(() => projects.filter(p => p.featured))
</script>

<template>
  <section id="projects" class="section-padding">
    <div class="container-content">
      <!-- Header -->
      <div class="mb-12">
        <p class="section-label">{{ t('projects.label') }}</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
          {{ t('projects.heading') }}
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
