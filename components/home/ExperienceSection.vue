<script setup lang="ts">
import { experiences } from '~/data/experience'
</script>

<template>
  <section id="experience" class="section-padding">
    <div class="container-content">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and career highlights"
      />

      <div class="max-w-3xl mx-auto">
        <TimelineItem
          v-for="exp in experiences"
          :key="exp.id"
          :experience="exp"
        />
      </div>
    </div>
  </section>
</template>
