<script setup lang="ts">
import { socials } from '~/data/socials'

const navLinks = [
  { label: 'Home', href: '#hero', icon: 'mdi:home-outline' },
  { label: 'About', href: '#about', icon: 'mdi:account-outline' },
  { label: 'Experience', href: '#experience', icon: 'mdi:briefcase-outline' },
  { label: 'Projects', href: '#projects', icon: 'mdi:code-braces' },
  { label: 'Skills', href: '#skills', icon: 'mdi:lightbulb-outline' },
  { label: 'Contact', href: '#contact', icon: 'mdi:email-outline' },
]

const activeSection = ref('hero')
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Track active section on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-40% 0px -60% 0px' }
  )

  // Observe all sections after DOM is ready
  setTimeout(() => {
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))
  }, 500)
})
</script>

<template>
  <!-- Desktop Sidebar -->
  <aside class="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 xl:w-64 z-50 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
    <!-- Logo -->
    <div class="flex items-center justify-center xl:justify-start xl:px-6 h-20 border-b border-slate-200 dark:border-slate-800">
      <a href="#hero" class="text-xl font-bold text-blue-600">
        <span class="hidden xl:inline">&lt;Nemo /&gt;</span>
        <span class="xl:hidden">N</span>
      </a>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 py-6 px-3 xl:px-4 space-y-1">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group"
        :class="activeSection === link.href.slice(1)
          ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400'
          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'"
      >
        <Icon
          :name="link.icon"
          size="20"
          class="shrink-0 mx-auto xl:mx-0"
        />
        <span class="hidden xl:inline">{{ link.label }}</span>
      </a>
    </nav>

    <!-- Bottom Section: Theme + Socials -->
    <div class="py-4 px-3 xl:px-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
      <!-- Social Links (expanded only) -->
      <div class="hidden xl:flex items-center justify-center gap-2">
        <a
          v-for="social in socials"
          :key="social.platform"
          :href="social.url"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Icon :name="social.icon" size="18" />
        </a>
      </div>

      <!-- Theme Toggle -->
      <div class="flex justify-center">
        <ThemeToggle />
      </div>
    </div>
  </aside>

  <!-- Mobile Top Bar -->
  <header class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="flex items-center justify-between h-14 px-4">
      <a href="#hero" class="text-lg font-bold text-blue-600">
        &lt;Nemo /&gt;
      </a>
      <div class="flex items-center gap-2">
        <ThemeToggle />
        <button
          aria-label="Toggle menu"
          class="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          @click="toggleMobileMenu"
        >
          <Icon :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" size="22" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg"
      >
        <nav class="px-4 py-3 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
            :class="activeSection === link.href.slice(1)
              ? 'bg-blue-600/10 text-blue-600'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
            @click="closeMobileMenu"
          >
            <Icon :name="link.icon" size="18" />
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
