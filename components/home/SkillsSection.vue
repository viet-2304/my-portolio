<script setup lang="ts">
import { skills, skillCategories } from '~/data/skills'

const { t } = useLanguage()

const getSkillsByCategory = (category: string) =>
  skills.filter(s => s.category === category)

const categoryLabelKeys: Record<string, string> = {
  frontend: 'skills.frontend',
  backend: 'skills.backend',
  database: 'skills.database',
  tools: 'skills.tools',
}
</script>

<template>
  <section id="skills" class="section-padding">
    <div class="container-content">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="section-label">{{ t('skills.label') }}</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
          {{ t('skills.heading') }}
        </h2>
      </div>

      <!-- Skill cards grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.key"
          class="card"
        >
          <!-- Category header -->
          <div class="flex items-center gap-2 mb-5">
            <Icon :name="category.icon" size="22" class="text-cyan-600 dark:text-accent-cyan" />
            <h3 class="font-semibold text-slate-900 dark:text-white text-lg">
              {{ t(categoryLabelKeys[category.key]) }}
            </h3>
          </div>

          <!-- Skills icon grid -->
          <div class="flex flex-wrap gap-3">
            <div
              v-for="skill in getSkillsByCategory(category.key)"
              :key="skill.name"
              class="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-dark-300 hover:bg-cyan-50 dark:hover:bg-accent-cyan/10 transition-colors cursor-default"
            >
              <Icon
                :name="skill.icon"
                size="22"
                class="shrink-0"
              />
              <!-- Tooltip -->
              <span class="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-slate-800 dark:bg-dark-400 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
