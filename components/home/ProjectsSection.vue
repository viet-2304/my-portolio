<script setup lang="ts">
import { projects } from '~/data/projects'

const featuredProjects = computed(() => projects.filter(p => p.featured))
</script>

<template>
  <section id="projects" class="section-padding">
    <div class="container-content">
      <!-- Header row -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
        <div>
          <p class="section-label">Portfolio</p>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Featured Works
          </h2>
        </div>
        <a
          href="#projects"
          class="mt-4 sm:mt-0 flex items-center gap-1.5 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
        >
          See all projects
          <Icon name="mdi:arrow-right" size="16" />
        </a>
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
