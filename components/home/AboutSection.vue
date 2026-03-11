<script setup lang="ts">
const { about } = useProfile()
</script>

<template>
  <section id="about" class="section-padding bg-slate-50 dark:bg-slate-900/50">
    <div class="container-content">
      <SectionHeading
        title="About Me"
        subtitle="A brief introduction about who I am and what I do"
      />

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Bio -->
        <div class="space-y-4">
          <p
            v-for="(paragraph, index) in about.bio"
            :key="index"
            class="text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {{ paragraph }}
          </p>

          <!-- Tech Stack Icons -->
          <div class="pt-4">
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
              Tech I work with daily:
            </p>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="tech in about.techIcons"
                :key="tech.name"
                class="p-2.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                :title="tech.name"
              >
                <Icon :name="tech.icon" size="24" />
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6">
          <StatCounter
            v-for="stat in about.stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
            :suffix="stat.suffix"
          />
        </div>
      </div>
    </div>
  </section>
</template>
