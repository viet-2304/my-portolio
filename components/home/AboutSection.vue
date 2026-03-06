<script setup lang="ts">
const stats = [
  { value: 3, label: 'Years Experience', suffix: '+' },
  { value: 15, label: 'Projects Completed', suffix: '+' },
  { value: 10, label: 'Technologies', suffix: '+' },
]

const techIcons = [
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
]
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
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm a passionate Fullstack Developer based in Ho Chi Minh City, Vietnam.
            I specialize in building modern, performant web applications with Vue.js, Nuxt,
            and Node.js. I love turning complex problems into simple, elegant solutions.
          </p>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            With over 3 years of professional experience, I've worked on diverse projects
            ranging from e-commerce platforms to real-time collaboration tools. I'm always
            eager to learn new technologies and take on challenging projects that push my
            skills to the next level.
          </p>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            When I'm not coding, you can find me exploring new tech, contributing to
            open-source projects, or writing about web development best practices.
          </p>

          <!-- Tech Stack Icons -->
          <div class="pt-4">
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
              Tech I work with daily:
            </p>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="tech in techIcons"
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
            v-for="stat in stats"
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
