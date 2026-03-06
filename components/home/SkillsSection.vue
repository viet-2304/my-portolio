<script setup lang="ts">
import { skills, skillCategories } from '~/data/skills'

const getSkillsByCategory = (category: string) =>
  skills.filter(s => s.category === category)
</script>

<template>
  <section id="skills" class="section-padding">
    <div class="container-content">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Tools and technologies I use to bring ideas to life"
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.key"
          class="card"
        >
          <div class="flex items-center gap-2 mb-4">
            <Icon :name="category.icon" size="20" class="text-blue-600" />
            <h3 class="font-semibold text-slate-900 dark:text-white">
              {{ category.label }}
            </h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <SkillBadge
              v-for="skill in getSkillsByCategory(category.key)"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
