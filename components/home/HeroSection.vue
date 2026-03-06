<script setup lang="ts">
import { socials } from '~/data/socials'

const typedText = ref('')
const fullText = 'Building clean, performant web experiences.'
const showCursor = ref(true)

onMounted(() => {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index]
      index++
    }
    else {
      clearInterval(interval)
      // Blink cursor after typing finishes
      setInterval(() => {
        showCursor.value = !showCursor.value
      }, 500)
    }
  }, 40)
})
</script>

<template>
  <section id="hero" class="section-padding min-h-screen lg:min-h-screen flex items-center">
    <div class="container-content">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div>
          <!-- Terminal Easter Egg -->
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-slate-900 dark:bg-slate-800 text-green-400 rounded-lg font-mono text-sm">
            <span class="text-slate-500">$</span>
            <span>whoami</span>
            <span class="text-slate-500">→</span>
            <span class="text-white">Nemo</span>
            <span class="text-slate-500">|</span>
            <span class="text-blue-400">Developer</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span class="text-blue-600">Nemo</span>
          </h1>
          <h2 class="mt-3 text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">
            Fullstack Developer
          </h2>

          <!-- Typed tagline -->
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300 font-mono h-7">
            {{ typedText }}<span
              class="inline-block w-0.5 h-5 bg-blue-600 ml-0.5 align-middle"
              :class="{ 'opacity-0': !showCursor }"
            />
          </p>

          <!-- CTA Buttons -->
          <div class="mt-8 flex flex-wrap gap-4">
            <a href="/resume.pdf" download class="btn-primary">
              <Icon name="mdi:download" size="18" />
              Download CV
            </a>
            <a href="#contact" class="btn-outline">
              <Icon name="mdi:email-outline" size="18" />
              Get in Touch
            </a>
          </div>

          <!-- Social Links -->
          <div class="mt-8 flex items-center gap-4">
            <a
              v-for="social in socials"
              :key="social.platform"
              :href="social.url"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Icon :name="social.icon" size="22" />
            </a>
          </div>
        </div>

        <!-- Avatar / Visual -->
        <div class="hidden md:flex justify-center">
          <div class="relative w-72 h-72 lg:w-80 lg:h-80">
            <!-- Decorative ring -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-600/5 animate-pulse" />
            <!-- Avatar circle -->
            <div class="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <span class="text-7xl lg:text-8xl font-bold text-white">N</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
