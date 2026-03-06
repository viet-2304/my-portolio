<script setup lang="ts">
import { socials } from '~/data/socials'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
    <div class="container-content px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Logo & Copyright -->
        <div class="text-center md:text-left">
          <a href="#" class="text-lg font-bold text-blue-600">&lt;Nemo /&gt;</a>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            &copy; {{ currentYear }} Nemo. All rights reserved.
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in socials"
            :key="social.platform"
            :href="social.url"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Icon :name="social.icon" size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
