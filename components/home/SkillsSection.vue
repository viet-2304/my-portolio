<script setup lang="ts">
import { skills, skillCategories } from '~/data/skills'

const getSkillsByCategory = (category: string) =>
  skills.filter(s => s.category === category)
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
          <div class="flex items-center gap-2 mb-5">
            <Icon :name="category.icon" size="22" class="text-accent-cyan" />
            <h3 class="font-semibold text-white text-lg">
              {{ category.label }}
            </h3>
          </div>

          <!-- Skills list -->
          <ul class="space-y-2.5">
            <li
              v-for="skill in getSkillsByCategory(category.key)"
              :key="skill.name"
              class="flex items-center gap-2 text-sm text-slate-400"
            >
              <Icon
                v-if="skill.icon"
                :name="skill.icon"
                size="16"
                class="shrink-0"
              />
              <span
                v-else
                class="w-4 h-4 flex items-center justify-center shrink-0"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan/60" />
              </span>
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
