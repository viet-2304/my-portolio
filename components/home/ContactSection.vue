<script setup lang="ts">
const { email, phone, socials } = useProfile()
const { form, errors, isSubmitting, isSubmitted, submitForm, resetForm } = useContactForm()
</script>

<template>
  <section id="contact" class="section-padding">
    <div class="container-content">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
        <!-- Contact Info (left) -->
        <div>
          <p class="section-label">Get in Touch</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's build something extraordinary
          </h2>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <!-- Email -->
          <div class="flex items-center gap-4 mb-5">
            <div class="p-3 bg-cyan-100 dark:bg-accent-cyan/10 rounded-lg">
              <Icon name="mdi:email-outline" size="20" class="text-cyan-600 dark:text-accent-cyan" />
            </div>
            <div>
              <p class="text-xs tracking-wider uppercase text-slate-500">Email</p>
              <a :href="`mailto:${email}`" class="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-accent-cyan transition-colors">
                {{ email }}
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div v-if="phone" class="flex items-center gap-4 mb-8">
            <div class="p-3 bg-cyan-100 dark:bg-accent-cyan/10 rounded-lg">
              <Icon name="mdi:phone-outline" size="20" class="text-cyan-600 dark:text-accent-cyan" />
            </div>
            <div>
              <p class="text-xs tracking-wider uppercase text-slate-500">Phone</p>
              <a :href="`tel:${phone}`" class="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-accent-cyan transition-colors">
                {{ phone }}
              </a>
            </div>
          </div>

          <!-- Social icons -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.platform"
              :href="social.url"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center border border-slate-300 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-accent-cyan hover:border-cyan-600 dark:hover:border-accent-cyan/30 transition-all"
            >
              <Icon :name="social.icon" size="18" />
            </a>
          </div>
        </div>

        <!-- Contact Form (right) -->
        <div class="card">
          <!-- Success Message -->
          <div v-if="isSubmitted" class="text-center py-8">
            <Icon name="mdi:check-circle" size="48" class="text-cyan-600 dark:text-accent-cyan mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Message Sent!
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button class="btn-outline" @click="resetForm">
              Send Another Message
            </button>
          </div>

          <!-- Form -->
          <form v-else class="space-y-5" @submit.prevent="submitForm">
            <!-- Name + Email row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-xs tracking-wider uppercase text-slate-500 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  class="w-full px-4 py-3 bg-white dark:bg-dark border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-cyan-600 dark:focus:ring-accent-cyan focus:border-cyan-600 dark:focus:border-accent-cyan outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600"
                >
                <p v-if="errors.name" class="mt-1 text-xs text-red-400">{{ errors.name }}</p>
              </div>

              <div>
                <label for="email" class="block text-xs tracking-wider uppercase text-slate-500 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 bg-white dark:bg-dark border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-cyan-600 dark:focus:ring-accent-cyan focus:border-cyan-600 dark:focus:border-accent-cyan outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600"
                >
                <p v-if="errors.email" class="mt-1 text-xs text-red-400">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-xs tracking-wider uppercase text-slate-500 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="How can I help you?"
                class="w-full px-4 py-3 bg-white dark:bg-dark border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-cyan-600 dark:focus:ring-accent-cyan focus:border-cyan-600 dark:focus:border-accent-cyan outline-none transition-all resize-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600"
              />
              <p v-if="errors.message" class="mt-1 text-xs text-red-400">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary w-full"
            >
              <Icon v-if="isSubmitting" name="mdi:loading" size="18" class="animate-spin" />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
