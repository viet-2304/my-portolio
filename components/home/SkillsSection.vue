<script setup lang="ts">
import { skills, skillCategories, techIcons } from '~/data/skills'

const getSkillsByCategory = (category: string) =>
  skills.filter(s => s.category === category).slice(0, 3)

const getCategoryColor = (category: string) => {
  const cat = skillCategories.find(c => c.key === category)
  return cat?.colorClass || 'progress-cyan'
}
</script>

<template>
  <section id="skills" class="section-padding">
    <div class="container-content">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="section-label">Capabilities</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Technical Arsenal
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
          <div class="flex items-center gap-2 mb-6">
            <Icon :name="category.icon" size="22" class="text-accent-cyan" />
            <h3 class="font-semibold text-white text-lg">
              {{ category.label }}
            </h3>
          </div>

          <!-- Skills with progress bars -->
          <div class="space-y-4">
            <div
              v-for="skill in getSkillsByCategory(category.key)"
              :key="skill.name"
            >
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs tracking-wider uppercase text-slate-400">
                  {{ skill.name }}
                </span>
                <span class="text-xs text-slate-500">
                  {{ skill.proficiency }}%
                </span>
              </div>
              <div class="progress-track">
                <div
                  class="progress-bar"
                  :class="getCategoryColor(category.key)"
                  :style="{ width: `${skill.proficiency}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech icons row -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-8">
        <div
          v-for="tech in techIcons"
          :key="tech.name"
          class="opacity-40 hover:opacity-100 transition-opacity"
          :title="tech.name"
        >
          <Icon :name="tech.icon" size="28" />
        </div>
      </div>
    </div>
  </section>
</template>
