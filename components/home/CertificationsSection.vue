<script setup lang="ts">
const { education, certifications } = useProfile()
</script>

<template>
  <section id="certifications" class="section-padding bg-slate-50 dark:bg-slate-900/50">
    <div class="container-content">
      <SectionHeading
        title="Education & Certifications"
        subtitle="My academic background and professional certifications"
      />

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Education -->
        <div class="card">
          <div class="flex items-start gap-4">
            <div class="p-3 bg-blue-600/10 rounded-lg shrink-0">
              <Icon name="mdi:school-outline" size="24" class="text-blue-600" />
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-white text-lg">
                {{ education.school }}
              </h3>
              <p class="mt-1 text-blue-600 font-medium">
                {{ education.major }}
              </p>
              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {{ education.startDate }} — {{ education.endDate }}
              </p>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="space-y-4">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="card"
          >
            <div class="flex items-center gap-4">
              <div class="p-3 bg-blue-600/10 rounded-lg shrink-0">
                <Icon :name="cert.icon" size="24" class="text-blue-600" />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 dark:text-white text-lg">
                  {{ cert.name }}
                </h3>
                <p class="mt-1 text-slate-500 dark:text-slate-400">
                  Score: <span class="text-blue-600 font-medium">{{ cert.score }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
