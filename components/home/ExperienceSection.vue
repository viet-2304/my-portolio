<script setup lang="ts">
import { experiences } from '~/data/experience'
const { education, certifications } = useProfile()
</script>

<template>
  <section id="experience" class="section-padding">
    <div class="container-content">
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <!-- Experience (left, wider) -->
        <div class="lg:col-span-3">
          <p class="section-label">Journey</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Experience
          </h2>

          <div>
            <TimelineItem
              v-for="(exp, index) in experiences"
              :key="exp.id"
              :experience="exp"
              :is-first="index === 0"
            />
          </div>
        </div>

        <!-- Education (right, narrower) -->
        <div class="lg:col-span-2">
          <p class="section-label">Foundations</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Education
          </h2>

          <!-- Education card -->
          <div class="card relative overflow-hidden">
            <!-- Decorative icon -->
            <div class="absolute top-4 right-4 opacity-10">
              <Icon name="mdi:school-outline" size="64" class="text-slate-600 dark:text-slate-400" />
            </div>

            <p class="text-sm text-slate-500 uppercase tracking-wider mb-1">
              {{ education.startDate }} — {{ education.endDate }}
            </p>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-2">
              {{ education.major }}
            </h3>
            <p class="text-cyan-600 dark:text-accent-cyan font-medium mt-1">
              {{ education.school }}
            </p>

            <!-- Certifications -->
            <div v-if="certifications?.length" class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700/50">
              <p class="text-xs tracking-wider uppercase text-slate-500 mb-3">Certifications</p>
              <div
                v-for="cert in certifications"
                :key="cert.name"
                class="flex items-center gap-3"
              >
                <Icon :name="cert.icon" size="18" class="text-cyan-600 dark:text-accent-cyan" />
                <span class="text-slate-600 dark:text-slate-300 text-sm">{{ cert.name }}</span>
                <span class="text-cyan-600 dark:text-accent-cyan text-sm font-medium ml-auto">{{ cert.score }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
