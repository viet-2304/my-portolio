<script setup lang="ts">
const profile = useProfile()
</script>

<template>
  <section id="hero" class="section-padding min-h-screen flex items-center">
    <div class="container-content w-full">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Status badge -->
        <p class="section-label mb-6">
          Available for New Opportunities
        </p>

        <!-- Name with gradient -->
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight">
          &lt;{{ profile.name }}/&gt;
        </h1>

        <!-- Title -->
        <h2 class="mt-4 text-xl md:text-2xl italic text-slate-600 dark:text-slate-400">
          {{ profile.title }}
        </h2>

        <!-- Description -->
        <p class="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Building scalable web applications and seamless user experiences
          with precision engineering and creative flair.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" class="btn-primary">
            View Projects
          </a>
          <a href="#contact" class="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
