<template>
  <div class="min-h-screen">
    <AppHeader />
    <!-- Main content: offset for sidebar on desktop, offset for top bar on mobile -->
    <main class="lg:ml-20 xl:ml-64 pt-14 lg:pt-0">
      <slot />
      <AppFooter />
    </main>
  </div>
</template>
