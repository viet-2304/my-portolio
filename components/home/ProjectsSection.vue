<script setup lang="ts">
import { projects, type Project } from '~/data/projects'

const featuredProjects = computed(() => projects.filter(p => p.featured))

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const openProject = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <section id="projects" class="section-padding">
    <div class="container-content">
      <!-- Header -->
      <div class="mb-12">
        <p class="section-label">Portfolio</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
          Featured Works
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
          @click="openProject(project)"
        />
      </div>
    </div>

    <!-- Detail Modal -->
    <ProjectDetailModal
      :project="selectedProject"
      :open="isModalOpen"
      @close="closeModal"
    />
  </section>
</template>
