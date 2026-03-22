<script setup lang="ts">
const { socials } = useProfile()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-800/50">
    <div class="container-content px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Copyright -->
        <p class="text-xs tracking-wider uppercase text-accent-cyan">
          &copy; {{ currentYear }} FullstackDev | Engineered with Precision
        </p>

        <!-- Links -->
        <div class="flex items-center gap-6">
          <a
            v-for="social in socials"
            :key="social.platform"
            :href="social.url"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs tracking-wider uppercase text-slate-400 hover:text-accent-cyan transition-colors"
          >
            {{ social.platform }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
