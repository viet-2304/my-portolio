<script setup lang="ts">
const { t } = useLanguage()

const navLinks = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
]

const activeSection = ref('hero')
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

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

  setTimeout(() => {
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))
  }, 500)
})
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50">
    <div class="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
      <!-- Logo -->
      <a href="#hero" class="text-lg font-bold italic text-cyan-600 dark:text-accent-cyan shrink-0" @click="closeMobileMenu">
        FullstackDev
      </a>

      <!-- Desktop nav links -->
      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-2 text-sm font-medium transition-all duration-200"
          :class="activeSection === link.href.slice(1)
            ? 'text-slate-900 dark:text-white border-b-2 border-cyan-600 dark:border-accent-cyan'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
        >
          {{ t(link.key) }}
        </a>
      </nav>

      <!-- Right side: theme toggle + hamburger -->
      <div class="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />

        <!-- Mobile hamburger -->
        <button
          aria-label="Toggle menu"
          class="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
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
        class="md:hidden bg-white dark:bg-dark-100 border-t border-slate-200 dark:border-slate-800/50 shadow-lg"
      >
        <nav class="px-4 py-3 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
            :class="activeSection === link.href.slice(1)
              ? 'text-cyan-600 dark:text-accent-cyan bg-cyan-50 dark:bg-accent-cyan/5'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'"
            @click="closeMobileMenu"
          >
            {{ t(link.key) }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
