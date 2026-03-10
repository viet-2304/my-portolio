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
    { rootMargin: '-80px 0px -60% 0px' }
  )

  // Observe all sections after DOM is ready
  setTimeout(() => {
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))
  }, 500)
})
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
      <!-- Logo -->
      <a href="#hero" class="text-lg font-bold text-blue-600 shrink-0" @click="closeMobileMenu">
        &lt;Nemo /&gt;
      </a>

      <!-- Desktop nav links -->
      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
          :class="activeSection === link.href.slice(1)
            ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400'
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right side: socials + theme toggle + hamburger -->
      <div class="flex items-center gap-2">
        <!-- Desktop social icons -->
        <div class="hidden md:flex items-center gap-1">
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

        <!-- Theme toggle -->
        <ThemeToggle />

        <!-- Mobile hamburger -->
        <button
          aria-label="Toggle menu"
          class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          @click="toggleMobileMenu"
        >
          <Icon :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" size="22" />
        </button>
      </div>
    </div>

    <!-- Mobile dropdown menu -->
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
        class="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg"
      >
        <nav class="px-4 py-3 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
            :class="activeSection === link.href.slice(1)
              ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
            @click="closeMobileMenu"
          >
            <Icon :name="link.icon" size="18" />
            {{ link.label }}
          </a>
        </nav>
        <div class="flex items-center justify-center gap-3 px-4 py-3 border-t border-slate-200 dark:border-slate-800">
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
      </div>
    </Transition>
  </header>
</template>
